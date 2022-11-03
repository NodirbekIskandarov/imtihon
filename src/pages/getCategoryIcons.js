import Axios from 'axios'

function getCategoryIcons() {
    let categoryIcons = Axios.get("http://myjson.dit.upm.es/api/bins/i6j3")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
  return categoryIcons
}

export default getCategoryIcons