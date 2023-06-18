import { Logo, TestRoomLogo } from "../../assets/images";
import "./header.scss";

interface HeaderProps {
  rightAction?: JSX.Element;
  className?: any;
}

export const Header = ({ rightAction = null as any, className }: HeaderProps) => {
  return (
    <nav className={`header ${className || ''}`}>
      <a className="logo-container" href="/">
        <img src={Logo} alt="Logo" />
        <img src={TestRoomLogo} alt="Test Room Logo" />
      </a>
      <div>{rightAction}</div>
    </nav>
  );
};
