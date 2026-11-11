import { Link } from "react-router-dom";
function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <br />
      <Link to="/produtos">Produtos</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
export default Menu;