import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NumberFormat from "react-number-format";
// import floorSchema from "../assets/floor.png";
import PropertyStatus from './PropertyStatus';
import { Property } from "../models/Property"

export interface PropertyCardProps{
    item: Property;
    buildingName?: string;
}

class PropertyCard extends React.Component<PropertyCardProps>{

    constructor(props: PropertyCardProps){
        super(props);
        console.log(props);
    }

    render(){

        const cardStyle = {
            boxShadow: '5px 15px 20px rgba(144, 175, 182, 0.3)'
        } as React.CSSProperties;


        const moveLeft = {
            paddingLeft: '18px',
        } as React.CSSProperties;


        const marginLeft = {
            marginLeft: '-10px',
        } as React.CSSProperties;


        const header1Style = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;


        const header3Style = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: '0.05em',
            textDecorationLine: 'underline',
            color: '#90AFB6',
        } as React.CSSProperties;


        const price1Style = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
        } as React.CSSProperties;


        const price1Style1 = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
            // paddingLeft: '18px',
        } as React.CSSProperties;


        const price1Style2 = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
            // marginLeft: '-10px',
        } as React.CSSProperties;


        const price2Style = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
        } as React.CSSProperties;


        const price2Style1 = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
            // paddingLeft: '18px',
        } as React.CSSProperties;


        const price2Style2 = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
            // marginLeft: '-10px',
        } as React.CSSProperties;

//fontSize: `clamp(8px, 3vw, 18px)`,
        //18
        const data1Style = {            
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `clamp(8px, 3vw, 18px)`,
            letterSpacing: '0.05em',
            color: '#838791',
        } as React.CSSProperties;


        const data2Style = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `clamp(8px, 3vw, 18px)`,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;


        //var formattedDate = format(date, "MMMM Do, YYYY H:mma");

        if(this.props.item == undefined || this.props.item === null)
        {
            return <div>Nope...</div>
        }
        else{
            return(
                <Card style={cardStyle} >
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col style={header1Style}>{this.props.item.mtr_rooms}-комнатная квартира</Col>
                                <PropertyStatus status={this.props.item.statuscode} />
                                <Col style={header3Style}>{this.props.buildingName}</Col>
                            </Row>
                            <hr/>
                        </Card.Title>
                        <Row>
                            <Col sm>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Row>
                                            <Col style={{marginRight: '-24px'}} sm><div style={price1Style1}>Общая стоимость:</div><div style={price2Style1}><NumberFormat value={this.props.item.mtr_price} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /> &#8381;</div></Col>
                                            <Col sm><div style={price1Style2}>Цена за м:</div><div style={price2Style2}><NumberFormat value={this.props.item.mtr_cost} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /> &#8381;</div></Col>
                                            <Col sm><div style={price1Style}>Площадь:</div><div style={price2Style}><NumberFormat value={this.props.item.mtr_quantity} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /> м2</div></Col>
                                        </Row>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <ul className="list-group list-group-flush" >
                                    <li className="list-group-item">
                                        <Row> <Col style={data1Style} className="col-8">Срок РВЭ</Col>
                                            <Col style={data2Style} className="col-4">{this.props.item.mtr_housingid.mtr_date_exploitation_plan_string}</Col></Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row> <Col style={data1Style} className="col-8">Очередь</Col>
                                            <Col style={data2Style} className="col-4">{this.props.item.mtr_housingid.mtr_numberqueue}</Col></Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row> <Col style={data1Style} className="col-8">Корпус</Col>
                                            <Col style={data2Style} className="col-4">{this.props.item.mtr_housingid.mtr_housing_number}</Col></Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row> <Col style={data1Style} className="col-8">Секция</Col>
                                            <Col style={data2Style} className="col-4">{this.props.item.mtr_sectionnumber}</Col></Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row> <Col style={data1Style} className="col-8">Этаж</Col>
                                            <Col style={data2Style} className="col-4">{this.props.item.mtr_floor}</Col></Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row> <Col style={data1Style} className="col-8">Уровень отделки</Col>
                                            <Col style={data2Style} className="col-4">{this.props.item.mtr_furnish_level}</Col></Row>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm><Card.Img src={this.props.item.mtr_layout}></Card.Img></Col>{/*floorSchema*/}
                        </Row>
                    </Card.Body>
                </Card>
            );
        }
    }
}

export default PropertyCard;