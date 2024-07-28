import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/cart';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Shop />} />
				<Route path="/mens" element={<ShopCategory category="mens" />} />
				<Route path="/womens" element={<ShopCategory category="womens" />} />
				<Route path="/kids" element={<ShopCategory category="kids" />} />
				<Route path="/product" element={<Product />}>
					<Route path=":productId" element={<Product />} />
				</Route>
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/singup" element={<Singup />} />
			</Routes>
		</div>
	);
}

export default App;
