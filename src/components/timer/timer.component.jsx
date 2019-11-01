import React, {useState, useEffect} from 'react';



function Timer(props){
    const [min, setMin] = useState(window.localStorage.getItem('min'));
    const [sec, setSec] = useState(window.localStorage.getItem('sec'));

    var duration = new Date("02:46:40");

    // "Set object as local key"
    // var  eventTime = {"minute":30, "seconds":59};
    // window.localStorage.setItem("1", JSON   .stringify(eventTime));
    // var eventTime = JSON.parse(window.localStorage.getItem('1'));
    // console.log(eventTime.seconds);

    useEffect(()=>{
        console.log();
        let interval = setInterval(()=>{

                    setSec(sec => {
                if(sec > 0){
                    window.localStorage.setItem('sec', sec-1);
                    return sec-1;
                }else if(sec == 0){
                    setMin(min =>{
                        window.localStorage.setItem('min', min-1);
                        return min-1});
                    window.localStorage.setItem('sec', 59);
                    return 59;
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