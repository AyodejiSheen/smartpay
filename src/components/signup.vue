<template>
  <div>
    <p class="info text-center mt-3">{{ infoMsg }}</p>
    <p class="mb-4  text-center"> <b>Enter Credentials to sign-in</b></p>
    <form class="col-12 mx-auto " @submit.prevent="registration">
      <div class="row">
        <div class="col-md-6">
          <input type="text" name="firstname" v-model="input.firstname" placeholder="Enter your first name"
            class="form-control mb-3" required />
        </div>
        <div class="col-md-6">
          <input type="text" name="lastname" v-model="input.lastname" placeholder="Enter  your last name"
            class="form-control mb-3" required />
        </div>
      </div>
      <input type="email" name="email" v-model="input.email" placeholder="Enter  your Email Address"
        class="form-control mb-3" required />
      <div class="row">
        <div class="col-md-6">
          <input type="number" name="phone" v-model="input.phone" placeholder="Enter your phone number"
            class="form-control mb-3" required />
        </div>
        <div class="col-md-6">
          <select class="form-control mb-3" v-model="input.gender" name="gender" required>
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <input type="password" name="password" v-model="input.password" placeholder="Enter  your Password"
        class="form-control mb-3" required />
      <input type="password" name="password" placeholder="Confirm Password" class="form-control mb-3" />
      <button class="btn-block text-white shadow btn sign-up">sign me up </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",

  data() {
    return {
      input: this.$store.state.userdetails,
      user_id: 0,
      infoMsg: "",
    };
  },

  methods: {
    closeDel() {
      this.infoMsg = "";
      this.input.firstname = "";
      this.input.lastname = "";
      this.input.email = "";
      this.input.phone = "";
      this.input.gender = "";
      this.input.password = "";
    },


    registration() {
      if (localStorage.getItem("AbegUsers") != null) {
        let allusers = JSON.parse(localStorage.AbegUsers);
        let emailverify = allusers.findIndex(
          (user) => user.email == this.input.email
        );
        console.log(emailverify);
        if (emailverify >= 0) {
          this.infoMsg = "Email Address has already been used!";
          document.querySelector('.info').style.color = "red";
        } else {
          this.$store.state.users = JSON.parse(localStorage.AbegUsers);
          this.input.id++;
          this.$store.commit({ type: "regUser", input: this.input });
          this.infoMsg = "Registered successfully! You will be redirect in 5s";
          setTimeout(() => {
            this.closeDel();
            this.$router.push({ path: '/app/signin' })
          }, 5000);
        }
      } else {
        this.$store.state.users = [];
        this.input.id++;
        this.$store.commit({ type: "regUser", input: this.input });
        this.infoMsg = "Registered successfully! You will be redirect in 5s";
        setTimeout(() => {
          this.closeDel();
          this.$router.push({ path: '/app/signin' })
        }, 5000);
      }
    },

  },
};
</script>




<style scoped>

.btn, .form-control{
  outline: none;
  box-shadow: none;
}

.sign-up{
    background-color: #9C27B0;
}

input, select{
    height: 40px;
    font-size: 13px;
}


.info{
    font-size: 12px;
}

</style>
