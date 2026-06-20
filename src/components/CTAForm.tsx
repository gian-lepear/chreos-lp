import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { m } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const ESTADOS = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

const WHATSAPP_NUMBER = import.meta.env.VITE_CONTACT_FORM_WHATSAPP_NUMBER;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("E-mail inválido.").optional().or(z.literal("")),
  estado: z.string().min(2, "Estado é obrigatório."),
});

type FormValues = z.infer<typeof formSchema>;

function buildWhatsAppMessage(data: FormValues): string {
  return [
    `Olá! Tenho interesse em conhecer a Chreos.`,
    ``,
    `*Nome:* ${data.name}`,
    ...(data.email ? [`*E-mail:* ${data.email}`] : []),
    `*Estado de atuação:* ${data.estado}`,
    ``,
    `Gostaria de agendar uma demonstração com leads reais da minha região.`,
  ].join("\n");
}

export function CTAForm() {
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [converted, setConverted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", estado: "" },
  });

  // Fire the Google Ads conversion at most once, only when WhatsApp actually
  // opened (avoids counting a conversion when the popup is blocked).
  function fireConversion() {
    if (converted) return;
    setConverted(true);
    window.gtag?.("event", "conversion", {
      send_to: "AW-18227481490/cRXACOi__7scEJKXxfND",
      value: 1.0,
      currency: "BRL",
    });
  }

  function onSubmit(data: FormValues) {
    if (!WHATSAPP_NUMBER) {
      console.error("VITE_CONTACT_FORM_WHATSAPP_NUMBER is not set; cannot open WhatsApp redirect.");
      return;
    }

    const message = buildWhatsAppMessage(data);
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    setWhatsappUrl(url);
    // noopener closes the tabnabbing vector; null means the popup was blocked,
    // so the success-state fallback link below carries the conversion instead.
    const win = window.open(url, "_blank", "noopener");
    if (win) fireConversion();
  }

  const fieldClass =
    "w-full bg-navy-raised text-cream placeholder:text-cream/25 border-0 rounded-none px-4 py-3 text-base font-mono outline-none focus:bg-navy-hover focus:ring-2 focus:ring-inset focus:ring-gold transition-colors";
  const labelClass = "text-[9px] uppercase tracking-[0.3em] text-cream/40 font-bold mb-1.5 block";

  return (
    <div className="bg-navy-raised relative overflow-hidden p-8 lg:p-10">
      <div
        className="absolute top-0 bottom-0 left-0 w-[4px]"
        style={{
          background: "var(--gold-gradient-v)",
        }}
      />

      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="mb-8">
          <div className="text-cream/55 mb-2 text-[9px] font-bold tracking-[0.3em] uppercase">
            Fale com a gente
          </div>
          <h3
            className="text-cream text-xl font-semibold"
            style={{ fontFamily: "'Newsreader Variable', serif" }}
          >
            Veja leads reais da <em>sua região</em>
          </h3>
        </div>
        {whatsappUrl ? (
          <div data-testid="cta-success">
            <p className="text-cream mb-2 text-base font-semibold">
              Tudo certo — abrimos o WhatsApp em outra aba.
            </p>
            <p className="text-cream/55 mb-8 text-sm leading-relaxed">
              Se a conversa não abriu, toque no botão abaixo.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={fireConversion}
              className="text-navy flex w-full items-center justify-center gap-2 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-opacity hover:opacity-90"
              style={{
                background: "var(--gold-gradient)",
              }}
              data-testid="link-whatsapp-fallback"
            >
              Abrir WhatsApp
            </a>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Nome Completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Dr. João Silva"
                        autoComplete="name"
                        {...field}
                        className={fieldClass}
                        data-testid="input-name"
                        style={{ borderRadius: 0 }}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1">
                      <FormLabel className={labelClass}>E-mail (opcional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="joao@silvaadv.com.br"
                          type="email"
                          autoComplete="email"
                          {...field}
                          className={fieldClass}
                          data-testid="input-email"
                          style={{ borderRadius: 0 }}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1">
                      <FormLabel className={labelClass}>Estado</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          data-testid="input-estado"
                          className={cn(
                            fieldClass,
                            "h-[46px] cursor-pointer",
                            field.value ? "text-cream" : "text-cream/25",
                          )}
                          style={{ borderRadius: 0 }}
                        >
                          <option value="" disabled>
                            UF
                          </option>
                          {ESTADOS.map(({ sigla, nome }) => (
                            <option key={sigla} value={sigla} className="text-cream">
                              {sigla} — {nome}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              <button
                type="submit"
                className="text-navy mt-2 flex w-full items-center justify-center gap-2 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-opacity hover:opacity-90"
                style={{
                  background: "var(--gold-gradient)",
                }}
                data-testid="button-submit-cta"
              >
                Ver Leads da Minha Região
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
              <div className="text-cream/50 space-y-1.5 pt-1 text-center text-[9px] tracking-[0.15em] uppercase">
                <div>Você será redirecionado para o WhatsApp · Resposta em até 30 minutos</div>
                <div>
                  Seus dados não são compartilhados ·{" "}
                  <Link
                    href="/privacidade"
                    className="hover:text-cream/80 underline transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        )}
      </m.div>
    </div>
  );
}
