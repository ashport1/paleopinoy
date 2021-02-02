import React from "react";
import "./App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import RecipesLanding from "./recipes/RecipesLanding";
import FAQ from "./faq/FAQ";
import Contact from "./contact/Contact";

function App() {
  return (
    <Router>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Paleo Pinoy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recipe-cat-1">All</NavDropdown.Item>
              <NavDropdown.Item href="/recipe-cat-2">Meat</NavDropdown.Item>
              <NavDropdown.Item href="/recipe-cat-3">Veg</NavDropdown.Item>
              <NavDropdown.Item href="/recipe-cat-4">Dessert</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/3recipe-cat-5">Faves</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-info">Search</Button> */}
          </Form>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipe-cat-1" component={RecipesLanding} />
          {/* <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
