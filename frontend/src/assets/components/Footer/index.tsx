import './styles.css';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido por Wester Torres durante o Bootcamp SpringReact Devsuperior
            <div className="footer-icons">
                <a href="http://github.com/westorres9" target="_new">
                    <GithubIcon/>
                </a>
                <a href="https://www.linkedin.com/in/wester-torres-83a4b5219/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/wester_torres9/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}
export default Footer;
