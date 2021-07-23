import React from 'react';
import {Redirect, Router} from "@reach/router";
import Main from './views/Main.jsx';
import Detail from "./views/Detail.jsx";
import Update from "./views/Update.jsx";
import PetForm from "./components/PetForm.jsx";




function App() {


    return (
        <div className="p-5 pt-2">
            <Router>
                <Redirect from={"/"} to={"/pets"} noThrow={"true"}/>
                <PetForm  path="/pets/new"/>
                <Update path="/pets/:id/edit"/>
                <Detail path="/pets/:id"/>
                <Main path="/pets"/>
            </Router>
        </div>
    );
}

export default App;
