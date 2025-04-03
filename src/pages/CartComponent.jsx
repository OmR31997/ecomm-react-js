import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import CartItem from '../components/CartItem';
const CartComponent = () => {
  const { cart } = useSelector((state) => state)

  const [subTotal, setSubTotal] = useState(0);

  const [grandAmt, setGrandAmt] = useState(0);

  const [tax, setTax] = useState(0);

  useEffect(() =>{
    setSubTotal(cart.reduce((accume, current)=> accume += current.price*current.quantity,0))
    setTax((subTotal*20)/100)
    setGrandAmt(subTotal+tax);
  },[cart])

  console.log("Subtotal: ", subTotal)

  return (
    <div>
      {cart.length > 0
        ? (<div className='d-flex w-100 p-5'>
          <div style={{ width: '70%' }}>
            {cart.map((item, index) => (<CartItem key={index} selected={item}></CartItem>))}
          </div>
          <div className="invoice-box" style={{ width: '35%', maxWidth: '800px', margin: '50px auto', padding: '30px', border: "1px solid #ddd", borderRadius: "10px", background: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)"}}>
            <h2 className="text-center mb-4">Invoice</h2>
            <table className="table table-bordered" style={{fontSize:'12px'}}>
              <thead className="table-dark">
                <tr>
                  <th className='text-center'>SNO</th>
                  <th className='text-center'>Item</th>
                  <th className='text-center'>Quantity</th>
                  <th className='text-center'>Unit Price</th>
                  <th className='text-center'>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (<tr key={index}>
                  <td className='text-center'>{index+1}</td>
                  <td>{item.title}</td>
                  <td className='text-center'>{item.quantity}</td>
                  <td className='text-center'>{item.price}$</td>
                  <td className='text-center'>{item.price*item.quantity}$</td>
                </tr>))}
              </tbody>
            </table>
            <div className="text-end">
              <p><strong>Subtotal:</strong> {subTotal}$</p>
              <p><strong>Tax (20%):</strong> {tax}$</p>
              <h4><strong>Grand Total:</strong> {grandAmt}$</h4>
              <button className='btn btn-success my-3 w-75'>Checkout Items</button>
            </div>
          </div>
        </div>)
        : (<div></div>)}
    </div>
  )
}

export default CartComponent
