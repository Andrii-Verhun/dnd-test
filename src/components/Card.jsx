// import { Draggable } from "react-beautiful-dnd";

export const Card = ({name, index}) => {
    return (
        <div>
            <p>{index + 1}</p>
            <h4>{name}</h4>
        </div>
    )
}