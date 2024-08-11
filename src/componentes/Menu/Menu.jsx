import {
    Menu as BMenu,
    Classes,
    MenuItem as BMenuItem,
    MenuDivider
} from "@blueprintjs/core";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Menu = ({ items, classname, title }) => {
    return (
        <BMenu className="flex flex-col font-roboto">
            {title || ''}
            {
                items.map((item, index) => {
                    if (item.type == 'divider') {
                        return <MenuDivider key={index} />
                    }
                    return (
                        <NavLink
                            className={({ isActive }) => classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium')}
                            key={index}
                            to={item.path}
                        >
                            {item.text}
                        </NavLink>
                    )
                }
                )
            }
        </BMenu>
    )
}

const MenuItem = ({ icon, text, labelElement, onClick, intent }) => {
    return (
        <BMenuItem
            icon={icon}
            text={text}
            labelElement={labelElement}
            onClick={onClick}
            intent={intent}
        />
    );
};
const PalantirLogo = () => (
    <svg className={Classes.ICON} width="16" height="16" viewBox="0 0 18 23" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.718 16.653L9 20.013l-7.718-3.36L0 19.133 9 23l9-3.868-1.282-2.48zM9 14.738c-3.297 0-5.97-2.696-5.97-6.02C3.03 5.39 5.703 2.695 9 2.695c3.297 0 5.97 2.696 5.97 6.02 0 3.326-2.673 6.022-5.97 6.022zM9 0C4.23 0 .366 3.9.366 8.708c0 4.81 3.865 8.71 8.634 8.71 4.77 0 8.635-3.9 8.635-8.71C17.635 3.898 13.77 0 9 0z"
            fillRule="evenodd"
        />
    </svg>
);

export { Menu, MenuItem, PalantirLogo }