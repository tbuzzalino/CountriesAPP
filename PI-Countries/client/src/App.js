import { Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import NavBar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CountriesDetails from "./components/CountriesDetails/CountriesDetails";
import Form from "./components/FormActivities/Form";

function App() {
    return (
        <>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={NavBar} />
            <Route path="/home" component={Home} />
            <Route path="/countries/:idCountry" component={CountriesDetails} />
            <Route path="/form" component={Form} />
            {/* <Route path="/home" component={Pagination} /> */}
        </>
    );
}

export default App;
