import axios from "axios";


const instance = axios.create({
    baseURL:'https://www.breakingbadapi.com/api/',
})
export const UserAPI = {
    getUsers() {
        return instance
        .get('characters')
        .then(responce => responce.data)
    },
    getUserById(id) {
      return instance
      .get(`characters/${id}`)
      .then(responce => responce.data)
    },
    getUserByName(name) {
       return instance
       .get(`characters?name=${name}`)
       .then(responce => responce.data)
    }
} 

console.log(UserAPI.getUsers())