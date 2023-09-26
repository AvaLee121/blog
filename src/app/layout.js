import Navbar from "../components/navbar/Navbar";
import './globals.css';
import { Inter } from 'next/font/google'
import Footer from "../components/footer/Footer"
import "./globals.css";
import { ThemeProvider }from '../context/ThemeContext'
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "Ava Lee",
    description: "This is the description",
    icon: 'favicon.ico'
};
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
          <div className="container">
                <Navbar />       
                {children}
                <Footer />
          </div>
          </ThemeProvider>          
        </body>
      </html>
    );
  }
  