import React from "react";
import TableTitleBlockCellComponent from "./TableTitleBlockCellComponent";
import './TableTitleBlockStyle.css'


 export default function TableTitleBlockComponent(props){
    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{

        setItem(props)
    },[props])


        

    return(

        <>

        <div className="TitleBlock">

            {
                item.data.Cell.map((header)=>(
                    <TableTitleBlockCellComponent
                        key ={header.CellId}
                        text={header.Text}
                        verdictStyle = {header.verdictStyle}
                    />
                ))
            }
        </div>

        </>
    )
 }