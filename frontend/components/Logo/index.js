import Link from "next/link";
import { LogoStyles } from './styles'

export default function Logo() {
    return (
        <LogoStyles>
            <Link href="/">Sick fits</Link>
        </LogoStyles>
    )
}