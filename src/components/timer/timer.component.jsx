import React, {useState, useEffect} from 'react';



const Timer = (props) => {
    const [min, setMin] = useState(JSON.parse(window.localStorage.getItem(props.match.params.event)).min);
    const [sec, setSec] = useState(JSON.parse(window.localStorage.getItem(props.match.params.event)).sec);

    var duration = new Date("02:46:40");

    useEffect(()=>{
        let jon = {
            min : min,
            sec : sec
        }
        let interval = setInterval(() => {
            setSec(sec => {
                if(sec > 0){
                    jon.sec-=1
                    localStorage.setItem(props.match.params.event, JSON.stringify(jon));
                    return sec-1;
                }else{
                    setMin(min => {
                        jon.min-=1;
                        jon.sec = 59;
                        localStorage.setItem(props.match.params.event, JSON.stringify(jon));
                        return min - 1;
                    });
                    return 59;
                }
            })
        }, 1000);
    }, []);
    
    return(
        <p>
        {(min < 10)?"0"+min : min} : {(sec < 10)?"0"+sec : sec}
        </p>
    );
}
    
export default Timer;