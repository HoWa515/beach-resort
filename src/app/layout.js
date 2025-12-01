import Logo from "./_components/Logo";
import Nav from "./_components/Nav";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "Beach Club",
  description: "Luxurious hotels located in tropical islands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-800 text-primary-200 min-h-screen">
        <header>
          <Logo />
          <Nav />
        </header>
        <main>{children}</main>
        <footer>&copy; Beach Resort 2025</footer>
      </body>
    </html>
  );
}
