import './App.css';
import Calendar from './components/calendar/calendar';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="localhost:3000">eAgenda</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="-app-spacer"></span>
          <div className="collapse navbar-collapse float-right" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="localhost:3000">Calendário <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="localhost:3000" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Gerenciar
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="localhost:3000">Eventos</a>
                  <a className="dropdown-item" href="localhost:3000">Conta</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br/>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
