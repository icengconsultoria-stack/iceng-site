// Configuração de produtos com links de preview
// Usando GitHub como CDN para amostras (econômico e sem custos adicionais)

export const productsWithPreview = [
  {
    id: 1,
    title: '18 Procedimentos Operacionais',
    subtitle: 'SGQ ISO 9001:2015 / PBQP-H',
    description:
      'Procedimentos operacionais e formulários para padronizar a rotina e fortalecer a base documental da empresa.',
    hotmartUrl: 'https://go.hotmart.com/S105270171H?dp=1',
    previewUrl: '/samples/procedimentos-amostra.pdf',
    previewType: 'pdf', // 'pdf', 'image', 'video'
    previewTitle: 'Amostra: Procedimento de Recebimento de Materiais',
  },
  {
    id: 2,
    title: 'Kit Instruções de Trabalho',
    subtitle: 'SGQ ISO 9001 / PBQP-H',
    description:
      'Instruções práticas para orientar a execução, melhorar o padrão operacional e apoiar a implantação.',
    hotmartUrl: 'https://go.hotmart.com/V105270264E',
    previewUrl: '/samples/instrucoes-amostra.pdf',
    previewType: 'pdf',
    previewTitle: 'Amostra: Instrução de Trabalho - Segurança',
  },
  {
    id: 3,
    title: 'Kit SST',
    subtitle: 'PCMAT · PCMSO · PPRA · PGR',
    description:
      'Material voltado à estrutura de segurança do trabalho, com foco em organização e conformidade documental.',
    hotmartUrl: 'https://go.hotmart.com/H105270528Y',
    previewUrl: '/samples/sst-amostra.pdf',
    previewType: 'pdf',
    previewTitle: 'Amostra: Checklist de Segurança do Trabalho',
  },
  {
    id: 4,
    title: 'Kit ITs + Manual da Qualidade',
    subtitle: 'SGQ ISO 9001 / PBQP-H',
    description:
      'Conteúdo para apoiar a padronização, orientar a equipe e consolidar a base do sistema de gestão.',
    hotmartUrl: 'https://go.hotmart.com/F105269835T',
    previewUrl: '/samples/its-manual-amostra.pdf',
    previewType: 'pdf',
    previewTitle: 'Amostra: Instruções de Trabalho Selecionadas',
  },
  {
    id: 5,
    title: 'Kit SGQ Completo',
    subtitle: 'ISO 9001 e PBQP-H',
    description:
      'A solução mais completa para quem quer acelerar a implantação com documentos, controles e estrutura integrada.',
    hotmartUrl: 'https://go.hotmart.com/L105258643W',
    previewUrl: '/samples/sgq-completo-amostra.pdf',
    previewType: 'pdf',
    previewTitle: 'Amostra: Estrutura Completa do SGQ',
    featured: true,
  },
  {
    id: 6,
    title: 'Kit SGQ Premium',
    subtitle: 'ISO 9001 e PBQP-H + Checklist',
    description:
      'Versão premium com checklist e recursos extras para quem deseja mais clareza, apoio e agilidade no processo.',
    hotmartUrl: 'https://go.hotmart.com/L105261429W?dp=1',
    previewUrl: '/samples/sgq-premium-amostra.pdf',
    previewType: 'pdf',
    previewTitle: 'Amostra: Kit Premium com Checklists',
    featured: true,
  },
]

// Função para obter produto com preview
export function getProductWithPreview(productId) {
  return productsWithPreview.find((p) => p.id === productId)
}

// Função para verificar se preview existe
export function hasPreview(productId) {
  const product = getProductWithPreview(productId)
  return product && product.previewUrl
}
