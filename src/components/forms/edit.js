import React from 'react';
import Navbar from '../navbar';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render(){
        var today = new Date().toISOString().slice(0, 10);
        return (
            <div>
                <Navbar></Navbar>
                <div className="container">
                <br/>
                    <form>
                        <div className="row">
                            <div class="form-group col-md-12">
                                <label for="atividade">Nome da atividade</label>
                                <input type="text" class="form-control" id="atividade"/>
                            </div>
                        </div>
                        <div className="row">
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="atividade">Data inicial</label>
                                <input type="date" class="form-control" id="atividade" value={today}/>
                            </div>
                            <div class="form-group col-md-6 col-sm-12">
                                <label for="atividade">Data final</label>
                                <input type="date" class="form-control" id="atividade" value={today}/>
                            </div>
                        </div>
                        <div className="float-right">
                            <a className="btn btn-outline-danger" href="/">Cancelar</a>
                            <span className="-btn-spacing"></span>
                            <button className="btn btn-outline-success" type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Edit;