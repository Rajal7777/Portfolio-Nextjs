import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const messages = {
  en: () => import("../app/messages/en.json"),
  ja: () => import("../app/messages/ja.json"),
};

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = savedLocale === "ja" ? "ja" : "en";

  return {
    locale,
    messages: (await messages[locale]()).default,
  };
});
