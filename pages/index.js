// pages/index.js
import React from 'react';
import Layout from '../components/layout'; // Importa el componente Layout
import Component from '../components/component'; // Importa el componente Component

// Define el componente Home que representa la página principal
const Home = () => {
  return (
    <Layout>
      <h1>Bienvenido a ViSansi S.A de C.V</h1>
      <Component />
    </Layout>
  );
};

export default Home; // Exporta el componente Home como predeterminado
