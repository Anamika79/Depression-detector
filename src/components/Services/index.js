import React from 'react';
import Icon1 from '../../images/svg-1.jpg';
import Icon2 from '../../images/svg-2.jpg';
import Icon3 from '../../images/svg-3.jpg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id= "services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Dr.Sherin Jacob</ServicesH2>
                <ServicesP>Clinical Psychologist</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Dr.Noorin Thomas</ServicesH2>
                <ServicesP>Senior Pyschatrist</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Dr. Irin </ServicesH2>
                <ServicesP>Psychologist</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
