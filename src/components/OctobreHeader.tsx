import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import OctobreLogo from "./OctobreLogo";
import IconMenu from './../icons/Menu.svg';
import IconRDV from './../icons/messenger.svg'
import RDVButton from './../components/atoms/RDVButton';


const OctobreHeader = () => {
  return (
    <header className='container-xl'>
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          
        <Navbar.Toggle aria-controls="navbarNav">
          <IconMenu/>
        </Navbar.Toggle>
        <Navbar.Brand className='logo' href="#">
          <OctobreLogo />
        </Navbar.Brand>
          <div className="ml-2 mr-4 desktop-logo-text">
            <span>Partenaire de la transformation digitale des PME et ETI</span>
          </div> 

        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link className='nav-item' href="#about">À propos</Nav.Link>
            <Nav.Link className='nav-item' href="#case-studies">Cas Clients</Nav.Link>
            <Nav.Link className='nav-item' href="#team">L'équipe</Nav.Link>
            <Nav.Link className='nav-item' href="#contact">Nous Contacter</Nav.Link>
          <div className='mobile-rdv-button'>
            <IconRDV />
          </div>
          </Nav>
        </Navbar.Collapse>
        <RDVButton
            className="ml-4 desktop-rdv-button"
        >Prendre RDV</RDVButton>
        <RDVButton className='mobile-rdv-button'>
          <IconRDV />
        </RDVButton>
        </Container>
      </Navbar>
      <div className=" mobile-logo-text">
            <span>Partenaire de la transformation digitale des PME et ETI</span>
        </div> 
    </header>
  );
};

export default OctobreHeader;
