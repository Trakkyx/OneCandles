import React from 'react';
import Annoncement from '../Component/Annoncement';
import Categories from '../Component/Categories';
import Navabar from '../Component/Navabar';
import Slider from '../Component/Slider';
import Products from "../Component/Products"
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Upsale from '../Component/Upsale';
import styled from "styled-components"


const Info = styled.div`
text-align:center;
padding:50px;
color:#DAA520;

`



const Image = styled.img`
width:30%;
align-items:center;
justify-content:center;
display:flex;
margin:5%;
margin-left:33%;


`
const Title= styled.h1`
text-align:center;
padding-top:3%;
`


const Container = styled.div`


`







const AboutUs = () => {
  return(
  <div>
  <Annoncement/>
  <Navabar/>
   <Container>
     <Title>About Us</Title>
     <Image src="https://v2.cimg.co/news/59669/22919/responsive-images/screenshot-2021-09-06-at-16-07-20-101-bored-ape-yacht-club-ape-in-2021-sothebys___media_library_original_875_645.png"/>
     <Info><b>I am a NFT</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget maximus turpis, nec congue odio. Cras eu arcu ut magna pretium condimentum vulputate non mi. Sed volutpat ante eu condimentum egestas. Sed egestas scelerisque nulla sed malesuada. Suspendisse sollicitudin justo at purus aliquet, sed convallis enim efficitur. Etiam vitae mattis ligula. Cras mollis, nunc sit amet accumsan elementum, arcu ipsum dapibus ipsum, quis fermentum nunc augue eu ante. Cras tempus semper venenatis. Maecenas ultricies lobortis risus, vel dignissim sem gravida eu. Suspendisse potenti. Fusce ultrices libero a augue pulvinar, quis faucibus tellus dapibus. Suspendisse molestie sed tortor ac cursus. Nam a luctus massa, non interdum leo.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </Info>
   </Container>
  <Newsletter/>
  <Footer/>
  </div>
  );
};
export default AboutUs;
