import axios from 'axios';
// import t from 'typy';

export const api = axios.create(
    {
        baseURL: 'https://api.nytimes.com/svc/topstories/v2',
        headers: {
            "Accept": "application/json"
        } 
    }
)

export const  homeRequest  = async(setData) => {
 
    await api.get(`/home.json?api-key=Fiu6ItwlHRUrRMFCTWeAAn8y0xnv99jt`) 
            .then(response => setData(response.data.results))
            .catch(error => console.log(error))
    
        
}


// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Fiu6ItwlHRUrRMFCTWeAAn8y0xnv99jt
// https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Fiu6ItwlHRUrRMFCTWeAAn8y0xnv99jt