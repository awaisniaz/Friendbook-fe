import Topbar from './component/topbar/topbar'
import './App.scss'
import MainContainer from './component/main-part/index';
import { useState } from 'react/cjs/react.development';
import LoginScreen from './component/login-screen/index'
function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      { login ? <LoginScreen />
        : <>
          <Topbar />
          <MainContainer />
        </>
      }
    </div>
  );
}

export default App;
