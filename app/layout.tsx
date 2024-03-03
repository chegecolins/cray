import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers, ThemeProvider } from "./provider";
import ErrorBoundary from "./error/rendor";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Venity Mall",
  description: "The fastest way to Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={ GeistSans.className }>

      <body className="bg-background text-foreground ">
        <main className="min-h-screen flex flex-col items-center">

          <Providers>
            <ThemeProvider>
              <ErrorBoundary>
                { children }
              </ErrorBoundary>
            </ThemeProvider>
          </Providers>
          
        </main>
      </body>

    </html>

  );
}
