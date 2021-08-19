import { Link } from "react-router-dom";
import { AiOutlinePicture } from 'react-icons/ai';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from "react";

interface SidebarProps {
    collapsible?: boolean
    toggle?: boolean
}

const Sidebar = ({ collapsible = false, toggle = false }: SidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(collapsible)

    return (
        <>
            <ProSidebar title="NASA" collapsed={ collapsed }>
                { toggle && <button className="mt-2" onClick={ () => { setCollapsed(!collapsed) } }>{collapsed ? 'O' : 'X'}</button>}
                <Link to="/" className="m-5 text-center font-bold text-white overflow-hidden"> NASA Dashboard </Link>
                <Menu iconShape="square">
                    <MenuItem icon={ <AiOutlinePicture/> }>Astronomy Pic OTD <Link to="/apod"/> </MenuItem>
                </Menu>
            </ProSidebar>
        </>
    )
}

export default Sidebar
