import Axios from 'axios'

export const axiosUser = Axios.create({
  withCredentials: true,
  baseURL: 'https://tahadi-testing.herokuapp.com/Utilisateur',
})

export const axiosPlace = Axios.create({
  withCredentials: true,
  baseURL: 'https://tahadi-testing.herokuapp.com/Utilisateur/PlaceToGo',
})
