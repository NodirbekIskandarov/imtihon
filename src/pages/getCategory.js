import Axios from 'axios'

function getCategory() {
    let category = Axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
  return category
}

export default getCategory