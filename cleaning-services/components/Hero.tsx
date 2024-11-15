import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional Cleaning Services for Your{" "}
              <span className="text-primary">Home & Office</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the difference with our top-rated cleaning services. Book your cleaning in minutes and enjoy a spotless space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Book Now
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-md hover:bg-primary/10 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                <p className="text-gray-600">Customer Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10k+</p>
                <p className="text-gray-600">Homes Cleaned</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate-fade-down">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Cleaning Service"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;