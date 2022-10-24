import axios from "axios"


export default axios.create({
    baseUrl:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID bIumxxy7xyFAoWxpZMeSLMMkvXYgQtC6lWhF1SNMnVU"
    }
})