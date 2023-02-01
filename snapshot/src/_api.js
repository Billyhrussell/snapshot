import axios from "axios";

const API_KEY = "a16cdd137312d65767f023fedfb810c1"
// const BASE_URL = "https://www.flickr.com/serices/rest";

const TAG = "ocean"


// const BASE_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${TAG}&safe_search=2&per_page=20&format=json&nojsoncallback=1`
//?method=flickr.photos.search.echo&name=value

// get token with key
//

class FlickrAPI{
    static async getImages(tag) {
      let res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&safe_search=2&per_page=20&format=json&nojsoncallback=1`);
      return res
    }
}

export default FlickrAPI;