interface CardProps {
  titulo: string;
  imagem: string;
  descricao: string;
  preco: string;
}

function Card({ titulo, imagem, descricao, preco }: CardProps) {
  return (
    <article className="card">
      <img src={imagem} alt={titulo} />

      <div className="card-content">
        <h3>{titulo}</h3>

        <p>{descricao}</p>

        <strong>{preco}</strong>
      </div>
    </article>
  );
}

export default Card;
