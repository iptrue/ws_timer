import React from "react";
import Table from "./Table";

const Room = ({ socket }) => {
  return (
    <div>
      <div class="text-red-400	p-4">
        Ход торгов <b>Тестовые торги на аппарат ЛОТОС N2033564</b>
      </div>
      <div class="bg-red-100 m-3 my-5 p-2 border-0 rounded w-fit ">
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торгов, указанных в таблице:
      </div>
      <Table socket={socket}></Table>
    </div>
  );
};

export default Room;
