import { Draggable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

import { Card } from "./Card";
import { StrictModeDroppable } from './droppableStrick';

export const Board = ({ state, setState }) => {
    const cards = state;

    const isMove = (id, otkuda, kuda) => {
    const dragElem = cards.findIndex((el) => el.id === id);
    const otherElem = cards.findIndex((el) => el.position === kuda);


    cards[dragElem].position = kuda;
    cards[otherElem].position = otkuda;

    console.log(cards);

    setState(cards);

    // console.log('dragelem:', dragElem, 'otherelem:', otherElem);

  }
  

  const onDragStart = (evt) => {
    // console.log(1, evt);
    }
    
  const onDragEnd = (evt) => {
    // console.log(2, evt);
    const id = evt.draggableId;
    const otkuda = evt.source.index;
    const kuda = evt.destination.index;

    isMove(id, otkuda, kuda);



  }
  const onDragUpdate = (evt) => {
    console.log(3, evt);
  }

    return (
              <DragDropContext
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
    )
}