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
      sale: false,
      quantity: 1
    },
    {
      id: 2,
      product_img: camera,
      product_name: "Camera",
      product_ratings: 2,
      product_price: 2999,
      button: true,
      sale: true,
      quantity: 1
    },
    {
      id: 3,
      product_img: shoe,
      product_name: "Men's Shoe",
      product_ratings: 4,
      product_price: 3999,
      product_oldprice: 7999,
      button: true,
      sale: false,
      quantity: 1
    },
    {
      id: 4,
      product_img: headphone,
      product_name: "Bluetooth Headphone",
      product_ratings: 5,
      product_price: 1599,
      button: true,
      sale: true,
      quantity: 1
    },
    {
      id: 5,
      product_img: lipstick,
      product_name: "Cosmatics LipStick",
      product_ratings: 3,
      product_price: 299,
      product_oldprice: 699,
      button: true,
      sale: true,
      quantity: 1
    },
    {
      id: 6,
      product_img: nikon_camera,
      product_name: "Nikon Camera",
      product_ratings: 4,
      product_price: 6999,
      button: true,
      sale: true,
      quantity: 1
    },
    {
      id: 7,
      product_img: potted_plant,
      product_name: "Potted Plant",
      product_ratings: 5,
      product_price: 3999,
      product_oldprice: 6999,
      button: true,
      sale: false,
      quantity: 1
    },
    {
      id: 8,
      product_img: sneaker,
      product_name: "Sneaker",
      product_ratings: 5,
      product_price: 1299,
      button: true,
      sale: true,
      quantity: 1
    },
    {
      id: 9,
      product_img: sunglass,
      product_name: "Sunglass",
      product_ratings: 4,
      product_price: 499,
      button: true,
      sale: false,
      quantity: 1
    },
    {
      id: 10,
      product_img: shades,
      product_name: "Shades Sunglass",
      product_ratings: 5,
      product_price: 599,
      product_oldprice: 999,
      button: true,
      sale: true,
      quantity: 1
    },
    {
      id: 11,
      product_img: table,
      product_name: "Table",
      product_ratings: 5,
      product_price: 7999,
      button: true,
      sale: false,
      quantity: 1
    },
    {
      id: 12,
      product_img: watch,
      product_name: "Smart Watch",
      product_ratings: 5,
      product_price: 4999,
      product_oldprice: 5999,
      button: true,
      sale: true,
      quantity: 1
    }
  ])

  // State for cart count
  const [cartCount, setCartCount] = useState(0);

  //State for Cart List
  const [cart, addCart] = useState([]);

  // State for total cart price
  const [total_price, setTotal_Price] = useState(0)

  // State for Cart Quantity
  const [cartQuantity, setCartQuantity] = useState(0)

  // Function to add cart item
  let handleClick = (id) => {
    let item_check = cardInfo.map((item) => {
      return item.id == id ? { ...item, button: !item.button } : item
    })
    setCardInfo(item_check);
    setCartCount(cartCount + 1)

    // Add item into Cart Modal
    let modal_info = cardInfo.filter((item) => {
      if (item.id == id) {
        return item
      }
    })
    let modal_arr = [];
    modal_arr.push(...cart, ...modal_info)
    addCart(modal_arr)
  }

  // Function to remove cart item
  let handleClickLess = (id) => {
    let item_check1 = cardInfo.map((item) => {
      return item.id == id ? { ...item, button: !item.button } : item
    })
    setCardInfo(item_check1);
    setCartCount(cartCount - 1);


    // Remove item into cart Modal
    let remove_cartList = cart.filter((item) => {
      return item.id == id ? "" : item
    })
    addCart(remove_cartList)
  }

  // Remove item from cart Modal
  let removeCart = (ids) => {
    let remove_cartList = cart.filter((item) => {
      return item.id == ids ? "" : item
    })
    addCart(remove_cartList)
    handleClickLess(ids)

    let filter = cart.filter((product) => product.id != ids)
    let tot = filter.reduce((acc, product) => acc + product.product_price, 0)
    setTotal_Price(tot)

    // Reduce total quantity when removing product from the cart
    let tot_quantity = cart.filter((product) => {
      return product.id == ids && product;
    })
    let totalQuan = tot_quantity[0].quantity

    setCartQuantity(cartQuantity - totalQuan)
  }

  // Increase cart item quantity
  let increase_CartQuantity = (datas) => {
    let data = datas.split(",")
    let [id, quan, price] = [...data]
    let fixed_price = (parseInt(price) / parseInt(quan))
    let quans = parseInt(quan) + 1;
    let prices = parseInt(quans * fixed_price);
    let cartQuan = cart.map((product) => {
      return product.id == id ? { ...product, product_price: prices, quantity: quans } : product
    })
    addCart(cartQuan)

    // Add total price when increase every product quantity
    setTotal_Price(total_price + fixed_price)

    // Add total quantity when increase every product quantity
    setCartQuantity(cartQuantity + 1)
  }

  // Decrease cart item quantity
  let decrease_CartQuantity = (datas) => {
    let data = datas.split(",")
    let [id, quan, price] = [...data]
    let fixed_price = (parseInt(price) / parseInt(quan))
    let quans = parseInt(quan) - 1;
    if (quans > 0) {
      let prices = parseInt(quans * fixed_price);
      let cartQuan = cart.map((product) => {
        return product.id == id ? { ...product, product_price: prices, quantity: quans } : product
      })
      addCart(cartQuan)

      // Less total price when decrease every product quantity
      setTotal_Price(total_price - fixed_price)

      // Less total quantity when decrease every product quantity
      setCartQuantity(cartQuantity - 1)
    }
  }


  return (
    <>
      <NavBar
        cartCount={cartCount}
        cart={cart}
        removeCart={removeCart}
        increase_CartQuantity={increase_CartQuantity}
        decrease_CartQuantity={decrease_CartQuantity}
        total_price={total_price}
        setTotal_Price={setTotal_Price}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
      />
      <Shoppingbanner />
      <Cardcollection
        cardInfo={cardInfo}
        handleClick={handleClick}
        handleClickLess={handleClickLess}
      />
      <Footer />
    </>

  )
}

export default App




