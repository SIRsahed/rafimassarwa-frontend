"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navebar";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  //   const authRoutes = ["/login", "/register", "/forgot-password"];
  //   const shouldShowLayout = !authRoutes.includes(pathname);

  return (
    <>
      {
        pathname !== "/registration" && pathname !== "/login" && pathname !== "/forgot-password" && pathname !== "/enter-otp" && pathname !== "/reset-password" && <Navbar />
      }
      <main>{children}</main>
      {
        pathname !== "/registration" && pathname !== "/login" && pathname !== "/forgot-password" && pathname !== "/enter-otp" && pathname !== "/reset-password" && !pathname.includes("my-portfolio") && !pathname.includes("stock") && <Footer />
      }
    </>
  );
}
