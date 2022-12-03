import { Provider } from 'react-redux'
import { Navbar } from './components'
import { Home } from './pages'

import './App.css'
import { store } from './redux'
import { LayoutContainer } from './styled-component'

function App() {


  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  )
}

export default App
