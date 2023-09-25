import Navbar from "src/components/navbar/Navbar.jsx";
import './globals.css';
import { Inter } from 'next/font/google'
import Footer from "src/components/footer/Footer.jsx"
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "Ava Lee",
    description: "This is the description",
};
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
         
          <div className="container">
                <Navbar />       
                {children}
                <Footer />
          </div>
          
        </body>
      </html>
    );
  }
  