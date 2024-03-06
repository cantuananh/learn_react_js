import React, {useState} from "react";

function CountDown() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const changeTime = (e) => {
        setTime(e.target.value);
    }

    const handleCountdown = () => {
        clearInterval(intervalId);

        const id = setInterval(() => {
                setTime(prevTime => prevTime - 1)

        }, 1000)

        setIntervalId(id);
    }

    if (time === 0) {
        clearInterval(intervalId);
        alert("Thoi gian da ket thuc!")
    }

    return (
        <div>
            <div>
                <input onChange={changeTime} value={time} type="text" placeholder={"Set time..."}/>
            </div>
            <div>
                <h1>Time: {time}</h1>
                <button onClick={handleCountdown}>Start</button>
            </div>
        </div>
    );
}

export default CountDown;