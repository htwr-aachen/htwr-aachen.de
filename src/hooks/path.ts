"use client";

import { usePathname } from "next/navigation";

/**
 * useIsActive provides a hook to see if the given prefix is currently navigated.
 * This is usefull for highlighting navigation links
 *
 * @param {string} prefix - The prefix that should be used to check
 * @returns {bool} The result. `true` -> the address /prefix/{...}. `false` otherwise
 */
export function useIsActive(prefix: string): bool {
  if (prefix === "") prefix = "/";

  const pathname = usePathname();

  // check if the prefix holds

  return pathname.startsWith(prefix);
}
