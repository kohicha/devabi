import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/common/header'
const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Abi",
  description: "Developers Ability",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background-950 ${inter.className}`}>
        <div className="mx-44 mt-14">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
