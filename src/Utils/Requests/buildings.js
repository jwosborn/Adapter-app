import axios from 'axios'

export const getBuildings = () => {
  return axios.get('https://adapter-api.herokuapp.com/api/buildings')
}
