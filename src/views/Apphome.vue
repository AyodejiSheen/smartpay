<template>
  <div id="home">
    <div class="container-fluid p-3">
      <div class="row mx-auto">
        <div class="col-xl-6 brand-section mx-auto p-3 pr-5">
          <div>
            <img src="../assets/smartpay/iphone1.png" class="iphone" />
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

        <div class="col-xl-6 shadow log-section mx-auto">
          <div class="mx-auto d-block">
            <v-alert border="left" colored-border class="shadow font-weight-bold mb-5 alert text-dark mx-auto d-block"
              color="#9C27B0" elevation="2">Welcome To SmartPay</v-alert>
          </div>
          <div class="mt-5 mb-2 mx-auto">
            <router-link to="/app/signin"><button class="btn d-block mx-auto sign">Sign in </button></router-link>
            <router-link to="/app/signup"><button class="btn d-block mx-auto sign">Sign up</button></router-link>
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

.btn{
  outline: none;
  box-shadow: none;
}


.iphone{
  display: none;
}

.alert{
  text-align: center;
  height: 70px;

}

.log-section{
  padding-top: 40px;
  padding-bottom: 40px;
}

.sign{
  background-color: #9C27B0;
  color: white;
  border: 4px solid white;
  width: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-decoration: none;
}




</style>
