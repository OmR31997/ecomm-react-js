import React from 'react';
import { useDispatch} from 'react-redux';
import { incQty, decQty } from '../redux/Slices/CartSlice';
const CartItem = ({ selected }) => {

    const dispatch = useDispatch();

    const DEC = () =>{
        dispatch(decQty(selected.id))
    }

    const INC = () =>{
        dispatch(incQty(selected.id))
    }

    return (
        <>
            <div className="mb-4">
                <div className="row g-5 align-items-center">
                    <div className="col-md-4">
                        <img src={selected.image} alt="CartedImage" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{maxWidth:'500px'}}>
                            <h5 className="card-title">{selected.title}</h5>
                            <p className="card-text">{selected.description}</p>
                            <ul className="card-text d-flex list-unstyled align-items-center gap-4">
                                <li><strong><span style={{ color: 'darkgreen' }}>${selected.price}</span></strong></li>
                                <li className='d-flex btn-group'><button className='btn btn-success' onClick={() => DEC()}>-</button><span class="form-control" style={{backgroundColor:"lightgreen"}}>{selected.quantity}</span><button onClick={() => INC()} className='btn btn-success'>+</button></li>
                                <li><button onClick={() => dispatch(remover(selected.id))} type="button" className="btn btn-outline-danger"><i class="fa-solid fa-trash hover-light"></i></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem
