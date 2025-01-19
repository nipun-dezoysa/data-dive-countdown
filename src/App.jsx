import Footer from "./Footer";
import Background from "./Background";
import ClockDisplay from "./ClockDisplay";
function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-black text-white">
      <div className="absolute top-0 w-full h-full">
        <Background />
      </div>
      <ClockDisplay />
      <Footer />
    </div>
  );
}

export default App;
