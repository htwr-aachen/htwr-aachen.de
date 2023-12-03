"use client";

import moment from "moment";
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
    const dateParsed = moment(date, "DD/MM/YYYY");
    const now = moment();
    const diff = now.diff(dateParsed, "days");

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
