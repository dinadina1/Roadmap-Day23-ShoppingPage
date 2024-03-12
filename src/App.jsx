// Importing Packages
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import NavBar from './navbar'
import Cardcollection from './cardcollection'

// importing images
import Shoppingbanner from './shoppingbanner'
import amazonDot from "./assets/amazondot.png"
import camera from "./assets/camera.png"
import shoe from "./assets/shoe.png"
import headphone from "./assets/headphone.png"
import lipstick from "./assets/lipstick.png"
import nikon_camera from "./assets/nikon-camera.png"
import potted_plant from "./assets/potted_plant.png"
import sneaker from "./assets/sneaker.png"
import sunglass from "./assets/sunglass.png"
import shades from "./assets/sunglass-shades.png"
import table from "./assets/table.png"
import watch from "./assets/watch.png"
import { useState } from 'react'
import Footer from './footer'

function App() {

  // Card details Array
  const [cardInfo, setCardInfo] = useState([
    {
      id: 1,
      product_img: amazonDot,
      product_name: "Amazon Dot Speaker",
      product_ratings: 5,
      product_price: 1999,
      product_oldprice: 4999,
      button: true,
      sale: false
    },
    {
      id: 2,
      product_img: camera,
      product_name: "Camera",
      product_ratings: 2,
      product_price: 2999,
      button: true,
      sale: true
    },
    {
      id: 3,
      product_img: shoe,
      product_name: "Men's Shoe",
      product_ratings: 4,
      product_price: 3999,
      product_oldprice: 7999,
      button: true,
      sale: false
    },
    {
      id: 4,
      product_img: headphone,
      product_name: "Bluetooth Headphone",
      product_ratings: 5,
      product_price: 1599,
      button: true,
      sale: true
    },
    {
      id: 5,
      product_img: lipstick,
      product_name: "Cosmatics LipStick",
      product_ratings: 3,
      product_price: 299,
      product_oldprice: 699,
      button: true,
      sale: true
    },
    {
      id: 6,
      product_img: nikon_camera,
      product_name: "Nikon Camera",
      product_ratings: 4,
      product_price: 6999,
      button: true,
      sale: true
    },
    {
      id: 7,
      product_img: potted_plant,
      product_name: "Potted Plant",
      product_ratings: 5,
      product_price: 3999,
      product_oldprice: 6999,
      button: true,
      sale: false
    },
    {
      id: 8,
      product_img: sneaker,
      product_name: "Sneaker",
      product_ratings: 5,
      product_price: 1299,
      button: true,
      sale: true
    },
    {
      id: 9,
      product_img: sunglass,
      product_name: "Sunglass",
      product_ratings: 4,
      product_price: 499,
      button: true,
      sale: false
    },
    {
      id: 10,
      product_img: shades,
      product_name: "Shades Sunglass",
      product_ratings: 5,
      product_price: 599,
      product_oldprice: 999,
      button: true,
      sale: true
    },
    {
      id: 11,
      product_img: table,
      product_name: "Table",
      product_ratings: 5,
      product_price: 7999,
      button: true,
      sale: false
    },
    {
      id: 12,
      product_img: watch,
      product_name: "Smart Watch",
      product_ratings: 5,
      product_price: 4999,
      product_oldprice: 5999,
      button: true,
      sale: true
    }
  ])

  // State for cart count
  const [cartCount, setCartCount] = useState(0)

  // Function to add cart item
  let handleClick = (id) => {
    let item_check = cardInfo.map((item) => {
      return item.id == id ? { ...item, button: !item.button } : item
    })
    setCardInfo(item_check);
    setCartCount(cartCount + 1)
  }

  // Function to remove cart item
  let handleClickLess = (id) => {
    let item_check1 = cardInfo.map((item) => {
      return item.id == id ? { ...item, button: !item.button } : item
    })
    setCardInfo(item_check1);
    setCartCount(cartCount - 1)
  }

  return (
    <>
      <NavBar cartCount={cartCount} />
      <Shoppingbanner />
      <Cardcollection cardInfo={cardInfo} handleClick={handleClick} handleClickLess={handleClickLess} />
      <Footer />
    </>

  )
}

export default App




