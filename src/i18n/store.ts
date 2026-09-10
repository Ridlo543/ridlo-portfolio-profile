import { ui, defaultLang, type Language, type TranslationKey } from "./ui";
import { bilingualProjects, bilingualExperiences, bilingualEducation } from "./content";

// Client-side i18n manager
export function initI18n() {
  const LANG_KEY = "portfolio-lang";

  function getStoredLang(): Language {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      return stored === "en" || stored === "id" ? stored : defaultLang;
    } catch {
      return defaultLang;
    }
  }

  function setLanguage(lang: Language) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    // 1. Update all static UI dictionary elements
    const dict = ui[lang];
    document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n as TranslationKey;
      if (key && key in dict) {
        let text: string = dict[key];
        const count = el.dataset.i18nCount;
        const year = el.dataset.i18nYear;
        if (count) text = text.replace("{count}", count);
        if (year) text = text.replace("{year}", year);
        el.textContent = text;
      }
    });

    // 2. Update Language Switcher trigger button text
    document.querySelectorAll("[data-lang-current]").forEach((el) => {
      el.textContent = lang.toUpperCase();
    });

    // 3. Update active checkmarks in language menu
    document.querySelectorAll<HTMLElement>("[data-lang-check]").forEach((check) => {
      const targetLang = check.dataset.langCheck;
      check.classList.toggle("hidden", targetLang !== lang);
    });

    // 4. Update Projects (both main screen previews and modal cards)
    document.querySelectorAll<HTMLElement>("[data-project-item]").forEach((card) => {
      const id = card.dataset.projectItem;
      const project = bilingualProjects.find((p) => p.id === id);
      if (!project) return;

      const vLabel = card.querySelector<HTMLElement>('[data-project-field="visualLabel"]');
      if (vLabel) vLabel.textContent = project.visualLabel[lang];

      const year = card.querySelector<HTMLElement>('[data-project-field="year"]');
      if (year) year.textContent = project.year[lang];

      const desc = card.querySelector<HTMLElement>('[data-project-field="description"]');
      if (desc) desc.textContent = project.description[lang];

      const impactList = card.querySelector<HTMLElement>('[data-project-field="impact"]');
      if (impactList) {
        impactList.innerHTML = project.impact[lang].map((item) => `<li>${item}</li>`).join("");
      }
    });

    // 5. Update Experiences (both main screen previews and modal articles)
    document.querySelectorAll<HTMLElement>("[data-experience-item]").forEach((card) => {
      const id = card.dataset.experienceItem;
      const job = bilingualExperiences.find((e) => e.id === id);
      if (!job) return;

      const role = card.querySelector<HTMLElement>('[data-exp-field="role"]');
      if (role) role.textContent = job.role[lang];

      const badge = card.querySelector<HTMLElement>('[data-exp-field="badge"]');
      if (badge) badge.textContent = job.badge[lang];

      const time = card.querySelector<HTMLElement>('[data-exp-field="time"]');
      if (time) time.textContent = job.time[lang];

      const desc = card.querySelector<HTMLElement>('[data-exp-field="description"]');
      if (desc) desc.textContent = job.description[lang];

      const list = card.querySelector<HTMLElement>('[data-exp-field="list"]');
      if (list) {
        list.innerHTML = job.list[lang].map((item) => `<li>${item}</li>`).join("");
      }
    });

    // 6. Update Education
    document.querySelectorAll<HTMLElement>("[data-education-card]").forEach((card) => {
      const title = card.querySelector<HTMLElement>('[data-edu-field="title"]');
      if (title) title.textContent = bilingualEducation.title[lang];

      const gpa = card.querySelector<HTMLElement>('[data-edu-field="gpa"]');
      if (gpa) gpa.textContent = bilingualEducation.gpa[lang];

      const period = card.querySelector<HTMLElement>('[data-edu-field="period"]');
      if (period) period.textContent = `${bilingualEducation.period[lang]} · Surakarta, Indonesia`;

      const desc = card.querySelector<HTMLElement>('[data-edu-field="description"]');
      if (desc) desc.textContent = bilingualEducation.description[lang];
    });

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {}
  }

  // Initial apply
  const currentLang = getStoredLang();
  setLanguage(currentLang);

  // Wire language switcher buttons
  document.querySelectorAll<HTMLButtonElement>("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.langOption as Language;
      if (targetLang) setLanguage(targetLang);
    });
  });
}
