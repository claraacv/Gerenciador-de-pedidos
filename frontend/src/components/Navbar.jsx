import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faCartShopping, faHandHoldingDollar, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="../../public/images/logo.png" alt="Logo escrito Pedidos" />
            <Link><FontAwesomeIcon icon={faShirt}/> Produtos</Link>
            <Link><FontAwesomeIcon icon={faCartShopping}/> Pedidos</Link>
            <Link><FontAwesomeIcon icon={faHandHoldingDollar}/> Controle financeiro</Link>
            <Link><FontAwesomeIcon icon={faGear}/> Configurações</Link>

            <div className="bottom">
                <Link><FontAwesomeIcon icon={faRightFromBracket}/> Sair</Link>
            </div>
        </div>
    );
};

export default Navbar;