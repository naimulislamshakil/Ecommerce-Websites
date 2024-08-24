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

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="unauthorized" element={<UnAuthorized />} />

					{/* Protected Route */}
					<Route element={<RequierdAuth allowedRole={['user']} />}>
						<Route path="/" element={<Home />} />
					</Route>
				</Route>
			</Routes>
			<Footer />
			<Toaster />
		</div>
	);
}

export default App;
