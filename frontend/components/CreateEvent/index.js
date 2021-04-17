import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useCreateEvent } from "../../lib/createEventState";
import useForm from "../../lib/useForm";
import { CreateEventCenter, CreateEventFooter, CreateEventHeader, CreateEventPanel, CreateEventGeneral, CreateEventStyles, CreateEventInput, CreateEventButton, CreateEventButtonGrayLabel, CreateEventButtonGreenLabel, CreateEventButtonLabel, CreateEventTextarea } from "./styles";

const CREATE_EVENT_MUTATION = gql`
    mutation CREATE_EVENT_MUTATION(
        $title: String!
        $description: String
    ) {
        createEvent(data: {
            title:$title
            description:$description
        }) {
            id
            title
            description
        }
    }
`

export default function CreateEvent() {
    const { inputs, handleChange } = useForm()
    const [ createProduct, { loading, error, data } ] = useMutation(CREATE_EVENT_MUTATION, {
        variables: inputs
    })
    const { createEventOpen, closeCreateEvent } = useCreateEvent()
    if (!createEventOpen) return null
    return (
        <CreateEventStyles>
            <CreateEventPanel
                onSubmit={async (e) => {
                    e.preventDefault()
                    const res = await createProduct()
                    closeCreateEvent()
                }}>
                <CreateEventGeneral>
                    <CreateEventHeader>
                        <CreateEventInput
                            required
                            name='title'
                            placeholder='Title'
                            onChange={handleChange}
                            value={inputs.title}
                        />
                    </CreateEventHeader>                    
                    <CreateEventCenter>
                        <CreateEventTextarea
                            name='description'
                            placeholder='Description'
                            onChange={handleChange}
                            value={inputs.description}
                        />
                    </CreateEventCenter>
                    <CreateEventFooter>
                        <CreateEventButton onClick={closeCreateEvent}>
                            <CreateEventButtonGrayLabel>
                                Cancel
                            </CreateEventButtonGrayLabel>  
                        </CreateEventButton>
                        <CreateEventButton type='submit'>
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