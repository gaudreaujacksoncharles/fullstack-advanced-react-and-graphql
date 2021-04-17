import { useUser } from "../User";
import { CurrentUserStyles, CurrentUserImage, CurrentUserName } from "./styles";

export default function CurrentUser() { 
    const me = useUser()
    if (!me) return null
    console.dir(me, {depth:1})
    return (
        <CurrentUserStyles>
            <CurrentUserImage photo={me?.photo?.image?.publicUrlTransformed} />
            <CurrentUserName>{me.name}</CurrentUserName>
        </CurrentUserStyles>
    )
}