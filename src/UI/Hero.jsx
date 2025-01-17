'use client'
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
const Hero = () => {
    return (
        <section className="relative min-h-[20vh] overflow-hidden">

            {/* Orbital circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3, 4, 5, 6].map((orbit) => (
                    <div
                        key={orbit}
                        className="absolute rounded-full border border-gray-400/30"
                        style={{
                            width: `min(${orbit * 150}px, ${orbit * 15}vw)`,
                            height: `min(${orbit * 150}px, ${orbit * 15}vw)`,
                            animation: `rotate ${20 + orbit * 5}s linear infinite`,
                            opacity: 0.8,
                        }}
                    >
                        <div
                            className="absolute flex items-center justify-center"
                            style={{
                                width: "min(3rem, 8vw)",
                                height: "min(3rem, 8vw)",
                                top: "0%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                animation: `counter-rotate ${20 + orbit * 5}s linear infinite`,
                            }}
                        >
                            <div
                                className={`
                  w-[min(2rem,6vw)] 
                  h-[min(2rem,6vw)] 
                  rounded-full 
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  space-y-1 
                  text-white 
                  text-[min(0.875rem,3vw)]
                `}
                            >
                                {orbit === 1 && <img src={six} alt="VS" className="w-50 h-16" />}
                                {orbit === 2 && <img src={five} alt="Ai" className="w-16 h-16" />}
                                {orbit === 3 && <img src={four} alt="Fg" className="w-16 h-16" />}
                                {orbit === 4 && <img src={three} alt="Fg" className="w-16 h-16" />}
                                {orbit === 5 && <img src={two} alt="Unity" className="w-16 h-16" />}
                                {orbit === 6 && <img src={one} alt="HTML" className="w-16 h-16" />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Central content */}
            {/* <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center ">
        <h1 className="max-w-4xl mx-auto text-2xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl xsm:text-2xl">
          Where innovation and technology meet to elevate your business
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-xl  text-white sm:text-sm">
          I blend exquisite design with impeccable functionality for an exceptional user experience, while keeping users captivated.
        </p>
      </div> */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[85vh] px-4 text-center">
                <h1 className="font-grotesk max-w-4xl mx-auto text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-xl lg:text-5xl xsm:text-xl">
                    Where innovation and technology meet to elevate your business
                </h1>
                <p className="font-grotesk max-w-2xl mx-auto mt-4 text-base text-white sm:text-lg md:text-xl lg:text-xl ">
                    I blend exquisite design with impeccable functionality for an exceptional user experience, while keeping users captivated.
                </p>
            </div>



            <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counter-rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
      `}</style>
        </section>
    )
}

export default Hero;
