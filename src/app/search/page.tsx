"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Filter,
  MapPin,
  Star,
  Heart,
  Grid3X3,
  List,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Users,
  Bed,
  Bath,
} from "lucide-react"

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    title: "Apartamento moderno con vista al lago Titicaca",
    location: "Copacabana, La Paz",
    price: 350,
    rating: 4.9,
    reviews: 127,
    images: ["/placeholder.svg?height=300&width=400"],
    type: "Apartamento",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["wifi", "parking", "kitchen", "tv"],
    coordinates: { lat: -16.1661, lng: -69.0864 },
  },
  {
    id: 2,
    title: "Casa colonial en el centro histórico",
    location: "Sucre, Chuquisaca",
    price: 280,
    rating: 4.8,
    reviews: 89,
    images: ["/placeholder.svg?height=300&width=400"],
    type: "Casa",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["wifi", "kitchen", "tv", "ac"],
    coordinates: { lat: -19.0196, lng: -65.2619 },
  },
  {
    id: 3,
    title: "Cabaña rústica en el Valle de la Luna",
    location: "La Paz, La Paz",
    price: 420,
    rating: 4.7,
    reviews: 156,
    images: ["/placeholder.svg?height=300&width=400"],
    type: "Cabaña",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["wifi", "kitchen"],
    coordinates: { lat: -16.5, lng: -68.1193 },
  },
  {
    id: 4,
    title: "Loft moderno en zona empresarial",
    location: "Santa Cruz, Santa Cruz",
    price: 480,
    rating: 4.6,
    reviews: 203,
    images: ["/placeholder.svg?height=300&width=400"],
    type: "Loft",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["wifi", "parking", "tv", "ac"],
    coordinates: { lat: -17.8146, lng: -63.156 },
  },
  {
    id: 5,
    title: "Casa familiar con jardín",
    location: "Cochabamba, Cochabamba",
    price: 320,
    rating: 4.5,
    reviews: 94,
    images: ["/placeholder.svg?height=300&width=400"],
    type: "Casa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["wifi", "parking", "kitchen", "tv"],
    coordinates: { lat: -17.3895, lng: -66.1568 },
  },
  {
    id: 6,
    title: "Departamento céntrico con balcón",
    location: "Tarija, Tarija",
    price: 290,
    rating: 4.4,
    reviews: 67,
    images: ["/placeholder.svg?height=300&width=400"],
    type: "Apartamento",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["wifi", "kitchen", "tv"],
    coordinates: { lat: -21.5355, lng: -64.7296 },
  },
]

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  kitchen: Coffee,
  tv: Tv,
  ac: Wind,
}

