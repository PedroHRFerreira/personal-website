import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "32px" }}>{children}</main>
      <Footer />
    </div>
  );
}
