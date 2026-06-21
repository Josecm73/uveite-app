const TIPS = [
// ===== RED FLAGS =====
{
  id:"rf1",
  cat:"redflag",
  icone:"🚨",
  titulo:"Uveíte Posterior em Idoso = Linfoma",
  corpo:"Todo paciente >50 anos com uveíte crônica bilateral sem etiologia definida e sem resposta a corticoide deve ter PVRL (Linfoma Primário Vitreo-Retiniano) excluído. Solicitar IL-10 e IL-6 no vítreo (ratio >1 = diagnóstico). Vitreoscopia/citologia vítrea é indispensável.",
  fonte:"BCSC AAO · Ophthalmology 2022"
},
{
  id:"rf2",
  cat:"redflag",
  icone:"🚨",
  titulo:"Leucocoria em Criança = Emergência",
  corpo:"Reflexo pupilar branco em criança <5 anos → excluir Retinoblastoma ANTES de qualquer manobra. A suspeita de toxocara NÃO justifica atrasar investigação para retinoblastoma. Solicitar RX/TC (calcificação = retinoblastoma) + US (hiperecoico + calcificação). Encaminhar centro especializado imediatamente.",
  fonte:"Kanski Cap.18 · BCSC AAO"
},
{
  id:"rf3",
  cat:"redflag",
  icone:"🚨",
  titulo:"Necrose Retiniana = Emergência Vascular",
  corpo:"Toda retinite necrosante (ARN ou CMV) é emergência. ARN: aciclovir IV imediatamente sem esperar PCR. CMV em HIV: valganciclovir 900mg 2x/dia urgente. Cada 24h de atraso = mais retina irrecuperável. ARN não tratada → DR em 50–75% dos casos.",
  fonte:"BCSC AAO · EVS"
},
{
  id:"rf4",
  cat:"redflag",
  icone:"🚨",
  titulo:"NUNCA Imunossupressão sem Excluir Sífilis e TB",
  corpo:"Sífilis e tuberculose ocular podem piorar dramaticamente com corticoide sistêmico sem cobertura antimicrobiana. REGRA DE OURO: solicitar VDRL/FTA-ABS + IGRA/PPD + RX tórax ANTES de iniciar imunossupressor sistêmico em qualquer uveíte de etiologia desconhecida.",
  fonte:"SUN 2021 · BCSC AAO"
},
{
  id:"rf5",
  cat:"redflag",
  icone:"🚨",
  titulo:"Hipópio Pós-Cirurgia = Endoftalmite",
  corpo:"Hipópio surgindo após cirurgia ocular ou injeção intravítrea = endoftalmite até prova em contrário. Colher cultura/PCR + injetar vancomicina 1mg + ceftazidima 2,25mg intravitreo IMEDIATAMENTE. Não esperar cultura. Se AV = percepção luminosa → vitrectomia via pars plana (EVS).",
  fonte:"EVS 1995 · ESCRS Guidelines"
},
{
  id:"rf6",
  cat:"redflag",
  icone:"🚨",
  titulo:"APMPPE + Cefaleia = Vasculite Cerebral",
  corpo:"APMPPE associada a cefaleia ou sinais neurológicos pode indicar vasculite cerebral (AVC). Solicitar RM crânio com gadolínio + angio-RM urgente. Esta complicação é rara mas potencialmente fatal.",
  fonte:"Ophthalmology · Neurology"
},
// ===== MNEMÔNICOS =====
{
  id:"mn1",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico: KANSKI para HLA-B27",
  corpo:"HLA-B27 associa-se a: <strong>A</strong>nkylosing spondylitis (EA) + <strong>R</strong>eactive arthritis + <strong>I</strong>BD uveitis + <strong>P</strong>soriatic arthritis + <strong>S</strong>pondylarthropathy undifferentiated = <strong>ARIPS</strong>. Todos causam Uveíte Anterior Aguda unilateral, dolorosa, recorrente.",
  fonte:"Kanski 8ª Ed"
},
{
  id:"mn2",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico: BEHÇET",
  corpo:"<strong>B</strong>oca (aftas orais ≥3/ano — critério obrigatório) + <strong>E</strong>rupção cutânea (eritema nodoso, pseudofoliculite) + <strong>H</strong>ipópio 'móvel' + <strong>Ç</strong>estiva genitais (úlceras) + <strong>E</strong>ye (uveíte bilateral) + <strong>T</strong>este patergia positivo. ISBD 2014: ≥4 pontos = diagnóstico.",
  fonte:"ISBD Criteria 2014"
},
{
  id:"mn3",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico: VKH — 5 V's",
  corpo:"VKH tem 5 achados clínicos, todos com <strong>V</strong>: <strong>V</strong>itiligo + <strong>V</strong>isão turva bilateral + <strong>V</strong>értigo/tinnitus/perda auditiva (vestibular) + <strong>V</strong>elocidade de progressão rápida + <strong>V</strong>eias: fundos em pôr do sol (sunset glow). Tríade VKH clínica: uveíte + meningismo + achados cutâneos.",
  fonte:"Kanski Cap.11"
},
{
  id:"mn4",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico: WHITE DOT — diferenciação rápida",
  corpo:"<strong>A</strong>PMPPE = <strong>A</strong>dulto, bilateral, <strong>A</strong>utolimitada, placóide grande, polo posterior. <strong>M</strong>EWDS = <strong>M</strong>ulher jovem, <strong>M</strong>onolateral, pontos <strong>M</strong>iúdos, evanescente. <strong>B</strong>irdshot = <strong>B</strong>ranco europeu, <strong>B</strong>ilateral crônica, HLA-A29+, ERG reduzido.",
  fonte:"BCSC AAO"
},
{
  id:"mn5",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico: SARCOIDOSE Ocular — 'Granulomas em gordura'",
  corpo:"Pense em GORDURA: <strong>G</strong>ranuloma (não caseoso) + <strong>O</strong>lho = KPs mutton-fat + <strong>R</strong>x tórax (adenopatia hilar bilateral) + <strong>D</strong>alen-Fuchs (nódulos sub-retinianos) + <strong>U</strong>veoparotidite (síndrome de Heerfordt) + <strong>R</strong>aio de soluções: ACE+lisozima elevados + <strong>A</strong>ngiotensin-converting enzyme. Candle-wax = periphlebite.",
  fonte:"Kanski Cap.11 · BCSC AAO"
},
{
  id:"mn6",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico: Endoftalmite — VAN-CEF (lembrar antibióticos ITV)",
  corpo:"Endoftalmite = <strong>VAN</strong>comicina 1mg + <strong>CEF</strong>tazidima 2,25mg (ambas em 0,1mL), injeções SEPARADAS no vítreo. 'VANCEFtazidima — nunca misture no mesmo frasco (precipita!)'. VPP (vitrectomia) se AV = Percepção Luminosa.",
  fonte:"EVS 1995"
},
// ===== PERGUNTAS CLÍNICAS =====
{
  id:"pc1",
  cat:"clinico",
  icone:"💡",
  titulo:"Como diferenciar KPs granulomatosos de não-granulomatosos?",
  corpo:"KPs granulomatosos: grandes (>0,5mm), oleosos, 'gordura de carneiro', amarelados, agrupados no endotélio inferior, podem ter pigmento. Causas: sarcoidose, TB, sífilis, VKH, Fuchs*. KPs não granulomatosos: pequenos (<0,5mm), brancos, pó de farinha, triângulo de Arlt inferior. Causas: HLA-B27, AIJ, Herpes, Behçet. *Fuchs = estrelados difusos por TODO o endotélio.",
  fonte:"SUN 2021 · Kanski"
},
{
  id:"pc2",
  cat:"clinico",
  icone:"💡",
  titulo:"Quando suspeitar de Fuchs vs. UA granulomatosa crônica?",
  corpo:"FUCHS: KPs estrelados (stellate) difusos por TODO o endotélio (não apenas inferior), olho BRANCO, SEM sinequias (nunca!), heterocromia ipsilateral, evolução crônica, catarata precoce. UA granulomatosa: KPs mutton-fat inferiores, nódulos iridianos (Busacca, Koeppe), sinequias frequentes. Diagnóstico difere pois FUCHS não responde a corticoide crônico — tratar complicações.",
  fonte:"SUN 2021 · Kanski Cap.11"
},
{
  id:"pc3",
  cat:"clinico",
  icone:"💡",
  titulo:"Como graduar células na câmara anterior (SUN)?",
  corpo:"Campo 1×1mm com fenda estreita, alta magnificação: Grau 0 = <1 célula; Trace (0.5+) = 1–5 células; 1+ = 6–15; 2+ = 16–25; 3+ = 26–50; 4+ = >50 células ou hipópio. Critério de INATIVIDADE SUN 2021: ≤0.5+ células. Critério de MELHORA: ≥2 graus de redução ou redução a grau 0.",
  fonte:"SUN Working Group 2005"
},
{
  id:"pc4",
  cat:"clinico",
  icone:"💡",
  titulo:"Qual o significado do flare persistente?",
  corpo:"Flare = proteínas no aquoso (ruptura barreira hematoaquosa). Flare grau 1–2+ pode persistir mesmo com inflamação controlada (dano estrutural permanente da barreira). Flare ≥3+ com fibrina = inflamação ativa intensa. Flare deve ser graduado SEPARADAMENTE das células — paciente pode ter 0 células mas flare 2+ (sequela, não atividade).",
  fonte:"SUN 2021"
},
{
  id:"pc5",
  cat:"clinico",
  icone:"💡",
  titulo:"Qual a diferença entre ARN e PORN?",
  corpo:"ARN (Necrose Retiniana Aguda): imunocompetente, vitreíte INTENSA, vasculite arterial, retinite periférica. Agentes: VZV > HSV-1 > HSV-2. PORN (Progressive Outer Retinal Necrosis): imunossuprimido (HIV/AIDS), MÍNIMA vitreíte, sem vasculite, retina externa. Agente: VZV principalmente. PORN = pior prognóstico (AV final <20/400 em >90%).",
  fonte:"BCSC AAO · Kanski Cap.11"
},
{
  id:"pc6",
  cat:"clinico",
  icone:"💡",
  titulo:"Quando pedir PCR de humor aquoso?",
  corpo:"Indicações: (1) Apresentação atípica sem etiologia clara; (2) Imunocomprometido com uveíte posterior; (3) Falha ao tratamento empírico após 4–6 semanas; (4) Suspeita de infecção viral anterior (herpes, CMV, rubéola). Volume: 0,1–0,2mL via paracentese. Painel mínimo: CMV, HSV-1, HSV-2, VZV, Toxoplasma. Coef. Goldmann-Witmer >3 = produção local de anticorpos.",
  fonte:"BCSC AAO"
},
{
  id:"pc7",
  cat:"clinico",
  icone:"💡",
  titulo:"Quantiferom vs PPD — qual usar para excluir TB?",
  corpo:"IGRA (QuantiFERON-TB Gold Plus): preferido — não afetado pela vacina BCG (universal no Brasil), mais específico, não requer segunda consulta. PPD: alternativa — pode dar falso-positivo em vacinados com BCG, falso-negativo em imunossuprimidos. AMBOS: devem ser feitos ANTES de anti-TNF (adalimumabe, infliximabe). TB latente tratada com isoniazida 9 meses antes de iniciar biológico.",
  fonte:"CDC · MS Brasil"
},
{
  id:"pc8",
  cat:"clinico",
  icone:"💡",
  titulo:"Critérios SUN 2021 para diagnóstico de uveítes específicas",
  corpo:"SUN 2021 definiu critérios diagnósticos para 25 entidades específicas. Importantes: (1) UAA HLA-B27: UA aguda/recorrente + B27+ ou espondiloartrite ASAS; (2) Fuchs: UA crônica + KPs estrelados + heterocromia/atrofia difusa + sem endotelite/nódulos endoteliais; (3) Pars Planitis: UI + snowbanks/snowballs SEM sarcoidose, EM ou TB; (4) Toxoplasmose: coriorretinite + cicatriz pigmentada + IgG+ ou PCR+.",
  fonte:"SUN 2021 Working Group"
},
// ===== TRATAMENTO =====
{
  id:"tr1",
  cat:"tratamento",
  icone:"💊",
  titulo:"Tapering de Corticoide — Regra Prática",
  corpo:"Prednisona 1mg/kg/dia: reduzir 10mg/semana até 40mg → depois 5mg/semana até 20mg → depois 2,5mg/semana até 10mg → depois 1mg/semana até suspensão. NUNCA reduzir se célula CA >0.5+. VKH e sarcoidose: manter >10mg/dia por ≥6 meses. Initiar IS poupador se dose >10mg/dia por >3 meses.",
  fonte:"PCDT CONITEC 2019 · EULAR"
},
{
  id:"tr2",
  cat:"tratamento",
  icone:"💊",
  titulo:"Adalimumabe — Quando e Como Usar",
  corpo:"Indicações aprovadas: AIJ com uveíte (FDA/EMA). Off-label: HLA-B27, sarcoidose, Behçet, VKH. Dose adulto: 80mg SC na semana 0, 40mg na semana 1, depois 40mg q2sem. Pediátrico: 20mg (<30kg) ou 40mg (≥30kg) q2sem. PRÉ-REQUISITOS: Quantiferom negativo (ou TB latente tratada), Hepatite B excluída/tratada, sem IC grau III-IV, sem doença desmielinizante ativa.",
  fonte:"PCDT CONITEC 2019 · FDA Label"
},
{
  id:"tr3",
  cat:"tratamento",
  icone:"💊",
  titulo:"Metotrexato — Monitoramento Essencial",
  corpo:"MTX 15–25mg/semana SC ou VO. SEMPRE associar Ácido Fólico 5mg/semana (no dia SEGUINTE ao MTX — não no mesmo dia). Monitorar: hemograma + TGO/TGP + creatinina mensalmente nos primeiros 6 meses, depois trimestralmente. INTERAGENTES: AINEs (aumentam nível MTX), amoxicilina, trimetoprim. CONTRAINDICAÇÕES: gravidez (teratogênico — suspender 3 meses antes), hepatopatia significativa, creatinina >1,5mg/dL.",
  fonte:"EULAR · ACR Guidelines"
},
{
  id:"tr4",
  cat:"tratamento",
  icone:"💊",
  titulo:"Implante Ozurdex (Dexametasona ITV) — Dicas Práticas",
  corpo:"Indicação: EMC por uveíte não infecciosa. Duração eficaz: 4–6 meses. MONITORAR PIO: pico em 4–6 semanas pós-injeção. Contraindicações: glaucoma avançado sem controle, olho fáquico (risco catarata). Vantagem sobre sub-Tenon: maior duração, não afeta tecidos palpebrais. Pode repetir a cada 6 meses se resposta mantida.",
  fonte:"EMA · FDA · Ophthalmology 2020"
},
{
  id:"tr5",
  cat:"tratamento",
  icone:"💊",
  titulo:"Toxoplasmose: SMX-TMP ou Esquema Clássico?",
  corpo:"SMX-TMP 800/160mg 2x/dia × 45 dias: boa eficácia comprovada, melhor tolerância, custo menor, disponível no SUS. Esquema clássico (sulfadiazina + pirimetamina + ácido folínico): padrão histórico, melhor penetração intravítrea da sulfadiazina, preferido por alguns em casos graves. Clindamicina intravítrea 1mg/0,1mL: alternativa em lesão macular ameaçadora sem suporte oral.",
  fonte:"PCDT · Toxoplasmose Ocular Review 2022"
},
{
  id:"tr6",
  cat:"tratamento",
  icone:"💊",
  titulo:"Sífilis Ocular: Tratar como Neurossífilis",
  corpo:"SEMPRE tratar sífilis ocular como neurossífilis, independente do LCR: Penicilina G Cristalina 18–24 MUI/dia IV × 14 dias. Alergia à penicilina: dessensibilização (preferida em gravidez/HIV) ou ceftriaxona 2g IV/dia × 14 dias. REAÇÃO DE JARISCH-HERXHEIMER: febre e calafrios nas primeiras 24h — NÃO interromper tratamento, manejar sintomaticamente. Títulos VDRL: monitorar aos 3, 6 e 12 meses.",
  fonte:"CDC STI Guidelines 2021"
},
// ===== EXAMES =====
{
  id:"ex1",
  cat:"exames",
  icone:"🔬",
  titulo:"OCT na Uveíte — O que Procurar",
  corpo:"OCT avalia: (1) EMC — espessura retiniana central, volume macular, cistos; (2) DSR (descolamento seroso retiniano) — VKH fase aguda; (3) Atrofia camadas externas (fotorreceptores, EPR) — Birdshot, MEWDS; (4) Neovasos sub-retinianos — elevação do EPR, fluido sub-retiniano em serpiginosa/APMPPE; (5) Disrupção elipsóide (IS/OS) — recuperação visual após MEWDS; (6) Vitreíte — pontos hiperrflectivos no vítreo.",
  fonte:"BCSC AAO"
},
{
  id:"ex2",
  cat:"exames",
  icone:"🔬",
  titulo:"AFG na Uveíte — Padrões Clássicos",
  corpo:"Hipofluorescência precoce → hiperfluorescência tardia (staining): APMPPE, serpiginosa ativa. Hipofluorescência persistente: cicatriz coroidal, ICGA. Leakage difuso tardio: vasculite retiniana, EMC (roseta/pétala). Staining de papila: papilite, VKH, sarcoidose. Pontos precoces com pooling tardio (VKH ativa). Vazamento venoso + staining: Behçet, sarcoidose.",
  fonte:"Kanski Cap.11 · BCSC AAO"
},
{
  id:"ex3",
  cat:"exames",
  icone:"🔬",
  titulo:"ICGA — Indicações na Uveíte",
  corpo:"ICGA (angiografia com indocianina verde) detecta lesões coroidianas não visíveis na AFG. Indicações: (1) VKH — hipofluorescência coroidal difusa em fase ativa; (2) Sarcoidose — granulomas coroidianos hipofluorescentes; (3) Birdshot — lesões coroidianas hipofluorescentes mais numerosas que oftalmoscopia; (4) MEWDS — pontos hipofluorescentes precoces e tardios; (5) Serpiginosa — extensão real das lesões.",
  fonte:"BCSC AAO"
},
{
  id:"ex4",
  cat:"exames",
  icone:"🔬",
  titulo:"ERG na Uveíte Posterior",
  corpo:"ERG (eletrorretinograma) é indispensável em: (1) Birdshot — redução progressiva de amplitude = marcador de progressão e resposta ao tratamento; (2) MEWDS — afeta fotorreceptores externos (redução focal em ERG multifocal); (3) Suspeita de Retinose Pigmentar masquerade — ERG extinção = RP. ERG reduzindo apesar de imunossupressão em Birdshot = mudar esquema.",
  fonte:"BCSC AAO · Birdshot Review 2022"
},
{
  id:"ex5",
  cat:"exames",
  icone:"🔬",
  titulo:"Autofluorescência do Fundo (FAF) — Usos Clínicos",
  corpo:"FAF mede lipofuscina do EPR. Hiperafluorescência: EPR estressado/ativo (APMPPE, MEWDS, EMC). Hipoafluorescência: atrofia EPR (cicatrizes coroidianas, serpiginosa residual, Birdshot avançado). FAF útil para: delimitar extensão de lesões, monitorar resolução de APMPPE/MEWDS, avaliar cicatriz em serpiginosa.",
  fonte:"BCSC AAO"
},
// ===== PRÁTICOS =====
{
  id:"pr1",
  cat:"pratico",
  icone:"📋",
  titulo:"Rastreio Sorológico Mínimo na Uveíte",
  corpo:"TODO paciente com uveíte de etiologia desconhecida deve ter: ✓ VDRL + FTA-ABS (sífilis — sempre!) ✓ IGRA ou PPD + RX tórax (TB) ✓ Hemograma completo ✓ Creatinina, TGO/TGP. SEGUNDO NÍVEL conforme contexto: ✓ HLA-B27 (UAA recorrente) ✓ ACE + lisozima (granulomatosa bilateral) ✓ IgG Toxoplasma (UP com cicatriz) ✓ CD4 + HIV (imunocomprometido) ✓ ANA (criança com AIJ). TERCEIRO NÍVEL: PCR AH, biópsia, PET-CT.",
  fonte:"SUN 2021 · BCSC AAO"
},
{
  id:"pr2",
  cat:"pratico",
  icone:"📋",
  titulo:"Crianças com AIJ — Rastreio Ocular (AAP 2019)",
  corpo:"Frequência de rastreio definida por: forma de AIJ + ANA + idade de início. MAIOR RISCO: Oligoarticular + ANA+ + <7 anos ao diagnóstico → a cada 3 meses por 4 anos + a cada 6 meses por mais 3 anos. MENOR RISCO: ERA, AIJ sistêmica → anual. REGRA: olho branco e sem dor NÃO exclui uveíte ativa na AIJ — exame de lâmpada de fenda é obrigatório.",
  fonte:"AAP Screening Guidelines 2019"
},
{
  id:"pr3",
  cat:"pratico",
  icone:"📋",
  titulo:"Uveíte e Gravidez — O que fazer",
  corpo:"Medicamentos seguros na gravidez: Corticoide tópico e sub-Tenon (1ª escolha). Prednisolona oral (categoria C — usar menor dose efetiva). Ciclosporina (categoria C — dados limitados). Adalimumabe (categoria B — preferido se anti-TNF necessário, suspender na 35ª semana). CONTRAINDICADOS na gravidez: Metotrexato (teratogênico — suspender 3 meses antes), Micofenolato, Azatioprina (relativa). VKH em gravidez = pulso IV de metilprednisolona se grave.",
  fonte:"EULAR · ACR"
},
{
  id:"pr4",
  cat:"pratico",
  icone:"📋",
  titulo:"Monitorar PIO em Todo Paciente com Corticoide Ocular",
  corpo:"Todo paciente em uso de corticoide tópico, sub-Tenon ou intravítreo deve ter PIO monitorada: 2–4 semanas após início tópico; 4–6 semanas após Ozurdex/triamcinolona. Até 35% dos pacientes são 'corticoresponders' — elevação PIO >10mmHg. Manejo: hipotensores tópicos (timolol, brinzolamida, brimonidina). Se PIO incontrolável + glaucoma progressivo: cirurgia filtrante.",
  fonte:"BCSC AAO"
},
{
  id:"pr5",
  cat:"pratico",
  icone:"📋",
  titulo:"Neovascularização Coroidal (NVC) na Uveíte — Quando Anti-VEGF",
  corpo:"NVC complica: serpiginosa (30%), PIC (40%), MEWDS (<5%), toxoplasmose (lesão macular). Diagnóstico: OCT (fluido sub-retiniano + elevação EPR) + AFG (hiperfluorescência precoce) + OCTA (network neovascular). Tratamento: Anti-VEGF intravítreo (bevacizumabe 1,25mg ou ranibizumabe 0,5mg) + controle da inflamação subjacente. Resposta geralmente boa se NVC ativa; cicatriz fibrosa não responde.",
  fonte:"BCSC AAO · Retina 2022"
},
{
  id:"pr6",
  cat:"pratico",
  icone:"📋",
  titulo:"Quando Consultar Reumatologista, Infectologista, Neurologista",
  corpo:"REUMATOLOGISTA: HLA-B27+ com dor lombar inflamatória, AIJ, suspeita Behçet/VKH/sarcoidose sistêmica, início de biológico. INFECTOLOGISTA: sífilis (neurossífilis), TB ocular (esquema RIPE), HIV+, endoftalmite fúngica ou endógena, CMV. NEUROLOGISTA: VKH com meningismo, sarcoidose com SNC, APMPPE com cefaleia, suspeita EM com uveíte intermediária, vasculite cerebral. ONCOLOGISTA: suspeita de linfoma intraocular.",
  fonte:"Boas práticas clínicas"
},
{
  id:"pr7",
  cat:"pratico",
  icone:"📋",
  titulo:"Profilaxia de Toxoplasmose — Quando e Como",
  corpo:"Indicação: ≥3 episódios em 2 anos OU lesão em área ameaçadora (macular/justapapilar) OU imunocomprometido. Esquema: SMX-TMP 800/160mg 3x/semana por 1–3 anos (ou enquanto houver imunossupressão). Alternativa: SMX-TMP 400/80mg diariamente. Eficácia: reduz recidivas em ~70%. Monitorar: função renal, hemograma semestral.",
  fonte:"Toxoplasmose Ocular Review 2022"
},
{
  id:"pr8",
  cat:"pratico",
  icone:"📋",
  titulo:"Síndrome de Reconstituição Imune (IRIS) em HIV",
  corpo:"IRIS = vitreíte inflamatória paradoxal surgindo após início de HAART em pacientes com retinite CMV cicatrizada. CD4 sobe > 100 células/μL → resposta imune contra CMV residual → vitreíte intensa, EMC, NVC (membranas neovasculares peri-lesionais). Tratamento: corticoide sistêmico (1mg/kg/dia) ou sub-Tenon + manter HAART. NÃO é falha ao HAART.",
  fonte:"BCSC AAO · HIV Ophthalmology Guidelines"
},
// ===== NUSSENBLATT & SBO — CONTEÚDO ENRIQUECIDO =====
{
  id:"nuss1",
  cat:"clinico",
  icone:"💡",
  titulo:"Uveíte Intermediária — Snowbanks e Snowballs",
  corpo:"Snowbanks (bancos de neve) = exsudato pars plana inferior — patognomônico de Pars Planitis. Snowballs = agregados celulares vítreos anteriores inferiores — também em sarcoidose e TB. Nussenblatt: snowbanks verdadeiros implicam maior risco de neovascularização e DR tracional. Verificar SEMPRE com indentação escleral no exame. Snowbank + neovascular = indicação de fotocoagulação a laser da pars plana afetada.",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed · SBO Uveítes"
},
{
  id:"nuss2",
  cat:"clinico",
  icone:"💡",
  titulo:"VKH — Sunset Glow Fundus e Nummular Scars",
  corpo:"Sunset Glow Fundus: despigmentação difusa do EPR coroidal resultando em fundo alaranjado-rosado uniforme — marca da fase crônica de VKH. Nussenblatt: presente em >80% dos casos crônicos. Nummular Scars (cicatrizes numerosas): múltiplas cicatrizes RPE arredondadas dispersas = VKH recorrente com episódios não tratados. Quanto mais cicatrizes nummulares, menor AV final. Início precoce de imunossupressão previne ambas as complicações.",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed"
},
{
  id:"nuss3",
  cat:"redflag",
  icone:"🚨",
  titulo:"Oftalmia Simpática — Olho Contralateral em Risco",
  corpo:"Uveíte granulomatosa bilateral surgindo após trauma/cirurgia perfurante: olho excitante (traumatizado) sensibiliza → olho simpatizante reage semanas a anos depois. Latência: 80% surgem entre 2 semanas e 1 ano; pode ocorrer até 66 anos depois. CHAVE NUSSENBLATT: se olho traumatizado tem AV útil, manter e tratar imunossupressão sistêmica. Enucleação do olho excitante >2 semanas após trauma NÃO previne simpatia. Tratamento idêntico ao VKH.",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed"
},
{
  id:"nuss4",
  cat:"tratamento",
  icone:"💊",
  titulo:"Escada de Imunossupressão — Nussenblatt",
  corpo:"Nussenblatt propôs uma escada de imunossupressão para uveítes não-infecciosas: <strong>Degrau 1:</strong> Corticoide tópico/periocular. <strong>Degrau 2:</strong> Corticoide sistêmico (≤10mg/dia meta). <strong>Degrau 3:</strong> IS antimetabólitos (MTX, MMF, AZA) — poupar corticoide. <strong>Degrau 4:</strong> Alcaloides (ciclosporina, tacrolimus). <strong>Degrau 5:</strong> Biológicos (adalimumabe, infliximabe). Subir um degrau se: falha em 3 meses OU dose de corticoide > limiar de segurança (>10mg/dia por >3 meses).",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed"
},
{
  id:"nuss5",
  cat:"exames",
  icone:"🔬",
  titulo:"Angiografia com Indocianina Verde (ICGA) — Achados de Nussenblatt",
  corpo:"Nussenblatt descreve padrões ICGA clássicos: (1) <strong>VKH:</strong> hipofluorescência coroidal difusa + pontos hipofluorescentes precoces (granulomas coroidianos) → pooling tardio no DSR. (2) <strong>Birdshot:</strong> lesões hipofluorescentes mais numerosas na ICGA vs. oftalmoscopia — extensão real da doença subestimada clinicamente. (3) <strong>Sarcoidose:</strong> fuzzy vessels (vasos coroidianos mal definidos) = infiltração granulomatosa. ICGA é superior à AFG para avaliar inflamação coroidal.",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed"
},
{
  id:"sbo1",
  cat:"pratico",
  icone:"📋",
  titulo:"HTLV-1 e Uveíte — Realidade Brasileira (SBO)",
  corpo:"HTLV-1 (Human T-Lymphotropic Virus type 1): endêmico no Brasil, especialmente Salvador/BA (2–2,7% da população geral). Causa uveíte intermediária/posterior crônica bilateral, semelhante a sarcoidose. Pesquisar em: uveíte crônica bilateral sem causa + área endêmica (nordeste, especialmente Bahia). Diagnóstico: sorologia HTLV-1 IgG (ELISA + Western Blot confirmatório). Sem tratamento específico para uveíte — corticoide + IS. Associado à mielopatia espástica tropical (HAM/TSP).",
  fonte:"SBO Uveítes · Ophthalmology Brazil · Rev Bras Oftalmol 2020"
},
{
  id:"sbo2",
  cat:"pratico",
  icone:"📋",
  titulo:"Uveíte Pediátrica no Brasil — SBO Protocolo",
  corpo:"SBO recomenda investigação sistemática em toda uveíte pediátrica: <strong>Olho branco + assintomática:</strong> pensar AIJ (oligoarticular ANA+). <strong>Dor + fotofobia:</strong> HLA-B27, HSV/VZV. <strong>Posterior bilateral:</strong> toxoplasmose congênita (cicatrizes presentes ao nascimento), CMV congênito. <strong>Leucocoria:</strong> excluir retinoblastoma ANTES de tudo. Rastreio SBO: ANA, HLA-B27, IgG Toxo, VDRL + FTA-ABS (congênita), hemograma. Não atribuir uveíte pediátrica a causa idiopática sem investigação completa.",
  fonte:"SBO Uveítes · Capítulo Uveíte Pediátrica"
},
{
  id:"sbo3",
  cat:"mnemonico",
  icone:"🧠",
  titulo:"Mnemônico SBO: UVEÍTE — Investigação Básica",
  corpo:"<strong>U</strong>rina (rotina — ANCA, proteinúria em Behçet/vasculite) + <strong>V</strong>DRL/FTA-ABS (sífilis — SEMPRE) + <strong>E</strong>SBO/PCR (inflamação sistêmica) + <strong>Í</strong>IGRA ou PPD + Rx tórax (TB) + <strong>T</strong>ransaminases + hemograma (baseline antes de IS) + <strong>E</strong>CA + lisozima (sarcoidose). Esse mnemônico cobre a investigação mínima recomendada pelo SBO antes de iniciar qualquer tratamento sistêmico.",
  fonte:"SBO Uveítes — Protocolo de Investigação"
},
{
  id:"sbo4",
  cat:"clinico",
  icone:"💡",
  titulo:"Toxoplasmose Atípica — Quando Suspeitar (SBO)",
  corpo:"SBO descreve formas atípicas de toxoplasmose ocular: (1) <strong>Punctata externa</strong>: lesões pequenas, múltiplas, externas — confunde com MEWDS; (2) <strong>Forma difusa</strong>: semelhante a ARN em imunocomprometidos; (3) <strong>Sem cicatriz prévia</strong>: 15–20% das recidivas são em novos locais sem cicatriz visível; (4) <strong>Papilite isolada</strong> (síndrome de Jensen): lesão justapapilar causa defeito campo visual; (5) <strong>Forma hemorrágica</strong>: lesão com hemorragia retiniana sobreposta — confunde com OVR. PCR de humor aquoso nestas formas.",
  fonte:"SBO Uveítes · Toxoplasmose Ocular Atípica"
},
{
  id:"sbo5",
  cat:"redflag",
  icone:"🚨",
  titulo:"Uveíte + Perda Visual Rápida = Excluir Endoftalmite Endógena",
  corpo:"Endoftalmite endógena (hematogênica): uveíte grave + hipoema/hipópio + baixa visual rápida em paciente com fator de risco sistêmico. Fatores: diabetes, cateter venoso central, cirurgia cardíaca, imunossupressão, uso de drogas IV, abscesso dental/hepático. SBO: candidíase endógena é a causa mais comum no Brasil (candida albicans). Diagnóstico: hemocultura + ecocardiograma. Tratamento: anfotericina B ou fluconazol IV + voriconazol intravítreo. Coletar antes de antibiótico.",
  fonte:"SBO Uveítes · Rev Bras Oftalmol"
},
{
  id:"nuss6",
  cat:"tratamento",
  icone:"💊",
  titulo:"Birdshot — Quando Tratar e Quando Intensificar",
  corpo:"Nussenblatt: critérios para iniciar/intensificar tratamento em Birdshot: (1) AV <20/40; (2) EMC; (3) Células vítreas ≥2+; (4) ERG com amplitude reduzida progressivamente; (5) Campo visual deteriorando. O ERG (especialmente onda b e flicker 30Hz) é o biomarcador mais sensível — detecta deterioração antes da AV. Objetivo terapêutico: ERG estável ou melhorando + células <0.5+. Ciclosporina A (2,5–5mg/kg/dia) foi pioneiramente usada por Nussenblatt para Birdshot nos anos 1980.",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed · Birdshot Review"
},
{
  id:"nuss7",
  cat:"clinico",
  icone:"💡",
  titulo:"Heterocromia de Fuchs — Pistas Diagnósticas Sutis",
  corpo:"Nussenblatt destaca: a heterocromia em Fuchs pode ser MÍNIMA e difícil de detectar — a íris afetada é geralmente mais CLARA (hipocromia) mas em olhos escuros (brasileiros) pode aparecer como hiperpigmentação paradoxal. Checar sempre sob luz natural. SINAL DE AMSLER: sangramento da pupila após paracentese (rubeosis iridis discreta) — quase patognomônico de Fuchs. SINAL DE DENTI: opacificação vítrea em flocos. Lens implant após cirurgia de catarata: excelente resultado visual mas uveíte persiste.",
  fonte:"Nussenblatt & Whitcup — Uveitis 4ª Ed"
}
];

