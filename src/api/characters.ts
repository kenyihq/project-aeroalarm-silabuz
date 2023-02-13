import { instance } from "./base.api";

const endpoint = "character";

export const characters = {
    getAll: function(){
        return instance.get(endpoint, {params:{
            
                "adults": 2,
                "origin": "LIM",
                "destination": "MIA",
                "departureDate": "2023-03-01"
            
        }})

    }
    

}