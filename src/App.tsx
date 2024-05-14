import { FC, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import ListingPage from './pages/ListingPage'
import ProfilePage from './pages/ProfilePage'
import { LoadingIndicator } from './components'
import NotFoundPage from './pages/NotFoundPage'

const App: FC = () => (
  <div className='container mx-auto px-4'>
    <Router>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path='/' element={<ListingPage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
)

export default App
