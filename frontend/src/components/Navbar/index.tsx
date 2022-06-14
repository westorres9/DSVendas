import { ReactComponent as ImgDsDark } from "assets/images/ds-dark.svg";
import "./styles.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid main-nav">
        <ImgDsDark />
      </div>
    </nav>
  );
};

export default Navbar;
