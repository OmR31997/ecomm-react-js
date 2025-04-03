import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";

const HeaderComponent = () => {

    const linkCls = "text-decoration-none fw-bold icon-link-hover btn";

    const { cart, auth } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartRout = () => {
        navigate(`/cart`);
    }

    const logHandle = () => {
        dispatch(logOut());
        navigate("/");
    }

    return (<header /*ref={headerRef}*/ className="text-dark-emphasis py-3 px-5 d-flex justify-content-between align-items-center position-sticky z-1" style={{ backgroundColor: "rgb(23, 70, 72)" }}>
        <NavLink to={`/`} className="text-decoration-none" style={{ color: "#88bfa8" }}>
            <div className="logo d-flex align-items-center">
                <i className="fa-solid fa-shop fs-5" style={{ width: "100px", fontSize: '50px' }}></i> <span style={{ fontFamily: "cursive", fontSize: '25px' }}>GizmoMart<sub>.com</sub></span>
            </div>
        </NavLink>

        <nav className="d-flex align-items-center gap-2">
            <div className="nav-links d-flex gap-3">
                <NavLink to={`/`} className={linkCls} style={{ color: '#88bfa8' }}><i className="fa-solid fa-house"></i></NavLink>
                {
                    (auth.isAuthenticated) && (
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary round" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user fs-5"></i> <span>Hello, {JSON.parse(localStorage.getItem("user")).uName}</span>
                            </button>
                            <ul class="dropdown-menu log-out">
                                <li><button onClick={logHandle} className="dropdown-item log-out">LogOut</button></li>
                            </ul>
                        </div>)
                }
                <NavLink to={`/register`} className={linkCls} style={{ color: '#88bfa8', display: `${auth.isAuthenticated ? 'none' : 'block'}` }}> Sign-Up</NavLink>
                <NavLink to={`/logIn`} className={linkCls} style={{ color: '#88bfa8', display: `${auth.isAuthenticated ? 'none' : 'block'}` }}> Sign-In</NavLink>
            </div>
            <button className="btn" onClick={cartRout}>
                <div className="position-relative">
                    <i className="fa-solid fa-cart-shopping fs-5 icon"></i>
                    {cart.length > 0 && (<span className="position-absolute bg-success d-flex justify-content-center align-items-center rounded-circle text-light cart-items">{cart.length}</span>)}
                </div>
            </button>
            <button className="btn" style={{ display: "none" }}>M</button>
            <button className="btn menu">S</button>
        </nav>
    </header>)
}

export default HeaderComponent