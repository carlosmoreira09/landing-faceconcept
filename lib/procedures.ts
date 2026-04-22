export type Procedure = {
  id: string
  badge: string
  title: string
  desc: string
  indications: string[]
  images: string[]
}

export type Category = {
  id: string
  label: string
  items: Procedure[]
}

export const categories: Category[] = [
  {
    id: "harmonizacao",
    label: "Harmonização Facial",
    items: [
      {
        id: "toxina",
        badge: "Harmonização Facial",
        title: "Toxina Botulínica",
        desc: "A toxina botulínica atua bloqueando temporariamente os sinais nervosos dos músculos tratados, suavizando linhas de expressão. O procedimento é rápido, minimamente invasivo e os resultados aparecem em até 15 dias.",
        indications: [
          "Linhas de expressão na testa e entre os olhos",
          "Pés de galinha ao redor dos olhos",
          "Elevação de sobrancelha (efeito lifting)",
          "Sorriso gengival",
          "Bruxismo (tensão na mandíbula)",
          "Hiperidrose (suor excessivo)",
        ],
        images: [
          "/images/procedimentos/skincare-tools.jpg",
          "/images/procedimentos/filler-syringe.jpg",
        ],
      },
      {
        id: "preenchedores",
        badge: "Harmonização Facial",
        title: "Preenchedores",
        desc: "Compostos de ácido hialurônico, os preenchedores restauram volume, definem contornos e suavizam sulcos. O tratamento é seguro, reversível e com resultado imediato.",
        indications: [
          "Sulcos nasolabiais e bigode chinês",
          "Volumização dos lábios",
          "Projeção e definição do queixo",
          "Olheiras (tear trough)",
          "Reposição de volume nas maçãs do rosto",
          "Harmonização do perfil facial",
        ],
        images: [
          "/images/procedimentos/filler-syringe.jpg",
          "/images/procedimentos/skincare-tools.jpg",
        ],
      },
      {
        id: "fios",
        badge: "Harmonização Facial",
        title: "Fios de PDO",
        desc: "Fios absorvíveis inseridos sob a pele para promover sustentação imediata e estimular a produção de colágeno progressivamente. Efeito lifting natural sem cirurgia.",
        indications: [
          "Flacidez facial e cervical",
          "Queda do contorno mandibular",
          "Sobrancelhas caídas",
          "Laxidão da pele no pescoço",
          "Complemento de outros tratamentos",
        ],
        images: [
          "/images/procedimentos/clinic-tools.jpg",
          "/images/procedimentos/skincare-tools.jpg",
        ],
      },
      {
        id: "bioestimuladores",
        badge: "Harmonização Facial",
        title: "Bioestimuladores de Colágeno",
        desc: "Substâncias injetáveis que estimulam os fibroblastos a produzirem mais colágeno, rejuvenescendo a pele de dentro para fora.",
        indications: [
          "Flacidez facial e corporal moderada",
          "Perda de volume difusa no rosto",
          "Melhora da qualidade geral da pele",
          "Prevenção do envelhecimento precoce",
          "Pós-emagrecimento",
        ],
        images: [
          "/images/procedimentos/skincare-tools.jpg",
          "/images/procedimentos/clinic-tools.jpg",
        ],
      },
      {
        id: "skinbooster",
        badge: "Harmonização Facial",
        title: "Skinbooster",
        desc: "Aplicação intradérmica de micropartículas de ácido hialurônico que promovem hidratação profunda. Resultado: pele luminosa com efeito glass skin.",
        indications: [
          "Pele desidratada e sem viço",
          "Poros dilatados e textura irregular",
          "Ressecamento por sol ou estresse",
          "Preparação da pele antes de eventos",
          "Rotina de skincare avançada",
        ],
        images: [
          "/images/procedimentos/skincare-tools.jpg",
          "/images/procedimentos/filler-syringe.jpg",
        ],
      },
      {
        id: "ultraformer",
        badge: "Harmonização Facial",
        title: "Ultraformer MPT",
        desc: "Ultrassom microfocado de alta intensidade (HIFU) para lifting e firmeza progressivos sem incisões.",
        indications: [
          "Flacidez facial e do pescoço",
          "Sobrancelhas e pálpebras caídas",
          "Redução de papada",
          "Lifting não cirúrgico",
          "Definição do contorno facial",
        ],
        images: [
          "/images/procedimentos/hifu-device.jpg",
          "/images/procedimentos/clinic-tools.jpg",
        ],
      },
    ],
  },
  {
    id: "odontologia",
    label: "Odontologia Especializada",
    items: [
      {
        id: "facetas",
        badge: "Odontologia Especializada",
        title: "Facetas em Resina e Porcelana",
        desc: "Lâminas ultrafinas para corrigir forma, cor e tamanho dos dentes. Em resina (consulta) ou porcelana (laboratório).",
        indications: [
          "Dentes com manchas ou coloração irregular",
          "Dentes lascados ou desgastados",
          "Pequenos espaços entre os dentes",
          "Forma irregular ou assimétrica",
          "Transformação estética do sorriso",
        ],
        images: [
          "/images/procedimentos/dental-veneers.jpg",
          "/images/procedimentos/teeth-whitening.jpg",
        ],
      },
      {
        id: "clareamento",
        badge: "Odontologia Especializada",
        title: "Clareamento Dental",
        desc: "Agentes à base de peróxido para remover manchas dos dentes. Realizado no consultório ou com moldeiras para casa.",
        indications: [
          "Dentes escurecidos por café, vinho ou cigarro",
          "Manchas por antibióticos na infância",
          "Escurecimento por envelhecimento",
          "Preparo antes de outros tratamentos",
          "Sorriso mais claro e harmonioso",
        ],
        images: [
          "/images/procedimentos/teeth-whitening.jpg",
          "/images/procedimentos/dental-veneers.jpg",
        ],
      },
      {
        id: "implantes",
        badge: "Odontologia Especializada",
        title: "Implantes",
        desc: "Parafuso de titânio para substituir a raiz do dente perdido, com coroa que imita o dente natural em estética e função.",
        indications: [
          "Perda de um ou mais dentes",
          "Uso incômodo de prótese removível",
          "Preservação do osso alveolar",
          "Reabilitação oral completa",
          "Solução permanente e estética",
        ],
        images: [
          "/images/procedimentos/dental-veneers.jpg",
          "/images/procedimentos/clinic-tools.jpg",
        ],
      },
      {
        id: "canal",
        badge: "Odontologia Especializada",
        title: "Tratamento Endodôntico",
        desc: "Remove a polpa infectada, higieniza e sela o dente, eliminando a dor e salvando o elemento dental.",
        indications: [
          "Dor de dente intensa e persistente",
          "Infecção ou abscesso dental",
          "Dente trincado com comprometimento da polpa",
          "Sensibilidade extrema ao calor e frio",
          "Necessidade de salvar um dente comprometido",
        ],
        images: [
          "/images/procedimentos/clinic-tools.jpg",
          "/images/procedimentos/dental-veneers.jpg",
        ],
      },
      {
        id: "proteses",
        badge: "Odontologia Especializada",
        title: "Próteses Dentárias",
        desc: "Reposição de dentes ausentes com próteses fixas ou removíveis, sempre personalizadas para cada caso.",
        indications: [
          "Perda parcial ou total dos dentes",
          "Reabilitação oral pós-implante",
          "Substituição de próteses antigas",
          "Melhora da função mastigatória",
          "Restauração da harmonia do sorriso",
        ],
        images: [
          "/images/procedimentos/dental-veneers.jpg",
          "/images/procedimentos/teeth-whitening.jpg",
        ],
      },
    ],
  },
]

export const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento!"
