import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="max-w-[1358px] mx-auto">
        <Navbar />
        <Banner />
      </div>
    </main>
  )
}

export default App;
