import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NumberFormat from "react-number-format";
// import floorSchema from "../assets/floor.png";
import PropertyStatus from './PropertyStatus';
import { Property } from "../models/Property"
import PropertyData from "./PropertyData"
import PropertyLayout from "./PropertyLayout"
import { ScreenLayout } from "../models/ScreenLayout";

export interface PropertyCardProps{
    item: Property;
    buildingName?: string;
    screenLayout: ScreenLayout;
}

class PropertyCard extends React.Component<PropertyCardProps>{

    constructor(props: PropertyCardProps){
        super(props);
        console.log(props);
    }

    render(){

        const getHeaderStyle1 = () : React.CSSProperties => {
            if(this.props.screenLayout.width < 1024){
                console.log('noDisplayStyle');
                return noDisplayStyle;
            }
            console.log('no style');
            return header3Style;
        };

        const noDisplayStyle = {
            display: 'none',
        } as React.CSSProperties;

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
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: `clamp(12px, 3vw, 24px)`,
            letterSpacing: '0.05em',
            color: '#363E42',
            paddingLeft: '35px',
        } as React.CSSProperties;


        const header3Style = {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: '0.05em',
            textDecorationLine: 'underline',
            color: '#90AFB6',
        } as React.CSSProperties;


        const price1Style = {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
        } as React.CSSProperties;


        const price1Style1 = {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
            // paddingLeft: '18px',
        } as React.CSSProperties;


        const price1Style2 = {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
            // marginLeft: '-10px',
        } as React.CSSProperties;


        const price2Style = {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
        } as React.CSSProperties;


        const price2Style1 = {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
            // paddingLeft: '18px',
        } as React.CSSProperties;


        const price2Style2 = {
            fontFamily: 'Roboto',
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
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: `clamp(8px, 3vw, 18px)`,
            letterSpacing: '0.05em',
            color: '#838791',
        } as React.CSSProperties;


        const data2Style = {
            fontFamily: 'Roboto',
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
                                <Col md={4} xs={7} style={header1Style}>{this.props.item.mtr_rooms}-комнатная квартира</Col>
                                <Col md={4} xs={5}><PropertyStatus status={this.props.item.statuscode}/></Col>
                                <Col style={getHeaderStyle1()}>{this.props.buildingName}</Col>
                            </Row>
                            <hr/>
                        </Card.Title>
                        <Row>
                            <PropertyData item ={this.props.item} screenLayout={this.props.screenLayout} />
                            <PropertyLayout item ={this.props.item} screenLayout={this.props.screenLayout} />
                        </Row>
                        <Row>
                            <Col sm>
                                
                            </Col>
                            <Col sm></Col>{/*floorSchema*/}
                        </Row>
                    </Card.Body>
                </Card>
            );
        }
    }
}

export default PropertyCard;