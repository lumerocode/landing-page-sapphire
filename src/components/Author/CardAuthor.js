import React from 'react'
import './author.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../assets/author-card1.png'
import Image2 from '../../assets/author-card2.png'
import Image3 from '../../assets/author-card3.png'
import Image4 from '../../assets/author-card4.png'
import Image5 from '../../assets/author-card5.png'
import Image6 from '../../assets/author-card6.png'
import Image7 from '../../assets/author-card7.png'
import Image8 from '../../assets/author-card8.png'
import Image9 from '../../assets/author-card9.png'

export const CardAuthor = () => {
  return (
    <>
        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image1} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image2} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image3} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image4} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image5} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image6} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image7} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image8} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>

        <div className='author__card'>
            <div className='author__card-left'>
                <img src={Image9} ></img>
                <div>
                    <p>Rick Storms</p>
                    <h5>19,400.50 ETH</h5>
                </div>
            </div>
            <div className='author__card-right'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </div>
        </div>
    </>
  )
}
