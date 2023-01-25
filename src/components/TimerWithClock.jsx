import React from "react";
import Timer from "./Timer";

const TimerWithClock = ({ socket }) => {
  return (
    <th
      scope="col"
      class="text-sm font-medium text-blue-900 px-6 py-4  bg-red-100 border-0	 rounded-3xl"
    >
      <div className="grid grid-cols-2 place-items-center	">
        <Timer socket={socket}></Timer>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </th>
  );
};

export default TimerWithClock;
