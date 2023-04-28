import Link from "next/link";
import { useState } from "react";

const SharedPushNotify = () => {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <div className="relative flex h-20 items-center justify-center bg-rwth-warn">
      <p className="text-2xl font-semibold">
        <Link href="/moodle-anleitung">
          Wichtige Moodle Mobile Anleitung! hier.
        </Link>
      </p>
      <button
        className="absolute right-10 bg-white bg-opacity-40 px-5 py-3 hover:bg-opacity-60"
        onClick={() => setShow(false)}
      >
        X
      </button>
    </div>
  );
};

export default SharedPushNotify;
