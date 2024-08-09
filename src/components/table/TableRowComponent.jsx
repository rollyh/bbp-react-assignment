import React from "react";
import TableRowCellComponent from "./TableRowCellComponent";
import './TableTitleBlockStyle.css'

export default function TableRowComponent(props){
    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{

        console.log('TableRowComponent')
        console.log(props)
        setItem(props)
    },[props])



    return(
        <>
            {
                item.data.rows.map((row)=>(
                        <div className="RowBlock">{
                            row.values.map((val)=>(
                                    <TableRowCellComponent
                                        key ={val.id}
                                        text={val.text}
                                    />
                            ))
                        }</div>
                ))
            }
        </>
    )
}