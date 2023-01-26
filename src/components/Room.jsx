import React from "react";
import Table from "./Table";

const Room = ({ socket }) => {
  return (
    <div className="mt-28">
      <div class="text-red-400	p-4 ">
        Ход торгов <b>Тестовые торги на аппарат ЛОТОС N2033564</b>
      </div>
      <div class="bg-red-100 m-3 my-5 p-2 border-0 rounded w-fit mb-auto h-10 ">
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торгов, указанных в таблице:
      </div>
      <div class="flex flex-col h-screen justify-between mt-10">
        <Table socket={socket}></Table>
      </div>
    </div>
  );
};

export default Room;
