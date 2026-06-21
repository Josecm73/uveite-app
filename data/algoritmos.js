const ALGORITMOS = [
{
  id:"algo-abordagem-inicial",
  titulo:"Abordagem Inicial da Uveíte Aguda",
  subtitulo:"Fluxograma sistemático na primeira consulta",
  cor:"#1e90ff",
  icone:"🔍",
  passos:[
    {
      num:"1",
      titulo:"História Clínica Dirigida",
      cor:"#1e90ff",
      itens:[
        "Início: agudo (<3 meses) vs. crônico (≥3 meses)?",
        "Curso: agudo / recorrente / crônico",
        "Lateralidade: unilateral ou bilateral?",
        "Dor + fotofobia: sugere uveíte anterior",
        "Visão turva sem dor: sugere uveíte posterior/intermediária",
        "Doenças sistêmicas: espondiloartrite, DII, sarcoidose, TB, HIV, sífilis recente",
        "Medicamentos: rifabutina, cidofovir, bisfosfonatos, checkpoint inhibitors",
        "Viagens: área endêmica de histoplasmose, leishmaniose, leptospirose",
        "Contato animal: gato (toxoplasmose, bartonela), cão (toxocara, leishmaniose)",
        "Trauma ou cirurgia ocular prévia"
      ]
    },
    {
      num:"2",
      titulo:"Exame na Lâmpada de Fenda",
      cor:"#00d9b8",
      itens:[
        "Segmento anterior: KPs (tipo, distribuição), células CA (grau SUN), flare (grau SUN), hipópio, sinequias, íris, cristalino",
        "Ângulo: gonioscopia se PIO elevada (neovascularização, nódulos angulares, Posner-Schlossman)",
        "Vítreo: haze (grau NIH), snowballs, snowbanks (biomicroscopia indireta)",
        "Segmento posterior: lesões coroidianas/retinianas, vasculite, papilite, EMC"
      ]
    },
    {
      num:"3",
      titulo:"Classificação SUN 2021",
      cor:"#f0b429",
      itens:[
        "→ Localização: Anterior / Intermediária / Posterior / Panuveíte",
        "→ Lateralidade: Unilateral / Bilateral / Alternante",
        "→ Curso: Agudo (<3m) / Recorrente (≥3m remissão) / Crônico (≥3m atividade)",
        "→ Onset: Súbito vs. Insidioso"
      ]
    },
    {
      num:"4",
      titulo:"Decisão Investigação",
      cor:"#a78bfa",
      itens:[
        "1º episódio UAA leve unilateral jovem: tratar e observar (sem exames inicialmente)",
        "UAA recorrente: HLA-B27, VDRL/FTA-ABS, Quantiferom",
        "UA bilateral, crônica ou granulomatosa: ACE, lisozima, RX tórax (sarcoidose), VDRL, IGRA",
        "Uveíte posterior: VDRL/FTA-ABS, IGRA, IgG Toxoplasma, RM crânio se bilateral",
        "Qualquer uveíte em imunocompromido: CD4, PCR AH múltiplo (CMV, HSV, VZV, Toxo)",
        "Idoso + resposta atípica: linfoma (IL-10:IL-6 vítreo)"
      ]
    },
    {
      num:"5",
      titulo:"Tratamento Inicial",
      cor:"#ff8c42",
      itens:[
        "Excluiu infecção → Corticoide tópico (prednisolona 1% a cada 1–2h) + cicloplégico",
        "Uveíte posterior/panuveíte: corticoide sistêmico 1mg/kg/dia",
        "Confirmou infecção → Tratar agente etiológico ANTES de imunossupressão",
        "Monitorar PIO (pressão ocular) em todos os pacientes tratados com corticoide",
        "Acompanhamento: 1 semana após início, depois mensalmente até controle"
      ]
    }
  ]
},
{
  id:"algo-ua-aguda",
  titulo:"Algoritmo: Uveíte Anterior Aguda",
  subtitulo:"Diagnóstico diferencial e fluxo de investigação na UAA",
  cor:"#1e90ff",
  icone:"👁",
  passos:[
    {
      num:"?",
      titulo:"Unilateral, Dolorosa, Aguda?",
      cor:"#1e90ff",
      itens:[
        "✓ SIM → Suspeita HLA-B27 / Herpes / Trauma",
        "✓ Bilateral, crônica, sem dor → Fuchs / AIJ / Sarcoidose",
        "✓ Hipópio → HLA-B27 / Behçet / Endoftalmite"
      ]
    },
    {
      num:"A",
      titulo:"Se Unilateral + HLA-B27 suspeita",
      cor:"#1e90ff",
      itens:[
        "Solicitar: HLA-B27 + VDRL/FTA-ABS + Quantiferom",
        "Investigar: dor lombar inflamatória, artrite periférica, DII, psoríase",
        "Se HLA-B27+ → UAA espondiloartropática confirmada",
        "Encaminhar reumatologista para doença sistêmica",
        "Recidivas >3/ano → imunossupressor + anti-TNF"
      ]
    },
    {
      num:"B",
      titulo:"Se Herpes suspeita (história vesícula, zoster)",
      cor:"#ff5c5c",
      itens:[
        "PCR humor aquoso: HSV-1, HSV-2, VZV, CMV",
        "Achados sugestivos: KPs em moeda, setor de atrofia iridiana, hipertensão ocular trabeculite",
        "INICIAR: Valaciclovir 500–1000mg 3x/dia (herpes anterior) sem esperar PCR",
        "NÃO usar corticoide sem antiviral em herpes ativo",
        "Manutenção: Valaciclovir 500mg/dia por 1 ano (prevenir recidivas)"
      ]
    },
    {
      num:"C",
      titulo:"Se KPs estrelados difusos + sem sinequias",
      cor:"#00d9b8",
      itens:[
        "Suspeita Fuchs — PCR AH para Rubéola",
        "NÃO usar corticoide crônico",
        "Tratar complicações: catarata (cirurgia), glaucoma (hipotensores)"
      ]
    },
    {
      num:"D",
      titulo:"Se Criança com UA crônica assintomática",
      cor:"#f0b429",
      itens:[
        "AIJ → verificar forma oligoarticular, ANA",
        "Protocolo AAP: rastreio a cada 3–6 meses",
        "Tratar: PDN tópica + MTX ± Adalimumabe",
        "Monitorar band keratopathy e PIO"
      ]
    }
  ]
},
{
  id:"algo-up-infecciosa",
  titulo:"Algoritmo: Uveíte Posterior Infecciosa",
  subtitulo:"Abordagem passo a passo para identificar agente etiológico",
  cor:"#ff5c5c",
  icone:"🦠",
  passos:[
    {
      num:"1",
      titulo:"Contexto Clínico",
      cor:"#ff5c5c",
      itens:[
        "Imunocompetente + lesão satélite + cicatriz → Toxoplasmose (80% Brasil)",
        "HIV/AIDS + CD4<100 + necrose hemorrágica → CMV",
        "HIV/AIDS + necrose sem vitreíte → PORN (VZV/HSV)",
        "Imunocompetente + necrose periférica + vasculite + vitreíte intensa → ARN (HSV/VZV)",
        "Qualquer uveíte posterior → SEMPRE excluir Sífilis e TB antes de imunossupressão"
      ]
    },
    {
      num:"2",
      titulo:"Painel Sorológico Mínimo",
      cor:"#a78bfa",
      itens:[
        "VDRL + FTA-ABS (sífilis — nunca pular)",
        "IGRA / PPD + RX tórax (tuberculose)",
        "IgG + IgM anti-Toxoplasma",
        "CD4 se suspeita HIV (solicitar HIV 1/2 se desconhecido)",
        "IgG anti-Toxocara ELISA (crianças/contato com solo)"
      ]
    },
    {
      num:"3",
      titulo:"PCR Humor Aquoso (quando indicar)",
      cor:"#ff8c42",
      itens:[
        "Indicações: apresentação atípica, imunocomprometido, falta de resposta ao tratamento empírico, casos graves",
        "Painel: CMV, HSV-1, HSV-2, VZV, Toxoplasma gondii, T. pallidum, M. tuberculosis, rubéola",
        "Coeficiente Goldmann-Witmer >3 = produção local de anticorpos (padrão europeu)",
        "Volume mínimo: 0,1–0,2mL de humor aquoso via paracentese limbar"
      ]
    },
    {
      num:"4",
      titulo:"Tratamento Empírico (enquanto aguarda resultados)",
      cor:"#10d996",
      itens:[
        "Lesão satélite típica → SMX-TMP 800/160mg 2x/dia (iniciar sem esperar sorologias)",
        "Retinite necrosante periférica → Aciclovir IV 10mg/kg q8h (emergência)",
        "CD4<100 + retinite hemorrágica → Valganciclovir 900mg 2x/dia (CMV provável)",
        "NÃO iniciar corticoide sistêmico antes de excluir infecção em casos atípicos"
      ]
    }
  ]
},
{
  id:"algo-imunossupressao",
  titulo:"Algoritmo: Escalonamento Imunossupressor",
  subtitulo:"Quando e como escalar imunossupressão nas uveítes não infecciosas",
  cor:"#a78bfa",
  icone:"💊",
  passos:[
    {
      num:"1",
      titulo:"Pré-requisitos Antes de IS",
      cor:"#ff5c5c",
      itens:[
        "✓ Exclusão de causas infecciosas: VDRL, IGRA, HIV",
        "✓ Exclusão de masquerade (neoplasia) se quadro atípico",
        "✓ Hepatites B e C (anti-HBc, HBsAg, anti-HCV) — risco reativação",
        "✓ Hemograma basal, função renal, TGO/TGP, glicose",
        "✓ Vacinação: influenza, pneumococo, hepatite B (antes de iniciar)"
      ]
    },
    {
      num:"2",
      titulo:"Degrau 1 — Corticoide Local",
      cor:"#1e90ff",
      itens:[
        "Prednisolona 1% tópica (uveíte anterior)",
        "Triamcinolona sub-Tenon 40mg (UI/UP unilateral)",
        "Dexametasona intravítrea (Ozurdex 0,7mg) — EMC refratário",
        "Fluocinolona implante (Yutiq, Iluvien) — crônica bilateral",
        "Limite: ≤2 injeções/ano para evitar glaucoma/catarata"
      ]
    },
    {
      num:"3",
      titulo:"Degrau 2 — Corticoide Sistêmico",
      cor:"#00d9b8",
      itens:[
        "Prednisona 0,5–1mg/kg/dia (máx 80mg)",
        "Tapering: reduzir 10mg/sem até 30mg → 5mg/sem até 10mg → 2,5mg/sem até suspensão",
        "Duração mínima dependente da doença: 3 meses (UAA) a 12+ meses (VKH, sarcoidose)",
        "Indicação IS poupador: dose >10mg/dia por >3 meses, efeitos colaterais, crianças"
      ]
    },
    {
      num:"4",
      titulo:"Degrau 3 — Imunossupressor Convencional",
      cor:"#f0b429",
      itens:[
        "Metotrexato 15–25mg/semana (AIJ, sarcoidose, uveítes crônicas)",
        "Azatioprina 1,5–2,5mg/kg/dia (Behçet, VKH, poupador)",
        "Micofenolato 1–3g/dia (alternativa bem tolerada)",
        "Ciclosporina 3–5mg/kg/dia (Birdshot, serpiginosa, VKH)",
        "Aguardar resposta: 3–6 meses antes de escalar"
      ]
    },
    {
      num:"5",
      titulo:"Degrau 4 — Biológico (refratário a 2 IS convencionais)",
      cor:"#ff8c42",
      itens:[
        "Anti-TNF 1ª linha: Adalimumabe 40mg SC q2sem (aprovado AIJ, HLA-B27; off-label outros)",
        "Anti-TNF 2ª linha: Infliximabe 5mg/kg IV (Behçet, sarcoidose refratária)",
        "Anti-IL-17: Secukinumabe 300mg/mês (espondiloartrites refratárias a anti-TNF)",
        "Abatacepte: AIJ refratária a adalimumabe",
        "IFN-α: Behçet refratário (forte evidência)",
        "Rituximabe: PVRL, vasculites sistêmicas, casos selecionados",
        "SEMPRE excluir TB latente com Quantiferom antes de anti-TNF!"
      ]
    }
  ]
},
{
  id:"algo-emc",
  titulo:"Algoritmo: Edema Macular Cistoide na Uveíte",
  subtitulo:"Diagnóstico e manejo do EMC — principal causa de baixa acuidade visual",
  cor:"#00d9b8",
  icone:"🔬",
  passos:[
    {
      num:"1",
      titulo:"Diagnóstico",
      cor:"#1e90ff",
      itens:[
        "OCT de domínio espectral (SD-OCT): diagnóstico, quantificação (espessura central), monitoramento",
        "AFG: hiperfluorescência tardia em roseta / petala de flor no EMC ativo",
        "Sintomas: metamorfopsia, baixa AV central (variável), scotoma central"
      ]
    },
    {
      num:"2",
      titulo:"Controle da Inflamação (primeiro passo)",
      cor:"#ff5c5c",
      itens:[
        "Maximizar controle da doença de base — EMC raramente melhora sem controle inflamatório",
        "Se uveíte ativa: escalar corticoide e/ou IS conforme algoritmo geral",
        "Reavaliação OCT em 4–6 semanas"
      ]
    },
    {
      num:"3",
      titulo:"EMC Persistente → Terapia Local",
      cor:"#00d9b8",
      itens:[
        "Triamcinolona sub-Tenon 40mg (0,5–1mL): duração 2–3 meses, repetir se necessário",
        "Dexametasona intravítrea (Ozurdex 0,7mg): duração 5–6 meses, superior a sub-Tenon",
        "Implante fluocinolona (Yutiq 0,18mg): duração 36 meses — doença crônica bilateral",
        "Atenção: monitorar PIO (pico corticoide 4–6 semanas pós-injeção)"
      ]
    },
    {
      num:"4",
      titulo:"EMC Refratário → Sistêmico/Biológico",
      cor:"#a78bfa",
      itens:[
        "Acetazolamida 250mg 2–4x/dia: inibidor AC — pode reduzir EMC cistoide (mecanismo indireto)",
        "AINE tópico (nepafenaco, diclofenaco): adjuvante — modesta eficácia isolado",
        "Adalimumabe, infliximabe: se EMC associado a uveíte sistêmica ativa refratária",
        "Anti-VEGF (bevacizumabe, ranibizumabe): limitado — EMC por NVC ou Behçet com neovascularização",
        "Vitrectomia: EMC crônico refratário + membrana epiretiniana + tração vitreomacular"
      ]
    }
  ]
},
{
  id:"algo-arn",
  titulo:"Algoritmo: Necrose Retiniana Aguda (ARN) — Protocolo de Emergência",
  subtitulo:"Manejo urgente — cada hora importa para preservar a visão",
  cor:"#ff5c5c",
  icone:"🚨",
  passos:[
    {
      num:"0",
      titulo:"RECONHECIMENTO",
      cor:"#ff5c5c",
      itens:[
        "Tríade clínica: (1) Retinite necrosante periférica + (2) Vasculite arterial oclusiva + (3) Vitreíte intensa",
        "Início rápido — progressão em horas/dias sem tratamento",
        "Pode ocorrer em IMUNOCOMPETENTES (diferente do CMV)",
        "Agentes: VZV (adultos) > HSV-1 (jovens) > HSV-2 (neonatal)",
        "NÃO aguardar PCR para iniciar antiviral — diagnóstico clínico urgente"
      ]
    },
    {
      num:"1",
      titulo:"Hora 0–6: Internação + Antiviral IV",
      cor:"#ff5c5c",
      itens:[
        "INTERNAR o paciente",
        "Aciclovir IV: 10–15 mg/kg q8h (infusão em 60 min) — iniciar IMEDIATAMENTE",
        "Hidratação adequada (prevenir nefrotoxicidade do aciclovir)",
        "Paracentese da CA para PCR: VZV, HSV-1, HSV-2, CMV — sem atrasar tratamento",
        "Controlar PIO se >22 mmHg (glaucoma de células/bloqueio pupilar)"
      ]
    },
    {
      num:"2",
      titulo:"24–48h: Corticoide Adjuvante",
      cor:"#f0b429",
      itens:[
        "Aguardar 24–48h de antiviral ANTES do corticoide",
        "Prednisona 1mg/kg/dia VO → tapering conforme resposta",
        "Aspirina 100mg/dia: antiagregante para vasculite oclusiva arterial",
        "Prednisolona 1% tópica + cicloplégico para componente anterior"
      ]
    },
    {
      num:"3",
      titulo:"10–14 dias: Transição Oral",
      cor:"#10d996",
      itens:[
        "Valaciclovir 1g 3x/dia ou Fanciclovir 500mg 3x/dia × 3–6 meses",
        "Manter antiviral oral por no mínimo 3 meses para prevenir bilateralização",
        "Vigilância do olho contralateral: fundoscopia quinzenal por 3 meses"
      ]
    },
    {
      num:"4",
      titulo:"Prevenção e Tratamento do DR",
      cor:"#a78bfa",
      itens:[
        "Fotocoagulação a laser (barreira) na borda da necrose: controverso — alguns centros realizam",
        "DR = complicação em 50–75% — planejamento cirúrgico preemptivo",
        "Vitrectomia + tamponamento com óleo de silicone: melhor resultado para DR em área de necrose",
        "Prognóstico visual final dependente de acometimento macular e tempo para tratamento"
      ]
    }
  ]
},
{
  id:"algo-endoftalmite",
  titulo:"Algoritmo: Endoftalmite Pós-Operatória",
  subtitulo:"Protocolo de emergência baseado no Endophthalmitis Vitrectomy Study (EVS)",
  cor:"#ff8c42",
  icone:"⚠",
  passos:[
    {
      num:"0",
      titulo:"SUSPEITA CLÍNICA",
      cor:"#ff5c5c",
      itens:[
        "Pós-catarata/cirurgia/injeção intravítrea: dor + hipópio + baixa AV abrupta",
        "Endoftalmite aguda (<6 semanas pós-cirurgia): S. epidermidis, S. aureus, Streptococcus",
        "Endoftalmite crônica (>6 semanas): P. acnes, fungos, Corynebacterium",
        "Endógena: febre + foco infeccioso sistêmico (candida, Klebsiella, S. aureus bacteremia)"
      ]
    },
    {
      num:"1",
      titulo:"IMEDIATAMENTE — Coleta e Injeção ITV",
      cor:"#ff5c5c",
      itens:[
        "Colher paracentese CA (0,1mL) + vitrectomia diagnóstica (0,2–0,4mL) → Gram, cultura, PCR",
        "NÃO esperar resultado para tratar",
        "INJEÇÃO INTRAVÍTREA (Protocolo EVS):",
        "→ Vancomicina 1mg/0,1mL (gram-positivos)",
        "→ Ceftazidima 2,25mg/0,1mL (gram-negativos) — injeções SEPARADAS (precipitam juntas!)",
        "→ Dexametasona 0,4mg/0,1mL (adjuvante — opcional/controverso)"
      ]
    },
    {
      num:"2",
      titulo:"DECISÃO EVS — Vitrectomia via Pars Plana?",
      cor:"#f0b429",
      itens:[
        "AV = Percepção Luminosa → VITRECTOMIA (3x melhor AV final que injeção isolada)",
        "AV ≥ Vultos (conta dedos, movimento de mão) → Injeção ITV ± repetir 36–48h se pior",
        "EVS não incluiu cirurgia como universal — VPP para LP tem forte evidência",
        "Vitrectomia: remove carga bacteriana + permite dose maior de antibiótico"
      ]
    },
    {
      num:"3",
      titulo:"Cobertura Sistêmica (controversa)",
      cor:"#a78bfa",
      itens:[
        "EVS: antibiótico sistêmico (amicacina + ceftazidima) NÃO melhorou desfecho",
        "Endoftalmite endógena: antibiótico IV obrigatório (guiado por hemocultura)",
        "P. acnes: vancomicina ITV + vitrectomia + remoção da bolsa capsular",
        "Fúngica: anfotericina B ITV (5–10μg) + voriconazol sistêmico"
      ]
    },
    {
      num:"4",
      titulo:"Seguimento",
      cor:"#10d996",
      itens:[
        "Reavaliação 24–48h: resposta clínica?",
        "Sem melhora → repetir injeção ITV ou indicar VPP se não realizada",
        "Resultado de culturas em 24–72h → ajustar antibiótico",
        "Prognóstico: agente define desfecho — S. epidermidis melhor; Streptococcus pior"
      ]
    }
  ]
},
{
  id:"algo-uveite-posterior-bilateral",
  titulo:"Algoritmo: Uveíte Posterior Bilateral",
  subtitulo:"Diagnóstico diferencial sistematizado — abordagem Nussenblatt/SBO",
  cor:"#00d9b8",
  icone:"🔬",
  passos:[
    {
      num:"?",
      titulo:"Qual o Padrão de Apresentação?",
      cor:"#00d9b8",
      itens:[
        "Coroidite multifocal bilateral → pensar: VKH, Sarcoidose, TB, Sífilis, Birdshot",
        "Vitreíte bilateral crônica → pensar: Sarcoidose, Pars Planitis bilateral, HTLV-1, Linfoma",
        "Descolamento seroso bilateral → pensar: VKH (fase aguda)",
        "Placas amareladas bilaterais → pensar: Birdshot (HLA-A29), Sarcoidose",
        "Necrose bilateral → pensar: ARN/PORN (VZV), CMV"
      ]
    },
    {
      num:"A",
      titulo:"Excluir Infecção Primeiro (REGRA DE OURO)",
      cor:"#ff5c5c",
      itens:[
        "VDRL + FTA-ABS → sífilis (placóide posterior bilateral = sinal clássico)",
        "IGRA + RX tórax → TB (coroidite serpiginoide bilateral = TB até prova contrária)",
        "CD4 + HIV se imunocomprometido",
        "HTLV-1 sorologia → vitreíte bilateral em nordestino/baiano",
        "PCR humor aquoso se suspeita viral (HSV, CMV, VZV)"
      ]
    },
    {
      num:"B",
      titulo:"Investigação de Doenças Sistêmicas",
      cor:"#a78bfa",
      itens:[
        "ACE + lisozima + RX/TC tórax → Sarcoidose",
        "HLA-A29 → Birdshot (>95% sensibilidade)",
        "ANA se criança (AIJ bilateral rara mas possível)",
        "Critérios VKH (modificados 2001): meningismo, tinnitus, vitiligo, poliose",
        "Punção lombar se suspeita VKH agudo (pleocitose em 80%)"
      ]
    },
    {
      num:"C",
      titulo:"Nussenblatt: Pistas do Fundo de Olho",
      cor:"#f0b429",
      itens:[
        "Sunset glow fundus → VKH crônica ou Oftalmia Simpática",
        "Lesões ovoides radiais ao disco → Birdshot (HLA-A29)",
        "Periphlebite 'gota de vela' + KPs mutton-fat → Sarcoidose",
        "Pontos amarelados bilaterais peripapilar → Sarcoidose ou TB (Dalen-Fuchs)",
        "Nódulos de Dalen-Fuchs (EPR) → VKH / Oftalmia Simpática (idênticos histologicamente)"
      ]
    },
    {
      num:"D",
      titulo:"Exames de Imagem Dirigidos",
      cor:"#10d996",
      itens:[
        "OCT: DSR exsudativo bilateral → VKH aguda; atrofia fotorreceptores → Birdshot avançado",
        "ICGA: hipofluorescência coroidal difusa → VKH/OS; lesões hipofluorescentes → Sarcoidose/Birdshot",
        "AFG: pontos precoces com pooling tardio → VKH; periphlebite → Sarcoidose/Behçet",
        "ERG: amplitude reduzida → Birdshot (biomarcador de progressão)",
        "RM crânio: pars planitis bilateral → excluir Esclerose Múltipla"
      ]
    },
    {
      num:"E",
      titulo:"Não Infecciosa Confirmada → Tratar",
      cor:"#1e90ff",
      itens:[
        "VKH/OS: Metilprednisolona IV 1g/dia × 3d → Prednisona 1–1,5mg/kg → tapering 6–12 meses",
        "Birdshot: Ciclosporina 3–5mg/kg/dia (Nussenblatt pioneirou esta indicação)",
        "Sarcoidose: Prednisona 1mg/kg + MTX (poupador)",
        "HTLV-1: Prednisona + MTX (sem antiviral específico disponível)",
        "Meta: células <0.5+ SUN + ERG estável + OCT sem DSR/EMC"
      ]
    }
  ]
},
{
  id:"algo-vkh-os",
  titulo:"Algoritmo: VKH e Oftalmia Simpática",
  subtitulo:"Manejo diferenciado baseado em Nussenblatt & Whitcup",
  cor:"#f0b429",
  icone:"👁‍🗨",
  passos:[
    {
      num:"1",
      titulo:"Distinguir VKH de Oftalmia Simpática",
      cor:"#f0b429",
      itens:[
        "VKH: sem trauma/cirurgia ocular prévia — bilateral primária",
        "OS (Oftalmia Simpática): sempre há trauma ou cirurgia perfurante prévia",
        "Histologia: IDÊNTICAS (granulomas de Dalen-Fuchs, inflamação uveal difusa)",
        "Tratamento: IDÊNTICO (corticoide + imunossupressor como VKH)",
        "VKH: associação racial (asiáticos, latinos, indígenas); OS: sem predisposição racial"
      ]
    },
    {
      num:"2",
      titulo:"Fase Aguda — Pulso IV",
      cor:"#ff5c5c",
      itens:[
        "Metilprednisolona IV 1g/dia × 3 dias (internação hospitalar)",
        "Prednisona 1–1,5mg/kg/dia (máx 80mg) oral após pulso",
        "Prednisolona tópica 1% + cicloplégico para componente anterior",
        "OCT seriado: monitorar resolução do DSR bilateral",
        "Audiometria e avaliação neurológica (meningismo, tinnitus)"
      ]
    },
    {
      num:"3",
      titulo:"Tapering — NUNCA Apressar (Nussenblatt)",
      cor:"#a78bfa",
      itens:[
        "Reduzir apenas se OCT sem DSR + células CA <0.5+ + fundus estável",
        "Ritmo máximo de redução: 10mg/semana até 40mg → depois 5mg/semana até 20mg → depois 2,5mg/semana",
        "Manter ≥10mg/dia por MÍNIMO 6 meses",
        "Tapering rápido = recidiva = sunset glow fundus + nummular scars",
        "Meta: 6–12 meses de prednisona oral com tapering muito gradual"
      ]
    },
    {
      num:"4",
      titulo:"Imunossupressor (IS) Poupador de Corticoide",
      cor:"#00d9b8",
      itens:[
        "Indicação IS: falha em reduzir corticoide <10mg/dia após 3–6 meses",
        "Azatioprina 2–2,5mg/kg/dia: 1ª escolha histórica em VKH",
        "Micofenolato Mofetil 1–3g/dia: alternativa com boa evidência",
        "Ciclosporina 2,5–5mg/kg/dia: quando IS convencionais falham",
        "Monitorar: hemograma, função renal, TGO/TGP mensalmente"
      ]
    },
    {
      num:"5",
      titulo:"Biológico (Refratário)",
      cor:"#10d996",
      itens:[
        "Adalimumabe 40mg SC q2sem: evidência crescente em VKH refratária",
        "Infliximabe 5mg/kg IV semanas 0,2,6 → q8sem: alternativa",
        "PRÉ-REQUISITOS: IGRA negativo (ou TB latente tratada), Hepatite B excluída",
        "Secuquinumabe (anti-IL-17): estudos emergentes para VKH",
        "Monitorar: infecções oportunistas, função hepática, doenças desmielinizantes"
      ]
    },
    {
      num:"6",
      titulo:"OS: Decisão sobre Olho Excitante",
      cor:"#ff8c42",
      itens:[
        "Enucleação <2 semanas: pode prevenir OS (raramente aplicável — diagnóstico tardio habitual)",
        "Após 2 semanas: enucleação NÃO previne OS (Nussenblatt)",
        "Se AV útil no olho excitante → PRESERVAR e tratar com IS",
        "Se olho excitante = phthisis (sem AV, doloroso) → enucleação pode ser considerada",
        "Prognóstico: olho simpatizante frequentemente tem melhor AV que o excitante"
      ]
    }
  ]
}
];

