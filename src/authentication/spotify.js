// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "e7ab207a6f6548f79b1bd8dd0531ba0a"
const redirectUri = "http://localhost:3000/"
const scopes = [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
    ]
     
export const getTokenFromResponse = () => {
    return window.location.hash     // targets the hash in the localhost browser url, i.e. #access_token...
            .substring(1)           // targets everything from the second character
            .split('&')             // Splits the string wherever '&' appears
            .reduce((initial, item) => {
                // localhost:3000/#access_token=key&name=username
                let parts = item.split('=')  // Splits the string wherever '=' appears
                // gets the first element from initial array, i.e. "access_token", 
                // and decodes the second element of parts which is "key".
                initial[parts[0]] = decodeURIComponent(parts[1])     // decodeURIComponent() decodes a URI string and places each part into an object
                                                                     // {access_token: "key", expires_in: "3600", token_type: "Bearer"}
                return initial
            }, {})
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                        "%20"
                        )}&response_type=token&show_dialog=true`
