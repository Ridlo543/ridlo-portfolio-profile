// Sakuga VFX engine adapted from finktheartist/sakuga-vfx (MIT License).
// Draws spring-driven squash/stretch and procedural canvas effects (bursts, puffs, shards, wedges, glints, rings, SFX).

const TAU = Math.PI * 2;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const rnd = (a = 1, b?: number) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
const out = (t: number) => 1 - (1 - t) ** 3;
const inn = (t: number) => t * t * t;
const back = (t: number) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2;

export class Spring {
  x: number;
  v = 0;
  to: number;
  k: number;
  d: number;

  constructor(x = 0, k = 300, d = 20) {
    this.x = x;
    this.to = x;
    this.k = k;
    this.d = d;
  }

  step(dt: number) {
    if (!(dt > 0)) return this.x;
    for (let n = Math.ceil(dt / 0.008), h = dt / n; n--; ) {
      this.v += (-this.k * (this.x - this.to) - this.d * this.v) * h;
      this.x += this.v * h;
    }
    return this.x;
  }
}

type Palette = {
  fill: string;
  shade: string;
  line: string;
  accent: string;
  ink: string;
  sfx: [string, string];
};

function getPalette(): Palette {
  const isDark = document.documentElement.dataset.theme === "dark";
  if (isDark) {
    return {
      fill: "#211d4a",
      shade: "#5a4fd8",
      line: "#9d9bff",
      accent: "#ff5fa8",
      ink: "#f4f3fc",
      sfx: ["#f4f3fc", "#1d1a4a"],
    };
  }
  return {
    fill: "#ffffff",
    shade: "#b8b3ff",
    line: "#5a4fd8",
    accent: "#ff5fa8",
    ink: "#1d1a4a",
    sfx: ["#ffffff", "#1d1a4a"],
  };
}

type Particle = {
  t: number;
  life: number;
  dead?: boolean;
  draw: (k: number, t: number, dt: number) => void;
};

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let dpr = 1;
let live: Particle[] = [];
let dirty = false;
let running = false;
let last = 0;
const frames = new Set<(dt: number) => void>();

const reduceQuery = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
let calm = reduceQuery?.matches ?? false;
reduceQuery?.addEventListener?.("change", (e) => {
  calm = e.matches;
});

function ensureCanvas() {
  if (canvas || typeof document === "undefined" || !document.body) return;
  canvas = document.createElement("canvas");
  canvas.className = "sakuga-fx";
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:2147483000;";
  document.body.append(canvas);
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
}

function resizeCanvas() {
  if (!canvas) return;
  dpr = Math.min(2.5, window.devicePixelRatio || 1);
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
}

function startLoop() {
  if (running) return;
  running = true;
  last = performance.now();
  requestAnimationFrame(loop);
}

function loop(ms: number) {
  if (!running) return;
  const dt = clamp((ms - last) / 1000, 0, 0.034);
  last = ms;

  for (const fn of frames) fn(dt);

  if (ctx && canvas && (live.length || dirty)) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    ctx.translate(-window.scrollX, -window.scrollY);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    live = live.filter((p) => !p.dead && (p.t += dt) < p.life);
    for (const p of live) {
      ctx.save();
      p.draw(p.t / p.life, p.t, dt);
      ctx.restore();
    }
    dirty = live.length > 0;
  }

  if (!frames.size && !live.length && !dirty) {
    running = false;
    return;
  }
  requestAnimationFrame(loop);
}

function add(life: number, draw: (k: number, t: number, dt: number) => void) {
  if (calm) return;
  ensureCanvas();
  live.push({ t: 0, life, draw });
  startLoop();
}

function blob(
  g: CanvasRenderingContext2D,
  P: Palette,
  cs: [number, number, number][],
  lw = 1.5,
  { lx = -1, arcs = false, deep = 1 } = {},
) {
  const u = new Path2D();
  for (const [x, y, r] of cs) {
    if (r > 0.3) {
      u.moveTo(x + r, y);
      u.arc(x, y, r, 0, TAU);
    }
  }
  g.save();
  g.lineWidth = lw * 2;
  g.strokeStyle = P.line;
  g.stroke(u);
  g.restore();

  g.save();
  g.clip(u);
  g.fillStyle = P.shade;
  g.fillRect(-1e4, -1e4, 2e4, 2e4);
  const r = cs[0] ? cs[0][2] : 8;
  g.save();
  g.translate(lx * r * 0.2 * deep, -r * 0.26 * deep);
  g.fillStyle = P.fill;
  g.fill(u);
  g.restore();
  if (arcs) {
    g.strokeStyle = P.line;
    g.lineWidth = lw * 0.75;
    g.beginPath();
    for (const [x, y, rr] of cs) {
      if (rr > 3) {
        g.moveTo(x + Math.cos(-2.7) * rr, y + Math.sin(-2.7) * rr);
        g.arc(x, y, rr, -2.7, -0.5);
      }
    }
    g.stroke();
  }
  g.restore();
}

function shape(g: CanvasRenderingContext2D, P: Palette, path: Path2D, lw = 1.5, off = 3, fill?: string) {
  g.save();
  g.lineWidth = lw * 2;
  g.strokeStyle = P.line;
  g.stroke(path);
  g.restore();

  g.save();
  g.clip(path);
  g.fillStyle = P.shade;
  g.fillRect(-1e4, -1e4, 2e4, 2e4);
  g.translate(-off * 0.7, -off);
  g.fillStyle = fill || P.fill;
  g.fill(path);
  g.restore();
}

export function puff(x: number, y: number, { n = 5, size = 11, vx = 0, vy = -16, life = 0.7, spread = 1 } = {}) {
  const P = getPalette();
  const lobes = Array.from({ length: n }, (_, i) => ({
    a: (i / n) * TAU + rnd(0.6),
    d: rnd(0.25, 0.9) * size * spread,
    r: rnd(0.55, 1) * size,
    ph: rnd(TAU),
    sp: rnd(0.6, 1.3),
  }));
  lobes.unshift({ a: 0, d: 0, r: size, ph: 0, sp: 1 });
  add(life, (k, t) => {
    if (!ctx) return;
    const grow = back(clamp(t / 0.22));
    const die = 1 - inn(clamp((k - 0.55) / 0.45));
    const px = x + vx * out(k) * life;
    const py = y + vy * out(k) * life;
    blob(
      ctx,
      P,
      lobes.map((l) => [
        px + Math.cos(l.a + t * 0.9 * l.sp) * l.d * (0.5 + out(k) * 0.9),
        py + Math.sin(l.a + t * 0.9 * l.sp) * l.d * (0.5 + out(k) * 0.9) - out(k) * 5 * l.sp,
        l.r * grow * die * (1 + Math.sin(t * 9 + l.ph) * 0.05),
      ]),
      1.4,
      { lx: 0.5, arcs: size > 6.5, deep: 1.4 },
    );
  });
}

export function burst(x: number, y: number, { r = 38, spikes = 12, life = 0.34 } = {}) {
  const P = getPalette();
  const j = Array.from({ length: spikes * 2 }, (_, i) => (i % 2 ? rnd(0.34, 0.5) : rnd(0.75, 1.15)));
  const rot = rnd(TAU);
  const pins = Array.from({ length: 8 }, (_, i) => ({
    a: (i / 8) * TAU + rnd(0.5),
    l: rnd(1.25, 1.7),
    w: rnd(0.03, 0.055),
  }));
  const star = (R: number, turn: number, inner = 1) => {
    const p = new Path2D();
    j.forEach((m, i) => {
      const a = rot + turn + (i / j.length) * TAU;
      const rr = R * (i % 2 ? m * inner : m);
      if (i) p.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
      else p.moveTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    });
    p.closePath();
    return p;
  };
  add(life, (k) => {
    if (!ctx) return;
    const R = r * out(clamp(k / 0.3));
    const hollow = 1 + inn(clamp((k - 0.35) / 0.65)) * 1.3;
    const r0 = R * 0.6 * Math.min(1.9, hollow);
    ctx.save();
    ctx.fillStyle = P.accent;
    ctx.beginPath();
    for (const n of pins) {
      const l = R * n.l;
      if (l <= r0) continue;
      ctx.moveTo(x + Math.cos(n.a - n.w) * r0, y + Math.sin(n.a - n.w) * r0);
      ctx.lineTo(x + Math.cos(n.a) * l, y + Math.sin(n.a) * l);
      ctx.lineTo(x + Math.cos(n.a + n.w) * r0, y + Math.sin(n.a + n.w) * r0);
    }
    ctx.fill();
    ctx.restore();
    const big = star(R * 1.14, 0.19, hollow);
    ctx.save();
    ctx.fillStyle = P.shade;
    ctx.fill(big);
    ctx.strokeStyle = P.line;
    ctx.lineWidth = 1.2;
    ctx.stroke(big);
    ctx.restore();
    shape(ctx, P, star(R * 0.82, 0, hollow), 1.3, 2.5);
  });
}

