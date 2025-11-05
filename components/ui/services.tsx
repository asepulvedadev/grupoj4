export function Services() {
  const services = [
    {
      title: "Corte Láser y CNC",
      description: "Elementos precisos en MDF, acrílico y materiales blandos con tecnología de vanguardia.",
      icon: "⚡"
    },
    {
      title: "Venta de Láminas de Acrílico",
      description: "Amplia variedad de láminas de acrílico en diferentes grosores y colores.",
      icon: "🔲"
    },
    {
      title: "Impresión en Gran Formato",
      description: "Lonetas, vinilos y avisos gigantes con impresión de alta calidad.",
      icon: "🖨️"
    },
    {
      title: "Inyección de PVC",
      description: "Fabricación de manillas y elementos personalizados mediante inyección de PVC.",
      icon: "🏭"
    },
    {
      title: "Avisos Gigantes",
      description: "Diseño y fabricación de avisos publicitarios de gran formato.",
      icon: "📢"
    },
    {
      title: "Materiales Publicitarios",
      description: "Suministro completo de materiales para proyectos publicitarios.",
      icon: "📦"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 font-noto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}