import React from "react";
import Table from "react-bootstrap/Table";
import NumberFormat from "react-number-format";
import { Property } from "../models/Property";
import { Building } from "../models/Building";

export interface SummaryTableProps{
    items: Property[];
    isLoaded: boolean;
    building: Building;
}

class SummaryTable extends React.Component<SummaryTableProps>{

    // constructor(props){
    //     super(props);
    // }



    render(){

        const getStyle = (item : any) => {
            console.log(`getStyle:${item.statuscode}`);
            if(item.statuscode == "Продано"){
                return statusSoldStyle;
            }
            return statusAvailableStyle;
        };

        const getRecordText = (item : any, building : any) => {
            if(building == undefined || building === null){
                return "";
            }

            if(item.statuscode == "Продано"){
                return `${building.mtr_name} (лот продан)`;
            }
            return building.mtr_name;
        };
//`clamp(8px, 3vw, 18px)`
        // 18
        const headerRowStyle = {
            fontFamily: 'Circe',
            fontWeight: 'bold',
            fontSize: `clamp(8px, 2vw, 18px)`,
            letterSpacing: '0.05em',
            color: '#FFFFFF',
            background: '#90AFB6',
        } as React.CSSProperties;

        const dataRowStyle = {
            fontFamily: 'Circe',
            fontWeight: 'normal',
            fontSize: `clamp(8px, 2vw, 18px)`,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;

        const statusSoldStyle = {
            fontFamily: 'Circe',
            color: '#A21501',
        } as React.CSSProperties;

        const statusAvailableStyle = {
            fontFamily: 'Circe',
            color: '#363E42',
        } as React.CSSProperties;

        if(!this.props.isLoaded)
        {
            return <div>Loading...</div>
        }
        else if(this.props.items == undefined || this.props.items === null)
        {
            return <div>Nope...</div>
        }
        else
        {
            return(
                <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                    <tr style={headerRowStyle}>
                        <th>Проект</th>
                        <th>Корпус/Секция</th>
                        <th>Этаж</th>
                        <th>Площадь</th>
                        <th>Комнат</th>
                        <th>Цена м&#178;</th>
                        <th>Общая стоимость</th>
                        <th>Срок сдачи</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map( (item : any) => (
                        <tr style={dataRowStyle}>
                            <td style={getStyle(item)}>{getRecordText(item, this.props.building)}</td>
                            <td>{item.mtr_housingid.mtr_housing_number}/{item.mtr_sectionnumber}</td>
                            <td>{item.mtr_floor}</td>
                            <td><NumberFormat value={item.mtr_quantity} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /></td>
                            <td>{item.mtr_rooms}</td>
                            <td><NumberFormat value={item.mtr_cost} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /></td>
                            <td><NumberFormat value={item.mtr_price} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /></td>
                            <td>{item.mtr_housingid.mtr_date_exploitation_plan_string}</td>
                        </tr>
                    ) )}

                    </tbody>
                </Table>
            );
        }
    }
}

export default SummaryTable;