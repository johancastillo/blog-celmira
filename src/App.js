import { Router, Route, Switch } from "wouter"
import Navigation from "./components/Navigation"
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/acerca-de" component={AboutUs} />
        <Route path="/post/:id" component={Post} />
      </Switch>

    </Router>
  );
}

export default App;
