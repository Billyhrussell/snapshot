import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;


class FlickrAPI{
    static async getImages(tag) {
      let res = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&safe_search=2&per_page=20&format=json&nojsoncallback=1`);
      return res
    }
}

export default FlickrAPI;