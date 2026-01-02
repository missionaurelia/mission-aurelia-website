import { Route, Switch } from 'wouter';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Universe from './pages/Universe';
import Characters from './pages/Characters';
import Vision from './pages/Vision';
import Contact from './pages/Contact';

function App() {
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
