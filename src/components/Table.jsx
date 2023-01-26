import React from "react";
import { useSelector } from "react-redux";
import "./../index.css";
import TimerWithClock from "./TimerWithClock";

const Table = ({ socket }) => {
  const i = useSelector((state) => state.timer);
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class=" inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white ">
                <tr>
                  <th scope="col" class="text-l font-medium text-blue-900 p-10">
                    ХОД
                  </th>
                  {i.userNum === 0 ? (
                    <TimerWithClock socket={socket}></TimerWithClock>
                  ) : (
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-900 px-6 py-4 "
                    ></th>
                  )}
                  {i.userNum === 1 ? (
                    <TimerWithClock socket={socket}></TimerWithClock>
                  ) : (
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-900 px-6 py-4 "
                    ></th>
                  )}
                  {i.userNum === 2 ? (
                    <TimerWithClock socket={socket}></TimerWithClock>
                  ) : (
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-900 px-6 py-4 "
                    ></th>
                  )}
                  {i.userNum === 3 ? (
                    <TimerWithClock socket={socket}></TimerWithClock>
                  ) : (
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-900 px-6 py-4 "
                    ></th>
                  )}
                  {i.userNum === 4 ? (
                    <TimerWithClock socket={socket}></TimerWithClock>
                  ) : (
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-900 px-6 py-4 "
                    ></th>
                  )}
                </tr>
              </thead>
              <thead class="bg-white border-b ">
                <tr>
                  <th
                    scope="col"
                    class="text-l font-medium text-blue-900 px-6 py-4 "
                  >
                    Параметры и требования
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-900 px-6 py-4 "
                  >
                    Участник 1
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-900 px-6 py-4 "
                  >
                    Участник 2
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-900 px-6 py-4 rounded-lg	"
                  >
                    Участник 3
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-900 px-6 py-4 rounded-lg	"
                  >
                    Участник 4
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-900 px-6 py-4 rounded-lg	"
                  >
                    Участник 5
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                </tr>
                <tr class="white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>{" "}
                  <td
                    colspan="1"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                  >
                    lorem lorem
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
