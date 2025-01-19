import Footer from "./Footer";
import Background from "./Background";
function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-black text-white">
      <div className="absolute top-0 w-full h-full">
        <Background />
      </div>
      <div className="z-30 flex flex-col items-center gap-5">
        <div className="text-center text-5xl font-bold">TIME TO DOMINATE</div>
        <div className="flex items-center gap-12">
          <div className="text-center">
            <div className="text-9xl font-bold">04</div>
            <div className="font-semibold text-2xl font-mono">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-9xl font-bold">53</div>
            <div className="font-semibold text-2xl font-mono">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-9xl font-bold">23</div>{" "}
            <div className="font-semibold text-2xl font-mono">Seconds</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
