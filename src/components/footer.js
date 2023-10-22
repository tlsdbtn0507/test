import { useState } from "react";

import css from "../css/footer.module.css";
import Toggler from "./Toggler";

const Footer = () => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <div className={css.div}>
      {showToggle && <Toggler />}
      <button
        onClick={() => {
          setShowToggle(!showToggle);
        }}
      >
        show toggle
      </button>
    </div>
  );
};

export default Footer;
