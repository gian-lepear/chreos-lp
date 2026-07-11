// Carregado assincronamente pelo <LazyMotion> em App.tsx: o motor de animação
// (domAnimation) sai do caminho crítico e chega num chunk separado, depois do
// primeiro paint. Os componentes <m.*> renderizam estáticos até ele chegar.
import { domAnimation } from "framer-motion";

export default domAnimation;
