import Link from "next/link";
import { LogoStyles } from './styles'

export default function Logo({mr}) {
    return (
        <LogoStyles mr={mr}>
            <Link href="/">Sick fits</Link>
        </LogoStyles>
    )
}