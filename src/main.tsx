import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { VStories } from './components/VStories.tsx'
import "./main.css"

const media = [
  "https://images.pexels.com/photos/18444576/pexels-photo-18444576/free-photo-of-moda-tendencia-mulher-lado-de-fora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://cdn.pixabay.com/video/2015/09/27/846-140823862_large.mp4",
  {
    url: "https://images.pexels.com/photos/19036293/pexels-photo-19036293/free-photo-of-preto-e-branco-p-b-alvorecer-amanhecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)

function Container() {
  const [isPaused, setIsPaused] = useState(true)

  return(
    <div style={{height: "600px"}}>
      <VStories stories={media} loop={true} isPaused={isPaused}/>

      <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "iniciar" : "pausar"}</button>
    </div>
  )
}
