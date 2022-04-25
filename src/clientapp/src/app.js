import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Counter } from "./pages/counter";
import { FetchData } from "./pages/fetchData";
import "./app.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/fetch-data" element={<FetchData />} />
      </Routes>
    </Layout>
  );
}
