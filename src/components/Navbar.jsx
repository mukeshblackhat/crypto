import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="mainNavCon">
        <div className="navMenu">
            <div className="padd">Comp</div>
            <div className="padd">Head1</div>
            <div className="padd">Head2</div>
        </div>
        <div className="span1"></div>
        <div className="navWalletProf">
            <div className='walletButton'>Connect Wallet</div>
        </div>
    </div>
  )
}

export default Navbar