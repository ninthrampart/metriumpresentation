import React from "react";
import {Manager} from "../models/Manager"

export interface ManagerBoxProps{
    isLoaded: boolean; 
    manager: Manager;
    title: string;
}

class ManagerBox extends React.Component<ManagerBoxProps> {

    constructor(props: ManagerBoxProps){
        super(props);
    }

    render() {

        const fioStyle = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;

        const titleStyle = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#90AFB6',
        } as React.CSSProperties;


        const phoneStyle = {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: `clamp(8px, 3vw, 18px)`,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;


        console.log(`Loading: ${this.props.isLoaded}`);
        if (!this.props.isLoaded) {
            return <div>Loading...</div>;
        }
        if (this.props.manager == undefined || this.props.manager === null) {
            return <div>Nope...</div>;
        }
        else {
            return (
                <div>
                    <span style={fioStyle} >{this.props.manager.lastname} {this.props.manager.firstname}</span><br/><span style={titleStyle} >{this.props.title}</span><br/><span style={phoneStyle} >{this.props.manager.mobilephone}</span>
                </div>
            );
        }

    }
}

export default ManagerBox;