import { AvatarSVG } from "../../assets/image";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarSVG} alt="avatar" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
