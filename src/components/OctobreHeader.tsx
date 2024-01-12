import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import OctobreLogo from "./OctobreLogo";
import IconMenu from './../icons/Menu.svg';
import IconRDV from './../icons/messenger.svg'
import RDVButton from './../components/atoms/RDVButton';
import { useRef } from 'react';


const OctobreHeader = () => {
  const collapsibleRef = useRef<HTMLDivElement>(null);

  
  // useEffect(() => {
  //   console.log("useEffect")
  //   const element = collapsibleRef.current;
  //   function handleShow() {
  //     console.log("show menu event")
      
  //   };
  //   if (element != null) {
  //     // hide.bs.collapse
  //     // show.bs.collapse
  //     console.log("Adding event listener to");
  //     console.log(element);
  //     // element.addEventListener('*', (e) => console.log('type: %s, e: %O', e.type, e), false);
  //     element.addEventListener('show.bs.collapse', handleShow);
  //   }
  // }, [collapsibleRef]);

  return (
    <header className='container-xl'>
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          
        <Navbar.Toggle aria-controls="octobreNav">
          <IconMenu/>
        </Navbar.Toggle>
        <Navbar.Brand className='logo' href="#">
          <OctobreLogo />
        </Navbar.Brand>
          <div className="ml-2 mr-4 desktop-logo-text">
            <span>Partenaire de la transformation digitale des PME et ETI</span>
          </div> 
          <Navbar.Collapse ref={ collapsibleRef } id="octobreNav">
            <Nav className="mr-auto">
              <Nav.Link className='nav-item' href="#about">À propos</Nav.Link>
              <Nav.Link className='nav-item' href="#case-studies">Cas Clients</Nav.Link>
              <Nav.Link className='nav-item' href="#team">L'équipe</Nav.Link>
              <Nav.Link className='nav-item' href="#contact">Nous Contacter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        <RDVButton className="ml-4 desktop-rdv-button">
          Prendre RDV
        </RDVButton>
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
