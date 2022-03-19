import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Signup from './Pages/Signup/Signup';
import Wishlist from './Pages/Wishlist/Wishlist';
import Mockman from 'mockman-js';
import User from './Pages/User/User';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="cart" element={<Cart />} />
				<Route path="wishlist" element={<Wishlist />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="user" element={<User />} />
				<Route path="/mock" element={<Mockman />} />
			</Routes>
		</>
	);
}

export default App;
