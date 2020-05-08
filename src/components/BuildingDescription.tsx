import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import testzk from "../assets/Festival-park_aerial_final_0002 1.png";
import {Building} from "../models/Building";
import { ScreenLayout } from "../models/ScreenLayout";

export interface BuildingDescriptionProps{
    building: Building;
    screenLayout: ScreenLayout;
}

class BuildingDescription extends React.Component<BuildingDescriptionProps>{

    constructor(props: BuildingDescriptionProps){
        super(props);
    }

    render(){

        const getStyle1 = () : React.CSSProperties => {
            if(this.props.screenLayout.width < 1024){
                console.log('noDisplayStyle');
                return noDisplayStyle;
            }
            console.log('no style');
            return {};
        };

        const noDisplayStyle = {
            display: 'none',
        } as React.CSSProperties;

        const buildingHeaderStyle = {
            fontFamily: 'Circe',
            fontWeight: 'bold',
            fontSize: 36,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;

        const buildingDescriptionStyle = {
            fontFamily: 'Circe',
            fontWeight: 'normal',
            fontSize: 16,
            letterSpacing: '0.05em',
            color: '#363E42',
        } as React.CSSProperties;

        if(this.props.building == undefined || this.props.building === null)
        {
            return <div>Nope...</div>
        }
        else
        {
            return(
                <div><p style={buildingHeaderStyle}>{this.props.building.mtr_name}</p>
                    <Row>
                        <Col sm><Image src={this.props.building.mtr_urlphotoproject} fluid /></Col>{/*testzk*/}
                        <Col style={getStyle1()} sm>
                            <p style={buildingDescriptionStyle}>
                                {this.props.building.mtr_description_presentation}
                            </p>
                        </Col>
                    </Row>
                </div>

            );
        }

    }
}

export default BuildingDescription;