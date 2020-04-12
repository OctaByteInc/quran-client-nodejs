const fetch = require("isomorphic-unfetch");


const baseURL = "http://34.71.56.199/v1";

class Fetcher {
    static async get(url){
        // const res = fetch(baseURL+url).then(r => {
        //     return r.json();
        // }).then(r => {
        //     console.log(r)
        // });

        const response = await fetch(baseURL+url);
        return await response.json();
    }    
}

module.exports = Fetcher;