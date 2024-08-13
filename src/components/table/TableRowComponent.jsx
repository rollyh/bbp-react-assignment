import React from "react";
import TableRowCellComponent from "./TableRowCellComponent";
import './TableTitleBlockStyle.css'

export default function TableRowComponent(props){
    const [item, setItem] = React.useState(props)
    const [rows, setRows] = React.useState([])

    React.useEffect(()=>{
        console.log('TableRowComponent')
        console.log(props)

        let jkk = props.rows.map((x)=> {
            let jj =  x.map((z)=>z)
            setRows(jj);
        })


        console.log(rows)
        setItem(props)
    },[props])



    return(
        <>
            {
                rows.map((row)=>(
                        <div className="RowBlock">{
                            row.Cell.map((val)=>(
                                    <TableRowCellComponent
                                        key ={val.CellId}
                                        text={val.Text}
                                    />
                            ))
                        }</div>
                ))
            }
        </>
    )
}