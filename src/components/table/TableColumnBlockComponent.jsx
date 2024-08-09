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
                    item.data.cols.map((col)=>(
                        <TableColumnCellComponent
                            key ={col.id}
                            text={col.text}
                        />
                    ))
                }
            </div>
        </>

    )
}