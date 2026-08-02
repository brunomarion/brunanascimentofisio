import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import brunaAsset from "@/assets/bruna-perfil.png.asset.json";
import logoAsset from "@/assets/logo.jpg.asset.json";
import sobreAsset from "@/assets/sobre-atendimento.png.asset.json";
import dep1 from "@/assets/dep-1.jpg";
import dep2 from "@/assets/dep-2.jpg";
import dep3 from "@/assets/dep-3.jpg";
import {
  Baby,
  Check,
  ClipboardList,
  HandHeart,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Ribbon,
  ScanHeart,
  Sparkles,
  Stethoscope,
  Sun,
  Waves,
  X,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/5583999072800?text=Ol%C3%A1%2C%20Bruna!%20%F0%9F%98%8A%20Encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%3F";
const INSTAGRAM = "https://www.instagram.com/brunanascimento_fisio";

const menuLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={containerRef} className="md:hidden">
      <div className="flex shrink-0 items-center gap-2">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:opacity-90"
        >
          Agendar
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:bg-secondary/60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full origin-top overflow-hidden border-b border-border/60 bg-background transition-all duration-300 ease-out ${
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 py-4">
          <ul className="divide-y divide-border/60">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-base text-foreground/85 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const TITLE =
  "Bruna Nascimento | Fisioterapeuta DermatoFuncional em João Pessoa | Pós-Parto, Pré e Pós Operatório, Laserterapia, Taping Terapêutico e Tratamento de Estrias";
const DESCRIPTION =
  "Bruna Nascimento é Fisioterapeuta DermatoFuncional em João Pessoa, especializada no cuidado com a mulher. Atendimento humanizado em pós-parto, pré e pós-operatório, laserterapia, taping terapêutico e tratamento de estrias. Agende sua avaliação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const especialidades = [
  {
    icon: Baby,
    title: "Pós Parto",
    text: "Auxílio na recuperação do corpo após a gestação, reduzindo dores, inchaços e acelerando o retorno das funções corporais.",
  },
  {
    icon: ClipboardList,
    title: "Pré Operatório",
    text: "Preparação do organismo antes da cirurgia para favorecer uma recuperação mais rápida e eficiente.",
  },
  {
    icon: Stethoscope,
    title: "Intra e Pós Operatório Facial e Corporal",
    text: "Tratamentos especializados para reduzir edema, fibroses, aderências, dores e acelerar o processo de cicatrização.",
  },
  {
    icon: Sun,
    title: "Laserterapia",
    text: "Tecnologia que acelera a regeneração dos tecidos, reduz inflamações, alivia dores e potencializa a recuperação.",
  },
  {
    icon: ScanHeart,
    title: "Tratamento de Estrias",
    text: "Protocolos personalizados para melhorar textura, coloração e aparência das estrias, promovendo mais autoestima.",
  },
  {
    icon: Ribbon,
    title: "Taping Terapêutico",
    text: "Aplicação de bandagens elásticas para auxiliar na recuperação funcional, reduzir edemas, melhorar a circulação, aliviar dores e potencializar os resultados dos tratamentos pós-operatórios, pós-parto e demais protocolos da fisioterapia dermatofuncional.",
  },
];

const beneficios = [
  "Atendimento Humanizado",
  "Plano Individualizado",
  "Recuperação Mais Rápida",
  "Redução de Fibroses e Edemas",
  "Técnicas Modernas, Laserterapia e Taping Terapêutico",
  "Mais Saúde, Bem-estar e Autoestima",
];

const etapas = [
  {
    title: "Agendamento",
    text: "Você fala diretamente pelo WhatsApp e escolhe o melhor horário para o seu momento.",
  },
  {
    title: "Avaliação Completa",
    text: "Escuta atenta, análise detalhada do seu corpo, histórico e objetivos.",
  },
  {
    title: "Plano Personalizado",
    text: "Protocolo exclusivo com as técnicas mais indicadas para a sua fase de recuperação.",
  },
  {
    title: "Acompanhamento da Evolução",
    text: "Reavaliações contínuas para ajustar o tratamento e garantir resultados seguros.",
  },
];

const diferenciais = [
  { icon: HandHeart, title: "Atendimento Individualizado" },
  { icon: Waves, title: "Ambiente Acolhedor" },
  { icon: Sparkles, title: "Técnicas Atualizadas" },
  { icon: ClipboardList, title: "Protocolos Personalizados" },
  { icon: HeartPulse, title: "Atendimento Humanizado" },
  {
    icon: Ribbon,
    title: "Taping Terapêutico",
    text: "Recurso complementar para potencializar os resultados dos tratamentos.",
  },
];

const depoimentos = [
  {
    name: "Marina L.",
    photo: dep1,
    text: "Fiz o pós-operatório com a Bruna e me senti cuidada do início ao fim. O inchaço reduziu rápido e ela explicava cada etapa com muita paciência.",
  },
  {
    name: "Camila R.",
    photo: dep2,
    text: "No pós-parto eu estava insegura com meu corpo. O acompanhamento foi humano, leve e devolveu minha confiança em poucas semanas.",
  },
  {
    name: "Juliana S.",
    photo: dep3,
    text: "Tratei estrias antigas sem grandes expectativas e me surpreendi. Protocolo personalizado, ambiente acolhedor e resultado visível.",
  },
];

const faq = [
  {
    q: "Quando posso iniciar o tratamento após a cirurgia?",
    a: "Na maioria dos casos o tratamento começa nos primeiros dias após a liberação do seu cirurgião. Quanto mais cedo iniciarmos, mais confortável e eficiente tende a ser a recuperação — e a avaliação define com segurança o momento ideal para você.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Cada corpo responde de forma única. Após a avaliação você recebe uma estimativa realista de sessões, com reavaliações ao longo do processo para ajustar o plano sempre que necessário.",
  },
  {
    q: "O tratamento para estrias realmente funciona?",
    a: "Sim. Com protocolos personalizados e constância é possível melhorar textura, coloração e aparência das estrias. Os resultados são progressivos e sempre alinhados de forma transparente com você.",
  },
  {
    q: "Como funciona a avaliação inicial?",
    a: "É um encontro tranquilo e sem pressa: escuto sua história, avalio seu corpo, esclareço dúvidas e apresento o plano de tratamento mais indicado para a sua fase, com objetivos claros.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href={INSTAGRAM} className="sr-only focus:not-sr-only">
        Instagram de Bruna Nascimento
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
          <img
            src={logoAsset.url}
            alt="Logo Bruna Nascimento Fisioterapia Especializada"
            className="h-10 w-auto rounded-md sm:h-12"
            width={240}
            height={72}
          />
          <nav className="hidden shrink-0 items-center gap-5 md:flex">
            <a
              href="#especialidades"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Especialidades
            </a>
            <a
              href="#sobre"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Sobre
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Agendar
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden
          className="gradient-brand pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-secondary opacity-40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-secondary/50 px-4 py-2 text-xs tracking-wide text-secondary-foreground sm:text-sm">
              <Sparkles className="h-4 w-4 shrink-0 text-primary" />
              Bruna Nascimento | Fisioterapeuta DermatoFuncional
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Bruna Nascimento
              </h1>
              <p className="mt-4 font-display text-xl leading-snug text-primary sm:text-2xl">
                Fisioterapeuta DermatoFuncional especialista no cuidado com a mulher.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-balance-pretty text-base leading-relaxed text-muted-foreground">
                Recupere sua autoestima, acelere sua recuperação e cuide do seu corpo com um
                atendimento humanizado, individualizado e baseado em evidências.
              </p>
            </Reveal>

            <Reveal delay={220} as="div">
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Pós Parto",
                  "Pré, Intra e Pós Cirurgias Plásticas Faciais e Corporais",
                  "Laserterapia",
                  "Tratamento de Estrias",
                  "Taping Terapêutico",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280} as="div">
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Agendar Avaliação
                </a>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Atendimento em João Pessoa - PB
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div
              aria-hidden
              className="gradient-brand absolute -inset-4 rounded-[3rem] opacity-30 blur-2xl"
            />
            <img
              src={brunaAsset.url}
              alt="Bruna Nascimento, fisioterapeuta dermatofuncional, em sua clínica em João Pessoa"
              width={1152}
              height={1379}
              className="relative w-full rounded-[2.5rem] object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <img
              src={atendimento}
              alt="Bruna Nascimento realizando atendimento de fisioterapia dermatofuncional"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Sobre</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Muito além da estética. Um cuidado completo para a saúde da mulher.
            </h2>
            <div className="mt-6 space-y-4 text-balance-pretty leading-relaxed text-muted-foreground">
              <p>
                Bruna Nascimento é Fisioterapeuta DermatoFuncional especializada no cuidado com a
                mulher, oferecendo tratamentos personalizados para promover saúde, recuperação,
                bem-estar e autoestima.
              </p>
              <p>
                Seu atendimento é pautado em uma abordagem humanizada, aliando conhecimento
                científico, técnicas modernas e acompanhamento individualizado para garantir
                resultados seguros e eficientes.
              </p>
              <p>
                Cada paciente recebe um plano de tratamento exclusivo, respeitando suas
                necessidades, objetivos e fase de recuperação.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="mx-auto max-w-6xl px-5 pb-20 lg:pb-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Especialidades</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Tratamentos com propósito e precisão</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/70 transition-colors duration-500 group-hover:bg-primary/15">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 text-lg leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl leading-tight text-secondary-foreground sm:text-4xl">
              Por que escolher o atendimento da Bruna Nascimento?
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 60}
                className="flex items-start gap-4 rounded-2xl bg-background/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/12">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm font-medium leading-relaxed">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Como funciona</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Um caminho simples e cuidadoso</h2>
        </Reveal>
        <ol className="relative mt-14 space-y-10 border-l border-border pl-10">
          {etapas.map((etapa, i) => (
            <Reveal key={etapa.title} as="li" delay={i * 90} className="relative">
              <span className="absolute -left-[3.15rem] flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground shadow-card">
                {i + 1}
              </span>
              <h3 className="text-xl">{etapa.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{etapa.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:pb-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Diferenciais</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Cuidado de alto padrão em cada detalhe</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="rounded-3xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card"
            >
              <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-base">{item.title}</h3>
              {item.text ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:pb-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Depoimentos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Histórias de quem se sentiu cuidada</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 90}
              className="rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <p className="tracking-[0.2em] text-primary" aria-label="5 de 5 estrelas">
                ★★★★★
              </p>
              <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                “{d.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={d.photo}
                  alt={`Paciente ${d.name}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="text-sm font-medium">{d.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 pb-20 lg:pb-28">
        <Reveal className="gradient-brand mx-auto max-w-6xl rounded-[2.5rem] px-8 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-primary-foreground sm:text-4xl">
            Agende sua avaliação com Bruna Nascimento.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance-pretty text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
            Dê o primeiro passo para uma recuperação mais tranquila, saudável e segura com o
            acompanhamento de uma fisioterapeuta especializada no cuidado com a mulher.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-background px-9 py-4 text-sm font-medium text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/90"
          >
            <MessageCircle className="h-4 w-4" />
            Quero agendar agora
          </a>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-20 lg:pb-28">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Dúvidas</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Perguntas frequentes</h2>
        </Reveal>
        <Reveal delay={80} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="text-left font-display text-base hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* RODAPÉ */}
      <footer className="gradient-soft border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Logo Bruna Nascimento"
              loading="lazy"
              width={280}
              height={84}
              className="h-14 w-auto rounded-lg"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Fisioterapeuta DermatoFuncional
              <br />
              Especialista no cuidado com a mulher
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              João Pessoa - PB
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
              WhatsApp: (83) 99907-2800
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4 shrink-0 text-primary" />
              @brunanascimento_fisio
            </a>
          </div>
          <div className="md:text-right">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Agendar Avaliação
            </a>
            <div className="mt-6 flex gap-3 md:justify-end">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground">
          Bruna Nascimento · © Todos os direitos reservados.
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Bruna Nascimento"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
