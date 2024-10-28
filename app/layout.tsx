
import "./globals.css";
import Footer from "./components/Footer";
import Provider from "./hooks/Provider";
import SmallNavBar from "./components/SmallNavBar";
import NavBarConf from "./components/NavBarConf";
import { Metadata } from "next";


export const metadata:Metadata={

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <Provider >
      <html style={{scrollBehavior:"smooth"}} lang="en">
            
          <body className="relative">
                <SmallNavBar />
                <NavBarConf />
                {children}
                <Footer />
          </body>
      </html>
         </Provider>
  );
}