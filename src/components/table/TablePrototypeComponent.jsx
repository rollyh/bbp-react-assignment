import React from "react";
import {useNavigate} from 'react-router-dom'


export default function TablePrototypeComponent(){
    const navigate = useNavigate()

    function handleBack(){
        navigate("/table-prototype");
    }

    return (
        <>
            <div>
            <div>
                <img src={require('../../../images/table-prototype-component.png')}/>
            </div>

            <button onClick={handleBack}>
                Back
            </button>

            </div>
       
        </>

    )

}