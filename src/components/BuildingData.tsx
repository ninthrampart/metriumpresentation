import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BuildingDescription from "./BuildingDescription";
import PropertyCard from "./PropertyCard2";
import { Building } from "../models/Building";
import { Property } from "../models/Property";
import { ScreenLayout } from "../models/ScreenLayout";


export interface BuildingDataProps{
    isLoaded: boolean; 
    building: Building; 
    items: Property[];
    screenLayout: ScreenLayout;
}

class BuildingData extends React.Component<BuildingDataProps>{

    constructor(props: BuildingDataProps){
        super(props)
    }

    render(){
        console.log(`Loading: ${this.props.isLoaded}`);
        if (!this.props.isLoaded) {
            return <div>Loading...</div>;
        }
        else if(this.props.building == undefined || this.props.building === null){
            return <div>Nope...</div>;
        }
        else
        {
            return (
                <div>
                    <Row className="pb-5 pt-5">
                        <Col><BuildingDescription building={this.props.building} screenLayout={this.props.screenLayout} /></Col>
                    </Row>
                    {this.props.items.map((item : any) => (
                        <Row>
                            <Col className="pb-5"><PropertyCard item={item} 
                            buildingName={this.props.building.mtr_name} 
                            screenLayout={this.props.screenLayout}/></Col>
                        </Row>

                    ))}
                </div>
            );
        }
    }
}

export default BuildingData;