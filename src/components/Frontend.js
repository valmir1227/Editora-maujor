import { React } from "react";
import { Link } from "react-router-dom";

const Frontend = ({ livros }) => {
  return (
    <main className="principal">
      <h2>Categoria Frontend</h2>
      {livros
        .filter((cat) => cat.categoria === "frontend")
        .map((livro) => (
          <div className="thumb">
            <img
              src={"/imagens/capas/" + livro.id + ".jpg"}
              alt="Thumbmail da capa dop livro..."
            />
            {livros
              .filter((c) => c.slug === livro.slug)
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

export default Frontend;
