import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import Sidebar from './components/Sidebar'
import Media from "react-media";
import APODPage from './Pages/APODPage'
import NeoPage from './Pages/NeoPage'
import RoverPage from './Pages/RoverPage'

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
                    <Route path="/apod">
                        <div>
                            <APODPage/>
                        </div>
                    </Route>
                    <Route path="/neo">
                        <div>
                            <NeoPage/>
                        </div>
                    </Route>
                    <Route path="/rover">
                        <RoverPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
