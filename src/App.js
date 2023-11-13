import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/MainRouter';
import store from './Store';
function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<MainRouter />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
