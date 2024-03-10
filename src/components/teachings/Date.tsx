"use client";

import { differenceInDays } from "date-fns";
import type { FC } from "react";
import { useEffect, useState } from "react";

type TeachingsListDateProps = {
  date: string;
};

const opacityValues = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3];

export const TeachingsListDate: FC<TeachingsListDateProps> = ({ date }) => {
  const [opacity, setOpacity] = useState(0.65);

  useEffect(() => {
    if (date === "") return;
    const dateParsed = new Date(date);
    const now = new Date();
    const diff = differenceInDays(now, dateParsed);
    // calculate opacity from difference of days
    setOpacity(opacityValues[diff] || 0.3);
  }, [date]);

  useEffect(() => {});

  return date === "" ? (
    <></>
  ) : (
    <span className="mr-2 text-sm" style={{ opacity }}>
      Aktualisiert: {date}
    </span>
  );
};
