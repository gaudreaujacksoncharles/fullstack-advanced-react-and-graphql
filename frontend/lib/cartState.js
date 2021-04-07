import { useContext, useState } from "react";
import { createContext } from "react";

const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

function CartStateProvider({ children }) {
    // This is our own custom provider. We will store data (state) and functionality (updaters) in here and anyone can access it visa the consumer!
    const [cartOpen, setCartOpen] = useState(true)

    function toggleCart() {
        setCartOpen(!cartOpen)
    }

    function closeCart() {
        setCartOpen(false)
    }

    function openCart() {
        setCartOpen(true)
    }

    return <LocalStateProvider value={{
        cartOpen,
        setCartOpen,
        closeCart,
        openCart
    }}>{children}</LocalStateProvider>
}

// make a custom hook for accessing the cart local state
function useCart() {
    const all = useContext(LocalStateContext)
    return all
}
export { CartStateProvider, useCart }