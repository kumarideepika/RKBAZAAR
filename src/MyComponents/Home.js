import '../App.css';
// import './boot÷'

function Home() {
    return (
        <div className="App">
            <header class="section-header">

                <section class="header-main border-bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            {/* <div className="text-1">
                                RK BAZAAR
                            </div> */}
                            <div class="col-lg-6 col-sm-12">
                                <form action="#" class="search">
                                    <div class="input-group w-100">
                                        <input type="text" class="form-control" placeholder="Search" />
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-12">
                                <div class="widgets-wrap float-md-right">
                                    <div class="widget-header  mr-3">
                                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                                        <span class="badge badge-pill badge-danger notify">0</span>
                                    </div>
                                    <div class="widget-header icontext">
                                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                                        <div class="text">
                                            <span class="text-muted">Welcome!</span>
                                            <div>
                                                <a href="#">Sign in</a> |
                                                <a href="#"> Register</a>
                                                <a href="#"> Contact Us</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
                    <div class="container">

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="main_nav">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#">Homec</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Supermarket</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Partnership</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Baby &amp Toys</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Fitness sport</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Clothing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Furnitures</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> More</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Foods and Drink</a>
                                        <a class="dropdown-item" href="#">Home interior</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Category 1</a>
                                        <a class="dropdown-item" href="#">Category 2</a>
                                        <a class="dropdown-item" href="#">Category 3</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>



            <section class="section-main bg padding-y">
                <div class="container">

                    {/* <div class="row"> */}
                        {/* <aside class="col-md-3">
                            <nav class="card">
                                <ul class="menu-category">
                                    <li><a href="#">Best Grocery</a></li>
                                    <li><a href="#">Home interior</a></li>
                                    <li><a href="#">Electronics</a></li>
                                    <li><a href="#">Sports</a></li>
                                    <li><a href="#">Kitchen</a></li>
                                    <li><a href="#">Online goods</a></li>
                                </ul>
                            </nav>
                        </aside> */}
                        <div class="col-md-9">
                            <article class="banner-wrap">
                                <video src="/assets/images/items/RK.mp4" controls="controls" autoplay="true" />
                            </article>
                        </div>
                    {/* </div> */}
                </div>
            </section>

            <section class="section-name padding-y-sm">
                <div class="container">

                    <header class="section-heading">
                        <a href="#" class="btn btn-outline-primary float-right">See all</a>
                        <a href="#" class="btn btn-outline-primary float-right" >React Native</a>
                        <a href="" class="" >Online Framework</a>
                        <h3 class="section-title">Popular products</h3>
                    </header>



                    <div class="row">
                    <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="../assets/images/items/Loose-Grocery.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Loose Grocery</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="../assets/images/items/Branded-Grocery.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Kitchen</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Packaged-Food-1.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Sports</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Dairy-Frozen-Products.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Electronics</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Snacks-Beverages-1.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Men's Section</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Snacks-Beverages-1.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Female's Section</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Household-Essentials.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Home Interior</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Personal-Care.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Baby-Care.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Bed-N-Bath.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Crockery.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>

                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Plastics-Articles.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Stationery-.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Steel.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Pooja-Items.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                        <div class="col-md-3">
                            <div href="#" class="card card-product-grid">
                                <a href="#" class="img-wrap"> <img src="assets/images/items/Toys-Gift-Articles.jpeg" /> </a>
                                <figcaption class="info-wrap">
                                    <a href="#" class="title">Just another product name</a>
                                    <del>₹180</del>
                                    <div class="price mt-1">Starting with ₹89.00</div>
                                </figcaption>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </section>

            <section class="section-name padding-y bg">
                <div class="container">

                    <div class="row">
                        <div class="col-md-6">
                            <h3>Download app demo text</h3>
                            <p>Get an amazing app  to make Your life easy</p>
                        </div>
                        <div class="col-md-6 text-md-right">
                            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
                            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
                        </div>
                    </div>
                </div>
            </section>





            <footer class="section-footer border-top bg">
                <div class="container">
                    <section class="footer-top  padding-y">
                        <div class="row">
                            <aside class="col-md col-6">
                                <h6 class="title">Brands</h6>
                                <ul class="list-unstyled">
                                    <li> <a href="#">Ashirwad</a></li>
                                    <li> <a href="#">Haldiram</a></li>
                                    <li> <a href="#">Hathi</a></li>
                                    <li> <a href="#">Nike</a></li>
                                </ul>
                            </aside>
                            <aside class="col-md col-6">
                                <h6 class="title">Company</h6>
                                <ul class="list-unstyled">
                                    <li> <a href="#">About us</a></li>
                                    <li> <a href="#">Career</a></li>
                                    <li> <a href="#">Find a store</a></li>
                                    <li> <a href="#">Rules and terms</a></li>
                                    <li> <a href="#">Sitemap</a></li>
                                </ul>
                            </aside>
                            <aside class="col-md col-6">
                                <h6 class="title">Help</h6>
                                <ul class="list-unstyled">
                                    <li> <a href="#">Contact us</a></li>
                                    <li> <a href="#">Money refund</a></li>
                                    <li> <a href="#">Order status</a></li>
                                    <li> <a href="#">Shipping info</a></li>
                                    <li> <a href="#">Open dispute</a></li>
                                </ul>
                            </aside>
                            <aside class="col-md col-6">
                                <h6 class="title">Category</h6>
                                <ul>
                                    <li><a href="#"></a>React Native</li>
                                    <li><a href="#"></a>Flutter</li>
                                    <li><a href="#"></a>Ionic framwork</li>
                                    <li><a href="#"></a>User Interface</li>
                                    <li><a href="#"></a>TextInput</li>
                                </ul>
                            </aside>
                            <aside class="col-md col-6">
                                <h6 class="title">Account</h6>
                                <ul class="list-unstyled">
                                    <li> <a href="#"> User Login </a></li>
                                    <li> <a href="#"> User register </a></li>
                                    <li> <a href="#"> Account Setting </a></li>
                                    <li> <a href="#"> My Orders </a></li>
                                </ul>
                            </aside>
                            <aside class="col-md">
                                <h6 class="title">Social</h6>
                                <ul class="list-unstyled">
                                    <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
                                    <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
                                    <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
                                    <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    <section class="footer-bottom row">
                        <div class="col-md-2">
                            <p class="text-muted">   2021 Company name </p>
                        </div>
                        <div class="col-md-8 text-md-center">
                            <span class="px-2">info@com</span>
                            <span class="px-2">+91 8709885308</span>
                            <span class="px-2">Street name 123, ABC</span>
                        </div>
                        <div class="col-md-2 text-md-right text-muted">
                            <i class="fab fa-lg fa-cc-visa"></i>
                            <i class="fab fa-lg fa-cc-paypal"></i>
                            <i class="fab fa-lg fa-cc-mastercard"></i>

                        </div>
                    </section>
                </div>
            </footer>

        </div>
    );
}
export default Home;