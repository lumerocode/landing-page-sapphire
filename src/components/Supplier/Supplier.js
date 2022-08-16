import React from 'react'
import './supplier.css'
import Image1 from '../../assets/supplier-image1.png'
import Image2 from '../../assets/supplier-image2.png'
import Image3 from '../../assets/supplier-image3.png'
import Image4 from '../../assets/supplier-image4.png'

export const Supplier = () => {
  return (
    <section className='supplier'>
        <div className='supplier__section'>
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
        </div>
    </section>
  )
}
