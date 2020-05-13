import axios from 'axios'
import App from 'next/app'

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://47.100.136.150'
}

export default App