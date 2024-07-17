import { Merriweather, Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
export const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });
export const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});
