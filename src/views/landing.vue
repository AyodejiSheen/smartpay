<template>
    <div>

        <div class="container-fluid header">
            <div class="container">

                    <nav class="navbar navbar-expand-lg navbar-light pt-3">
                <a class="navbar-brand"><img src="../assets/smartpay/Logo.png" class="brand-logo"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <a href="#" class="nav-link navbtn btn text-white" >Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#features" class="nav-link navbtn btn text-white" >Features</a>
                    </li>
                    <li class="nav-item">
                        <a href="#benefits" class="nav-link navbtn btn text-white" >Benefits</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbtn btn text-white" href="#testimonies">Testimonies</a>
                    </li>
                    <li class="nav-item">
                    <a href="#subscribe" class="nav-link navbtn btn text-white" >Contant</a>
                    </li>
                    <li class="nav-item">
                    <button class="nav-link navbtn btn text-white ml-5 login" @click="login">Log In</button>
                    </li>

                    <li class="nav-item">
                        <button class="nav-link navbtn btn text-white btn-success pl-4 pr-4 rounded-0" @click="signup">Sign Up</button>
                    </li>
                    </ul>
                    </div>
                    </nav>
        <!-- navbar end -->


                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-white hero-tile mb-3">A Web Banking app with a conscience. </h1>
                        <p class="text-white mb-5">Turnley payment solutions for online business.</p>

                        <button class="btn btn-success pl-4 pr-4  shadow rounded-0 getstart" @click="signup"> Get started!</button>
                        
                    </div>

                    <div class="col-md-6">
                        <img src="../assets/smartpay/iphone1.png" class="iphone1"/>
                    </div>
                </div>
            </div>
        </div>

<!-- header section ends -->
        <div class="container ">
                <div class="mb-5">
                    <h2 class="mt-5 text-center heading" id="features">Meet Our Cool Features</h2>
                    <p class="text-center text-muted note mx-auto">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
                </div>

            <div class="row justify-content-center">
                <div class="col-md-3 text-center">
                    <div class="text-center">
                    <img class="img-icon mx-auto" src="../assets/smartpay/01.png" alt="Card image">
                    <div class="">
                        <h4 class="sub-heading">Create Your Account</h4>
                        <p class="sub-note text-muted">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit.</p>
                    </div>
                    </div>
                </div>
                
                <div class="col-md-3  text-center ml-2">
                    <div class="text-center">
                    <img class=" img-icon mx-auto" src="../assets/smartpay/02.png" alt="Card image">
                    <div class="">
                        <h4 class=" sub-heading">Get Verify</h4>
                        <p class="sub-note text-muted">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit.</p>
                    </div>
                    </div>
                </div>

                <div class="col-md-3  text-center">
                    <div class=" text-center">
                    <img class="img-icon  mx-auto" src="../assets/smartpay/03.png" alt="Card image">
                    <div class="">
                        <h4 class="sub-heading">Build Your Credit Card</h4>
                        <p class="sub-note text-muted">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit.</p>
                    </div>
                    </div>
                </div>
            </div>


            <div class="row ml-auto  protected-row mt-5 pt-5">
                <div class="col-md-5 mx-auto protected-heading">
                    <h2 class=" font-weight-bold heading mt-5 pt-3" id="benefits">Your Day is Protected</h2>
                    <p class="sub-note mx-auto mt-4">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nulla pharetra diam sit amet nisl suscipit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p>
                         <p class=" text-muted sub-note mx-auto mt-4"> Nulla pharetra diam sit amet nisl suscipit.
                         Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
                    <button class="btn btn-success rounded-0 shadow btn-lg mt-4 sub-note"> Read more</button>
                </div>

                <!-- <div class="col-md-2">

                </div>
                 -->
                <div class="col-md-7" >
                    <div class="row justify-content-center protect-row">
                    <div class="protected bg-danger col-md-3 ml-3 text-center p-3 rounded">
                        <img src="../assets/smartpay/globe-grid.png" class="icons"/>  
                        <p class="font-weight-bold text-white mt-3 mb-0">Online Banking</p>
                        <p class="text-white mt-2 mb-0">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p>  
                    </div> 
                    <div class="protected bg-success col-md-3 ml-3 text-center p-3 rounded mt-5 mb-3">
                        <img src="../assets/smartpay/payment-method.png" class="icons"/>  
                        <p class="font-weight-bold text-white mt-3 mb-0">Mobile Application</p>
                        <p class="text-white mt-2 mb-0">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p> 
                    </div> 
                    <div class="protected bg-info col-md-3 ml-3 text-center p-3 rounded">
                        <img src="../assets/smartpay/support.png" class="icons"/>  
                        <p class="font-weight-bold text-white mt-3 mb-0">Professional Support</p>
                        <p class="text-white mt-2 mb-0">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p> 
                    </div> 
                    </div>

                    <div class="row justify-content-center mt-3 protect-row">
                    <div class="protected bg-warning col-md-3 ml-3 text-center p-3 rounded ">
                        <img src="../assets/smartpay/money.png" class="icons "/>  
                        <p class="font-weight-bold text-white mt-3 mb-0 text-dark">Additional Currencies</p>
                        <p class="text-white mt-2 mb-0 text-dark">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p> 
                    </div> 
                    <div class="protected bg-primary col-md-3 ml-3 text-center p-3 rounded mt-3 mb-3">
                        <img src="../assets/smartpay/protection.png" class="icons"/>  
                        <p class="font-weight-bold text-white mt-3 mb-0">Protection & security</p>
                        <p class="text-white mt-2 mb-0">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p>     
                    </div> 
                    <div class="protected bg-primary col-md-3 ml-3 text-center p-3 rounded">
                        <img src="../assets/smartpay/bonus.png" class="icons"/>  
                        <p class="font-weight-bold text-white mt-3 mb-0">Bonus System</p>
                        <p class="text-white mt-2 mb-0">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p> 
                    </div>                    
                    </div>
                </div>
            </div>

        </div>

        
