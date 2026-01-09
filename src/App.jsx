import { Route, Switch, useLocation } from 'wouter';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Universe from './pages/Universe';
import Characters from './pages/Characters';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

// Set to true to show Coming Soon page, false to show full site
const COMING_SOON_MODE = true;

function App() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Check if preview mode is enabled via URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const isPreviewMode = urlParams.get('preview') === 'true';

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
          <Route path="/characters" component={Characters} />
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
