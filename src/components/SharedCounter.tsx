"use client";

import { useEffect, useState } from "react";

export default function SharedCounter(props: { name: string }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(`/api/counter?name=${props.name}`)
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.count);
      })
      .catch((_err) => {
        setCounter(0);
      });
  }, []);

  const incr = () => {
    fetch(`/api/counter?name=${props.name}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.count);
      })
      .catch((_err) => {
        setCounter(0);
      });
  };

  return (
    <>
      <button onClick={incr}>{counter}</button>
    </>
  );
}
