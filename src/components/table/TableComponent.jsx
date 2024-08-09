import React from "react";
import {useNavigate} from 'react-router-dom'

import TableTitleBlockComponent from "./TableTitleBlockComponent";
import TableColumnBlockComponent from "./TableColumnBlockComponent";
import TableRowComponent from "./TableRowComponent";
import TableFooterComponent from "./TableFooterComponent";




export default function TableComponent(){
    // const navigate = useNavigate()

    // function handleNext(){
    //     navigate("/table-prototype-explained");
    // }


    const dataTableComponent = {
        headerData : {
            width: '5em',
            headers: [
                {
                    id: 1,
                    text: "5.4.1.10.2",
                    verdictStyle:'VerdictStyleLeft'
                },
                {
                    id: 2,
                    text: "TABLE: Vicat softening temperature of thermoplastics",
                    verdictStyle:'VerdictStyleLeft'
                },
                {
                    id: 3,
                    text: "Verdict",
                    verdictStyle:'VerdictStyleRight'
                }
            ]
        },

        columnData: {
            width: '5em',
            cols: [
                {
                    id: 1,
                    text: "column1"
                },
                {
                    id: 2,
                    text: "column2"
                },
                {
                    id: 3,
                    text: "column3"
                },
                {
                    id: 4,
                    text: "column4"
                }
            ]
        },

        rowsData:{
            rows: 
                [
                    {
                        id: 1,
                        text: "Row Item1",
                        values:[
                            {id: 1, text: '45h4'},
                            {id: 2, text: '67k'},
                            {id: 3, text: '67k6'},
                            {id: 4, text: '6j65j'}
                        ]
                    },
                    {
                        id: 2,
                        text: "Row Item2",
                        values:[
                            {id: 1, text: '45h4'},
                            {id: 2, text: '67k'},
                            {id: 3, text: '2f'},
                            {id: 4, text: '6j65j'}
                        ]
                    },
                    {
                        id: 3,
                        text: "Row Item3",
                        values:[
                            {id: 1, text: '45h4'},
                            {id: 2, text: '67k'},
                            {id: 3, text: '2f'},
                            {id: 4, text: '6j65j'}
                        ]
                    },
                    {
                        id: 4,
                        text: "Row Item4",
                        values:[
                            {id: 1, text: '67k'},
                            {id: 2, text: '56j'},
                            {id: 3, text: '2f'},
                            {id: 4, text: '6j65j'}
                        ]
                    }
                ]
        },
        
        supplementary:{
            title:"Supplementary information:",
            value: "Note : Tma should be considered as directed by appliable requirement"
        }
    }

   
    return (
        <>
            <div>
                <h1>Table prototype:</h1>
                
                <TableTitleBlockComponent
                    data = {dataTableComponent.headerData}
                />
                <TableColumnBlockComponent
                    data = {dataTableComponent.columnData}
                />

                <TableRowComponent
                    data = {dataTableComponent.rowsData}
                />

                <TableFooterComponent
                    supplementaryLabel = {dataTableComponent.supplementary.title}
                    supplementaryValue={dataTableComponent.supplementary.value}
                />
               

            </div>


        </>
    )
}