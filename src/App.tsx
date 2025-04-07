import React from 'react';
import { ArrowRight, DollarSign, LineChart, Shield, Users } from 'lucide-react';
import { ActionBar } from './components/ActionBar';

function App() {
  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  const handleVoice = () => {
    console.log('Voice activated');
  };

  const handleUpload = () => {
    console.log('Upload triggered');
  };

  const handleAnalyze = () => {
    console.log('Analyze page');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-900">ellevest</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-900">Invest</a>
              <a href="#" className="text-gray-700 hover:text-purple-900">Banking</a>
              <a href="#" className="text-gray-700 hover:text-purple-900">Learn</a>
              <a href="#" className="text-gray-700 hover:text-purple-900">About</a>
              <button className="bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-800">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold text-purple-900 mb-6">
                Invest in women's wealth, wellness, and power
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join the financial company built by women, for women. Start investing in your future today.
              </p>
              <button className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 flex items-center">
                Start Investing <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                alt="Woman using laptop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900">Why Choose Ellevest</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="text-purple-900" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Investing</h3>
              <p className="text-gray-600">Personalized portfolios designed to help you reach your goals</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-purple-900" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Financial Planning</h3>
              <p className="text-gray-600">Expert guidance to help you make informed decisions</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="text-purple-900" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Goal-Based</h3>
              <p className="text-gray-600">Set and track your financial goals with confidence</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join over 3 million women investing in their future</h2>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 inline-flex items-center">
            Get Started Now <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Invest</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Investment Portfolios</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Retirement</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Goals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Magazine</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-900">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-center">&copy; 2024 Ellevest. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Bar */}
      <ActionBar
        onSearch={handleSearch}
        onVoice={handleVoice}
        onUpload={handleUpload}
        onAnalyze={handleAnalyze}
      />
    </div>
  );
}

export default App;