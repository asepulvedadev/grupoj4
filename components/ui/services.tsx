export function Services() {
  const services = [
    {
      title: "Diseño Gráfico",
      description: "Logotipos, branding y material publicitario profesional.",
      icon: "🎨"
    },
    {
      title: "Marketing Digital",
      description: "Estrategias en redes sociales y publicidad online.",
      icon: "📱"
    },
    {
      title: "Publicidad Tradicional",
      description: "Campañas en medios impresos y audiovisuales.",
      icon: "📺"
    },
    {
      title: "Consultoría",
      description: "Asesoramiento estratégico para tu negocio.",
      icon: "💼"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}