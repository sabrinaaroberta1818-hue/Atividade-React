import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home">
      <br />
      <h2>Bem-vindo à Vênus!</h2>
      <p>Loja virtual de tecnologia</p>
      <Link to="/produtos" className="button">
        Ver produtos
      </Link>
    </main>
  );
}

export default Home;