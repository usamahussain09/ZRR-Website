import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from '../api/portfolio.json';
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const PortfolioDetails = () => {
    const { id } = useParams();

    // Find the portfolio item by ID
    const portfolioItem = portfolioData.find((item) => item.id === parseInt(id, 10));

    // If no portfolio item is found
    if (!portfolioItem) {
        return <h1>Portfolio not found</h1>;
    }

    return (
        <div className="text-white ">
        {/* Header with back navigation */}
        <header className="ml-96 top-0  w-full  z-10 p-4">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span className="sr-only">Back</span>
          </Link>
        </header>
  
        {/* Main content */}
        <main className="container mx-auto px-4 pt-16 pb-8 max-w-7xl ">
          <div className="max-w-4xl mx-auto">
            {/* Project image */}
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img
                src={portfolioItem.image}
                alt="Crint Mobile App Interface"
                className="object-cover w-full h-full"
              />
            </div>
  
            {/* Project details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">{portfolioItem.title}</h1>
                <p className="text-xl text-zinc-400">{portfolioItem.type}</p>
              </div>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4">{portfolioItem.challenge}</h2>
                <p className="text-zinc-400 leading-relaxed">
                  When our power of choice is untrammeled and when nothing prevents us from being able to do what we like
                  best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to
                  the claims of duty or the obligations of business it will frequently occur that pleasures have to be
                  repudiated and annoyances accepted. The wise man therefore always holds in these matters to this
                  principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
                  to avoid worse pains.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4">02. The Solution</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                  repellat.
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                  <li>One who avoids a pain that produces no resultant pleasure.</li>
                  <li>laborious physical exercise.</li>
                  <li>One who avoids a pain that produces no resultant</li>
                  <li>which of us ever undertakes laborious</li>
                  <li>Avoids pleasure itself, because it is.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4">03. The Result</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                  except to obtain some advantage from it? But who has any right to find fault with a man who chooses to
                  enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant
                  pleasure?
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  When our power of choice is untrammeled and when nothing prevents us from being able to do what we like
                  best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to
                  the claims of duty or the obligations of business it will frequently occur that pleasures have to be
                  repudiated and annoyances accepted. The wise man therefore always holds in these matters to this
                  principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
                  to avoid worse pains.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
};

export default PortfolioDetails;
