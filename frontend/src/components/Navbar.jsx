import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faCartShopping,
  faHandHoldingDollar,
  faGear,
  faRightFromBracket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <h2>Olá</h2>
    </div>
    // <div className="w-64 text-white min-h-screen flex flex-col bg-[#021B19]">
    //   <div className="flex justify-between gap-2 px-5 pt-5">
    //     <img
    //       src="/images/logo.png"
    //       alt="Logo escrito Pedidos"
    //       className="w-4/5"
    //     />

    //     <FontAwesomeIcon
    //       icon={faTimes}
    //       className="text-xl cursor-pointer md:hidden"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-4 p-5">
    //     <Link>
    //       <FontAwesomeIcon icon={faShirt} /> Produtos
    //     </Link>
    //     <Link>
    //       <FontAwesomeIcon icon={faCartShopping} /> Pedidos
    //     </Link>
    //     <Link>
    //       <FontAwesomeIcon icon={faHandHoldingDollar} /> Controle financeiro
    //     </Link>
    //     <Link>
    //       <FontAwesomeIcon icon={faGear} /> Configurações
    //     </Link>
    //   </div>
    //   <div className="flex flex-col-reverse p-5">
    //     <Link>
    //       <FontAwesomeIcon icon={faRightFromBracket} /> Sair
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Navbar;
