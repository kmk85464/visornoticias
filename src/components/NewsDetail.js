import React from 'react';
import { Container } from 'react-bootstrap';
import noticias from "../noticias.json";
import { navigate,useParams,useNavigate,Link } from 'react-router';
function NewsDetail () {

 const { id } = useParams();
  const navigate = useNavigate();
  const noticia = noticias.find(noticia => noticia.id.toString() === id);
  if (!noticias) return <div>Noticia no encontrada</div>;
  const related = noticias.filter(noticia => noticia.categoria === noticias.categoria && noticia.id.toString() !== id);

  if (!noticia) return <Container className="mt-4">Noticia no encontrada.</Container>;

  return (
    <Container className="mt-4">
      <h2>{noticia.titulo}</h2>
      <p><strong>Categoría:</strong> {noticia.categoria}</p>
      <p><strong>Autor:</strong> {noticia.autor}</p>
      <p><strong>Fecha:</strong> {noticia.fecha}</p>
      <p>{noticia.content}</p>
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Volver</button>

      {related.length > 0 && (
        <>
          <h4>Otras noticias en {noticia.categoria}:</h4>
          <ul>
            {related.map(news => (
              <li key={noticia.id}>
                <Link to={`/news/${news.id}`}>{noticia.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Container>
  );


}
export default NewsDetail;