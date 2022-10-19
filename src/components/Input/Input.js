import React from 'react'
import style from './Input.module.css'

const Input = (props) => {
  return <input className={style.Input} {...props}></input>
}
export default Input