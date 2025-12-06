import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Equipment Supply - Premium Healthcare Solutions",
  description: "Leading supplier of medical equipment, hospital furniture, diagnostic tools, and healthcare solutions. Trusted by hospitals, clinics, and healthcare organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="suppress-react-19-warning"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const originalError = console.error;
                console.error = function(...args) {
                  const hasRefWarning = args.some((arg) => {
                    if (typeof arg === 'string') {
                      return (
                        arg.includes('Accessing element.ref was removed in React 19') ||
                        arg.includes('ref is now a regular prop') ||
                        arg.includes('element.ref') ||
                        arg.includes('JSX Element type')
                      );
                    }
                    return false;
                  });
                  if (!hasRefWarning) {
                    originalError.apply(console, args);
                  }
                };
              })();
            `,
          }}
        />
        <ClientWrapper>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
