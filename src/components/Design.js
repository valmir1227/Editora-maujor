import { React } from "react";
import { Link } from "react-router-dom";

const Design = ({ livros }) => {
  return (
    <main className="principal">
      <h2>Categoria design</h2>
      {livros
        .filter((cat) => cat.categoria === "design")
        .map((livro) => (
          <div className="card" key={livro.id}>
            <div className="thumb">
              <img
                src={"/imagens/capas/" + livro.id + ".jpg"}
                alt="Thumbmail do livro..."
              />
            </div>

            {livros
              .filter((cat) => cat.categoria === "design")
              .map((livro) => (
                <span key={livro.slug}>
                  <Link to={`/livro/${livro.slug}`}>
                    {
                      <div className="detalhes">
                        <h3>{livro.titulo}</h3>
                        <p>{livro.descricao.slice(0, 130) + "..."}</p>
                        <p>Leia Mais</p>
                      </div>
                    }
                  </Link>
                </span>
              ))}
          </div>
        ))}
    </main>
  );
};

export default Design;
