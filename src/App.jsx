import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { Home, Monitor, Dashboard, Settings } from './pages';
    import { Toaster } from 'sonner';
    import { Sidebar } from './components/Sidebar';
    
    function App() {
      return (
        <Router>
          <Toaster />
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/monitor" element={<Monitor />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </Router>
      );
    }
    
    export default App;
