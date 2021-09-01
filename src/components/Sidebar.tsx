import { Link } from "react-router-dom";
import { AiOutlinePicture, AiOutlineMenu, AiFillCloseSquare } from 'react-icons/ai';
import { GiAsteroid, GiTrackedRobot, GiInterceptorShip } from 'react-icons/gi'
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
            <ProSidebar title="NASA" collapsed={collapsed}>
                <div className="flex w-full justify-center">
                    {toggle &&
                    <button
                        className="mt-2"
                        onClick={() => {
                            setCollapsed(!collapsed)
                        }}>
                        {
                            collapsed
                                ? <AiOutlineMenu className="h-7 w-7"/>
                                : <AiFillCloseSquare className="h-7 w-7"/>
                        }
                    </button>
                    }
                </div>
                <Link to="/" className="m-5 text-center font-bold text-white overflow-hidden"> NASA Dashboard </Link>
                <Menu iconShape="square">
                    <MenuItem icon={<AiOutlinePicture/>}>Astronomy Pic OTD <Link to="/apod"/> </MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<GiAsteroid/>}>Near Earth Objects <Link to="/neo"/> </MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<GiTrackedRobot/>}>Mars Rover <Link to="/rover"/> </MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<GiInterceptorShip/>}>ISS Tracker <Link to="/isstracker"/> </MenuItem>
                </Menu>
            </ProSidebar>
        </>
    )
}

export default Sidebar
