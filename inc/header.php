<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Gehendra's portfolio showcasing creative design and front-end development skills. Explore projects, resume, and contact information.">
    <title>Portfolio</title>
    <link rel="icon" href="../images/site-icon/favicon.ico">
    <link rel="stylesheet" href="dist/css/vendor.min.css">
    <link rel="stylesheet" href="dist/css/theme.min.css">
</head>

<body data-bs-spy="scroll" data-bs-target="#main-nav" data-bs-offset="50">
    <div class="loader">
        <div class="ripple"></div>
    </div>
    <div class="main-container">
        <nav class="header position-fixed w-100" id="navbar">
            <div class="custom-container">
                <div class="row">
                    <div class="col-6 col-lg-3">
                        <a href="../index.php" class="logo">GR</a>
                    </div>
                    <div class="col-lg-6 d-none d-lg-flex">
                        <ul class="p-0 m-0 mx-auto d-flex align-items-center navigation" id="main-nav">
                            <li>
                                <a href="#home" class="nav-link active"><span>Home</span></a>
                            </li>
                            <li>
                                <a href="#about" class="nav-link"><span>About</span></a>
                            </li>
                            <li>
                                <a href="#services" class="nav-link"><span>Services</span></a>
                            </li>
                            <li>
                                <a href="#portfolio" class="nav-link"><span>Portfolio</span></a>
                            </li>
                            <li>
                                <a href="#testimonials" class="nav-link"><span>Clients</span></a>
                            </li>
                            <li>
                                <a href="#contact" class="nav-link"><span>Contact</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 d-none d-lg-flex">
                        <div class="hire-btn-wrapper d-flex align-items-center justify-content-end w-100">
                            <a href="#contact" class="secondary-btn hire-btn d-block">Hire me</a>
                        </div>
                    </div>
                    <div class=" col-6 d-flex d-lg-none">
                        <div class=" d-flex align-items-center justify-content-end w-100 toggler-btn">
                            <div class="bar-icon d-flex flex-column gap-2" data-bs-toggle="offcanvas" href="#offCanvas"
                                role="button" aria-controls="offCanvas">
                                <span class="w-100"></span>
                                <span class="w-100"></span>
                                <span class="w-100"></span>
                            </div>
                        </div>

                        <div class="offcanvas offcanvas-start hidden-nav" tabindex="-1" id="offCanvas"
                            aria-labelledby="offCanvasLabel">
                            <div class="offcanvas-header">
                                <div class="hidden-nav-logo">
                                    <a href="../index.php" class="logo">GR</a>
                                </div>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="offcanvas-contents">
                                    <ul class="d-flex flex-column p-0">
                                        <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link"
                                                href="#">Home</a></li>
                                        <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link"
                                                href="#about">About</a></li>
                                        <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link"
                                                href="#services">Services</a></li>
                                        <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link"
                                                href="#portfolio">Portfolio</a></li>
                                        <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link"
                                                href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>