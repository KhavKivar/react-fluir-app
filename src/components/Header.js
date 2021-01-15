import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

import '../style/header.css';
import title from '../images/title.png'
import wave from '../images/wave.svg'

function Header() {
    return (
        <header className="head">
            <Navbar style={{ marginTop: 80,paddingTop:0,paddingBottom:0 }} bg="light" variant="light">
                <button id="nav-button" class="nav-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="imageFrame">
                  <img id ="wave" src= {wave} aria-hidden="true" class="img-fluid"></img>
                  <img id="title" src={title} aria-hidden="true" class="img-fluid"></img>
                </div>
            </Navbar>
        </header>
    );
}
export default Header;