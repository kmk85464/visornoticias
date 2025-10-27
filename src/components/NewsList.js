import React from 'react';
import  {Card,CardBody,CardTitle} from 'react-bootstrap';
import noticias  from '../noticias.json';
import { Link } from "react-router-dom";
import {Col,Row,Container} from 'react-bootstrap';

function NewsList ({categoria}) {
  const filteredNews =!categoria || categoria === "todas"
      ? noticias
      : noticias.filter((noticia) => noticia.categoria === categoria);

    return(
      <Container className='mt-5'>
        <Row>
          {filteredNews.map((noticia =>
          <Col md={4} key={noticia.id} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <Link to={`/noticia/${noticia.id}`} className="text-decoration-none">
                  {noticia.titulo}
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
           </Col>   

          ))
          }
        </Row>
      </Container>
    );
}

export default NewsList;