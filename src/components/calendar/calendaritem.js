import React from 'react';
import './calendaritem.css';

class CalendarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome,
            tempo_restante: props.tempo_restante,
            data_fim: props.data_fim,
            data_inicio: props.data_inicio
        }
    }
    render() {
        return (
            <div className="-calendar-item">
                <div className="card">
                    <div className="card-body align-middle">
                        <div className="float-left align-middle">
                            <button type="button" className="btn btn-outline-success">Concluir</button>
                            <span className="-bigname-spacing"></span>
                            <span className="align-middle -slightly-down -larger-text"><b>{this.props.nome}</b> - em {this.props.tempo_restante} dias.</span>
                        </div>
                        <div className="float-right">
                            <button type="button" className="btn btn-outline-secondary">Editar</button>
                            <span className="-btn-spacing"></span>
                            <button type="button" className="btn btn-outline-danger">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarItem;