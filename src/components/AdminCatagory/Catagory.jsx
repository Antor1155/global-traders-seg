import SingleCatagory from '../AdminSingleCatagory/SingleCatagory.jsx'
import axiosInstance from '../../utilities/axiosInstance'

import React, { useEffect, useState } from 'react'




const AllCatagories = () => {
  const [allCatagories, setAllCatagories] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(()=>{
    axiosInstance.get("catagory").then(result => setAllCatagories(result.data))
  }, [, update])

  console.log(allCatagories)
  return (
    <div>
      {allCatagories.map(catagory => {
        return <SingleCatagory  key={catagory._id} catagory={catagory} setUpdate={setUpdate}></SingleCatagory>
      })}

    </div>
  )
}

export default AllCatagories