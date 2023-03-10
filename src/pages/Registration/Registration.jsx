import React from 'react'
import Input from 'D:/Projects/cityfoodpc/src/components/Input/Input.js'
import mascotPicture from './pictures/image_2022-10-13_15-34-44.png'
import './Registration.css'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div className="App">
      <img alt='' src={mascotPicture} className='mascotPicture'/>
      <div className="welcomePage_left">
      </div>
      <div className="welcomePage_right">
        <div className="welcomePage_right_info">
          <div className="Welcome">Добро пожаловать в City.Food</div>
          <div className="CreateAcc">Впервые здесь?<a className='CreateAcc_Link'>Создать аккаунт</a></div>
          <div className="EmailPlace">
            <Input 
            type="text" 
            placeholder="E-mail">
            </Input>
            </div>
          <div className="PassPlace">
            <Input 
            type="password" 
            placeholder="Password">
            </Input>
            </div>
          <div className="RememberMe">
            <input id="checkbox" type="checkbox"></input>
            <label htmlFor="checkbox">Запомнить меня?</label>
          </div>
          <div className="ForgotPaswort">Забыли пароль?</div>
          <Link to={"/statistic"} className="Enter">Войти</Link>
          <div className="Demo">Демо версия</div>
          <div className="Strip"><hr></hr><div>или войти с</div></div>
          <div className="GoogleEnter"><div></div>Google</div>
          <div className="FacebookEnter"><div></div>Facebook</div>
          <div className="TwitterEnter"><div></div>Twitter</div>
        </div>
      </div>
    </div>
  )
}

export default Registration