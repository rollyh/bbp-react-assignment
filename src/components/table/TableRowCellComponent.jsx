import React from "react";
import './TableTitleBlockStyle.css'


export default function TableRowCellComponent(props){

    const [item, setItem] = React.useState({
        name: props.name,
        value: props.text

    })

    React.useEffect(()=>{
        setItem(props)
    },[props])

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setItem(prevFormData=>{
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    return (

        <>
            <div className="RowCell">
                <input
                    type="text"
                    key = {item.name}
                    name={item.name}
                    value={item.value}
                    onChange={handleChange}
                />
            </div>
        </>
        
    )

}