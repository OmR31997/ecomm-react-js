import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from "../redux/Slices/CartSlice";
import { useNavigate} from "react-router-dom";

import toast from "react-hot-toast";

const ProductComponent = ({ post }) => {

  const { cart, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCart = () => {
    if(auth.isAuthenticated)
    {
      dispatch(add(post));
      toast.success("Item added to Cart");
    }
    else
    {
      toast.error("First you have to Signed");
      navigate(`/logIn`)
    }

  }

  const removeCart = () => {
    dispatch(remove(post.id));
    toast.success("Item has been removed")
  }

  return (
    <div className='mx-2 shadow p-5 mb-5 bg-body-tertiary rounded container-width '>
      <div className="title">
        <p className='text-info fw-semibold text-left mt-1'>{post.title.split(" ").length > 3 ? post.title.split(" ").slice(0, 3).join(" ") + "..." : post.title}</p>
      </div>

      <div className="des">
        <p className='px-1 fw-normal text-left' style={{ fontSize: '12px', color: 'gray', maxWidth: '160px' }}>{post.description.split(" ").slice(0, 10).join(" ")}</p>
      </div>

      <div className="imageContainer text-left px-1">
        <img src={post.image} alt="ItemImage" style={{ width: '150px', height: '200px' }} />
      </div>

      <div className="footDiv">
        <table className='w-100 my-3 text-center'>
          <tbody>
            <tr>
              <td className='fw-bolder'><span style={{ color: 'darkgreen' }}>${post.price}</span></td>
              <td>
                {!cart.find((cItem) => cItem.id === post.id)
                  ? (<button onClick={addCart} type="button" className="btn btn-outline-success rounded-pill badge text-success hover-light">Add To Cart</button>)
                  : (<button onClick={removeCart} type="button" className="btn btn-outline-danger rounded-pill badge text-danger hover-light">X</button>)}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Rating</td>
              <td>{post.rating.rate}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default ProductComponent
