import { useCreateEvent } from "../../lib/createEventState";
import { CreateEventCenter, CreateEventFooter, CreateEventHeader, CreateEventPanel, CreateEventGeneral, CreateEventStyles, CreateEventInput, CreateEventButton, CreateEventButtonLabel, CreateEventTextarea } from "./styles";

export default function CreateEvent() {
    const { createEventOpen } = useCreateEvent()
    if (!createEventOpen) return null
    return (
        <CreateEventStyles>
            <CreateEventPanel>
                <CreateEventGeneral>
                    <CreateEventHeader>
                        <CreateEventInput
                            placeholder='Title'
                        />
                    </CreateEventHeader>                    
                    <CreateEventCenter>
                        <CreateEventTextarea
                            placeholder='Description'
                        />
                    </CreateEventCenter>
                    <CreateEventFooter>
                        <CreateEventButton>
                            <CreateEventButton>
                                <CreateEventButtonLabel>
                                    Cancel
                                </CreateEventButtonLabel>  
                            </CreateEventButton>                         
                        </CreateEventButton>  
                    </CreateEventFooter>                    
                </CreateEventGeneral>
            </CreateEventPanel>
        </CreateEventStyles>
    )
}