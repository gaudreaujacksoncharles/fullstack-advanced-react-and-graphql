import { useCreateEvent } from "../../lib/createEventState";
import { CreateEventStyles } from "./styles";

export default function CreateEvent() {
    const { createEventOpen } = useCreateEvent()
    if (!createEventOpen) return null
    return (
        <CreateEventStyles>
            Create Event!!!
        </CreateEventStyles>
    )
}