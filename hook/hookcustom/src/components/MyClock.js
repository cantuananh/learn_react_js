import React from "react";
import useClock from "./useClock";


function MyClock () {
    const [time, ampm] = useClock();

    return (
        <div id="Clock-style">
            {time}
            <span> {ampm}</span>
        </div>
    )
}

export default MyClock;