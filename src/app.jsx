import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
    render() {
      return (
        <div className="App">
            <div className="appTitle">Spotify Catalog Browser</div>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" placeholder="search for an artist, album, or song..."/>
                    <InputGroup.Addon>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
            <div className="Profile">
              <div>Artist Picture</div>
              <div>Artist Name</div>
            </div>
            <div className="Gallery">
              Gallery 
            </div>
        </div>
      )
    }
}

export default App;
