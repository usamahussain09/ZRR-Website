import { useState } from "react"
import contact from '../assets/contact.svg'

const AboutDetails = () => {
  const [activeTab, setActiveTab] = useState("mission")

  const tabContent = {
    mission:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    vision:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.",
  }
  return (
    <div className=" text-white">
      {/* Main Content */}
      <div className="pt-8 sm:pt-8 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* 3D Object - Hidden on mobile */}
          <div className="relative hidden lg:block">
            <div className="w-[320px] h-[320px] mx-auto ">
              <img
                src={contact}
                alt="3D Geometric Shape"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-16 h-[2px] bg-blue-400/20 rounded-full" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2 sm:space-y-1">
            <span className="font-poppins font-medium text-base">About</span>

            <h2 className="font-grotesk text-2xl sm:text-4xl font-bold leading-tight pb-8">One Stop Solution For All Your HR Needs</h2>

            <p className="font-grotesk text-base leading-relaxed pb-4 ">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex gap-8 sm:gap-10 ">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`pb-2 border-b-2 transition-colors ${activeTab === "mission"
                    ? "text-white border-white font-grotesk font-bold text-lg"
                    : " text-white border-white font-grotesk font-bold text-lg border-transparent hover:text-gray-300"
                    }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`text-lg sm:text-xl font-medium pb-2 border-b-2 transition-colors ${activeTab === "vision"
                    ? "text-white border-white font-grotesk font-bold text-lg"
                    : " text-white border-white font-grotesk font-bold text-lg border-transparent hover:text-gray-300"
                    }`}
                >
                  Our Vision
                </button>
              </div>

              <div className="min-h-[120px]">
                <p className=" text-lg font-grotesk leading-relaxed">{tabContent[activeTab]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default AboutDetails