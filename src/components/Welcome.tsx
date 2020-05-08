import React from "react";
import { Lead } from "../models/Lead";

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
            fontFamily: 'Circe',
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
                    <div className="pl-5" style={{fontFamily: 'Circe',fontWeight: 350,fontSize: `calc(100% + 1vw + 1vh)`,letterSpacing: '0.05em',color: '#FFFFFF', paddingTop: '5%'}}>Здравствуйте, {this.props.lead.firstname}!</div>
                    <div className="pl-5" style={{fontFamily: 'Circe',fontWeight: 400,fontSize: 18,letterSpacing: '0.05em',color: '#FFFFFF', paddingBottom: '5%'}}>Мы подобрали квартиры, максимально соответствующие Вашим запросам.<br/> С ними Вы можете ознакомиться ниже.</div>
                </div>
            );
        }
    }
}

export default Welcome;