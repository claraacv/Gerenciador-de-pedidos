import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faCartShopping,
  faHandHoldingDollar,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="text-white" style={{ backgroundColor: "#021B19" }}>
      <img src="images/logo.png" alt="Logo escrito Pedidos" />
      <div className="flex flex-col gap-4">
        <Link>
          <FontAwesomeIcon icon={faShirt} /> Produtos
        </Link>
        <Link>
          <FontAwesomeIcon icon={faCartShopping} /> Pedidos
        </Link>
        <Link>
          <FontAwesomeIcon icon={faHandHoldingDollar} /> Controle financeiro
        </Link>
        <Link>
          <FontAwesomeIcon icon={faGear} /> Configurações
        </Link>
      </div>
      <div className="flex flex-col-reverse">
        <Link>
          <FontAwesomeIcon icon={faRightFromBracket} /> Sair
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
