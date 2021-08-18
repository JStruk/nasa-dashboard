import { Link } from "react-router-dom";
import { AiOutlinePicture } from 'react-icons/ai';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
    return (
        <>
            <ProSidebar title="NASA">
                <h1 className="m-5 text-center font-bold text-white"> NASA Dashboard </h1>
                <Menu iconShape="square">
                    <MenuItem icon={ <AiOutlinePicture/> }>Astronomy Pic OTD <Link to="/apod"/> </MenuItem>
                </Menu>
            </ProSidebar>
        </>
    )
}

export default Sidebar
