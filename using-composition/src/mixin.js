import axios from 'axios';

export default {
  methods: {
    async $api(url, method, data) {
      return (
        await axios({
          method,
          url,
          data
        }).catch((err)=>{
          console.log(err)
        })
      ).data
    }
  }
}
