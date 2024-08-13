import React from "react";
import TableColumnCellComponent from "./TableColumnCellComponent";
import './TableTitleBlockStyle.css'




export default function TableColumnBlockComponent(props){
    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{
        setItem(props)
    },[props])

    return(

        <>
            <div className="ColumnHeaderBlock">
                {
                    item.data.Cell.map((col)=>(
                        <TableColumnCellComponent
                            key ={col.CellId}
                            text={col.Text? col.Text : '_'}
                        />
                    ))
                }
            </div>
        </>

    )
}