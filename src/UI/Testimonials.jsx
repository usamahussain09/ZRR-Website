import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
const Testimonials=()=> {
    const testimonials = [
      {
        name: "Mugraha",
        role: "Fonder of Mangcoding",
        image: t1,
        text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
      },
      {
        name: "Alex jounky",
        role: "Fonder of Relia",
        image: t2,
        text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
      },
      {
        name: "Chelsia alexy",
        role: "Fonder of Frank",
        image: t3,
        text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
      },
      {
        name: "Mugraha",
        role: "Fonder of Mangcoding",
        image: t1,
        text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
      },
      {
        name: "Alex jounky",
        role: "Fonder of Relia",
        image: t2,
        text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
      },
      {
        name: "Chelsia alexy",
        role: "Fonder of Frank",
        image: t3,
        text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
      }
    ]
  
    return (
      <div className="min-h-screen  text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header - Exactly centered as per design */}
          <h2 className="font-grotesk text-4xl font-normal text-center mb-20">
            What they say about us
          </h2>
  
          {/* Testimonials Grid - Exact 3x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border p-8 rounded-3xl border-zinc-800 transition-transform hover:bg-gradient-to-l hover:from-gray-600 shadow-md hover:shadow-xl"
              >
                {/* Profile section with exact spacing */}
                <div className="mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mb-4"
                  />
                  <div className="space-y-1">
                    <h3 className="text-base font-grotesk font-normal">{testimonial.name}</h3>
                    <p className="text-sm text-white font-grotesk">{testimonial.role}</p>
                  </div>
                </div>
                {/* Testimonial text with exact styling */}
                <p className="text-[#FFFFFF] text-base leading-relaxed font-grotesk">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  export default Testimonials;
  