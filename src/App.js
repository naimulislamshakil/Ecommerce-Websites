import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import { Toaster } from 'react-hot-toast';
import Layout from './Components/Layout';
import RequierdAuth from './Components/RequierdAuth';
import UnAuthorized from './Components/UnAuthorized';
import PersistentLogin from './Components/PersistentLogin';
import Dashboard from './Components/DashBoard/index.jsx';
import MyProfile from './Components/DashBoard/MyProfile.jsx';
import MyOrder from './Components/DashBoard/MyOrder.jsx';
import MyWishlist from './Components/DashBoard/MyWishlist.jsx';
import Settings from './Components/DashBoard/Settings.jsx';
import Help from './Components/DashBoard/Help.jsx';
import AddressBook from './Components/DashBoard/AddressBook.jsx';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="unauthorized" element={<UnAuthorized />} />

					{/* Protected Route */}
					<Route element={<PersistentLogin />}>
						<Route element={<RequierdAuth allowedRole={['user']} />}>
							<Route path="/" element={<Dashboard />}>
								<Route path="my_profile" element={<MyProfile />} />
								<Route path="address_book" element={<AddressBook />} />
								<Route path="my_order" element={<MyOrder />} />
								<Route path="my_wishlist" element={<MyWishlist />} />
								<Route path="settings" element={<Settings />} />
								<Route path="help" element={<Help />} />
							</Route>
						</Route>
					</Route>
				</Route>
			</Routes>
			<Footer />
			<Toaster />
		</div>
	);
}

export default App;
