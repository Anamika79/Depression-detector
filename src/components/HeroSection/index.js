import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight

    } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)

  }


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Find your inner peace</HeroH1>
          <HeroP>
          Sadness is a normal human emotion whereas depression is a mental health concern 
          that can affect how you think, feel or behave in many ways. 
          Use Mind Pill to find out whether you are experiencing signs of depression.
          </HeroP>
          <HeroBtnWrapper>
            <Button 
              to='about' 
              onMouseEnter={onHover}
              onMouseLeave = {onHover}
              primary ='true'
              dark='true'
              >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

  )
}

export default HeroSection
