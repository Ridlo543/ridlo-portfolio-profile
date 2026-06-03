import { Redis } from "@upstash/redis";

type Env = {
  KV_REST_API_TOKEN?: string;
  KV_REST_API_URL?: string;
  UPSTASH_REDIS_REST_TOKEN?: string;
  UPSTASH_REDIS_REST_URL?: string;
};

declare const process: { env: Env };

const BASE_VISITOR_COUNT = 1099;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const VISITOR_COOKIE = "ridlo_visitor_id";
const VISITOR_SET_KEY = "portfolio:visitors";
const VISITOR_ID_PATTERN = /^[A-Za-z0-9_-]{16,80}$/;

const responseHeaders = {
  "Cache-Control": "no-store, max-age=0",
  "Content-Type": "application/json",
};

function getCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie");

  if (!cookieHeader) {
    return null;
  }

  for (const part of cookieHeader.split(";")) {
    const [cookieName, ...valueParts] = part.trim().split("=");

    if (cookieName === name) {
      try {
        return decodeURIComponent(valueParts.join("="));
      } catch {
        return null;
      }
    }
  }

  return null;
}

function createVisitorId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function createCookie(visitorId: string) {
  return [
    `${VISITOR_COOKIE}=${encodeURIComponent(visitorId)}`,
    "Path=/",
    `Max-Age=${COOKIE_MAX_AGE}`,
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
  ].join("; ");
}

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return null;
  }

  return { token, url };
}

function jsonResponse(
  body: Record<string, boolean | number | string>,
  init: ResponseInit = {},
) {
  return Response.json(body, {
    ...init,
    headers: {
      ...responseHeaders,
      ...init.headers,
    },
  });
}

export default {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse(
        { count: BASE_VISITOR_COUNT, ok: false },
        { status: 405 },
      );
    }

    const redisConfig = getRedisConfig();

    if (!redisConfig) {
      return jsonResponse({
        count: BASE_VISITOR_COUNT,
        fallback: true,
        ok: false,
      });
    }

    const existingVisitorId = getCookie(request, VISITOR_COOKIE);
    const hasValidVisitorId =
      existingVisitorId && VISITOR_ID_PATTERN.test(existingVisitorId);
    const visitorId = hasValidVisitorId ? existingVisitorId : createVisitorId();
    const shouldSetCookie = !hasValidVisitorId;

    try {
      const redis = new Redis(redisConfig);

      await redis.sadd(VISITOR_SET_KEY, visitorId);

      const uniqueVisitors = await redis.scard(VISITOR_SET_KEY);
      const count = BASE_VISITOR_COUNT + uniqueVisitors;

      return jsonResponse(
        {
          count,
          fallback: false,
          ok: true,
        },
        shouldSetCookie
          ? {
              headers: {
                "Set-Cookie": createCookie(visitorId),
              },
            }
          : undefined,
      );
    } catch {
      return jsonResponse({
        count: BASE_VISITOR_COUNT,
        fallback: true,
        ok: false,
      });
    }
  },
};
