"use client"
import Image from "next/image";
import { useState, FormEvent } from "react";
import {useRouter} from 'next/navigation'
export default function Home() {
  const [inputVal, setInputVal] = useState("")
  const {push} = useRouter()
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    push(`/prediction/${inputVal}`)

  }
  return (
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your name..." value={inputVal} onChange={(e)=>setInputVal(e.target.value)} className="text-black"/>
        <button type='submit'>Predict Data</button>
      </form>
    </div>
  );
}
