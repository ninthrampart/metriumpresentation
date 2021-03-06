import Col from "react-bootstrap/Col";
import React from "react";

export interface PropertyStatusProps{
    status: string;
}

function PropertyStatus(props: PropertyStatusProps){

    const statusSoldStyle = {
        fontFamily: 'Roboto',
        fontSize: `clamp(12px, 3vw, 24px)`,
        color: '#A21501',
    }

    const statusAvailableStyle = {
        fontFamily: 'Roboto',
        color: '#28b463',
    }
    console.log(props.status);
    if(props.status === "Продано"){
        return <Col style={statusSoldStyle}>Продано</Col>;
    }
    else{
        return <Col style={statusAvailableStyle}></Col>;
    }
}

export default PropertyStatus;