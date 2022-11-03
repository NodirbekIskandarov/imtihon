import React from 'react'
import './style.css'

function Filter(props) {
    function searchFun(data) {
      let nike = props.data1
      let clothes = props.data2
      let akses = props.data3
          let newFilteredNike = nike.filter(item => {
              return item.name.toLowerCase().includes(data.toLowerCase())
          })
          let newFilteredClothes = clothes.filter(item => {
            return item.name.toLowerCase().includes(data.toLowerCase())
          })
          let newFilteredAkses = akses.filter(item => {
            return item.name.toLowerCase().includes(data.toLowerCase())
          })
          props.setKiyim(newFilteredClothes)
          props.setKrasovka(newFilteredNike)
          props.setAksessuar(newFilteredAkses)
    }
  return (
    <div>
        <input type="search"  placeholder='Search' onInput={(e) => searchFun(e.target.value)} className="form-control filter"/>
    </div>
  )
}

export default Filter