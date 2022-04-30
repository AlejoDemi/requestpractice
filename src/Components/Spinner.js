import {SpinnerRoundFilled} from "spinners-react";


export default function Spinner(){
    return(
        <div style={{display:"flex", alignContent:"center",height:"100vh"}}>
            <SpinnerRoundFilled style={{alignSelf:"center",margin:"auto"}} size={100} thickness={100} speed={100} color="black" />
        </div>
    )
}