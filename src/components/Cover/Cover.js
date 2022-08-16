import React from 'react'
import './cover.css'
import Image from '../../assets/cover-big-img.png'
import smallImage1 from '../../assets/cover-small-img1.png'
import smallImage2 from '../../assets/cover-small-img2.png'
import smallImage3 from '../../assets/cover-small-img3.png'
import smallImage4 from '../../assets/cover-small-img4.png'
import smallImage5 from '../../assets/cover-small-img5.png'
import vector from  '../../assets/cover-vector.png'

export const Cover = () => {
  return (
    <section className='cover'>
        <div className='cover__section'>
            <div className='cover__left'>
                <h1>Discover, Sell
                     & Collect Rare NFTs</h1>
                <img src={vector}/>
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
                    <img className='cover__port1' src={Image}></img>
                    <div className='cover__port2'>
                        <p>Monkey Apes</p>
                        <div className='cover__port2--small-img'>
                            <img src={smallImage1}/>
                            <img src={smallImage2}/>
                            <img src={smallImage3}/>
                            <img src={smallImage4}/>
                            <img src={smallImage5}/> 
                        </div>
                    </div>
                    <div className='cover__port3'>
                        <div>
                            <p>Current Bid</p>
                            <h5>0.45 ETH</h5>
                        </div>
                        <div>
                            <p>Current Bid</p>
                            <h5>900 Authors</h5>
                        </div>
                        <div>
                            <p>Ending In</p>
                            <h5>10h 43m 26s</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
