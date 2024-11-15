import { CalendarCheck, Clock, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: <CalendarCheck className="w-12 h-12 text-primary" />,
    title: "Book Online",
    description: "Select your service and preferred time slot through our easy online booking system.",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "We Clean",
    description: "Our professional team arrives on time and completes the cleaning according to your requirements.",
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
    title: "You Relax",
    description: "Enjoy your spotless space while we take care of the cleaning. 100% satisfaction guaranteed.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Booking a cleaning service with us is simple and straightforward. Follow these three easy steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;