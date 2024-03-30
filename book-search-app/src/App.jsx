import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context'; // Import the AppProvider component
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const App = () => {
  return (
    <AppProvider> {/* Wrap the entire application with AppProvider */}
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </AppProvider>
  );
};

export default App; // Exporting the App component as default

ReactDOM.render(<App />, document.getElementById('root'));
