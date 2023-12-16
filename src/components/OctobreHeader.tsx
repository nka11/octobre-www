import OctobreLogo from "./OctobreLogo";

const OctobreHeader = () => {
  return (
    <header className='container-xl'>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="#">
        <OctobreLogo />
      </a> 
      <div className="ml-2 mr-4 logo-text">
        <span>Partenaire de la transformation digitale des PME et ETI</span>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ml-4" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">A propos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Etude de cas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">L'équipe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <button className="ml-4">Prendre RDV</button>
    </nav>
  </header>
  );
}
export default OctobreHeader;