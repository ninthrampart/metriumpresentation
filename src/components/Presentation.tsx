import React from "react";
import logo from "../assets/Logo_Metrium 1.png";
// import logo from "../assets/Logo_Metrium 1.png"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ManagerBox from "./ManagerBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welcome from "./Welcome";
import BuildingData from "./BuildingData";
import SummaryTable from "./SummaryTable";
import { ScreenLayout } from "../models/ScreenLayout"

export interface PresentationProps{
    // isLoaded: boolean; 
    // building: any; 
    // items: any;
}


interface PresentationState {
    error: any;
    isLoaded: boolean;
    items: any;
    manager: any;
    building: any;
    lead: any;
    screenLayout: ScreenLayout
}

function getParams(location : any) {
    const searchParams = new URLSearchParams(location.search);
    return {
        query: searchParams.get('query') || '',
    };
}

class Presentation extends React.Component<PresentationProps, PresentationState> {

    constructor(props: PresentationProps){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            manager: null,
            building: null,
            lead: null,
            screenLayout: {
                height: 1,
                width: 1
    
            },
        } as PresentationState;
    }

    componentWillMount(){
        // console.log(window.innerHeight);
        // console.log(window.innerWidth);

        this.setState({
            screenLayout: new ScreenLayout(window.innerWidth, window.innerHeight)
        });

        // height: window.innerHeight, 
        // width: window.innerWidth
        // console.log(this.state.height);
        // console.log(this.state.width);
        console.table(this.state);
      }

    //   componentDidMount(){
    //     console.table(this.state);
    //   }

    componentDidMount(){
        console.log('Mounted');
        // console.log(window.location.pathname);
        // console.log(window.location.pathname.replace('/',''));
        // console.log(window.location.search);
        const params = getParams(window.location);
        // console.log(params);
        // console.log(params.query);
        console.log('Presentation state');
        console.table(this.state);

        document.title = 'Презентация';

        const qId = window.location.pathname.replace('/','');

        //const url = `http://localhost:5000/api/1/Presentation/query/${params.query}`;
        const url = `https://crmdevapi.metrium.ru:9226/presentations/1/query/${params.query}`;

        fetch(url, {method: 'GET', mode: 'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result.items,
                        manager: result.manager,
                        building: result.building,
                        lead: result.lead,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items, manager, building, lead, screenLayout } = this.state;
        // console.log('Image: ' + logo);

        const st = {
            backgroundColor: '#F8F8F8',
        }

        return (
            <div style={st}>
                <Container>
                    <Navbar style={st}>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="157.33px"
                                height="60px"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <ManagerBox  isLoaded={isLoaded} manager={manager} title="менеджер" />
                        </Navbar.Collapse>

                    </Navbar>
                    <Row>
                        <Col sm><Welcome isLoaded={isLoaded} lead={lead}/></Col>
                    </Row>
                    <BuildingData isLoaded={isLoaded} items={items} building={building} screenLayout={screenLayout} />
                    <SummaryTable isLoaded={isLoaded} items={items} building={building} />
                </Container>

            </div>
        );
    }
}

export default Presentation;
