import React, { DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { Navbar,Container,Nav,NavDropdown,Dropdown,NavbarBrand,NavItem,NavLink} from 'react-bootstrap';
import {Link } from "react-router-dom";
import newsData from '../noticias.json';
function NavigationBar ({setCategoria}) {
//variable para manejar las categoria
 const categorias = [...new Set(newsData.map(noticias=>noticias.categoria))];
    return(

        <Navbar bg = 'dark' variant='dark'  expand ='lg'>
         <Container>
          <Navbar.Brand as={Link} to="/"> <strong>News App</strong></Navbar.Brand>
           <Nav className="me-auto">
              <Nav.Link as={Link} to="/"><strong>Home</strong></Nav.Link>
              <Dropdown>
                <DropdownToggle variant="secondary" id="dropdown-basic"><strong>Noticias</strong></DropdownToggle>
                <DropdownMenu>
                  {categorias.map((categorias,idx)=>
                  <DropdownItem key="idx" onClick={()=>setCategoria(categorias)}>
                      {categorias}
                  </DropdownItem>
                  
                  )}
                </DropdownMenu>
              </Dropdown>
           </Nav>

         </Container>


        </Navbar>
    );

}
export default NavigationBar;