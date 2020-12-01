import React from 'react';
import './calendar.css';
import CalendarItem from './calendaritem';
import SearchBar from '../search/searchbar';

const Calendar = () => {
    var username = "Diego Freitas";
    return (
        <div className="container">
            <div className="row">
                <h1>Calendário de {username}</h1>
            </div>
            <br/>
            <div className="card -internal-padding bg-dark">
                <div className="row">
                    <SearchBar></SearchBar>
                    <div className="col-md-4">
                        <button className="btn btn-outline-light float-right">Adicionar</button>
                    </div>
                </div>
                <CalendarItem nome="Entrega do projeto" tempo_restante="1" id="3"></CalendarItem>
                <CalendarItem nome="Pesquisar sobre Macau" tempo_restante="4" id="4"></CalendarItem>
                <CalendarItem nome="Pagar conta de luz" tempo_restante="5" id="5"></CalendarItem>
            </div>
        </div>
    );
}

export default Calendar;