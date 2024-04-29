import { Header } from "./components/Navbar"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { ContactMe } from "./components/ContactMe"
import { Education } from "./components/Education"



function App() {
  return (
    <body className="bg-black min-h-screen">

      <Header />

      <main className="max-w-screen-lg mx-auto pd-4 space-y-8">
        <About />
        <Skills />
        <ContactMe />
        <Education />
      </main>
    </body>

  )
}

export default App