const TIP_CATS = [
  {id:"all",    label:"Todos",      cor:"#4a6278"},
  {id:"redflag",label:"Red Flags",  cor:"#ff5c5c"},
  {id:"mnemonico",label:"Mnemônicos",cor:"#a78bfa"},
  {id:"clinico",label:"Clínica",    cor:"#1e90ff"},
  {id:"tratamento",label:"Tratamento",cor:"#10d996"},
  {id:"exames", label:"Exames",     cor:"#f0b429"},
  {id:"pratico",label:"Prático",    cor:"#00d9b8"},
];

function renderTips(cat='all'){
  const g = document.getElementById('tips-grid');
  if(!g) return;
  const list = cat==='all' ? TIPS : TIPS.filter(t=>t.cat===cat);
  g.innerHTML = list.map(t=>{
    const catObj = TIP_CATS.find(c=>c.id===t.cat)||TIP_CATS[0];
    return `<div class="tip-card tc-${t.cat}">
      <div class="tip-icon">${t.icone}</div>
      <div class="tip-cat-label" style="color:${catObj.cor};font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.3rem">${catObj.label}</div>
      <div class="tip-title">${t.titulo}</div>
      <div class="tip-body">${t.corpo}</div>
      <div class="tip-fonte">Fonte: ${t.fonte}</div>
    </div>`;
  }).join('');
}

function filterTips(cat){
  document.querySelectorAll('.tip-filter-btn').forEach(b=>b.classList.remove('active'));
  const idx = TIP_CATS.findIndex(c=>c.id===cat);
  const btns = document.querySelectorAll('.tip-filter-btn');
  if(btns[idx]) btns[idx].classList.add('active');
  renderTips(cat);
}

function renderTipFilters(){
  const cont = document.getElementById('tip-filters');
  if(!cont) return;
  cont.innerHTML = TIP_CATS.map((c,i)=>`
    <button class="tip-filter-btn${i===0?' active':''}" onclick="filterTips('${c.id}')" style="border-color:${c.cor};color:${c.cor}">${c.label} <span class="tip-count">${c.id==='all'?TIPS.length:TIPS.filter(t=>t.cat===c.id).length}</span></button>
  `).join('');
}
