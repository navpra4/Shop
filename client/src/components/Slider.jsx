import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { women,women2 } from "../assets"
import { useState } from "react"
import { sliderItems } from "../data"
import { mobile } from "../Responsive"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #f3e9e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideindex*-100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Image = styled.img`
    height: 80%;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0? slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex < 2? slideIndex+1:0)
        }
    };
  return (
    <Container>
        <Arrow direction = "left" onClick={()=>{handleClick("left")}}>
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper slideindex={slideIndex}>
            {sliderItems.map((item)=>(
                 <Slide bg = {item.bg} key={item.id}>
                 <ImgContainer>
                     <Image src={item.img}/>        
                 </ImgContainer>
                 <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>
                        {item.desc}
                     </Desc>
                     <Button>
                         SHOP NOW
                     </Button>
                 </InfoContainer>
             </Slide>
            ))}
           
        </Wrapper>
        <Arrow direction = "right" onClick={()=>{handleClick("right")}}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider