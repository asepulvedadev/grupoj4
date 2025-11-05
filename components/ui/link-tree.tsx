import Image from 'next/image';
import Link from 'next/link';

interface Company {
  name: string;
  encargado:string;
  logo: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  address: string;
  mapsUrl: string;
}

const companies: Company[] = [
  {
    name: "Grupo Empresarial J4",
    encargado: "Jojhan Caicedo",
    logo: "/image/logocircular_j4.jpg",
    whatsapp: "https://wa.me/573249180953",
    instagram: "https://www.instagram.com/grupoempresarialj4/",
    facebook: "https://www.facebook.com/profile.php?id=61572590384805",
    address: "Cúcuta, Norte de Santander, Colombia",
    mapsUrl: "https://maps.google.com/?q=Cúcuta+Norte+de+Santander+Colombia"
  },
  {
    name: "Acriestilo",
    encargado: "Daniel Caicedo",
    logo: "/image/logocircular_acriestilo.jpg",
    whatsapp: "https://wa.me/573249180953",
    instagram: "https://www.instagram.com/acri_estilo/",
    facebook: "https://www.facebook.com/profile.php?id=100023463936987",
    address: "Centro de Cúcuta, Colombia",
    mapsUrl: "https://maps.google.com/?q=Centro+Cúcuta+Colombia"
  },
  {
    name: "Creatis",
    encargado: "Caicedo",
    logo: "/image/logocircular_creatis.jpg",
    whatsapp: "https://wa.me/573249180953",
    instagram: "https://www.instagram.com/creatismasideas/",
    facebook: "https://www.facebook.com/marcela.rincon.9406417",
    address: "Zona Industrial Cúcuta, Colombia",
    mapsUrl: "https://maps.google.com/?q=Zona+Industrial+Cúcuta+Colombia"
  }
];

function CompanyCard({ company }: { company: Company }) {
  return (
    <div
      className=" rounded-lg p-4 md:p-6 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden transform hover:-translate-y-2 hover:rotate-1 hover:scale-105 border-glow"
      style={{
        backgroundImage: `url('/image/bgcard.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center">
          {/* Logo circular a la derecha (30% del ancho) */}
          <div className="w-3/10 flex justify-center">
            <Image
              src={company.logo}
              alt={`${company.name} Logo`}
              width={60}
              height={60}
              className="rounded-full md:w-20 md:h-20"
            />
          </div>

          {/* Información a la izquierda */}
          <div className="w-7/10 pl-3 md:pl-4 flex flex-col justify-center text-center">
            <h2 className="text-base md:text-lg font-bold text-white mb-1">{company.name}</h2>
            <p className="text-xs md:text-sm text-gray-300 mb-2">{company.encargado}</p>

            {/* Iconos de redes sociales en fila */}
            <div className="flex space-x-2 md:space-x-3 mb-2 md:mb-3 justify-center">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>

              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Dirección */}
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors flex items-center justify-center"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="truncate">{company.address}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LinkTree() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Conecta con nuestras empresas</h1>
          <Link
            href="/"
            className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            ← Grupo Empresarial J4
          </Link>
        </div>

        {/* Desktop: horizontal layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>

        {/* Mobile: vertical layout */}
        <div className="md:hidden space-y-4">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-noto">
            © 2024 Grupo Empresarial J4. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}