export function shards(
  x: number,
  y: number,
  { n = 6, speed = 170, size = 4.5, life = 0.65, dir = -Math.PI / 2, arc = Math.PI, grav = 400 } = {},
) {
  const P = getPalette();
  for (let i = 0; i < n; i++) {
    const a = dir + rnd(-arc, arc) / 2;
    const v = speed * rnd(0.5, 1.15);
    const s = size * rnd(0.6, 1.35);
    const spin = rnd(-7, 7);
    const pts = [
      [-1.4, 0.1],
      [-0.6, -0.7],
      [1.2, -0.45],
      [1.5, 0.15],
      [0.4, 0.75],
    ].map(([px, py]) => [px * rnd(0.8, 1.2), py * rnd(0.8, 1.2)]);
    add(life * rnd(0.7, 1), (k, t) => {
      if (!ctx) return;
      const px = x + Math.cos(a) * v * t;
      const py = y + Math.sin(a) * v * t + grav * t * t;
      const sc = s * (1 - inn(clamp((k - 0.6) / 0.4)));
      ctx.translate(px, py);
      ctx.rotate(spin * t + a);
      const p = new Path2D();
      pts.forEach(([u, w], q) => {
        if (q) p.lineTo(u * sc, w * sc);
        else p.moveTo(u * sc, w * sc);
      });
      p.closePath();
      shape(ctx, P, p, 1.1, sc * 0.45, P.fill);
    });
  }
}

export function ring(x: number, y: number, { rx = 32, ry = 10, life = 0.45, w = 4 } = {}) {
  const P = getPalette();
  add(life, (k) => {
    if (!ctx) return;
    const s = out(k);
    const lw = w * (1 - k);
    if (lw <= 0.3) return;
    ctx.beginPath();
    ctx.ellipse(x, y, rx * (0.3 + s), ry * (0.3 + s), 0, 0, TAU);
    ctx.strokeStyle = P.line;
    ctx.lineWidth = lw + 2.2;
    ctx.stroke();
    ctx.strokeStyle = P.fill;
    ctx.lineWidth = lw;
    ctx.stroke();
  });
}

export function lines(x: number, y: number, { n = 6, dir = Math.PI, len = 40, spread = 20, life = 0.28 } = {}) {
  const P = getPalette();
  for (let i = 0; i < n; i++) {
    const o = rnd(-spread, spread);
    const l = len * rnd(0.5, 1.25);
    const d = rnd(0, 0.22);
    const w = rnd(1, 2.4);
    add(life, (k) => {
      if (!ctx) return;
      const kk = clamp((k - d) / (1 - d));
      if (kk <= 0) return;
      const a = out(kk);
      const b = inn(kk);
      const px = x - Math.sin(dir) * o;
      const py = y + Math.cos(dir) * o;
      ctx.strokeStyle = P.line;
      ctx.lineWidth = w * (1 - b);
      ctx.beginPath();
      ctx.moveTo(px + Math.cos(dir) * l * b * 1.4, py + Math.sin(dir) * l * b * 1.4);
      ctx.lineTo(px + Math.cos(dir) * l * (0.2 + a * 1.2), py + Math.sin(dir) * l * (0.2 + a * 1.2));
      ctx.stroke();
    });
  }
}

export function ticks(x: number, y: number, { n = 3, r = 14, len = 9, dir = -0.9, life = 0.38, fan = 0.42 } = {}) {
  const P = getPalette();
  add(life, (k) => {
    if (!ctx) return;
    const a = out(clamp(k / 0.5));
    const b = inn(clamp((k - 0.4) / 0.6));
    ctx.save();
    ctx.fillStyle = P.accent;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const an = dir + (i - (n - 1) / 2) * fan;
      const r0 = r + len * b * 1.25;
      const r1 = r + len * a * 1.25;
      const hw = 0.07 + 2.2 / (r1 + 8);
      if (r1 - r0 < 0.6) continue;
      ctx.moveTo(x + Math.cos(an) * r0, y + Math.sin(an) * r0);
      ctx.lineTo(x + Math.cos(an - hw) * r1, y + Math.sin(an - hw) * r1);
      ctx.lineTo(x + Math.cos(an + hw) * r1, y + Math.sin(an + hw) * r1);
      ctx.closePath();
    }
    ctx.fill();
    ctx.restore();
  });
}

