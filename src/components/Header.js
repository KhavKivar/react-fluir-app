import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

import '../style/header.css';
import title from '../images/title.png'
import wave from '../images/wave.svg'

function Header() {
    return (
        <header className="head">
            <Navbar style={{ marginTop: 40,paddingTop:0,paddingBottom:0,paddingLeft:0 }} bg="light" variant="light">
                <button id="nav-button" class="nav-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
             
                  <img id ="wave" src= {wave} aria-hidden="true" class="img-fluid"></img>
                  <img id="title" src={title} aria-hidden="true" class="img-fluid"></img>
                
        
            </Navbar>
        </header>
    );
}
export default Header;