import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { GamePage } from './pages/game-page'
import { HomePage } from './pages/home-page'
import { OrderPage } from './pages/order-page'
import { store } from './redux'

export default function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/app/:title' element={<GamePage />} />
						<Route path='/order' element={<OrderPage />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	)
}
