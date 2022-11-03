import Axios from 'axios'

function getAksessuar() {
    let aksessuar = Axios.get("http://myjson.dit.upm.es/api/bins/8jb3")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
  return aksessuar
}

export default getAksessuar