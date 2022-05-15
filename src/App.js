import { Route, Routes } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/new-meetup'} element={<NewMeetupsPage />} />
        <Route path={'/favourites'} element={<FavouritesPage />} />
        <Route path={'/'} element={<AllMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
