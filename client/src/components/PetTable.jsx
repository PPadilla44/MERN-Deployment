import {Link} from "@reach/router";
import React from 'react';


const PetTable = (props) => {

    return (
        <table className="table container table-bordered border-dark text-center">
            <thead className="table-primary">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className="table-secondary">
            {props.pets.map((p, i) => {
                return <tr key={i}>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td className="d-flex justify-content-evenly">
                        <Link to={`/pets/${p._id}`} className="btn btn-primary">Details</Link>
                        <Link to={`/pets/${p._id}/edit`} className="btn btn-primary">Edit</Link>
                    </td>
                </tr>
            })}
            </tbody>

        </table>
    )
}

export default PetTable;