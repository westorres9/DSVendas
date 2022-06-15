import {ReactComponent as GithubIcon} from "./github.svg";
import {ReactComponent as LinkedinIcon} from "./linkedin.svg";
import { ReactComponent as InstagramIcon} from "./instagram.svg";
import './styles.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            App desenvolvido por Wester Torres usando Java e Spring no backend e React no Frontend
            <div className="footer-icons">
                <a href="www.github.com/westorres9" target="_new">
                    <GithubIcon/>
                </a>
                <a href="https://www.linkedin.com/in/nathancarvalho/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;