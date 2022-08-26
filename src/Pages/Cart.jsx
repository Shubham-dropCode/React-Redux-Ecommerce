import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';
import Navbar from '../Components/NavBar';
import data from "../Content.json"

const Cart = () => {
    console.log("🚀 ~ file: cart.jsx ~ line 8 ~ d̥ata", data)

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <React.Fragment>
            {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}

            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="/"><img src="../assets/img/logo.png" alt="" /></a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="/"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="../assets/img/language.png" alt="" />
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="/">Spanis</a></li>
                            <li><a href="/">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="/"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="./shop-grid.html">Shop</a></li>
                        <li><a href="/">Pages</a>
                            <ul className="header__menu__dropdown">
                                <li><a href="./shop-details.html">Shop Details</a></li>
                                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                <li><a href="./checkout.html">Check Out</a></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>

            <Navbar />

            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="/">Fresh Meat</a></li>
                                    <li><a href="/">Vegetables</a></li>
                                    <li><a href="/">Fruit & Nut Gifts</a></li>
                                    <li><a href="/">Fresh Berries</a></li>
                                    <li><a href="/">Ocean Foods</a></li>
                                    <li><a href="/">Butter & Eggs</a></li>
                                    <li><a href="/">Fastfood</a></li>
                                    <li><a href="/">Fresh Onion</a></li>
                                    <li><a href="/">Papayaya & Crisps</a></li>
                                    <li><a href="/">Oatmeal</a></li>
                                    <li><a href="/">Fresh Bananas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shoping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table    ">
                                <table>
                                    <thead >
                                        <tr>
                                            <th className="shoping__product col-12">Products</th>
                                            <th className='text-right pr-4'>Price</th>
                                            {/* <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => {
                                            return (
                                                <tr className='' key={product.id}>
                                                    <td className="shoping__cart__item "  >
                                                        <img src={product.image} alt="" style={{ height: 100, Margin: 0 }} />
                                                        <h5 className='pl-3'>{product.title}</h5>
                                                    </td>
                                                    <td className="shoping__cart__price text-center pr-3">
                                                        ${product.price}
                                                    </td>
                                                    {/* <td className="shoping__cart__quantity">
                                                        <div className="quantity">
                                                            <div className="pro-qty">
                                                                <input type="text" value="1" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="shoping__cart__total">
                                                        $110.00
                                                    </td> */}
                                                    <td className="shoping__cart__item__close text-center">
                                                        <span className="icon_close" onClick={() => handleRemove(product.id)}></span>
                                                    </td>
                                                </tr>

                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="/" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                <a href="/" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                    Upadate Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span>$454.98</span></li>
                                </ul>
                                <a href="/" className="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Cart