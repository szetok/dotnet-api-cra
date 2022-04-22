import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from './components/templates/layout';
import { Counter } from './components/organisms/counter';
import { FetchData } from './components/organisms/fetchData';
import './styles/app.css';

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
