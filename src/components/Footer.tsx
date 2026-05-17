import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1520] px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[#fcf9f3]/10 pb-10 md:flex-row md:items-end">
          <div>
            <div
              className="mb-1 text-xl font-semibold tracking-tight text-[#fcf9f3]"
              style={{ fontFamily: "'Newsreader Variable', serif" }}
            >
              Chreos
            </div>
            <div className="text-xs tracking-widest text-[#fcf9f3]/35 uppercase">
              Leads quentes para advogados
            </div>
          </div>
          <div className="flex gap-8 text-xs tracking-[0.15em] text-[#fcf9f3]/35 uppercase">
            <Link href="/privacidade" className="transition-colors hover:text-[#fcf9f3]/70">
              Privacidade
            </Link>
            <a href="/#acesso" className="transition-colors hover:text-[#fcf9f3]/70">
              Contato
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6">
          <div className="text-[10px] tracking-[0.2em] text-[#fcf9f3]/50 uppercase">
            © {year} Chreos. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
