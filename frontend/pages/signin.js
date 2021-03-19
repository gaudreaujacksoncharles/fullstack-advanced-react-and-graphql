import styled from 'styled-components'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const GridStyles = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
`

export default function SignInPage() {
    return (
        <GridStyles>
            <SignIn />
            <SignUp />
        </GridStyles>
    )
}