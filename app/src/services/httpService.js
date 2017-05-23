import Config from '../../../config'
import Vue from 'vue';

export default class HttpService {

  get (url) {
      return Vue.http.get(Config.apiUrl + url).then(function (results) {
        return results.body;
      });
  }

}