import Axios from 'axios'

function getBanner() {
    let banner = Axios.get("http://myjson.dit.upm.es/api/bins/dohr")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
  return banner
}

export default getBanner