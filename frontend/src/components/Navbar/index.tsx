import {ReactComponent as ImgDsDark } from 'assets/img/DashVendas.svg';
import './styles.css';

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center bg-light border-bottom shadow-sm main-nav">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <ImgDsDark/>
                </nav>
            </div>
        </div>
    );
}

export  default Navbar;