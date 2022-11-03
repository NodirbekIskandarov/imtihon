import Axios from 'axios'

function getKiyim() {
    let kiyim = Axios.get("http://myjson.dit.upm.es/api/bins/itof")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
  return kiyim
}

export default getKiyim