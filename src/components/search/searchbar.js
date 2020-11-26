import React from "react";
import './searchbar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="col-md-8">
                <form action="" className="d-inline">
                    <div class="form-group -important-inline">
                        <label for="searchInput" className="text-white">Busca no calendário</label>
                        <input type="text" className="form-control" id="searchInput"/>
                    </div>
                    <div className="-btn-spacing -important-inline"></div>
                    <div className="-important-inline">
                        <button className="btn btn-outline-light d-inline">Buscar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;