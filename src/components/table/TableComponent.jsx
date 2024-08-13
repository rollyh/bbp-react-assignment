import React from "react";
import {useNavigate} from 'react-router-dom'

import TableTitleBlockComponent from "./TableTitleBlockComponent";
import TableColumnBlockComponent from "./TableColumnBlockComponent";
import TableRowComponent from "./TableRowComponent";
import TableFooterComponent from "./TableFooterComponent";




export default function TableComponent(){
 
    const [suppLabel, setSuppLabel] = React.useState('')
    const [suppValue, setSuppValue] = React.useState('')
    const [rowItems, setRowItems] = React.useState([])

    // const navigate = useNavigate()

    // function handleNext(){
    //     navigate("/table-prototype-explained");
    // }

    React.useEffect(()=>{
        getSupplementary();
        getRowItems()

    },[])

    function getRowItems(){

        let items = []

        test_result.Table.TableRows.Row.map((item, key)=>{

            if(key > 1 && key < test_result.Table.TableRows.Row.length - 2){
                items.push(item.TableCells)
            }

        })

        setRowItems(old => [...old, items]);
        console.log(rowItems)

        //const items = test_result.Table.TableRows.Row[test_result.Table.TableRows.Row.length - 2];
    }

    const test_result = {
        Table: {
          Id: 79,
          VerdictId: '',
          TableRows: {
            Row: [
              {
                TableRowId: 824,
                TableId: 79,
                RowIndex: 0,
                RowSpan: 0,
                GroupCode: '',
                Bookmark: 'Table_2TBL16_0',
                TableCells: {
                  Cell: [
                    {
                      CellId: 8575,
                      TableRowId: 824,
                      RowIndex: 0,
                      GroupCode: '',
                      Text: '8.9.2',
                      RowSpan: 1
                    },
                    {
                      CellId: 8576,
                      TableRowId: 824,
                      RowIndex: 0,
                      GroupCode: '',
                      Text: 'TABLE: Short circuiting of each single one of the CREEPAGE DISTANCES and AIR CLEARANCES for insulation in the MAINS PART between parts of opposite polarity in lieu of complying with the required measurements in 8.9.4',
                      RowSpan: 1
                    },
                    {
                      CellId: 8578,
                      TableRowId: 824,
                      RowIndex: 0,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8579,
                      TableRowId: 824,
                      RowIndex: 0,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8580,
                      TableRowId: 824,
                      RowIndex: 0,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8577,
                      TableRowId: 824,
                      RowIndex: 0,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 1
                    }
                  ]
                }
              },
              {
                TableRowId: 825,
                TableId: 79,
                RowIndex: 1,
                RowSpan: 0,
                GroupCode: '',
                Bookmark: 'Table_2TBL16_1',
                TableCells: {
                  Cell: [
                    {
                      CellId: 8581,
                      TableRowId: 825,
                      RowIndex: 1,
                      GroupCode: '',
                      Text: 'Specific areas of circuits short-circuited and test conditions',
                      RowSpan: 1
                    },
                    {
                      CellId: 8585,
                      TableRowId: 825,
                      RowIndex: 1,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8582,
                      TableRowId: 825,
                      RowIndex: 1,
                      GroupCode: '',
                      Text: 'Test in lieu of CREEPAGE DISTANCE or AIR CLEARANCE1)',
                      RowSpan: 1
                    },
                    {
                      CellId: 8583,
                      TableRowId: 825,
                      RowIndex: 1,
                      GroupCode: '',
                      Text: 'HAZARDOUS SITUATION observed (i.e., fire hazard, shock hazard, explosion, discharge of parts, etc.)?\nYes/No',
                      RowSpan: 1
                    },
                    {
                      CellId: 8584,
                      TableRowId: 825,
                      RowIndex: 1,
                      GroupCode: '',
                      Text: 'Remarks',
                      RowSpan: 1
                    },
                    {
                      CellId: 8586,
                      TableRowId: 825,
                      RowIndex: 1,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    }
                  ]
                }
              },
              {
                TableRowId: 826,
                TableId: 79,
                RowIndex: 2,
                RowSpan: 0,
                GroupCode: '',
                Bookmark: 'Table_2TBL16_2',
                TableCells: {
                  Cell: [
                    {
                      CellId: 8587,
                      TableRowId: 826,
                      RowIndex: 2,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 1
                    },
                    {
                      CellId: 8591,
                      TableRowId: 826,
                      RowIndex: 2,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8588,
                      TableRowId: 826,
                      RowIndex: 2,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 1
                    },
                    {
                      CellId: 8589,
                      TableRowId: 826,
                      RowIndex: 2,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 1
                    },
                    {
                      CellId: 8590,
                      TableRowId: 826,
                      RowIndex: 2,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 1
                    },
                    {
                      CellId: 8592,
                      TableRowId: 826,
                      RowIndex: 2,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    }
                  ]
                }
              },
              {
                TableRowId: 827,
                TableId: 79,
                RowIndex: 3,
                RowSpan: 0,
                GroupCode: '',
                Bookmark: 'Table_2TBL16_3',
                TableCells: {
                  Cell: [
                    {
                      CellId: 8593,
                      TableRowId: 827,
                      RowIndex: 3,
                      GroupCode: '',
                      Text: 'Supplementary information:\n1) Note:AC - AIR CLEARANCECD - CREEPAGE DISTANCE',
                      RowSpan: 1
                    },
                    {
                      CellId: 8594,
                      TableRowId: 827,
                      RowIndex: 3,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8595,
                      TableRowId: 827,
                      RowIndex: 3,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8596,
                      TableRowId: 827,
                      RowIndex: 3,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8597,
                      TableRowId: 827,
                      RowIndex: 3,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8598,
                      TableRowId: 827,
                      RowIndex: 3,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    }
                  ]
                }
              },
              {
                TableRowId: 828,
                TableId: 79,
                RowIndex: 4,
                RowSpan: 0,
                GroupCode: '',
                Bookmark: 'Table_2TBL16_4',
                TableCells: {
                  Cell: [
                    {
                      CellId: 8599,
                      TableRowId: 828,
                      RowIndex: 4,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 1
                    },
                    {
                      CellId: 8600,
                      TableRowId: 828,
                      RowIndex: 4,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8601,
                      TableRowId: 828,
                      RowIndex: 4,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8602,
                      TableRowId: 828,
                      RowIndex: 4,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8603,
                      TableRowId: 828,
                      RowIndex: 4,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    },
                    {
                      CellId: 8604,
                      TableRowId: 828,
                      RowIndex: 4,
                      GroupCode: '',
                      Text: '',
                      RowSpan: 0
                    }
                  ]
                }
              }
            ]
          }
        }
      }


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
                        ]
                    },
                    {
                        id: 2,
                        text: "Row Item2",
                        values:[
                            {id: 1, text: '45h4'},
                            {id: 2, text: '67k'},
                            {id: 3, text: '2f'},
                        ]
                    },
                    {
                        id: 3,
                        text: "Row Item3",
                        values:[
                            {id: 1, text: '45h4'},
                            {id: 2, text: '67k'},
                            {id: 3, text: '2f'},
                        ]
                    },
                    {
                        id: 4,
                        text: "Row Item4",
                        values:[
                            {id: 1, text: '67k'},
                            {id: 2, text: '56j'},
                            {id: 3, text: '2f'},
                        ]
                    }
                ]
        },
        
        supplementary:{
            title:"Supplementary information:",
            value: "Note : Tma should be considered as directed by appliable requirement"
        }
    }


    

      function getSupplementary(){
        const labels = test_result.Table.TableRows.Row[test_result.Table.TableRows.Row.length - 2];
        const values = test_result.Table.TableRows.Row[test_result.Table.TableRows.Row.length - 1];

        setSuppLabel(labels.TableCells.Cell[0].Text)
        setSuppValue(values.TableCells.Cell[0].Text)
      }
   
    return (
        <>
            <div>
                <h1>Table prototype:</h1>
                
                <TableTitleBlockComponent
                    //data = {dataTableComponent.headerData}

                    data = {test_result.Table.TableRows.Row[0].TableCells}
                />
                <TableColumnBlockComponent
                    //data = {dataTableComponent.columnData}
                    data = {test_result.Table.TableRows.Row[1].TableCells}
                />

                <TableRowComponent
                    data = {dataTableComponent.rowsData}

                    rows = {rowItems}
                />

                <TableFooterComponent
                    // supplementaryLabel = {dataTableComponent.supplementary.title}
                    // supplementaryValue={dataTableComponent.supplementary.value}

                    supplementaryLabel = {suppLabel}
                    supplementaryValue = {suppValue}

                />
               

            </div>


        </>
    )
}