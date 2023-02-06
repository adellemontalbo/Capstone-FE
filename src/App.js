import { Container } from 'react-bootstrap';
import {Routes, Route,BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import LoginScreen from './screens/LoginScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
