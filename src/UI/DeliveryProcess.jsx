const DeliveryProcess=()=> {
    const leftColumn = [
      {
        title: "Communicate with customer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Website creation process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Testing process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ]
  
    const rightColumn = {
      title: "Design & Develop",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
    }
  
    return (
      <div className="  text-white px-4 py-1 mb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-grotesk font-bold text-center mb-16">
            HOW WE DELIVER HIGH
            <br />
            QUALITY WORK
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-44">
            {/* Left Column */}
            <div className="space-y-12">
              {leftColumn.map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-grotesk font-bold mb-4">{item.title}</h3>
                  <p className="text-white text-xl font-grotesk leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
  
            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-grotesk font-bold mb-4">{rightColumn.title}</h3>
              <div className="space-y-6">
                {rightColumn.descriptions.map((description, index) => (
                  <p key={index} className="text-white text-xl font-grotesk leading-relaxed">
                    {description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default DeliveryProcess;
  
  