import { ui, defaultLang, type Language, type TranslationKey } from "./ui";

export function useTranslations(lang: Language = defaultLang) {
  const currentLang = lang in ui ? lang : defaultLang;
  const dictionary = ui[currentLang];
  const fallback = ui[defaultLang];

  return function t(key: TranslationKey, params?: Record<string, string | number>): string {
    let text: string = (key in dictionary ? dictionary[key] : fallback[key]) || key;
    if (params) {
      for (const [paramKey, paramVal] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(paramVal));
      }
    }
    return text;
  };
}
