import './App.css';
import {Header} from "./components/Header/Header";
import {Routes} from "./route/routes";

function App() {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="container">
                {Routes()}
            </div>
        </div>
    );
}

export default App;
