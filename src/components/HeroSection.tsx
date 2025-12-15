import { MapPin, Mail, Linkedin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-subtle relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Product Owner | CSPO®
          </div>

          {/* Name */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Thiago Tomoyuki
          </h1>

          {/* Bio */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up leading-relaxed"
            style={{ animationDelay: '0.3s' }}
          >
            Engenheiro de Computação com 4 anos de experiência em gestão de projetos de tecnologia. 
            Especialista em desenvolvimento de produtos digitais e aplicativos para o mercado de varejo, 
            transformando necessidades de negócio em soluções tecnológicas de impacto.
          </p>

          {/* Contact Info */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-12 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>São Paulo, SP</span>
            </div>
            <a
              href="mailto:thiagotomoyuki@hotmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-primary" />
              <span>thiagotomoyuki@hotmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-tomoyuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin size={16} className="text-primary" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Skills Tags */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              'Gestão de Projetos',
              'Produtos Digitais',
              'UX/UI',
              'Scrum',
              'Liderança',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-card text-sm font-medium text-foreground shadow-sm border border-border hover:border-primary/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#trajetoria"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Scroll</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
