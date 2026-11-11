import { Link } from "react-router-dom";
function NotFound(){
  return (
    <main className="container">
      <h2>404 - Página não encontrada...</h2>
      <Link to="/">
        Voltar para o início
      </Link>
    </main>
  );
}

export default NotFound;