import { writable, type Writable } from "svelte/store";

export type ThemeType = "default" | "blackpink";

export const theme: Writable<ThemeType> = writable("blackpink");

export const updateTheme = (newTheme: ThemeType) => {
  theme.update((state) => state = newTheme);
}