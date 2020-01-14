<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="utf-8">
    <title>Omnifood</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/normalize.css">
    <link rel="stylesheet" type="text/css" href="../css/grid.css">
    <link rel="stylesheet" type="text/css" href="../css/styles.css">


</head>

<body class="preload">

    <header>

        <nav>
            <div class="row nav-bar">
                <img src="../resources/logo-white.png" alt="Omnifood logo" class="logo">
                <ul class="main-nav">
                    <li><a class="nav-link" href="#">Food Delivery</a></li>
                    <li><a class="nav-link" href="#">How It Works</a></li>
                    <li><a class="nav-link" href="#">Our Cities</a></li>
                    <li><a class="nav-link" href="#">Sign Up</a></li>
            </div>
        </nav>

        <div class="hero-text-box">
            <h1>Goodbye junk food.<br>Hello super healthy meals.</h1>
            <a class="btn btn-full" href="#">I'm hungry</a>
            <a class="btn btn-ghost" href="#">Show me more</a>
        </div>

    </header>

    <section class="features-section">

        <div class="row">
            <h2>GET HEALTHY FOOD FAST &mdash; NOT FAST FOOD.</h2>
            <p class="long-copy">Hello! We’re Omnifood, your new premium food delivery service. We know you’re always
                busy, with no time for cooking. So let us take care of that. </p>
        </div>

        <div class="row">

            <div class="col span-1-of-4 feature-box">
                <ion-icon name="calendar" class="icon"></ion-icon>
                <h3>Up to 365 days/year</h3>
                <p class="feature-copy">Never cook again! We really mean that. Our subscription plans include up to 365
                    days/year coverage. You can also choose to order more flexibly if that's your style.</p>
            </div>

            <div class="col span-1-of-4 feature-box">
                <ion-icon name="time" class="icon"></ion-icon>
                <h3>Delivered in 45 minutes</h3>
                <p class="feature-copy">You're only ever 45 minutes away from delicious and super healthy meals
                    delivered right to your home. We work with the best chefs to ensure that you're
                    100% happy.</p>
            </div>

            <div class="col span-1-of-4 feature-box">
                <ion-icon name="nutrition" class="icon"></ion-icon>
                <h3>100% organic</h3>
                <p class="feature-copy">All our vegetables are fresh, organic and local. They're good for your health
                    and the environment, and they taste better!</p>
            </div>

            <div class="col span-1-of-4 feature-box">
                <ion-icon name="happy" class="icon"></ion-icon>
                <h3>Have it your way</h3>
                <p class="feature-copy">Choose from our menu containing over 100 delicious meals and adjust them
                    according to your taste. It's up to you!</p>
            </div>

        </div>

    </section>

    <section class="meals-section">
        <ul class="meals-showcase">
            <li>
                <figure><img src="../resources/1.jpg" alt="Korean bibimbap with egg and vegetables" class="meal-image">
                </figure>
            </li>
            <li>
                <figure><img src="../resources/2.jpg" alt="Simple italian pizza with cherry tomatoes"
                        class="meal-image"></figure>
            </li>
            <li>
                <figure><img src="../resources/3.jpg" alt="Chicken breast steak with vegetables" class="meal-image">
                </figure>
            </li>
            <li>
                <figure><img src="../resources/4.jpg" alt="Autumn pumpkin soup" class="meal-image"></figure>
            </li>
        </ul>
        <ul class="meals-showcase">
            <li>
                <figure><img src="../resources/5.jpg" alt="Paleo beef steak with vegetables" class="meal-image">
                </figure>
            </li>
            <li>
                <figure><img src="../resources/6.jpg" alt="Healthy baguette with egg and vegetables" class="meal-image">
                </figure>
            </li>
            <li>
                <figure><img src="../resources/7.jpg" alt="Burger with cheddar and bacon" class="meal-image"></figure>
            </li>
            <li>
                <figure><img src="../resources/8.jpg" alt="Granola with cherries and strawberries" class="meal-image">
                </figure>
            </li>
        </ul>
    </section>

    <section class="how-section">
        <div class="row">
            <h2>HOW IT WORKS</h2>
        </div>
        <div class="row">
            <div class="col span-1-of-2 step-box">
                <img src="../resources/app-iPhone.png" class="app-screen" alt="Omnifood app on iPhone">
            </div>
            <div class="col span-1-of-2 step-box">
                <div class="step">
                    <div>1
                    </div>
                    <p>Choose the subscription plan that best fits your needs and sign up today.<p>
                </div>
                <div class="step">
                    <div>2
                    </div>
                    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                </div>
                <div class="step">
                    <div>3
                    </div>
                    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                </div>
                <div class="app-buttons">
                    <a href="#" class="btn-app"><img src="../resources/download-ios.svg"
                            alt="Download the app on iOS"></a>
                    <a href="#" class="btn-app"><img src="../resources/download-android.png"
                            alt="Download the app on Android"></a>
                </div>
            </div>
    </section>

    <section class="cities-section">
        <div class="row">
            <h2>WE'RE CURRENTLY IN THESE CITIES</h2>
        </div>
        <div class="row cities-row">
            <div class="col span-1-of-4 city-box">
                <div class="city-photo-box">
                    <img src="../resources/london.jpg" alt="London photo">
                    <h3>London</h3>
                </div>
                <p>
                    <ion-icon class="cities-icon" name="person"></ion-icon>1800+ happy eaters<br>
                    <ion-icon class="cities-icon" name="star"></ion-icon>70+ top chefs<br>
                    <ion-icon class="cities-icon" name="logo-twitter"></ion-icon><a href="#">@omnifood_london</a>
                </p>
            </div>
            <div class="col span-1-of-4 city-box">
                <div class="city-photo-box">
                    <img src="../resources/san-francisco.jpg" alt="San Francisco photo">
                    <h3>San Francisco</h3>
                </div>
                <p>
                    <ion-icon class="cities-icon" name="person"></ion-icon>3700+ happy eaters<br>
                    <ion-icon class="cities-icon" name="star"></ion-icon>120+ top chefs<br>
                    <ion-icon class="cities-icon" name="logo-twitter"></ion-icon><a href="#">@omnifood_sf</a>
                </p>
            </div>
            <div class="col span-1-of-4 city-box">
                <div class="city-photo-box">
                    <img src="../resources/lisbon-3.jpg" alt="Lisbon photo">
                    <h3>Lisbon</h3>
                </div>
                <p>
                    <ion-icon class="cities-icon" name="person"></ion-icon>1600+ happy eaters<br>
                    <ion-icon class="cities-icon" name="star"></ion-icon>60+ top chefs<br>
                    <ion-icon class="cities-icon" name="logo-twitter"></ion-icon><a href="#">@omnifood_lx</a>
                </p>
            </div>
            <div class="col span-1-of-4 city-box">
                <div class="city-photo-box">
                    <img src="../resources/berlin.jpg" alt="Berlin photo">
                    <h3>Berlin</h3>
                </div>
                <p>
                    <ion-icon class="cities-icon" name="person"></ion-icon>2300+ happy eaters<br>
                    <ion-icon class="cities-icon" name="star"></ion-icon>100+ top chefs<br>
                    <ion-icon class="cities-icon" name="logo-twitter"></ion-icon><a href="#">@omnifood_berlin</a>
                </p>
            </div>
        </div>
    </section>

    <section class="testimonials-section">
        <div class="row">
            <h2>OUR CUSTOMERS CAN'T LIVE WITHOUT US</h2>
        </div>
        <div class="row">
            <div class="col span-1-of-3 customer-box">
                <blockquote>Omnifood is just awesome! I just launched a start-up which leaves me with no time for
                    cooking, so Omnifood is a life-saver. Now I've gotten used to it, I couldn't live without my daily
                    meals!</blockquote>
            </div>
            <div class="col span-1-of-3 customer-box">
                <blockquote>Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of
                    options for food delivery here in Lisbon, but no-one comes even close to Omifood. Me and my family
                    are so in love!</blockquote>
            </div>
            <div class="col span-1-of-3 customer-box">
                <blockquote>I was looking for a quick and easy food delivery service in San Francisco. I tried a lot of
                    them and stopped looking when I found Omnifood. Best food delivery service in the Bay Area. Keep up
                    the great work!</blockquote>
            </div>
        </div>
        <div class="row customer-photo-row">
            <div class="col span-1-of-3">
                <cite><img src="../resources/customer-1.jpg" class="customer-photo" alt="Customer photo 1">Alberto Duncan</cite>
            </div>
            <div class="col span-1-of-3">
                <cite><img src="../resources/customer-2.jpg" class="customer-photo" alt="Customer photo 2">Joanna Silva</cite>
            </div>
            <div class="col span-1-of-3">
                <cite><img src="../resources/customer-3.jpg" class="customer-photo" alt="Customer photo 3">Milton Chapman</cite>
            </div>
        </div>
    </section>


    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <script src="../js/index.js" charset="utf-8"></script>

</body>

</html>
