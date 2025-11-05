export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold text-white">Grupo Empresarial J4</h3>
              <p className="text-sm text-gray-400 font-noto">Cúcuta, Norte de Santander, Colombia</p>
              <p className="text-xs text-gray-500 font-noto">Sedes en múltiples ciudades</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 font-noto">
            © 2024 Grupo Empresarial J4. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}