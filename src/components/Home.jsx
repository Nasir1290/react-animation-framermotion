import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" bg-slate-500 p-3 text-white font-bold text-md flex flex-row w-10/12 items-center m-auto justify-between mb-5">
      <Link to="/keyFrame">KeyFrame</Link>

      <Link to="/scrollIntoView">ScrollIntoView</Link>

      <Link to="/varients">Varients</Link>

      <Link to="/transitionType">TransitionType</Link>

      <Link to="/textMotion">TextMotion</Link>
    </div>
  );
}
