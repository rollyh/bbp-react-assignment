import React from "react";
import './TableTitleBlockStyle.css'


export default function TableRowCellComponent(props){

    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{

        setItem(props)

    },[props])


    return (

        <>
            <div className="RowCell">
                <input
                    value={item.text}
                />
            </div>
        </>
        
    )

}