import React from 'react'
import './marketplace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { Card } from './Card'
  

export const Marketplace = () => {
  return (
    <section className='mark'>
        <div className='mark__section'>
            <p className='mark__subtitle'>NFT Marketplace</p>
            <div className='mark__title'>
                <h3>Super Hot Drops</h3><FontAwesomeIcon icon={faFire}/>
            </div>
            <div className='mark__choose'>
                <ul className='mark__links'>
                    <li className='mark__link'>Sport</li>
                    <li className='mark__link'>Photography</li>
                    <li className='mark__link mark__link--active'>Art</li>
                    <li className='mark__link'>Music</li>
                    <li className='mark__link'>Virtual Reality</li>
                    <li className='mark__link'>More</li>
                    <li className='mark__link'>Videos</li>
                </ul>
            </div>
            <div className='mark__cards'>
                <Card/>
            </div>
        </div>
    </section>
  )
}
