import React from 'react'
import { Link } from 'react-router-dom'
import welcomeIrinaPic from './pictures/b7a5e4e9-e03b-49c8-91c3-f8cfc991e252 1.png'
import './Statistic.css'
import ListComponent from '../../components/ListComponent/ListComponent'

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
        <div className='infopanel'>
          Инфопанель
          <ListComponent>Калькулятор</ListComponent>
          {/* listComponent */}
        </div>
        <div className='application'>
          {/* listComponent */}
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
        <div className="Day-profit"></div>
        <div className="Client-statistic"></div>
        <div className="Recent-transactions"></div>
        <div className="Day-active"></div>
        <div className="Payment-Methods"></div>
        <div className="-Weekly-sales"></div>
        <div className="Period"></div>
        <div className="Order-types"></div>
        <div className="Daily-sales"></div>
        <div className="Conversion"></div>
        <div className="Current-statistics"></div>
        <div className="Profit"></div>
      </div>
    </div>
  )
}

export default Statistic