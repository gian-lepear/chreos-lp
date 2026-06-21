import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { ConsentBanner } from "@/components/ConsentBanner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Home from "@/pages/home";

const Privacy = lazy(() => import("@/pages/privacy"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
            <Router />
            <ConsentBanner />
          </WouterRouter>
        </MotionConfig>
      </LazyMotion>
    </ErrorBoundary>
  );
}

export default App;
