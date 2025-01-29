import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"
import contact from '../assets/contact.svg'
import { Link } from "react-router-dom"

const Talk=()=> {
  return (
    <div className=" text-white py-8">
      {/* Back Button */}
      <Link to='/' className="hover:opacity-75 transition-opacity" aria-label="Back to home">
        <ArrowLeft className="lg:ml-64 md:ml-20 sm:ml-10 w-[30px] h-6" />
      </Link>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-12 pl-4 pr-4">
          {/* Left Column - Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-grotesk font-medium">
                Interested?
                <br />
                Let's talk!
              </h1>
              <p className="font-grotesk lg:text-2xl md:text-xl sm:text-lg max-w-md">
                Just fill this form and we will contact you promptly to discuss your project. Hate forms? Drop us a
                message at <span className="lg:text-2xl md:text-xl sm:text-lg font-medium">info@Haydevs.com.</span>
              </p>
            </div>   

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white py-2 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-white text-2xl font-grotesk"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white py-2 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-white text-2xl font-grotesk"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Tell Us About Your Project"
                  className="mb-6 w-full bg-transparent border-b border-white py-2 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-white text-2xl font-grotesk"
                />
              </div>

              <button className="bg-[#8447E9] text-white px-6 py-3 hover:bg-[#7435e9] transition-colors flex items-center gap-2">
                Send Request
                <span className="text-xl"><ArrowRight className="w-5 pt-1"/></span>
              </button>
            </div>
          </div>

          {/* Right Column - 3D Object */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[400px] h-[400px] relative animate">
              <img
                src={contact}
                alt="3D Geometric Shape"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Talk;

