import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const Faq=()=> {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const faqs = [
    {
      question: "How can I contact Haydevs Team?",
      answer: "You can reach us through our contact form on our website or by emailing us at ",
      email: "hello@haydevs.com",
      postScript: " We typically respond within 24 hours."
    },
    {
      question: "How can I contact Haydevs Team?",
      answer: "You can reach us through our contact form on our website or by emailing us at ",
      email: "hello@haydevs.com",
      postScript: " We typically respond within 24 hours."
    },
    {
      question: "How can I contact Haydevs Team?",
      answer: "You can reach us through our contact form on our website or by emailing us at ",
      email: "hello@haydevs.com",
      postScript: " We typically respond within 24 hours."
    },
    {
      question: "How can I contact Haydevs Team?",
      answer: "You can reach us through our contact form on our website or by emailing us at ",
      email: "hello@haydevs.com",
      postScript: " We typically respond within 24 hours."
    }
  ]

  return (
    <div className=" text-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Title */}
          <div>
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-[32px] overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="px-8 py-6 flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className={`transition-all duration-300 ${
                      hoveredIndex === index ? 'text-base mb-4' : 'text-lg mb-0'
                    } font-normal pr-8`}>
                      {faq.question}
                    </h3>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out text-gray-400 ${
                        hoveredIndex === index 
                          ? 'max-h-[200px] opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      {faq.answer}
                      <a href={`mailto:${faq.email}`} className="text-white hover:underline">
                        {faq.email}
                      </a>
                      {faq.postScript}
                    </div>
                  </div>
                  
                  <span className="text-white mt-1">
                    {hoveredIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Faq;
