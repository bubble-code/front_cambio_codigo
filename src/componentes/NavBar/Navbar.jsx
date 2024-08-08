import {
    Button,
    Classes,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Navbar
} from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

const MiNavbar = () => {
    const navigate = useNavigate();
    const goToClick = (path) => {
        navigate(path);
    };
    return (
        <Navbar>
            <NavbarGroup>
                <NavbarHeading>Favram S.L</NavbarHeading>
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={() => goToClick("/")} />
                <Button className={Classes.MINIMAL} icon="document" text="Clonador" onClick={() => goToClick("clonador")} />
                <Button className={Classes.MINIMAL} icon="document" text="Tutoriales" onClick={() => goToClick("tutoriales")} />
                <Button className={Classes.MINIMAL} icon="document" text="IA" onClick={() => goToClick("ia")} />
                <Button className={Classes.MINIMAL} icon="document" text="Tutorial Familia" onClick={() => goToClick("cfamilia")} />
            </NavbarGroup>
        </Navbar>
    );
};

export default MiNavbar;