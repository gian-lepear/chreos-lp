import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AREAS_ATUACAO = [
  "Direito Imobiliário",
  "Direito Tributário",
  "Direito Bancário",
  "Direito Civil",
  "Direito Empresarial",
];

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

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  phone: z.string().refine(v => v.replace(/\D/g, "").length >= 10, "WhatsApp inválido."),
  area: z.string().min(2, "Área de atuação é obrigatória."),
  estado: z.string().min(2, "Estado é obrigatório."),
});

type FormValues = z.infer<typeof formSchema>;

function buildWhatsAppMessage(data: FormValues): string {
  return [
    `Olá! Tenho interesse em conhecer a Chreos.`,
    ``,
    `*Nome:* ${data.name}`,
    `*E-mail:* ${data.email}`,
    `*WhatsApp:* ${data.phone}`,
    `*Área de atuação:* ${data.area}`,
    `*Estado de atuação:* ${data.estado}`,
    ``,
    `Gostaria de agendar uma demonstração com leads reais da minha região.`,
  ].join("\n");
}

export function CTAForm() {
  const [estadoOpen, setEstadoOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", area: "", estado: "" },
  });

  function onSubmit(data: FormValues) {
    const message = buildWhatsAppMessage(data);
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  }

  const fieldClass = "w-full bg-[#16263b] text-[#fcf9f3] placeholder:text-[#fcf9f3]/25 border-0 rounded-none px-4 py-3 text-sm font-mono outline-none focus:bg-[#1d3248] transition-colors";
  const labelClass = "text-[9px] uppercase tracking-[0.3em] text-[#fcf9f3]/40 font-bold mb-1.5 block";

  return (
    <div className="bg-[#16263b] p-8 lg:p-10 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: "linear-gradient(180deg, #C9A84C 0%, #e6c364 100%)" }} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="mb-8">
          <div className="text-[9px] uppercase tracking-[0.3em] text-[#fcf9f3]/55 font-bold mb-2">Fale com a gente</div>
          <h3 className="text-[#fcf9f3] text-xl font-semibold" style={{ fontFamily: "'Newsreader Variable', serif" }}>
            Solicite acesso ao <em>Chreos</em>
          </h3>
        </div>
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
                      {...field}
                      className={fieldClass}
                      data-testid="input-name"
                      style={{ borderRadius: 0 }}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className={labelClass}>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="joao@silvaadv.com.br"
                        type="email"
                        {...field}
                        className={fieldClass}
                        data-testid="input-email"
                        style={{ borderRadius: 0 }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className={labelClass}>WhatsApp</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(11) 99999-9999"
                        {...field}
                        onChange={e => field.onChange(formatPhone(e.target.value))}
                        inputMode="numeric"
                        className={fieldClass}
                        data-testid="input-phone"
                        style={{ borderRadius: 0 }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Área de Atuação</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={fieldClass}
                          data-testid="input-area"
                          style={{ borderRadius: 0 }}
                        >
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#16263b] border-[#fcf9f3]/10 rounded-none">
                        {AREAS_ATUACAO.map(area => (
                          <SelectItem
                            key={area}
                            value={area}
                            className="text-[#fcf9f3]/80 text-sm font-mono focus:bg-[#1d3248] focus:text-[#fcf9f3] rounded-none"
                          >
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="estado"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Estado</FormLabel>
                    <Popover open={estadoOpen} onOpenChange={setEstadoOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <button
                            type="button"
                            data-testid="input-estado"
                            className={cn(
                              fieldClass,
                              "flex items-center justify-between cursor-pointer h-[46px]"
                            )}
                          >
                            <span className={field.value ? "text-[#fcf9f3]" : "text-[#fcf9f3]/25"}>
                              {field.value || "UF"}
                            </span>
                            <ChevronsUpDown size={12} className="text-[#fcf9f3]/30 flex-shrink-0" />
                          </button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-56 p-0 bg-[#16263b] border-[#fcf9f3]/10 rounded-none"
                        align="start"
                      >
                        <Command className="bg-transparent rounded-none">
                          <CommandInput
                            placeholder="Buscar sigla..."
                            className="text-[#fcf9f3] placeholder:text-[#fcf9f3]/30 font-mono text-sm border-b border-[#fcf9f3]/10 h-9"
                          />
                          <CommandList className="max-h-48">
                            <CommandEmpty className="text-[#fcf9f3]/40 text-xs py-3 text-center font-mono">
                              Estado não encontrado.
                            </CommandEmpty>
                            {ESTADOS.map(({ sigla, nome }) => (
                              <CommandItem
                                key={sigla}
                                value={sigla}
                                onSelect={() => {
                                  field.onChange(sigla);
                                  setEstadoOpen(false);
                                }}
                                className="text-[#fcf9f3]/80 font-mono text-sm aria-selected:bg-[#1d3248] aria-selected:text-[#fcf9f3] rounded-none px-3 py-2 cursor-pointer"
                              >
                                <span className="font-bold w-8 flex-shrink-0">{sigla}</span>
                                <span className="text-[#fcf9f3]/50 text-xs truncate">{nome}</span>
                                <Check
                                  size={12}
                                  className={cn("ml-auto flex-shrink-0", field.value === sigla ? "opacity-100 text-[#C9A84C]" : "opacity-0")}
                                />
                              </CommandItem>
                            ))}
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <button
              type="submit"
              className="w-full text-[#0f1c2c] text-[10px] uppercase tracking-[0.3em] font-bold py-4 mt-2 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" }}
              data-testid="button-submit-cta"
            >
              Falar no WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
            <div className="text-[9px] text-[#fcf9f3]/50 text-center uppercase tracking-[0.15em] pt-1">
              Você será redirecionado para o WhatsApp
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
