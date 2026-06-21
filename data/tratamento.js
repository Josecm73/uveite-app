const TRATAMENTO = {
  locais:[
    {
      grupo:"Corticoides Tópicos",
      drogas:[
        {nome:"Prednisolona Acetato 1%",dose:"1 gota a cada 1h (aguda grave) → 4–6x/dia (manutenção) → desmame lento",via:"Tópico",indicacao:"UA ativa — 1ª linha",observacao:"Melhor penetração que dexametasona tópica"},
        {nome:"Difluprednato 0,05%",dose:"4–6x/dia",via:"Tópico",indicacao:"UA grave — alternativa mais potente",observacao:"Maior risco de hipertensão ocular"},
        {nome:"Dexametasona 0,1%",dose:"4–6x/dia",via:"Tópico",indicacao:"UA leve-moderada",observacao:"Menos eficaz que prednisolona acetato"},
      ]
    },
    {
      grupo:"Midriáticos / Cicloplégicos",
      drogas:[
        {nome:"Atropina 1%",dose:"1–2x/dia",via:"Tópico",indicacao:"Uveíte anterior grave, sinequias extensas, crianças",observacao:"Duração: 10–14 dias"},
        {nome:"Ciclopentolato 1%",dose:"2–3x/dia",via:"Tópico",indicacao:"UA leve-moderada, prevenir sinequias",observacao:"Duração: 24–48h — facilita exame do fundo"},
        {nome:"Tropicamida 1%",dose:"1–2x/dia",via:"Tópico",indicacao:"Adjuvante, dilatação diagnóstica",observacao:"Curta duração (4–6h)"},
      ]
    },
    {
      grupo:"Corticoides Perioculares",
      drogas:[
        {nome:"Triamcinolona Acetonida 40mg/mL",dose:"0,5–1mL (20–40mg) sub-Tenon posterior ou inferior",via:"Sub-Tenon",indicacao:"UI/UP unilateral, EMC, pars planitis",observacao:"Duração 6–8 semanas. Risco ptose, hemorragia, perfuração acidental"},
        {nome:"Metilprednisolona 40mg",dose:"0,5–1mL periocular",via:"Periocular",indicacao:"Alternativa à triamcinolona",observacao:"Menor duração"},
      ]
    },
    {
      grupo:"Corticoides Intravítreos",
      drogas:[
        {nome:"Implante Dexametasona (Ozurdex) 0,7mg",dose:"1 implante ITV",via:"Intravítreo",indicacao:"EMC por uveíte NI, pars planitis — aprovado FDA",observacao:"Duração eficaz: 4–6 meses. Monitorar PIO (pico 4–6 semanas)"},
        {nome:"Implante Fluocinolona (Yutiq) 0,18mg",dose:"1 implante ITV",via:"Intravítreo",indicacao:"Uveíte NI crônica bilateral — aprovado FDA",observacao:"Duração: 36 meses. Alto risco catarata (>80%) e glaucoma (>30%)"},
        {nome:"Triamcinolona 4mg/0,1mL",dose:"4mg ITV",via:"Intravítreo",indicacao:"EMC off-label, uveíte grave",observacao:"Off-label. Duração 3 meses. Risco endoftalmite aumentado"},
      ]
    },
    {
      grupo:"Antivirais Locais",
      drogas:[
        {nome:"Ganciclovir Intravítreo 2mg",dose:"2mg/0,05mL ITV — 2x/semana × 3 semanas → 1x/semana manutenção",via:"Intravítreo",indicacao:"Retinite CMV grave ou resistência sistêmica",observacao:"Pode combinar com valganciclovir sistêmico"},
        {nome:"Foscarnet Intravítreo 2,4mg",dose:"2,4mg/0,1mL ITV",via:"Intravítreo",indicacao:"CMV resistente a ganciclovir",observacao:"Nefrotóxico sistêmico — preferir local em casos selecionados"},
        {nome:"Anfotericina B Intravítrea",dose:"5–10μg/0,1mL",via:"Intravítreo",indicacao:"Endoftalmite fúngica (Candida)",observacao:"Associar voriconazol sistêmico"},
      ]
    },
    {
      grupo:"Antibióticos Intravítreos (Endoftalmite)",
      drogas:[
        {nome:"Vancomicina 1mg/0,1mL",dose:"1mg/0,1mL ITV — dose única (repetir 36–48h se necessário)",via:"Intravítreo",indicacao:"Cobertura gram-positivos (Staph, Strep)",observacao:"Protocolo EVS. NÃO misturar com ceftazidima"},
        {nome:"Ceftazidima 2,25mg/0,1mL",dose:"2,25mg/0,1mL ITV — dose única",via:"Intravítreo",indicacao:"Cobertura gram-negativos",observacao:"Aplicar em seringas SEPARADAS — precipita com vancomicina"},
        {nome:"Dexametasona 0,4mg ITV",dose:"0,4mg/0,1mL — adjuvante",via:"Intravítreo",indicacao:"Endoftalmite — redução inflamação (controverso)",observacao:"Benefício incerto no EVS — uso opcional"},
      ]
    }
  ],
  sistemicos:[
    {
      grupo:"Corticoides Sistêmicos",
      drogas:[
        {nome:"Prednisona oral",dose:"Fase aguda: 1–1,5mg/kg/dia (máx 80mg) VO. Tapering: 10mg/sem até 30mg → 5mg/sem até 10mg → 2,5mg/sem até suspensão",via:"Oral",indicacao:"UI/UP/Panuveíte NI — 1ª linha sistêmica. VKH, sarcoidose, Behçet grave",observacao:"Nunca >3 meses sem IS poupador se dose >10mg. Gastroproteção (omeprazol), cálcio + vit D, DEXA"},
        {nome:"Metilprednisolona IV (Pulsoterapia)",dose:"1g/dia IV × 3 dias (infusão em 30–60 min)",via:"IV (internação)",indicacao:"VKH aguda grave, sarcoidose severa, panuveíte grave bilateral",observacao:"Monitorar glicemia, PA, potássio durante pulsoterapia"},
      ]
    },
    {
      grupo:"Imunossupressores Convencionais",
      drogas:[
        {nome:"Metotrexato (MTX)",dose:"Início 7,5–10mg/sem → aumento 2,5mg/semana até 20–25mg/semana. VO ou SC (melhor biodisponibilidade)",via:"VO ou SC",indicacao:"AIJ, sarcoidose, Birdshot, poupador de corticoide — 1ª escolha geral",observacao:"SEMPRE + ácido fólico 5mg/semana (dia seguinte ao MTX). Monitorar hemograma, TGO/TGP, creatinina. Teratogênico — contracepção"},
        {nome:"Azatioprina (AZA)",dose:"1,5–2,5mg/kg/dia (dose inicial 50mg/dia com aumento gradual)",via:"VO",indicacao:"Behçet, VKH, sarcoidose, poupador de PDN",observacao:"Verificar TPMT (enzima metabolizadora) antes. Mielotoxicidade. Interação com alopurinol (reduzir 75% da dose). Monitorar hemograma quinzenal por 2 meses, depois mensal"},
        {nome:"Micofenolato Mofetil (MMF)",dose:"1g 2x/dia → aumento progressivo até 3g/dia se tolerado",via:"VO",indicacao:"AIJ refratária, VKH, sarcoidose — boa tolerância",observacao:"Diarreia frequente (melhor com ácido micofenólico). Leucopenia. Teratogênico. Monitorar hemograma mensal"},
        {nome:"Ciclosporina A",dose:"2,5–5mg/kg/dia dividido em 2 doses (medir nível sérico C0 ou C2)",via:"VO",indicacao:"Birdshot (maior evidência), VKH, serpiginosa, Behçet",observacao:"Nefrotóxica (monitorar creatinina, reduzir se ↑30% do basal), HAS, hirsutismo, hiperplasia gengival. Interações: fluconazol, eritromicina, rifampicina"},
        {nome:"Clorambucil",dose:"0,1–0,2mg/kg/dia",via:"VO",indicacao:"Behçet refratário a outros IS",observacao:"Alquilante — leucemia a longo prazo. Uso limitado. Monitorar hemograma"},
      ]
    },
    {
      grupo:"Biológicos — Anti-TNF",
      drogas:[
        {nome:"Adalimumabe (Humira, Hyrimoz)",dose:"80mg SC semana 0 → 40mg semana 1 → 40mg q2sem. Pediátrico: 20mg (<30kg) ou 40mg (≥30kg) q2sem",via:"SC",indicacao:"AIJ-uveíte (APROVADO FDA/EMA), HLA-B27, sarcoidose, Behçet, VKH refratária — off-label exceto AIJ",observacao:"PRÉ: Quantiferom (excluir TB), HBsAg/anti-HBc, hemograma. Contraindicado em IC III-IV, desmielinização ativa. Ajuste de dose em pediatria conforme peso"},
        {nome:"Infliximabe (Remicade, Inflectra)",dose:"5mg/kg IV semanas 0, 2, 6 → q4–8sem",via:"IV (infusão 2h)",indicacao:"Behçet (melhor evidência), sarcoidose/VKH refratária, esclerouveíte em Wegener",observacao:"Reação infusional (1–3%). Pré-medicação: difenidramina + hidrocortisona. Mais imunogênico que adalimumabe (anticorpos anti-infliximabe). Quimérico: menor tolerância a longo prazo"},
        {nome:"Etanercepte",dose:"25mg SC 2x/semana ou 50mg 1x/semana",via:"SC",indicacao:"Espondiloartrite sistêmica (menos evidência para uveíte ocular isolada)",observacao:"MENOS eficaz para uveíte que adalimumabe/infliximabe. NÃO usar em Behçet — pode piorar"},
      ]
    },
    {
      grupo:"Biológicos — Outros Alvos",
      drogas:[
        {nome:"Secukinumabe (Cosentyx)",dose:"300mg SC D0, 1, 2, 3, 4 → mensal",via:"SC",indicacao:"Espondiloartrite com UAA refratária a anti-TNF",observacao:"Anti-IL-17A. Risco de candidíase. Pode piorar DII (não usar em Crohn)"},
        {nome:"Abatacepte (Orencia)",dose:"10mg/kg IV mensal ou 125mg SC semanal",via:"IV ou SC",indicacao:"AIJ com uveíte refratária a adalimumabe",observacao:"Anti-CD28 (bloqueia coestimulação T). Segunda linha em AIJ após falha a adalimumabe"},
        {nome:"Interferão alfa-2a (IFN-α2a)",dose:"3–6 MUI SC 3x/semana × 12–24 meses",via:"SC",indicacao:"Behçet refratário (forte evidência), Birdshot refratário",observacao:"Efeitos adversos: síndrome flu-like (melhora com tempo), depressão, mielossupressão, tireoidite. Monitorar TSH, hemograma, psicológico"},
        {nome:"Rituximabe (Mabthera)",dose:"375mg/m² IV semanal × 4 doses; ou 1g IV × 2 doses (semanas 0 e 2)",via:"IV",indicacao:"PVRL (linfoma intraocular), vasculites ANCA+ (Wegener ocular), casos refratários especiais",observacao:"Anti-CD20. PRÉ: HBsAg + anti-HBc (reativação grave!). Infecções graves. PML (raro)"},
        {nome:"Daclizumabe (descontinuado) / Tocilizumabe",dose:"Tocilizumabe: 8mg/kg IV q4sem",via:"IV",indicacao:"AIJ sistêmica com envolvimento ocular, casos refratários experimentais",observacao:"Anti-IL-6R. Tocilizumabe aprovado para AIJ sistêmica. Dados emergentes para uveíte"},
      ]
    },
    {
      grupo:"Antivirais Sistêmicos",
      drogas:[
        {nome:"Aciclovir IV",dose:"10–15mg/kg q8h IV (infusão em 60 min) × 10–14 dias",via:"IV",indicacao:"ARN (Necrose Retiniana Aguda) — emergência; PORN em imunocompetente",observacao:"Hidratação adequada (nefrotóxico). Ajuste em insuficiência renal. Após IV: transição para valaciclovir oral"},
        {nome:"Valaciclovir oral",dose:"1g 3x/dia (ARN após aciclovir IV) × 3–6 meses. 500mg 3x/dia (profilaxia recorrência HSV anterior)",via:"VO",indicacao:"Manutenção pós-ARN, prevenção recidiva herpes anterior",observacao:"Melhor biodisponibilidade que aciclovir oral. Ajustar em insuficiência renal"},
        {nome:"Valganciclovir oral",dose:"Indução: 900mg 2x/dia × 21 dias. Manutenção: 900mg 1x/dia (indefinido até CD4>100)",via:"VO",indicacao:"Retinite CMV (standard of care atual)",observacao:"Mielossupressão (leucopenia) — monitorar hemograma semanal na indução. Ajustar para ClCr"},
        {nome:"Ganciclovir IV",dose:"5mg/kg q12h × 14–21 dias",via:"IV",indicacao:"Retinite CMV com ameaça ao polo posterior, doença grave",observacao:"Reservar para casos graves — valganciclovir oral equivalente para maioria"},
        {nome:"Foscarnet IV",dose:"90mg/kg q12h (indução) → 90–120mg/kg/dia (manutenção)",via:"IV",indicacao:"CMV resistente a ganciclovir, HSV resistente a aciclovir",observacao:"Nefrotóxico, distúrbios eletrolíticos. Monitorar creatinina, cálcio, magnésio diariamente"},
      ]
    },
    {
      grupo:"Antibióticos Sistêmicos",
      drogas:[
        {nome:"Penicilina G Cristalina",dose:"18–24 MUI/dia IV (3–4 MUI q4h) × 14 dias",via:"IV (internação)",indicacao:"Sífilis ocular (tratar como neurossífilis)",observacao:"Reação de Jarisch-Herxheimer esperada nas primeiras 24h — não interromper. Dessensibilizar se alergia"},
        {nome:"SMX-TMP (Bactrim)",dose:"800/160mg 2x/dia × 45 dias (toxoplasmose). 800/160mg 3x/semana × 1–3 anos (profilaxia)",via:"VO",indicacao:"Toxoplasmose ocular — alternativa eficaz ao esquema clássico; Profilaxia secundária",observacao:"Boa penetração ocular. Monitorar função renal. Evitar em G6PD deficiente"},
        {nome:"Sulfadiazina + Pirimetamina + Ácido Folínico",dose:"Sulfadiazina 4g/dia (1g qid) + Pirimetamina 75mg ataque → 25–50mg/dia + Ácido folínico 10–25mg/dia × 6 semanas",via:"VO",indicacao:"Toxoplasmose ocular — esquema clássico",observacao:"Pirimetamina: mielossupressão. Sempre + ácido folínico (leucovorin). Hidratação ↑ (cristalúria da sulfadiazina)"},
        {nome:"Rifampicina + Isoniazida + Pirazinamida + Etambutol (RIPE)",dose:"Adultos >50kg: R600mg + I300mg + P2g + E1200mg/dia × 2 meses → R+I × 4 meses",via:"VO",indicacao:"Tuberculose ocular (PCDT-TB Brasil)",observacao:"Etambutol: neurite óptica (monitorar AV e visão de cores mensalmente). Rifampicina: interações medicamentosas (reduz eficácia anticoncepcionais, ciclosporina)"},
        {nome:"Doxiciclina + Rifampicina",dose:"Doxiciclina 100mg 2x/dia + Rifampicina 300mg 2x/dia × 4–6 semanas",via:"VO",indicacao:"Bartonela henselae (neurorretinite, doença do arranhão do gato)",observacao:"Alternativa isolada: azitromicina 500mg D1 → 250mg × 4 dias"},
      ]
    }
  ]
};

