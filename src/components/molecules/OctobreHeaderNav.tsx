import { Navbar, Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import OctobreLogo from "../OctobreLogo";
import IconMenu from './../../icons/Menu.svg';
import IconRDV from './../../icons/messenger.svg'
import RDVButton from '../atoms/RDVButton';
import { useRef, useState } from 'react';


const OctobreHeaderNav = () => {
  const desktopButton = useRef<HTMLButtonElement>(null);
  const navMenu = useRef<HTMLDivElement>(null);
  
  const [hiddenMenuButton, setMobileHidden] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  
  // Some handlers for events
  // https://github.com/react-bootstrap/react-bootstrap/issues/6400
  
  function handleShow() {
    setMobileHidden(true);
  };
  function handleHide() {
    setMobileHidden(false);
  }

  function navSelected() {
    
    setNavExpanded(false);
  }

  function toggleNav() {
    setNavExpanded(!navExpanded);
  }

  return (
    <header className='fixed-top container-xl bg-white'>
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          
        <Navbar.Toggle onClick={ toggleNav } aria-controls="octobreNav">
          <IconMenu/>
        </Navbar.Toggle>
        <Navbar.Brand className='logo' href="#">
          <OctobreLogo />
        </Navbar.Brand>
          {/* <div className="ml-2 mr-4 desktop-logo-text">
            <span>Partenaire de la transformation digitale des PME et ETI</span>
          </div>  */}
          <Navbar.Collapse in={ navExpanded } ref={ navMenu } onEnter={ handleShow } onExited={ handleHide } id="octobreNav">
            <Nav onSelect={ navSelected } className="mr-auto">
              <Nav.Link className='nav-item' href="/#about">À propos</Nav.Link>
              <Nav.Link className='nav-item' href="/#case-studies">Cas Clients</Nav.Link>
              <Nav.Link className='nav-item' href="/#team">L'équipe</Nav.Link>
              <Nav.Link className='nav-item mobile-rdv-button' href="/#contact">
                <RDVButton>
                  Prendre RDV
                </RDVButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        <Button className="ml-4 desktop-rdv-button">
          <RDVButton ref={ desktopButton }>
            Prendre RDV
          </RDVButton>
        </Button>
        <RDVButton hidden={ hiddenMenuButton } className='mobile-rdv-button'>
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

export default OctobreHeaderNav;
