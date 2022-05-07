import { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderBox } from "../../styles/header/headStyle";

const Header = () => {
  const [overHidde, setOverHidde] = useState(false);
  return (
    <HeaderBox>
      <nav>
        <ul>
          <li>
            <Link className="Links" to="">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="Links" to="">
              Principal
            </Link>
          </li>
          <li>
            <Link
              className="Links"
              onClick={() => {
                setOverHidde(!overHidde);
              }}
              to=""
            >
              Projetos
            </Link>
            <div
              style={!overHidde ? { display: "none"} : { display: "block", opacity: 1,}}
              className="lista-links"
            >
             <ul className="Lista-SubLiks">
                 <Link to=''>Projetos Concluidos</Link>
                 <Link to=''>Em Breve</Link>
                 <Link to=''>Em Breve</Link>
                 <Link to=''>Em Breve</Link>
             </ul>
            </div>
          </li>
        </ul>
      </nav>
    </HeaderBox>
  );
};

export default Header;
