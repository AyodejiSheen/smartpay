<template>
  <div>
    <p class="info  mt-3">{{ infoMsg }}</p>
    <p class="mb-3  mt-1 tag"><b>Enter Credentials to sign-up</b></p>
    <form class="col-12 mx-auto " @submit.prevent="registration">
      <div class="row">
        <div class="col-md-6">
          <input
            type="text"
            name="firstname"
            v-model="input.firstname"
            placeholder="Enter your first name"
            class="form-control mb-3" required
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            name="lastname"
            v-model="input.lastname"
            placeholder="Enter  your last name"
            class="form-control mb-3" required
          />
        </div>
      </div>
      <input
        type="email"
        name="email"
        v-model="input.email"
        placeholder="Enter  your Email Address"
        class="form-control mb-3" required
      />
      <div class="row">
        <div class="col-md-6">
          <input
            type="number"
            name="phone"
            v-model="input.phone"
            placeholder="Enter your phone number"
            class="form-control mb-3" required
          />
        </div>
        <div class="col-md-6">
          <select
            class="form-control mb-3"
            v-model="input.gender"
            name="gender" required
          >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Enter  your Password"
        class="form-control mb-3" required
      />
      <input
        type="password"
        name="password"
        placeholder="Confirm Password"
        class="form-control mb-3"
      />
      <button class="btn-block text-white shadow btn">sign me up</button>
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
          document.querySelector('.info').style.color="red";
        } else {
          this.$store.state.users = JSON.parse(localStorage.AbegUsers);
          this.input.id++;
          this.$store.commit({ type: "regUser", input: this.input });
          this.infoMsg = "Registered successfully! You will be redirect in 5s";
          setTimeout(() => {
            this.closeDel();
            this.$router.push({path:'/app/signin'})
          }, 5000);
        }
      } else {
        this.$store.state.users = [];
        this.input.id++;
        this.$store.commit({ type: "regUser", input: this.input });
        this.infoMsg = "Registered successfully! You will be redirect in 5s";
        setTimeout(() => {
          this.closeDel();
          this.$router.push({path:'/app/signin'})
        }, 5000);
      }
    },

  },
};
</script>




<style scoped>
input,
select {
  height: 40px;
  border-radius: 100px;
  font-size: 14px;
}

button {
  background-color: #9c27b0;
  border-radius: 100px;
  height: 50px;
  font-size: 18px;
}

.tag {
  font-family: cursive;
}

.info {
  font-size: 13px;
  color:green;
}

@media (min-width: 300px) and (max-width: 450px) {
  input,
  select {
    height: 30px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 10px !important;
  }

  button {
    height: 30px;
    border-radius: 20px;
    font-size: 10px;
    margin-top: 10px !important;
  }

  .tag {
    margin: 10px 0px 10px 0px !important;
    font-size: 14px;
    font-weight: 300 !important ;
    font-family: cursive;
  }

  .info {
    font-size: 10px;
  }
}
</style>
