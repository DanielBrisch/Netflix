import Header from "./app/components/Header"
import Footer from "./app/components/Footer"
import Section from "./app/components/Section"
import HighLightSection from "./app/components/HighlightSection"

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <main style={{ marginTop: '8rem' }}>
          <HighLightSection />
          <Section title="Para toda família" />
          <Section title="Recomendados" />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
