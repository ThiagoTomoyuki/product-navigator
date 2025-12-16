import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import baseIcon from '@/assets/base-icon.jpeg';
import contagemIcon from '@/assets/contagem-icon.jpeg';
import prevencaoIcon from '@/assets/prevencao-icon.jpeg';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
}

const projects: Project[] = [
  {
    id: 'base',
    title: 'Base by Hipcom',
    subtitle: 'Inteligência para Decisões',
    image: baseIcon,
    context:
      'Donos de supermercados recebem muita informação todos os dias, mas não conseguem enxergar o que realmente importa. Os dados estão espalhados e cansativos de consultar, gerando atrasos, erros e perda de oportunidades de vendas.',
    challenge:
      'Transformar dados brutos em informações úteis para apoiar a tomada de decisões rápidas sobre estoque, preço, promoções e gestão da loja de forma prática e em tempo real.',
    solution:
      'Aplicativo simples e intuitivo onde o dono da loja vê todos os dados importantes em um único lugar, com gráficos e tabelas em tempo real. Inclui assistente de IA que conversa com o usuário e indica exatamente onde estão as informações desejadas. Gerentes com múltiplas lojas conseguem alternar entre elas no mesmo lugar.',
    result:
      'Gestores economizam tempo e tomam decisões em minutos ao invés de horas. Visão clara e centralizada de tudo o que acontece na empresa, melhorando a qualidade das decisões e aumentando a eficiência dos negócios.',
  },
  {
    id: 'contagem',
    title: 'Contagem by Hipcom',
    subtitle: 'Módulo de Inventário',
    image: contagemIcon,
    context:
      'Contar estoque no supermercado é complicado. O gerente precisa garantir que o estoque está certo, registrar quem pegou o quê e manter histórico. Muitos ainda usam papel, gerando confusão e perda de informação.',
    challenge:
      'Ajustar os estoques de forma eficaz e confiável, com rastreabilidade completa de quem ajustou, quantos produtos foram enviados e histórico de todas as operações.',
    solution:
      'Duas ferramentas conectadas: aplicativo para o balconista selecionar e ajustar produtos de forma rápida, e sistema gerencial para o gestor visualizar quantidade de produtos ajustados por funcionário, envios realizados e histórico completo.',
    result:
      'Coleta de produtos mais eficiente, eliminação de papel no processo, envios bem organizados e rastreáveis. Gerente com controle total e estoque sempre correto, diminuindo problemas de descuadro.',
  },
  {
    id: 'prevencao',
    title: 'Prevenção by Hipcom',
    subtitle: 'Módulo de Validade',
    image: prevencaoIcon,
    context:
      'Produtos vencidos é dinheiro jogado fora. O gerente precisa saber quais produtos estão para vencer, quais venceram hoje e ontem. Sem controle, isso gera perda de receita e frustração.',
    challenge:
      'Gerenciar validades de produtos de forma proativa, identificando o que vence em breve e permitindo ações antes que o produto expire na prateleira.',
    solution:
      'Aplicativo onde o encarregado gerencia validades e visualiza produtos próximos do vencimento. Sistema permite criar estratégias como promoções antes do vencimento, realocação na gôndola ou doação.',
    result:
      'Menos produtos vencidos chegando à prateleira, redução de perdas e quebras. Funcionários agem antes do vencimento, melhorando a receita da loja com ganho financeiro real.',
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Projetos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Cases de </span>
            <span className="text-gradient">Produto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-justify">
            Cada produto nasceu de conversas reais com clientes como Cofesa Supermercados, Supermercado Violeta e Rolim Supermercado. 
            Escutei o que incomodava, entendi o negócio e entreguei exatamente o que precisava.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 text-left shadow-lg border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Preview */}
                <p className="text-sm text-foreground/70 line-clamp-3 mb-6 text-justify">
                  {project.context}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  <span>Ver case completo</span>
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Modal - Outside container to avoid z-index issues */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
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
                <p className="text-foreground text-justify">{selectedProject.context}</p>
              </div>

              {/* Challenge */}
              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Desafio
                </h4>
                <p className="text-foreground text-justify">{selectedProject.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Solução
                </h4>
                <p className="text-foreground text-justify">{selectedProject.solution}</p>
              </div>

              {/* Result */}
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Resultado
                </h4>
                <p className="text-foreground text-justify">{selectedProject.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
