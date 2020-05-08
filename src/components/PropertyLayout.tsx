import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NumberFormat from "react-number-format";
import { Property } from "../models/Property";
import { ScreenLayout } from "../models/ScreenLayout";

export interface PropertyLayoutProps{
    item: Property;
    screenLayout: ScreenLayout;
}

interface PropertyLayoutState {
    width: number;
    height: number;
}

class PropertyLayout extends React.Component<PropertyLayoutProps>{

    constructor(props: PropertyLayoutProps){
        super(props);
        console.log(props);
        // this.state = {
        //     height: 1,
        //     width: 1

        // } as PropertyLayoutState;
    }

    // componentWillMount(){
    //     // console.log(window.innerHeight);
    //     // console.log(window.innerWidth);

    //     this.setState({
    //         height: window.innerHeight, 
    //         width: window.innerWidth
    //     } as PropertyLayoutState);


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
                console.log('price1Style1');
                return price1Style1;
            }
            console.log('price1Style');
            return price1Style;
        };

        const getStyle2 = () : React.CSSProperties => {
            if(this.props.screenLayout.width < 1024){
                console.log('price2Style1');
                return price2Style1;
            }
            console.log('price2Style');
            return price2Style;
        };

        

        const centerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } as React.CSSProperties;

        const price1Style = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } as React.CSSProperties;

        const price1Style1 = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
            paddingLeft: '20px',
        } as React.CSSProperties;

        const price2Style = {
            fontFamily: 'PT Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } as React.CSSProperties;

        const price2Style1 = {
            fontFamily: 'PT Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#363E42',
            paddingLeft: '20px',
        } as React.CSSProperties;

        return(
            <Col sm={6}>
                <Row>
                    {/* price1Style price2Style */}
                    <Col sm={12}><div style={getStyle1()}>Площадь:</div>
                        <div style={getStyle2()}>
                            <NumberFormat value={this.props.item.mtr_quantity} displayType={'text'} thousandSeparator={' '} decimalSeparator={','} /> м&#178;
                        </div>
                    </Col>
                    <Col sm={12}><Card.Img src={this.props.item.mtr_layout}></Card.Img></Col>
                </Row>
            </Col>
            
            
        );
    }

}

export default PropertyLayout;