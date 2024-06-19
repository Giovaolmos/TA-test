import express from "express"
import "dotenv/config"
import axios from "axios"


const PORT = process.env.PORT || 3000
const URL_API = process.env.URL_API || "https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json"


export const server = express();
server.use(express.json())

server.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`)
})

server.get("/soyTA", async(req, res) => {
    try {
        const response = await axios(URL_API);
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({error:"Algo salió mal"})
    }
})





