export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CORTEX",
    "url": "https://CORTEX.com.br",
    "logo": "https://CORTEX.com.br/logo.png",
    "description": "Soluções tecnológicas para automação de processos, integração de sistemas e inteligência artificial aplicada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-33-99949-3748",
      "contactType": "customer service",
      "email": "contato@CORTEX.com.br"
    },
    "sameAs": [
      "https://facebook.com/CORTEX",
      "https://twitter.com/CORTEX",
      "https://linkedin.com/company/CORTEX",
      "https://instagram.com/CORTEX"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Automação de Processos",
        "description": "Transformamos tarefas manuais e repetitivas em processos automáticos que funcionam de forma inteligente"
      },
      {
        "@type": "Service",
        "name": "Integração de Sistemas",
        "description": "Conectamos os diversos softwares e plataformas que sua empresa já utiliza para que eles conversem entre si"
      },
      {
        "@type": "Service",
        "name": "Assistentes Virtuais Inteligentes",
        "description": "Desenvolvemos chatbots e assistentes virtuais que utilizam inteligência artificial para interagir de forma natural"
      },
      {
        "@type": "Service",
        "name": "Aplicativos e Sistemas Sob Medida",
        "description": "Criamos softwares e aplicativos totalmente personalizados para atender às necessidades específicas da sua empresa"
      },
      {
        "@type": "Service",
        "name": "Inteligência Artificial Aplicada",
        "description": "Utilizamos a Inteligência Artificial para analisar dados e encontrar padrões, prever tendências e gerar insights"
      },
      {
        "@type": "Service",
        "name": "Tratamento e Organização de Dados",
        "description": "Transformamos dados brutos em informações claras, confiáveis e prontas para serem usadas na tomada de decisões"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}