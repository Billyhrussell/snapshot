import axios from "axios";

const API_KEY = ""
// const BASE_URL = "https://www.flickr.com/serices/rest";

const TAG = "ocean"


const BASE_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${TAG}&safe_search=2`
//?method=flickr.photos.search.echo&name=value

// get token with key
//

class FlickrAPI{

  static token = "";

  static async request()
}