function renderAlgoritmos(){
  const g = document.getElementById('algo-list');
  if(!g) return;
  g.innerHTML = ALGORITMOS.map((a,idx)=>`
    <div class="algo-card" id="algo-${idx}" style="border-top:3px solid ${a.cor}">
      <div class="algo-header" onclick="toggleAlgo(${idx})">
        <div style="display:flex;align-items:center;gap:.7rem">
          <span style="font-size:1.6rem">${a.icone}</span>
          <div>
            <div class="algo-title">${a.titulo}</div>
            <div class="algo-sub">${a.subtitulo}</div>
          </div>
        </div>
        <span class="algo-toggle" style="color:${a.cor}">▼</span>
      </div>
      <div class="algo-body">
        <div class="algo-steps">
          ${a.passos.map(p=>`
            <div class="algo-step">
              <div class="step-num" style="background:${p.cor}">${p.num}</div>
              <div class="step-content">
                <div class="step-title" style="color:${p.cor}">${p.titulo}</div>
                <ul class="step-list">
                  ${p.itens.map(i=>`<li>${i}</li>`).join('')}
                </ul>
              </div>
            </div>`).join('<div class="step-arrow">↓</div>')}
        </div>
      </div>
    </div>`).join('');
}

function toggleAlgo(idx){
  const el = document.getElementById('algo-'+idx);
  if(el) el.classList.toggle('open');
}
