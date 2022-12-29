import {createContext, useState, useEffect} from "react"
import jwt_decode from "jwt-decode"

const AuthContext = createContext()
export default AuthContext

export function AuthProvider({children}) {
  // let [authTokens, setAuthTokens] = useState(localStorage.getItem("authToken"))
  // let [userAccessToken, setUserAccessToken] = useState(() => localStorage.getItem("authToken") ? jwt_decode(localStorage.getItem("authToken")) : null)
  let [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"))
  let [accessToken, setAccessToken] = useState()
  let [loading, setLoading] = useState(true)
  // let [username, setUsername] = useState('') 
  let username = '1'

  const loginUser = async (e) => {
    e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/auth_api/token',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({username: e.target.username.value, password: e.target.password.value})
    })
    // username = e.target.username.value

    let newAuthTokens = await response.json()
    if (response.status === 200) {
      // setAuthTokens(newAuthTokens)
      // setUserAccessToken(newAuthTokens.access)
      setRefreshToken(newAuthTokens.refresh)
      localStorage.setItem("refreshToken", newAuthTokens.refresh)
      setAccessToken(newAuthTokens.access)
      // localStorage.setItem("authToken", JSON.stringify(newAuthTokens))
    }
    if(loading){
      setLoading(false)
    }
  }

  let updateToken = async () => {
    if (!refreshToken) {
      return
    }
    let response = await fetch('http://127.0.0.1:8000/auth_api/refresh',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({refresh: authTokens?.refresh})
        body: JSON.stringify({refresh: refreshToken})
    })

    let newAuthTokens = await response.json()
    if (response.status === 200) {
      // setAuthTokens(newAuthTokens)
      // setUserAccessToken(newAuthTokens.access)
      // setRefreshToken(newAuthTokens.refresh)
      setAccessToken(newAuthTokens.access)
      // localStorage.setItem("authToken", JSON.stringify(newAuthTokens))
    } else {
      logoutUser()
    }
  }

  const logoutUser = () => {
    // setAuthTokens(null)
    // setUserAccessToken(null)
    setRefreshToken(null)
    setAccessToken(null)
    localStorage.removeItem('refreshToken')
    // localStorage.removeItem('accessToken')
  }

  useEffect(()=> {
    if(loading){
      updateToken()
    }
    let updateInteval = 60000 * 4
    let interval =  setInterval(()=> {
      if(refreshToken){
        updateToken()
      }
    }, updateInteval)
    return () => clearInterval(interval)
  }, [refreshToken, loading])

  let contextData = {
    username: username,
    // user: userAccessToken,
    // authTokens: authTokens,
    accessToken: accessToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }
  return (
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  )
}