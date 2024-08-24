import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Loader from './components/loader/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'number-brm'
import store from './context/index.js'
import './index.css'
const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>,
)
