const DOENCAS = [
{
  id:"toxoplasmose",
  nome:"Toxoplasmose Ocular",
  sinonimos:"Retinocoroidite por Toxoplasma",
  tipo:"infecciosa",
  anatomica:["posterior"],
  tags:["Toxoplasma gondii","Posterior","Brasil","Recidiva"],
  preview:"Causa mais frequente de uveíte posterior no Brasil e no mundo. Lesão ativa satélite adjacente a cicatriz pigmentada.",
  etiologia:`<strong>Agente:</strong> Toxoplasma gondii (protozoário intracelular obrigatório).<br>
<strong>Transmissão:</strong> Ingestão de cistos em carne mal cozida, oocistos em solo/água, ou congênita (1ª trimestre).<br>
<strong>Epidemiologia:</strong> Soroprevalência >70% no Brasil. Constitui 20–60% das uveítes posteriores. Reativação de cistos quiescentes na retina é a regra no imunocompetente. Apresentação sintomática média aos 29 anos.`,
  fisiopatologia:`Cistos latentes na retina se rompem → liberação de taquizoítos → necrose retiniana focal → resposta inflamatória mediada por linfócitos T (IFN-γ, TNF-α). A cicatriz pigmentada resulta de destruição do EPR e da retina interna.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Descrição</th><th>Frequência</th></tr>
<tr><td>Lesão satélite</td><td>Foco branco/amarelado ativo adjacente a cicatriz coriorretiniana pigmentada</td><td>70–80%</td></tr>
<tr><td>Vitreíte focal</td><td>"Farol de neblina" — haze vítreo sobre lesão ativa</td><td>80%</td></tr>
<tr><td>Uveíte anterior</td><td>Células CA, KPs finos, sinequias posteriores — reação secundária</td><td>30–50%</td></tr>
<tr><td>Vasculite retiniana</td><td>Bainhas perivasculares, oclusão de ramo próximo à lesão</td><td>40%</td></tr>
<tr><td>EMC</td><td>Edema macular cistoide — complicação de lesão justapapilar/macular</td><td>15%</td></tr>
<tr><td>Papilite</td><td>Lesão justapapilar (síndrome de Jensen)</td><td>10%</td></tr>
</table>
<span class="alert">🚨 RED FLAG: Lesão macular ou justapapilar, múltiplas lesões ativas, imunocomprometido — tratar SEMPRE.</span>`,
  diagnostico:`<strong>Clínico:</strong> Lesão satélite + vitreíte + cicatriz = diagnóstico clínico na maioria.<br>
<strong>Sorologias:</strong> IgG anti-toxoplasma (quase universal); IgM sugere infecção recente. Coeficiente de Goldmann-Witmer >3 = produção local de anticorpos (padrão-ouro europeu).<br>
<strong>PCR humor aquoso/vítreo:</strong> Sensibilidade 16–67%, especificidade >95%. Indicado em casos atípicos, imunocomprometidos ou refratários.<br>
<strong>OCT:</strong> Avalia extensão da lesão, EMC associado.<br>
<strong>AFG:</strong> Hiperfluorescência precoce (lesão ativa), hipofluorescência (cicatriz).`,
  tratamento:`<strong>1ª Linha — Clássico:</strong><br>
<span class="pill">Sulfadiazina</span> <span class="dose">1g 4x/dia (4g/dia) VO × 6 semanas</span><br>
<span class="pill">Pirimetamina</span> <span class="dose">Ataque: 75–100mg D1, depois 25–50mg/dia × 6 semanas</span><br>
<span class="pill">Ácido folínico</span> <span class="dose">10–25mg/dia (prevenir mielotoxicidade)</span><br>
<span class="pill">Prednisona</span> <span class="dose">0,5–1 mg/kg/dia VO — iniciar 24–48h após antibiótico</span><br><br>
<strong>2ª Linha — SMX-TMP (preferência atual 66,7% dos especialistas):</strong><br>
<span class="pill">SMX-TMP</span> <span class="dose">800/160mg 2x/dia VO × 45 dias</span> — eficácia similar, melhor tolerância, menor custo<br><br>
<strong>Alternativa com Clindamicina:</strong><br>
<span class="pill">Clindamicina</span> <span class="dose">300mg 4x/dia VO × 6 semanas</span> + pirimetamina (intolerância a sulfa)<br>
<span class="pill">Clindamicina intravítrea</span> <span class="dose">1mg/0,1mL</span> — lesão macular ameaçadora, não tolerância sistêmica<br><br>
<strong>Profilaxia secundária (recidivas frequentes):</strong><br>
<span class="pill">SMX-TMP</span> <span class="dose">800/160mg 3x/semana por 1–3 anos</span><br><br>
<strong>Complicações:</strong> EMC → triamcinolona sub-Tenon 40mg; glaucoma → hipotensores; DR → vitrectomia`,
  prognostico:`Bom para lesões periféricas. Mau prognóstico: lesão macular/justapapilar, múltiplas recidivas, imunocompromissão, lesão de grande extensão (>1,5 DD). 20% dos pacientes perdem acuidade significativa ao longo da vida.<br>
<strong>Formas Atípicas (SBO):</strong> Punctata externa (lesões múltiplas pequenas → confunde com MEWDS), forma difusa em imunossuprimidos (similar a ARN), papilite isolada (síndrome de Jensen), forma hemorrágica. Nessas formas, PCR de humor aquoso é essencial.<br>
<strong>Epidemiologia brasileira (SBO):</strong> Brasil tem a maior prevalência mundial de toxoplasmose ocular — soropositividade de 70–80% em adultos. Apresentação sintomática média aos 29 anos com pico de recidivas entre 20–40 anos.`,
  referencias:"Kanski 8ª Ed Cap.11 · BCSC AAO Section 9 · SBO Uveítes · Nussenblatt & Whitcup 4ª Ed · RBM 2023"
},
{
  id:"hlb27",
  nome:"Uveíte Anterior Aguda HLA-B27",
  sinonimos:"UAA espondiloartropática, Uveíte das Espondiloartrites",
  tipo:"nao-infecciosa",
  anatomica:["anterior"],
  tags:["HLA-B27","Anterior","Aguda","Espondilite","Recorrente","Unilateral"],
  preview:"Causa mais comum de uveíte anterior aguda recorrente. HLA-B27+ em 50–90%. Alternância entre os olhos.",
  etiologia:`<strong>Associações sistêmicas:</strong> Espondilite Anquilosante (30% desenvolvem UAA), Artrite Reativa (20–30%), DII-associada, Artrite Psoriática, Espondiloartrite indiferenciada.<br>
<strong>HLA-B27:</strong> Positivo em 50–90% dos casos. Presente em apenas 8% da população geral mas em 50–90% dos pacientes com UAA recorrente.<br>
<strong>Critérios SUN 2021:</strong> UA com curso agudo/recorrente unilateral ou alternante + ASAS-espondiloartrite e/ou HLA-B27+.`,
  fisiopatologia:`Mimetismo molecular entre peptídeos bacterianos e antígenos HLA-B27. Inflamação mediada por células T CD8+, IL-17 e TNF-α. Disbiose intestinal (Klebsiella) como gatilho.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Característica</th></tr>
<tr><td>Início</td><td>Súbito, dor intensa, fotofobia, lacrimejamento</td></tr>
<tr><td>Lateralidade</td><td>Unilateral (mas recidivas no olho contralateral são comuns)</td></tr>
<tr><td>KPs</td><td>Pequenos, não granulomatosos, difusos no endotélio inferior</td></tr>
<tr><td>Hipópio</td><td>Presente em 20% — característico (hipópio "móvel" ao mudar posição)</td></tr>
<tr><td>Sinequias</td><td>Posteriores em 50% dos casos agudos</td></tr>
<tr><td>Fundo</td><td>Normal (uveíte anterior pura)</td></tr>
<tr><td>PIO</td><td>Pode estar elevada (trabeculite) ou baixa (hipossecreção)</td></tr>
</table>
<span class="tip">✓ Clue: UAA dolorosa, unilateral, recorrente, alternante → pesquisar HLA-B27 + dor lombar inflamatória.</span>`,
  diagnostico:`<strong>HLA-B27</strong> (tipagem por PCR ou citometria)<br>
<strong>RX articulações sacroilíacas</strong> → sacroileíte (EA)<br>
<strong>Sorologias de exclusão:</strong> VDRL/FTA-ABS, Quantiferom-TB<br>
<strong>ACE e lisozima</strong> se suspeita de sarcoidose<br>
<strong>PCR humor aquoso</strong> se suspeita HSV/VZV/CMV`,
  tratamento:`<strong>Fase Aguda:</strong><br>
<span class="pill">Prednisolona acetato 1%</span> <span class="dose">1 gota a cada 1–2h × 1–2 dias → redução gradual em 4–6 semanas</span><br>
<span class="pill">Difluprednato 0,05%</span> <span class="dose">4–6x/dia (alternativa mais potente)</span><br>
<span class="pill">Ciclopentolato 1%</span> <span class="dose">2–3x/dia (cicloplegico — alivia espasmo ciliar e previne sinequias)</span><br>
<span class="pill">Atropina 1%</span> <span class="dose">1–2x/dia em casos graves com sinequias</span><br><br>
<strong>Sub-Tenon (casos graves/recidivantes):</strong><br>
<span class="pill">Triamcinolona 40mg/mL</span> <span class="dose">0,5–1mL sub-Tenon posterior</span><br><br>
<strong>Sistêmico (recidivas frequentes >3/ano):</strong><br>
<span class="pill">AINE oral</span> <span class="dose">Naproxeno 500mg 2x/dia ou Indometacina 25–50mg 3x/dia</span><br>
<span class="pill">Metotrexato</span> <span class="dose">15–25mg/semana — casos refratários</span><br>
<span class="pill">Adalimumabe</span> <span class="dose">40mg SC q2sem — refratário a AINE e imunossupressor convencional</span><br><br>
<strong>Tratar doença sistêmica associada</strong> em conjunto com reumatologista.`,
  prognostico:`Bom se tratado precocemente. Risco de complicações: catarata posterior (corticoide), glaucoma secundário, band keratopathy (casos crônicos). Recidivas em 50–80% dos casos.`,
  referencias:"SUN 2021 · Kanski Cap.11 · BCSC AAO · EULAR Guidelines 2023"
},
{
  id:"fuchs",
  nome:"Síndrome Uveítica de Fuchs",
  sinonimos:"Ciclite Heterocrômica de Fuchs, Iridociclite de Fuchs",
  tipo:"nao-infecciosa",
  anatomica:["anterior"],
  tags:["Fuchs","Heterocromia","KPs estrelados","Crônica","Vírus rubéola"],
  preview:"Uveíte anterior crônica não granulomatosa com KPs estrelados difusos, heterocromia e ausência de sinequias. Diagnóstico frequentemente tardio.",
  etiologia:`<strong>Etiologia:</strong> Incerta. Forte evidência para vírus da Rubéola (anticorpos intracamerulares elevados, RNA viral detectado no humor aquoso). T. gondii implicado em alguns casos.<br>
<strong>Epidemiologia:</strong> 2–4% de todas as uveítes. Diagnóstico médio aos 40 anos. Sem predileção racial ou de gênero. Unilateral em 90% dos casos.`,
  fisiopatologia:`Resposta imune crônica de baixo grau à infecção viral latente. Ruptura da barreira hematoaquosa → flare crônico sem sinequias (peculiaridade patognomônica).`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Característica</th></tr>
<tr><td>KPs</td><td><strong>Estrelados ("stellate"), brancos, difusos</strong> por todo endotélio — não respeita distribuição inferior (patognomônico)</td></tr>
<tr><td>Heterocromia</td><td>Hipocromia do olho afetado em 50–90% (mais evidente em olhos claros; difícil em olhos escuros)</td></tr>
<tr><td>Flare</td><td>Crônico, persistente, sem correlação com células</td></tr>
<tr><td>Ausência de sinequias</td><td>Critério diagnóstico — NUNCA forma sinequias posteriores (exceto pós-cirurgia)</td></tr>
<tr><td>Nódulos de Koeppe</td><td>Pequenos, brancos, na borda pupilar</td></tr>
<tr><td>Catarata</td><td>Posterior subcapsular em 70% — eventual cirurgia necessária</td></tr>
<tr><td>Glaucoma</td><td>15–30% — mecanismo multifatorial (trabecular, neovascular angular)</td></tr>
<tr><td>Vasos angulares</td><td>Gonioscopia: vasos finos radiais no ângulo — sinal de Amsler (sangramam na paracentese)</td></tr>
</table>
<span class="tip">✓ Clue: KPs estrelados difusos + sem sinequias + heterocromia + catarata = Fuchs. Não usar corticoide agressivamente!</span>`,
  diagnostico:`<strong>Clínico</strong> pelos critérios SUN 2021: UA com KPs estrelados + unilateral + heterocromia ou atrofia difusa de íris + sem endotelite/nódulos endoteliais.<br>
<strong>PCR humor aquoso:</strong> RNA da rubéola detectado em 70% dos casos (confirma etiologia).<br>
<strong>Excluir:</strong> sífilis (VDRL/FTA-ABS), sarcoidose (ACE, RX tórax), CMV/HSV/VZV (PCR).`,
  tratamento:`<strong>Princípio:</strong> Fuchs não responde bem a corticoides — tratamento sintomático e de complicações.<br><br>
<span class="pill">Corticoide tópico</span> <span class="dose">Uso criterioso, apenas em exacerbações agudas — não usar cronicamente</span><br>
<span class="pill">Cicloplégico</span> <span class="dose">Apenas em espasmo ciliar sintomático</span><br><br>
<strong>Catarata:</strong> Facoemulsificação — excelentes resultados. Risco de hemorragia angular (sinal de Amsler) — suturas preventivas.<br>
<strong>Glaucoma:</strong> Hipotensores tópicos → trabeculectomia se necessário.<br>
<strong>Rubéola confirmada:</strong> Sem tratamento antiviral eficaz disponível.`,
  prognostico:`Geralmente bom para visão central se complicações tratadas. Catarata ocorre em quase todos os casos ao longo do tempo. Glaucoma pode ser refratário.`,
  referencias:"SUN 2021 · Kanski Cap.11 · BCSC AAO Section 9"
},
{
  id:"vkh",
  nome:"Doença de Vogt-Koyanagi-Harada",
  sinonimos:"VKH, Uveomeningite com vitiligo, Síndrome de Harada",
  tipo:"nao-infecciosa",
  anatomica:["posterior","panuveite"],
  tags:["VKH","Bilateral","Coróide","Descolamento exsudativo","Autoimune","Melanócitos"],
  preview:"Panuveíte granulomatosa bilateral associada a meningismo, tinnitus, vitiligo e poliose. Mais prevalente em asiáticos, latinos e indígenas.",
  etiologia:`<strong>Etiologia:</strong> Resposta autoimune contra melanócitos mediada por linfócitos T CD4+ (Th1/Th17) contra antígenos associados à tirosinase. Detonada por infecção viral (herpes?) em pacientes geneticamente suscetíveis.<br>
<strong>Associação HLA:</strong> HLA-DR4, HLA-DQ4 (japoneses); HLA-DR1, HLA-DR4 (latinos)<br>
<strong>Epidemiologia:</strong> Mais comum em asiáticos, hispânicos, indígenas americanos, médio-orientais. Raro em caucasianos e africanos. Pico 20–50 anos. F>M.`,
  fisiopatologia:`Autoimunidade contra melanócitos da úvea, pele, meninges e ouvido interno. Coroidite difusa bilateral → descolamento exsudativo da retina sensorial. Inflamação meníngea → pleocitose liquórica.`,
  sinais:`<table class="ds-table">
<tr><th>Fase</th><th>Manifestações</th></tr>
<tr><td><strong>Pródromo</strong> (3–5 dias)</td><td>Cefaleia, meningismo, disacusia, tinnitus, vertigem, fotofobia, paralisias de nervos cranianos</td></tr>
<tr><td><strong>Uveítica</strong> (aguda)</td><td>Visão turva bilateral, coroidite difusa multifocal, DSR exsudativo bilateral, edema de papila, KPs granulomatosos, hipópio</td></tr>
<tr><td><strong>Crônica / Convalescente</strong></td><td>Vitiligo, poliose (cílios brancos), alopecia, depigmentação peripapilar, fundo "sunset glow" (depigmentado)</td></tr>
<tr><td><strong>Recidivante</strong></td><td>Uveíte anterior crônica granulomatosa, nódulos de Dalen-Fuchs, glaucoma, catarata</td></tr>
</table>
<span class="alert">🚨 VKH completa: 1+2+3+4+5 critérios. Incompleta: 1+2+3 + (4 ou 5). Provável: 1+2+3 apenas.</span>`,
  diagnostico:`<strong>Critérios diagnósticos modificados (2001):</strong><br>
1. Sem trauma/cirurgia ocular prévia<br>2. Sem outra etiologia identificada<br>3. Envolvimento ocular bilateral<br>4. Achados neurológicos/auditivos (meningismo, pleocitose, tinnitus, perda auditiva)<br>5. Achados cutâneos (vitiligo, poliose, alopecia)<br><br>
<strong>Exames:</strong> OCT → DSR exsudativo bilateral; AFG → múltiplos pontos hiperfluorescentes precoces com pooling tardio; ICGA → hipofluorescência coroidal difusa; Punção lombar → pleocitose (em 80%); Audiometria → perda neurossensorial.`,
  tratamento:`<strong>Fase Aguda — Pulso IV de corticoide:</strong><br>
<span class="pill">Metilprednisolona IV</span> <span class="dose">1g/dia × 3 dias</span> (internação)<br>
<span class="pill">Prednisona oral</span> <span class="dose">1–1,5 mg/kg/dia (máx 80mg) → tapering LENTO em 6–12 meses</span><br>
<span class="alert">⚠ Tapering rápido = recidiva grave. Manter >10mg/dia por pelo menos 6 meses.</span><br><br>
<strong>Imunossupressor (economizador de corticoide ou refratário):</strong><br>
<span class="pill">Azatioprina</span> <span class="dose">1–2,5 mg/kg/dia</span><br>
<span class="pill">Micofenolato Mofetil</span> <span class="dose">1–3g/dia</span><br>
<span class="pill">Ciclosporina</span> <span class="dose">2,5–5 mg/kg/dia</span><br><br>
<strong>Biológico (refratário):</strong><br>
<span class="pill">Adalimumabe</span> <span class="dose">40mg SC q2sem</span><br>
<span class="pill">Infliximabe</span> <span class="dose">5mg/kg IV semanas 0, 2, 6 → q8sem</span><br><br>
<strong>Local:</strong> Prednisolona 1% tópica + cicloplégico para componente anterior.`,
  prognostico:`<strong>Bom se tratado agressivamente na fase aguda.</strong> Nussenblatt: tratamento precoce e agressivo previne sunset glow fundus e nummular scars. Mau prognóstico: diagnóstico tardio, tapering rápido (<6 meses), recidivas múltiplas, glaucoma, membrana neovascular sub-retiniana.<br>
<strong>Sunset Glow Fundus (Nussenblatt):</strong> Depigmentação EPR coroidal em laranja rosado = fase crônica de VKH. Presente em >80% dos VKH crônicos não tratados adequadamente. Prevenível com IS precoce.<br>
<strong>Nummular Scars (SBO):</strong> Múltiplas cicatrizes arredondadas de EPR = episódios recorrentes não controlados. Quanto mais cicatrizes, pior a AV final.`,
  referencias:"Kanski Cap.11 · BCSC AAO · Critérios VKH 2001 · Nussenblatt & Whitcup 4ª Ed · SBO Uveítes · J Ophthalmol 2020"
},
{
  id:"behcet",
  nome:"Doença de Behçet",
  sinonimos:"Síndrome de Behçet, Doença de Silk Road",
  tipo:"nao-infecciosa",
  anatomica:["anterior","posterior","panuveite"],
  tags:["Behçet","Aftas","HLA-B51","Vasculite","Hipópio móvel","Mediterrâneo"],
  preview:"Vasculite oclusiva retiniana bilateral grave. Tríade clássica: aftas orais + úlceras genitais + uveíte. Mais comum em homens jovens do mediterrâneo.",
  etiologia:`<strong>Etiologia:</strong> Vasculite sistêmica de etiologia desconhecida. Provável gatilho infeccioso (S. pyogenes, HSV) em indivíduos geneticamente suscetíveis.<br>
<strong>HLA-B51:</strong> Presente em 60–70% dos pacientes (RR = 5–10x).<br>
<strong>Epidemiologia:</strong> Prevalência na "Rota da Seda" (Turquia, Iran, Japão). H>F (3:1) para envolvimento ocular. Pico 20–40 anos.`,
  fisiopatologia:`Vasculite neutrofílica oclusiva de artérias e veias de pequeno e médio calibre. Ativação de neutrófilos, macrófagos e linfócitos T. TNF-α e IL-17 centrais na patogênese. Oclusão vascular retiniana = principal causa de perda visual.`,
  sinais:`<table class="ds-table">
<tr><th>Manifestação</th><th>Frequência</th><th>Detalhe</th></tr>
<tr><td>Aftas orais</td><td>>99%</td><td>Critério obrigatório; ≥3 episódios/ano</td></tr>
<tr><td>Uveíte</td><td>70%</td><td>Bilateral, não granulomatosa, recorrente, vasculite oclusiva</td></tr>
<tr><td>Hipópio</td><td>30–70%</td><td><strong>Hipópio "móvel"</strong> — muda de posição com postura — patognomônico</td></tr>
<tr><td>Úlceras genitais</td><td>60–80%</td><td>Dolorosas, cicatrizes residuais</td></tr>
<tr><td>Vasculite retiniana</td><td>60%</td><td>Oclusão de ramos arteriais e venosos, neovascularização</td></tr>
<tr><td>Pseudofoliculite</td><td>70%</td><td>Lesões acneiformes, eritema nodoso</td></tr>
<tr><td>Teste de patergia</td><td>40–70%</td><td>Pústula após picada de agulha (positivo em 48h)</td></tr>
<tr><td>Trombose</td><td>25%</td><td>TVP, Budd-Chiari, trombose cerebral</td></tr>
</table>
<span class="tip">✓ Mnemônico BEHÇET: Boca (aftas) + Erupção cutânea + Hipópio + Çestiva genitais + Eye (olho) + Teste patergia.</span>`,
  diagnostico:`<strong>Critérios Internacionais (ISBD 2014):</strong><br>
• Aftas orais: 2 pontos<br>• Úlceras genitais: 2 pontos<br>• Manifestações oculares: 2 pontos<br>• Lesões de pele: 1 ponto<br>• SNC: 1 ponto<br>• Manifestações vasculares: 1 ponto<br>• Teste de patergia+: 1 ponto<br>
<strong>≥4 pontos = diagnóstico</strong><br><br>
<strong>AFG:</strong> Vasculite arterial e venosa, áreas de hipoperfusão, neovascularização, leakage do DO.`,
  tratamento:`<strong>Ataque agudo (hipópio/vasculite):</strong><br>
<span class="pill">Prednisolona tópica 1%</span> <span class="dose">1 gota/hora → redução gradual</span><br>
<span class="pill">Colchicina</span> <span class="dose">0,5–1mg 2x/dia (previne recidivas mucocutâneas)</span><br><br>
<strong>Doença ocular grave / Manutenção:</strong><br>
<span class="pill">Azatioprina</span> <span class="dose">2,5 mg/kg/dia — poupadora de corticoide, reduz recidivas oculares</span><br>
<span class="pill">Ciclosporina</span> <span class="dose">3–5 mg/kg/dia — eficaz para vasculite retiniana</span><br>
<span class="pill">Prednisona</span> <span class="dose">1 mg/kg/dia + tapering</span><br><br>
<strong>Refratário (biológico — 1ª escolha internacional):</strong><br>
<span class="pill">Infliximabe</span> <span class="dose">5 mg/kg IV semanas 0,2,6 → q4–8sem</span><br>
<span class="pill">Adalimumabe</span> <span class="dose">40mg SC q2sem</span><br>
<span class="pill">Interferão alfa-2a</span> <span class="dose">3–6 MUI SC 3x/semana (Behçet refratário — evidência forte)</span><br>
<span class="pill">Secuquinumabe</span> <span class="dose">Anti-IL-17 — estudos promissores</span><br><br>
<strong>Neovascularização:</strong> Anti-VEGF intravítreo + fotocoagulação`,
  prognostico:`Mau prognóstico ocular: homens jovens, vasculite oclusiva, atraso no tratamento. 25–40% perdem acuidade significativa sem tratamento adequado. Infliximabe melhorou substancialmente o prognóstico.`,
  referencias:"Kanski Cap.11 · BCSC AAO · ISBD Criteria 2014 · EULAR Guidelines 2018"
},
{
  id:"sarcoidose",
  nome:"Sarcoidose Ocular",
  sinonimos:"Uveíte Sarcoide, Granulomatose de Schaumann",
  tipo:"nao-infecciosa",
  anatomica:["anterior","intermediaria","posterior","panuveite"],
  tags:["Sarcoidose","Granulomatosa","ACE","KPs grandes","Bilateral","Sistêmica"],
  preview:"Doença granulomatosa sistêmica que causa uveíte em 10–50% dos casos. KPs em gordura de carneiro, nódulos de Busacca, periphlebite em gota de vela.",
  etiologia:`<strong>Etiologia:</strong> Desconhecida. Resposta imune granulomatosa exagerada a antígenos ambientais (Mycobacterium?) em indivíduos suscetíveis.<br>
<strong>Epidemiologia:</strong> Prevalência 10–40/100.000. Mais comum em afro-americanos (40x) e europeus do norte. Pico 20–40 anos e 50–65 anos. F>M para uveíte.`,
  fisiopatologia:`Granulomas não caseosos compostos por macrófagos ativados e células gigantes multinucleadas. Hipersecreção de ACE pelos macrófagos granulomatosos. Hipercalcemia por produção de 1,25-diidroxivitamina D.`,
  sinais:`<table class="ds-table">
<tr><th>Tipo</th><th>Achado Ocular</th></tr>
<tr><td>KPs granulomatosos</td><td><strong>"Gordura de carneiro" (mutton-fat)</strong> — grandes, amarelados, oleosos, no terço inferior da córnea</td></tr>
<tr><td>Nódulos iridianos</td><td>Busacca (estroma iridiano) + Koeppe (borda pupilar) + nódulo do ângulo (Berlin)</td></tr>
<tr><td>Granuloma conjuntival</td><td>Nódulos conjuntivais palpáveis — biópsia diagnóstica!</td></tr>
<tr><td>Periphlebite</td><td>"Gota de vela" (candle-wax drippings) — bainhas perivenosas amareladas</td></tr>
<tr><td>Coroidite multifocal</td><td>Lesões coroidianas múltiplas, pequeenas, amareladas</td></tr>
<tr><td>Granuloma de papila</td><td>Edema/granuloma da cabeça do nervo óptico</td></tr>
<tr><td>Glândula lacrimal</td><td>Aumento bilateral → biópsia diagnóstica de alta especificidade</td></tr>
</table>
<span class="tip">✓ Clue: "Periphlebite em gota de vela" + KPs mutton-fat + nódulos + adenopatia hilar bilateral → Sarcoidose.</span>`,
  diagnostico:`<strong>ACE sérica:</strong> Elevada em 60–80% (sensibilidade limitada). Normaliza com tratamento.<br>
<strong>Lisozima:</strong> Mais sensível que ACE em algumas séries.<br>
<strong>Cálcio sérico e urinário:</strong> Hipercalcemia em 10–20%.<br>
<strong>RX/TC tórax:</strong> Adenopatia hilar bilateral (sinal de Pawnbroker) em 90% dos casos ativos.<br>
<strong>PET-CT:</strong> Estadiamento sistêmico, guia biópsia.<br>
<strong>Biópsia:</strong> Conjuntival (nódulos), lacrimal, brônquica, linfonodal — granuloma não caseoso.<br>
<strong>ICGA:</strong> Hipofluorescência coroidal difusa em fases ativas.`,
  tratamento:`<strong>Primeira Linha:</strong><br>
<span class="pill">Prednisona</span> <span class="dose">0,5–1 mg/kg/dia × 4–6 semanas → tapering 12–24 meses</span><br>
<span class="pill">Prednisolona tópica 1%</span> <span class="dose">Para componente anterior</span><br>
<span class="pill">Triamcinolona sub-Tenon 40mg</span> <span class="dose">Para uveíte intermediária/posterior unilateral</span><br><br>
<strong>Imunossupressores (poupadores de corticoide):</strong><br>
<span class="pill">Metotrexato</span> <span class="dose">7,5–25 mg/semana VO/SC + ácido fólico 5mg/semana</span><br>
<span class="pill">Azatioprina</span> <span class="dose">1,5–2 mg/kg/dia</span><br>
<span class="pill">Micofenolato</span> <span class="dose">1–3g/dia</span><br><br>
<strong>Biológico (refratário):</strong><br>
<span class="pill">Adalimumabe</span> <span class="dose">40mg SC q2sem</span><br>
<span class="pill">Infliximabe</span> <span class="dose">5mg/kg IV semanas 0,2,6 → q8sem</span>`,
  prognostico:`Variável. Uveíte aguda granulomatosa com adenopatia hilar = bom prognóstico (60% remissão espontânea). Doença crônica ocular = risco de catarata, glaucoma, NVC.`,
  referencias:"Kanski Cap.11 · BCSC AAO · ATS/ERS/WASOG Guidelines · Ophthalmology 2020"
},
{
  id:"sifilis",
  nome:"Sífilis Ocular",
  sinonimos:"Uveíte Sifilítica, Neurosífilis Ocular",
  tipo:"infecciosa",
  anatomica:["anterior","posterior","panuveite"],
  tags:["Sífilis","Treponema","VDRL","FTA-ABS","Mimetizador","Penicilina","HIV"],
  preview:"A grande simuladora — pode mimetizar qualquer uveíte. Sempre excluir antes de iniciar imunossupressão. Incidência crescente associada ao HIV.",
  etiologia:`<strong>Agente:</strong> Treponema pallidum (bactéria espiroqueta).<br>
<strong>Transmissão:</strong> Sexual (principal), vertical (congênita), transfusão sanguínea, contato direto com lesão ativa.<br>
<strong>Epidemiologia:</strong> Incidência em crescimento global, especialmente em HSH e pacientes HIV+. Sífilis ocular ocorre em qualquer fase (secundária, terciária, latente). Co-infecção HIV em até 50% dos casos de sífilis ocular.`,
  fisiopatologia:`Disseminação hematogênica do T. pallidum → invasão ocular direta + resposta imune local inflamatória granulomatosa. O olho atua como "santuário imunológico" permitindo persistência bacteriana.`,
  sinais:`<table class="ds-table">
<tr><th>Localização</th><th>Achado</th><th>Frequência</th></tr>
<tr><td>UA</td><td>Irite aguda ou crônica, KPs (pode ser granulomatosa), hipópio, sinequias</td><td>Comum</td></tr>
<tr><td>UP — Coriorretinite</td><td>Multifocal, bilateral, lesões amareladas profundas</td><td>50%</td></tr>
<tr><td>UP — Placóide posterior</td><td>Lesão(ões) placóide(s) grande(s) no polo posterior — sinal de alerta sifílico!</td><td>15%</td></tr>
<tr><td>Vasculite</td><td>Arterite, oclusão vascular retiniana</td><td>30%</td></tr>
<tr><td>Neurorretinite</td><td>Edema de papila + estrela macular</td><td>20%</td></tr>
<tr><td>Cristais de íris</td><td>Corpos de Russell — acúmulos plasmocitários na íris (crônica)</td><td>Raro</td></tr>
</table>
<span class="alert">🚨 Coriorretinite placóide posterior sifilítica = emergência. HIV+ sem tratamento → perda visual rápida e irreversível.</span>`,
  diagnostico:`<strong>Triagem:</strong> VDRL ou RPR (teste não treponêmico — titulagem de atividade)<br>
<strong>Confirmação:</strong> FTA-ABS ou TPHA ou TPPA (teste treponêmico — permanece positivo para vida)<br>
<strong>Neurossífilis:</strong> Indicar punção lombar se: HIV+, falha terapêutica, sinais neurológicos, uveíte refratária. LCR: VDRL+, pleocitose, proteína elevada.<br>
<strong>PCR humor aquoso:</strong> T. pallidum — sensibilidade variável, útil em casos atípicos.`,
  tratamento:`<strong>Sífilis Ocular = Tratar como Neurossífilis:</strong><br>
<span class="pill">Penicilina G Cristalina</span> <span class="dose">18–24 milhões UI/dia IV (3–4 milhões UI q4h) × 14 dias</span><br><br>
<strong>Alergia à Penicilina:</strong><br>
<span class="pill">Ceftriaxona</span> <span class="dose">2g IV/IM 1x/dia × 14 dias</span><br>
<span class="pill">Doxiciclina</span> <span class="dose">200mg 2x/dia × 28 dias</span> (alternativa oral, menor evidência)<br><br>
<strong>Dessensibilização à penicilina</strong> é preferível em gestantes e HIV+.<br><br>
<strong>Adjuvante:</strong> Prednisolona tópica para componente anterior ativo.<br>
<span class="alert">⚠ Reação de Jarisch-Herxheimer: febre, calafrios nas primeiras 24h — informar paciente, não interromper antibiótico.</span>`,
  prognostico:`Boa resposta se tratado precocemente. Coriorretinite placóide posterior = risco de cicatriz definitiva. Monitorar títulos de VDRL aos 6 e 12 meses pós-tratamento.`,
  referencias:"CDC STI Guidelines 2021 · BCSC AAO · Kanski Cap.11 · Ophthalmology 2022"
},
{
  id:"tuberculose",
  nome:"Tuberculose Ocular",
  sinonimos:"Uveíte Tuberculosa, Coriorretinite Tubercular",
  tipo:"infecciosa",
  anatomica:["anterior","posterior","panuveite"],
  tags:["TB","Mycobacterium","IGRA","Granuloma","Brasil","Coroidite serpiginoide"],
  preview:"Segunda maior causa de uveíte infecciosa no Brasil. Pode apresentar-se como qualquer tipo de uveíte. Granuloma de Dalen-Fuchs e coroidite serpiginoide-like.",
  etiologia:`<strong>Agente:</strong> Mycobacterium tuberculosis (bacilo álcool-ácido resistente).<br>
<strong>Epidemiologia:</strong> Brasil é 3º país em número de casos de TB no mundo. TB ocular ocorre em <1% dos infectados, mas é causa relevante de uveíte em países endêmicos. Pode ocorrer sem TB pulmonar ativa (hipersensibilidade a antígenos).`,
  fisiopatologia:`Disseminação hematogênica durante bacteremia → granuloma ocular. Ou hipersensibilidade tipo IV a antígenos do M. tuberculosis sem bacilo viável no olho (forma imune — maioria dos casos oculares).`,
  sinais:`<table class="ds-table">
<tr><th>Apresentação</th><th>Achado Típico</th></tr>
<tr><td>UA granulomatosa</td><td>KPs mutton-fat, nódulos de Busacca/Koeppe, sinequias extensas</td></tr>
<tr><td>Coroidite serpiginoide-like</td><td>Lesões coroidianas geográficas, peripapilar, progressivas — mimetiza coroidite serpiginosa</td></tr>
<tr><td>Granuloma de Dalen-Fuchs</td><td>Nódulos sub-retinianos pequenos, amarelados, multifocais</td></tr>
<tr><td>Periphlebite</td><td>Bainhas venosas periféricas — similar a sarcoidose</td></tr>
<tr><td>Vasculite oclusiva</td><td>Oclusão ramo arterial/venoso, neovascularização</td></tr>
<tr><td>Panuveíte</td><td>Formas graves com vitreíte intensa + lesões posteriores extensas</td></tr>
</table>
<span class="tip">✓ Clue: Uveíte granulomatosa + RX tórax anormal + IGRA/PPD+ + resposta ao tratamento anti-TB = TB ocular presumida.</span>`,
  diagnostico:`<strong>PPD (Mantoux):</strong> ≥10mm (≥5mm em imunossuprimidos) — triagem. Falso-negativo em imunossuprimidos.<br>
<strong>IGRA (QuantiFERON-TB Gold):</strong> Mais específico que PPD, não afetado pela vacina BCG. Padrão-ouro de triagem.<br>
<strong>RX/TC tórax:</strong> Infiltrado apical, cavitações, adenopatia hilar, calcificações.<br>
<strong>PCR humor aquoso/vítreo:</strong> M. tuberculosis — sensibilidade 30–60%, especificidade >95%.<br>
<strong>Biópsia coroidiana/vítrea:</strong> Em casos refratários com suspeita alta.<br>
<strong>Diagnóstico definitivo:</strong> Baciloscopia ou cultura positiva para M. tuberculosis.`,
  tratamento:`<strong>Esquema RIPE (6 meses — PCDT-TB Brasil):</strong><br>
<span class="pill">Rifampicina</span> <span class="dose">600mg/dia (peso >50kg) VO</span><br>
<span class="pill">Isoniazida</span> <span class="dose">300mg/dia VO</span><br>
<span class="pill">Pirazinamida</span> <span class="dose">2g/dia (peso >50kg) VO — primeiros 2 meses</span><br>
<span class="pill">Etambutol</span> <span class="dose">1200mg/dia VO — primeiros 2 meses</span><br>
<strong>Duração total: 6 meses (2 RIPE + 4 RI)</strong><br><br>
<strong>Adjuvante ocular:</strong><br>
<span class="pill">Prednisona</span> <span class="dose">0,5–1mg/kg/dia → tapering após 4–6 semanas</span> — reduz hipersensibilidade e dano cicatricial<br>
<span class="pill">Corticoide tópico</span> <span class="dose">Para componente anterior</span>`,
  prognostico:`Variável. Coroidite serpiginoide-like = pior prognóstico visual. Boa resposta na maioria se tratado em tempo. Risco de neurite óptica por etambutol (monitorar acuidade e visão de cores).`,
  referencias:"PCDT Tuberculose MS 2019 · Kanski Cap.11 · BCSC AAO · WHO TB Guidelines 2022"
},
{
  id:"cmv",
  nome:"Retinite por CMV",
  sinonimos:"Citomegalovírus, CMV Retinitis",
  tipo:"infecciosa",
  anatomica:["posterior"],
  tags:["CMV","HIV","AIDS","CD4<100","Ganciclovir","Valganciclovir","Imunocomprometido"],
  preview:"Infecção oportunista mais comum em AIDS com CD4<100. Retinite branca necrosante com hemorragias — padrão 'pizza'. Ameaça grave à visão.",
  etiologia:`<strong>Agente:</strong> Citomegalovírus (CMV) — herpesvírus humano tipo 5.<br>
<strong>Epidemiologia:</strong> Prevalência reduzida na era HAART, mas ainda relevante em: HIV/AIDS (CD4<100), transplantados, imunossuprimidos. CMV causa 75–85% das retinopatias em AIDS avançada. CMV anterior (iridociclite por CMV) ocorre em imunocompetentes asiáticos (perfil distinto).`,
  fisiopatologia:`Reativação de infecção latente com imunossupressão grave. CMV infecta células endoteliais e neurônios retinianos → necrose retiniana hemorrágica progressiva. Bordas ativas avançam 250–750μm/semana sem tratamento.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Descrição</th></tr>
<tr><td>Retinite necrosante</td><td>Área branca densa com hemorragias em chama — padrão "pizza Margherita"</td></tr>
<tr><td>Distribuição</td><td>Periférica inicial (90%) ou central (10% — pior prognóstico)</td></tr>
<tr><td>Progressão</td><td>Borda ativa avança → lesão geográfica confluente</td></tr>
<tr><td>Vitreíte</td><td>Mínima ou ausente (diferencia de ARN que tem vitreíte intensa)</td></tr>
<tr><td>Uveíte anterior</td><td>Mínima (diferencia de ARN)</td></tr>
<tr><td>Descolamento retina</td><td>30% — complicação tardia em área de retinite</td></tr>
<tr><td>Forma granular</td><td>Lesão periférica amorfa sem hemorragia — CMV de baixa carga viral</td></tr>
</table>
<span class="alert">🚨 CMV + CD4<50 → EMERGÊNCIA. Sem tratamento = cegueira bilateral em semanas.</span>`,
  diagnostico:`<strong>Clínico</strong> na maioria dos casos (padrão clássico + contexto HIV).<br>
<strong>PCR humor aquoso/vítreo:</strong> CMV — alta sensibilidade e especificidade.<br>
<strong>PCR sangue:</strong> Carga viral CMV — monitoramento de resposta ao tratamento.<br>
<strong>CD4+:</strong> Quase sempre <100 células/μL.<br>
<strong>CMV anterior:</strong> PCR humor aquoso → necessário para diagnóstico (apresentação atípica em imunocompetentes asiáticos).`,
  tratamento:`<strong>Indução (3–6 semanas):</strong><br>
<span class="pill">Valganciclovir oral</span> <span class="dose">900mg 2x/dia × 21 dias</span> — padrão para retinite periférica<br>
<span class="pill">Ganciclovir IV</span> <span class="dose">5mg/kg 2x/dia × 14–21 dias</span> — doença ameaçadora à visão (central/peripapillar)<br>
<span class="pill">Ganciclovir intravítreo</span> <span class="dose">2mg/0,05mL</span> — adjuvante em doença severa ou resistência<br>
<span class="pill">Foscarnet IV</span> <span class="dose">90mg/kg 2x/dia</span> — resistência a ganciclovir<br><br>
<strong>Manutenção (indefinido até reconstituição imune):</strong><br>
<span class="pill">Valganciclovir</span> <span class="dose">900mg 1x/dia</span><br><br>
<strong>Suspender quando:</strong> CD4 > 100 células/μL por ≥3 meses com HAART eficaz.<br><br>
<strong>CMV Anterior (imunocompetente):</strong><br>
<span class="pill">Valganciclovir</span> <span class="dose">900mg 2x/dia × 3–6 meses</span> + corticoide tópico com cautela`,
  prognostico:`Com HAART: CD4 melhora → CMV inativo. Sem HAART: progressão a cegueira. Descolamento de retina em cicatriz = cirurgia difícil. Síndrome de reconstituição imune pode causar vitreíte inflamatória paradoxal.`,
  referencias:"CDC/DHHS HIV Guidelines 2023 · BCSC AAO · Kanski Cap.11 · MSD Manuals"
},
{
  id:"arn",
  nome:"Necrose Retiniana Aguda (ARN)",
  sinonimos:"Acute Retinal Necrosis, Síndrome de Urayama",
  tipo:"infecciosa",
  anatomica:["posterior","panuveite"],
  tags:["ARN","HSV","VZV","Necrose","Periférica","Descolamento","Emergência"],
  preview:"Retinite necrosante fulminante por HSV ou VZV. Tríade: retinite periférica necrosante + vasculite + vitreíte intensa. Emergência oftalmológica.",
  etiologia:`<strong>Agentes:</strong> VZV (mais comum em adultos), HSV-1 (crianças/jovens), HSV-2 (neonatal/adultos jovens).<br>
<strong>Pode ocorrer em imunocompetentes</strong> (diferencia de CMV).<br>
<strong>PORN</strong> (Progressive Outer Retinal Necrosis) = variante em HIV/imunossuprimidos — sem vitreíte, pior prognóstico.`,
  fisiopatologia:`Reativação viral → disseminação axonal retrógrada ao olho via nervo trigeminal (HSV) ou reativação gangliônica do VZV → necrose hemorrágica fulminante da retina periférica com oclusão arterial.`,
  sinais:`<table class="ds-table">
<tr><th>Critério SUN 2021</th><th>Detalhe</th></tr>
<tr><td>Retinite necrosante periférica</td><td>Coalescente, multifocal, avanço rápido em direção posterior</td></tr>
<tr><td>Vasculite oclusiva</td><td>Arterite retiniana com bainhas e oclusão — diferencia de CMV</td></tr>
<tr><td>Vitreíte intensa</td><td>Haze vítreo grau 2–4+ — diferencia de PORN</td></tr>
<tr><td>PCR humor aquoso/vítreo+</td><td>HSV ou VZV confirmado</td></tr>
<tr><td>Progressão rápida</td><td>Sem tratamento: coalescência total em dias-semanas</td></tr>
</table>
<strong>Complicação:</strong> Descolamento de retina em 50–75% (lesão periférica → buraco em área necrótica).`,
  diagnostico:`<strong>PCR humor aquoso/vítreo:</strong> VZV, HSV-1, HSV-2 — diagnóstico definitivo.<br>
<strong>Clínico urgente:</strong> não esperar PCR para iniciar tratamento.<br>
<strong>Excluir CMV</strong> (especialmente em imunocomprometidos).`,
  tratamento:`<strong>URGÊNCIA — Iniciar imediatamente:</strong><br>
<span class="pill">Aciclovir IV</span> <span class="dose">10–15 mg/kg q8h × 10–14 dias</span><br>
Depois:<br>
<span class="pill">Valaciclovir oral</span> <span class="dose">1g 3x/dia × 3–6 meses</span><br>
<span class="pill">Fanciclovir oral</span> <span class="dose">500mg 3x/dia × 3–6 meses</span><br><br>
<strong>Adjuvante (após 24–48h de antiviral):</strong><br>
<span class="pill">Prednisona</span> <span class="dose">1 mg/kg/dia → tapering após resposta</span><br>
<span class="pill">Aspirina</span> <span class="dose">100mg/dia (antiplaquetário para vasculite oclusiva)</span><br>
<span class="pill">Ganciclovir intravítreo</span> <span class="dose">2mg/0,05mL — casos graves ou resistência</span><br><br>
<strong>Prevenção do DR:</strong> Fotocoagulação a laser em torno das áreas de necrose (controverso).<br>
<strong>DR instalado:</strong> Vitrectomia + óleo de silicone.`,
  prognostico:`Guarda reservado. 50–75% evoluem com DR. Bilateralização em 30–36% (principalmente VZV). Tratamento precoce melhora prognóstico. PORN = pior prognóstico (>90% com AV final <20/400).`,
  referencias:"BCSC AAO · Kanski Cap.11 · Ophthalmology 2021 · Arch Ophthalmol"
},
{
  id:"parsplanitis",
  nome:"Pars Planitis",
  sinonimos:"Uveíte Intermediária Idiopática, Ciclite Periférica",
  tipo:"nao-infecciosa",
  anatomica:["intermediaria"],
  tags:["Pars Planitis","Snowbank","Snowball","Jovens","Idiopática","Bilateral"],
  preview:"Forma mais comum de uveíte intermediária. Snowbanks inferiores e snowballs. Jovens e adultos jovens, bilateral. Associação com Esclerose Múltipla.",
  etiologia:`<strong>Definição SUN 2021:</strong> Uveíte intermediária em que há snowbanks/snowballs na ausência de doença infecciosa, sarcoidose, esclerose múltipla ou outra causa identificada.<br>
<strong>Epidemiologia:</strong> 5–8% de todas as uveítes. Pico 5–25 anos. F=M. Bilateral em 70–90%.`,
  fisiopatologia:`Desconhecida. Hipótese: resposta imune aberrante à proteína S (proteína do nervo óptico) ou antígenos virais (EBV?) na pars plana e vítreo periférico.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Descrição</th></tr>
<tr><td>Snowballs</td><td>Células vítreas aglomeradas formando "bolas de neve" — inferiores</td></tr>
<tr><td>Snowbanks</td><td>Exsudato branco-amarelado sobre pars plana/retina periférica inferior — patognomônico</td></tr>
<tr><td>Periphlebite</td><td>Bainhas perivenosas periféricas em 30%</td></tr>
<tr><td>EMC</td><td>Edema macular cistoide — principal causa de baixa AV (50%)</td></tr>
<tr><td>Neovascularização</td><td>Periférica em snowbanks ativos em 10%</td></tr>
<tr><td>Uveíte anterior</td><td>Leve — células e flare mínimos</td></tr>
</table>
<span class="tip">✓ Associação com Esclerose Múltipla em 15–20% — solicitar RM crânio em todos os casos.</span>`,
  diagnostico:`<strong>Diagnóstico de exclusão:</strong> Excluir sarcoidose (ACE, RX tórax), EM (RM crânio), sífilis (VDRL/FTA-ABS), doença de Lyme, toxocara (ELISA).<br>
<strong>RBV/UFP (retinografia/biomicroscopia indireta):</strong> Visualização dos snowbanks.<br>
<strong>OCT macular:</strong> Avaliação e monitoramento do EMC.`,
  tratamento:`<strong>Leve/Assintomático:</strong> Observação (especialmente em crianças, snowballs sem EMC).<br><br>
<strong>EMC / Snowbanks ativos:</strong><br>
<span class="pill">Triamcinolona sub-Tenon 40mg</span> <span class="dose">0,5–1mL — 1ª linha para EMC unilateral</span><br>
<span class="pill">Implante Ozurdex (dexametasona intravítreo)</span> <span class="dose">0,7mg — EMC refratário, efeito 5–6 meses</span><br>
<span class="pill">Prednisona oral</span> <span class="dose">1mg/kg/dia → tapering — bilateral grave</span><br><br>
<strong>Imunossupressor (casos crônicos/bilateral):</strong><br>
<span class="pill">Metotrexato</span> <span class="dose">7,5–25mg/semana</span><br>
<span class="pill">Micofenolato</span> <span class="dose">1–3g/dia</span><br><br>
<strong>Cirurgia:</strong> Crioterapia ou fotocoagulação de snowbanks neovascularizados; vitrectomia em DR ou opacidade vítrea densa.`,
  prognostico:`80% mantêm boa AV (>20/40) se EMC controlado. 25% terão catarata relacionada ao corticoide/inflamação. Evolução crônica na maioria.`,
  referencias:"SUN 2021 · BCSC AAO · Kanski Cap.11"
},
{
  id:"birdshot",
  nome:"Birdshot Chorioretinopathy",
  sinonimos:"Retinocoroidopatia de Birdshot, Vitiligo Uveal",
  tipo:"nao-infecciosa",
  anatomica:["posterior","panuveite"],
  tags:["Birdshot","HLA-A29","ERG","Pontos coroidianos","Cegueira noturna","Crônica"],
  preview:"Coriorretinite bilateral crônica com múltiplas lesões ovoides coroidianas claras, HLA-A29 em >95%, ERG alterado. Causa importante de perda visual progressiva.",
  etiologia:`<strong>Associação HLA-A29:</strong> >95% dos casos (antígeno mais fortemente associado a qualquer uveíte). Prevalência de HLA-A29 na população geral: 7%.<br>
<strong>Epidemiologia:</strong> Rara — 8/100.000. Exclusiva de adultos brancos (pico 40–60 anos). F>M (2:1).`,
  fisiopatologia:`Autoimunidade mediada por linfócitos T CD4+ HLA-A29 restritos contra antígenos retinianos (CRALBP). Inflamação coroidal difusa → atrofia do EPR e fotorreceptores.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Descrição</th></tr>
<tr><td>Lesões Birdshot</td><td>Múltiplos pontos ovoides amarelo-claros, 50–1500μm, distribuição radial ao disco — "tiro de espingarda"</td></tr>
<tr><td>Vitreíte</td><td>Haze vítreo bilateral crônico</td></tr>
<tr><td>EMC</td><td>Bilateral, crônico — causa predominante de baixa AV</td></tr>
<tr><td>Vasculite retiniana</td><td>Venosa → oclusão ramo venoso</td></tr>
<tr><td>Cegueira noturna</td><td>Noctopia — sinal precoce de comprometimento de fotorreceptores</td></tr>
<tr><td>ERG alterado</td><td>Redução de amplitude — marcador de progressão e resposta ao tratamento</td></tr>
<tr><td>ICGA</td><td>Múltiplas áreas hipofluorescentes (lesões coroidianas ativas)</td></tr>
</table>`,
  diagnostico:`<strong>HLA-A29:</strong> Positivo em >95% — praticamente confirma diagnóstico.<br>
<strong>ERG (eletrorretinograma):</strong> Redução de amplitude escotópica e fotópica — progressão silenciosa.<br>
<strong>ICGA:</strong> Hipofluorescência coroidal difusa — detecta mais lesões que oftalmoscopia.<br>
<strong>OCT:</strong> EMC, atrofia de fotorreceptores, camada nuclear externa.<br>
<strong>Campo visual:</strong> Escotomas centrais e periféricos — progressão lenta.`,
  tratamento:`<strong>Imunossupressor obrigatório (doença crônica progressiva):</strong><br>
<span class="pill">Ciclosporina</span> <span class="dose">3–5 mg/kg/dia</span> — maior evidência em Birdshot<br>
<span class="pill">Metotrexato</span> <span class="dose">15–25mg/semana</span><br>
<span class="pill">Micofenolato</span> <span class="dose">2–3g/dia</span><br>
<span class="pill">Prednisona</span> <span class="dose">0,5–1mg/kg/dia → tapering (adjuvante)</span><br><br>
<strong>Biológico (refratário):</strong><br>
<span class="pill">Adalimumabe</span> <span class="dose">40mg SC q2sem</span><br>
<span class="pill">Daclizumabe</span> (anti-CD25 — uso experimental)<br><br>
<strong>EMC:</strong> Triamcinolona sub-Tenon 40mg; Ozurdex 0,7mg; Anti-VEGF (off-label)<br><br>
<strong>Monitoramento:</strong> ERG + OCT + campo visual + ICGA a cada 3–6 meses.`,
  prognostico:`Progressivo sem tratamento — 80% mantêm AV útil com IS. ERG deteriorando = falha terapêutica → mudar esquema. Atrofia de fotorreceptores = perda irreversível.`,
  referencias:"Kanski Cap.11 · BCSC AAO · Ophthalmology Birdshot Symposium 2022"
},
{
  id:"aij",
  nome:"Uveíte Associada à Artrite Idiopática Juvenil",
  sinonimos:"Uveíte na AIJ, Iridociclite Crônica Juvenil",
  tipo:"nao-infecciosa",
  anatomica:["anterior"],
  tags:["AIJ","Criança","ANA+","Oligoarticular","Branco de irite","Assintomático"],
  preview:"Uveíte anterior crônica silenciosa em crianças com AIJ oligoarticular. Olho branco, sem dor — diagnóstico tardio. ANA+ aumenta risco. Band keratopathy e catarata.",
  etiologia:`<strong>Epidemiologia:</strong> 10–20% das crianças com AIJ desenvolvem uveíte. Maior risco: forma oligoarticular (30%), ANA positivo, meninas <7 anos, menos de 4 articulações afetadas.<br>
<strong>Critérios SUN 2021:</strong> Uveíte anterior crônica bilateral em criança <17 anos com AIJ oligoarticular ou poliarticular FR-.`,
  fisiopatologia:`Autoimunidade contra antígenos oculares mediada por linfócitos T. Inflamação de baixo grau, crônica, assintomática → dano silencioso progressivo ao cristalino e córnea.`,
  sinais:`<table class="ds-table">
<tr><th>Característica</th><th>Detalhe</th></tr>
<tr><td>"Branco de irite"</td><td>Olho BRANCO e SEM DOR — não há injeção ciliar típica</td></tr>
<tr><td>Bilateral</td><td>70% bilateral — pode ser assimétrico</td></tr>
<tr><td>KPs</td><td>Pequenos, finos, não granulomatosos</td></tr>
<tr><td>Células CA</td><td>Inflamação leve a moderada crônica</td></tr>
<tr><td>Band keratopathy</td><td>Ceratopatia calcárea em faixa — sinal de doença crônica avançada</td></tr>
<tr><td>Catarata</td><td>Subcapsular posterior — inflamação + corticoide</td></tr>
<tr><td>Sinequias</td><td>Posteriores extensas → oclusão pupilar → glaucoma</td></tr>
</table>
<span class="alert">🚨 TODAS as crianças com AIJ devem ter rastreio oftalmológico periódico mesmo assintomáticas! Frequência: a cada 3–6 meses conforme risco.</span>`,
  diagnostico:`<strong>Rastreio sistemático</strong> de crianças com AIJ.<br>
<strong>ANA (anticorpos antinucleares):</strong> Marcador de risco (não diagnóstico).<br>
<strong>Faixa etária + forma de AIJ + ANA</strong> definem frequência de rastreio (protocolo AAP 2019).`,
  tratamento:`<strong>1ª Linha:</strong><br>
<span class="pill">Prednisolona acetato 1%</span> <span class="dose">2–6x/dia → desmame lento</span><br>
<span class="pill">Cicloplégico</span> <span class="dose">Ciclopentolato 1% ou atropina 1% — prevenir sinequias</span><br><br>
<strong>Imunossupressor (doença crônica ativa):</strong><br>
<span class="pill">Metotrexato</span> <span class="dose">10–15 mg/m² /semana SC ou VO</span> — 1ª escolha<br>
<span class="pill">Micofenolato</span> <span class="dose">600 mg/m²/dia</span><br><br>
<strong>Biológico (refratário — melhor evidência em AIJ):</strong><br>
<span class="pill">Adalimumabe</span> <span class="dose">20–40mg SC q2sem conforme peso</span> — APROVADO para AIJ-uveíte (FDA/EMA)<br>
<span class="pill">Abatacepte</span> <span class="dose">10mg/kg IV mensal</span><br><br>
<strong>Band keratopathy:</strong> EDTA tópico + scraping no BO.<br>
<strong>Catarata:</strong> Facectomia + limpeza de cápsula anterior + vitrectomia anterior (sem LIO em <6–8 anos).`,
  prognostico:`Risco de perda visual permanente em 10–30% sem rastreio adequado. Complicações: glaucoma (25%), catarata (38%), band keratopathy (40%) em séries históricas. Com tratamento moderno: melhor prognóstico.`,
  referencias:"AAP Screening Guidelines 2019 · BCSC AAO · Kanski Cap.11 · Pediatric Ophthalmology 2023"
},
{
  id:"toxocara",
  nome:"Toxocaríase Ocular",
  sinonimos:"Larva Migrans Ocular, Uveíte por Toxocara canis",
  tipo:"infecciosa",
  anatomica:["posterior","intermediaria"],
  tags:["Toxocara","Granuloma","Criança","ELISA","Cão","Unilateral"],
  preview:"Granuloma retiniano unilateral em crianças, causado por larvas de Toxocara canis. Tríade: granuloma polo posterior, vitreíte, tração vítreo-retiniana.",
  etiologia:`<strong>Agente:</strong> Toxocara canis (principal) e T. cati — ascarídeos de cães e gatos.<br>
<strong>Transmissão:</strong> Ingestão de terra/alimentos contaminados com ovos fecais. Crianças em contato com solo de parques.<br>
<strong>Epidemiologia:</strong> Prevalência sorológica até 30% no Brasil. Ocular em 1–10% dos infectados. Unilateral em >95%. Pico 2–10 anos.`,
  sinais:`<table class="ds-table">
<tr><th>Apresentação</th><th>Achado</th></tr>
<tr><td>Granuloma polo posterior</td><td>Massa esbranquiçada elevada na mácula ou polo posterior — mais comum</td></tr>
<tr><td>Granuloma periférico</td><td>Massa periférica com trações vítreo-retinianas — leucocoria, estrabismo</td></tr>
<tr><td>Endoftalmite difusa</td><td>Vitreíte intensa, membrana retrolental, em crianças pequenas — simula retinoblastoma</td></tr>
<tr><td>Tração vítrea</td><td>Membranas tracionais puxando mácula ou papila</td></tr>
<tr><td>Leucocoria</td><td>Reflexo pupilar branco — diagnóstico diferencial URGENTE com retinoblastoma</td></tr>
</table>
<span class="alert">🚨 Leucocoria em criança = excluir retinoblastoma SEMPRE antes de qualquer conduta.</span>`,
  diagnostico:`<strong>ELISA para Toxocara:</strong> Sensibilidade 78–90%, especificidade 92%. IgG anti-Toxocara ≥1:8 = sugestivo.<br>
<strong>ELISA humor aquoso:</strong> Ratio AH/soro >1 = produção local (específico).<br>
<strong>Eosinofilia:</strong> Pode estar presente (infecção recente).<br>
<strong>US ocular:</strong> Massa sólida, calcificações ausentes (diferencia de retinoblastoma).<br>
<strong>TC/RM órbita:</strong> Excluir retinoblastoma.`,
  tratamento:`<strong>Inflamação ativa:</strong><br>
<span class="pill">Prednisona</span> <span class="dose">1–2 mg/kg/dia VO × 4–6 semanas → tapering</span><br>
<span class="pill">Triamcinolona sub-Tenon 40mg</span> <span class="dose">Para controle inflamatório local</span><br><br>
<strong>Anti-helmíntico + corticoide (combinação):</strong><br>
<span class="pill">Albendazol</span> <span class="dose">400mg 2x/dia (adultos) / 200mg 2x/dia (crianças <10kg) × 5 dias</span><br>
<span class="pill">Albendazol 800mg 2x/dia × 30 dias</span> em adultos (evidência crescente)<br>
Sempre associar corticoide (prevenir reação inflamatória à morte larval).<br><br>
<strong>Trações/DR:</strong> Vitrectomia<br>
<strong>Neovascularização:</strong> Laser/anti-VEGF`,
  prognostico:`Variável. Granuloma periférico pequeno = bom prognóstico. Granuloma macular ou tração = perda visual significativa. Endoftalmite difusa = mau prognóstico.`,
  referencias:"PMC Toxocariasis Review 2022 · BCSC AAO · Kanski Cap.11"
},
{
  id:"bartonela",
  nome:"Doença do Arranhão do Gato / Bartonela",
  sinonimos:"Bartonella henselae, Síndrome Oculoglandular de Parinaud, Neorretinite de Bartonela",
  tipo:"infecciosa",
  anatomica:["posterior","anterior"],
  tags:["Bartonela","Gato","Neorretinite","Estrela macular","Parinaud","Doxiciclina"],
  preview:"Neurorretinite com estrela macular em paciente com contato com gato. Síndrome oculoglandular de Parinaud. Responde a doxiciclina.",
  etiologia:`<strong>Agente:</strong> Bartonella henselae (bacilo gram-negativo).<br>
<strong>Transmissão:</strong> Arranhão ou mordida de gato infectado (especialmente filhotes). Pulga do gato como vetor.<br>
<strong>Epidemiologia:</strong> 90% têm contato com gato <30 dias antes. Qualquer idade, pico em crianças/jovens.`,
  sinais:`<table class="ds-table">
<tr><th>Apresentação</th><th>Achado</th></tr>
<tr><td>Neurorretinite</td><td><strong>Estrela macular</strong> (exsudatos duros em padrão radial na mácula) + edema de papila = padrão clássico</td></tr>
<tr><td>Sínd. Parinaud</td><td>Conjuntivite granulomatosa + adenopatia pré-auricular ipsilateral + febre</td></tr>
<tr><td>Uveíte anterior</td><td>Leve, não granulomatosa</td></tr>
<tr><td>Vasculite</td><td>Oclusão vascular retiniana em casos graves</td></tr>
<tr><td>Foco neorretinite</td><td>Exsudato branco peripapilar + edema de papila unilateral</td></tr>
</table>`,
  diagnostico:`<strong>ELISA/IFA para Bartonella henselae:</strong> IgM+ (recente) ou IgG ≥1:512 (alta exposição).<br>
<strong>PCR sangue ou biópsia de linfonodo.</strong><br>
<strong>Historia:</strong> Contato com gato < 30 dias + adenopatia regional.`,
  tratamento:`<strong>Imunocompetente (doença leve):</strong> Frequentemente autolimitada em 2–4 meses.<br><br>
<strong>Doença ocular grave (neurorretinite, vasculite):</strong><br>
<span class="pill">Doxiciclina</span> <span class="dose">100mg 2x/dia × 4–6 semanas</span><br>
<span class="pill">Rifampicina</span> <span class="dose">300mg 2x/dia × 4–6 semanas</span> (associar para maior eficácia)<br>
<span class="pill">Azitromicina</span> <span class="dose">500mg D1, depois 250mg/dia × 4 dias</span> (alternativa)<br>
<span class="pill">Prednisona</span> <span class="dose">0,5–1mg/kg/dia × 2–4 semanas</span> — para edema de papila grave`,
  prognostico:`Geralmente bom em imunocompetentes. Estrela macular regride em 2–4 meses. Perda visual rara se tratada. HIV+ = doença sistêmica grave.`,
  referencias:"Kanski Cap.11 · BCSC AAO · Ophthalmology Retina 2021"
},
{
  id:"endoftalmite",
  nome:"Endoftalmite",
  sinonimos:"Endophthalmitis, Infecção intraocular",
  tipo:"infecciosa",
  anatomica:["panuveite"],
  tags:["Endoftalmite","Emergência","Cirurgia","Vancomicina","Ceftazidima","Pós-operatória"],
  preview:"Infecção intraocular grave com vitreíte intensa, hipópio, dor. Emergência oftalmológica. Injeção intravítrea de antibióticos + vitrectomia nos casos graves.",
  etiologia:`<strong>Pós-operatória aguda:</strong> S. epidermidis (mais comum), S. aureus, Streptococcus spp., BGN<br>
<strong>Pós-operatória crônica:</strong> P. acnes, fungos, Corynebacterium<br>
<strong>Pós-injeção intravítrea:</strong> Staph. epidermidis, Streptococcus (mais virulento)<br>
<strong>Endógena:</strong> Candida (toxicomania IV), Aspergillus, S. aureus (bacteremia), Klebsiella (DM2 asiático)`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Gravidade</th></tr>
<tr><td>Dor intensa</td><td>Alta</td></tr>
<tr><td>Hipópio</td><td>Quase universal na bacteriana</td></tr>
<tr><td>Vitreíte densa</td><td>Haze 3–4+ → fundo não visualizável</td></tr>
<tr><td>Edema palpebral e quemose</td><td>Moderada a grave</td></tr>
<tr><td>Diminuição AV rápida</td><td>Horas a dias</td></tr>
<tr><td>Hipófluorescência</td><td>US: corpo vítreo espessado, membranas</td></tr>
</table>
<span class="alert">🚨 EMERGÊNCIA — Injeção intravítrea de antibióticos nas primeiras horas. Vitrectomia se AV percepção luminosa ou pior.</span>`,
  diagnostico:`<strong>Clínico:</strong> Contexto pós-cirúrgico/injeção + sinais inflamatórios graves.<br>
<strong>Paracentese CA + vitrectomia diagnóstica:</strong> Cultura, Gram, PCR pan-bacteriano/pan-fúngico.<br>
<strong>US ocular:</strong> Eco intenso em vítreo, membranas, DR.`,
  tratamento:`<strong>IMEDIATO — Injeção Intravítrea (EVS Protocol):</strong><br>
<span class="pill">Vancomicina</span> <span class="dose">1mg/0,1mL ITV</span> (gram-positivos)<br>
<span class="pill">Ceftazidima</span> <span class="dose">2,25mg/0,1mL ITV</span> (gram-negativos) — injeções SEPARADAS<br>
<span class="pill">Dexametasona</span> <span class="dose">0,4mg/0,1mL ITV</span> — adjuvante controverso<br><br>
<strong>Vitrectomia via pars plana (EVS):</strong><br>
→ Indicada se AV = Percepção Luminosa ou pior (AV hand motion = controverso)<br>
→ Melhora AV em 3x comparado à injeção ITV isolada em LP<br><br>
<strong>Fúngica:</strong><br>
<span class="pill">Anfotericina B intravítrea</span> <span class="dose">5–10μg/0,1mL</span><br>
<span class="pill">Voriconazol sistêmico</span> <span class="dose">6mg/kg q12h IV D1 → 4mg/kg q12h VO</span><br><br>
<strong>P. acnes (crônica):</strong> Vitrectomia + remoção da bolsa capsular + vancomicina ITV`,
  prognostico:`AV final dependente da virulência do agente e do timing do tratamento. S. epidermidis = melhor prognóstico. Streptococcus spp. = pior prognóstico. Tratamento nas primeiras 24h muda o desfecho.`,
  referencias:"Endophthalmitis Vitrectomy Study (EVS) · ESCRS Guidelines · BCSC AAO · EyeWiki"
},
{
  id:"linfoma",
  nome:"Linfoma Intraocular Primário",
  sinonimos:"Primary Vitreoretinal Lymphoma (PVRL), Masquerade Syndrome Linfomatoso",
  tipo:"masquerade",
  anatomica:["posterior","panuveite"],
  tags:["Linfoma","Masquerade","IL-10","IL-6","Metotrexato","Biópsia","Idoso"],
  preview:"Linfoma DLBCL que simula uveíte crônica. Diagnóstico tardio médio de 2 anos. Ratio IL-10:IL-6 >1 no vítreo é patognomônico. Associação com linfoma SNC.",
  etiologia:`<strong>Tipo:</strong> Linfoma difuso de grandes células B (DLBCL) na maioria (>95%).<br>
<strong>Epidemiologia:</strong> Pico 50–70 anos. M=F. Associado a imunodeficiência em 25–30%.<br>
<strong>Associação SNC:</strong> 65–90% desenvolvem comprometimento do SNC (diagnóstico simultâneo ou posterior).`,
  fisiopatologia:`Células B neoplásicas malignas infiltram vítreo, retina subretiniana e coróide → simula uveíte. Produzem IL-10 em excesso (citocina de linfócitos B). IL-10:IL-6 >1 no vítreo = diagnóstico.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal de Alerta</th><th>Detalhe</th></tr>
<tr><td>Uveíte "crônica" em idoso</td><td>Sem etiologia, sem resposta a corticoide</td></tr>
<tr><td>Células vítreas malignas</td><td>Grandes, irregulares, agrupadas — distintas de células inflamatórias</td></tr>
<tr><td>Infiltrados sub-EPR</td><td>Lesões amarelo-esbranquiçadas sub-retinianas — leopard spot pattern</td></tr>
<tr><td>Vitreíte bilateral</td><td>Haze vítreo bilateral em adultos >50 anos</td></tr>
<tr><td>Ausência de sinequias</td><td>Apesar de inflamação aparente intensa</td></tr>
<tr><td>Melhora falsa com corticoide</td><td>Resposta inicial → recidiva → falsamente tranquilizador</td></tr>
</table>
<span class="alert">🚨 Uveíte crônica em idoso que não responde a corticoide ou melhora temporariamente = linfoma até prova em contrário.</span>`,
  diagnostico:`<strong>Vitrectomia diagnóstica (gold standard):</strong> Citologia (células grandes atípicas), citometria de fluxo (CD19+/CD20+), gene rearrangement IgH.<br>
<strong>IL-10 e IL-6 no vítreo:</strong> IL-10:IL-6 >1 = diagnóstico (sensibilidade 89%, especificidade 93%).<br>
<strong>PCR do vítreo:</strong> Rearranjo monoclonal de IgH.<br>
<strong>RM crânio com gadolínio:</strong> Avaliar comprometimento do SNC (obrigatório).<br>
<strong>PET-CT corpo inteiro:</strong> Estadiamento sistêmico.<br>
<strong>Paracentese CA:</strong> Citologia — sensibilidade menor que vítreo.`,
  tratamento:`<strong>Intraocular:</strong><br>
<span class="pill">Metotrexato intravítreo</span> <span class="dose">400μg/0,1mL — 2x/semana × 4 semanas → 1x/semana × 8 semanas → 1x/mês manutenção</span><br>
<span class="pill">Rituximabe intravítreo</span> <span class="dose">1mg/0,05mL — adjuvante ou alternativa ao MTX</span><br><br>
<strong>Sistêmico (SNC comprometido):</strong><br>
<span class="pill">Metotrexato HD IV</span> <span class="dose">3,5–8g/m² (esquema Batchelor) ± citarabina</span><br>
<span class="pill">Rituximabe IV</span> <span class="dose">375mg/m² — parte do esquema R-CHOP ou R-MPV</span><br>
<strong>Radioterapia cerebral:</strong> Em casos selecionados (recidiva, refratário)`,
  prognostico:`Sobrevida média 24–58 meses. 90% recidivam. 60–70% desenvolvem linfoma SNC. Resposta ao MTX intravítreo = bom controle local. Prognóstico sistêmico determinado pelo comprometimento do SNC.`,
  referencias:"EyeWiki PVRL · Kanski Cap.12 · BCSC AAO Cap.13 · PMC Lymphoma Review 2022"
},
{
  id:"apmppe",
  nome:"APMPPE",
  sinonimos:"Acute Posterior Multifocal Placoid Pigment Epitheliopathy, Epiteliopatia Placóide Posterior Aguda Multifocal",
  tipo:"nao-infecciosa",
  anatomica:["posterior"],
  tags:["APMPPE","White dot","Autolimitada","Jovem","Polo posterior","Viral"],
  preview:"Coriorretinopatia inflamatória aguda autolimitada. Múltiplas lesões placóides amarelo-esbranquiçadas no polo posterior. Geralmente bom prognóstico.",
  etiologia:`<strong>Etiologia:</strong> Desconhecida. Vasculite coroidal imunomediada. Frequentemente precedida por prodromo viral (URI).<br>
<strong>Epidemiologia:</strong> Jovens 20–50 anos, ambos os sexos. Bilateral em 70%.<br>
<strong>Raramente associada a:</strong> vasculite cerebral (AVC) — sinal de alerta!`,
  sinais:`Múltiplas lesões placóides grandes, amarelo-esbranquiçadas, profundas, agudas no polo posterior. Resolução em 2–6 semanas com alterações de EPR residuais.`,
  diagnostico:`<strong>AFG:</strong> Hipofluorescência precoce (bloqueio) → hiperfluorescência tardia (staining).<br>
<strong>ICGA:</strong> Hipofluorescência precoce e tardia (lesões coroidianas ativas).<br>
<strong>FAF:</strong> Hiperautofluorescência ativa → hipoautofluorescência residual.`,
  tratamento:`<strong>Geralmente não requer tratamento específico</strong> (autolimitada).<br>
<span class="pill">Prednisona oral</span> <span class="dose">1mg/kg/dia</span> — em casos com envolvimento macular central ou vasculite cerebral.<br>
<span class="alert">⚠ Cefaleia + APMPPE = investigar vasculite cerebral (RM/angio-RM urgente).</span>`,
  prognostico:`Bom na maioria. AV final 20/20–20/40 em 80%. Cicatriz EPR residual nos casos com acometimento macular.`,
  referencias:"BCSC AAO · Kanski Cap.11"
},
{
  id:"mewds",
  nome:"MEWDS",
  sinonimos:"Multiple Evanescent White Dot Syndrome",
  tipo:"nao-infecciosa",
  anatomica:["posterior"],
  tags:["MEWDS","White dot","Unilateral","Mulher","Autolimitada","Fotopsia"],
  preview:"Coriorretinopatia inflamatória aguda unilateral evanescente. Pontos brancos pequenos na retina externa. Fotopsia intensa. Autolimitada em 6–10 semanas.",
  etiologia:`<strong>Epidemiologia:</strong> Quase exclusivamente em mulheres jovens (15–50 anos). Unilateral em 95%. Frequentemente precedida por infecção viral.`,
  sinais:`Pontos brancos pequenos (100–200μm) na retina externa peripapilar. Granularidade foveal. ERG multifocal: amplitude reduzida (fotorreceptores externos afetados). Ponto cego ampliado na campimetria.`,
  diagnostico:`<strong>FAF:</strong> Hiperautofluorescência dos pontos brancos ativos.<br>
<strong>OCT:</strong> Ruptura da elipsóide (IS/OS) e zona de interdigitação dos fotorreceptores externos.<br>
<strong>ERG multifocal:</strong> Redução focal de amplitude.`,
  tratamento:`<strong>Observação</strong> — autolimitada em 6–10 semanas.<br>Sem tratamento específico necessário na maioria.`,
  prognostico:`Excelente. Resolução espontânea em quase todos os casos. Raramente recidiva (<10%).`,
  referencias:"BCSC AAO · Kanski Cap.11"
},
{
  id:"coroidite-serpiginosa",
  nome:"Coroidite Serpiginosa",
  sinonimos:"Coroidite Helicoidal, Ameba Coroidal",
  tipo:"nao-infecciosa",
  anatomica:["posterior"],
  tags:["Serpiginosa","Peripapilar","Progressiva","Coróide","Cicatriz","Recidiva"],
  preview:"Coroidite recorrente progressiva, peripapilar, geográfica. Sem etiologia definida. Risco de neovascularização sub-retiniana e perda visual.",
  etiologia:`<strong>Etiologia:</strong> Desconhecida. Provavelmente imunomediada. Associação com tuberculose em países endêmicos (coroidite serpiginoide-like por TB = tratar como TB).`,
  sinais:`Lesões coroidianas geográficas ativas (cinza-amareladas, bordas mal definidas) peripapilar → extensão centrífuga serpiginosa → cicatriz branco-amarelada atrófica. Recidiva na borda da cicatriz.`,
  diagnostico:`<strong>AFG:</strong> Hipofluorescência precoce (lesão ativa) → hiperfluorescência tardia (staining).<br>
<strong>ICGA:</strong> Hipofluorescência persistente nas lesões ativas e inativas.<br>
<strong>OCT:</strong> Desorganização das camadas externas da retina, atrofia RPE/coriocapilar.<br>
<strong>Excluir TB:</strong> IGRA/PPD, RX tórax em todos os casos.`,
  tratamento:`<strong>Lesão ativa:</strong><br>
<span class="pill">Prednisona</span> <span class="dose">1mg/kg/dia → tapering lento</span><br>
<span class="pill">Ciclosporina</span> <span class="dose">3–5mg/kg/dia</span> — maior evidência em serpiginosa<br>
<span class="pill">Triple IS</span>: Ciclosporina + Azatioprina + Prednisona — casos graves<br>
<strong>NVC:</strong> Anti-VEGF intravítreo (bevacizumabe 1,25mg ou ranibizumabe 0,5mg)`,
  prognostico:`Progressivo sem tratamento. 20–30% desenvolvem NVC. Acometimento macular = pior prognóstico.`,
  referencias:"BCSC AAO · Kanski Cap.11 · Ophthalmology 2020"
},
{
  id:"drogas",
  nome:"Uveíte Induzida por Medicamentos",
  sinonimos:"Drug-Induced Uveitis, Uveíte Iatrogênica",
  tipo:"nao-infecciosa",
  anatomica:["anterior","posterior"],
  tags:["Rifabutina","Cidofovir","Bisfosfonatos","Checkpoint inhibitors","Iatrogênica"],
  preview:"Uveíte precipitada por medicamentos. Rifabutina (profilaxia MAC), cidofovir (HIV), bisfosfonatos, e especialmente checkpoint inhibitors oncológicos.",
  etiologia:`<strong>Principais agentes:</strong><br>
• <strong>Rifabutina:</strong> Profilaxia de M. avium complex em HIV. Uveíte anterior hifema (nível de células-hipópio com hifema). Dose-dependente.<br>
• <strong>Cidofovir:</strong> Tratamento de CMV. Uveíte anterior intensa com hipotonia. Risco de phthisis.<br>
• <strong>Bisfosfonatos:</strong> Esclerite/uveíte anterior — pamidronato, alendronato.<br>
• <strong>Checkpoint inhibitors (PD-1/CTLA-4):</strong> Pembrolizumabe, Nivolumabe, Ipilimumabe → uveíte, VKH-like, pan-uveíte autoimune. Incidência crescente!`,
  sinais:`Uveíte anterior aguda: hipópio, hifema (rifabutina), hipotonia (cidofovir). Checkpoint inhibitors: pan-uveíte, padrão VKH-like, coroidite.`,
  diagnostico:`<strong>História medicamentosa detalhada.</strong> Melhora com suspensão do agente → confirma diagnóstico.`,
  tratamento:`<strong>Suspender o agente causador.</strong><br>
<span class="pill">Prednisolona tópica 1%</span> <span class="dose">Para inflamação anterior</span><br>
<span class="pill">Prednisona sistêmica</span> <span class="dose">Checkpoint inhibitors: 1–2mg/kg/dia → tapering lento</span><br>
<strong>Checkpoint inhibitors graves:</strong> Pode necessitar infliximabe ou micofenolato se não responde a corticoide.`,
  prognostico:`Geralmente reversível com suspensão do agente e tratamento adequado. Checkpoint inhibitors: pode ser persistente mesmo após descontinuação.`,
  referencias:"BCSC AAO · Am J Ophthalmol 2022 (checkpoint inhibitors)"
},
{
  id:"esclerite-uveite",
  nome:"Uveíte Associada à Esclerite",
  sinonimos:"Esclerouveíte",
  tipo:"nao-infecciosa",
  anatomica:["anterior","posterior"],
  tags:["Esclerite","AR","Wegener","Dor intensa","AINE","Sistêmica"],
  preview:"Uveíte secundária à inflamação escleral. Dor intensa, vermelhidão violácea. Associação com doenças autoimunes graves (AR, Wegener, Behçet).",
  etiologia:`<strong>Esclerite anterior difusa/nodular:</strong> Uveíte anterior em 30–40%.<br>
<strong>Esclerite necrosante:</strong> Uveíte, glaucoma, ceratite marginal — doença sistêmica grave em 50%.<br>
<strong>Associações:</strong> AR (30–40%), ANCA+ (Granulomatose de Wegener), PAN, Behçet, LES, DII, HZO.`,
  sinais:`Dor intensa (diferencia de episclerite — superficial, sem dor), vermelhidão violácea profunda. Uveíte anterior secundária, pressão ocular variável, edema escleral.`,
  diagnostico:`<strong>Investigação sistêmica completa:</strong> FR, anti-CCP, ANCA (c-ANCA/p-ANCA), ANA, complemento, RX tórax, função renal (Wegener).<br>
<strong>US ocular:</strong> Espessamento escleral posterior ("T-sign" = líquido subtenoniano), edema de polo posterior.`,
  tratamento:`<span class="pill">AINEs orais</span> <span class="dose">Ibuprofeno 600–800mg 3x/dia ou Naproxeno 500mg 2x/dia</span> — 1ª linha esclerite difusa<br>
<span class="pill">Prednisona oral</span> <span class="dose">1mg/kg/dia</span> — esclerite grave/necrosante<br>
<span class="pill">Metotrexato / Micofenolato</span> — imunossupressor para doença sistêmica subjacente<br>
<span class="pill">Rituximabe</span> — Wegener refratário`,
  prognostico:`Depende da doença sistêmica subjacente. Esclerite necrosante = pior prognóstico (morbidade ocular significativa). Perfuração escleral em casos extremos.`,
  referencias:"Kanski Cap.8 · BCSC AAO · Ophthalmology 2021"
},
{
  id:"oftalmia-simpatica",
  nome:"Oftalmia Simpática",
  sinonimos:"Sympathetic Ophthalmia, Uveíte Pós-Traumática Bilateral",
  tipo:"nao-infecciosa",
  anatomica:["anterior","posterior","panuveite"],
  tags:["Oftalmia Simpática","Trauma","Cirurgia","Bilateral","Uveal melanin","Granulomatosa","Nussenblatt"],
  preview:"Panuveíte granulomatosa bilateral rara surgindo após trauma/cirurgia perfurante. Olho excitante sensibiliza → olho simpatizante reage. Emergência imunológica.",
  etiologia:`<strong>Mecanismo:</strong> Ruptura da barreira hemato-ocular por trauma/cirurgia perfurante → exposição de antígenos uveal-melanocitários ao sistema imune → resposta autoimune T-mediada bilateral.<br>
<strong>Etiologia clássica (Nussenblatt):</strong> Trauma penetrante (55%), cirurgia intraocular (45% — crescente com aumento de cirurgias vitreorretinianas e facoemulsificações).<br>
<strong>Incidência:</strong> 0,2–0,5% após trauma penetrante; 0,01% após cirurgia intraocular. Rara, mas potencialmente devastadora.`,
  fisiopatologia:`Exposição de antígenos do EPR (proteínas S-antigen, IRBP = interphotoreceptor retinoid-binding protein) às células dendríticas → ativação de linfócitos T CD4+ autorreativos → disseminação hematogênica → ataque bilateral da úvea e retina. Histologia: granulomas não caseosos com macrófagos e células gigantes de Dalen-Fuchs no EPR (idênticos ao VKH).`,
  sinais:`<table class="ds-table">
<tr><th>Aspecto</th><th>Característica</th></tr>
<tr><td>Latência</td><td>2 semanas a 50+ anos após trauma; 80% entre 2 semanas e 1 ano</td></tr>
<tr><td>Olho excitante</td><td>Olho traumatizado — inflamação persistente, hipotonia, pthisis bulbi</td></tr>
<tr><td>Olho simpatizante</td><td>Olho contralateral sadio → panuveíte granulomatosa bilateral</td></tr>
<tr><td>KPs</td><td>Granulomatosos, mutton-fat — semelhantes ao VKH</td></tr>
<tr><td>Nódulos de Dalen-Fuchs</td><td>Nódulos sub-retinianos amarelados (granulomas EPR) — entre BM e EPR</td></tr>
<tr><td>Sunset glow fundus</td><td>Depigmentação EPR coroidal em casos crônicos (idêntico ao VKH)</td></tr>
<tr><td>DSR exsudativo</td><td>Na fase aguda (fase de Harada da OS)</td></tr>
</table>
<span class="alert">🚨 CHAVE (Nussenblatt): Se olho excitante tem AV útil → PRESERVAR e tratar imunossupressão. Enucleação após 2 semanas do trauma NÃO previne oftalmia simpática.</span>`,
  diagnostico:`<strong>Clínico:</strong> Panuveíte granulomatosa bilateral + história de trauma/cirurgia ocular prévia no olho excitante.<br>
<strong>Distinguir de VKH:</strong> Historicamente idênticos na histologia — diferença = história de trauma (OS) vs. sem trauma (VKH).<br>
<strong>OCT:</strong> DSR exsudativo, nódulos de Dalen-Fuchs na retroiluminação.<br>
<strong>AFG:</strong> Pontos hiperfluorescentes com pooling tardio (fase uveítica) — idêntico ao VKH.<br>
<strong>ICGA:</strong> Hipofluorescência coroidal difusa.<br>
<strong>US ocular:</strong> Espessamento coroidal difuso bilateral.`,
  tratamento:`<strong>Tratamento idêntico ao VKH:</strong><br>
<span class="pill">Metilprednisolona IV</span> <span class="dose">1g/dia × 3 dias (fase aguda grave)</span><br>
<span class="pill">Prednisona oral</span> <span class="dose">1–1,5 mg/kg/dia → tapering LENTO em 6–12 meses</span><br>
<span class="alert">⚠ Tapering rápido = recidiva. Manter ≥10mg/dia por ≥6 meses como em VKH.</span><br><br>
<strong>Imunossupressor (casos crônicos/poupador de corticoide):</strong><br>
<span class="pill">Azatioprina</span> <span class="dose">1–2,5 mg/kg/dia</span><br>
<span class="pill">Micofenolato Mofetil</span> <span class="dose">1–3g/dia</span><br>
<span class="pill">Ciclosporina</span> <span class="dose">3–5 mg/kg/dia</span><br><br>
<strong>Olho excitante:</strong> Enucleação precoce (<2 semanas) pode prevenir. Após 2 semanas → NÃO previne; preservar se AV útil.`,
  prognostico:`Com tratamento precoce: 70% mantêm AV ≥20/200. Sem tratamento: cegueira bilateral em meses. Nussenblatt: o olho simpatizante frequentemente tem melhor prognóstico que o excitante.`,
  referencias:"Nussenblatt & Whitcup — Uveitis 4ª Ed · Kanski Cap.11 · BCSC AAO · J Ophthalmol 2022"
},
{
  id:"htlv1",
  nome:"Uveíte por HTLV-1",
  sinonimos:"HTLV-1 Associated Uveitis, HAU",
  tipo:"infecciosa",
  anatomica:["intermediaria","posterior","panuveite"],
  tags:["HTLV-1","Bahia","Brasil","Tropical","Crônica","Bilateral","Mielopatia"],
  preview:"Uveíte crônica associada ao Vírus Linfotrópico T Humano tipo 1. Endêmica no Brasil (Bahia). Bilateral, semelhante à sarcoidose. Sem tratamento antiviral específico.",
  etiologia:`<strong>Agente:</strong> HTLV-1 (Human T-Lymphotropic Virus type 1) — retrovírus RNA da família Retroviridae.<br>
<strong>Transmissão:</strong> Sexual (sem preservativo), amamentação (principal para lactentes), transfusão sanguínea, uso de drogas IV com compartilhamento de agulhas.<br>
<strong>Epidemiologia brasileira (SBO):</strong> Brasil é o país com maior número absoluto de infectados pelo HTLV-1 no mundo (2,5 milhões). Prevalência em Salvador/BA: 2–2,7% da população geral; até 8% em doadores de sangue acima de 40 anos. Soroprevalência alta também em São Paulo, Maranhão, Pernambuco e Pará.`,
  fisiopatologia:`HTLV-1 infecta linfócitos T CD4+ → inflamação mediada por linfócitos T ativados no vítreo e retina. Produção de IL-6, IL-10, TNF-α. Vítreo = compartimento imunológico favorável para persistência viral. Mecanismo imune (hipersensibilidade) mais que citopático direto.`,
  sinais:`<table class="ds-table">
<tr><th>Sinal</th><th>Descrição</th></tr>
<tr><td>Vitreíte</td><td>Bilateral, crônica, moderada a intensa — apresentação mais frequente</td></tr>
<tr><td>Células vítreos</td><td>Opacidades brancas no vítreo — "snowballs" às vezes</td></tr>
<tr><td>UA leve</td><td>KPs finos, flare leve — componente anterior discreto</td></tr>
<tr><td>Periphlebite</td><td>Bainhas perivenosas — semelhante a sarcoidose</td></tr>
<tr><td>Coroidite</td><td>Lesões coroidianas multifocais em 20%</td></tr>
<tr><td>EMC</td><td>Edema macular cistoide — causa de baixa AV</td></tr>
</table>
<span class="tip">✓ HTLV-1 uveíte mimetiza sarcoidose. Em área endêmica (Nordeste/BA) → incluir sorologia HTLV-1 na investigação de uveíte intermediária crônica bilateral sem causa.</span>`,
  diagnostico:`<strong>Sorologia HTLV-1:</strong> ELISA (triagem) + Western Blot (confirmatório) — mandatório em área endêmica.<br>
<strong>PCR sangue:</strong> Confirma infecção ativa; carga proviral correlaciona com doença sistêmica.<br>
<strong>Distinção de Sarcoidose:</strong> ACE normal, ausência de adenopatia hilar, sorologia HTLV-1+.<br>
<strong>Fundo:</strong> Periphlebite + vitreíte bilateral crônica em jovem do Nordeste = suspeitar fortemente.`,
  tratamento:`<strong>Não há antiviral específico eficaz para HTLV-1 ocular.</strong><br><br>
<strong>Controle da inflamação:</strong><br>
<span class="pill">Corticoide tópico</span> <span class="dose">Prednisolona 1% → reduzir células CA</span><br>
<span class="pill">Triamcinolona sub-Tenon</span> <span class="dose">40mg — EMC e vitreíte grave</span><br>
<span class="pill">Prednisona oral</span> <span class="dose">0,5–1mg/kg/dia → tapering lento</span><br>
<span class="pill">Metotrexato</span> <span class="dose">15–25mg/semana — poupador de corticoide em casos crônicos</span><br><br>
<strong>EMC refratário:</strong><br>
<span class="pill">Ozurdex (dexametasona ITV)</span> <span class="dose">0,7mg — duração 4–6 meses</span><br>
<strong>Anti-VEGF intravítreo</strong> se NVC associada.<br><br>
<strong>Atenção:</strong> Imunossupressores podem aumentar replicação viral e risco de HAM/TSP (mielopatia). Monitorar neurologicamente.`,
  prognostico:`Curso crônico com recidivas frequentes. 30–40% desenvolvem complicações (catarata, glaucoma, NVC). Morbidade sistêmica: HAM/TSP (mielopatia espástica tropical) em 2–4% dos infectados — avaliar neurologicamente.`,
  referencias:"SBO Uveítes · Rev Bras Oftalmol 2020 · HTLV-1 Brazil Cohort · Nussenblatt & Whitcup 4ª Ed · Ophthalmology 2019"
}
];

