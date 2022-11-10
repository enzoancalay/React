import React from 'react'
import Header from "../components/Header" 
import Main from "../components/Main"
import Footer from "../components/Footer"
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailcontainer from '../components/ItemDetailContainer'
const  Layout = () => {
  return (<>
    <Container fluid className= "d-flex flex-column min-vh-100 px-0">
	<Header />
	<Hero />
	<ItemListContainer />
	<Main />
	<Footer/>
	</Container>  
	</> )
}

export default  Layout
