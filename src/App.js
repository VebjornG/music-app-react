import React, { useState, useEffect } from "react"
import Login from "./components/login"
import { getTokenFromResponse} from "./components/spotify"
import SpotifyWebApi from "spotify-web-api-js"

const spotifyAPI = new SpotifyWebApi()     // Used to communicate with the Spotify Web API

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''              // Strips URL of the access token
    const _token = hash.access_token       // _token to avoid name issues with state

    _token ? 
      setToken(_token)
      && spotifyAPI.setAccessToken(_token) // Handing the token to the spotify service
      && spotifyAPI.getMe().then(user => {
        console.log(user)
      })
      : setToken(null)

  }, [])


  return (
    <>
      {token ? <h1>This is where the player will be</h1> : <Login />}
    </>
  );
}

export default App;
