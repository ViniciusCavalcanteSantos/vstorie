import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { VStories } from './components/VStories.tsx'
import "./main.css"

const media = [
  "https://picsum.photos/1080/1920",
  "https://cdn.pixabay.com/video/2015/09/27/846-140823862_large.mp4",
  {
    url: "https://picsum.photos/seed/picsum/2000/3000",
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)

function Container() {
  const [isPaused, setIsPaused] = useState(true)

  return(
    <div style={{width: "360px", height: "600px"}}>
      <VStories stories={media} loop={true} isPaused={isPaused}/>

      <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "iniciar" : "pausar"}</button>
    </div>
  )
}
