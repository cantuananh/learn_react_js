import React, {useEffect, useState} from "react";

function SelectOption() {
    const carList = ["Mercedes 600", "bently", "Roolroy", "BMW", "Audi"];
    const colorList = ["Green", "Pink", "Blue", "orange", "red", "white", "titanium nature"];

    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0]
    })

    const handleCarChange = (e) => {
        const selectedCarName = e.target.value;

        setSelectedCar(prevState => ({
            ...prevState,
            car: selectedCarName
        }))
    }

    const
    handleColorChange = (event) => {
        const selectedColorName = event.target.value;
        setSelectedCar(previousState => ({
            ...previousState,
            color: selectedColorName
        }));
    };

    return (
        <div>
            <form>
                <div className={"d-inline"}>
                    <p>Select your car: </p>
                    <select onChange={handleCarChange}>
                        {carList.map((car, index) => (
                            <option value={car} key={index}>{car}</option>
                        ))
                        }
                    </select>
                </div>

                <div>
                    <p>Select your color: </p>
                    <select onChange={handleColorChange}>
                        {colorList.map((color, index) => (
                            <option value={color} key={index}>{color}</option>
                        ))
                        }
                    </select>
                </div>
            </form>

            <h1>Your car: <span style={{color: "red"}}>{selectedCar.car} - and {selectedCar.color}.</span></h1>

        </div>
    );
}

export default SelectOption;