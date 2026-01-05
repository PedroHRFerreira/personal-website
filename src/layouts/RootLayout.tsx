import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main style={{ paddingBottom: "200px" }}>{children}</main>
      <Footer />
    </div>
  );
}
