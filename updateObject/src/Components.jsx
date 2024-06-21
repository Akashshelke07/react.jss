import React, { useState } from "react";

function Components() {
    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    //The spread operator (...) is used to create a shallow copy of the existing car object
    // This allows us to update a specific property (e.g., year, make, or model) without modifying the other properties

    function ChangeYear(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }

    function ChangeMake(event) {
        setCar(c => ({ ...c, make: event.target.value }));
    }

    function ChangeModel(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }

    return (
        <>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={ChangeYear} /> <br/>
            <input type="text" value={car.make} onChange={ChangeMake} /> <br/>
            <input type="text" value={car.model} onChange={ChangeModel} />
        </>
    );
}

export default Components;
