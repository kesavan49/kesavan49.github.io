import { useState } from "react";
import { Button } from "../../../../components";
import style from "./home.nav.module.scss";

const HomeNav = ({ onClick = (e) => {} }: { onClick: (e: any) => void }) => {

  const [menu, toggleMenu] = useState(false);

  return (
    <div className={style.menuContainer}>
      <div onClick={() => toggleMenu((prev) => !prev)} className={[style.sShow, style.mobNav].join(' ')}>Menu</div>
      <ul className={`${style.sHidden} ${menu ? style.sShow : ''}`}>
        <li onClick={onClick} data-url="signin">
          Signin
        </li>
        <li onClick={onClick} data-url="view-plans">
          View plans
        </li>
        <li>
          {" "}
          <Button
            className={style.freeTrialBtn}
            onClick={onClick}
            data-url="free-trial"
          >
            Start a free trial
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