<div class="container-fluid mid-section">
    <div class="container pt-5">
        <div class="row">
        <div class="col-md-6 mt-5 text-center">
            <img src="../assets/smartpay/images-(1).png" class="credit-card"/>
            <img src="../assets/smartpay/Credit-Card.png" class="credit-card-img"/>
        </div>
        <div class="col-md-1">

        </div>

        <div class="col-md-5 mt-4">
                    <h2 class=" font-weight-bold heading heading-mid mt-5 pt-5" >Find a Better Bank Deal in Few Easy Steps</h2>
                    <p class="sub-note mx-auto mt-4">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.  Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
                         <p class=" text-muted sub-note mx-auto mt-4"> Nulla pharetra diam sit amet nisl suscipit.
                         Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit.  Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
                   
        </div>
        </div>


        <div class="row">
            <div class="col-md-5">
                    <h2 class=" font-weight-bold heading heading-mid mt-5 pt-5" >Find a Better Bank Deal in Few Easy Steps</h2>
                    <p class="sub-note mx-auto mt-4">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.  Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
                         <p class=" text-muted sub-note mx-auto mt-4"> Nulla pharetra diam sit amet nisl suscipit.
                         Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit.  Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
            </div>
        <div class="col-md-1">

        </div>
            <div class="col-md-6">
                <img src="../assets/smartpay/Iphone.png" class="Iphone-img-2"/>
            </div>
        </div>
    </div>
</div>


<div class="container">
    <div>
        <h2 class="mt-5 text-center heading" id="testimonies">Our Testimonies</h2>
        <p class="text-center text-muted note mx-auto">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
    </div>

<div class="row mt-5">
    <div class="col-md-4 shadow pb-5">
    <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Adeyemi Ayodeji</h5>
      </div>   
    </div>
    <div class="carousel-item">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">John Doe</h5>
      </div>   
    </div>
    <div class="carousel-item">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Mike Smith</h5>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
    </div>

    <div class="col-md-4  pb-5">
<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Augustine Mall</h5>
      </div>   
    </div>
    <div class="carousel-item">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Brown Smith</h5>
      </div>   
    </div>
    <div class="carousel-item">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Anthony Lookie</h5>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
    </div>

    <div class="col-md-4 shadow pb-5">
<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Brain Whyne</h5>
      </div>    
    </div>
    <div class="carousel-item">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Ruth Laura</h5>
      </div>    
    </div>
    <div class="carousel-item">
      <div class="text-center">
          <p class="quotes text-info">,,</p>
        <p class="sub-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
        <h5 class="font-weight-bold text-info">Grace Shamal</h5>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
    </div>
</div> 
</div>


