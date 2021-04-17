import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer></HookCakeContainer>
        <CakeContainer></CakeContainer>
      </div>
    </Provider>  
  );
}

export default App;
