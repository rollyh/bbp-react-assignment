import React from "react";
import TableTitleBlockCellComponent from "./TableTitleBlockCellComponent";
import './TableTitleBlockStyle.css'


 export default function TableTitleBlockComponent(props){
    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{

        console.log('TableTitleBlockComponent')
        console.log(props)
        setItem(props)
    },[props])


        

    return(

        <>

        <div className="TitleBlock">
            {
                item.data.headers.map((header)=>(
                    <TableTitleBlockCellComponent
                        key ={header.id}
                        text={header.text}
                        verdictStyle = {header.verdictStyle}
                    />
                ))
            }
        </div>

        </>
    )
 }