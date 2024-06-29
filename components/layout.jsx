import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

// Configuración de la fuente Libre Franklin
const libre_franklin = Libre_Franklin({
  subsets: ['latin'], // Subconjunto de caracteres a utilizar
  display: 'swap', // Estrategia de carga de la fuente
  variable: '--font-libre_franklin', // Variable CSS para aplicar la fuente
})

// Configuración de la fuente Chivo
const chivo = Chivo({
  subsets: ['latin'], // Subconjunto de caracteres a utilizar
  display: 'swap', // Estrategia de carga de la fuente
  variable: '--font-chivo', // Variable CSS para aplicar la fuente
})

// Componente de diseño que envuelve a toda la aplicación
export default function Layout({ children }) {
  return (
    // Aplicación de las variables de fuente a la clase del contenedor principal
    <div className={libre_franklin.variable + ' ' + chivo.variable}>
      {children}
    </div>
  )
}
