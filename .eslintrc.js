module.exports = {
  env: {
    browser: true, // Indica que el código está destinado a ejecutarse en un navegador.
    es2021: true, // Utiliza las características de ES2021.
  },
  extends: [
    'eslint:recommended', // Usa las reglas recomendadas por ESLint.
    'plugin:react/recommended', // Usa las reglas recomendadas por el plugin de React.
    'plugin:jsx-a11y/recommended', // Usa las reglas recomendadas para accesibilidad en JSX.
    'plugin:react-hooks/recommended', // Usa las reglas recomendadas para hooks de React.
    'plugin:next/recommended', // Usa las reglas recomendadas para Next.js.
    'plugin:prettier/recommended', // Integra Prettier para la formateo de código.
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Habilita el análisis de JSX.
    },
    ecmaVersion: 'latest', // Usa la última versión de ECMAScript.
    sourceType: 'module', // Permite el uso de módulos de import/export.
  },
  plugins: [
    'react', // Incluye el plugin de React para ESLint.
    'jsx-a11y', // Incluye el plugin de accesibilidad para JSX.
    'react-hooks', // Incluye el plugin de hooks para React.
    'next', // Incluye el plugin de Next.js.
    'prettier', // Incluye el plugin de Prettier.
  ],
  rules: {
    'prettier/prettier': [
      'error', // Marca los problemas de Prettier como errores.
      {
        endOfLine: 'auto', // Asegura que los finales de línea sean consistentes con la configuración del sistema.
      },
    ],
    'react/react-in-jsx-scope': 'off', // Desactiva la regla que requiere React en el alcance cuando se usa JSX.
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React para usar.
    },
  },
};
