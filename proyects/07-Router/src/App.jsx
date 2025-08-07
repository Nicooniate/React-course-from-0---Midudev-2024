import { lazy, Suspense } from 'react';
import "./App.css";
import searchPage from "./pages/Search";
import Page404 from "./pages/404";
import { Router } from "./Router";
import { Route } from "./Route";

const LazyHomePage = lazy(() => import('./pages/Home.jsx')); // import dinámico
const LazyAboutPage = lazy(() => import('./pages/About.jsx')); // import dinámico


const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: "/search/:query",
    Component: searchPage,
  },
];

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
          <Router routes={appRoutes} defaultComponent={Page404}>
            <Route path="/" Component={LazyHomePage} />
            <Route path="/about" Component={LazyAboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
