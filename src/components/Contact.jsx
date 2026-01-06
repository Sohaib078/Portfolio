import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Email</h3>
                    <a href="mailto:bhattisohaib11@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                      bhattisohaib11@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                      +92 318 4414321
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="card relative">
                {isSubmitted && (
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 flex items-center justify-center rounded-xl z-10">
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Thank you for your message. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;