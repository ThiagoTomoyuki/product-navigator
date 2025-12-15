import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: 'work',
    title: 'Consultor de Projetos | Product Owner',
    organization: 'Hipcom ERP',
    period: 'Out 2022 - Atual',
    description:
      'Responsável pela gestão de projetos de tecnologia junto aos clientes do mercado de Varejo, desde análises estratégicas até a construção do cronograma de projetos.',
    highlights: [
      'Liderança de Squads multidisciplinares com 4 pessoas',
      'Desenvolvimento do aplicativo "Base by Hipcom"',
      'Relacionamento com clientes como Cofesa, Violeta e Rolim',
      'Gestão de Sprints e pipeline de entregas',
    ],
  },
  {
    type: 'work',
    title: 'Estagiário de Projetos de TI',
    organization: 'Hipcom ERP',
    period: 'Set 2021 - Set 2022',
    description:
      'Apoio ao Product Owner na gestão de demandas, desde planejamento de projetos até gestão do pipeline de entregas.',
    highlights: [
      'Participação em cerimônias Scrum',
      'Suporte na criação de fluxos UX/UI em Figma',
      'Construção de tasks diárias dos projetos',
    ],
  },
  {
    type: 'education',
    title: 'Pós-Graduação em Gestão de Projetos de TI',
    organization: 'Universidade São Judas Tadeu',
    period: 'Concluído em 2024',
    description: 'Especialização em Gestão de Projetos de TI e Metodologias Ágeis.',
  },
  {
    type: 'education',
    title: 'Bacharelado em Engenharia de Computação',
    organization: 'IMT - Instituto Mauá de Tecnologia',
    period: 'Concluído em 2022',
    description: 'Formação sólida em computação e engenharia de software.',
  },
  {
    type: 'certification',
    title: 'Certified Scrum Product Owner® (CSPO)',
    organization: 'Scrum Alliance | K21 Educação',
    period: '2024',
    description: 'Certificação oficial em Product Ownership com metodologia Scrum.',
  },
];

const getIcon = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return Briefcase;
    case 'education':
      return GraduationCap;
    case 'certification':
      return Award;
  }
};

const getTypeLabel = (type: TimelineItem['type']) => {
  switch (type) {
    case 'work':
      return 'Experiência';
    case 'education':
      return 'Formação';
    case 'certification':
      return 'Certificação';
  }
};

const TimelineSection = () => {
  return (
    <section id="trajetoria" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência & Formação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de aprendizado contínuo em gestão de projetos e desenvolvimento de produtos digitais.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timelineData.map((item, index) => {
            const Icon = getIcon(item.type);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div
                  className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-sm z-10`}
                >
                  <Icon size={14} className="text-primary" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover">
                    {/* Type Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        item.type === 'work'
                          ? 'bg-primary/10 text-primary'
                          : item.type === 'education'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {getTypeLabel(item.type)}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>

                    {/* Organization & Period */}
                    <p className="text-sm text-primary font-medium mb-1">
                      {item.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">{item.period}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && (
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
