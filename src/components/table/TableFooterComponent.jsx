import React from "react";
import './TableTitleBlockStyle.css'


export default function TableFooterComponent(props){
    const [item, setItem] = React.useState(props)

    React.useEffect(()=>{
        setItem(props)
    },[props])


    return (
            <>
                <div className="FooterCell">            
                    <div className="FooterCell--supp">
                        {item.supplementaryLabel}
                    </div>

                    <div className="FooterCell--supp--value">
                        <textarea
                            value={item.supplementaryValue}
                            className="Footer-supp-textare"
                        />
                    </div>

                </div>
            </>
        
    )

}