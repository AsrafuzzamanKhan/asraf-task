import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AllProducts from './components/Products/AllProducts/AllProducts';

function App() {

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          {/* <Route path={"/allProducts"}>
            <AllProducts></AllProducts>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
