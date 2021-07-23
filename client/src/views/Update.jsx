import React, {useEffect, useState} from 'react';
import axios from "axios";
import {navigate, Link} from "@reach/router";

const Update = (props) => {

    const {id} = props;

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [skills, setSkills] = useState([]);

    const [errors, setErrors] = useState([]);

    const [found, setFound] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkills(res.data.skills);
                setSkillOne(res.data.skills[0]);
                setSkillTwo(res.data.skills[1]);
                setSkillThree(res.data.skills[2]);
                if (res.data.name === "CastError") {
                    setFound(false);
                }
            })
    }, [id])

    const updatePet = e => {
        e.preventDefault();

        let temp = skills
        temp[0] = (skillOne);
        temp[1] = (skillTwo);
        temp[2] = (skillThree);
        setSkills(temp)

        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name,
            type,
            description,
            skills
        })
            .then(res => {
                console.log(res)
                navigate(`/pets`)
            })
            .catch(err => {
                const errResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errResponse)) {
                    errorArray.push(errResponse[key].message);
                }
                setErrors(errorArray);
            })

    }

    return (
        <div>
            {found ?
                <>
                    <div className="d-flex align-items-center justify-content-between">
                        <h1>Pet Shelter</h1>
                        <Link to={"/pets"}>back to home</Link>
                    </div>
                    <h5 className="mb-3 mt-2">Edit {name}</h5>
                    <div className="d-flex">
                        {errors.map((err, i) => <p style={{color: "red", marginRight: "25px"}} key={i}>{err}</p>)}
                    </div>
                    <form className="container d-flex"
                          onSubmit={updatePet}>

                        <div className="border border-3 border-dark p-3 d-flex">
                            <div className="me-5">
                                <div className="bg-light border d-flex align-items-center p-2 justify-content-between mb-3"
                                     style={{width: "300px", height: "40px"}}>
                                    <label>Name:</label>
                                    <input type="text"
                                           onChange={(e) => setName(e.target.value)}
                                           value={name}
                                    />
                                </div>
                                <div className="bg-light border d-flex align-items-center p-2 justify-content-between mb-3"
                                     style={{width: "300px", height: "40px"}}>
                                    <label>Type:</label>
                                    <input type="text"
                                           onChange={(e) => setType(e.target.value)}
                                           value={type}
                                    />
                                </div>
                                <div className="bg-light border d-flex align-items-center p-2 justify-content-between mb-3"
                                     style={{width: "300px", height: "40px"}}>
                                    <label>Description:</label>
                                    <input type="text"
                                           onChange={(e) => setDescription(e.target.value)}
                                           value={description}
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Add Pet"/>

                            </div>
                            <div>
                                <h5 className="mb-3">Skills (optional):</h5>
                                <div className="bg-light border d-flex align-items-center p-2 justify-content-between mb-3"
                                     style={{width: "300px", height: "40px"}}>
                                    <label>Skill 1:</label>
                                    <input type="text"
                                           onChange={(e) => setSkillOne(e.target.value)}
                                           value={skillOne}
                                    />
                                </div>
                                <div className="bg-light border d-flex align-items-center p-2 justify-content-between mb-3"
                                     style={{width: "300px", height: "40px"}}>
                                    <label>Skill 2:</label>
                                    <input type="text"
                                           onChange={(e) => setSkillTwo(e.target.value)}
                                           value={skillTwo}
                                    />
                                </div>
                                <div className="bg-light border d-flex align-items-center p-2 justify-content-between mb-3"
                                     style={{width: "300px", height: "40px"}}>
                                    <label>Skill 3:</label>
                                    <input type="text"
                                           onChange={(e) => setSkillThree(e.target.value)}
                                           value={skillThree}
                                    />
                                </div>
                            </div>

                        </div>


                        <div>
                        </div>
                    </form>
                </>
                :
                <div>
                    <p>"We're sorry, but we could not find the author you are looking for. Would you like to add this
                        pet to our database?"</p>
                    <Link to={"/pets/new"}>Create</Link>
                </div>
            }
        </div>
    )
}

export default Update;