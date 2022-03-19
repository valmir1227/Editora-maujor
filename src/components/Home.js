import React from "react";
import { Link } from "react-router-dom";

const Home = ({ livros }) => (
  <main className="principal">
    <h2>Últimos lançamentos</h2>
    {livros
      .filter((n, index) => index < 6)
      .map((livro) => (
        <div className="card" key={livro.id}>
          <div className="thumb">
            <img
              //O método replace() retorna uma nova string com algumas ou todas as correspondências
              // de um padrão substituídas por um determinado caractere (ou caracteres)
              src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
              alt="Thumbmail da capa do livro..."
            />
          </div>
          {livros
            .filter((c) => c.slug === livro.slug)
            .map((livro) => (
              <Link to={`/livro/${livro.slug}`} key={livro.id}>
                {
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <p>Leia Mais</p>
                  </div>
                }
              </Link>
              //O método slice() retorna uma cópia superficial de uma parte de um array em um novo
              //objeto de array selecionado do início ao fim (fim não incluído) onde start e end
              //representam o índice de itens naquele array.
            ))}
        </div>
      ))}
  </main>
);

export default Home;
