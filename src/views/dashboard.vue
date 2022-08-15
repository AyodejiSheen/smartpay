<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light shadow sticky-top">
      <a class="navbar-brand"><img src="../assets/smartpay/Logo.png" class="brand-logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto mr-5">
          <li class="nav-item active">
            <button class="nav-link btn text-white" @click="dashboard">Dashboard <span
                class="sr-only">(current)</span></button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn text-white" @click="deposit">Make Deposit</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn text-white" @click="transfer">Make Transfer</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn text-white" @click="withdraw">Withdraw</button>
          </li>
          <li class="nav-item dropdown p-0 btn">
            <button class="nav-link dropdown-toggle btn text-white" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              My Profile
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <button class="dropdown-item btn item" @click="profile">View Profile</button>
              <button class="dropdown-item btn item" @click="transact">Tranc. History</button>
              <button class="dropdown-item btn item" @click="logout">Sign Out</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>


    <router-view></router-view>

  </div>
</template>


<script>

export default {
  name: 'Dashboard',

  data() {
    return {
      authout: JSON.parse(localStorage.getItem("Checking")),



    }
  },

  methods: {

    withdraw() {
      this.$router.push({ path: '/dashboard/makewithdrawal' })
    },

    dashboard() {
      this.$router.push({ path: '/dashboard' })
    },

    deposit() {
      this.$router.push({ path: '/dashboard/makedeposit' })
    },

    transfer() {
      this.$router.push({ path: '/dashboard/maketransfer' })
    },

    logout() {
      this.$router.push({ path: '/app/signin' })
      this.authout = false;
      localStorage.setItem("Checking", JSON.stringify(this.authout));
      console.log(this.authout);
    },

    profile() {
      this.$router.push({ path: '/dashboard/profile' })
    },

    transact() {

      setTimeout(() => {
        this.$router.push({ path: '/dashboard/transactions-history' })
      }, 3000)
      this.$router.push({ path: '/dashboard/loading-transactions' })
    }
  },

}
</script>


<style scoped>
.navbar {
  background-color: #9C27B0 !important;
}

.navbar-nav {
  margin-top: 20px;
}

.nav-item,
.navbar-brand {
  color: white !important
}

.btn:hover {
  background-color: white;
  color: black !important;
  padding-left: 5px;
  padding-right: 5px;
}

.navbar-light .navbar-toggler-icon {
  background-image: url('../assets/smartpay/navtoggle.png') !important;
  width: 35px !important;
  border-color: white !important;
  color: white;
}

.item:hover {
  color: white !important;
  background-color: #9C27B0;
}


.brand-logo {
  width: 200px !important;
  height: 40px !important
}



@media (min-width:300px) and (max-width:450px) {


  .brand-logo {
    width: 150px !important;
    height: 30px !important
  }
}
</style>