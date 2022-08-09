import { writable, type Writable } from "svelte/store";

export type ScreenType = "large desktop" | "desktop" | "tablet" | "mobile";

export const screen: Writable<ScreenType> = writable("desktop");