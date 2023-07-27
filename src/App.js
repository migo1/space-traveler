import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import routes from './components/routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