function renderDiseaseGrid(filter='all'){
  const g = document.getElementById('disease-grid');
  if(!g) return;
  const list = filter==='all' ? DOENCAS : DOENCAS.filter(d=>d.tipo===filter);
  g.innerHTML = list.map(d=>`
    <div class="dcard" id="dc-${d.id}">
      <div class="dcard-header" onclick="toggleDisease('${d.id}')">
        <div class="dcard-top">
          <div class="dcard-name">${d.nome}</div>
          <span class="dcard-badge ${d.tipo==='infecciosa'?'badge-inf':d.tipo==='masquerade'?'badge-mas':'badge-nei'}">${d.tipo==='infecciosa'?'Infecciosa':d.tipo==='masquerade'?'Masquerade':'Não Infecciosa'}</span>
        </div>
        <div class="dcard-syn">${d.sinonimos}</div>
        <div class="dcard-tags">
          ${d.anatomica.map(a=>`<span class="dtag t-${a==='anterior'?'ant':a==='intermediaria'?'int':a==='posterior'?'pos':'pan'}">${a}</span>`).join('')}
          ${d.tags.slice(0,3).map(t=>`<span class="dtag">${t}</span>`).join('')}
        </div>
        <div class="dcard-preview">${d.preview}</div>
      </div>
      <div class="dcard-chevron" onclick="toggleDisease('${d.id}')"><span>▼ Ver ficha completa</span></div>
      <div class="dcard-body">
        <div class="dcard-section"><div class="ds-title">Etiologia</div><div class="ds-content">${d.etiologia}</div></div>
        <div class="dcard-section"><div class="ds-title">Fisiopatologia</div><div class="ds-content">${d.fisiopatologia||'—'}</div></div>
        <div class="dcard-section"><div class="ds-title">Sinais e Sintomas</div><div class="ds-content">${d.sinais}</div></div>
        <div class="dcard-section"><div class="ds-title">Diagnóstico</div><div class="ds-content">${d.diagnostico}</div></div>
        <div class="dcard-section"><div class="ds-title">Tratamento</div><div class="ds-content">${d.tratamento}</div></div>
        <div class="dcard-section"><div class="ds-title">Prognóstico</div><div class="ds-content">${d.prognostico}</div></div>
        <div class="dcard-section" style="background:rgba(255,255,255,.02)"><div class="ds-title">Referências</div><div class="ds-content" style="font-size:.74rem;color:var(--text3)">${d.referencias}</div></div>
      </div>
    </div>`).join('');
}

function toggleDisease(id){
  const card = document.getElementById('dc-'+id);
  if(!card) return;
  card.classList.toggle('open');
}

function filterDiseases(f){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  const map={all:0,'infecciosa':1,'nao-infecciosa':2,'masquerade':3};
  const btns = document.querySelectorAll('.filter-btn');
  if(btns[map[f]]) btns[map[f]].classList.add('active');
  renderDiseaseGrid(f);
}
