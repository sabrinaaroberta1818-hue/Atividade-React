import Card from "../components/card";

interface Produto {
  id: number;
  titulo: string;
  imagem: string;
  descricao: string;
  preco: string;
}

function Produtos() {
  const produtos: Produto[] = [
    {
      id: 1,
      titulo: "Notebook",
      imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      descricao: "Notebook Moderno",
      preco: "R$ 3.500,00"
    },
    {
      id: 2,
      titulo: "Smartphone",
      imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      descricao: "Celular",
      preco: "R$ 2.000,00"
    },
    {
      id: 3,
      titulo: "Fone Bluetooth",
      imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      descricao: "Fone Sem Fio",
      preco: "R$ 250,00"
    },
    {
      id: 4,
      titulo: "Smartwatch",
      imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      descricao: "Relógio Inteligente",
      preco: "R$ 450,00"
    },
    {
      id: 5,
      titulo: "Câmera",
      imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      descricao: "Câmera digital",
      preco: "R$ 1.800,00"
    },
    {
      id: 6,
      titulo: "Teclado",
      imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
      descricao: "Teclado",
      preco: "R$ 180,00"
    }
  ];

  return (
    <main className="container">
      <br />
      <h2>Nossos Produtos</h2>
      <br />
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            titulo={produto.titulo}
            imagem={produto.imagem}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}
      </div>
    </main>
  );
}

export default Produtos;