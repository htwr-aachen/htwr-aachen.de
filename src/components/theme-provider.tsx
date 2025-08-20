"use client";

import {
	ThemeProvider as NextThemeProvider,
	type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
