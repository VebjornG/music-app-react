import React, { useState, useEffect } from "react"
import Login from "./components/login/login"
import Player from "./components/player/player"
import { getTokenFromResponse} from "./components/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import { useStateProviderValue } from "./context/stateprovider"

const spotifyAPI = new SpotifyWebApi()     // Used to communicate with the Spotify Web API

function App() {
  //const [token, setToken] = useState('')
  const [{ user, token }, dispatch] = useStateProviderValue()   // dispatch is a function used to update the state from 
                                                                // the provider by sending actions to the reducer which 
                                                                // listens for said actions. We can grab e.g. user from 
                                                                // the StateProvider by writing { user }. 
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''              // Strips URL of the access token
    const _token = hash.access_token       // _token to avoid name issues with state

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotifyAPI.setAccessToken(_token)    // Handing the token to the spotify service
      spotifyAPI.getMe().then(user => {    // Gets user by the getMe() method
        
        
        dispatch({                         // The dispatch function sends data to the StateProvider (in order to update the state). 
          type: 'SET_USER',                // Sends 'SET_USER' to the reducer which handles that action. After sending
          user: user                       // it to the layer we pull it back by writing 'user: user' in the case of getting the user.
        })                                 // The same method is used to update and pull out songs and playlists etc.
      })
    }

  }, [])

  console.log(user)
  console.log(token)

  return (
    <>
      {token ? <Player spotifyAPI={spotifyAPI}/> : <Login />}
    </>
  );
}

export default App;
