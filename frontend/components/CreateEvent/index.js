import { useCreateEvent } from "../../lib/createEventState";
import { CreateEventFooter, CreateEventPanel, CreateEventStyles } from "./styles";

export default function CreateEvent() {
    const { createEventOpen } = useCreateEvent()
    if (!createEventOpen) return null
    return (
        <CreateEventStyles>
            <CreateEventPanel>
                <CreateEventFooter>
                    
                </CreateEventFooter>
            </CreateEventPanel>
        </CreateEventStyles>
    )
}