export default function Navbar() {
  // const list = [{}];
  return (
    <div className="top-0 sticky">
      <div className="bg-white h-[50px] w-0">
        <div className="ml-[38vw] flex gap-5">
          <button className="rounded-2xl mt-[10px] w-[80px] h-[30px] bg-white text-black hover:cursor-pointer hover:bg-lime-400">
            NAVBAR
          </button>
          <button className="rounded-2xl mt-[10px] w-[80px] h-[30px] bg-black text-white">
            NAVBAR
          </button>
          <button className="rounded-2xl mt-[10px] w-[80px] h-[30px] bg-black text-white">
            NAVBAR
          </button>
        </div>
      </div>
    </div>
  );
}
