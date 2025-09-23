import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      iconBg: "bg-blue-100",
      icon: "🔧",
      title: "Professional Installation",
      description: "Certified technicians expertly position and install your solar water system for optimal safety and performance.",
    },
    {
      id: 2,
      iconBg: "bg-green-100",
      icon: "⚙️",
      title: "Maintenance & Repair",
      description: "Annual servicing and quick repairs to keep your solar water heater trouble-free and efficient year-round.",
    },
    
  
    {
      id: 3,
      iconBg: "bg-red-100",
      icon: "🚨",
      title: "24/7 Emergency Support",
      description: "Our rapid-response team is always on call to restore your hot water in any urgent situation.",
    }
  
  ];

  const guarantees = [
    {
      iconBg: "bg-green-100",
      icon: "✅",
      title: "Quality Guarantee",
      description: "10-year warranty on premium installations with trusted components.",
    },
    {
      iconBg: "bg-blue-100",
      icon: "⚡",
      title: "Fast Service",
      description: "Same-day service calls and speedy installation turnaround.",
    },
    {
      iconBg: "bg-orange-100",
      icon: "👥",
      title: "Expert Team",
      description: "Certified technicians with over a decade of solar experience.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 relative"
      style={{
        background:
          'linear-gradient(120deg, #60a5fa 0%, #34d399 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0, transparent 60%),radial-gradient(circle at 80% 70%, rgba(255,255,255,0.07) 0, transparent 60%)',
          zIndex: 0,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Everything you need for hot water, start to finish—backed by expertise and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white/80 shadow-md px-6 py-8 hover:shadow-xl transition duration-300 flex flex-col items-center"
              style={{backdropFilter:'blur(5px)'}}
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 text-3xl ${service.iconBg}`}>
                <span>{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Last (Guarantee) Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white/80 shadow px-6 py-8 flex flex-col items-center"
              style={{backdropFilter:'blur(5px)'}}
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 text-2xl ${item.iconBg}`}>
                <span>{item.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
