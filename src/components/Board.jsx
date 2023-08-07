import { DragDropContext } from "react-beautiful-dnd";

import { UserList } from "./UserList";


export const Board = ({ state, setState }) => {
  const onDragEnd = (evt) => {
    const { destination, source, reason } = evt;

    if (!destination || reason === "CANCEL") return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    };

    const users = Object.assign([], state);
    const droppedUser = state[source.index];
    users.splice(source.index, 1);
    users.splice(destination.index, 0, droppedUser);

    setState(users);
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <UserList users={state} />
    </DragDropContext>
  );
};