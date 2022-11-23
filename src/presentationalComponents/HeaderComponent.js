import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, CardDeck, Card, CardBody, CardSubtitle, CardTitle, CardImg, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React , {Component} from 'react'
import IButton from '../basicComponents/button/Button.js';
import IAlert from '../basicComponents/alert/Alert.js';
import {withScroll, withToggle, withDismiss} from '../basicComponents/Base.js';
import IAlertLink from '../basicComponents/alert/AlertLink.js';
import IDropdown from '../basicComponents/dropdown/Dropdown.js';
import IFormGroup from '../basicComponents/form/FormGroup.js';
import IForm from '../basicComponents/form/Form.js';
import IButtonGroup from '../basicComponents/button/ButtonGroup.js';
import ICard from '../basicComponents/card/Card.js';
import ICardGroup from '../basicComponents/card/CardGroup.js';
import ICarousel from '../basicComponents/card/Carousel.js';
import ITable from '../basicComponents/card/Table.js';
import INav from '../basicComponents/nav/Nav.js';
import ITab from '../basicComponents/nav/Tab.js';
import * as CONSTANTS from '../basicComponents/constants.js'
import { Media } from 'reactstrap';
import { Container, Row, Col, CardGroup, CardColumns } from 'reactstrap';
import Select from 'react-select';

const FormWithScroll = withScroll(IForm);
const AlertWithToggle = withDismiss(withToggle(IAlert));

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    handleButtonsSelection(selectedButtons) {
        console.log("Header Components");
        console.log(selectedButtons);
    }

    render() {
        const Countries = [
          { label: "Albania", value: 355 },
          { label: "Argentina", value: 54 },
          { label: "Austria", value: 43 },
          { label: "Cocos Islands", value: 61 },
          { label: "Kuwait", value: 965 },
          { label: "Sweden", value: 46 },
          { label: "Venezuela", value: 58 }
        ];

        const customStyles = {
          menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 20,
          }),

          control: (_, { selectProps: { width }}) => ({
            width: width
          }),

          singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
          }
        }

        const items = [
          {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'Slide 1',
            caption: 'Slide 1',
            id: 1
          },
          {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'Slide 2',
            caption: 'Slide 2',
            id: 2
          },
          {
            src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
            altText: 'Slide 3',
            caption: 'Slide 3',
            id: 3
          }
        ];

        const toggleButton = <IButton size="sm" > Show toggling </IButton>

        const tab1 = (<ITable headingRow={['A', 'B', 'C']} rows={[[1,2,3], [4,5,6]]} striped hover bordered/>);
        const tab2 = (<ITable headingRow={['D', 'E', 'F']} rows={[[1,2,3], [4,5,6]]} striped hover bordered/>);
        return (
        <div>
            <div>
                <INav />
                <Select styles={customStyles} options={Countries} isMulti isSearchabe menuPlacement="top"/>
                <IButtonGroup type="checkBox" onSelected={this.handleButtonsSelection} >
                    <IButton color="primary" > 1 </IButton>
                    <IButton color="primary" > 2 </IButton>
                    <IButton color="primary" > 3 </IButton>
                </IButtonGroup>
                <IButtonGroup type="radio">
                   <IButton color="primary" > 1 </IButton>
                   <IButton color="primary" > 2 </IButton>
                   <IButton color="primary" > 3 </IButton>
                </IButtonGroup>
                <IButton outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</IButton>
                <IButton color="primary" name="Toggle" size="sm" toggle/>
                <hr />
                <ITable headingRow={['A', 'B', 'C']} rows={[[1,2,3], [4,5,6]]} striped hover bordered/>
                <ITab tabs={[{tabHeading: 'Tab 1', tabContent: tab1}, {tabHeading: 'Tab 2', tabContent: tab2}]}/>
                <IDropdown color="success" size="sm" direction="right" actions={[{name: '1', status: 'header'}, {name: '2', href: "/menu",
                            submenu: { actions: [{name: '2.1'}, {name: '2.2'}, {name: '2.3'}, {name: '2.4'}]}}]}>C</IDropdown>
                <IDropdown actions={[{id: 1, key: 1, name: "Apple"}, {id: 2, key: 2, name: "Mango", status: 'disabled'}, {id: 3, key: 3, name: "Orange", status: 'divider'}, {id: 4, key: 4, name: "Banana", status: 'header'}]} color="info" size="sm" direction="right"/>
                <AlertWithToggle color="success" toggle fade={false}> Success Alert <IAlertLink href="https://www.google.com/" /> </AlertWithToggle>
                <FormWithScroll>
                    <IFormGroup type={CONSTANTS.TEXT} id="text1" label="Text 1" onChange={(e) => {console.log(e.target.value)}}/>
                    <IFormGroup type={CONSTANTS.EMAIL} id="email1" label="Email 1"/>
                    <IFormGroup type={CONSTANTS.PASSWORD} id="p1" label="Password 1"/>
                    <IFormGroup type={CONSTANTS.SELECT} id="s1" label="Select 1" options={[1, 2, 3, 4, 5]} onChange={(e) => {console.log(e.target.value)}}/>
                    <IFormGroup type={CONSTANTS.MULTI_SELECT} id="ms1" label="Select 1" options={[1, 2, 3, 4, 5]} onChange={(e) => {console.log(e.target.value)}}/>
                    <IFormGroup type={CONSTANTS.FILE} id="file1" label="File 1" fileExtensions={["pdf"]} fileSize="3KB"/>
                    <IFormGroup type={CONSTANTS.URL} id="url1" label="Url 1" />
                    <IFormGroup type={CONSTANTS.RADIO} id="num1" label="Num 1" />
                </FormWithScroll>
            </div>
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <IButton outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</IButton>
                                        </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <IButton color="primary" name="Login" size="sm"/>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            </div>
        );
    }
}

export default Header;
