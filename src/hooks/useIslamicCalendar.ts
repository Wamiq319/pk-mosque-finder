import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

type IslamicInfo = {
  gregorianDate: string;
  hijriDate: string;
  sunrise: string;
  sunset: string;
  ramadanText: string;
  eidAdha: string;
};

export const useIslamicInfo = () => {
  const [info, setInfo] = useState<IslamicInfo>({
    gregorianDate: "",
    hijriDate: "",
    sunrise: "",
    sunset: "",
    ramadanText: "",
    eidAdha: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get prayer times for Lahore
        const res = await axios.get(
          "https://api.aladhan.com/v1/timingsByCity?city=Lahore&country=Pakistan&method=2"
        );
        const data = res.data.data;

        // Dates
        const gregorian = data.date.gregorian;
        const hijri = data.date.hijri;
        const today = dayjs();

        // Predefined Islamic dates
        const islamicDates = [
          { year: 2025, ramadan: "2025-03-01", eidAdha: "2025-06-07" },
          { year: 2026, ramadan: "2026-02-18", eidAdha: "2026-05-27" },
          { year: 2027, ramadan: "2027-02-08", eidAdha: "2027-05-17" },
        ];

        const upcoming =
          islamicDates.find((d) => dayjs(d.ramadan).isAfter(today)) ||
          islamicDates[0];
        const ramadanStart = dayjs(upcoming.ramadan);
        const daysUntilRamadan = ramadanStart.diff(today, "day");

        const ramadanText =
          daysUntilRamadan <= 0
            ? `Started on ${ramadanStart.format("D MMMM YYYY")}`
            : `Starts in ${daysUntilRamadan} days`;

        setInfo({
          gregorianDate: `${gregorian.weekday.en}, ${gregorian.day} ${gregorian.month.en} ${gregorian.year}`,
          hijriDate: `${hijri.day} ${hijri.month.en} ${hijri.year} AH`,
          sunrise: data.timings.Sunrise,
          sunset: data.timings.Sunset,
          ramadanText,
          eidAdha: dayjs(upcoming.eidAdha).format("D MMMM YYYY"),
        });
      } catch (error) {
        console.error("Error fetching Islamic info", error);
      }
    };

    fetchData();
  }, []);

  return info;
};
