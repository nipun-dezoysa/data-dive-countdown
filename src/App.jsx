
import acds from "./assets/acds.png";
import department from "./assets/department.png";
import Background from "./Background";
function App() {

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-black text-white">
      <div className="absolute top-0 w-full h-full">
        <Background />
      </div>
      <div className="z-30 flex flex-col items-center gap-5">
        <div className="text-center text-7xl font-bold">TIME TO DOMINATE</div>
        <div className="flex items-center gap-5 ">
          <div className="text-center">
            <div className="font-semibold text-2xl font-mono">Hours</div>
            <div className="text-9xl font-bold">04</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-2xl font-mono">Minutes</div>
            <div className="text-9xl font-bold">53</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-2xl font-mono">Seconds</div>
            <div className="text-9xl font-bold">23</div>
          </div>
        </div>
        <div className="text-center text-7xl font-bold">Hurry Up</div>
      </div>
      <div className="absolute bottom-0 flex gap-5 bg-white pt-5 px-10 rounded-t-3xl">
        <img className="w-[120px]" src={acds} alt="" />
        <img className="w-[120px]" src={department} alt="" />
      </div>
    </div>
  );
}

export default App;