function renderTratamento(){
  const cont = document.getElementById('trat-content');
  if(!cont) return;
  const renderGroup = (grupos) => grupos.map(g=>`
    <div class="trat-group">
      <div class="trat-group-title">${g.grupo}</div>
      <div class="drug-cards">
        ${g.drogas.map(d=>`
          <div class="drug-card">
            <div class="drug-name">${d.nome}</div>
            <div class="drug-rows">
              <div class="drug-row"><span class="dr-label">Dose/Posologia</span><span class="dr-val">${d.dose}</span></div>
              <div class="drug-row"><span class="dr-label">Via</span><span class="dr-val dr-via">${d.via}</span></div>
              <div class="drug-row"><span class="dr-label">Indicação</span><span class="dr-val">${d.indicacao}</span></div>
              <div class="drug-row"><span class="dr-label">Observação</span><span class="dr-val dr-obs">${d.observacao}</span></div>
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  cont.innerHTML = `
    <div class="trat-section">
      <div class="trat-sec-title"><span class="trat-icon">💧</span> Tratamento Local / Periocular / Intravítreo</div>
      ${renderGroup(TRATAMENTO.locais)}
    </div>
    <div class="trat-section">
      <div class="trat-sec-title"><span class="trat-icon">💊</span> Tratamento Sistêmico</div>
      ${renderGroup(TRATAMENTO.sistemicos)}
    </div>`;
}
