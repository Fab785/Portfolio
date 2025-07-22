import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="h-[200vh] bg-neutral-900"></div> {/* Ensure scroll space */}
    </div>
  );
}

export default App;













