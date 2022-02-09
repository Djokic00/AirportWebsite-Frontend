import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    faculties: [],
    faculty: null,
    flights: [],
    flight: null,
    cargos: [],
    insurances: [],
    cars: [],
    flightInformation: {
      flightDestination: '', departure: '', arrival: '', price: '', airline: '', numberOfSeats: '', typeOfAirplane: ''
    },
    cargoInformation: {
      productName: '', departure: '', pricePerKg: '', hazardous: '', deliveryDestination: ''
    },
    insuranceInformation: {
      nameOfCompany: '', destinationCountry: '', typeOfInsurance: '', premium: '', levelOfCover: ''
    },
    carInformation: {
      carName: '', pricePerDay: '', yearOfProduction: '', fuelConsumption: '', numberOfSeats: '', numberOfCars: ''
    }
  },

  mutations: {
    setToken(state, token) {
      console.log(token);
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setLoggedUserId(state, userId) {
      state.loggedUserId = userId;
    },

    setFlightInformation(state, flight) {
      // state.flightInformation.id = flight.id;
      state.flightInformation.flightDestination = flight.flightDestination;
      state.flightInformation.departure = flight.departure;
      state.flightInformation.arrival = flight.arrival;
      state.flightInformation.price = flight.price;
      state.flightInformation.airline = flight.airline;
      state.flightInformation.numberOfSeats = flight.numberOfSeats;
      state.flightInformation.typeOfAirplane = flight.typeOfAirplane;
    },

    setCargoInformation(state, cargo) {
      state.cargoInformation.id = cargo.id;
      state.cargoInformation.productName = cargo.productName;
      state.cargoInformation.departure = cargo.departure;
      state.cargoInformation.pricePerKg = cargo.pricePerKg;
      state.cargoInformation.hazardous = cargo.hazardous;
      state.cargoInformation.deliveryDestination = cargo.deliveryDestination;
    },

    setInsuranceInformation(state, insurance) {
      state.insuranceInformation.id = insurance.id;
      state.insuranceInformation.nameOfCompany = insurance.nameOfCompany;
      state.insuranceInformation.destinationCountry = insurance.destinationCountry;
      state.insuranceInformation.typeOfInsurance = insurance.typeOfInsurance;
      state.insuranceInformation.premium = insurance.premium;
      state.insuranceInformation.levelOfCover = insurance.levelOfCover;
    },

    setCarInformation(state, car) {
      state.carInformation.id = car.id;
      state.carInformation.carName = car.carName;
      state.carInformation.pricePerDay = car.pricePerDay;
      state.carInformation.yearOfProduction = car.yearOfProduction;
      state.carInformation.fuelConsumption = car.fuelConsumption;
      state.carInformation.numberOfSeats = car.numberOfSeats;
      state.carInformation.numberOfCars = car.numberOfCars;
    },

    setFlights(state, flights) {
      state.flights = flights;
    },

    setCargo(state, cargos) {
      state.cargos = cargos;
    },

    setInsurance(state, insurances) {
      state.insurances = insurances;
    },

    setACar(state, cars) {
      state.cars = cars;
    }
  },

  actions: {
    register({ commit }, obj) {
      console.log(obj)
      fetch('http://localhost:8080/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => {
            console.log(tkn.split(" ")[1]);
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              // console.log(tkn.token)
              commit('setToken', tkn.split(" ")[1])
            }
          });
    },

    login({ commit }, obj) {
      fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => {
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)
              // console.log(tkn.userId)
              commit('setToken', tkn.split(" ")[1]);
              // commit('setLoggedUserId', tkn.userId);
            }
          });
    },

    fetchFlights({ commit }){
      fetch('http://localhost:8082/admin/flight/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setFlights', res));
    },

    fetchCargo({ commit }){
      fetch('http://localhost:8082/admin/cargo/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setCargo', res));
    },

    fetchInsurance({ commit }){
      fetch('http://localhost:8082/admin/insurance/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setInsurance', res));
    },

    fetchACar({ commit }){
      fetch('http://localhost:8082/admin/rentACar/getAll',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setACar', res));
    },


    // // socket_addbook({ commit }, bookToAdd) { //bilo originalno korisceno onda se koristi ovaj ispod
    // //   const book = JSON.parse(bookToAdd);
    // //   // console.log(book)
    // //    commit('addOneBook', bookToAdd);
    // // },
    //
    // socket_updateBook({ commit }, book) {
    //   const bookNew = JSON.parse(book);
    //   console.log("nadajmo se knjiga")
    //   // console.log(bookNew)
    //   commit('setSelectedBook', bookNew);
    // }


  }

})
