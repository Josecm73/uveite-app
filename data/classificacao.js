// ===== CLASSIFICAÇÃO DAS UVEÍTES =====
const CLASSIFICACAO_ANATOMICA = [
  {
    titulo: "Uveíte Anterior (UA)",
    subtitulo: "Inflamação primária da câmara anterior",
    cor: "#1e90ff",
    itens: [
      { nome: "Irite", desc: "Inflamação confinada à íris. Células e flare na câmara anterior com mínima participação do corpo ciliar.", tags: ["Aguda","Crônica"] },
      { nome: "Iridociclite", desc: "Inflamação da íris e corpo ciliar anterior. Forma mais comum de uveíte anterior.", tags: ["Aguda","Recorrente"] },
      { nome: "Ciclite Anterior", desc: "Inflamação predominante do corpo ciliar anterior com mínima participação iriana.", tags: ["Rara"] }
    ],
    sinais: "Células CA grau ≥0.5+, flare, KPs, sinequias posteriores, hipópio, miose",
    exemplos: "HLA-B27, Fuchs, AIJ, Herpes, sarcoidose, traumática"
  },
  {
    titulo: "Uveíte Intermediária (UI)",
    subtitulo: "Inflamação primária do vítreo anterior",
    cor: "#00d9b8",
    itens: [
      { nome: "Pars Planitis", desc: "UI idiopática sem doença sistêmica associada. Snowbanks e snowballs inferiores. Mais comum em jovens.", tags: ["Idiopática","Bilateral"] },
      { nome: "UI por Esclerose Múltipla", desc: "Periphlebitis retiniana com células vítreas. Associação com EM em 10–15% dos casos de UI.", tags: ["Sistêmica"] },
      { nome: "UI por Sarcoidose", desc: "Células vítreas com snowballs, periphlebite e lesões granulomatosas em pars plana.", tags: ["Granulomatosa"] }
    ],
    sinais: "Haze vítreo, snowballs, snowbanks inferiores, periphlebite periférica, EMC",
    exemplos: "Pars planitis, Esclerose Múltipla, Sarcoidose, Lyme, Toxocara"
  },
  {
    titulo: "Uveíte Posterior (UP)",
    subtitulo: "Inflamação da retina e/ou coróide",
    cor: "#f0b429",
    itens: [
      { nome: "Coroidite", desc: "Inflamação primária da coróide. Lesões amarelo-esbranquiçadas profundas ao EPR.", tags: ["Focal","Multifocal","Difusa"] },
      { nome: "Coriorretinite", desc: "Inflamação da coróide com extensão à retina suprajacente. Lesão ativa com bordas mal definidas.", tags: ["Ativa","Cicatriz"] },
      { nome: "Retinite", desc: "Inflamação primária da retina com necrose tecidual. Área branca/cinza de retinite necrosante.", tags: ["Necrosante","Não-necrosante"] },
      { nome: "Vasculite Retiniana", desc: "Inflamação das paredes vasculares retinianas. Bainhas perivasculares, oclusão, neovascularização.", tags: ["Arterite","Flebite"] }
    ],
    sinais: "Lesões coroidianas, retinite, vasculite, hemorragias, edema de papila, EMC",
    exemplos: "Toxoplasmose, TB, sífilis, CMV, ARN, VKH, Birdshot, sarcoidose"
  },
  {
    titulo: "Panuveíte (PU)",
    subtitulo: "Inflamação difusa de toda a úvea",
    cor: "#ff8c42",
    itens: [
      { nome: "Panuveíte Granulomatosa", desc: "KPs grandes em gordura de carneiro, nódulos de Busacca/Koeppe, lesões coroidianas múltiplas. VKH, sarcoidose, oftalmia simpática.", tags: ["Granulomatosa"] },
      { nome: "Panuveíte Não Granulomatosa", desc: "KPs pequenos a médios, sem nódulos iridianos. Behçet, sífilis, endoftalmite.", tags: ["Não granulomatosa"] }
    ],
    sinais: "Inflamação CA + vítreo + retina/coróide simultaneamente, sem local predominante",
    exemplos: "VKH, Behçet, Sarcoidose, Sífilis, Endoftalmite, Linfoma intraocular"
  }
];

