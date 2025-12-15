import { Mail, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground mb-12">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato para discutirmos como posso contribuir com seu projeto.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="mailto:thiagotomoyuki@hotmail.com"
              className="group bg-card rounded-xl p-6 border border-border card-hover hover:border-primary/30 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">E-mail</span>
              <span className="text-xs text-muted-foreground">thiagotomoyuki@hotmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/thiago-tomoyuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-6 border border-border card-hover hover:border-primary/30 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">LinkedIn</span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Perfil</span>
                <ArrowUpRight size={12} />
              </div>
            </a>

            <a
              href="tel:+5511999665053"
              className="group bg-card rounded-xl p-6 border border-border card-hover hover:border-primary/30 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Telefone</span>
              <span className="text-xs text-muted-foreground">+55 11 9 9966-5053</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
