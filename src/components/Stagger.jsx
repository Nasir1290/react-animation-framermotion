import React from "react";

export default function Stagger() {
  const names = ["Nasir", "Sagor", "Niloy", "Nahid", "Tanjid"];
  return (
    <div className=" flex items-center justify-center">
      <select
        
        name="name"
        id=""
        className=" p-6 bg-sky-500 text-white font-bold rounded-t-lg m-auto mt-10"
      >
        <option value="" disabled>
          {" "}
          select a name
        </option>

        {names.map((name,index) => (
          <option key={index} className=" rounded-lg" value="name1">{name}</option>
        ))}
      </select>
    </div>
  );
}
