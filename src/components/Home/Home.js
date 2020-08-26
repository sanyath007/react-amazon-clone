import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      
      {/* Products id, title, price, rating, image */}
      <div className="home__row">
        <Product
          _id={'1598455632'}
          title={'AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'}
          image={'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg'}
          price={42.41}
          rating={5}
        />
        
        <Product
          _id={'1598453343'}
          title={'AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver'}
          image={'https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg'}
          price={21.99}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          _id={'1598455632'}
          title={'AmazonBasics Premium Single Monitor Stand - Lift Engine Arm Mount, Aluminum - Black'}
          image={'https://m.media-amazon.com/images/I/81vVhNmk8JL._AC_UL320_.jpg'}
          price={123.48}
          rating={4}
        />
        
        <Product
          _id={'1598455988'}
          title={'Logitech C920 Hd Pro Webcam (Black) Black'}
          image={'https://images-na.ssl-images-amazon.com/images/I/41DWe0t6EcL._AC_US160_.jpg'}
          price={129.99}
          rating={3}
        />
        
        <Product
          _id={'1598455978'}
          title={'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)'}
          image={'https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL._AC_US160_.jpg'}
          price={59.99}
          rating={5}
        />
      </div>
    </div>
  )
}

export default Home;
