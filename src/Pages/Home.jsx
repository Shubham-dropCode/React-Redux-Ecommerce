import React, { useEffect } from 'react'
import data from "../Content.json"
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import Navbar from '../Components/NavBar';



const Home = () => {
    const dispatch = useDispatch();

    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);



    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

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
                        <li><a href="/">Shop</a></li>
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



            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories dropdown">
                                <div className="hero__categories__all" id="dropdownMenuButton">
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                <ul aria-labelledby="dropdownMenuButton">
                                    {data.map((product, idx) => {

                                        return (

                                            <li key={idx}><a href="/">{[...new Set(product.category)]}</a></li>
                                        )

                                    })}
                                </ul>


                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">

                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+XXXXXXXXX</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item set-bg" style={{ backgroundImage: "url(../assets/img/hero/tshirts.jpg)" }}>
                                <div className="hero__text">
                                    <span>MENS Ware</span>
                                    <h2>Brand <br />100% Original</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="/" className="primary-btn">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="">
                                    <img className="set-bg" src="../assets/img/categories/cat-1.jpg" alt="" />
                                    <h5><a href="/">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="../assets/img/categories/cat-2.jpg">
                                    <h5><a href="/">Dried Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="../assets/img/categories/cat-3.jpg">
                                    <h5><a href="/">Vegetables</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="../assets/img/categories/cat-4.jpg">
                                    <h5><a href="/">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="../assets/img/categories/cat-5.jpg">
                                    <h5><a href="/">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*"><strong>All</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">


                        {data.map((product) => {
                            return (

                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                    <div className="featured__item" key={product.id}>
                                        <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${product.image})` }}>
                                            <ul className="featured__item__pic__hover">
                                                <li><a href="/"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="/"><i className="fa fa-retweet"></i></a></li>
                                                <li><a onClick={() => handleAdd(product)}><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="featured__item__text">
                                            <h6><a href="/">{product.title}</a></h6>
                                            <h5>₹{product.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

        </React.Fragment >
    )
}

export default Home

