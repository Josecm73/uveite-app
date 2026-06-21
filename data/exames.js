const EXAMES = [
{
  id:"oct",
  nome:"OCT — Tomografia de Coerência Óptica",
  descricao:"Exame de imagem de alta resolução da retina e coróide. Indispensável para avaliar EMC, DSR, atrofia e resposta ao tratamento.",
  achados:[
    {
      doenca:"Edema Macular Cistoide (EMC)",
      padrao:"Espaços cistoides anecoicos (hiporrefletivos) nas camadas nucleares internas e externas. Aumento da espessura retiniana central (>300μm). Aspecto 'favo de mel' em cortes horizontais.",
      utilidade:"Diagnóstico, quantificação, monitoramento de resposta ao tratamento. Decisão de injeção ITV.",
      imagem_descricao:"Cistos arredondados ou ovoides, anecoicos, múltiplos andares — 'colmeia de abelhas'"
    },
    {
      doenca:"Descolamento Seroso Retiniano (DSR) — VKH Aguda",
      padrao:"Fluido hiporrefletivo subretiniano bilateral, mais espesso no polo posterior. Pontos hiperrefletivos no espaço sub-retiniano (fibrina). Pregueamento da retina neurossensorial.",
      utilidade:"Diagnóstico de VKH aguda (múltiplos focos de DSR bilateral). Monitorar resolução após pulsoterapia.",
      imagem_descricao:"Elevação ondulante da retina neurossensorial com fluido claro abaixo — bilateral"
    },
    {
      doenca:"Coriorretinite Ativa (Toxoplasmose/TB/Sarcoidose)",
      padrao:"Desorganização hipperrefletiva das camadas retinianas internas e externas na lesão ativa. Sombra posterior (obscurecimento tecido profundo). Espessamento coroidal subjacente.",
      utilidade:"Delimitar extensão da lesão. Avaliar ameaça macular. Cicatriz: atrofia camadas externas + EPR.",
      imagem_descricao:"Massa hipperrefletiva desestruturada com sombreamento posterior — 'espiga de milho'"
    },
    {
      doenca:"Atrofia de Fotorreceptores (Birdshot / MEWDS)",
      padrao:"Disrupção/atenuação da linha elipsóide (IS/OS junction) e zona de interdigitação. Adelgaçamento da camada nuclear externa. EPR irregular.",
      utilidade:"Monitorar progressão em Birdshot (atrofia silenciosa). Avaliar recuperação em MEWDS.",
      imagem_descricao:"Linha elipsóide fragmentada ou ausente em áreas de doença ativa — zona de interdigitação irregular"
    },
    {
      doenca:"Neovascularização Coroidal (NVC) Tipo 1 e 2",
      padrao:"Tipo 1 (sub-EPR): elevação do EPR, às vezes plana. Fluido sub-retiniano adjacente. Tipo 2 (sub-retiniano): membrana hiperrefletiva acima do EPR com fluido. OCTA: rede vascular na camada coriocapilar.",
      utilidade:"Diagnóstico, guia para anti-VEGF, monitoramento de atividade.",
      imagem_descricao:"Elevação irregular do EPR com fluido sub-retiniano — OCTA mostra rede vascular florida"
    },
    {
      doenca:"Enhanced Depth Imaging OCT (EDI-OCT) — Espessura Coroidal",
      padrao:"Espessura coroidal aumentada na fase aguda (VKH, sarcoidose) — paquicoroidia inflamatória. Reduzida em doenças atróficas (Birdshot avançado, serpiginosa antiga).",
      utilidade:"VKH: espessura coroidal >350–400μm na fase aguda. Normaliza com tratamento.",
      imagem_descricao:"Coróide espessa difusa com vasos de Haller dilatados — VKH aguda bilateral"
    }
  ]
},
{
  id:"afg",
  nome:"Angiofluoresceinografia (AFG)",
  descricao:"Avalia circulação retiniana e coroidal com fluoresceína IV. Detecta vazamento vascular, isquemia, padrões de enchimento e cicatrizes.",
  achados:[
    {
      doenca:"Vasculite Retiniana (Behçet / Sarcoidose)",
      padrao:"Impregnação (staining) da parede vascular → leakage perivenoso tardio. Bainhas perivenosas hiperfluorescentes. Oclusões: hipofluorescência de segmento vascular. Neovascularização: hiperfluorescência precoce.",
      utilidade:"Documentar extensão da vasculite. Detectar oclusões silenciosas. Guiar fotocoagulação.",
      imagem_descricao:"Bainhas venosas brancas fluorescentes na fase precoce → halo de leakage tardio"
    },
    {
      doenca:"Edema Macular Cistoide (EMC)",
      padrao:"Fase precoce: hiperfluorescência peripapilar inicial. Fase tardia: padrão em 'pétala de flor' ou 'roseta' na mácula — enchimento dos cistos com fluoresceína.",
      utilidade:"Documentar EMC ativo. Complementar ao OCT — diferencia EMC verdadeiro de pseudoEMC.",
      imagem_descricao:"Roseta hiperfluorescente macular na fase tardia (8–10 min) — 'flor de margarida'"
    },
    {
      doenca:"Toxoplasmose Ocular (lesão ativa)",
      padrao:"Lesão ativa: hiperfluorescência precoce (hipervascularização/leakage) → staining tardio. Cicatriz: hipofluorescência central (atrofia EPR) com hiperfluorescência de borda (janela/staining).",
      utilidade:"Delimitar atividade vs. cicatriz. Avaliar vasculite perilesional.",
      imagem_descricao:"Lesão ativa: foco branco hiperfluorescente com halo de leakage. Cicatriz: 'anel de fogo'"
    },
    {
      doenca:"VKH Aguda",
      padrao:"Múltiplos pontos hiperfluorescentes precoces (nível do EPR) → pooling tardio com DSR. Edema de papila: hiperfluorescência da cabeça do NO. Fase crônica: hiperfluorescência de cicatrizes e 'sunset glow' em janela.",
      utilidade:"Diagnóstico de VKH aguda. Monitoramento de atividade.",
      imagem_descricao:"Centenas de pontos precoces brilhantes → confluência em grandes lagos de fluoresceína (pooling) tardio"
    },
    {
      doenca:"APMPPE",
      padrao:"Fase precoce: HIPOFLUORESCÊNCIA das lesões (bloqueio pelo edema/isquemia coriocapilar). Fase tardia: hiperfluorescência por staining (coloração da lesão). Lesões cicatrizadas: hipofluorescência persistente (atrofia EPR).",
      utilidade:"Diagnóstico diferencial de white dot syndromes. Distinguir APMPPE de sarcoidose/TB.",
      imagem_descricao:"Lesões apagam cedo (escuras) → iluminam tarde (staining) — 'foto negativa que revela'"
    },
    {
      doenca:"Birdshot",
      padrao:"Lesões Birdshot: hipofluorescência fraca precoce (discreta) → levemente hiperfluorescentes (staining) tardio. EMC associado: padrão em roseta. Leakage papilar e vasculite venosa frequentes.",
      utilidade:"Documentar vasculite, EMC e comprometimento de papila em Birdshot.",
      imagem_descricao:"Lesões ovoides pouco visíveis na AFG — ICGA as detecta muito melhor"
    }
  ]
},
{
  id:"icga",
  nome:"Angiografia com Indocianina Verde (ICGA)",
  descricao:"Moléculas grandes de ICG — avalia a circulação COROIDAL com muito mais detalhe que a AFG. Detecta lesões coroidianas invisíveis à oftalmoscopia e AFG.",
  achados:[
    {
      doenca:"VKH — Fase Aguda e Crônica",
      padrao:"Hipofluorescência coroidal DIFUSA bilateralmente nas fases precoce e tardia — representa inflamação coroidal ativa e isquemia coriocapilar. Lesões multifocais irregulares. Fase crônica: hipofluorescência persistente em cicatrizes.",
      utilidade:"Confirmar envolvimento coroidal difuso em VKH. Monitorar resposta ao tratamento (hipofluorescência melhora antes da AFG).",
      imagem_descricao:"Fundo escuro difuso bilateral — 'apagamento' da coróide inteira nas fases iniciais"
    },
    {
      doenca:"Sarcoidose Ocular",
      padrao:"Múltiplas áreas hipofluorescentes na coróide — granulomas coroidianos não visíveis à oftalmoscopia ou AFG. Distribuição aleatória, difusa. Hipofluorescência persistente tardiva.",
      utilidade:"Detectar granulomas coroidianos — aumenta a sensibilidade diagnóstica. Guiar biópsia?",
      imagem_descricao:"Pontos escuros múltiplos difusos sobre fundo coroidal — muito mais lesões que a AFG mostra"
    },
    {
      doenca:"Birdshot",
      padrao:"Hipofluorescência em forma ovoide, múltipla, correspondendo às lesões Birdshot — mas detecta 2–3x mais lesões que a oftalmoscopia direta! Precoce e tardiva.",
      utilidade:"Contagem precisa de lesões. Monitoramento objetivo da atividade. Resposta ao IS (lesões diminuem).",
      imagem_descricao:"Ovais escuros dispersos radialmente ao disco — muito mais numerosos que os vistos clinicamente"
    },
    {
      doenca:"MEWDS",
      padrao:"Pontos hipofluorescentes precoces e tardios nas áreas dos pontos brancos — correspondência 1:1 com lesões da AFG e FAF. Desaparecem com resolução clínica.",
      utilidade:"Confirmar diagnóstico. Monitorar resolução — achados ICGA desaparecem com cura clínica.",
      imagem_descricao:"Pontos escuros pequenos peripapilar — 'estrelas apagadas no fundo coroidal'"
    },
    {
      doenca:"NVC (Neovascularização Coroidal)",
      padrao:"NVC tipo 1 (polipóide/oculta): ICGA detecta melhor que AFG — hiperfluorescência focal precoce 'hot spot' ou rede vascular na fase intermediária.",
      utilidade:"Detectar NVC oculta ou tipo 1 não visível na AFG. Guiar PDT ou anti-VEGF.",
      imagem_descricao:"Ponto brilhante precoce — 'hot spot' — em área de elevação do EPR"
    }
  ]
},
{
  id:"octa",
  nome:"OCT Angiografia (OCTA)",
  descricao:"Imagem do fluxo sanguíneo em camadas retinianas e coroidianas SEM injeção de contraste. Revoluciona visualização de NVC e isquemia.",
  achados:[
    {
      doenca:"Neovascularização Coroidal (NVC)",
      padrao:"Rede vascular florida hiperfluxo na camada coriocapilar/Bruch. Aspecto 'medusa' ou 'carambola' — ramificações irregulares em todas as direções. NVC inativa: rede mais sutil com bordas menos definidas.",
      utilidade:"Diagnóstico de NVC sem injeção (seguro, rápido, repetível). Avaliação de atividade (leakage no OCT B-scan adjacente). Monitorar resposta ao anti-VEGF.",
      imagem_descricao:"Flor hipervascular no nível da coriocapilar — ramificações arborescentes em área da elevação de EPR"
    },
    {
      doenca:"Oclusão Retiniana / Isquemia",
      padrao:"Áreas de hipoperfusão capilar (signal void) na camada capilar superficial e profunda. Zonas avasculares foveais aumentadas. Vasos truncados nas margens da isquemia.",
      utilidade:"Quantificar isquemia retiniana. Distinguir oclusão arterial de venosa. Prognóstico visual.",
      imagem_descricao:"Áreas negras 'apagadas' na trama capilar — zonas de isquemia"
    },
    {
      doenca:"Vasculite Retiniana (Behçet / Sarcoidose)",
      padrao:"Sheathing (bainhas) como signal void nas paredes venosas. Microaneurismas como pontos de hiperfluxo. Zonas isquêmicas periféricas.",
      utilidade:"Objetivar vasculite sem injeção. Detectar oclusões silenciosas e neovascularização periférica.",
      imagem_descricao:"Veias com bainhas hipossinal — 'fantasmas de vasos' com ausência de fluxo no interior"
    }
  ]
},
{
  id:"faf",
  nome:"Autofluorescência do Fundo (FAF)",
  descricao:"Detecta lipofuscina no EPR sem contraste IV. Hiperautofluorescência = EPR estressado/acumulando lipofuscina. Hipoautofluorescência = atrofia do EPR.",
  achados:[
    {
      doenca:"APMPPE (fase ativa)",
      padrao:"HIPER-AF: lesões placóides ativas são hiperafluorescentes — EPR estressado acumulando lipofuscina. Fase cicatricial: HIPO-AF (atrofia EPR residual).",
      utilidade:"Monitorar atividade e resolução sem injeção. Distinguir lesões ativas de cicatrizes.",
      imagem_descricao:"Manchas brilhantes (hiper) na fase aguda → manchas escuras (hipo) na cicatriz"
    },
    {
      doenca:"MEWDS",
      padrao:"HIPER-AF: pontos hiperafluorescentes correspondendo aos pontos brancos clínicos. Desaparecem com resolução espontânea.",
      utilidade:"Confirmar diagnóstico. Monitorar resolução (padrão objetivo sem injeção).",
      imagem_descricao:"Constelação de pontos brilhantes peripapilar — 'estrelas cintilantes'"
    },
    {
      doenca:"Coroidite Serpiginosa",
      padrao:"Lesão ativa: HIPER-AF nas bordas ativas. Centro da lesão: HIPO-AF (atrofia de EPR). Progressão: nova borda hiper avança sobre EPR são.",
      utilidade:"Mapear extensão real das lesões. Monitorar atividade e progressão.",
      imagem_descricao:"Lesão escura (atrofia central) com anel brilhante ativo — 'halo de fogo' nas bordas"
    },
    {
      doenca:"Birdshot",
      padrao:"Atrofia EPR nas lesões: HIPO-AF. Pode mostrar mais lesões que a oftalmoscopia. EMC associado: padrão de HIPER-AF macular.",
      utilidade:"Monitorar progressão da atrofia. Avaliar EMC associado.",
      imagem_descricao:"Ovais escuros atróficos + mácula às vezes brilhante (EMC)"
    },
    {
      doenca:"EMC",
      padrao:"HIPER-AF macular em padrão radial — acúmulo de fotorreceptores degenerados ricos em lipofuscina nos espaços cistoides.",
      utilidade:"Detectar e monitorar EMC — pode mostrar EMC subclínico não visível na biomicroscopia.",
      imagem_descricao:"Mancha brilhante macular centralizada — 'sol macular'"
    }
  ]
},
{
  id:"lab",
  nome:"Exames Laboratoriais",
  descricao:"Painel de sorologias, biomarcadores e testes moleculares para investigação etiológica das uveítes.",
  achados:[
    {
      doenca:"Sífilis (Treponema pallidum)",
      padrao:"TRIAGEM: VDRL ou RPR (não treponêmico — titulagem, acompanho atividade). CONFIRMAÇÃO: FTA-ABS, TPHA, TPPA (treponêmico — permanece positivo pra vida). PCR Humor Aquoso: T. pallidum (sensibilidade variável). LCR: VDRL + leucócitos + proteína (neurossífilis).",
      utilidade:"Excluir sífilis SEMPRE antes de imunossupressão. Monitorar resposta: titulagem VDRL aos 3, 6, 12 meses.",
      imagem_descricao:"VDRL positivo quantitativo → confirmar com FTA-ABS → se positivo = sífilis"
    },
    {
      doenca:"Tuberculose",
      padrao:"IGRA (QuantiFERON-TB Gold Plus): detecta IFN-γ contra antígenos específicos MTB. Superior ao PPD: não afetado por BCG, mais específico. PPD ≥10mm (≥5mm em imunocomprometidos). PCR MTB humor aquoso/vítreo (sensibilidade 30–60%). Baciloscopia e cultura (padrão-ouro — aguardar 4–8 semanas).",
      utilidade:"IGRA: rastreio obrigatório antes de anti-TNF. PCR AH: casos suspeitos sem diagnóstico sistêmico.",
      imagem_descricao:"IGRA: resultado positivo/negativo/indeterminado com INF-γ quantitativo"
    },
    {
      doenca:"Sarcoidose",
      padrao:"ACE (Enzima Conversora Angiotensina): elevada em 60–80% da sarcoidose ativa. Lisozima sérica: mais sensível em algumas séries. Cálcio sérico/urinário: hipercalcemia em 10–20%. IL-2R solúvel: elevado. RX e TC tórax: adenopatia hilar bilateral em 90%.",
      utilidade:"ACE + lisozima: triagem. Biópsia (conjuntival, lacrimal, brônquica) = diagnóstico definitivo (granuloma não caseoso).",
      imagem_descricao:"ACE sérica >50U/L (normal) em contexto clínico = alta suspeita de sarcoidose ativa"
    },
    {
      doenca:"Toxoplasmose",
      padrao:"IgG anti-Toxoplasma: persistentemente positivo (> 90% da população brasileira). IgM anti-Toxoplasma: reativação/infecção recente (inespecífico). Coeficiente de Goldmann-Witmer: IgG-humor aquoso × IgG-soro × 0,12 > 3 = produção intraocular. PCR AH: 16–67% sensibilidade, >95% especificidade.",
      utilidade:"Sorologias: confirmar exposição prévia. PCR AH: casos atípicos ou imunocomprometidos.",
      imagem_descricao:"IgG+: exposição (não confirma doença ativa). PCR+: infecção ocular ativa confirmada"
    },
    {
      doenca:"CMV",
      padrao:"PCR CMV no sangue (carga viral): monitoramento em HIV+. CD4 (contagem): <100 = alto risco retinite CMV. PCR humor aquoso: CMV (alta sensibilidade e especificidade). Sorologia IgG CMV: >90% da população adulta = não discriminatório.",
      utilidade:"CD4 guia triagem e decisão terapêutica. PCR AH: diagnóstico e monitoramento de resposta em retinite CMV e uveíte anterior por CMV.",
      imagem_descricao:"CD4 <50 + carga viral CMV detectável → alto risco → profilaxia/tratamento"
    },
    {
      doenca:"HSV / VZV",
      padrao:"PCR AH multipainel: HSV-1, HSV-2, VZV — padrão-ouro para uveíte herpética. Sorologias IgG/IgM: pouco úteis para diagnóstico ocular (exposição prévia ≠ atividade ocular). Coeficiente Goldmann-Witmer: útil para HSV/VZV anterior crônica.",
      utilidade:"PCR AH indicado em uveíte anterior herpética, ARN, PORN. Permite distinguir HSV de VZV (impacta tratamento e prognóstico).",
      imagem_descricao:"PCR AH positivo para VZV → ARN em adulto; para HSV-2 → considerar ARN bilateral neonatal/jovem adulto"
    },
    {
      doenca:"HLA-B27 e HLA-A29",
      padrao:"HLA-B27 (tipagem por PCR ou citometria): positivo em 50–90% da UAA recorrente. Prevalência na população: 8% (caucasianos). HLA-A29: positivo em >95% do Birdshot. Prevalência: 7% (caucasianos). Ausência de HLA-A29 praticamente exclui Birdshot.",
      utilidade:"HLA-B27: guia investigação de espondiloartrite sistêmica. HLA-A29: praticamente confirma Birdshot no contexto clínico correto.",
      imagem_descricao:"Tipagem HLA via PCR de sangue periférico — resultado em dias"
    },
    {
      doenca:"Linfoma Intraocular (IL-10/IL-6)",
      padrao:"IL-10 humor vítreo: elevada em PVRL. IL-6 vítreo: elevada em uveíte inflamatória. Ratio IL-10:IL-6 >1 = PVRL (sensibilidade 89%, especificidade 93%). PCR de rearranjo monoclonal IgH no vítreo. Citologia vítrea: células grandes atípicas CD19+/CD20+.",
      utilidade:"Diagnóstico de PVRL sem biópsia convencional. Ratio IL-10:IL-6 = triagem rápida do material vítrico.",
      imagem_descricao:"IL-10:IL-6 >1 + células grandes atípicas na citologia = PVRL confirmado"
    },
    {
      doenca:"ANCA / FR / ANA / AFA",
      padrao:"c-ANCA (PR3-ANCA): Granulomatose com Poliangiite (Wegener) → esclerouveíte necrosante. p-ANCA (MPO-ANCA): PAM, esclerite. FR: AR (esclerite, epiesclerite). ANA + anti-CCP: AIJ, LES. AFA (anticorpos anti-fosfolípides): vasculite oclusiva retiniana em síndrome antifosfolípide.",
      utilidade:"Investigar doença autoimune sistêmica em esclerouveíte, vasculite retiniana.",
      imagem_descricao:"c-ANCA + esclerite necrosante + sinusite/hemoptise = Wegener → rituximabe urgente"
    }
  ]
},
{
  id:"erg",
  nome:"Eletrorretinograma (ERG)",
  descricao:"Avalia a função eletrofisiológica dos fotorreceptores e das camadas internas da retina. Indispensável em Birdshot, suspeita de RP masquerade, MEWDS.",
  achados:[
    {
      doenca:"Birdshot Chorioretinopathy",
      padrao:"Redução progressiva de amplitude escotópica (bastonetes) e fotópica (cones). 30Hz flicker: redução de amplitude e aumento de latência são os mais sensíveis. ERG pode deteriorar sem sintomas (silencioso).",
      utilidade:"Marcador objetivo de progressão e resposta ao imunossupressor. ERG deteriorando = falha terapêutica → mudar esquema IS.",
      imagem_descricao:"Ondas b reduzidas na escotópica e fotópica — mais proeminente no flicker de 30Hz"
    },
    {
      doenca:"MEWDS",
      padrao:"ERG multifocal (mfERG): redução focal de amplitude nas áreas dos pontos brancos. ERG de campo total: pode estar normal ou discretamente reduzido. Normaliza com resolução clínica.",
      utilidade:"Confirmar comprometimento de fotorreceptores externos. Monitorar recuperação.",
      imagem_descricao:"mfERG mostra depressões focais na área de doença ativa — normaliza após resolução"
    },
    {
      doenca:"Retinose Pigmentar (masquerade)",
      padrao:"ERG extinto ou gravemente reduzido bilateral. Ondas a e b abolidas na escotópica. Fotópica severamente comprometida. Padrão simétrico.",
      utilidade:"Distinguir RP (ERG extinto) de uveíte com fotorreceptores comprometidos. Diagnóstico diferencial essencial.",
      imagem_descricao:"ERG plano ('linha base') bilateral — quase impossível de diferenciar de traçado basal"
    }
  ]
},
{
  id:"us",
  nome:"Ultrassonografia Ocular (US — Modo B)",
  descricao:"Essencial quando o fundo não é visualizável (vitreíte densa, opacidade de meios). Avalia vítreo, descolamento de retina, massas intraoculares.",
  achados:[
    {
      doenca:"Endoftalmite",
      padrao:"Ecos punctiformes densos no vítreo ('chuva'). Membranas vítreas irregulares. Descolamento de retina secundário. Espessamento de parede escleral-coroidal posterior.",
      utilidade:"Avaliar extensão da inflamação vítrea quando fundo obscurecido. T-sign (fluido subtenoniano) = envolvimento posterior grave.",
      imagem_descricao:"Vítreo 'cheio' de ecos puntiformes + membranas — 'tempestade de ecos'"
    },
    {
      doenca:"Melanoma Uveal vs. Toxocara/Retinoblastoma",
      padrao:"Melanoma: massa sólida com acústica interna baixa (absorção ultrassônica pelo tumor). Calcificação ausente. Retinoblastoma: massa calcificada (hiperecogênica) com sombra posterior. Toxocara: massa firme sem calcificação, sem sombra.",
      utilidade:"Diagnóstico diferencial de leucocoria e massas intraoculares. Guia enucleação/braquiterapia.",
      imagem_descricao:"Melanoma: 'cúpula escura absorbente'. Retinoblastoma: 'pó brilhante calcificado'"
    },
    {
      doenca:"VKH — T-Sign (Esclerite Posterior)",
      padrao:"Fluido hiporrefletivo no espaço subtenoniano ('T-sign') = fluido periocular na VKH aguda grave. Espessamento de coróide posterior visível. Descolamento de retina hemorrágico raro.",
      utilidade:"Confirmar VKH aguda grave. Avaliar resposta à pulsoterapia.",
      imagem_descricao:"'T' formado pelo nervo óptico + fluido periocular = T-sign clássico de VKH/esclerite posterior"
    },
    {
      doenca:"Descolamento de Retina Regmatogêneo (Pós-ARN)",
      padrao:"Membrana hiperecogênica curvilínea, móvel, inserida na papila e ora serrata. Fluido subretiniano hiporrefletivo. Funnel-shaped (funil) em DR total.",
      utilidade:"Detectar DR quando vitreíte impede visualização. Guia planejamento cirúrgico (VPP + óleo de silicone).",
      imagem_descricao:"Membrana brilhante ondulante conectada a papila — 'asa de gaivota' (DR parcial)"
    }
  ]
}
];

