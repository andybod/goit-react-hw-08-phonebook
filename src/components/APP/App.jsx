import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
