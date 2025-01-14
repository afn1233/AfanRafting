import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl:weatherImg,
        title:"HOTELSKI SMJEŠTAJ",
        desc:"Svojim gostima nudimo smještaj u novoizgrađenom Hotelu Lohovo***, koji pruža komfor viskog kvaliteta kao i bogatu gastronomsku ponudu specijaliteta iz tradicionalne bosanske kuhinje.",
    },
    {
        imgUrl:guideImg,
        title:"TEAM BUILDING",
        desc:"Rafting na vodi je savršena team building aktivnost za zbližavanje radnih kolega, prijatelja ili tima. ",
    },
    {
        imgUrl:customizationImg,
        title:"VRHUNSKA RAFTING OPREMA",
        desc:"Oprema za rafting nužna je za siguran i ugodan spust niz rijeku. Budući da je rafting avanturistički sport na otvorenom, ne može se reći kakvo će biti vrijeme.",
    },
]

const ServiceList = () => {
  return (
  <>
  {
    servicesData.map((item, index)=> ( <Col lg='3' key={index}>
        <ServiceCard item={item} />
    </Col>))
  }
  
  </>
  );
}

export default ServiceList
