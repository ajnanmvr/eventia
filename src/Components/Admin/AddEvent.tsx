"use client"

import Axios from "@/utils/Axios"
import { setFips } from "crypto"
import { useEffect, useState } from "react"

export default function AddEvent(){

  const categories = [
    "Popular",
    "Education",
    "Society",
    "Culture"
  ]

  const handleSubmit = (e : any)=>{
    e.preventDefault()
    setLoading(true)
    console.log(name , description , date , image , log , lat , place , category)
    Axios.post('/event' , {
      name , description , date  , log , lat , place , category
    }).then((res)=>{
      console.log(res)
      const id = res.data._id
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }

  const [name , setName ] = useState("")
  const [description , setDescription ] = useState("")
  const [date , setDate ] = useState("")
  const [image , setImage ] = useState(null)
  const [log , setLog ] = useState("")
  const [lat , setLat ] = useState("")
  const [place , setPlace] = useState("")
  const [category , setCategory ] = useState("")
  const [loading , setLoading] = useState(false)


  const [user, setUser] = useState<any>();
  useEffect(()=>{
    const lUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
    setUser(lUser)
  })

   return(
    <form
    className="flex justify-center gap-20 pt-10 pb-16"
    onSubmit={handleSubmit}
  >
    <div className="p-3 h-[500px] w-[500px] font-semibold flex flex-col gap-2 overflow-y-auto no-scrollbar">
      <h1 className="text-5xl font-extrabold text-primary -mt-5">Add Product</h1>
     <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          
          }}
          className="rounded-lg border-2 border-black px-3 py-[6px] w-full"
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={description}
          onChange={
            (e)=>{
              setDescription(e.target.value)
            }
          }
          className="rounded-lg border-2 border-black px-3 py-[6px] w-full"
        />
      </label>
      <div className="mb-4">
        <label className="block">Category</label>
        <select
          className="rounded-lg border-2 border-black px-3 py-[6px] w-full"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option hidden>Select Category</option>
          {categories.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex gap-10">
        <label className="flex-1">
          Date
          <div className="flex items-center gap-2">
            
            <input
              type="date"
              name="discountPrice"
              value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}
              className="rounded-lg border-2 border-black px-3 py-[6px] w-full"
            />
          </div>
        </label>
        <label className="flex-1">
          Place
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="price"
              value={place}
              onChange={(e)=>{
                setPlace(e.target.value)
              }}
              className="rounded-lg border-2 border-black px-3 py-[6px] w-full"
            />
          </div>
        </label>
      </div>
      <div className="flex">

          <input
            type="file"
            name="thumbnail"
          className="flex gap-1 items-center rounded-lg border-2 border-black px-3 py-[6px] mr-1 mb-1 flex-1 file:bg-white file:rounded-lg file:text-primary file:border-nprimary  file:px-2 file:py-1 file:mr-2"
          onChange={(e)=>{
            setImage(e.target.files[0])  
          }}
          />
        {loading ? (
          <div 
          className="rounded-lg border-2 border-primary bg-primary text-white px-6 py-[6px] mr-1 mb-1"

          
          >Processing...</div>
        ) : (
          <button type="submit"
          className="rounded-lg border-2 border-primary bg-primary text-white px-6 py-[6px] mr-1 mb-1"
          
          >Submit</button>
        )}
      </div>
      {/* {successMessage && <p className="">{successMessage}</p>}
      {errorMessage && <p className="">{errorMessage}</p>} */}
    </div>
    <div className="h-[500px] w-[500px]">
      {/* {thumbnailPreview ? (
        <label htmlFor="thumbnail">
        <img
          src={thumbnailPreview}
          alt="Thumbnail Preview"
          className="h-full w-full object-cover rounded-lg"
        /></label>
      ) : (
        <label htmlFor="thumbnail">

        <img
          src="/addbg.jpg"
          alt="Thumbnail Preview"
          className="h-full w-full object-cover rounded-lg"
        /></label>
      )} */}

    </div>

  </form>
   )
}