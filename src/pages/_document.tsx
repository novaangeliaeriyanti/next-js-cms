import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "@/components/ui/toaster"
export default function Document() {
  return (
    <Html lang="en">
      <Head >
      </Head>
      <body className="antialiased w-fit">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
