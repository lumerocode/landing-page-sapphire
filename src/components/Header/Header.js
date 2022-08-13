import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <section className='header__section'>
            <nav className='nav'>
                <div className='nav__logo'>
                    <p>Sapphire</p>
                </div>
                <div className='nav__links'>
                    <a className='nav__link nav__link--active'>Explore</a>
                    <a className='nav__link' href=''>Marketplace</a>
                    <a className='nav__link' href=''>Artist</a>
                    <a className='nav__link' href=''>Collection</a>
                </div>
                <div className="nav__search">
                    <div className="search__container">
                        <input type="search" id='search' placeholder="Search..." />
                        <span className="icon"><i className="fa fa-search"></i></span>
                    </div>
                </div>
                <div className='nav__sign-in'>
                    <button >Sign in</button>
                </div>
            </nav>
        </section>
    </header>
  )
}

export default Header