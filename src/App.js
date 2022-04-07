import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Signup from './Pages/Signup/Signup';
import Wishlist from './Pages/Wishlist/Wishlist';
import Mockman from 'mockman-js';
import User from './Pages/User/User';
import { useAuth } from './Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Error404 } from './Pages/Error404/Error404';

function App() {
	const { authState } = useAuth();

	return (
		<>
			<ToastContainer
				theme="colored"
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="cart" element={authState.token ? <Cart /> : <Login />} />
				<Route path="wishlist" element={authState.token ? <Wishlist /> : <Login />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="user" element={<User />} />
				<Route path="/mock" element={<Mockman />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</>
	);
}

export default App;
