import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, CreditCard, Star, Users, Home } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-rose-500">BolBnB</div>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/host" className="text-sm font-medium hover:text-rose-500">
              Conviértete en anfitrión
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] w-full">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=500&width=1920"
              alt="Paisaje de Bolivia"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 max-w-3xl text-4xl font-bold md:text-5xl lg:text-6xl">
              Encuentra tu lugar perfecto en Bolivia
            </h1>
            <p className="mb-8 max-w-2xl text-xl">Descubre alojamientos únicos en los mejores destinos de Bolivia</p>

            {/* Search Box */}
            <div className="mx-auto w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="md:col-span-5">
                  <div className="flex items-center rounded-md border border-gray-300 px-3 py-2">
                    <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="¿A dónde vas?"
                      className="w-full border-none bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center rounded-md border border-gray-300 px-3 py-2">
                    <input type="date" className="w-full border-none bg-transparent focus:outline-none" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center rounded-md border border-gray-300 px-3 py-2">
                    <Users className="mr-2 h-5 w-5 text-gray-400" />
                    <select className="w-full border-none bg-transparent focus:outline-none">
                      <option>1 huésped</option>
                      <option>2 huéspedes</option>
                      <option>3 huéspedes</option>
                      <option>4+ huéspedes</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <button className="flex w-full items-center justify-center rounded-md bg-rose-500 px-4 py-2 text-white hover:bg-rose-600">
                    <Search className="mr-2 h-5 w-5" />
                    <span>Buscar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment in Bolivianos Highlight */}
        <section className="bg-gradient-to-r from-rose-50 to-rose-100 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900">Paga en Bolivianos</h2>
                <p className="mt-2 text-xl text-gray-600">
                  Sin complicaciones de cambio de moneda. Reserva y paga directamente en la moneda local.
                </p>
              </div>
              <div className="flex items-center justify-center md:w-1/3">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <CreditCard className="mx-auto mb-4 h-16 w-16 text-rose-500" />
                  <p className="text-center text-gray-700">Acepta todos los métodos de pago populares en Bolivia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Destinos populares</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "La Paz", image: "/placeholder.svg?height=240&width=320" },
                { name: "Santa Cruz", image: "/placeholder.svg?height=240&width=320" },
                { name: "Cochabamba", image: "/placeholder.svg?height=240&width=320" },
                { name: "Sucre", image: "/placeholder.svg?height=240&width=320" },
                { name: "Uyuni", image: "/placeholder.svg?height=240&width=320" },
                { name: "Copacabana", image: "/placeholder.svg?height=240&width=320" },
                { name: "Tarija", image: "/placeholder.svg?height=240&width=320" },
                { name: "Rurrenabaque", image: "/placeholder.svg?height=240&width=320" },
              ].map((destination) => (
                <Link
                  key={destination.name}
                  href={`/search?location=${destination.name}`}
                  className="group overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  <div className="relative h-60 w-full">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={`${destination.name}, Bolivia`}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{destination.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Alojamientos destacados</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Apartamento con vista al lago Titicaca",
                  location: "Copacabana",
                  price: 350,
                  rating: 4.9,
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Cabaña en el Valle de la Luna",
                  location: "La Paz",
                  price: 420,
                  rating: 4.8,
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Casa colonial en el centro histórico",
                  location: "Sucre",
                  price: 280,
                  rating: 4.7,
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((property, index) => (
                <div key={index} className="overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">{property.location}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-rose-500" />
                        <span className="ml-1 text-sm font-medium">{property.rating}</span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{property.title}</h3>
                    <p className="mt-4 text-lg font-semibold">
                      Bs. {property.price} <span className="text-sm font-normal text-gray-500">/ noche</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/search"
                className="inline-flex items-center rounded-md border border-rose-500 px-6 py-3 text-base font-medium text-rose-500 hover:bg-rose-50"
              >
                Ver más alojamientos
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">¿Por qué BolBnB?</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-rose-100 p-4">
                  <Home className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Lugares Únicos</h3>
                <p className="text-gray-600">
                  Encuentra alojamientos auténticos que reflejan la rica cultura y diversidad de Bolivia
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-rose-100 p-4">
                  <CreditCard className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Precios Justos</h3>
                <p className="text-gray-600">
                  Opciones para cada presupuesto con precios transparentes en Bolivianos, sin sorpresas
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-rose-100 p-4">
                  <MapPin className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">100% Bolivia</h3>
                <p className="text-gray-600">
                  Plataforma creada por bolivianos para mostrar lo mejor de nuestro país a viajeros locales e
                  internacionales
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Host CTA */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-600"></div>
          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">¿Tienes un espacio para compartir?</h2>
                <p className="mt-4 text-lg text-white/90">
                  Conviértete en anfitrión y comienza a ganar dinero compartiendo tu espacio con viajeros de todo el
                  mundo.
                </p>
                <div className="mt-8">
                  <Link
                    href="/become-host"
                    className="rounded-md bg-white px-6 py-3 text-base font-medium text-rose-600 shadow-md hover:bg-gray-50"
                  >
                    Conviértete en anfitrión
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=320&width=480"
                    alt="Conviértete en anfitrión"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Lo que dicen nuestros usuarios</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "María Fernández",
                  location: "La Paz",
                  text: "Encontré un departamento increíble en Santa Cruz a un precio muy accesible. La plataforma es muy fácil de usar y el pago en bolivianos fue muy conveniente.",
                },
                {
                  name: "Carlos Mendoza",
                  location: "Cochabamba",
                  text: "Como anfitrión, BolBnB me ha permitido conectar con viajeros de todo el mundo interesados en conocer Bolivia. El proceso es simple y los pagos son puntuales.",
                },
                {
                  name: "Laura Gutiérrez",
                  location: "Sucre",
                  text: "Viajé por todo Bolivia usando BolBnB. La variedad de alojamientos es impresionante y el soporte al cliente siempre estuvo disponible cuando lo necesité.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-full bg-rose-200"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">"{testimonial.text}"</p>
                  <div className="mt-4 flex text-rose-500">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-rose-50 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Mantente informado</h2>
                <p className="mb-8 text-lg text-gray-600">
                  Suscríbete para recibir ofertas especiales y descubrir nuevos destinos en Bolivia
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none"
                  />
                  <button className="rounded-md bg-rose-500 px-6 py-3 font-medium text-white hover:bg-rose-600">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Acerca de</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Inversionistas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Comunidad</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Diversidad e inclusión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Accesibilidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Referir anfitriones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    BolBnB.org
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Anfitrión</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Hospeda en tu propiedad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Hospedaje responsable
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Centro de recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Foro de comunidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Opciones de cancelación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Servicio al vecindario
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-rose-500">
                    Confianza y seguridad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} BolBnB, Inc. Todos los derechos reservados.
                </p>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-500 hover:text-rose-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-rose-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-rose-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
