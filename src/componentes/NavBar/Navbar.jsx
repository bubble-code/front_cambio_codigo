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
        <Navbar className="bg-gray-700">
            <NavbarGroup className="bg-gray-700">
                <NavbarHeading className="bg-gray-700">Favram S.L</NavbarHeading>
                <NavbarDivider />
                {/* <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={() => goToClick("/")} /> */}
                <Button className={Classes.MINIMAL} icon="document" text="Clonador" onClick={() => goToClick("clonador")} />
                {/* <Button className={Classes.MINIMAL} icon="document" text="Tutoriales" onClick={() => goToClick("tutoriales")} />
                <Button className={Classes.MINIMAL} icon="document" text="IA" onClick={() => goToClick("ia")} />
                <Button className={Classes.MINIMAL} icon="document" text="Tutorial Familia" onClick={() => goToClick("cfamilia")} /> */}
                <Button className={Classes.MINIMAL} icon="document" text="Ordende de Fab" onClick={() => goToClick("ordenF")} />
            </NavbarGroup>
        </Navbar>
    );
};

export default MiNavbar;