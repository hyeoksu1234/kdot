import Navigation from "../components/Navigation";
import MenuSection from "../components/MenuSection";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <MenuSection />
      </main>
    </div>
  );
}
