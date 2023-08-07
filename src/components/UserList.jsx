import { StrictModeDroppable } from './DroppableStrick';
import { Card } from './Card';

export const UserList = ({ users }) => {
    return (
        <StrictModeDroppable droppableId='dp-1'>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {users.map((el, index) => (
                        <Card key={el.id} el={el} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </StrictModeDroppable>
    );
};