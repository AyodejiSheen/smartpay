import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/signin.vue'
import Signup from '../components/signup.vue'
import AppHome from '../views/Apphome.vue'
import Dashboard from '../views/dashboard.vue'
import DashHome from '../components/dashhome.vue'
import MakeDeposit from '../components/makedeposit.vue'
import MakeTransfer from '../components/maketransfer.vue'
import MakeWithdrawal from '../components/makewithdrawal.vue'
import Profile from '../components/profile.vue'
import Transaction from '../components/transaction.vue'
import Loader from '../components/loader.vue'
import Loader2 from '../components/loader2.vue'
import DepositTrans from '../components/deposittrans.vue'
import Withdrawtrans from '../components/withdrawtrans.vue'
import Transfertrans from '../components/Transfertrans.vue'
import LandingPage from '../views/landing.vue'
import store from '../store'

Vue.use(VueRouter)


const AuthKey = JSON.parse(localStorage.getItem("Checking"));

const routes = [
 

  {
    path: '/',
    component: LandingPage,
  },

  {
    path: '/app',
    component: AppHome,
    children:[
      {path:'', component:Signin}, //to make it a default route
      {path:'signin', component:Signin},
      {path:'signup', component:Signup},
      {path:'/loading', component:Loader}
    ]
  },

  {
    path:'/dashboard',
    component:Dashboard,
    children:[
      {path:'', component:DashHome},
      {path:'makedeposit', component:MakeDeposit},
      {path:'maketransfer', component:MakeTransfer},
      {path:'makewithdrawal', component:MakeWithdrawal},
      {path:'profile', component:Profile},
      {path:'transactions-history', component:Transaction, 
    children:[
      {path:'', component:DepositTrans},
      {path:'withdraw', component:Withdrawtrans},
      {path:'transfer', component:Transfertrans}
    ]},
      {path:'loading-transactions', component:Loader2}
    ],
    // beforeEnter: (to, from, next) => {
    //   if (AuthKey == true){
    //       next()
    //   }else{
    //     next('/')
    //   }
    // }
  },


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
