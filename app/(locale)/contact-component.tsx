import ContactForm from "@/components/form";
import { FadeIn } from "@/components/common/fade-in";
import {
  MapPinHouse,
  Mail,
  Phone,
  Send,
  MessageCircleHeart,
} from "lucide-react";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("contactPage");

  return (
    <section className="max-w-4xl mx-auto sm:px-6 lg:px-8 my-12">
      <FadeIn>
        <h2 className="text-2xl mb-4 md:text-4xl pl-4 text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center border border-gray-200 dark:border-gray-700 rounded-sm">
          {t("title")}
        </h2>
      </FadeIn>

      <div className="flex gap-4 justify-between flex-col md:flex-row w-full h-full py-12 mx-auto px-5">
        {/* Contact Info: slides in from the left */}
        <FadeIn x={-80} y={0} className="mx-auto w-full max-w-md">
          <h3 className="text-2xl mb-4 font-semibold tracking-wide uppercase text-slate-900 dark:text-slate-100">
            {t("getInTouch")}
          </h3>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {t("description")}
          </p>
          <div className="flex flex-col gap-4 mt-4 ">
            <div className="flex items-center gap-4">
              <MapPinHouse className="h-5 w-5 text-muted-foreground" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ohtawara+Tochigi+Japan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              >
                {t("locationText")}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a
                href={`mailto:${t("email")}`}
                className="text-sm text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              >
                {t("email")}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <a
                href={`tel:${t("phoneUrl")}`}
                className="text-sm text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              >
                {t("phoneNumber")}
              </a>
            </div>

            {/* animated image */}
            <div className="mt-2">
              <div className="relative h-56 w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-100 p-4 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-slate-200/70 blur-xl dark:bg-slate-700/40" />
                <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-slate-300/60 blur-2xl dark:bg-slate-600/30" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="absolute left-9 top-8 animate-pulse rounded-full bg-white/90 p-2 shadow dark:bg-slate-800/90">
                    <Mail className="h-4 w-4 text-slate-600 dark:text-slate-200" />
                  </div>

                  <div className="absolute right-7 top-14 animate-pulse rounded-full bg-white/90 p-2 shadow dark:bg-slate-800/90">
                    <MessageCircleHeart className="h-4 w-4 text-slate-600 dark:text-slate-200" />
                  </div>

                  <div className="absolute bottom-8 right-10 animate-pulse rounded-full bg-white/90 p-2 [animation-delay:180ms] shadow dark:bg-slate-800/90">
                    <Send className="h-4 w-4 text-slate-600 dark:text-slate-200" />
                  </div>

                  <div className="grid h-32 w-44 place-items-center rounded-xl border border-slate-200 bg-white/90 shadow-md dark:border-slate-700 dark:bg-slate-900/90">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {t("widgetHeading")}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-300 ">
                        {t("widgetSubheading")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn x={80} y={0} delay={0.1} className="mx-auto w-full max-w-sm">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactPage;
