import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/heroimg01.jpg'
import heroImg02 from '../assets/images/heroimg02.jpg'
import heroImg03 from '../assets/images/heroimg04.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitles';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import SlikeGalerija from '../components/Image-gallery/SlikeGalerija';


const TourDetails = () => {
  return (
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
              Kupovina suvenira{" "}
              <span className="highlight"> </span>
            </h1>
            <p>
            Naručivanje suvenira nikada nije bilo jednostavnije! Pregledajte našu kolekciju, odaberite željene artikle i dodajte ih u svoju košaricu.
             Kada završite s odabirom, kliknite na gumb za narudžbu i slijedite upute za unos podataka za dostavu i plaćanje. 
             Nudimo sigurne opcije plaćanja i brzu dostavu kako biste što prije uživali u svojim suvenirima. Za sve dodatne informacije ili pomoć,
              slobodno nas kontaktirajte!
            </p>
            </div>
            
            </Col>

          

            <Col lg="7">
            <div className="hero__img-box mt-4" >
              <img src={heroImg03} alt="" controls />
            </div>
            </Col>

           
           
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vasa narudzba</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Napisite sta zelite naruciti..."></textarea>






          </Row>
        </Container>
        
      </section>

  )
}

export default TourDetails
