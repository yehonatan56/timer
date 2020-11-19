import React, { useState }  from 'react';

export default function Time() {
    const [time , settime] = useState(0);

    function timeset(e) {
        settime(e.target.value);
    }

    function done(e) {
        e.preventDefault();
        var second  = time + '000';
        const secondnumber = Number(second);

        let counter = 0;
        const timer = setInterval(() => {
            if (counter <= 1) {clearInterval(timer)}
            alert('STOP');
            counter++;
        }, secondnumber);
    
    }
    return(
        <form onSubmit={done}>
            <input type="number" onChange={timeset} value={time}  required/>
            <input type="submit" />
        </form>
    )
}