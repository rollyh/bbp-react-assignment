import React  from "react";
import './TableTitleBlockStyle.css'



export default function TableColumnCellComponent(props){

    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{

        setItem(props)

    },[props])


    return (
        <>
            <div className="ColumnCell"> 
                    {item.text}
            </div>
        </>
        
    )

}