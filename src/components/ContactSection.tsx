import { Mail, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Vamos </span>
            <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg text-justify">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato para discutirmos como posso contribuir com seu projeto.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="mailto:thiagotomoyuki@hotmail.com"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Mail size={28} className="text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">E-mail</span>
              <span className="text-sm text-muted-foreground">thiagotomoyuki@hotmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/thiago-tomoyuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Linkedin size={28} className="text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">LinkedIn</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Ver perfil</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            <a
              href="tel:+5511999665053"
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Phone size={28} className="text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">Telefone</span>
              <span className="text-sm text-muted-foreground">+55 11 9 9966-5053</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
