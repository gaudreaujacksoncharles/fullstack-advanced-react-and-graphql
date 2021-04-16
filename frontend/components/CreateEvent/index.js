import { useCreateEvent } from "../../lib/createEventState";
import { CreateEventCenter, CreateEventFooter, CreateEventHeader, CreateEventPanel, CreateEventGeneral, CreateEventStyles, CreateEventInput, CreateEventButton, CreateEventButtonGrayLabel, CreateEventButtonGreenLabel, CreateEventButtonLabel, CreateEventTextarea } from "./styles";

export default function CreateEvent() {
    const { createEventOpen, closeCreateEvent } = useCreateEvent()
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
                        <CreateEventButton onClick={closeCreateEvent}>
                            <CreateEventButtonGrayLabel>
                                Cancel
                            </CreateEventButtonGrayLabel>  
                        </CreateEventButton>
                        <CreateEventButton>
                            <CreateEventButtonGreenLabel>
                                Create
                            </CreateEventButtonGreenLabel>  
                        </CreateEventButton>
                    </CreateEventFooter>                    
                </CreateEventGeneral>
            </CreateEventPanel>
        </CreateEventStyles>
    )
}