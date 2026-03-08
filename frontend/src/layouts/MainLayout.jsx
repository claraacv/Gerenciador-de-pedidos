import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen text-white">
      <h1>TESTE</h1>
      <Navbar />

      <main className="flex-1 bg-[#001513]">
        {/* <header className="flex md:hidden items-center justify-between p-5 bg-[#001513]">
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer" />
          <img
            src="/images/logo.png"
            alt="Logo escrito Pedidos"
            className="w-32"
          />
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
        </header> */}

        {/* <div className="p-5 flex-1">{children}</div> */}
      </main>
    </div>
  );
}
