import { useContext, useState } from "react";
import { createContext } from "react";

const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

function CreateEventStateProvider({ children }) {
    // This is our own custom provider. We will store data (state) and functionality (updaters) in here and anyone can access it visa the consumer!
    const [createEventOpen, setCreateEventOpen] = useState(true)

    function toggleCreateEvent() {
        console.log(createEventOpen);
        setCreateEventOpen(!createEventOpen)
    }

    function closeCreateEvent() {
        setCreateEventOpen(false)
    }

    function openCreateEvent() {
        setCreateEventOpen(true)
    }

    return <LocalStateProvider value={{
        createEventOpen,
        setCreateEventOpen,
        closeCreateEvent,
        openCreateEvent,
        toggleCreateEvent,
    }}>{children}</LocalStateProvider>
}

// make a custom hook for accessing the cart local state
function useCreateEvent() {
    const all = useContext(LocalStateContext)
    return all
}
export { CreateEventStateProvider, useCreateEvent }