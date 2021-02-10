export const initialState = {   // Initial state of parameters
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    item: null,
    // REMOVE TOKEN AFTER FINISHED DEBUGGING AND CREATING THE PLAYER PAGE
    token: 'BQCi-hEbHQ43Qw8Gk8VgUBhCi99PCUqip8vihjO61duwdAQpCivrfcpJMb-qC0iPD742hei1nvxAUH-EJtKF8teyuNswPrYAjbF7puVXI2dRGBshlbjQF8061Uwk8_1qvEi2aphFiPsg19VQ_IRlgBYYT38'
}

const reducer = (state, action) => {    // Function that take the previous state and an action to return the next state.
    console.log(action)                 // The updated state is dependent on the type of the action, hence the switch.
                                        // This is listening for actions of the user, e.g. user identification upon login
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,                // Keep everything in the previous state but the user value (...state) 
                user: action.user        // The new state now contains { user: action.user, *rest of previous keys* }
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            }
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
        default: 
            return state
    }
}

export default reducer