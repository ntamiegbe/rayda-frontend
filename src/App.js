import Banner from "./components/Banner";
import FeaturedItems from "./components/FeaturedItems";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="max-w-[1358px] mx-auto">
        <Navbar />
        <Banner />
        <FeaturedItems />
      </div>
    </main>
  )
}

export default App;
