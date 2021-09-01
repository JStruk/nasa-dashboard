import { BrowserRouter, Link } from "react-router-dom";
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
            <ProSidebar title="NASA" collapsed={collapsed} data-testid="sidebar" >
                <div className="flex w-full justify-center">
                    {toggle &&
                    <button
                        data-testid="collapseButton"
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
                <BrowserRouter>
                    <Link to="/" className="m-5 text-center font-bold text-white overflow-hidden"> NASA
                        Dashboard
                    </Link>
                </BrowserRouter>
                <Menu iconShape="square">
                    <MenuItem icon={<AiOutlinePicture/>}>Astronomy Pic OTD
                        <BrowserRouter>
                            <Link to="/apod"/>
                        </BrowserRouter>
                    </MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<GiAsteroid/>}>Near Earth Objects
                        <BrowserRouter>
                            <Link to="/neo"/>
                        </BrowserRouter>
                    </MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<GiTrackedRobot/>}>Mars Rover
                        <BrowserRouter>
                            <Link to="/rover"/>
                        </BrowserRouter>
                    </MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<GiInterceptorShip/>}>ISS Tracker
                        <BrowserRouter>
                            <Link to="/isstracker"/>
                        </BrowserRouter>
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </>
    )
}

export default Sidebar
