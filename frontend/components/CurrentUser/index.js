import { useUser } from "../User";
import { CurrentUserStyles, CurrentUserImage, CurrentUserName } from "./styles";

export default function CurrentUser() { 
    const me = useUser()
    if (!me) return null
    return (
        <CurrentUserStyles>
            <CurrentUserImage/>
            <CurrentUserName>{me.name}</CurrentUserName>
        </CurrentUserStyles>
    )
}