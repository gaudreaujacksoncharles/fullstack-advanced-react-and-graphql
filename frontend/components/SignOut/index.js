import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "../User"
import { SignOutStyles } from "./styles"

const SIGNOUT_MUTATION = gql`
    mutation {
        endSession
    }
`

export default function SignOut() {
    const [signout] = useMutation(SIGNOUT_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })
    return (
        <SignOutStyles
            type='button'
            onClick={signout}
        >
            Sign Out
        </SignOutStyles>
    )
}