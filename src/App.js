import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import APOD from './Pages/APOD';
import Sidebar from './components/Sidebar'
import Media from "react-media";

function App() {
    return (
        <Router>
            <div className="flex w-full min-h-screen">
                <div className="">
                    <Media queries={ {
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    } }>
                        { matches => (
                            <>
                                { matches.small && <Sidebar collapsible={ true } toggle={true}/> }
                                { matches.medium && <Sidebar/> }
                                { matches.large && <Sidebar/> }
                            </>
                        ) }
                    </Media>
                </div>
                <Switch>
                    <Route path="/poop">this is poop</Route>
                    <Route path="/apod">
                        <div className="">
                            <APOD/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
