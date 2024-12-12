import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#F8FAFC] mb-6">Get in Touch</h1>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#131B2E] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#9b6cc0]" />
                <p className="text-[#E2E8F0]">contact@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#9b6cc0]" />
                <p className="text-[#E2E8F0]">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#9b6cc0]" />
                <p className="text-[#E2E8F0]">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#131B2E] p-8 rounded-lg"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#F8FAFC] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#0A0F1C] text-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#9b6cc0] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#F8FAFC] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#0A0F1C] text-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#9b6cc0] outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#F8FAFC] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#0A0F1C] text-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#9b6cc0] outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-[#9b6cc0] to-[#ff4d5d] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}