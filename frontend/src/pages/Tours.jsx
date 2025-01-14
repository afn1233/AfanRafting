import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/heroimg01.jpg'
import heroImg03 from '../assets/images/heroimg03.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitles';
import SearchBar from '../shared/SearchBar';

const Tours = () => {
  return (
    <div>
       <section>
        <Container>
          <Row>
            <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Bijeli Una Rafting"} />
                <img src={worldImg} alt=""/>
              </div>

            <h1>
                {" "}
              <span className="highlight"> Štrbački buk - Lohovo (R1)</span>
            </h1>
            <p>
            R1 je najuzbudljivija staza dužine 17 km, spuštanje traje 3-4 sata i ovo je najatraktivnija, 
            ali i najzahtjevnija rafting etapa. Etapa se nalazi u samom srcu Nacionalnog parka i omogućava 
            da vidite sve ljepote netaknute prirode. Sažeta u nevjerovatnom kolažu boja, kaskada, brzaka, 
            sedri i neodoljivih krajolika. Pored spuštanja uživat ćete i u plivanju, skokovima sa prirodnih 
            stijena i slapova. Ova etapa ima cilj u našem centru Bijeli Una Rafting. U cijenu je uračunat skiper,
             te kompletna rafting oprema; neopren odijelo, neopren čizmice, kaciga, prsluk, osiguranje, 
             prijevoz do starta i ulaznica u Nacionalni park „Una“ .
            </p>
            </div>
            
            </Col>

           

            <Col lg="7">
            <div className="hero__img-box mt-4" >
              <img src={heroImg03} alt="" controls />
            </div>
            </Col>
            
         

            <SearchBar/>


          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={""} />
                <img src={worldImg} alt=""/>
              </div>

            <h1>
                {" "}
              <span className="highlight"> Kostela - Grmuša (R2)</span>
            </h1>
            <p>
            Donji tok rijeke Une od Kostela do Grmuše je mirniji i pogodniji za manje iskusne goste. Idealna etapa za odmor, kupanje i druženje...
             Ova etapa je idealna za one koji više uživaju u opuštajućem raftingu. 
             Povedite svu familiju, uljučujući i djecu nižeg uzrasta i budite sigurni da ćete uživati svakog trenutka.
              U cijenu je uračunat skiper, te kompletna rafting oprema; neopren odijelo, neopren čizmice, kaciga, prsluk, osiguranje,
               prijevoz do starta i prijevoz nazad do našeg rafting centra.
            </p>
            </div>
            
            </Col>

           

              <Col lg="7">
                         <div className="hero__img-box">
                           <img src={heroImg} alt="" />
                         </div>
                         </Col>
         

            <SearchBar/>


          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Tours
