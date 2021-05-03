import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

export const ALL_USERS_QUERY = gql`
    query ALL_USERS_QUERY {
        allUsers(skip:0) {
            id
            name
            events {
                title
            }
        }
    }
`

export default function Users() {
    const { data, loading, error } = useQuery(ALL_USERS_QUERY)
    console.log(data)
    return (
        <>
            {data?.allUsers.map(user => {
                return (
                    <>
                        {user.name}
                    </>
                )
            })}
        </>
    )
}