<script>

</script>

<template>
<!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="20"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: 2px;"
        />
      </a>

      <!-- Search form -->
      <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style="min-width: 125px;"
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>
    </div>
    <!-- Left elements -->

    <!-- Center elements -->
    <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me-3 me-lg-1 active">
        <a class="nav-link" href="#">
          <span><i class="fas fa-home fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-flag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-video fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-users fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">2</span>
        </a>
      </li>
    </ul>
    <!-- Center elements -->

    <!-- Right elements -->
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            class="rounded-circle"
            height="22"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <strong class="d-none d-sm-block ms-1">John</strong>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-plus-circle fa-lg"></i></span>
        </a>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-comments fa-lg"></i>

          <span class="badge rounded-pill badge-notification bg-danger">6</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell fa-lg"></i>
          <span class="badge rounded-pill badge-notification bg-danger">12</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-chevron-circle-down fa-lg"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
    </ul>
    <!-- Right elements -->
  </div>
</nav>
<!--regist-->
<section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--login-->
<section class="vh-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 2rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr class="my-4">

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--home-->
<div class="container" style="margin-top:50px;">
  <div class="row">
    <div class="col-md-3">
      <div class="card-sl">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
          <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
          <div class="card-heading">
            Audi Q8
          </div>
          <div class="card-text">
            Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
          </div>
          <div class="card-text">
            $67,400
          </div>
        <a href="#" class="card-button"> Purchase</a>
        <a href="#" class="card-button2"> Detail</a>

      </div>
    </div>
    <div class="col-md-3">
      <div class="card-sl">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
          <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
          <div class="card-heading">
            Audi Q8
          </div>
          <div class="card-text">
            Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
          </div>
          <div class="card-text">
            $67,400
          </div>
        <a href="#" class="card-button"> Purchase</a>
        <a href="#" class="card-button2"> Detail</a>
      </div>
    </div>
  </div>  
</div>  

<!-- detail phone -->
<div class="container mb-5" style="margin-top: 100px">
    <div class="d-flex justify-content-between gap-5">
      <div style="width: 1000px">
        <h2 class="title">tes</h2>
        <p class="text mt-3">
          tes
        </p>
        <h4>Amenities</h4>
        <ul>
            <li>65 inch LED TV</li>
            <li>BOSE Bluetooth speaker</li>
            <li>Individually controlled air conditioning</li>
            <li>Le Labo® bath products</li>
            <li>Separate soaking bathtub and rain shower</li>
            <li>Minibar and espresso machine</li>
        </ul>
        <h5 class="mt-3">tess/Night</h5>
        <button class="btn btn-warning mt-3" @click.prevent="handleTransaction(detailRoom.id)">Booking Now</button>
        <!-- Vertically centered modal -->
        <button
          type="button"
          class="btn btn-warning mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="margin-left: 10px"
        >
          <img src="tessgambar" alt="" />
        </button>
        <!-- modal section -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Scan QR Code - BlackDoorz
                </h1>
                <button
                  type="button"
                  class="btn-close btn-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <img src="qrCode.url" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <img
          src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="img-fluid rounded"
          alt="..."
          width="1000"
        />
      </div>
    </div>
  </div>


  


  <RouterView />
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

/* stylingCard */
  /*  Helper Styles */
  body {
    font-family: Varela Round;
    background: #f1f1f1;
  }

  a {
    text-decoration: none;
  }

  /* Card Styles */

  .card-sl {
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .card-image img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 8px 8px 0px 0;
  }

  .card-action {
    position: relative;
    float: right;
    margin-top: -25px;
    margin-right: 20px;
    z-index: 2;
    color: #E26D5C;
    background: #fff;
    border-radius: 100%;
    padding: 15px;
    font-size: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
  }

  .card-action:hover {
    color: #fff;
    background: #E26D5C;
    -webkit-animation: pulse 1.5s infinite;
  }

  .card-heading {
    font-size: 18px;
    font-weight: bold;
    background: #fff;
    padding: 10px 15px;
  }

  .card-text {
    padding: 10px 15px;
    background: #fff;
    font-size: 14px;
    color: #636262;
  }

  .card-button2 {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    background-color: #1F487E;
    color: #fff;
    border-radius: 0 0 10px 10px;
  }

  .card-button {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    background-color: #1F487E;
    color: #fff;
  }

  .card-button:hover {
    text-decoration: none;
    background-color: #1D3461;
    color: #fff;

  }


  @-webkit-keyframes pulse {
    0% {
      -moz-transform: scale(0.9);
      -ms-transform: scale(0.9);
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    70% {
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -webkit-transform: scale(1);
      transform: scale(1);
      box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
    }

    100% {
      -moz-transform: scale(0.9);
      -ms-transform: scale(0.9);
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
    }
  }
  /* endStylingCard */
</style>
