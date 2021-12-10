import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./bootstrap.min.css";
import Form from "./form";
import Table from "./table";
import "./index.scss";
import Gallery from "./gallery.js";
import "./styles.css";

const App = () => (
  <div id="contenedor">
    <div className="bgImg">
      <h1>SolucionesElektrical</h1>
      <Router>
        <nav id="navegacion">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="activa">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="activa">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/precios" activeClassName="activa">
                Precios
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeria" activeClassName="activa">
                Galeria
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/precios">
            <Precios />
          </Route>
          <Route path="/galeria">
            <Galeria />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  </div>
);

const Home = () => (
  <div id="homeText">
    <h2 style={{ marginTop: 25, fontSize: "3rem", fontFamily: "sans-serif" }}>
      Home
    </h2>
    <p
      style={{
        margin: "0 auto",
        fontFamily: "sans-serif",
        fontWeight: "normal",
        border: "solid 2px gray",
        textAlign: "center",
        width: "80%",
        backgroundColor: "rgba(52, 52, 52, 0.2)",
      }}
    >
      El objeto de la compañía será la importación exportación compra y venta
      fabricación distribución instalación y mantenimiento de todo tipo y
      materiales eléctricos e iluminación en general para uso domestico
      comercial o industrial pudiendo ser representante inversora en el ámbito
      financiero y/o administrador de cualquier otra sociedad mercantil nacional
      extranjera que se dediquen a ese mismo ramo o cualquiera otra actividad en
      lo referente a la compra venta importación exportación distribución y
      mercadeo de toda clase de artículos de luminaria seguridad industrial
      materiales y mercancías del ramo ferretero automotriz de la construcción
      así como también todo lo relacionado con la compra venta importación
      exportación representación y/o distribución en la área de
      telecomunicaciones, pudiendo además realizar proyectos y trabajos de
      ingeniería civil y eléctrica en todo su ámbito como lo son: levantamiento
      topográfico, estudio y nivelación de suelos, asfaltado construcción de
      aceras y brocales, alcantarillados instalaciones de tuberías, cualquiera
      que sea su uso o destinación igualmente en el ramo de la electricidad
      podrá también actuar con carácter de franquiciante así como de
      franquiciado o cualquier otra actividad conexa con este ramo pudiendo
      dedicarse a cualquier otra actividad de licito comercio que guarde o no
      relación con el objeto principal o especifico.. Si deseas conocer más
      sobre este negocio, puedes llamar y solicitar información de sus productos
      y servicios. No olvides preguntar por sus ofertas, descuentos y especiales
      del momento
    </p>
  </div>
);

const Contacto = () => (
  <>
    <Form></Form>
  </>
);

const Precios = () => (
  <>
    <Table></Table>
  </>
);

const Galeria = () => (
  <>
    <Gallery></Gallery>
  </>
);

function Footer() {
  return (
    <footer>
      Copyright SolucionesElektrical <strong>2021™</strong>
    </footer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
