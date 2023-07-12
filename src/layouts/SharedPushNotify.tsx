import Link from "next/link";
import { useState } from "react";

const SharedPushNotify = () => {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <div className="relative flex h-12 items-center justify-center bg-rwth-warn">
      <p className="text-lg font-medium">
        <Link href="/updates">
          Updates zur Sommersemster Klausurphase... :(
        </Link>
      </p>
      <button
        className="absolute right-10 h-[80%] bg-white/40 px-4 hover:bg-white/60"
        onClick={() => setShow(false)}
      >
        X
      </button>
    </div>
  );
};

export default SharedPushNotify;
