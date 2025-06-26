"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "ur", label: "اردو" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const switchLocale = (targetLocale: string) => {
    if (!pathname) return;
    setLoading(true);
    const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "/";
    router.push(`/${targetLocale}/${pathWithoutLocale}`);
    setLoading(false);
  };

  // Find the other language label to display
  const otherLanguageLabel = (() => {
    if (locale === "en")
      return languages.find((l) => l.code !== "en")?.label || "اردو";
    return languages.find((l) => l.code === "en")?.label || "English";
  })();

  return (
    <Button
      variant="outline-yellow"
      rounded
      onClick={() => switchLocale(locale === "en" ? "ur" : "en")}
      className="flex items-center gap-1 text-sm font-semibold"
      disabled={loading}
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      {otherLanguageLabel}
    </Button>
  );
}