export function wob(x: number, y: number, { dir = 1, r = 14, life = 0.4 } = {}) {
  const P = getPalette();
  add(life, (k) => {
    if (!ctx) return;
    ctx.strokeStyle = P.line;
    ctx.lineWidth = 2 * (1 - k);
    if (ctx.lineWidth < 0.2) return;
    ctx.beginPath();
    for (const d of [0, 6]) {
      const rr = r + d + out(k) * 7;
      const c = dir > 0 ? 0 : Math.PI;
      ctx.moveTo(x - dir * r + Math.cos(c - 0.45) * rr, y + Math.sin(c - 0.45) * rr);
      ctx.arc(x - dir * r, y, rr, c - 0.45, c + 0.45);
    }
    ctx.stroke();
  });
}

export function kira(x: number, y: number, { r = 9, life = 0.55, col }: { r?: number; life?: number; col?: string } = {}) {
  const P = getPalette();
  add(life, (k, t) => {
    if (!ctx) return;
    const s = r * Math.sin(k * Math.PI) ** 0.6;
    const q = s * 0.16;
    const p = new Path2D();
    ctx.translate(x, y);
    ctx.rotate(Math.sin(t * 3) * 0.2);
    p.moveTo(0, -s);
    p.quadraticCurveTo(q, -q, s * 0.7, 0);
    p.quadraticCurveTo(q, q, 0, s);
    p.quadraticCurveTo(-q, q, -s * 0.7, 0);
    p.quadraticCurveTo(-q, -q, 0, -s);
    ctx.save();
    ctx.fillStyle = col || P.fill;
    ctx.fill(p);
    ctx.restore();
    ctx.strokeStyle = P.accent;
    ctx.lineWidth = 1.8;
    ctx.stroke(p);
  });
}

export function slash(
  x: number,
  y: number,
  { len = 86, ang = -0.55, life = 0.38, thick = 12, col }: { len?: number; ang?: number; life?: number; thick?: number; col?: string } = {},
) {
  const P = getPalette();
  const R = len * 0.9;
  const cx = x - Math.cos(ang - Math.PI / 2) * R * 0.86;
  const cy = y - Math.sin(ang - Math.PI / 2) * R * 0.86;
  const a0 = ang - Math.PI / 2 - 0.62;
  const sweep = 1.24;
  const c = col || P.accent;
  add(life, (k) => {
    if (!ctx) return;
    const head = out(clamp(k / 0.42));
    const tail = inn(clamp((k - 0.22) / 0.78));
    if (head - tail < 0.01) return;
    const cres = (T: number) => {
      const p = new Path2D();
      const N = 24;
      for (let i = 0; i <= N; i++) {
        const u = tail + (head - tail) * (i / N);
        const a = a0 + sweep * u;
        if (i) p.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
        else p.moveTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      }
      for (let i = N; i >= 0; i--) {
        const q = i / N;
        const u = tail + (head - tail) * q;
        const a = a0 + sweep * u;
        const rr = R - T * Math.sin(q * Math.PI) ** 0.7;
        p.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
      }
      p.closePath();
      return p;
    };
    ctx.save();
    ctx.fillStyle = c;
    ctx.fill(cres(thick));
    ctx.restore();
    ctx.fillStyle = P.fill;
    ctx.fill(cres(thick * 0.42));
    ctx.strokeStyle = P.line;
    ctx.lineWidth = 1.3;
    ctx.stroke(cres(thick));
  });
}

