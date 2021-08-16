import {useHistory} from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {AiOutlinePicture} from 'react-icons/ai';


const Sidebar = () => {
    const history = useHistory()

    return (
        <div>
            <h1 className="m-5 text-center font-bold"> NASA Dashboard </h1>
            <Navigation
                onSelect={({itemId}) => {
                    history.push(itemId)
                }}
                items={[
                    {
                        title: 'APOD',
                        itemId: '/apod',
                        elemBefore: () => <AiOutlinePicture/>,
                    },
                    {
                        title: 'Link 2',
                        itemId: '/linktwo',
                        elemBefore: () => <div>hi</div>,
                        subNav: [
                            {
                                title: 'Projects',
                                itemId: '/management/projects',
                                // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                                elemBefore: () => <div>hi</div>,
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                                elemBefore: () => <div>hi</div>,
                            },
                        ],
                    },
                ]}
            />
        </div>)
}

export default Sidebar
