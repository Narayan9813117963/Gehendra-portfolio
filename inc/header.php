<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio</title>
    <link rel="icon" href="../images/site-icon/favicon.ico">
    <link rel="stylesheet" href="dist/css/vendor.css">
    <link rel="stylesheet" href="dist/css/theme.css">
</head>

<body data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0">
    <nav class="header position-fixed w-100" id="navbar">
        <div class="custom-container">
            <div class="row">
                <div class="col-6 col-lg-3">
                    <a href="../index.php" class="logo">GR</a>
                </div>
                <div class="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
                    <ul class="p-0 m-0 d-flex align-items-center navigation" id="main-nav">
                        <li>
                            <a href="#home" class="active"><span>Home</span></a>
                        </li>
                        <li>
                            <a href="#about"><span>About</span></a>
                        </li>
                        <li>
                            <a href="#services"><span>Services</span></a>
                        </li>
                        <li>
                            <a href="#portfolio"><span>Portfolio</span></a>
                        </li>
                        <li>
                            <a href="#contact"><span>Contact</span></a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 d-none d-lg-flex justify-content-end align-items-center">
                    <a href="#contact" class="secondary-btn hire-btn">Hire me</a>
                </div>
                <div class=" col-6 toggler-btn d-flex d-lg-none align-items-center justify-content-end">
                    <div class=" d-flex align-items-center justify-content-end w-100">
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
                                    <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link" href="#">Home</a></li>
                                    <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link" href="#about">About</a></li>
                                    <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link" href="#services">Services</a></li>
                                    <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link" href="#portfolio">Portfolio</a></li>
                                    <li class="text-center"><a class="py-3 d-block w-100 offcanvas-link" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>