function renderExames(){
  const cont = document.getElementById('exam-list');
  if(!cont) return;
  cont.innerHTML = EXAMES.map((ex,ei)=>`
    <div class="exam-card" id="exam-${ei}">
      <div class="exam-header" onclick="toggleExame(${ei})">
        <div>
          <div class="exam-title">${ex.nome}</div>
          <div class="exam-desc">${ex.descricao}</div>
        </div>
        <span class="exam-toggle">▼</span>
      </div>
      <div class="exam-body">
        <div class="exam-achados">
          ${ex.achados.map((a,ai)=>`
            <div class="achado-item" id="ach-${ei}-${ai}">
              <div class="achado-header" onclick="toggleAchado(${ei},${ai})">
                <span class="achado-doenca">${a.doenca}</span>
                <span class="achado-toggle">›</span>
              </div>
              <div class="achado-body">
                <div class="achado-row"><span class="ar-label">Padrão</span><p>${a.padrao}</p></div>
                <div class="achado-row"><span class="ar-label">Utilidade</span><p>${a.utilidade}</p></div>
                <div class="achado-row"><span class="ar-label">Imagem</span><p class="ar-imagem">${a.imagem_descricao}</p></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>`).join('');
}

function toggleExame(idx){
  const el = document.getElementById('exam-'+idx);
  if(el) el.classList.toggle('open');
}

function toggleAchado(ei,ai){
  const el = document.getElementById(`ach-${ei}-${ai}`);
  if(el) el.classList.toggle('open');
}
