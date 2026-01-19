import { Route, Switch, useLocation } from 'wouter';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Universe from './pages/Universe';
import Characters from './pages/Characters';
import CharactersSelector from './pages/CharactersSelector';
import CharactersOrbital from './pages/CharactersOrbital';
import Science from './pages/Science';
import ScienceMirida from './pages/ScienceMirida';
import SciencePN7 from './pages/SciencePN7';
import ScienceLysithea from './pages/ScienceLysithea';
import PhilosophyIdentity from './pages/PhilosophyIdentity';
import PhilosophyConsciousness from './pages/PhilosophyConsciousness';
import PhilosophyAIFeelings from './pages/PhilosophyAIFeelings';
import Technology from './pages/Technology';
import TechnologyCCM01 from './pages/TechnologyCCM01';
import TechnologyElaraProjection from './pages/TechnologyElaraProjection';
import TechnologyNovaVentis from './pages/TechnologyNovaVentis';
import Society from './pages/Society';
import Philosophy from './pages/Philosophy';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

// Set to true to show Coming Soon page, false to show full site
const COMING_SOON_MODE = false;

// Check if preview mode is enabled via URL query parameter (check once at load)
const urlParams = new URLSearchParams(window.location.search);
const isPreviewMode = urlParams.get('preview') === 'true';

function App() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Track pageviews in Google Analytics on route change
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XLQXDE4N6Q', {
        page_path: location,
      });
    }
  }, [location]);

  // Show Coming Soon page if in Coming Soon mode AND not in preview mode
  if (COMING_SOON_MODE && !isPreviewMode) {
    return <ComingSoon />;
  }

  // Show full site
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/universe" component={Universe} />
          <Route path="/characters" component={CharactersOrbital} />
          <Route path="/characters/old" component={Characters} />
          <Route path="/science" component={Science} />
          <Route path="/science/mirida" component={ScienceMirida} />
          <Route path="/science/pn7" component={SciencePN7} />
          <Route path="/science/lysithea" component={ScienceLysithea} />
          <Route path="/technology" component={Technology} />
          <Route path="/technology/ccm01" component={TechnologyCCM01} />
          <Route path="/technology/elara-projection" component={TechnologyElaraProjection} />
          <Route path="/technology/nova-ventis" component={TechnologyNovaVentis} />
          <Route path="/society" component={Society} />
          <Route path="/philosophy" component={Philosophy} />
          <Route path="/philosophy/identity" component={PhilosophyIdentity} />
          <Route path="/philosophy/consciousness" component={PhilosophyConsciousness} />
          <Route path="/philosophy/ai-feelings" component={PhilosophyAIFeelings} />
          <Route path="/vision" component={Vision} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="container section-padding text-center">
              <h1 className="text-gradient-orange mb-4">404</h1>
              <p className="text-xl">Page not found</p>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
