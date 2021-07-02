import axios from 'axios';

export default {
  methods: {
    async $callAPI(url, method, data) {
      return (
        await axios({
          method,
          url,
          data
        }).catch((err)=>{
          console.log(err);
        })
      ).data
    }
  }
}
