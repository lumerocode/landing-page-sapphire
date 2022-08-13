import React from 'react'
import './cover.css'
import Image from '../../assets/cover-big-img.png'

export const Cover = () => {
  return (
    <section className='cover'>
        <div className='cover__section'>
            <div className='cover__left'>
                <h1>Discover, Sell
                    <br/> & Collect Rare NFTs</h1>
                <p>Digital marketplace for crypto collections and 
                    <br/>non-fungible tokens (NFTs)</p>
                <button>Discover Now</button>
                <div className='cover__numbers'>
                    <div>
                        <h2>35k+</h2>
                        <p>Artworks</p>
                    </div>
                    <div>
                        <h2>15k+</h2>
                        <p>Auctions</p>
                    </div>
                    <div>
                        <h2>25k+</h2>
                        <p>Artists</p>
                    </div>
                   
                </div>
            </div>
            <div className='cover__right'>
                <div className='cover__port'>
                    <div>
                        <img src={Image}/>
                        <div>
                            <div>
                                <p>Monkey Apes</p> 
                                <div>

                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Current Bid</p>
                                    <p></p>
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
