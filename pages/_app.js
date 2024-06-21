import '../styles/globals.css'; // Importa los estilos globales
import '../styles/style.css'; // Importa estilos adicionales personalizados
import Layout from '../components/layout'; // Importa el componente Layout

// Función principal de la aplicación
function MyApp({ Component, pageProps }) {
  return (
    // Envuelve todos los componentes de la aplicación dentro del Layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp; // Exporta la aplicación
