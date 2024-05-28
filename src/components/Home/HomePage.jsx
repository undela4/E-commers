import React from 'react';
import Carousel from './Header/carousel/Carousel';
import Page from './shop-card-31/page';
import ProductCard from './Product-card-10/Product-card';
import data from './carousel-2/data';
import FluidCard from './container-fluid/fluidCard';
import {productCoverImg, fh1,fh2,fh4,fh5,fh6,fh7,fh8 } from 'D:/Projects/E-commers/E-commers/src/assets/img.js';
import Categories from './Categories/categories';


 export const cards = [
  { img: productCoverImg, title: "T-Shirt", category: "Clothing", price: "15", delprice: "30", colors: ['red', 'blue', 'orange', 'pink'] },
  { img: fh1, title: "Jeans", category: "Clothing", price: "40", delprice: "80", colors: ['green', 'yellow', 'blue', 'purple'] },
  { img: fh2, title: "Jacket", category: "Clothing", price: "60", delprice: "120", colors: ['black', 'white', 'grey', 'silver'] },
  { img: fh4, title: "Dress", category: "Clothing", price: "50", delprice: "100", colors: ['cyan', 'magenta', 'yellow', 'black'] },
  { img: fh5, title: "Sweater", category: "Clothing", price: "35", delprice: "70", colors: ['brown', 'beige', 'ivory', 'tan'] },
  { img: fh6, title: "Shorts", category: "Clothing", price: "25", delprice: "50", colors: ['maroon', 'navy', 'teal', 'olive'] },
  { img: fh7, title: "Blazer", category: "Clothing", price: "75", delprice: "150", colors: ['lavender', 'coral', 'salmon', 'gold'] },
  { img: fh8, title: "T-Skirt", category: "Clothing", price: "45", delprice: "90", colors: ['periwinkle', 'mint', 'peach', 'plum'] }
];//data to Productcard



export default function HomePage() {
  return (
    <>
    <Carousel imgonly={true} />
    <Categories/>

    <Page/>

    <ProductCard data={cards}/>

    <Carousel data={data} imgonly={false}/>

    <FluidCard/>
    
    </>
  )
}
