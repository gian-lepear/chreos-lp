import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches render errors anywhere below it (including failed lazy-chunk loads)
 * and shows a branded fallback instead of a blank white screen.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0f1c2c] px-6 text-center"
        style={{ fontFamily: "'Inter Variable', sans-serif" }}
      >
        <h1
          className="text-3xl font-semibold text-[#fcf9f3]"
          style={{ fontFamily: "'Newsreader Variable', serif" }}
        >
          Algo deu errado
        </h1>
        <p className="max-w-md text-sm text-[#fcf9f3]/60">
          Não foi possível carregar esta parte da página. Recarregue para tentar novamente.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-7 py-4 text-xs font-bold tracking-[0.2em] text-[#0f1c2c] uppercase transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" }}
        >
          Recarregar
        </button>
      </div>
    );
  }
}
