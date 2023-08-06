// import { Droppable } from "react-beautiful-dnd";
// import { Draggable } from "react-beautiful-dnd";
// import { DragDropContext } from "react-beautiful-dnd";
import React, { useState } from 'react';

// import { Card } from "./Card";
// import { StrictModeDroppable } from './droppableStrick';
import { Board } from "./Board";

const cards = [
  {
    id: 'id-0',
    name: 'Andrii',
    position: 0,
  },
  {
    id: 'id-1',
    name: 'Oleh',
    position: 1,
  },
  {
    id: 'id-2',
    name: 'Anatolii',
    position: 2,
  },
  {
    id: 'id-3',
    name: 'Max',
    position: 3,
  },
]


export const App = () => {

  const [state, setState] = useState(cards);
  
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Board state={state} setState={setState}/>
      {/* <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragUpdate={onDragUpdate}
      >
        <StrictModeDroppable droppableId="droppable-1" >
          {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.map((el) => {
                  return (
                    <Draggable key={el.id} draggableId={el.id} index={el.position} >
                      {(provided, snapshot) => (
                          <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="card"
                          >
                            <Card draggableId={el.id}  name={el.name} />
                          </div>
                      )}
                    </Draggable>
                    
                  )})
                }
                {provided.placeholder}
              </div>
            )}
        </StrictModeDroppable>
      </DragDropContext> */}
    </div>

  );
};
