import Axios from 'axios'

function getKrasovka() {
    let krasovka = Axios.get("http://myjson.dit.upm.es/api/bins/e3xb")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
  return krasovka
}

export default getKrasovka