const amenityLabels = {
  wifi: "WiFi",
  parking: "Estacionamiento",
  kitchen: "Cocina",
  tv: "TV",
  ac: "Aire acondicionado",
}

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showMap, setShowMap] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [propertyType, setPropertyType] = useState<string[]>([])
  const [amenities, setAmenities] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [guests, setGuests] = useState(1)

  const filteredProperties = mockProperties.filter((property) => {
    return (
      property.price >= priceRange[0] &&
      property.price <= priceRange[1] &&
      (propertyType.length === 0 || propertyType.includes(property.type)) &&
      (amenities.length === 0 || amenities.every((amenity) => property.amenities.includes(amenity))) &&
      property.rating >= minRating &&
      property.guests >= guests
    )
  })

  const togglePropertyType = (type: string) => {
    setPropertyType((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const clearFilters = () => {
    setPriceRange([0, 1000])
    setPropertyType([])
    setAmenities([])
    setMinRating(0)
    setGuests(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-rose-500">BolBnB</div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="flex w-full rounded-full border border-gray-300 bg-white shadow-sm">
                <div className="flex flex-1 items-center px-4">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="¿A dónde vas?"
                    className="w-full border-none bg-transparent text-sm focus:outline-none"
                  />
                </div>
                <div className="flex items-center border-l border-gray-300 px-4">
                  <input type="date" className="border-none bg-transparent text-sm focus:outline-none" />
                </div>
                <div className="flex items-center border-l border-gray-300 px-4">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <select className="border-none bg-transparent text-sm focus:outline-none">
                    <option>1 huésped</option>
                    <option>2 huéspedes</option>
                    <option>3 huéspedes</option>
                    <option>4+ huéspedes</option>
                  </select>
                </div>
                <button className="flex items-center justify-center rounded-full bg-rose-500 p-2 text-white hover:bg-rose-600">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/host" className="hidden md:block text-sm font-medium hover:text-rose-500">
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Filter Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm text-gray-600">Tipo de propiedad:</span>
              {["Apartamento", "Casa", "Cabaña", "Loft"].map((type) => (
                <button
                  key={type}
                  onClick={() => togglePropertyType(type)}
                  className={`rounded-full px-3 py-1 text-sm ${
                    propertyType.includes(type)
                      ? "bg-rose-500 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{filteredProperties.length} alojamientos</span>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowMap(!showMap)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  showMap ? "bg-rose-500 text-white" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {showMap ? "Ocultar mapa" : "Mostrar mapa"}
              </button>

              <div className="flex rounded-lg border border-gray-300 bg-white">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-gray-100" : ""}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 rounded-lg bg-white p-6 shadow-sm h-fit">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <button onClick={clearFilters} className="text-sm text-rose-500 hover:text-rose-600">
                  Limpiar todo
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="mb-3 font-medium">Rango de precio</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Bs. {priceRange[0]}</span>
                    <span className="text-sm text-gray-600">Bs. {priceRange[1]}+</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <h4 className="mb-3 font-medium">Tipo de propiedad</h4>
                <div className="space-y-2">
                  {["Apartamento", "Casa", "Cabaña", "Loft"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={propertyType.includes(type)}
                        onChange={() => togglePropertyType(type)}
                        className="mr-2 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="mb-3 font-medium">Servicios</h4>
                <div className="space-y-2">
                  {Object.entries(amenityLabels).map(([key, label]) => (
                    <label key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={amenities.includes(key)}
                        onChange={() => toggleAmenity(key)}
                        className="mr-2 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
                      />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="mb-3 font-medium">Calificación mínima</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="mr-2 text-rose-500 focus:ring-rose-500"
                      />
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-rose-500" />
                        <span className="ml-1 text-sm">{rating}+</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guests */}
              <div>
                <h4 className="mb-3 font-medium">Huéspedes</h4>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-rose-500 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "huésped" : "huéspedes"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className={showMap ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""}>
              {/* Properties List */}
              <div className={showMap ? "" : "w-full"}>
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        onHover={setSelectedProperty}
                        isSelected={selectedProperty === property.id}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProperties.map((property) => (
                      <PropertyListItem
                        key={property.id}
                        property={property}
                        onHover={setSelectedProperty}
                        isSelected={selectedProperty === property.id}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Map */}
              {showMap && (
                <div className="sticky top-24 h-[600px] rounded-lg bg-white shadow-sm">
                  <BoliviaMap
                    properties={filteredProperties}
                    selectedProperty={selectedProperty}
                    onPropertySelect={setSelectedProperty}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PropertyCard({
  property,
  onHover,
  isSelected,
}: {
  property: any
  onHover: (id: number | null) => void
  isSelected: boolean
}) {
  return (
    <div
      className={`group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md ${
        isSelected ? "ring-2 ring-rose-500" : ""
      }`}
      onMouseEnter={() => onHover(property.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={property.images[0] || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2 hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">{property.location}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-rose-500" />
            <span className="ml-1 text-sm font-medium">{property.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({property.reviews})</span>
          </div>
        </div>

        <h3 className="mb-2 font-medium line-clamp-2">{property.title}</h3>

        <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            {property.guests}
          </div>
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4" />
            {property.bedrooms}
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4" />
            {property.bathrooms}
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-1">
          {property.amenities.slice(0, 3).map((amenity: string) => {
            const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
            return Icon ? (
              <div key={amenity} className="flex items-center rounded-full bg-gray-100 px-2 py-1">
                <Icon className="h-3 w-3 text-gray-600" />
              </div>
            ) : null
          })}
          {property.amenities.length > 3 && (
            <span className="text-xs text-gray-500">+{property.amenities.length - 3} más</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold">Bs. {property.price}</span>
            <span className="text-sm text-gray-500"> / noche</span>
          </div>
          <Link
            href={`/property/${property.id}`}
            className="rounded-md bg-rose-500 px-3 py-1 text-sm font-medium text-white hover:bg-rose-600"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  )
}

function PropertyListItem({
  property,
  onHover,
  isSelected,
}: {
  property: any
  onHover: (id: number | null) => void
  isSelected: boolean
}) {
  return (
    <div
      className={`group flex cursor-pointer overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md ${
        isSelected ? "ring-2 ring-rose-500" : ""
      }`}
      onMouseEnter={() => onHover(property.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-32 w-48 flex-shrink-0">
        <Image
          src={property.images[0] || "/placeholder.svg"}
          alt={property.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">{property.location}</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-rose-500" />
              <span className="ml-1 text-sm font-medium">{property.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({property.reviews})</span>
            </div>
          </div>

          <h3 className="mb-2 text-lg font-medium">{property.title}</h3>

          <div className="mb-2 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {property.guests} huéspedes
            </div>
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              {property.bedrooms} habitaciones
            </div>
            <div className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              {property.bathrooms} baños
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {property.amenities.slice(0, 4).map((amenity: string) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
              const label = amenityLabels[amenity as keyof typeof amenityLabels]
              return Icon ? (
                <div key={amenity} className="flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs">
                  <Icon className="mr-1 h-3 w-3 text-gray-600" />
                  {label}
                </div>
              ) : null
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold">Bs. {property.price}</span>
            <span className="text-sm text-gray-500"> / noche</span>
          </div>
          <Link
            href={`/property/${property.id}`}
            className="rounded-md bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  )
}

function BoliviaMap({
  properties,
  selectedProperty,
  onPropertySelect,
}: {
  properties: any[]
  selectedProperty: number | null
  onPropertySelect: (id: number | null) => void
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {/* Map Background - This would be replaced with an actual map component */}
      <div className="h-full w-full bg-gradient-to-br from-green-100 to-blue-100 relative">
        {/* Bolivia Map Outline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Mapa de Bolivia"
              width={400}
              height={500}
              className="opacity-20"
            />

            {/* Property Markers */}
            {properties.map((property) => {
              // Convert coordinates to pixel positions (simplified)
              const x = ((property.coordinates.lng + 70) / 10) * 400
              const y = ((property.coordinates.lat + 22) / 10) * 500

              return (
                <button
                  key={property.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-sm font-medium shadow-lg transition-all hover:scale-110 ${
                    selectedProperty === property.id
                      ? "bg-rose-600 text-white ring-4 ring-rose-200"
                      : "bg-white text-gray-900 hover:bg-rose-50"
                  }`}
                  style={{ left: `${x}px`, top: `${y}px` }}
                  onClick={() => onPropertySelect(property.id)}
                  onMouseEnter={() => onPropertySelect(property.id)}
                >
                  Bs. {property.price}
                </button>
              )
            })}
          </div>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 rounded-lg bg-white p-3 shadow-lg">
          <h4 className="mb-2 text-sm font-medium">Leyenda</h4>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-white border border-gray-300"></div>
              Disponible
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-rose-600"></div>
              Seleccionado
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="rounded-lg bg-white p-2 shadow-lg hover:bg-gray-50">
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="rounded-lg bg-white p-2 shadow-lg hover:bg-gray-50">
            <span className="text-lg font-bold">−</span>
          </button>
        </div>
      </div>
    </div>
  )
}