<div class="container-fluid footer pt-4">
    <div class="container footer-2 pt-5">
                <div class="col-xm-12 col-md-5 pt-5">
                    <h2 class=" font-weight-bold heading heading-mid mt-5 pt-3" >Choose The Best Credit Card For You</h2>
                    <p class="sub-note mx-auto mt-4">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nulla pharetra diam sit amet nisl suscipit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. </p>
                         <p class=" text-muted sub-note mx-auto mt-4"> Nulla pharetra diam sit amet nisl suscipit.
                         Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Pharetra diam sit amet nisl suscipit.
                          Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit. </p>
                    <button class="btn btn-danger rounded-0 shadow btn-lg mt-4 sub-note"> Read more</button>
                </div>

                    <h2 class="mt-5 pt-3 text-center footheading mx-auto">Know where you stand even before you apply</h2>
                <div class="row  mt-5 pt-5">
                    <div class="col-md-4 mx-auto">
                            <div class="credit-score rounded text-white  shadow">
                                <p class="sub-note font-weight-bold">Get your FREE Credit Score and Credit Report</p>
                                <p class="sub-note mb-0">Pharetra diam sit amet nisl suscipit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.</p>
                            </div>
                    </div>
                    <div style="border-right: 0.01px ridge black;"></div>
                    <div class="col-md-4 mx-auto" >
                            <div class="pre-quality shadow rounded text-white">
                                <p class="sub-note font-weight-bold">Get your FREE Credit Score and Credit Report</p>
                                <p class="sub-note mb-0">Pharetra diam sit amet nisl suscipit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.</p>
                            </div>
                    </div>
                </div>


                <div class="row subscribe">
                    <div class="col-md-6 text-white" id="subscribe">
                        <p class="mb-0">Want to know about out offers first?</p>
                        <h2>Subscribe Our Newsletter</h2>
                        <hr style="color:white; width:280px" class=" line mt-5">
                    </div>

                    <div class="col-md-6  ">
                        <div class="input-group shadow ">
                        <input type="email" class="form-control p-4" placeholder="Your Email Address here">
                        <div class="input-group-append">
                            <button class="btn btn-danger text-white" type="submit">Subscribe</button>
                        </div>
                        </div>
                    </div>
                </div>

                    <div class="col-md-5 col-xm-12 pt-4 main-footer shadow pb-2">
                    <img src="../assets/smartpay/Logo.png" class="brand-logo"/>
                    <p class="sub-note mx-auto mt-3 text-white">Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nulla pharetra diam sit amet nisl suscipit. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris.Nulla pharetra diam sit amet nisl suscipit.</p>    
                </div>


                <div class="row mx-auto text-white footer-link mt-5">
                    <div class="col-md-3 col-6">
                            <p class="font-weight-bolder text-white">Info</p>
                            <ul>
                                <li>Credit cards</li>
                                <li>Banking</li>
                                <li>Insurance</li>
                            </ul>
                    </div>

                    <div class="col-md-3 col-6">
                        <p class="font-weight-bolder text-white">Links</p>
                            <ul>
                                <li>About</li>
                                <li>Compnay</li>
                                <li>Leadership</li>
                            </ul>
                    </div>

                    <div class="col-md-3 col-6">
                        <p class="font-weight-bolder text-white">Support</p>
                            <ul>
                                <li>Loans</li>
                                <li>Shopping</li>
                                <li>Utilities</li>
                            </ul>
                    </div>

                    <div class="col-md-3 col-6">
                        <p class="font-weight-bolder text-white">Products</p>
                            <ul>
                                <li>Invoice-to-Cash</li>
                                <li>Recurring Bills</li>
                                <li>Payment plans</li>
                            </ul>

                    </div>
                </div>

                <p class="text-center pt-5 sub-note text-info footer-note">Copyright &copy; {{date}} All rights reserved. Designed by Ayodeji</p>
                

    </div>
</div>


































    </div>

</template>

<script>
    export default {

        name:'LandingPage',

        data() {
            return {
                date: new Date().getFullYear(), 
            }
        },

        methods: {
            signup(){
                this.$router.push({path:'/app/signup'});
            },

            login(){
                this.$router.push({path:'/app/signin'});
            }
        },
    }
</script>

<style scoped>

