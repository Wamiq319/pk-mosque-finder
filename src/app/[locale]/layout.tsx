import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const dir = locale === "ur" ? "rtl" : "ltr";
  const lang = locale === "ur" ? "ur" : "en";

  return (
    <html lang={lang} dir={dir}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
