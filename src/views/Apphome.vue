<template>
  <div id="home">
    <div class="container-fluid p-3">
      <div class="row mx-auto">
        <div class="col-md-6 brand-section mx-auto p-3 pr-5">
          <div>
            <img src="../assets/smartpay/iphone1.png" class="iphone"/>
            <!-- <a class="navbar-brand"><img src="../assets/smartpay/Logocolor.png" class="brand-logo mt-5"/></a> -->
            <!-- <div class="row mt-4">
              <div class="col-md-6">
            <p class="note mx-auto shadow p-5">Nulla pharetra diam sit amet nisl suscipit.
                Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Pharetra diam sit amet nisl suscipit.
                Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nulla pharetra diam sit amet nisl suscipit.</p>
              </div>

              <div class="col-md-6">                
            <div class="social mt-5">
              <p class="login-note"> Connect With Our Social media</p>
              <div>
                  <button class="btn-primary btn m-2 social-name">FACEBOOK</button>
                  <button class="btn text-white m-2 twitter social-name ">TWITTER</button>
                  <button class="btn-danger btn m-2 social-name">INSTAGRAM</button>
              </div>
          </div>
              </div>
            </div> -->

          </div>

        </div>

        <div class="col-md-6 shadow log-section mx-auto">
          <v-alert border="left" colored-border class="shadow font-weight-bold mb-5 alert text-dark" color="#9C27B0" elevation="2" >Welcome To SmartPay</v-alert>
          <div class="mb-2">
            <router-link to="/app/signin"><button class="btn btn-primary btn-signin mr-4 ">Sign in</button></router-link>
            <router-link to="/app/signup"><button class="btn btn-primary btn-signup ">Sign up</button></router-link>
          </div>
          

          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHome",

  data() {
    return {
    }
  },





};
</script>

<style scoped>

  #home{
    text-align: center;
  }

.note{
  width:300px;
  font-size: 14px;
}

.iphone{
  width:400px;
  height: 400px
}


    .brand-logo{
        width:350px!important;
        height:80px!important
    }

  .btn-signin, .btn-signup{
    padding:15px 30px 15px 30px;
    width:200px;
    border-radius: 50px;
    font-size: 25px;
  }

  .log-section{
    height :630px;
    padding:20px 50px 160px 50px
  }

  .twitter{
    background-color: #9C27B0;
  }



      @media (min-width:300px) and (max-width:450px) {
        .brand-name{
          font-size: 32px;
        }

.note{
  width:270px;
  font-size: 14px;
}
        .brand-section{
          /* background-image: url('../assets/OLO2ED0.jpg'); */
          padding-right: 16px!important;
        }

        .blob{
          height: 150px;
          margin-bottom:50px;
        }

    .btn-signin, .btn-signup{
    padding:8px 12px 8px 12px;
    width:120px;
    border-radius: 20px;
    font-size: 16px;
    }

    .btn-signin{
      margin-right: 10px!important;
    }

    .log-section{
    height :550px;
    padding:20px 10px 60px 10px
    }

    .social{
      font-size: 12px;
    }

    .alert{
      margin-bottom: 20px!important;
      margin-top: 0px!important;
    }

    .social-name{
      font-size: 10px;
      width:60px;
      padding: 3px 5px 3px 5px;
    }

    .iphone{
  width:270px;
  height: 280px
}


    .brand-logo{
        width:270px!important;
        height:60px!important
    }



    }

  



</style>
