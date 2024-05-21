import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

const Order = () => {


    return (
      <div className='item'>
          {/* <img src={"./img/" + this.props.item.img} />
          <h5>{this.props.item.title}</h5>
          <b>{this.props.item.price}₽</b>
          <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} /> */}
      </div>
    )
}

export default Order