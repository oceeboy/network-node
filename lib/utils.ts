import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mnemonicSchema = z.object({
  word1: z.string().min(1, "Word is required"),
  word2: z.string().min(1, "Word is required"),
  word3: z.string().min(1, "Word is required"),
  word4: z.string().min(1, "Word is required"),
  word5: z.string().min(1, "Word is required"),
  word6: z.string().min(1, "Word is required"),
  word7: z.string().min(1, "Word is required"),
  word8: z.string().min(1, "Word is required"),
  word9: z.string().min(1, "Word is required"),
  word10: z.string().min(1, "Word is required"),
  word11: z.string().min(1, "Word is required"),
  word12: z.string().min(1, "Word is required"),
  word13: z.string().optional(),
  word14: z.string().optional(),
  word15: z.string().optional(),
  word16: z.string().optional(),
  word17: z.string().optional(),
  word18: z.string().optional(),
  word19: z.string().optional(),
  word20: z.string().optional(),
  word21: z.string().optional(),
  word22: z.string().optional(),
  word23: z.string().optional(),
  word24: z.string().optional(),
});
