import React from 'react'
import style from './ListComponent.module.css'

const ListComponent = ({body,img, ...props}) => {
  return <div className={style.listComponent} {...props}>
    <img src={img} className={style.img}></img>
    <div className={style.blockName}>{body}</div>
  </div>
}
export default ListComponent