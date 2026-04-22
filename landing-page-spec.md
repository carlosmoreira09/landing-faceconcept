# 🏥 Landing Page — Serviços & Procedimentos
**Prompt de construção para Claude Sonnet 4.6**

---

## 🎯 Objetivo

Construir uma landing page mobile-first para clínica de harmonização facial e odontologia especializada. A página lista procedimentos organizados em dois cards por categoria, com modais de detalhamento ao toque. O visual segue identidade refinada em paleta bege/dourado/marrom, com animações fluidas usando **Motion**, **Framer Motion** e **Swiper**.

---

## 🛠 Stack & Bibliotecas

| Biblioteca | Versão | Uso |
|---|---|---|
| React | 18+ | Base da aplicação |
| Framer Motion | latest | Animações de entrada, modais, hover |
| Motion (GSAP-like) | latest | Scroll-triggered reveals |
| Swiper.js | latest | Carrossel de imagens nos modais |
| Tailwind CSS | CDN core | Layout e utilitários base |

> **Instalar via npm:**
> ```bash
> npm install framer-motion motion swiper
> ```

---

## 🎨 Design Tokens

```css
:root {
  --bege-fundo:    #cfc7b8;
  --marrom:        #7a4f2e;
  --marrom-escuro: #5c3516;
  --dourado:       #a87445;
  --dourado-claro: #c9944e;
  --texto:         #3d2b1a;
  --texto-suave:   #6b5240;
}
```

**Fontes Google Fonts:**
- Display: `Cormorant Garamond` — pesos 300, 400, 600 (italic)
- UI: `Josefin Sans` — pesos 200, 300, 400

---

## 🖼 Imagens dos Procedimentos

> Baixar manualmente e adicionar à pasta `/public/images/procedimentos/`

| Procedimento | URL para Download |
|---|---|
| Aesthetic Clinic (geral) | https://i.pinimg.com/736x/aesthetic-clinic-tools.jpg |
| Skincare Treatment Tools | https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800 |
| Hyaluronic Filler Syringe | https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800 |
| Dental Veneers Close-up | https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800 |
| HIFU Device Equipment | https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800 |
| Teeth Whitening | https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800 |

> ⚠️ **Importante:** Todas as imagens são livres para uso comercial (Unsplash License). Nenhuma contém rostos — foco em equipamentos, texturas e detalhes de procedimentos.

**Nomes de arquivo sugeridos:**
```
/public/images/procedimentos/
  ├── clinic-tools.jpg
  ├── skincare-tools.jpg
  ├── filler-syringe.jpg
  ├── dental-veneers.jpg
  ├── hifu-device.jpg
  └── teeth-whitening.jpg
```

---

## 📐 Estrutura de Componentes

```
App
├── Header
│   ├── NavTags (Beleza · Harmonia · Confiança)
│   ├── HeroTitle (animated with Framer Motion)
│   └── HeroSubtitle
├── Divider (decorative)
├── ServiceCards
│   ├── Card (Harmonização Facial)
│   │   └── ServiceItem × 6 (clickable → opens Modal)
│   └── Card (Odontologia Especializada)
│       └── ServiceItem × 5 (clickable → opens Modal)
├── CTASection
│   ├── CTAText
│   └── CTAButton (animated on hover)
├── Footer
└── Modal (bottom sheet)
    ├── Handle bar
    ├── Badge (categoria)
    ├── Title
    ├── Divider
    ├── Description
    ├── ImageSwiper (Swiper.js carrossel)
    └── IndicationsList
```

---

## ✨ Animações Especificadas

### Entrada da página (Framer Motion)
```jsx
// Staggered fade-up para cada seção
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}
```

### HeroTitle (Framer Motion)
```jsx
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
>
  Cuidados<br/>que<br/>Transformam
</motion.h1>
```

### Cards hover (Framer Motion)
```jsx
<motion.div
  whileHover={{ scale: 1.01 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

### ServiceItem hover
```jsx
<motion.div
  whileHover={{ paddingLeft: 8, color: "var(--marrom)" }}
  transition={{ duration: 0.2 }}
>
```

### Modal bottom sheet (Framer Motion)
```jsx
// AnimatePresence + bottom sheet slide-up
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 300 }}
    >
```

### CTA Button
```jsx
<motion.a
  whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(92,53,22,0.42)" }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: "spring", stiffness: 400 }}
>
```

### Scroll reveals (Motion)
```jsx
import { animate, inView } from "motion"

inView(".card", ({ target }) => {
  animate(target, { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, easing: "ease-out" })
})
```

---

## 🎠 Swiper nos Modais

```jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

<Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  style={{ borderRadius: "12px", marginTop: "16px" }}
>
  {procedure.images.map((src, i) => (
    <SwiperSlide key={i}>
      <img src={src} alt={procedure.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
    </SwiperSlide>
  ))}
</Swiper>
```

**Personalização do Swiper (CSS):**
```css
.swiper-pagination-bullet { background: var(--dourado); }
.swiper-pagination-bullet-active { background: var(--marrom-escuro); }
```

---

## 📋 Dados dos Procedimentos

```js
const procedures = {
  toxina: {
    badge: "Harmonização Facial",
    title: "Toxina Botulínica",
    desc: "A toxina botulínica atua bloqueando temporariamente os sinais nervosos dos músculos tratados, suavizando linhas de expressão. O procedimento é rápido, minimamente invasivo e os resultados aparecem em até 15 dias.",
    indications: [
      "Linhas de expressão na testa e entre os olhos",
      "Pés de galinha ao redor dos olhos",
      "Elevação de sobrancelha (efeito lifting)",
      "Sorriso gengival",
      "Bruxismo (tensão na mandíbula)",
      "Hiperidrose (suor excessivo)"
    ],
    images: ["/images/procedimentos/skincare-tools.jpg", "/images/procedimentos/filler-syringe.jpg"]
  },
  preenchedores: {
    badge: "Harmonização Facial",
    title: "Preenchedores",
    desc: "Compostos de ácido hialurônico, os preenchedores restauram volume, definem contornos e suavizam sulcos. O tratamento é seguro, reversível e com resultado imediato.",
    indications: [
      "Sulcos nasolabiais e bigode chinês",
      "Volumização dos lábios",
      "Projeção e definição do queixo",
      "Olheiras (tear trough)",
      "Reposição de volume nas maçãs do rosto",
      "Harmonização do perfil facial"
    ],
    images: ["/images/procedimentos/filler-syringe.jpg", "/images/procedimentos/skincare-tools.jpg"]
  },
  fios: {
    badge: "Harmonização Facial",
    title: "Fios de PDO",
    desc: "Fios absorvíveis inseridos sob a pele para promover sustentação imediata e estimular a produção de colágeno progressivamente. Efeito lifting natural sem cirurgia.",
    indications: [
      "Flacidez facial e cervical",
      "Queda do contorno mandibular",
      "Sobrancelhas caídas",
      "Laxidão da pele no pescoço",
      "Complemento de outros tratamentos"
    ],
    images: ["/images/procedimentos/clinic-tools.jpg", "/images/procedimentos/skincare-tools.jpg"]
  },
  bioestimuladores: {
    badge: "Harmonização Facial",
    title: "Bioestimuladores de Colágeno",
    desc: "Substâncias injetáveis que estimulam os fibroblastos a produzirem mais colágeno, rejuvenescendo a pele de dentro para fora.",
    indications: [
      "Flacidez facial e corporal moderada",
      "Perda de volume difusa no rosto",
      "Melhora da qualidade geral da pele",
      "Prevenção do envelhecimento precoce",
      "Pós-emagrecimento"
    ],
    images: ["/images/procedimentos/skincare-tools.jpg", "/images/procedimentos/clinic-tools.jpg"]
  },
  skinbooster: {
    badge: "Harmonização Facial",
    title: "Skinbooster",
    desc: "Aplicação intradérmica de micropartículas de ácido hialurônico que promovem hidratação profunda. Resultado: pele luminosa com efeito glass skin.",
    indications: [
      "Pele desidratada e sem viço",
      "Poros dilatados e textura irregular",
      "Ressecamento por sol ou estresse",
      "Preparação da pele antes de eventos",
      "Rotina de skincare avançada"
    ],
    images: ["/images/procedimentos/skincare-tools.jpg", "/images/procedimentos/filler-syringe.jpg"]
  },
  ultraformer: {
    badge: "Harmonização Facial",
    title: "Ultraformer MPT",
    desc: "Ultrassom microfocado de alta intensidade (HIFU) para lifting e firmeza progressivos sem incisões.",
    indications: [
      "Flacidez facial e do pescoço",
      "Sobrancelhas e pálpebras caídas",
      "Redução de papada",
      "Lifting não cirúrgico",
      "Definição do contorno facial"
    ],
    images: ["/images/procedimentos/hifu-device.jpg", "/images/procedimentos/clinic-tools.jpg"]
  },
  facetas: {
    badge: "Odontologia Especializada",
    title: "Facetas em Resina e Porcelana",
    desc: "Lâminas ultrafinas para corrigir forma, cor e tamanho dos dentes. Em resina (consulta) ou porcelana (laboratório).",
    indications: [
      "Dentes com manchas ou coloração irregular",
      "Dentes lascados ou desgastados",
      "Pequenos espaços entre os dentes",
      "Forma irregular ou assimétrica",
      "Transformação estética do sorriso"
    ],
    images: ["/images/procedimentos/dental-veneers.jpg", "/images/procedimentos/teeth-whitening.jpg"]
  },
  clareamento: {
    badge: "Odontologia Especializada",
    title: "Clareamento Dental",
    desc: "Agentes à base de peróxido para remover manchas dos dentes. Realizado no consultório ou com moldeiras para casa.",
    indications: [
      "Dentes escurecidos por café, vinho ou cigarro",
      "Manchas por antibióticos na infância",
      "Escurecimento por envelhecimento",
      "Preparo antes de outros tratamentos",
      "Sorriso mais claro e harmonioso"
    ],
    images: ["/images/procedimentos/teeth-whitening.jpg", "/images/procedimentos/dental-veneers.jpg"]
  },
  implantes: {
    badge: "Odontologia Especializada",
    title: "Implantes",
    desc: "Parafuso de titânio para substituir a raiz do dente perdido, com coroa que imita o dente natural em estética e função.",
    indications: [
      "Perda de um ou mais dentes",
      "Uso incômodo de prótese removível",
      "Preservação do osso alveolar",
      "Reabilitação oral completa",
      "Solução permanente e estética"
    ],
    images: ["/images/procedimentos/dental-veneers.jpg", "/images/procedimentos/clinic-tools.jpg"]
  },
  canal: {
    badge: "Odontologia Especializada",
    title: "Tratamento Endodôntico",
    desc: "Remove a polpa infectada, higieniza e sela o dente, eliminando a dor e salvando o elemento dental.",
    indications: [
      "Dor de dente intensa e persistente",
      "Infecção ou abscesso dental",
      "Dente trincado com comprometimento da polpa",
      "Sensibilidade extrema ao calor e frio",
      "Necessidade de salvar um dente comprometido"
    ],
    images: ["/images/procedimentos/clinic-tools.jpg", "/images/procedimentos/dental-veneers.jpg"]
  },
  proteses: {
    badge: "Odontologia Especializada",
    title: "Próteses Dentárias",
    desc: "Reposição de dentes ausentes com próteses fixas ou removíveis, sempre personalizadas para cada caso.",
    indications: [
      "Perda parcial ou total dos dentes",
      "Reabilitação oral pós-implante",
      "Substituição de próteses antigas",
      "Melhora da função mastigatória",
      "Restauração da harmonia do sorriso"
    ],
    images: ["/images/procedimentos/dental-veneers.jpg", "/images/procedimentos/teeth-whitening.jpg"]
  }
}
```

---

## 📱 Responsividade

- Layout 100% **mobile-first** (max-width: 480px centrado)
- Cards full-width com `padding: 0 20px`
- Modal como **bottom sheet** nativo (desliza de baixo)
- Swiper com `slidesPerView: 1` no mobile
- Fontes fluidas com `clamp()`

---

## 🔗 Botão de Agendamento

Substituir o `href="#"` pelo link real:

```jsx
// WhatsApp direto
const WHATSAPP_LINK = "https://wa.me/55XXXXXXXXXXX?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento!"

// Ou link de agenda online
const AGENDA_LINK = "https://link-da-agenda.com"
```

---

## 📁 Estrutura de Pastas Sugerida

```
projeto/
├── public/
│   └── images/
│       └── procedimentos/
│           ├── clinic-tools.jpg
│           ├── skincare-tools.jpg
│           ├── filler-syringe.jpg
│           ├── dental-veneers.jpg
│           ├── hifu-device.jpg
│           └── teeth-whitening.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceItem.jsx
│   │   ├── Modal.jsx
│   │   ├── ImageSwiper.jsx
│   │   └── CTAButton.jsx
│   ├── data/
│   │   └── procedures.js
│   ├── styles/
│   │   └── globals.css
│   └── App.jsx
├── package.json
└── index.html
```

---

## 💡 Prompt sugerido para o Claude Sonnet 4.6

Cole esse prompt direto no Claude para gerar o projeto completo:

```
Construa uma landing page React mobile-first para uma clínica de harmonização facial e odontologia.

Stack: React 18, Framer Motion, Motion (animate/inView), Swiper.js, Tailwind CSS (CDN core only).

Design tokens:
- Fundo: #cfc7b8
- Marrom escuro: #5c3516
- Dourado: #a87445
- Texto: #3d2b1a
- Fontes: Cormorant Garamond (display) + Josefin Sans (UI)

Componentes:
1. Header com nav-tags, hero title animado com Framer Motion (stagger fade-up)
2. Dois cards de serviços (Harmonização Facial e Odontologia Especializada)
3. Cada ServiceItem abre um Modal bottom sheet animado com AnimatePresence
4. Dentro do modal: badge, título, descrição, Swiper com imagens do procedimento, lista de indicações
5. CTA button com whileHover e whileTap
6. Scroll reveals com Motion inView

Use os dados de procedures.js (fornecido abaixo) e as imagens em /public/images/procedimentos/.
Gere todos os componentes separados e um App.jsx principal.
```

---

*Documento gerado pela Aura Company — uso interno de projeto.*
