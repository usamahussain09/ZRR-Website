import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"

const Talk=()=> {
  return (
    <div className="min-h-screen text-white  py-8">
      {/* Back Button */}
      <button className="lg:ml-72 md:ml-20 sm:ml-10 top-8 left-8  hover:opacity-75 transition-opacity" aria-label="Back to home">
        <ArrowLeft className="w-[30px] h-6" />
      </button>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-12">
          {/* Left Column - Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-5xl font-grotesk font-medium leading-tight">
                Interested?
                <br />
                Let's talk!
              </h1>
              <p className="font-grotesk text-2xl max-w-md">
                Just fill this form and we will contact you promptly to discuss your project. Hate forms? Drop us a
                message at <span className="text-2xl font-medium">info@Haydevs.com.</span>
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white py-2 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-white text-2xl"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white py-2 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-white text-2xl"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Tell Us About Your Project"
                  className="w-full bg-transparent border-b border-white py-2 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-white text-2xl"
                />
              </div>

              <button className="bg-[#8447E9] text-white px-6 py-3 mt-5 hover:bg-[#7435e9] transition-colors flex items-center gap-2">
                Send Request
                <span className="text-xl"><ArrowRight className="w-5 pt-1"/></span>
              </button>
            </div>
          </div>

          {/* Right Column - 3D Object */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[400px] h-[400px] relative animate-[spin_20s_linear_infinite]">
              <img
                src="/placeholder.svg?height=400&width=400"
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

