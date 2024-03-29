import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const gothic = Gothic_A1({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={gothic.className}>{children}</body>
        </html>
    );
}
