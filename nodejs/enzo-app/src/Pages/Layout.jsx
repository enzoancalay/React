import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailcontainer from "../components/ItemDetailContainer";
const Layout = () => {
  const personas = [
    { name: "name1", lastName: "lastName1", id: "1" },
    { name: "name2", lastName: "lastName2", id: "2" },
    { name: "name3", lastName: "lastName3", id: "3" },
  ];
  const funcionSimple = (texto) => {
    console.log(texto);
  };
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Header />
        <Hero titulo="Esto viene por props" />
        <ItemListContainer />
        <ItemDetailcontainer />
        <Main
          personas={personas}
          Letras="Esta son letras"
          callBack={funcionSimple}
        />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
