import { Draggable } from "react-beautiful-dnd";

export const Card = ({el, index}) => {
    return (
        <Draggable draggableId={el.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="card"
                >
                    <p>{index + 1}</p>
                    <h4>{el.name}</h4>
                </div>
            )}
        </Draggable>
    )
}