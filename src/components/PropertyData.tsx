import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NumberFormat from "react-number-format";
import { Property } from "../models/Property";
import { ScreenLayout } from "../models/ScreenLayout";

export interface PropertyDataProps{
    item: Property;
    screenLayout: ScreenLayout;
}

// interface PropertyDataState {
//     width: number;
//     height: number;
// }
//, PropertyDataState
class PropertyData extends React.Component<PropertyDataProps>{

    constructor(props: PropertyDataProps){
        super(props);
        console.log(props);
        // this.state = {
        //     height: 1,
        //     width: 1

        // } as PropertyDataState;
    }

    // componentWillMount(){
    //     // console.log(window.innerHeight);
    //     // console.log(window.innerWidth);

    //     this.setState({
    //         height: window.innerHeight, 
    //         width: window.innerWidth
    //     } as PropertyDataState);


    //     // console.log(this.state.height);
    //     // console.log(this.state.width);
    //     console.table(this.state);
    //   }

    //   componentDidMount(){
    //     console.table(this.state);
    //   }

      


    render(){

        const getStyle1 = () : React.CSSProperties => {
            if(this.props.screenLayout.width < 1024){
                console.log('moveRightStyle');
                return moveRightStyle;
            }
            console.log('moveRightStyle');
            return moveRightStyle;
        };

        const getStyle2 = () : React.CSSProperties => {
            if(this.props.screenLayout.width < 1024){
                console.log('moveRightStyle');
                return moveRightStyle;
            }
            console.log('moveRightStyle2');
            return moveRightStyle2;
        };

      const noMoveRightStyle = {
        paddingLeft: '0px',
        } as React.CSSProperties;

        const moveRightStyle = {
            paddingLeft: '35px',
        } as React.CSSProperties;

        const moveRightStyle2 = {
            paddingLeft: '98px',
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


        return(
            <>
            <Col sm={6}> 
                <Row>
                    <Col style={getStyle1()} sm={6}><div style={price1Style1}>Общая стоимость:</div><div style={price2Style1}><NumberFormat value={this.props.item.mtr_price} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /> &#8381;</div></Col>
                    <Col style={getStyle2()} sm={6}><div style={price1Style2}>Цена за м:</div><div style={price2Style2}><NumberFormat value={this.props.item.mtr_cost} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /> &#8381;</div></Col>
                    <Col sm={12}>
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
                </Row> 
            </Col>

            
            
            
            </>
        );
    }

}

export default PropertyData;