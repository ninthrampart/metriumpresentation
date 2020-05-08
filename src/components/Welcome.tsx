import React from "react";
import { Lead } from "../models/Lead";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface WelcomeProps{
    isLoaded: boolean;
    lead: Lead;
}

class Welcome extends React.Component<WelcomeProps>{

    // constructor(props){
    //     super(props);
    // }

    render(){

        const testStyle = {
        } as React.CSSProperties;

        const statusSoldStyle = {
            fontFamily: 'Roboto',
            color: '#A21501',
        } as React.CSSProperties;

        const divStyle = {
            background: '#90AFB6',
        } as React.CSSProperties;
        console.log(`Welcome: ${this.props.isLoaded}`);
        if(!this.props.isLoaded)
        {
            return <div>Loading...</div>
        }
        else if(this.props.lead == undefined || this.props.lead === null)
        {
            return <div>Nope...</div>
        }
        else
        {
            return(
                <div style={divStyle}>
                    <div className="pl-4 pr-4" style={{fontFamily: 'Roboto',fontWeight: 350,fontSize: `calc(100% + 1vw + 1vh)`,letterSpacing: '0.05em',color: '#FFFFFF', paddingTop: '5%'}}>Здравствуйте, {this.props.lead.firstname}!</div>
                    <div className="pl-4 pr-4" style={{fontFamily: 'Roboto',fontWeight: 400,fontSize: 18,letterSpacing: '0.05em',color: '#FFFFFF', paddingBottom: '5%'}}><p>Мы подобрали квартиры, максимально соответствующие Вашим запросам.</p> <p>С ними Вы можете ознакомиться ниже.</p></div>
                </div>
                // <>
                // <Row style={divStyle}>                    
                //     <Col style={{fontFamily: 'Roboto',fontWeight: 350,fontSize: `calc(100% + 1vw + 1vh)`,letterSpacing: '0.05em',color: '#FFFFFF', paddingTop: '5%'}} sm={12}>
                //         <p>Здравствуйте, {this.props.lead.firstname}!</p>
                //     </Col>
                //     <Col style={{fontFamily: 'Roboto',fontWeight: 400,fontSize: 18,letterSpacing: '0.05em',color: '#FFFFFF', paddingBottom: '5%'}} sm={12}><p>Мы подобрали квартиры, максимально соответствующие Вашим запросам.</p> 
                //         <p>С ними Вы можете ознакомиться ниже.</p>
                //     </Col>
                // </Row>
                // </>
            );
        }
    }
}

export default Welcome;