import React from 'react'
import './author.css'
import { CardAuthor } from './CardAuthor'


const Author = () => {
  return (
    <section className='author'>
        <div className='author__section'>
            <p className='author__subtitle'>NFT Creators</p>
            <h4 className='author__title'>Top Creators of the week</h4>
            <div className='author__cards'>
                <CardAuthor/>
            </div>
            <div className='author__button'>
                <button>Watch Video</button>
            </div>
        </div>
    </section>
  )
}

export default Author