export function shuriken(
  x: number,
  y: number,
  { vx = -140, vy = -28, size = 9, life = 0.75 } = {},
) {
  const P = getPalette();
  add(life, (k, t) => {
    if (!ctx) return;
    const px = x + vx * out(k) * life;
    const py = y + vy * out(k) * life + 45 * t * t;
    const sc = size * back(clamp(t / 0.14)) * (1 - inn(clamp((k - 0.7) / 0.3)));
    if (sc < 0.5) return;
    ctx.translate(px, py);
    ctx.rotate(t * 18);
    const p = new Path2D();
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const aNext = a + Math.PI / 4;
      if (i === 0) p.moveTo(Math.cos(a) * sc, Math.sin(a) * sc);
      else p.lineTo(Math.cos(a) * sc, Math.sin(a) * sc);
      p.lineTo(Math.cos(aNext) * sc * 0.32, Math.sin(aNext) * sc * 0.32);
    }
    p.closePath();
    shape(ctx, P, p, 1.2, sc * 0.25, P.fill);
    ctx.beginPath();
    ctx.arc(0, 0, sc * 0.16, 0, TAU);
    ctx.fillStyle = P.accent;
    ctx.fill();
  });
}

export function at(el: Element, fx = 0.5, fy = 0.5) {
  const b = el.getBoundingClientRect();
  return {
    x: b.left + window.scrollX + b.width * fx,
    y: b.top + window.scrollY + b.height * fy,
    w: b.width,
    h: b.height,
  };
}

export function attachSquash(
  el: HTMLElement,
  { low = 0.88, k = 520, d = 16, wide = 0.45, popScale = 1.08, tiltDeg = 0 } = {},
) {
  const s = new Spring(1, k, d);
  const pop = new Spring(1, 320, 13);
  const tilt = new Spring(0, 260, 11);
  let active = false;

  const step = (dt: number) => {
    const y = s.step(dt);
    const p = pop.step(dt);
    const r = tilt.step(dt);
    const still =
      Math.abs(y - 1) < 0.001 &&
      Math.abs(s.v) < 0.01 &&
      Math.abs(p - 1) < 0.001 &&
      Math.abs(pop.v) < 0.01 &&
      Math.abs(r) < 0.02 &&
      Math.abs(tilt.v) < 0.05;
    if (still && s.to === 1 && pop.to === 1 && tilt.to === 0) {
      el.style.transform = "";
      frames.delete(step);
      active = false;
      return;
    }
    el.style.transform = `rotate(${r.toFixed(2)}deg) scale(${((1 + (1 - y) * wide) * p).toFixed(4)}, ${(y * p).toFixed(4)})`;
  };

  const wake = () => {
    if (calm) return;
    if (!active) {
      active = true;
      frames.add(step);
      startLoop();
    }
  };

  el.addEventListener("pointerdown", () => {
    if (calm) return;
    s.to = low;
    wake();
  });

  for (const ev of ["pointerup", "pointerleave", "pointercancel", "blur"]) {
    el.addEventListener(ev, () => {
      s.to = 1;
      wake();
    });
  }

  return {
    triggerPop() {
      if (calm) return;
      pop.x = popScale;
      pop.to = 1;
      if (tiltDeg) {
        tilt.x = tiltDeg;
        tilt.to = 0;
      }
      wake();
    },
  };
}

export function playPrimaryImpact(el: HTMLElement) {
  const c = at(el, 0.5, 0.5);
  const tl = at(el, 0.12, 0.15);
  const tr = at(el, 0.88, 0.15);
  burst(c.x, c.y, { r: 34, spikes: 11, life: 0.32 });
  shards(c.x, c.y - 4, { n: 6, speed: 165, size: 4.2, dir: -Math.PI / 2, arc: Math.PI * 1.1 });
  puff(tl.x, tl.y, { n: 4, size: 8, vx: -18, vy: -14, life: 0.55 });
  puff(tr.x, tr.y, { n: 4, size: 8, vx: 18, vy: -14, life: 0.55 });
  kira(tr.x + 6, tr.y - 6, { r: 9, life: 0.5 });
}

export function playSecondaryImpact(el: HTMLElement) {
  const tr = at(el, 0.88, 0.2);
  const bl = at(el, 0.12, 0.8);
  ticks(tr.x, tr.y, { n: 3, r: 10, len: 8, dir: -0.75, life: 0.34 });
  kira(bl.x, bl.y, { r: 7, life: 0.45 });
}

