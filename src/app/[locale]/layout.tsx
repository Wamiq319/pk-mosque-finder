import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/layout";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  // Set direction based on locale
  const dir = locale === "ur" ? "rtl" : "ltr";
  const lang = locale === "ur" ? "ur" : "en";

  return (
    <html lang={lang} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
