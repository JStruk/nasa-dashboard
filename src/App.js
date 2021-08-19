import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import Sidebar from './components/Sidebar'
import Media from "react-media";
import APODPage from './Pages/APODPage/index'

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
                            <APODPage/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