.btn{
  outline: none;
  box-shadow: none;
}
    .font-weight-bolder{
        font-size: 20px;
    }
    .subscribe{
        margin-top:170px
    }

    .credit-score{
        background: linear-gradient(269deg, #06b8b8, #69cde6);
        padding: 20px 20px 20px 100px;
        width:350px;
        
    }

        .pre-quality{
        background: linear-gradient(269deg, #3c3580, #7b7dfa);
        padding: 20px 20px 20px 100px;
        width:350px
    }

    .footheading{
        width:500px;
    }

    .footer{
        background-image:url('../assets/smartpay/Bg3.png');
        background-size:cover;
        background-repeat: no-repeat; 
        height:1700px;      
    }

    .quotes{
        color:linear-gradient(269deg, #0b2d4e, #59adff)!important;
        font-size: 70px!important;
        font-weight: 900!important;
    }

    .credit-card-img{
        width:800px;
        margin-left: -80px
    }

    .Iphone-img-2{
        width:800px;
        margin-left: -80px
    }


    .mid-section{
        background-image:url('../assets/smartpay/Bg7.png');
        background-size:cover;
        background-repeat: no-repeat;
        height:1600px;
        padding:120px 0px 0px 0px;
    }


    .protected{
        font-size: 10px;
    }

    .icons{
        width:40px
    }

    .brand-logo{
        width:200px!important;
        height:40px!important
    }
    .nav-item{
        color:white!important;
        font-weight: 100!important;
        margin-bottom: 0px!important;
        margin-left: 20px;
    }

    .navbtn:hover{
        background-color:white!important;
        color: black!important;
    }

    .navbar-light .navbar-toggler-icon {
    background-image: url('../assets/smartpay/navtoggle.png')!important;
    width:35px!important;
    border-color: white!important;
    background-repeat: no-repeat;
    background-size: cover;
    }

    .navbar{
        padding: 7px 0px 7px 0px;
    }

    .item:hover{
        color: white!important;
        background-color: #9C27B0;
    }

    .header{
        background-image:url('../assets/smartpay/Bg6.png')!important;
        background-size: cover;
        background-repeat: no-repeat;
    }

    nav{
        margin-bottom: 120px;
    }

    .hero-tile{
        font-size: 70px;
    }

    .iphone1, .creditcard, .protected{
        animation-name: iphone1;
        animation-duration: 3s;
        animation-iteration-count: unset;
    }

    .getstart{
        width: 200px;
        padding:8px 15px 8px 15px;
        font-size: 18px;
    }

    .note{
        font-size: 14px;
        width: 500px;
    }

    .sub-note{
        font-size:14px;
    }

    .img-icon{
        width:50px; 
        margin-bottom:20px
    }

    .creditcard{
        width:700px;
        height:500px
    }

    .credit-card{
        display:none
    }





/* ********Aminations Starts******* */

    @keyframes iphone1 {
        0%{
            margin-left:200px
        }

        100%{
            margin-left:0px
        }
    }

    @keyframes getStarted {
        0%{
            width: 60px;
        }

        100%{
            width:100px;
        }
    }



/* ********Media Query Starts******* */

     @media (min-width:300px) and (max-width:450px){

         .mid-section{
             height: 1670px;
         }

        #testimonies{
            margin-top: 0px!important;
        }

         .Iphone-img-2{
             width:320px;
             margin-left: -20px!important;
         }

         .heading-mid{
             margin-top: 0px!important;
             padding-top: 0px!important;
             font-size: 28px;
         }

        .protected{
        font-size: 12px;
        margin-left: 0px!important;
        padding:40px 20px 40px 20px!important;
        }

        .protect-row{
            margin-right: 0px;
        }

        .credit-card-img{
            display: none;
        }

        .credit-card{
            display: block;
            width: 290px;
            margin-top: -80px!important;
        }

        .mid-section{
            padding-top: 0px!important;
        }

         .note{
        font-size: 12px;
        width: 280px;
         }

        .brand-logo{
        width:150px!important;
        height:30px!important
        }

        .login{
            margin-left: 0px!important;
            margin-bottom:2px;
        }

        .navbtn:hover{
            padding-left: 5px;
            padding-right:5px;
        }

    .hero-tile{
        font-size: 45px;
        line-height: 45px;
    }
    
    .hero-tile + p{
        margin-bottom: 20px!important;
        font-size: 14px;
    }

    .iphone1{
        display:none;
    }

    nav{
        margin-bottom: 40px;
    }     

    .getstart{
        width: 100px;
        padding:3px 5px 3px 5px!important;
        font-size: 14px;
        margin-bottom: 40px;
    }

    .getstart:hover{
        width:200px;
        height:30px;
        transition: ease-in 1s
    }

    .footheading{
        width:250px;
        font-size: 25px;
    }

    .navbtn{
        text-align: left;
    }

    .protected-heading, .line{
        display: none;
    }

    .protected-row{
        margin-top: 5px!important;
    }

    .footer, .footer-2{
        padding-top:10px!important;
    }

    .pre-quality, .credit-score{
        width:260px;
        padding: 10px 10px 10px 40px;
        margin-bottom: 15px;
    }

    .credit-score{
        margin-top: -60px;
    }
    
    .subscribe{
        margin-top: 40px;
    }
    
    .footer{
        height: 1900px!important ;
    }

    .main-footer{
        margin-top: 30px;
    }

    .footer-note{
        padding-top: 20px!important;
        font-size: 11px;
    }

    .footer-link{
        font-size: 12px;
        padding-top: -30px;
    }

     }

</style>