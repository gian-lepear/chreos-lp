import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#fcf9f3] text-[#0f1c2c]"
      style={{ fontFamily: "'Inter Variable', sans-serif" }}
    >
      <Navbar>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#fcf9f3]/60 uppercase transition-colors hover:text-[#fcf9f3]"
        >
          <ArrowLeft size={14} />
          Voltar ao início
        </Link>
      </Navbar>

      <section className="flex flex-1 items-center bg-[#0f1c2c] px-6 pt-40 pb-20 md:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-6 text-[10px] font-bold tracking-[0.3em] text-[#fcf9f3]/55 uppercase">
            Erro 404
          </div>
          <h1
            className="mb-8 leading-[0.95] tracking-[-0.02em] text-[#fcf9f3]"
            style={{
              fontFamily: "'Newsreader Variable', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
            }}
          >
            Página <em style={{ color: "#e6c364" }}>não encontrada.</em>
          </h1>
          <p className="mb-12 max-w-xl text-base leading-relaxed text-[#fcf9f3]/55">
            O endereço que você acessou não existe ou foi movido. Volte para a página inicial para
            continuar.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold tracking-[0.2em] text-[#0f1c2c] uppercase transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)",
            }}
          >
            <ArrowLeft size={14} />
            Voltar para o início
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
