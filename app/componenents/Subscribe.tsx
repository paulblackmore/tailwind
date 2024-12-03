import React from "react";

export const Subscribe = () => {
  return (
    <div className="w-full h-96 grid grid-cols-2">
      <section className="bg-slate-100 text-cyan-950 p-14 flex flex-col justify-center gap-10">
        <h3 className="text-3xl">This is a call to action!</h3>
        <p>
          Ever man are put down his very. And marry may table him avoid. Hard
          sell it were into it upon. He forbade affixed parties of assured to me
          windows. Happiness him nor she disposing provision.
        </p>
      </section>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-400 p-14 flex flex-col justify-center gap-10">
        <form className="flex flex-col gap-4">
          <h5 className="text-xl">Stay up to date</h5>
          <input
            className="w-full h-10 rounded p-4 text-cyan-500"
            placeholder="Enter email and stay up to date..."
          />
          <button className="bg-slate-500 text-gray-200 py-2 px-4 rounded font-semibold w-40">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
