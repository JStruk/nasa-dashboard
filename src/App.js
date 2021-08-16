import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import APOD from './Pages/APOD';
import Sidebar from './components/Sidebar'

function App() {
    return (
        <Router>
            <div className="flex w-full">
                <div className="w-1/4">
                    <Sidebar/>
                </div>
                <Switch>
                    <Route path="/poop">this is poop</Route>
                    <Route path="/apod">
                        <div className="w-3/4">
                            <APOD/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
