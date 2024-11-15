import { Home, Building2, Sparkles, Calendar,ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Residential Cleaning",
    description: "Comprehensive cleaning services for homes of all sizes. We ensure your living space is spotless.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices and commercial spaces. Maintain a clean work environment.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning service that covers every corner. Perfect for move-in/move-out situations.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Recurring Service",
    description: "Regular cleaning schedules tailored to your needs. Weekly, bi-weekly, or monthly options available.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional cleaning services to meet all your needs. Choose the service that best fits your requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;