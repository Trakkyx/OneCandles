import React from 'react';
import Annoncement from '../Component/Annoncement';
import Categories from '../Component/Categories';
import Navabar from '../Component/Navabar';
import Slider from '../Component/Slider';
import Products from "../Component/Products"
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Upsale from '../Component/Upsale';
import Landing_image from '../Component/Landing_image';
import Landing_imagetwo from '../Component/Landing_imagetwo';







const Home = () => {
  return(
  <div>
  <Annoncement/>
  <Navabar/>
  <Landing_imagetwo/>
  <Categories/>
  <Upsale/>
  <Products/>
  <Newsletter/>
  <Footer/>
  </div>
  );
};
export default Home;
