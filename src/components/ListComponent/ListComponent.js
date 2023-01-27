import React from 'react'
import style from './ListComponent.module.css'

const ListComponent = ({body, ...props}) => {
  return <div className={style.listComponent} {...props}>
    {body}
    <div className={style.img}></div>
  </div>
}
export default ListComponent