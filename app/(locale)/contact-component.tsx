import ContactForm from "@/components/form";
import { FadeIn } from "@/components/common/fade-in";
import {
  MapPinHouse,
  Mail,
  Phone,
  Send,
  MessageCircleHeart,
  Sticker,
} from "lucide-react";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

const ContactPage = () => {
  return (
    <section
      className={cn(
        "max-w-4xl mx-auto sm:px-6 lg:px-8 my-6",
        raleway.className,
      )}
    >
      <FadeIn>
        <h2 className="text-2xl mb-4 md:text-4xl pl-4 text-gray-800 bg-slate-100 dark:bg-slate-900 py-2 font-semibold playfair text-center border border-gray-200 dark:border-gray-700 rounded-sm">
          Contact Me
        </h2>
      </FadeIn>
      <FadeIn
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex gap-4 justify-between flex-col md:flex-row w-full h-full py-12 mx-auto px-5"
      >
        <div className="mx-auto">
          <h2 className="text-2xl mb-4 md:text-2xl font-semibold tracking-wide uppercase">
            Get in Touch
          </h2>
          <p className="text-base text-gray-700 ">
            Looking forward to hearing from you!
          </p>
          <div className="flex flex-col gap-4 mt-4 ">
            <div className="flex items-center gap-4">
              <MapPinHouse color="#708090" />
              <p className="text-sm  tracking-tight text-gray-500">
                Tochigi-ken, Ohtawara Yamanote
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail color="#708090" />
              <p className="text-sm text-gray-500 tracking-tight">
                suwalrajal57@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone color="#708090" />
              <p className="text-sm text-gray-500 tracking-tight">
                070-9034-4803
              </p>
            </div>

            {/* animated image */}
            <div className="mt-2">
              <div className="relative h-56 w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-100 p-4 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-slate-200/70 blur-xl dark:bg-slate-700/40" />
                <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-slate-300/60 blur-2xl dark:bg-slate-600/30" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="absolute left-6 top-8 animate-bounce rounded-full bg-white/90 p-2 shadow dark:bg-slate-800/90">
                    <Mail className="h-4 w-4 text-slate-600 dark:text-slate-200" />
                  </div>

                  <div className="absolute right-7 top-14 animate-pulse rounded-full bg-white/90 p-2 shadow dark:bg-slate-800/90">
                    <MessageCircleHeart className="h-4 w-4 text-slate-600 dark:text-slate-200" />
                  </div>

                  <div className="absolute bottom-8 right-10 animate-bounce rounded-full bg-white/90 p-2 [animation-delay:180ms] shadow dark:bg-slate-800/90">
                    <Send className="h-4 w-4 text-slate-600 dark:text-slate-200" />
                  </div>

                  <div className="grid h-32 w-44 place-items-center rounded-xl border border-slate-200 bg-white/90 shadow-md dark:border-slate-700 dark:bg-slate-900/90">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        Let&apos;s Connect
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-300 ">
                        Hope to connect with you soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <ContactForm />
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactPage;
