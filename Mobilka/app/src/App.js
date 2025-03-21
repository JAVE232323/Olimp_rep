import logo from './Logo.png';
import './App.css';
import Employees from './employees';
import News from './News'
import Events from './Events'
import Calendar from './Calendar'

function App() {
  return (
    <div className="App">
      

      <body className="body-main">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="header-text"> Введите для поиска</h2>
      </header>
        
        <div className="div-employees">
          <h1>Сотрудники</h1>
          <div className="div-emp-count">
          <Employees/>
          <Employees/>
          <Employees/>
          <Employees/>
          <Employees/>
          </div>          
        </div>

        <div className="div-calendar-news">
          
          <div className="div-calendar">
            <h2>Календарь событий</h2>
            
            <Calendar/>
          </div>

          <div className="div-news">
            <News/>
            <News/>
            <News/>
          </div>
        </div>
        
        <div className="div-events">
          <h2>События</h2>
          <Events/>
          <Events/>
          <Events/>
          <Events/>
        </div>

      </body>
    </div>
  );
}

export default App;
