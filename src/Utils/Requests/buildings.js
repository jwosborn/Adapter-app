import axios from 'axios'

export const getBuildings = () => {
  return axios.get('https://adapter-api.herokuapp.com/api/buildings')
}

export const getBuilding = building => {
  return axios.get(
    `https://adapter-api.herokuapp.com/api/buildings/${building}`,
  )
}

export const getRoom = (room, building) => {
  return axios.get(
    `https://adapter-api.herokuapp.com/api/buildings/${building}/${room}`,
  )
}
