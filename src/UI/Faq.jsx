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
    <div className=" text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Title */}
          <div>
            <h2 className=" sm:text-4xl text-base-content text-6xl font-grotesk font-bold leading-tight align-middle mt-16 md:align-center md:text-xl lg:text-6xl">
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
                className=" rounded-xl  overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="px-8 py-8 flex justify-between items-start border border-[#FFFFFF] border-opacity-10 hover:[background:radial-gradient(190.4%_308.48%_at_180.05%_178.81%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_45.27%,rgba(255,255,255,0)_100%)] hover:backdrop-blur-[1px]">
                  <div className="flex-1">
                    <h3 className={`transition-all duration-300 font-grotesk font-bold ${
                      hoveredIndex === index ? 'text-[10px] py-1' : 'text-lg mb-0'
                    }  pr-2`}>
                      {faq.question}
                    </h3>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out text-white font-grotesk text-[18px] ${
                        hoveredIndex === index 
                          ? 'max-h-[90px] opacity-100' 
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
