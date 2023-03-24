import axios from 'axios'

export const saveNewUser = (user) => {
    try {
        return async function() {
            const newUser = await axios.post(`http://localhost:3001/user`, user)
            return newUser
        }
    } catch (error) {
        console.log(error);
    }
}