const SUN_GRADING = [
  {
    titulo: "Células — Câmara Anterior",
    fonte: "SUN Working Group 2005",
    colunas: ["Grau","Células/campo 1×1mm","Interpretação"],
    linhas: [
      ["0", "< 1 célula", "Inativo"],
      ["0.5+ (Trace)", "1–5 células", "Inflamação mínima"],
      ["1+", "6–15 células", "Leve"],
      ["2+", "16–25 células", "Moderada"],
      ["3+", "26–50 células", "Marcada"],
      ["4+", "> 50 células", "Intensa / Hipópio"],
    ]
  },
  {
    titulo: "Flare — Câmara Anterior",
    fonte: "SUN Working Group 2005",
    colunas: ["Grau","Descrição","Achado Clínico"],
    linhas: [
      ["0", "Nenhum", "Câmara anterior clara"],
      ["1+", "Leve / Faint", "Haze discreto"],
      ["2+", "Moderado", "Íris e cristalino visíveis"],
      ["3+", "Marcado", "Íris e cristalino com detalhes turvos"],
      ["4+", "Intenso", "Fibrina / aquoso plástico"],
    ]
  },
  {
    titulo: "Haze Vítreo (NIH/SUN)",
    fonte: "Nussenblatt et al. 1985",
    colunas: ["Grau","Descrição","Achado Clínico"],
    linhas: [
      ["0", "Nenhum", "Fundo perfeitamente visível"],
      ["0.5+", "Mínimo", "Discreto embaçamento da margem do DO"],
      ["1+", "Leve", "Vasos retinianos visíveis, DO obscurecido"],
      ["2+", "Moderado", "DO e vasos visíveis, mas embaçados"],
      ["3+", "Marcado", "DO visível, bordas indistintas, sem vasos"],
      ["4+", "Intenso", "DO não visível — fundo completamente obscurecido"],
    ]
  },
  {
    titulo: "Células Vítreas (Multicenter MUST Trial)",
    fonte: "MUST Trial",
    colunas: ["Grau","Células no campo","Equivalência"],
    linhas: [
      ["0", "Nenhuma", "Inativo"],
      ["0.5+", "1–5", "Traço"],
      ["1+", "6–10", "Leve"],
      ["2+", "11–20", "Moderado"],
      ["3+", "21–50", "Marcado"],
      ["4+", "> 51", "Intenso"],
    ]
  }
];

const CLASSIFICACAO_ETIOLOGICA = [
  {
    titulo: "Infecciosas",
    subtitulo: "Agente patogênico identificável",
    cor: "#ff5c5c",
    itens: [
      { nome: "Parasitárias", desc: "Toxoplasmose (causa nº1 UP), Toxocaríase, Cisticercose, Oncocercose, DUSN", tags: ["Protozoários","Helmintos"] },
      { nome: "Bacterianas", desc: "Tuberculose, Sífilis, Borreliose (Lyme), Brucelose, Bartonelose (cat-scratch), Leptospirose, Nocardiose", tags: ["Bacteriana"] },
      { nome: "Virais", desc: "HSV-1/2, VZV, CMV, HIV, Rubéola, EBV, Dengue, Zika, West Nile", tags: ["Vírus"] },
      { nome: "Fúngicas", desc: "Candida, Histoplasmose, Criptococose, Aspergilose, Coccidioidomicose", tags: ["Fungo"] }
    ],
    nota: "⚠ Sempre excluir sífilis e tuberculose antes de qualquer imunossupressão"
  },
  {
    titulo: "Não Infecciosas",
    subtitulo: "Imunológica / Autoinflamatória",
    cor: "#10d996",
    itens: [
      { nome: "Espondiloartropatias (HLA-B27)", desc: "Espondilite anquilosante, artrite reativa, DII, artrite psoriática. UAA aguda recorrente unilateral.", tags: ["HLA-B27","Anterior"] },
      { nome: "Síndromes Oculares Específicas", desc: "Fuchs, Pars Planitis, Birdshot (HLA-A29), PIC, CMF, APMPPE, MEWDS, Coroidite Serpiginosa", tags: ["Idiopática","Imune"] },
      { nome: "Doenças Sistêmicas Autoimunes", desc: "Sarcoidose, Behçet, VKH, LES, Esclerodermia, AIJ, Sjogren, Esclerose Múltipla, DII", tags: ["Sistêmica"] },
      { nome: "Induzidas por Drogas", desc: "Rifabutina, Cidofovir, Bisfosfonatos, Pembrolizumabe, Nivolumabe, Ipilimumabe (checkpoint inhibitors)", tags: ["Iatrogênica"] }
    ],
    nota: "Imunossupressão é o pilar terapêutico após exclusão de causas infecciosas"
  },
  {
    titulo: "Masquerade Syndromes",
    subtitulo: "Condições que mimetizam uveíte",
    cor: "#a78bfa",
    itens: [
      { nome: "Neoplásicas", desc: "Linfoma Intraocular Primário (mais comum), Leucemia, Retinoblastoma, Melanoma uveal, Metástase", tags: ["Neoplásica","Alta gravidade"] },
      { nome: "Não Neoplásicas", desc: "Retinose Pigmentar, Descolamento de retina periférico, OICR, Dispersão pigmentar, Corpo estranho intraocular", tags: ["Estrutural"] }
    ],
    nota: "🚨 Suspeitar se uveíte crônica não responde a corticoide — biópsia/PCR urgente"
  },
  {
    titulo: "Traumáticas e Idiopáticas",
    subtitulo: "",
    cor: "#4a6278",
    itens: [
      { nome: "Traumáticas", desc: "Uveíte pós-traumática, Oftalmia Simpática (ferida penetrante olho contralateral), Uveíte induzida por cristalino", tags: ["Trauma"] },
      { nome: "Idiopáticas", desc: "30–50% dos casos não têm etiologia identificada mesmo após investigação completa. Diagnóstico de exclusão.", tags: ["Exclusão"] }
    ],
    nota: "Reavaliar periodicamente — algumas idiopáticas revelam etiologia ao longo do tempo"
  }
];

