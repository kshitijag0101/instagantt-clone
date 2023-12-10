"use client";
import "./globals.css";
import { Provider } from "@/context/authentication";

export default function RootLayout({ children }) {
    return (
        <Provider>
            <html lang="en">
                <head>
                    <title>Gantt Chart Maker</title>
                </head>
                <body>{children}</body>
            </html>
        </Provider>
    );
}
