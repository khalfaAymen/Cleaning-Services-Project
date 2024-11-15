import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Clean",
    price: 129,
    description: "Perfect for regular maintenance",
    features: [
      "2 bedroom home coverage",
      "Basic cleaning supplies included",
      "2-hour service",
      "Weekly scheduling available",
      "100% satisfaction guarantee",
    ],
  },
  {
    name: "Deep Clean",
    price: 199,
    description: "Comprehensive cleaning service",
    features: [
      "3-4 bedroom home coverage",
      "Premium cleaning supplies",
      "4-hour service",
      "Interior window cleaning",
      "Appliance cleaning",
      "100% satisfaction guarantee",
    ],
    popular: true,
  },
  {
    name: "Move In/Out",
    price: 299,
    description: "Complete deep cleaning service",
    features: [
      "Any size home",
      "Premium cleaning supplies",
      "6-hour service",
      "Cabinet cleaning",
      "Appliance cleaning",
      "Carpet cleaning",
      "100% satisfaction guarantee",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect cleaning package for your needs. All prices include cleaning supplies and equipment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg ${
                plan.popular
                  ? "ring-2 ring-primary shadow-lg scale-105"
                  : "border border-gray-200"
              } animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <p className="text-4xl font-bold mt-4">
                ${plan.price}
                <span className="text-lg text-gray-600 font-normal">/visit</span>
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 px-4 py-2 rounded-md ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-2 border-primary text-primary hover:bg-primary/10"
                } transition-colors`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;