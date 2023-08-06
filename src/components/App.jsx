// import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import React from 'react';

import { Card } from "./Card";
import { StrictModeDroppable } from './droppableStrick';

const cards = [
  {
    id: '0123',
    name: 'Andrii',
    position: 0,
  },
  {
    id: '131231',
    name: 'Oleh',
    position: 1,
  },
  {
    id: '2123123',
    name: 'Anatolii',
    position: 2,
  },
  {
    id: '3123213',
    name: 'Max',
    position: 3,
  },
]


export const App = () => {
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
      <DragDropContext >
        <StrictModeDroppable droppableId="droppable-1">
          {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((el) => {
                  return (
                    <Draggable key={el.id} draggableId={el.id} index={el.position}>
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
          {/* <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((el) => {
                  return (
                    <Draggable key={el.id} draggableId={el.id} index={el.position}>
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
        </Droppable> */}
      </DragDropContext>
    </div>

  );
};
