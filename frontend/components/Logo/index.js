import Link from "next/link";
import { LogoStyles } from './styles'

export default function Logo() {
    return (
        <LogoStyles mr='1.6rem'>
            <Link href="/">Sick fits</Link>
        </LogoStyles>
    )
}