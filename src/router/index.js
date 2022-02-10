import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Flight from '../views/Flight.vue'
import Cargo from '../views/Cargo.vue'
import Insurance from '../views/Insurance.vue'
import CargoReservation from "@/views/CargoReservation.vue";
import RentACar from "@/views/RentACar";
import FlightReservation from "@/views/FlightReservation";
import InsuranceReservation from "@/views/InsuranceReservation";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/flight',
    name: 'Flight',
    component: Flight
  },
  {
    path: '/cargo',
    name: 'Cargo',
    component: Cargo
  },
  {
    path: '/insurance',
    name: 'Insurance',
    component: Insurance
  },
  {
    path: '/rentACar',
    name: 'RentACar',
    component: RentACar
  },
  {
    path: '/flightReservation',
    name: 'FlightReservation',
    component: FlightReservation,
    props: true
  },
  {
    path: '/cargoReservation',
    name: 'CargoReservation',
    component: CargoReservation,
    props: true
  },
  {
    path: '/insuranceReservation',
    name: 'InsuranceReservation',
    component: InsuranceReservation,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


