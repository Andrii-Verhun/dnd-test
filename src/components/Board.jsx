import {
  DragDropContext,
  // Droppable,
  Draggable
} from "react-beautiful-dnd";

import { Card } from "./Card";
import { StrictModeDroppable } from './droppableStrick';

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
        {/* <Droppable droppableId="droppable-1" > */}
        <StrictModeDroppable droppableId="droppable-1" >
          {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.map((el, index) => {
                  return (
                    <Draggable key={el.id} draggableId={el.id} index={index} >
                      {(provided) => (
                          <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card"
                          >
                            <Card name={el.name} index={index} />
                          </div>
                      )}
                    </Draggable>
                    
                  )})
                }
                {provided.placeholder}
              </div>
            )}
        </StrictModeDroppable>
        {/* </Droppable> */}
      </DragDropContext>
    )
}