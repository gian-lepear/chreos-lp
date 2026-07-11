import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { LazyMotion, MotionConfig } from "framer-motion";
import { ConsentBanner } from "@/components/ConsentBanner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Home from "@/pages/home";

const Privacy = lazy(() => import("@/pages/privacy"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Deep links com hash (ex.: /#acesso, ou o link "Acesso" da página de
// privacidade) não rolam sozinhos num SPA: o navegador tenta rolar antes do
// React renderizar a seção. Aqui rolamos para o alvo após o paint, no load e
// a cada troca de rota. O offset do navbar fixo vem do scroll-padding-top
// (index.css). Re-rolamos quando as fontes carregam: o serif grande reflui a
// altura das seções acima e desloca a âncora, deixando aparecer um sliver da
// seção anterior se rolarmos só no 1º paint.
function ScrollToHash() {
  const [location] = useLocation();
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    let id: string;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      id = hash.slice(1); // hash malformado: usa cru em vez de derrubar a página
    }
    const scrollToTarget = () => document.getElementById(id)?.scrollIntoView();
    requestAnimationFrame(scrollToTarget);

    // Re-rola após as fontes carregarem (o serif grande reflui as seções acima e
    // desloca a âncora) — mas só se o usuário NÃO tiver rolado nesse meio-tempo,
    // pra não arrancá-lo de volta. scrollIntoView programático não dispara esses
    // eventos, então só input real marca userScrolled.
    let userScrolled = false;
    const markScrolled = () => {
      userScrolled = true;
    };
    window.addEventListener("wheel", markScrolled, { once: true, passive: true });
    window.addEventListener("touchmove", markScrolled, { once: true, passive: true });
    window.addEventListener("keydown", markScrolled, { once: true });
    if (document.fonts?.ready) {
      void document.fonts.ready.then(() => {
        if (!userScrolled) scrollToTarget();
      });
    }
    return () => {
      window.removeEventListener("wheel", markScrolled);
      window.removeEventListener("touchmove", markScrolled);
      window.removeEventListener("keydown", markScrolled);
    };
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

// Motor de animação fora do bundle inicial (ver src/lib/motion-features.ts).
const loadMotionFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <LazyMotion features={loadMotionFeatures} strict>
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
