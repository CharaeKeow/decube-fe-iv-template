import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// From Shadcn/UI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
