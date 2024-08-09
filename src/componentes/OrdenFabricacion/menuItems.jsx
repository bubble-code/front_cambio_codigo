import { PalantirLogo } from "../Menu/Menu"
import { Icon } from '@blueprintjs/core';

import { useNavigate } from "react-router-dom";


export const useMenuItems = () => {
    const navigate = useNavigate();
    const goToClick = (path) => {
        navigate(path);
    };
    return [
        { type: 'divider' },
        { icon: 'new-text-box', text: 'Graficas' },
        { icon: 'new-object', text: 'Analisis' },
        { icon: 'new-link', text: 'Crear', onclick: () => { goToClick('crearOF') } },
        { type: 'divider' }
    ]
}