export function playTabImpact(el: HTMLElement, dir: number) {
  const top = at(el, 0.5, 0.15);
  const side = at(el, dir > 0 ? 0.1 : 0.9, 0.55);
  ticks(top.x, top.y, { n: 3, r: 8, len: 7, dir: -Math.PI / 2, life: 0.32, fan: 0.45 });
  puff(side.x, side.y, { n: 3, size: 6.5, vx: -dir * 18, vy: -8, life: 0.45 });
  lines(side.x, side.y, { n: 4, dir: dir > 0 ? Math.PI : 0, len: 26, spread: 10, life: 0.24 });
}

export function playSparkle(el: HTMLElement) {
  const c = at(el, 0.5, 0.5);
  ring(c.x, c.y + 4, { rx: 22, ry: 8, life: 0.38, w: 3 });
  kira(c.x + 10, c.y - 10, { r: 9, life: 0.5 });
  ticks(c.x - 8, c.y - 8, { n: 3, r: 8, len: 7, dir: -2.3, life: 0.32 });
}

export function playNinjaSlash(el: HTMLElement) {
  const c = at(el, 0.65, 0.45);
  slash(c.x + 10, c.y + 2, { len: 76, ang: 0.55, life: 0.36, thick: 11 });
  shards(c.x + 12, c.y, { n: 5, speed: 145, size: 3.8, dir: -0.45, arc: 1.3 });
  ticks(c.x - 6, c.y - 10, { n: 3, r: 10, len: 8, dir: -2.2, life: 0.34 });
  kira(c.x + 16, c.y - 12, { r: 8, life: 0.45 });
}

export function playNinjaShunshin(el: HTMLElement) {
  const c = at(el, 0.5, 0.6);
  puff(c.x, c.y, { n: 5, size: 9.5, vx: 0, vy: -14, life: 0.6 });
  ring(c.x, c.y + 6, { rx: 22, ry: 7.5, life: 0.4, w: 3.2 });
  lines(c.x, c.y - 6, { n: 5, dir: -Math.PI / 2, len: 26, spread: 12, life: 0.26 });
}

export function playNinjaThrow(el: HTMLElement) {
  const c = at(el, 0.85, 0.45);
  shuriken(c.x, c.y, { vx: 175, vy: -22, size: 8.5, life: 0.72 });
  ticks(c.x + 4, c.y, { n: 2, r: 6, len: 6, dir: 0, life: 0.26, fan: 0.5 });
}

export function animateTabIndicator(
  indicator: HTMLElement,
  targetBtn: HTMLElement,
  nav: HTMLElement,
  immediate = false,
) {
  const navRect = nav.getBoundingClientRect();
  const btnRect = targetBtn.getBoundingClientRect();
  const targetLeft = btnRect.left - navRect.left + nav.scrollLeft;
  const targetWidth = btnRect.width;

  if (immediate || calm) {
    indicator.style.transform = `translateX(${targetLeft.toFixed(1)}px)`;
    indicator.style.width = `${targetWidth.toFixed(1)}px`;
    return;
  }

  const currentLeft = parseFloat(indicator.dataset.x || String(targetLeft));
  const currentWidth = parseFloat(indicator.dataset.w || String(targetWidth));
  const xSpring = new Spring(currentLeft, 380, 22);
  const wSpring = new Spring(currentWidth, 380, 24);
  xSpring.to = targetLeft;
  wSpring.to = targetWidth;

  const step = (dt: number) => {
    const x = xSpring.step(dt);
    const w = wSpring.step(dt);
    const stretch = clamp(Math.abs(xSpring.v) * 0.018, 0, 18);
    indicator.dataset.x = String(x);
    indicator.dataset.w = String(w);
    indicator.style.transform = `translateX(${x.toFixed(1)}px)`;
    indicator.style.width = `${(w + stretch).toFixed(1)}px`;

    if (
      Math.abs(x - targetLeft) < 0.3 &&
      Math.abs(xSpring.v) < 0.5 &&
      Math.abs(w - targetWidth) < 0.3 &&
      Math.abs(wSpring.v) < 0.5
    ) {
      indicator.dataset.x = String(targetLeft);
      indicator.dataset.w = String(targetWidth);
      indicator.style.transform = `translateX(${targetLeft.toFixed(1)}px)`;
      indicator.style.width = `${targetWidth.toFixed(1)}px`;
      frames.delete(step);
    }
  };

  frames.add(step);
  startLoop();
}
