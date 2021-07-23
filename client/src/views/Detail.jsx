import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";

const Detail = (props) => {

    const [pet, setPet] = useState("");
    const [loaded, setLoaded] = useState(false)

    const deletePet = (petId) => {
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
            .then(res => {
                navigate("/pets")
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [props.id])


    return (
        <div>
            <div className="d-flex align-items-center justify-content-between">
                <h1>Pet Shelter</h1>
                <Link to={"/pets"}>back to home</Link>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-3 mt-2">Details about: {pet.name}</h5>
                <button className="btn btn-danger" onClick={(e) => {
                    deletePet(pet._id)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-house me-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd"
                              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                    Adopt {pet.name}
                </button>
            </div>
            <div className="border border-3 border-dark p-3">
                <div className="d-flex justify-content-between align-items-center mb-4" style={ {width: "400px"} }>
                    <h3>Pet Type:</h3>
                    <h4>{pet.type}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4" style={ {width: "400px"} }>
                    <h3>Description:</h3>
                    <h4>{pet.description}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center" style={ {width: "400px"} }>
                    <h3>Skills:</h3>
                    <div className="d-flex flex-column">
                        {loaded && pet.skills.map( (skill, i ) => {
                            return <h4 key ={i}>{skill}</h4>
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detail;