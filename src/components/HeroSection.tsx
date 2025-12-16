import { MapPin, Mail, Linkedin, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
const HeroSection = () => {
  return <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-subtle relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Photo */}
          <div style={{
          animationDelay: '0.1s'
        }} className="relative inline-block mb-8 animate-fade-up">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl shadow-primary/20">
              <img src={profilePhoto} alt="Thiago Tomoyuki" className="w-full h-full rounded-full object-cover" />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-card animate-pulse" />
          </div>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold mb-6 animate-fade-up backdrop-blur-sm border border-primary/20" style={{
          animationDelay: '0.15s'
        }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Product Owner | CSPO®
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            <span className="text-foreground">Thiago </span>
            <span className="text-gradient">Tomoyuki</span>
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up leading-relaxed text-justify" style={{
          animationDelay: '0.3s'
        }}>
            Engenheiro de Computação pelo IMT com especialização em Gestão de Projetos. 
            4 anos como Product Owner na Hipcom ERP, desenvolvendo soluções para varejo que atendem mais de 600 clientes.
            Transformo problemas reais em produtos que funcionam — entendendo o negócio e entregando resultados concretos.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-12 animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>São Paulo, SP</span>
            </div>
            <a href="mailto:thiagotomoyuki@hotmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" />
              <span>thiagotomoyuki@hotmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/thiago-tomoyuki/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin size={16} className="text-primary" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{
          animationDelay: '0.5s'
        }}>
            {[{
            name: 'Gestão de Projetos',
            icon: '📊'
          }, {
            name: 'Produtos Digitais',
            icon: '🚀'
          }, {
            name: 'UX/UI',
            icon: '🎨'
          }, {
            name: 'Scrum',
            icon: '⚡'
          }, {
            name: 'Liderança',
            icon: '👥'
          }].map(skill => <span key={skill.name} className="group px-5 py-2.5 rounded-xl bg-card/80 backdrop-blur-sm text-sm font-medium text-foreground shadow-md border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <span className="mr-2 group-hover:animate-bounce inline-block">{skill.icon}</span>
                {skill.name}
              </span>)}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#trajetoria" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;