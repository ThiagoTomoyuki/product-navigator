import { useState } from 'react';
import { BarChart3, Package, ShieldCheck, ChevronRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
}

const projects: Project[] = [
  {
    id: 'base',
    title: 'Base by Hipcom',
    subtitle: 'Dashboard de Inteligência de Negócios',
    icon: BarChart3,
    color: 'bg-primary',
    context:
      'Gestores de varejo precisavam acessar dados de performance de suas lojas de forma rápida e centralizada para tomar decisões estratégicas.',
    challenge:
      'Transformar dados brutos em informações úteis para apoiar a tomada de decisões. Mostrar informações essenciais de maneira prática, facilmente acessível e em tempo real.',
    solution:
      'Desenvolvimento de aplicativo com visualização de dados em gráficos e tabelas interativos. Sistema permite alternar entre lojas com permissão do usuário. Inclui assistente inteligente que indica graficos desejados através de conversa natural.',
    result:
      'Visualização centralizada dos dados importantes em um único lugar de maneira intuitiva, objetiva e clara de todos os setores. Economia significativa de tempo para os gestores na tomada de decisões estratégicas.',
  },
  {
    id: 'contagem',
    title: 'Contagem by Hipcom',
    subtitle: 'Módulo de Inventário',
    icon: Package,
    color: 'bg-accent',
    context:
      'Equipes de estoque enfrentavam dificuldades para realizar contagens precisas e manter histórico confiável dos ajustes realizados.',
    challenge:
      'Ajustar os estoques de forma eficaz e confiável, com visibilidade completa do histórico de envios e ajustes dos usuários.',
    solution:
      'Aplicação onde o usuário seleciona produtos para alteração de estoque. Sistema gerencial paralelo permite que gestores visualizem quantidade de envios e produtos ajustados por cada usuário.',
    result:
      'Mais eficiência na coleta e contagem dos produtos. Eliminação de papéis no processo. Melhora na organização dos envios e melhor gerenciamento das quantidades ajustadas nos estoques.',
  },
  {
    id: 'prevencao',
    title: 'Prevenção by Hipcom',
    subtitle: 'Módulo de Validade',
    icon: ShieldCheck,
    color: 'bg-primary',
    context:
      'Lojas de varejo enfrentavam perdas significativas por produtos vencidos, sem sistema eficiente para controle preventivo de validades.',
    challenge:
      'Gerenciamento de produtos vencidos, que vencem hoje e que estão para vencer. Ajudar o chão de loja a controlar as validades dos produtos de forma proativa.',
    solution:
      'Aplicação para gerenciamento completo de validades, permitindo retirada de produtos antes do vencimento. Sistema possibilita criação de estratégias preventivas para evitar que produtos cheguem ao vencimento.',
    result:
      'Melhora significativa no controle de produtos. Diminuição da perda por vencimento. Redução da quebra de produtos e melhoria na receita da empresa.',
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 bg-gradient-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cases de Produto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções desenvolvidas para o mercado de varejo, focadas em eficiência operacional e tomada de decisão.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-card rounded-2xl p-6 text-left shadow-sm border border-border card-hover hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center mb-4`}
                >
                  <Icon size={24} className="text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.subtitle}
                </p>

                {/* Preview */}
                <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                  {project.context}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Ver case completo</span>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-fade-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${selectedProject.color} flex items-center justify-center`}
                  >
                    <selectedProject.icon
                      size={24}
                      className="text-primary-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Context */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Contexto
                  </h4>
                  <p className="text-foreground">{selectedProject.context}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Desafio
                  </h4>
                  <p className="text-foreground">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Solução
                  </h4>
                  <p className="text-foreground">{selectedProject.solution}</p>
                </div>

                {/* Result */}
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    Resultado
                  </h4>
                  <p className="text-foreground">{selectedProject.result}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
