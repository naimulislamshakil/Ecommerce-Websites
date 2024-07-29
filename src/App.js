import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
