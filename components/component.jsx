import Link from "next/link"

// Componente principal de la aplicación
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      {/* Encabezado fijo con enlaces de navegación */}
      <header className="px-4 lg:px-6 h-20 flex items-center bg-gray-900 text-gray-50 fixed top-0 left-0 right-0 z-50">
        <Link href="#head" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Visansi S.A. de C.V.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Servicios
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Nosotros
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 pt-14">
        {/* Sección del encabezado */}
        <section id="head" className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-900 text-gray-50">
          <div className="container mx-auto px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/logo.png" // Asegúrate de que la ruta del logo sea correcta
                  alt="Logo de ViSansi"
                  className="mx-auto w-full max-w-lg object-cover"
                />
                <p className="text-gray-300 md:text-xl dark:text-gray-400 mt-7 mb-10 mx-0 text-center">
                  Expertos en construcción de confianza que entregan proyectos de calidad.
                </p>
              </div>
              <img
                src="/encab.jpg"
                alt="Encabezado img"
                className="mx-auto w-full max-w-md rounded-xl object-cover mb-10"
              />
            </div>
          </div>
        </section>

        {/* Sección de servicios */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros servicios de construcción</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ViSansi S.A. de C.V. ofrece una amplia gama de servicios de construcción para satisfacer sus necesidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Construcción residencial</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nos especializamos en la construcción de propiedades residenciales de alta calidad, desde viviendas unifamiliares hasta desarrollos de unidades múltiples.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Construcción Comercial</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nuestra experiencia se extiende a proyectos comerciales, incluidos edificios de oficinas, espacios comerciales e instalaciones industriales.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Proyectos de infraestructura</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Llevamos a cabo proyectos de infraestructura a gran escala, como carreteras, puentes y servicios públicos, para apoyar el desarrollo comunitario.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Renovación y Remodelación</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nuestro equipo puede transformar estructuras existentes, ya sean residenciales o comerciales, para satisfacer sus necesidades cambiantes.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Gestión de proyectos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Brindamos servicios integrales de gestión de proyectos, garantizando que su proyecto de construcción se complete a tiempo y dentro del presupuesto.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Construcción sostenible</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ViSansi está comprometida con prácticas de construcción sostenibles, minimizando el impacto ambiental y promoviendo la eficiencia energética.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección acerca de nosotros */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acerca de ViSansi S.A. de C.V.</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ViSansi S.A. de C.V. es una empresa de nueva creación dedicada a aportar soluciones innovadoras al mundo de la construcción y los servicios. Estamos comprometidos a entregar proyectos de alta calidad que superen las expectativas de nuestros clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/about.jpg"
                alt="Nosotros img"
                className="mx-auto w-full max-w-md aspect-video rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Nuestra misión</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ser el socio confiable de nuestros clientes, brindando servicios de construcción excepcionales que mejoren las comunidades a las que servimos.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Nuestro equipo</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nuestro equipo de profesionales experimentados, incluidos ingenieros, gerentes de proyectos y comerciantes calificados, están dedicados a garantizar el éxito de cada proyecto.
                  </p>
                </div>
                <div className="grid gap-1">
                  <p className="text-gray-500 dark:text-gray-400">
                    ViSansi S.A de C.V. fue fundada en el año 2024 con el objetivo de convertirse en una empresa constructora líder en la región. Desde su inicio a la fecha, hemos completado con éxito numerosos proyectos y hemos dejado una huella significativa en la industria de la construcción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de contacto */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contacto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Estamos aquí para ayudarte. Ponte en contacto con nosotros para obtener más información sobre nuestros servicios y cómo podemos ayudarte con tu próximo proyecto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/*<img
                src="/contacto.jpg"
                alt="Contacto img"
                className="mx-auto w-full max-w-md aspect-video rounded-xl object-cover"
              />*/}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Oficina Central</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Calle Falsa 123, Colonia Inventada, Ciudad, País.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Teléfono</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    +52 123 456 7890
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Correo Electrónico</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    info@visansi.com
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Redes Sociales</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      <FacebookIcon className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      <TwitterIcon className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      <InstagramIcon className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      prefetch={false}
                    >
                      <LinkedinIcon className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="mt-auto w-full bg-gray-900 py-6 text-center text-sm text-gray-500 dark:bg-gray-800">
        <p>
          &copy; 2024 ViSansi S.A. de C.V. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}

// Componente del ícono de montaña
function MountainIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2a1 1 0 01.894.553l7 14A1 1 0 0119 18H5a1 1 0 01-.894-1.447l7-14A1 1 0 0112 2zm0 3.618L7.763 16h8.474L12 5.618z"
        clipRule="evenodd"
      />
    </svg>
  )
}

        
function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}