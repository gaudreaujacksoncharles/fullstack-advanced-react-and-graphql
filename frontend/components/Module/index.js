import { ModuleStyles } from "./styles";

export default function Module({children}) {
    return (
        <ModuleStyles>
            {children}
        </ModuleStyles>
    )
}