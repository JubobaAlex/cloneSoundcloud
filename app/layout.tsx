"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
            <SessionProvider>{children}</SessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}