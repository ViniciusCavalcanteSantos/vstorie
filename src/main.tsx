import React from 'react'
import ReactDOM from 'react-dom/client'
import { VStories } from './components/VStories.tsx'
import "./main.css"

const media = [
  "https://images.pexels.com/photos/18444576/pexels-photo-18444576/free-photo-of-moda-tendencia-mulher-lado-de-fora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  {
    url: "https://images.pexels.com/photos/19036293/pexels-photo-19036293/free-photo-of-preto-e-branco-p-b-alvorecer-amanhecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPaused: true
  },
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VStories stories={media}/>
  </React.StrictMode>,
)
