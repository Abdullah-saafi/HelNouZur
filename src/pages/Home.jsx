import Header from "../components/Header";
import Quote from "../components/Quote";
import WhatCanDo from "../components/WhatCanDo"
import ScondQuote from "../components/ScondQuote"
import FoundationsEve from "../components/FoundationsEve";


const Home = () => {
  return (
    <div className="Main">
      {/* HelpNourZuri – Help (English) + Nour (Arabic “light”) + Zuri (Swahili “beautiful”) → Beautiful light of help.
       */}
      {/* HelNouZur */}
      <Header />
      <Quote />
      <WhatCanDo />
      <ScondQuote />
      <FoundationsEve />
    </div>
  )
}


export default Home;