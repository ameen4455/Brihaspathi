import React, {useState, useEffect} from 'react';

function Timer(){
    const [min, setMin] = useState(30);
    const [sec, setSec] = useState(1)
    useEffect(()=>{
        let interval = setInterval(()=>{
            setSec(sec => {
                if(sec > 0){
                    return sec-1;
                }else{
                    setMin(min => min-1);
                    return 60;
                }
            });
        }, 1000);
    },[])
    return(
        <p>
        {(min < 10)?"0"+min : min} : {(sec < 10)?"0"+sec : sec}
        </p>
    );
}
    
export default Timer;