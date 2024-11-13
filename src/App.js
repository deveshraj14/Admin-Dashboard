import React from 'react'
import { BrowserRouter,Routes as AppRoutes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path='/' element={<Dashboard />} />
       
      </AppRoutes>
    </BrowserRouter>
  );
}

export default App;
