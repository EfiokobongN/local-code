import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/home';
import Layout from './components/Layout/layout';

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;