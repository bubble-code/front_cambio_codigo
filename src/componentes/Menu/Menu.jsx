import {
    Menu as BMenu,
    Classes,
    MenuItem as BMenuItem,
    MenuDivider,
    Icon,
    Navbar
} from "@blueprintjs/core";

const Menu = ({ items, classname, title }) => {
    return (
        <BMenu className={classname}>
            {title && <span>Ordenes de Fabricacion</span>}
            {
                items.map((item, index) => {
                    if (item.type == 'divider') {
                        return <MenuDivider key={index} />
                    }
                    return (
                        <MenuItem
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            labelElement={item.labelElement}
                            onClick={item.onclick}
                            intent={item.intent}
                        />
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