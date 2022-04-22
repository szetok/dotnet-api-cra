import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './components/templates/Layout';
import { Counter } from './components/organisms/Counter';
import { FetchData } from './components/organisms/FetchData';
import './styles/App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/fetch-data' element={<FetchData />} />
      </Routes>
    </Layout>
  );
}

export default App;
