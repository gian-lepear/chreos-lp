import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { ConsentBanner } from "@/components/ConsentBanner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Home from "@/pages/home";

const Privacy = lazy(() => import("@/pages/privacy"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Deep links com hash (ex.: /#acesso, ou o link "Acesso" da página de
// privacidade) não rolam sozinhos num SPA: o navegador tenta rolar antes do
// React renderizar a seção. Aqui rolamos para o alvo após o paint, no load e
// a cada troca de rota.
function ScrollToHash() {
  const [location] = useLocation();
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacidade" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <WouterRouter
            base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}
            ssrPath={ssrPath}
          >
            <ScrollToHash />
            <Router />
            <ConsentBanner />
          </WouterRouter>
        </MotionConfig>
      </LazyMotion>
    </ErrorBoundary>
  );
}

export default App;
