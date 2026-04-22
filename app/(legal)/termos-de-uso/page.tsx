import type { Metadata } from "next"
import { LegalSection, LegalList, LegalHighlight } from "@/components/legal/legal-section"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso dos serviços da Face Concept Clínica Estética.",
  robots: { index: false, follow: false },
}

const LAST_UPDATED = "22 de abril de 2025"
const CNPJ = "XX.XXX.XXX/0001-XX" // substituir pelo CNPJ real
const EMAIL_CONTATO = "contato@faceconcept.com.br"
const WHATSAPP = "+55 (XX) XXXXX-XXXX"

export default function TermosDeUsoPage() {
  return (
    <>
      {/* Page header */}
      <div className="mb-12">
        <p className="font-ui font-light text-[10px] tracking-[0.3em] uppercase text-[var(--dourado)] mb-3">
          Documentos Legais
        </p>
        <h1 className="font-display text-[2.8rem] md:text-[3.6rem] font-light italic text-[var(--marrom-escuro)] leading-none mb-4">
          Termos de Uso
        </h1>
        <p className="font-ui font-light text-[12px] text-[var(--texto-suave)] tracking-wide">
          Última atualização: {LAST_UPDATED}
        </p>
      </div>

      <LegalHighlight>
        Ao acessar este site ou solicitar informações sobre nossos procedimentos, você concorda com os termos descritos
        abaixo. Leia com atenção antes de utilizar nossos serviços digitais ou presenciais.
      </LegalHighlight>

      <div className="mt-10 space-y-0">

        <LegalSection title="1. Identificação da Clínica">
          <p>
            <strong>Face Concept Clínica Estética</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob
            o n.&ordm; {CNPJ}, com sede em território brasileiro, é a titular e responsável por este website e pelos
            serviços de harmonização facial e odontologia estética prestados de forma presencial.
          </p>
          <p>
            As atividades desta clínica são regidas pelas normas do Conselho Federal de Medicina (CFM),
            Conselho Federal de Odontologia (CFO), Agência Nacional de Vigilância Sanitária (ANVISA) e
            demais legislações aplicáveis ao setor de saúde e estética no Brasil.
          </p>
        </LegalSection>

        <LegalSection title="2. Objeto e Finalidade do Site">
          <p>
            Este website tem caráter exclusivamente <strong>informativo e institucional</strong>. Nenhum conteúdo
            aqui disponibilizado constitui diagnóstico médico, prescrição, indicação terapêutica ou substituição
            à consulta presencial com profissional habilitado.
          </p>
          <LegalList items={[
            "Apresentar os serviços e procedimentos oferecidos pela Face Concept.",
            "Facilitar o contato e o agendamento de avaliações presenciais.",
            "Fornecer informações gerais sobre harmonização facial e odontologia estética.",
            "Divulgar conteúdo educativo sobre cuidados com a saúde e estética.",
          ]} />
        </LegalSection>

        <LegalSection title="3. Responsabilidades e Limitações">
          <p>
            A Face Concept empenha todos os esforços para manter as informações do site atualizadas e precisas,
            porém não se responsabiliza por:
          </p>
          <LegalList items={[
            "Decisões tomadas pelo usuário com base exclusivamente nas informações deste site sem consulta presencial.",
            "Resultados esperados por comparação a casos divulgados, pois cada organismo responde de forma individual.",
            "Indisponibilidade temporária do site por motivos técnicos, de manutenção ou força maior.",
            "Links externos que possam ser acessados a partir deste site, cujo conteúdo não é de responsabilidade da Face Concept.",
          ]} />
        </LegalSection>

        <LegalSection title="4. Propriedade Intelectual">
          <p>
            Todo o conteúdo deste site, incluindo textos, imagens, logotipos, vídeos, layouts e demais elementos
            visuais, é de propriedade exclusiva da Face Concept ou de seus parceiros licenciados, protegido pela
            Lei n.&ordm; 9.610/1998 (Lei de Direitos Autorais).
          </p>
          <p>
            É expressamente proibida a reprodução, cópia, distribuição ou qualquer forma de utilização do
            conteúdo sem autorização prévia e por escrito da Face Concept.
          </p>
        </LegalSection>

        <LegalSection title="5. Regulamentação dos Procedimentos">
          <p>
            Os procedimentos estéticos e odontológicos oferecidos pela Face Concept são realizados por
            profissionais devidamente habilitados e registrados nos respectivos conselhos de classe, em
            conformidade com:
          </p>
          <LegalList items={[
            "Resolução CFM n.° 2.294/2021 — define os procedimentos de harmonização orofacial de competência médica.",
            "Resolução CFO n.° 198/2019 — regulamenta a Harmonização Orofacial no âmbito da Odontologia.",
            "RDC ANVISA n.° 92/2023 e atualizações — regula produtos de preenchimento dérmico e toxina botulínica.",
            "Lei n.° 12.842/2013 — dispõe sobre o exercício da Medicina no Brasil.",
            "Lei n.° 5.081/1966 — regula o exercício da Odontologia no Brasil.",
            "Código de Ética Médica (Resolução CFM n.° 2.217/2018) e Código de Ética Odontológica.",
          ]} />
        </LegalSection>

        <LegalSection title="6. Agendamento e Avaliação">
          <p>
            O contato pelo site, WhatsApp ou redes sociais não configura contratação de serviço nem garante
            disponibilidade de agenda. A confirmação do atendimento ocorre apenas após contato direto com nossa
            equipe e confirmação formal do agendamento.
          </p>
          <p>
            A avaliação presencial é obrigatória antes da realização de qualquer procedimento. Nenhum tratamento
            é indicado, prescrito ou contratado remotamente.
          </p>
        </LegalSection>

        <LegalSection title="7. Publicidade e Vedações do CFM/CFO">
          <p>
            Em conformidade com as normas de publicidade médica e odontológica vigentes (Resolução CFM
            n.&ordm; 1.974/2011 e Resolução CFO n.&ordm; 185/2019), este site não:
          </p>
          <LegalList items={[
            "Promete resultados específicos ou garante eficácia de procedimentos.",
            "Utiliza comparações sensacionalistas ou imagens de antes e depois com finalidade meramente publicitária.",
            "Oferece procedimentos como promoções ou descontos de forma que induza o consumidor a erro.",
            "Divulga preços de procedimentos médicos ou odontológicos neste canal.",
          ]} />
        </LegalSection>

        <LegalSection title="8. Uso de Cookies e Rastreamento">
          <p>
            Este site utiliza cookies e tecnologias de rastreamento para fins de análise de tráfego (Google
            Analytics 4) e melhoria da experiência do usuário. O uso dessas tecnologias está condicionado ao
            consentimento expresso do usuário, nos termos da LGPD (Lei n.&ordm; 13.709/2018).
          </p>
          <p>
            Você pode gerenciar ou revogar seu consentimento a qualquer momento. Consulte nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="text-[var(--dourado)] underline underline-offset-2 hover:text-[var(--marrom-escuro)] transition-colors"
            >
              Política de Privacidade
            </a>{" "}
            para mais informações.
          </p>
        </LegalSection>

        <LegalSection title="9. Menores de Idade">
          <p>
            Este site não é direcionado a menores de 18 anos. Procedimentos estéticos em adolescentes somente
            são realizados com autorização expressa dos pais ou responsáveis legais e conforme avaliação
            clínica individual, observadas as restrições legais e éticas aplicáveis.
          </p>
        </LegalSection>

        <LegalSection title="10. Alterações nos Termos">
          <p>
            A Face Concept reserva-se o direito de modificar estes Termos de Uso a qualquer momento, mediante
            atualização da data de revisão no topo deste documento. Recomendamos a leitura periódica. O uso
            contínuo do site após alterações implica aceitação dos novos termos.
          </p>
        </LegalSection>

        <LegalSection title="11. Foro e Legislação Aplicável">
          <p>
            Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da comarca da sede
            da Face Concept para dirimir quaisquer controvérsias decorrentes da utilização deste site ou dos
            serviços prestados, com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>
        </LegalSection>

        <LegalSection title="12. Contato">
          <p>Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato:</p>
          <LegalList items={[
            `E-mail: ${EMAIL_CONTATO}`,
            `WhatsApp: ${WHATSAPP}`,
            "Instagram: @clinicfaceconcept",
          ]} />
        </LegalSection>

      </div>
    </>
  )
}
