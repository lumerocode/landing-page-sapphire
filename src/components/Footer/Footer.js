import React from 'react'
import './footer.css'
import Social1 from '../../assets/social-ig.png'
import Social2 from '../../assets/social-fa.png'
import Social3 from '../../assets/social-ig.png'
import Social4 from '../../assets/social-yo.png'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer__section'>
            <div className='footer__left'>
                <h3>Sapphire</h3>
                <p>Amazing NFTs marketplace, Authentic and unique
                digital creation.</p>
                <div className='social'>
                    <ul>
                        <img src={Social1}></img>
                        <img src={Social2}></img>
                        <img src={Social3}></img>
                        <img src={Social4}></img>
                    </ul>
                </div>
            </div>
            <div className='footer__right'>
                <div>
                    <h4>Marketplace</h4>
                    <ul>
                        <li>Explore</li>
                        <li>NFTs</li>
                        <li>Collectibles</li>
                        <li>Virtual Reality</li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Partners</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer__section-down'>
            <div className='footer__copyright'>
                <p>Copyright 2022 sapphire, All right reserved.</p>
            </div>
            <div className='footer__terms'>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer