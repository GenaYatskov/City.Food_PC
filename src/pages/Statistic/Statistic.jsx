import React from 'react'
import { Link } from 'react-router-dom'
import welcomeIrinaPic from './pictures/b7a5e4e9-e03b-49c8-91c3-f8cfc991e252 1.png'
import './Statistic.css'

function Statistic() {
  return (
    <div className="container">
      <div className="menu">
        <div className='welcomeIrina'>
          <div className='content'>
            <div className='welcomeUser'>Привет, Ирина</div>
            <div className='todaysRevenueInscription'>Сегодняшняя выручка:</div>
            <div className='todaysRevenueStatistic'></div>
          </div>
          <img src={welcomeIrinaPic} className='picture'></img>
        </div>
      </div>
      <div className="header">
        <div className='search'>
          <div className='searchIcon'></div>
          <input placeholder='Search...' className='searchField'></input>
        </div>
        <div className='help'></div>
        <div className='group'></div>
        <div className='notification'></div>
        <div className='settings'></div>
        <Link to={"/registration"} className='logout'></Link>
      </div>
      <div className="grid">
        <div class="Day-profit"></div>
        <div class="Client-statistic"></div>
        <div class="Recent-transactions"></div>
        <div class="Day-active"></div>
        <div class="Payment-Methods"></div>
        <div class="-Weekly-sales"></div>
        <div class="Period"></div>
        <div class="Order-types"></div>
        <div class="Daily-sales"></div>
        <div class="Conversion"></div>
        <div class="Current-statistics"></div>
        <div class="Profit"></div>
      </div>
    </div>
  )
}

export default Statistic