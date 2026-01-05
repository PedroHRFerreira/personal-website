import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/assets/globals.scss";

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/Inter/static/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/static/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/static/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
