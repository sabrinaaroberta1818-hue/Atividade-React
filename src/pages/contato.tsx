import Button from "../components/button";
function Contato() {
  return (
    <main className="area_principal">
      <br />
      <h2>Entre em contato</h2>
      <form className="formulario">
        <br />
        <label htmlFor="nome">Nome:</label>
        <br />
        <input id="nome" type="text" placeholder="Digite seu nome" required/>
        <br /><br />
        <label htmlFor="email">E-mail:</label>
        <br />
        <input id="email" type="email" placeholder="Digite seu e-mail" required/>
        <br /><br />
        <label htmlFor="mensagem">Mensagem:</label>
        <br />
        <textarea id="mensagem" placeholder="Digite sua mensagem" required/>
        <br /><br />
        <Button type="submit">
          Enviar mensagem
        </Button>
      </form>
    </main>
  );
}

export default Contato;