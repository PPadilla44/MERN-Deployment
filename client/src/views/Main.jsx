import React, {useEffect, useState} from 'react';
import axios from "axios";
import PetTable from "../components/PetTable.jsx";
import {Link} from "@reach/router";

const Main = (props) => {

    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res => {
                let ordered = res.data;
                setPets(ordered.sort((a,b) => a.type.localeCompare(b.type)));
                setLoaded(true)
            })
    }, [])

    const removeFromDom = (petId) => {
        setPets(pets.filter(pet => pet._id !== petId))
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <h1>Pet Shelter</h1>
                <Link to={"/pets/new"}>Add a pet to the shelter</Link>
            </div>
            <h5 className="mb-3 mt-2">These pets are looking for a good home</h5>
            {loaded && <PetTable pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;