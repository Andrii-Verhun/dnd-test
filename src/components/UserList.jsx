import { StrictModeDroppable } from './StrictModeDroppable';
import { Card } from './Card';

export const UserList = ({ users, id }) => {
    return (
        <StrictModeDroppable droppableId={id}>
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