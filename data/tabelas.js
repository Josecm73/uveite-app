const TABELAS = [
{
  id:"tab-ua-granulo",
  titulo:"Diagnóstico Diferencial: Uveíte Anterior Granulomatosa vs Não Granulomatosa",
  subtitulo:"Comparativo de achados clínicos para diagnóstico diferencial na lâmpada de fenda",
  cols:["Característica","Granulomatosa","Não Granulomatosa"],
  linhas:[
    ["KPs","Grandes, oleosos, 'gordura de carneiro' (mutton-fat), amarelados, agrupados no endotélio inferior","Pequenos, finos, brancos, pó de farinha — difusos ou triângulo de Arlt"],
    ["Nódulos iridianos","Busacca (estroma) + Koeppe (borda pupilar) + Berlin (ângulo)","Ausentes"],
    ["Início","Insidioso, crônico","Agudo, súbito"],
    ["Bilateral","Frequente (60–80%)","Geralmente unilateral"],
    ["Hipópio","Raro (exceto sarcoidose)","Frequente (HLA-B27, Behçet)"],
    ["Flare","Intenso, persistente","Moderado, transitório"],
    ["Etiologias","Sarcoidose, TB, sífilis, VKH, hanseníase, Fuchs*","HLA-B27, AIJ, Herpes, Behçet, trauma, medicamentos"],
    ["Curso","Crônico, recorrente","Agudo, autolimitado"],
    ["Resposta a corticoide","Mais lenta, requer IS","Rápida"],
    ["Exames chave","ACE, lisozima, RX tórax, VDRL, IGRA, Quantiferom","HLA-B27, VDRL, PCR AH (HSV/VZV/CMV)"],
  ],
  nota:"*Fuchs = KPs estrelados difusos — categoria especial, nem clássica granulomatosa nem não-granulomatosa."
},
{
  id:"tab-up-infecciosa",
  titulo:"Diagnóstico Diferencial: Uveíte Posterior Infecciosa",
  subtitulo:"Toxoplasmose × Tuberculose × Sífilis × CMV × ARN — características diferenciadoras",
  cols:["Característica","Toxoplasmose","Tuberculose","Sífilis","CMV","ARN (HSV/VZV)"],
  linhas:[
    ["Lesão principal","Foco ativo satélite + cicatriz","Coroidite serpiginoide-like, granulomas Dalen-Fuchs","Coriorretinite multifocal, placóide","Retinite necrosante hemorrágica periférica","Necrose fulminante periférica → central"],
    ["Vitreíte","Focal, sobre lesão ('farol')","Moderada","Leve-moderada","Mínima","Intensa 2–4+"],
    ["Lateralidade","Unilateral (95%)","Bilateral (50–70%)","Bilateral (50%)","Unilateral → bilateral","Unilateral → bilateral (30%)"],
    ["Imunidade","Imunocompetente","Qualquer","Qualquer (HIV+ pior)","CD4 < 100 (HIV)","Imunocompetente e imunossuprimido"],
    ["Vasculite","Perilesional","Periphlebite","Arterite, oclusão","Ausente","Arterite oclusiva (critério)"],
    ["Sorologias","IgG/IgM Toxoplasma","IGRA/PPD, RX tórax","VDRL/FTA-ABS","Carga viral CMV, CD4","PCR AH (VZV, HSV-1, HSV-2)"],
    ["PCR AH","Sensibilidade 30–67%","M. tuberculosis (30–60%)","T. pallidum (variável)","CMV (alta sensibilidade)","HSV/VZV (padrão-ouro)"],
    ["Tratamento 1ª linha","SMX-TMP ou Sulfadiazina+Pirimetamina","RIPE × 6 meses","Penicilina G Cristalina IV × 14 dias","Valganciclovir 900mg 2x/dia","Aciclovir IV 10–15mg/kg q8h"],
    ["Emergência?","Se macular/justapapilar","Não","Se placóide posterior","Sim (CD4 < 50)","Sim — iniciar imediatamente"],
  ],
  nota:"PCR AH = PCR de humor aquoso. CMV anterior em imunocompetentes (asiáticos) = apresentação distinta."
},
{
  id:"tab-white-dot",
  titulo:"Síndromes White Dot — Diagnóstico Diferencial",
  subtitulo:"APMPPE × MEWDS × Birdshot × Coroidite Serpiginosa × PIC × CMF",
  cols:["Característica","APMPPE","MEWDS","Birdshot","C. Serpiginosa","PIC","CMF"],
  linhas:[
    ["Idade/sexo","20–50, M=F","15–50, F>>M","40–60, F>M","30–60, M=F","20–40, F>>M","30–50, F>M"],
    ["Lateralidade","Bilateral","Unilateral (95%)","Bilateral","Bilateral","Unilateral/bilateral","Bilateral"],
    ["Tamanho lesões","Grandes placóides (>1DD)","Pequenos (<200μm)","Médias ovoides","Geográfica confluente","Pequenas (<200μm)","Pequenas a médias"],
    ["Localização","Polo posterior difuso","Peripapilar/retina ext.","Peripapilar radial","Peripapilar → centrífuga","Polo posterior","Difuso"],
    ["Vitreíte","Ausente/leve","Mínima","Moderada crônica","Ausente","Mínima","Variável"],
    ["Evolução","Autolimitada 2–6 sem","Autolimitada 6–10 sem","Crônica progressiva","Crônica recorrente","Crônica, cicatriz","Crônica"],
    ["HLA","Sem associação definida","Sem associação definida","HLA-A29 (>95%)","Sem associação","Sem associação definida","Sem associação"],
    ["ERG","Normal","Reduzido (focal)","Reduzido (difuso)","Normal inicial","Normal","Variável"],
    ["FAF","Hiper ativo → hipo resíduo","Hiper ativo","Variável","Hiper ativo → hipo cicatriz","Hiper ativo","Variável"],
    ["ICGA","Hipo precoce/tardio","Hipofluorescente","Hipo difuso","Hipo persistente ativo","Hipo lesões ativas","Variável"],
    ["Tratamento","Observação ± PDN","Observação","IS obrigatório (CSA)","CSA ± Azatioprina","Corticoide, Anti-VEGF","Corticoide, IS"],
    ["NVC","Rara","Rara","10–15%","30%","Frequente (40%)","Possível"],
  ],
  nota:"PIC = Punctate Inner Choroidopathy; CMF = Coroidite Multifocal; CSA = Ciclosporina; NVC = Neovascularização coroidal"
},
{
  id:"tab-masquerade",
  titulo:"Síndromes Masquerade — Diagnóstico Diferencial",
  subtitulo:"Condições que mimetizam uveíte — como identificar e diferenciar",
  cols:["Condição","Pistas Clínicas","Achado Característico","Exame Confirmatório","Tratamento"],
  linhas:[
    ["Linfoma Intraocular (PVRL)","Idoso >50a, uveíte crônica sem resposta a PDN, bilateral","Infiltrados sub-EPR ('leopard spot'), células vítreas grandes","IL-10:IL-6 vítreo >1; Citologia vítreo: células B grandes","MTX intravítreo ± rituximabe; QT sistêmica"],
    ["Retinoblastoma (DD toxocara em crianças)","Criança <5a, leucocoria, sem inflamação real","Massa branca intraocular calcificada","RX/TC (calcificação), US (hiperecoico), RM","Enucleação, quimioterapia, radioterapia"],
    ["Leucemia / Infiltração hematológica","Pancitopenia, petéquias sistêmicas, hemorragias retinianas em chama","Infiltrados perivenocos 'white-centered' (manchas de Roth)","Hemograma, mielograma, biópsia","Quimioterapia sistêmica"],
    ["Melanoma uveal","Adulto >50a, unilateral, massa uveal pigmentada","Massa coroidal elevada, descolamento secundário","US (acústica interna baixa), AFG, RM","Braquiterapia, proton beam, enucleação"],
    ["Retinose Pigmentar","Perda campo periférico noturno progressiva, bilateral","Espículas ósseas na periferia, atenuação arteriolar, palidez de papila","ERG: amplitudes reduzidas/extintas, mutação genética","Suporte visual, sem cura"],
    ["Corpo Estranho Intraocular","Trauma ocular, endoftalmite crônica recorrente","Opacidade vítrea focal, siderose se ferro","RX, TC órbita, US ocular","Remoção cirúrgica (vitrectomia)"],
    ["OICR (Oclusão isquêmica crônica)","Idoso, HAS, DM — não responde a corticoide","Neovascularização periférica, rubeose iridiana","AFG: isquemia extensa","Panfotocoagulação, anti-VEGF"],
  ],
  nota:"Regra de ouro: qualquer 'uveíte' que não responde a imunossupressão adequada → buscar masquerade. Biópsia/citologia do vítreo é indispensável."
},
{
  id:"tab-hipopion",
  titulo:"Diagnóstico Diferencial do Hipópio",
  subtitulo:"Hipópio = nível de células/exsudato na câmara anterior — causa importantíssima",
  cols:["Causa","Características do Hipópio","Outros Achados","Confirmação","Urgência"],
  linhas:[
    ["HLA-B27 (UAA)","Móvel com posição, branco, sem hipópio verdadeiro com pus","UAA dolorosa, unilateral, alternante, HLA-B27+","Tipagem HLA-B27","Moderada"],
    ["Behçet","Hipópio clássico móvel, recorrente bilateral","Aftas orais, úlceras genitais, teste patergia+","Critérios ISBD 2014","Alta"],
    ["Endoftalmite","Pus espesso, nível imóvel, dor intensa","Pós-cirurgia/injeção, vitreíte densa","Cultura/PCR vítreo","EMERGÊNCIA"],
    ["Sífilis","Hipópio + KPs granulomatosos","Qualquer localização, HIV+","VDRL/FTA-ABS","Alta"],
    ["Trauma / IOL deslocalizada","Pós-traumático, sem infecção","Trauma precedente, fragmentos","Biomicroscopia, US","Alta"],
    ["Corticoide intravítreo (depósito)","'Pseudo-hipópio' esbranquiçado","Injeção prévia de triamcinolona","Histórico terapêutico","Baixa — observação"],
    ["Rifabutina","Hipópio com hifema, hipotonia","Uso de rifabutina (HIV — profilaxia MAC)","Histórico medicamentoso","Moderada — suspender droga"],
    ["Linfoma (hipópio linfomatoso)","Células grandes atípicas no nível","Idoso, crônico, sem resposta PDN","IL-10:IL-6, citologia","Alta"],
  ],
  nota:"Hipópio + dor intensa = endoftalmite até prova em contrário. Hipópio 'frio' (sem dor) = Behçet ou HLA-B27."
},
{
  id:"tab-tratamento-comparativo",
  titulo:"Comparativo de Tratamento Sistêmico nas Uveítes Não Infecciosas",
  subtitulo:"Imunossupressores e biológicos: indicações, doses e monitoramento",
  cols:["Medicamento","Dose","Indicação Principal","Mecanismo","Efeitos Adversos","Monitoramento","Gravidez"],
  linhas:[
    ["Prednisona","0,5–1mg/kg/dia (máx 80mg)","1ª linha todas as uveítes NI","Corticoide — anti-inflamatório amplo","Glaucoma, catarata, DM, HAS, osteoporose","PIO, glicemia, PA, DEXA","Categoria C (evitar 1º tri)"],
    ["Metotrexato","7,5–25mg/semana VO/SC + ácido fólico 5mg/sem","AIJ, Sarcoidose, Birdshot, Fuchs, poupador de PDN","Anti-folato — supressão células imunes","Hepatotoxicidade, mucosite, nauseas, teratogênico","TGO/TGP mensal, hemograma","Contraindicado (teratogênico)"],
    ["Azatioprina","1,5–2,5mg/kg/dia","Behçet, VKH, sarcoidose, poupador de PDN","Antimetabólito — inibição síntese DNA","Mielotoxicidade, hepatotox, linfoma (raro)","Hemograma, TGO/TGP quinzenal/mensal","Categoria D — evitar"],
    ["Micofenolato Mofetil","1–3g/dia","AIJ, Birdshot, VKH, alternativa MTX","Inibição IMPDH — linfócitos T e B","Diarreia, nauseas, leucopenia, infecção","Hemograma, função renal","Contraindicado"],
    ["Ciclosporina","2,5–5mg/kg/dia","Birdshot (melhor evidência), VKH, Behçet, C.Serpiginosa","Inibição calcineurina — IL-2, linfócitos T","HAS, nefrotoxicidade, hirsutismo, hiperplasia gengival","Creatinina, PA, nível sérico","Categoria C — evitar"],
    ["Adalimumabe (Humira)","40mg SC q2sem (adultos); 20–40mg SC q2sem (pediátrico)","AIJ, HLA-B27, Behçet, VKH, Sarcoidose — anti-TNF 1ª linha","Anti-TNF-α monoclonal humanizado","Infecção, reativação TB, desmielinização, lúpus","Quantiferom antes de iniciar, hemograma 3/3 meses","Categoria B — preferido se necessário"],
    ["Infliximabe (Remicade)","5mg/kg IV sem 0,2,6 → q4–8sem","Behçet (melhor evidência), VKH, Sarcoidose refratária","Anti-TNF-α monoclonal quimérico","Infecção, reativação TB, reação infusional, hepatotox","Quantiferom, hemograma, TGP","Categoria B"],
    ["Secukinumabe","300mg SC mensal","Espondiloartrites com UAA recorrente (refratário a anti-TNF)","Anti-IL-17A","Candidíase, infecções, DII (pode piorar)","Hemograma, IGRA","Categoria B — dados limitados"],
    ["Rituximabe","375mg/m² IV semanal × 4 doses","Linfoma intraocular, vasculites sistêmicas (Wegener), casos refratários","Anti-CD20 — depleção células B","Infecção grave, reativação HBV, leucoencefalopatia (raro)","HBsAg/anti-HBc antes, hemograma","Contraindicado"],
    ["Interferão alfa-2a","3–6 MUI SC 3x/semana","Behçet refratário (forte evidência), Birdshot","Imunomodulador","Síndrome flu-like, depressão, citopenia, tireoide","Hemograma, TSH, psicológico","Contraindicado"],
  ],
  nota:"Antes de qualquer imunossupressor: excluir TB (IGRA), sífilis (VDRL), HIV, hepatites B e C. Anti-TNF contraindicado em IC grau III-IV e desmielinização ativa."
}
];

function renderTabelas(){
  const g = document.getElementById('tab-content');
  if(!g) return;
  g.innerHTML = TABELAS.map((t,idx)=>`
    <div class="comp-card" id="tab-${idx}">
      <div class="comp-header" onclick="toggleTabela(${idx})">
        <div>
          <div class="comp-title">${t.titulo}</div>
          <div class="comp-sub">${t.subtitulo}</div>
        </div>
        <span class="comp-toggle">▼</span>
      </div>
      <div class="comp-body">
        <div style="overflow-x:auto">
          <table class="comp-table">
            <thead><tr>${t.cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead>
            <tbody>${t.linhas.map((r,ri)=>`
              <tr class="${ri%2===0?'':'tr-alt'}">
                <td class="td-label">${r[0]}</td>
                ${r.slice(1).map(c=>`<td>${c}</td>`).join('')}
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${t.nota?`<div class="comp-nota"><span class="nota-icon">ℹ</span> ${t.nota}</div>`:''}
      </div>
    </div>`).join('');
}

function toggleTabela(idx){
  const card = document.getElementById('tab-'+idx);
  if(card) card.classList.toggle('open');
}
