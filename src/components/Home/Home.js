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
          _id={'1234'}
          title={'AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'}
          image={'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg'}
          price={42.41}
          rating={5}
        />
        
        <Product
          _id={'1234'}
          title={'AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'}
          image={'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg'}
          price={42.41}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          _id={'1234'}
          title={'AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'}
          image={'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg'}
          price={42.41}
          rating={5}
        />
        
        <Product
          _id={'1234'}
          title={'AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'}
          image={'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg'}
          price={42.41}
          rating={5}
        />
        
        <Product
          _id={'1234'}
          title={'AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'}
          image={'https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg'}
          price={42.41}
          rating={5}
        />
      </div>
    </div>
  )
}

export default Home;
