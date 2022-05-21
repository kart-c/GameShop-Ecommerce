import { Route, Routes } from 'react-router-dom';
import Mockman from 'mockman-js';
import { useAuth } from './Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequiresAuth } from './Components';
import {
	Home,
	Products,
	Cart,
	Wishlist,
	Login,
	Signup,
	User,
	Error404,
	SingleProduct,
} from './Pages';
import './App.css';

function App() {
	const { authState } = useAuth();

	return (
		<>
			<ToastContainer
				theme="colored"
				position="bottom-right"
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
				<Route path="/products" element={<Products />} />
				<Route
					path="/cart"
					element={
						<RequiresAuth>
							<Cart />
						</RequiresAuth>
					}
				/>
				<Route
					path="/wishlist"
					element={
						<RequiresAuth>
							<Wishlist />
						</RequiresAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/user"
					element={
						<RequiresAuth>
							<User />
						</RequiresAuth>
					}
				/>
				<Route path="/mock" element={<Mockman />} />
				<Route path="*" element={<Error404 />} />
				<Route path="/products/:_id" element={<SingleProduct />} />
			</Routes>
		</>
	);
}

export default App;
