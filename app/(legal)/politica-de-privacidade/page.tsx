import type { Metadata } from "next"
import { LegalSection, LegalList, LegalHighlight } from "@/components/legal/legal-section"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Face Concept coleta, usa e protege seus dados pessoais conforme a LGPD.",
  robots: { index: false, follow: false },
}

const LAST_UPDATED = "22 de abril de 2025"
const EMAIL_DPO = "privacidade@faceconcept.com.br"
const EMAIL_CONTATO = "contato@faceconcept.com.br"

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      {/* Page header */}
      <div className="mb-12">
        <p className="font-ui font-light text-[10px] tracking-[0.3em] uppercase text-[var(--dourado)] mb-3">
          Documentos Legais
        </p>
        <h1 className="font-display text-[2.8rem] md:text-[3.6rem] font-light italic text-[var(--marrom-escuro)] leading-none mb-4">
          Política de Privacidade
        </h1>
        <p className="font-ui font-light text-[12px] text-[var(--texto-suave)] tracking-wide">
          Última atualização: {LAST_UPDATED}
        </p>
      </div>

      <LegalHighlight>
        Esta Política de Privacidade foi elaborada em conformidade com a <strong>Lei Geral de Proteção de Dados
        (LGPD, Lei n.&ordm; 13.709/2018)</strong> e descreve como a Face Concept coleta, utiliza, armazena e
        protege os dados pessoais de seus usuários e pacientes. Ao utilizar este site ou solicitar nossos
        serviços, você declara ter lido e concordado com esta política.
      </LegalHighlight>

      <div className="mt-10 space-y-0">

        <LegalSection title="1. Controlador dos Dados">
          <p>
            O <strong>controlador</strong> dos dados pessoais tratados por meio deste site é a <strong>Face
            Concept Clínica Estética</strong>, conforme identificação nos{" "}
            <a
              href="/termos-de-uso"
              className="text-[var(--dourado)] underline underline-offset-2 hover:text-[var(--marrom-escuro)] transition-colors"
            >
              Termos de Uso
            </a>.
          </p>
          <p>
            Para exercer seus direitos ou sanar dúvidas sobre o tratamento de dados, entre em contato com nosso
            Encarregado de Proteção de Dados (DPO) pelo e-mail: <strong>{EMAIL_DPO}</strong>.
          </p>
        </LegalSection>

        <LegalSection title="2. Dados Coletados">
          <p>Coletamos diferentes categorias de dados dependendo da forma de interação:</p>

          <p className="font-medium text-[var(--marrom)] mt-2">2.1 Dados fornecidos voluntariamente pelo usuário</p>
          <LegalList items={[
            "Nome completo e e-mail (ao entrar em contato via formulário ou e-mail).",
            "Número de telefone e WhatsApp (ao solicitar agendamento).",
            "Informações sobre interesse em procedimentos específicos.",
            "Dados de saúde informados voluntariamente durante triagem inicial (considerados dados sensíveis nos termos do Art. 5.°, II, da LGPD).",
          ]} />

          <p className="font-medium text-[var(--marrom)] mt-2">2.2 Dados coletados automaticamente</p>
          <LegalList items={[
            "Endereço IP e dados de geolocalização aproximada.",
            "Tipo de dispositivo, navegador e sistema operacional.",
            "Páginas acessadas, tempo de permanência e interações (via Google Analytics 4, condicionado ao consentimento).",
            "Cookies de sessão e preferências de consentimento.",
          ]} />

          <p className="font-medium text-[var(--marrom)] mt-2">2.3 Dados sensíveis</p>
          <p>
            Informações relacionadas à saúde (alergias, histórico de procedimentos, contraindicações) são
            classificadas como <strong>dados sensíveis</strong> nos termos do Art. 11 da LGPD e recebem
            tratamento diferenciado, com proteção reforçada e uso estritamente limitado à prestação do
            serviço clínico solicitado.
          </p>
        </LegalSection>

        <LegalSection title="3. Finalidade e Base Legal do Tratamento">
          <p>
            Os dados pessoais são tratados com base nas hipóteses legais previstas nos Arts. 7.&ordm; e 11 da
            LGPD, conforme descrito abaixo:
          </p>
          <LegalList items={[
            "Consentimento (Art. 7.°, I): uso de cookies de analytics, envio de comunicações de marketing, tratamento de dados sensíveis de saúde.",
            "Execução de contrato (Art. 7.°, V): agendamento, realização e acompanhamento de procedimentos.",
            "Cumprimento de obrigação legal (Art. 7.°, II): emissão de notas fiscais, obrigações do CFM/CFO relativas a prontuários.",
            "Legítimo interesse (Art. 7.°, IX): melhoria do site, segurança da informação, prevenção a fraudes.",
            "Tutela da saúde (Art. 11, II, f): tratamento de dados sensíveis necessários à prestação de serviços médicos e odontológicos.",
          ]} />
        </LegalSection>

        <LegalSection title="4. Compartilhamento de Dados">
          <p>
            A Face Concept não vende, aluga ou comercializa dados pessoais. Os dados podem ser compartilhados
            apenas nas seguintes situações:
          </p>
          <LegalList items={[
            "Com profissionais de saúde da própria clínica, exclusivamente para fins de atendimento.",
            "Com prestadores de serviços de tecnologia (hosting, CRM, ferramentas de agendamento) na condição de operadores, mediante contratos de confidencialidade e adequação à LGPD.",
            "Com o Google LLC, via Google Analytics, mediante consentimento prévio e nos termos dos Termos de Serviço da plataforma.",
            "Com autoridades públicas, quando exigido por lei, decisão judicial ou regulatória.",
            "Com sucessores em caso de fusão, aquisição ou reestruturação societária, garantidos os direitos dos titulares.",
          ]} />
        </LegalSection>

        <LegalSection title="5. Transferência Internacional de Dados">
          <p>
            Ao utilizar o Google Analytics 4, dados de navegação podem ser transferidos para servidores do
            Google nos Estados Unidos. O Google LLC participa do DPF (Data Privacy Framework) e adota
            cláusulas contratuais padrão em conformidade com as exigências da ANPD. Esta transferência ocorre
            apenas mediante consentimento expresso do usuário.
          </p>
        </LegalSection>

        <LegalSection title="6. Cookies e Tecnologias de Rastreamento">
          <p>
            Utilizamos os seguintes tipos de cookies:
          </p>
          <LegalList items={[
            "Cookies estritamente necessários: essenciais para o funcionamento do site (sessão, preferências de consentimento). Não requerem consentimento.",
            "Cookies de analytics (Google Analytics 4): coletam dados de comportamento de navegação de forma pseudonimizada. Requerem consentimento explícito.",
            "Cookies de marketing: atualmente não utilizados. Caso sejam implementados, serão submetidos a consentimento específico.",
          ]} />
          <p>
            Implementamos o <strong>Consent Mode v2 do Google</strong>, que restringe o processamento de dados
            de analytics até que o usuário conceda consentimento, em conformidade com as diretrizes da ANPD e
            do GDPR europeu.
          </p>
          <p>
            Você pode gerenciar suas preferências de cookies a qualquer momento clicando em{" "}
            <strong>Preferências de Cookies</strong> no banner exibido ao acessar o site, ou limpando os dados
            de navegação do seu dispositivo.
          </p>
        </LegalSection>

        <LegalSection title="7. Retenção de Dados">
          <LegalList items={[
            "Dados de navegação (analytics): retidos por até 14 meses conforme configuração padrão do GA4.",
            "Dados de contato e agendamento: retidos pelo período necessário à prestação do serviço e por até 5 anos após o encerramento do relacionamento, para fins de cumprimento de obrigações legais.",
            "Prontuários clínicos: retidos pelo prazo mínimo de 20 anos após a última consulta, conforme Resolução CFM n.° 1.638/2002 e CFO n.° 63/2005.",
            "Dados de consentimento: retidos enquanto necessários para demonstrar a base legal do tratamento.",
          ]} />
        </LegalSection>

        <LegalSection title="8. Direitos dos Titulares (Art. 18 da LGPD)">
          <p>
            Em conformidade com o Art. 18 da LGPD, você tem os seguintes direitos em relação aos seus dados:
          </p>
          <LegalList items={[
            "Confirmação: saber se tratamos dados seus.",
            "Acesso: obter cópia dos dados que possuímos sobre você.",
            "Correção: corrigir dados incompletos, inexatos ou desatualizados.",
            "Anonimização, bloqueio ou eliminação: para dados desnecessários ou tratados em desconformidade.",
            "Portabilidade: receber seus dados em formato estruturado.",
            "Eliminação: solicitar a exclusão dos dados tratados com base em consentimento.",
            "Informação: conhecer as entidades com quais compartilhamos seus dados.",
            "Revogação do consentimento: retirar o consentimento a qualquer momento, sem prejuízo das atividades realizadas anteriormente.",
            "Oposição: se opor ao tratamento realizado com base em legítimo interesse.",
            "Revisão de decisões automatizadas: solicitar revisão de decisões tomadas unicamente por meios automatizados.",
          ]} />
          <p>
            Para exercer qualquer desses direitos, envie solicitação para <strong>{EMAIL_DPO}</strong>. Atendemos
            no prazo de até 15 dias úteis, conforme o Art. 19 da LGPD.
          </p>
        </LegalSection>

        <LegalSection title="9. Segurança da Informação">
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra
            acesso não autorizado, destruição, perda, alteração ou divulgação indevida, incluindo:
          </p>
          <LegalList items={[
            "Transmissão de dados via protocolo HTTPS com certificado SSL/TLS.",
            "Controle de acesso baseado em funções (RBAC) para sistemas internos.",
            "Pseudonimização de dados de analytics conforme configuração do GA4.",
            "Revisão periódica dos contratos com operadores de dados.",
            "Treinamento da equipe sobre práticas de proteção de dados.",
          ]} />
          <p>
            Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a
            Face Concept notificará a ANPD e os titulares afetados nos prazos previstos na LGPD.
          </p>
        </LegalSection>

        <LegalSection title="10. Dados de Crianças e Adolescentes">
          <p>
            Não coletamos intencionalmente dados pessoais de menores de 18 anos por meio deste site. Se
            tomarmos conhecimento de que dados de menores foram coletados sem consentimento dos responsáveis,
            procederemos à exclusão imediata, salvo quando necessário para cumprimento de obrigação legal
            relativa a atendimento clínico com autorização dos responsáveis.
          </p>
        </LegalSection>

        <LegalSection title="11. Alterações nesta Política">
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas
            práticas, em requisitos legais ou em serviços tecnológicos utilizados. A data de última atualização
            é sempre indicada no topo do documento. Alterações significativas serão comunicadas por meio de
            aviso destacado no site.
          </p>
        </LegalSection>

        <LegalSection title="12. Contato e Canal de Atendimento ao Titular">
          <p>
            Para exercer seus direitos, tirar dúvidas ou fazer reclamações sobre o tratamento de seus dados:
          </p>
          <LegalList items={[
            `Encarregado de Proteção de Dados (DPO): ${EMAIL_DPO}`,
            `Contato geral: ${EMAIL_CONTATO}`,
            "Instagram: @clinicfaceconcept",
          ]} />
          <p>
            Caso não obtenha resposta satisfatória, você pode registrar reclamação junto à{" "}
            <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> em{" "}
            <a
              href="https://www.gov.br/anpd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dourado)] underline underline-offset-2 hover:text-[var(--marrom-escuro)] transition-colors"
            >
              www.gov.br/anpd
            </a>.
          </p>
        </LegalSection>

      </div>
    </>
  )
}
