import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import  Card  from "react-bootstrap/Card";

function SortableItem(props){
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return(
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card body className="m-3">{props.id}</Card>
            
        </div>
    );
}

export default SortableItem