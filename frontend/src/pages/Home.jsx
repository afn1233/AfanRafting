import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/heroimg01.jpg'
import heroImg02 from '../assets/images/heroimg02.jpg'
import heroImg03 from '../assets/images/heroimg03.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitles';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import SlikeGalerija from '../components/Image-gallery/SlikeGalerija';

const Home = () => {
  return (
    <>
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
              Doživite avanturu raftinga sa{" "}
              <span className="highlight"> najboljima</span>
            </h1>
            <p>
            Prva smo rafting agencija na području BiH, osnovana 1996. godine. 
            Rafting je grupna aktivnost koja se odvija na gumenom čamcu uz profesionalnog vodiča. 
            Uključuje spuštanje kroz brzake i slapove. 
            Na raspolaganju je ekstremna tura za one koji vole adrenalin i rekreativna tura za one koji su tu radi uživanja. 
            Ova aktivnost je pogodna i za djecu.
            </p>
            </div>
            
            </Col>

            <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
            </Col>

            <Col lg="2">
            <div className="hero__img-box mt-4" >
              <img src={heroImg03} alt="" controls />
            </div>
            </Col>

            <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
            
            </Col>

            <SearchBar/>


          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
            <h5 className='services_subtitle'>Šta nudimo?</h5>
            <h2 className='services_title'>Nudimo najbolje</h2>
            
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Kupovina suvenira:'} />
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
            <Subtitle subtitle={'Galerija'} />
            </Col>
            <Col lg="12">
            <SlikeGalerija/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
    
  )
}

export default Home