function renderClassificacao() {
  // Anatômica
  const gA = document.getElementById('class-anatomica');
  if(!gA) return;
  gA.innerHTML = CLASSIFICACAO_ANATOMICA.map(c => `
    <div class="class-card">
      <div class="class-head" style="border-left:3px solid ${c.cor}">
        <h3 style="color:${c.cor}">${c.titulo}</h3>
        <p>${c.subtitulo}</p>
      </div>
      <div class="class-body">
        ${c.itens.map(i => `
          <div class="class-item">
            <div class="ci-dot" style="background:${c.cor}"></div>
            <div>
              <div class="ci-name">${i.nome}</div>
              <div class="ci-desc">${i.desc}</div>
              ${i.tags.map(t=>`<span class="ci-tag" style="background:${c.cor}18;color:${c.cor};border:1px solid ${c.cor}30">${t}</span>`).join('')}
            </div>
          </div>`).join('')}
        <div style="margin-top:.8rem;padding:.6rem .8rem;background:rgba(255,255,255,.03);border-radius:6px;font-size:.74rem">
          <span style="color:var(--text3)">Sinais: </span><span style="color:var(--text2)">${c.sinais}</span><br>
          <span style="color:var(--text3)">Exemplos: </span><span style="color:var(--text2)">${c.exemplos}</span>
        </div>
      </div>
    </div>`).join('');

  // SUN Grading
  const gS = document.getElementById('sun-grading');
  if(gS) gS.innerHTML = SUN_GRADING.map(s => `
    <div class="sun-card">
      <div class="sun-head"><h3>${s.titulo}</h3><div style="font-size:.65rem;color:var(--text3);margin-top:2px">${s.fonte}</div></div>
      <table class="sun-table">
        <tr>${s.colunas.map(c=>`<th>${c}</th>`).join('')}</tr>
        ${s.linhas.map((r,i)=>`
          <tr>
            <td><span class="grade-badge ${['g0','g0','g1','g2','g3','g4'][i] || 'g4'}">${r[0]}</span></td>
            <td>${r[1]}</td>
            <td style="color:var(--text)">${r[2]}</td>
          </tr>`).join('')}
      </table>
    </div>`).join('');

  // Etiológica
  const gE = document.getElementById('class-etiologica');
  if(gE) gE.innerHTML = CLASSIFICACAO_ETIOLOGICA.map(c => `
    <div class="class-card">
      <div class="class-head" style="border-left:3px solid ${c.cor}">
        <h3 style="color:${c.cor}">${c.titulo}</h3>
        <p>${c.subtitulo}</p>
      </div>
      <div class="class-body">
        ${c.itens.map(i => `
          <div class="class-item">
            <div class="ci-dot" style="background:${c.cor}"></div>
            <div>
              <div class="ci-name">${i.nome}</div>
              <div class="ci-desc">${i.desc}</div>
              ${i.tags.map(t=>`<span class="ci-tag" style="background:${c.cor}18;color:${c.cor};border:1px solid ${c.cor}30">${t}</span>`).join('')}
            </div>
          </div>`).join('')}
        <div style="margin-top:.6rem;font-size:.74rem;color:var(--text3);padding:.5rem .8rem;background:rgba(255,255,255,.03);border-radius:6px">${c.nota}</div>
      </div>
    </div>`).join('');
}
