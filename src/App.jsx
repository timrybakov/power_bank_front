import { APIProvider } from '@vis.gl/react-google-maps'

import Header from "./assets/Header/Header"
import Footer from './assets/Footer/Footer'
import { 
  TitleSection, 
  MissionSection, 
  ExperianceSection, 
  PriceSection, 
  ActionSection, 
  StationMap, 
  QASection 
} from "./assets/Section/Section"
import "./index.css"

export default function App() {
  return (
    <div>
      <Header />
      <main>
          <TitleSection />
          <MissionSection />
          <ExperianceSection />
          <PriceSection />
          <h4>How it works?</h4>
          <ActionSection />
          <h4>Station map</h4>
          <APIProvider apiKey={'Token'} libraries={['marker']}>
            <StationMap />
          </APIProvider>
          <QASection />
      </main>
      <Footer />
    </div>
  )
}
