import React from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

import image from './assets/cart/image.jpg'
import image1 from './assets/cart/image1.jpg'
import image2 from './assets/cart/image2.jpg'
import image3 from './assets/cart/image3.jpg'
import image4 from './assets/cart/image4.jpg'
import image5 from './assets/cart/image5.jpg'
import image6 from './assets/cart/image6.jpg'
import image7 from './assets/cart/image7.jpg'

const products = [
 {
  id: 1,
  image: image,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '89,99',
 },
 {
  id: 2,
  image: image1,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '89,99',
 },
 {
  id: 3,
  image: image2,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 4,
  image: image3,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 5,
  image: image4,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 6,
  image: image5,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 7,
  image: image6,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
 {
  id: 8,
  image: image7,
  title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
  desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
  price: '64,79',
 },
]

function App() {
 return (
  <div className='app'>
   <Header />
   <main className='main'>
    {products.map(product => (
     <Cart
      key={product.id}
      image={product.image}
      title={product.title}
      desc={product.desc}
      price={product.price}
     />
    ))}
   </main>
   {/* <Btn /> */}
  </div>
 )
}

export default App