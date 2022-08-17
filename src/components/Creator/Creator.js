import React from 'react'
import './creator.css'
import Image from '../../assets/creator-card.png'

export const Creator = () => {
  return (
    <section className='creator'>
        <div className='creator__section'>
            <p className='creator__subtitle'>Be An NFT Creator</p>
            <h3 className='creator__title'>Create & Sell Your NFTs</h3>
            <div className='creator__cards'>
                <div className='creator__card'>
                    <img src={Image} />
                    <h4>Create Artwork</h4>
                    <p>Create your collection, Add social links, profile & banner images, and set a secondary sales free.</p>
                </div>

                <div className='creator__card'>
                    <img src={Image} />
                    <h4>Create Artwork</h4>
                    <p>Create your collection, Add social links, profile & banner images, and set a secondary sales free.</p>
                </div>

                <div className='creator__card'>
                    <img src={Image} />
                    <h4>Create Artwork</h4>
                    <p>Create your collection, Add social links, profile & banner images, and set a secondary sales free.</p>
                </div>
            </div>
            <div className='creator__buttons'>
                <button className='creator__buttons--primary'>Create Now</button>
                <button className='creator__buttons-secondary'>Watch Video</button>
            </div>
        </div>
    </section>
  )
}
