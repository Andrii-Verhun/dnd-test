import { DragDropContext } from "react-beautiful-dnd";

import { UserList } from "./UserList";


export const Board = ({ state, setState }) => {
  const onDragEnd = (evt) => {
    const { destination, source, reason } = evt;

    if (!destination || reason === "CANCEL") return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    };
    
    const sourceIndexDp = state.findIndex((el) => source.droppableId === el.id);
    const destinationIndexDp = state.findIndex((el) => destination.droppableId === el.id);
    
    const users = Object.assign([], state);
    const droppedUser = (state[sourceIndexDp]).cards[source.index];
  
    users[sourceIndexDp].cards.splice(source.index, 1);
    users[destinationIndexDp].cards.splice(destination.index, 0, droppedUser);
    
    setState(users);
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {state.map((el) => <UserList users={el.cards} id={el.id} key={el.id}/>)}
    </DragDropContext>
  );
};