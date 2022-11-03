import React, { useEffect, useState } from 'react'
import getAksessuar from '../pages/getAksessuar'
import getCategory from '../pages/getCategory'
import getCategoryIcons from '../pages/getCategoryIcons'
import getKiyim from '../pages/getKiyim'
import getKrasovka from '../pages/getKrasovka'
import Filter from '../pages/Filter.js'
import './Home.css'
import getBanner from '../pages/getBanner'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    const [krasovka, setKrasovka] = useState([])
    const [krasovka2, setKrasovka2] = useState([])
    const [kiyim, setKiyim] = useState([])
    const [kiyim2, setKiyim2] = useState([])
    const [aksessuar, setAksessuar] = useState([])
    const [aksessuar2, setAksessuar2] = useState([])
    const [category, setCategory] = useState([])
    const [categoryIcons, setCategoryIcons] = useState([])
    const [banner, setBanner] = useState([])
    useEffect(() => {
        getKrasovka().then(json => {
            setKrasovka(json)
            setKrasovka2(json)
        })
    }, [])
    useEffect(() => {
        getKiyim().then(json => {
            setKiyim(json)
            setKiyim2(json)
        })
    }, [])
    useEffect(() => {
        getAksessuar().then(json => {
            setAksessuar(json)
            setAksessuar2(json)
        })
    }, [])
    useEffect(() => {
        getCategory().then(json => {
            setCategory(json)
        })
    }, [])

    useEffect(() => {
        getCategoryIcons().then(json => {
            setCategoryIcons(json)
            // console.log(json)
        })
    }, [])
    useEffect(() => {
        getBanner().then(json => {
            setBanner(json)
        })
    }, [])
    let array={
        krasovka: krasovka,
        kiyim: kiyim,
        aksessuar: aksessuar
    }
    return (
    <div className='container'>
        <div className='row'>
            <Filter className="filter" data1={krasovka} data2={kiyim} data3={aksessuar} setKrasovka={(value) => setKrasovka2(value)} setKiyim={(value) => setKiyim2(value)} setAksessuar={(value) => setAksessuar2(value)}/>
            {
                category.length > 0 && category.map((item, index) => {
                    return (
                        <div key={index} className='col-2 category'>
                            <div className="card box">
                                <img src={item.img_src} alt="" />
                            </div>
                        </div>
                    )
                })
            }
            <Carousel>
                {
                    banner.length > 0 && banner.map((item, index) => {
                        return (
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={item.img_src}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                }   
            </Carousel>
            

            <h2>Categories</h2>
            {
                categoryIcons.length > 0 && categoryIcons.map((item, index) => {
                    return (
                        <div key={index} className="col-4">
                            <div className="card">
                                <div className='categoryIcons'>
                                    <img src={item.img_src} alt="iconka chiqishi kk edi" />
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <h2>Krasovka</h2>

            {
                krasovka2.length > 0 && krasovka2.map((item, index) => {
                    return (
                        <div key={index} className='col-2'>
                            <div className="card">
                                <img src={item.img_src} alt="krasovkani rasmi chiqishi kk edi" />
                                <p>10,55 $</p>
                                <h3>{item.name}</h3>
                            </div>
                            <button>Buy</button>
                        </div>
                    )
                })
            }

            <h2>Kiyimlar</h2>

            {
                kiyim2.length > 0 && kiyim2.map((item, index) => {
                    return (
                        <div key={index} className='col-2'>
                            <div className="card">
                                <img src={item.img_src} alt="kiyimni rasmi chiqishi kk edi" />
                                <p>10,55 $</p>
                                <h3>{item.name}</h3>
                            </div>
                            <button>Buy</button>
                        </div>
                    )
                })
            }
            <h2>Aksessuarlar</h2>

            {
                aksessuar2.length > 0 && aksessuar2.map((item, index) => {
                    return (
                        <div key={index} className='col-2'>
                            <div className="card">
                                <img src={item.img_src} alt="kiyimni rasmi chiqishi kk edi" />
                                <p>10,55 $</p>
                                <h3>{item.name}</h3>
                            </div>
                            <button>Buy</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home