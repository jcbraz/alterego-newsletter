import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fixRequestSpacing(src: string) {
  return encodeURIComponent(src).replace(/[!'()*]/g, "").replace(/%20/g, " ").replace("%E2%80%99", "");
}