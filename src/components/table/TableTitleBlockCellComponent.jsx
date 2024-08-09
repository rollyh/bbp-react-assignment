import React from "react";
import './TableTitleBlockStyle.css'

export default function TableTitleBlockCellComponent(props){

    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{
        console.log('TableTitleBlockCellComponent')
        console.log(props)
        setItem(props)

    },[props])


    

    return(
        <>
            <div className="TitleBlockCell">
                <div className={item.verdictStyle}>
                    {item.text}
                </div>
            </div>
        </>
    )
}