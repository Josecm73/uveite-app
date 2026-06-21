// ===== APP.JS — Uveítes App =====
// Navegação, busca, filtros, inicialização

// ---- NAVEGAÇÃO ----
let currentPage = 'home';

function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.bn-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if(page){
    page.classList.add('active');
    currentPage = id;
  }
  document.querySelectorAll('[data-page]').forEach(n => {
    if(n.getAttribute('data-page') === id) n.classList.add('active');
    else n.classList.remove('active');
  });

  // Inicializar conteúdo sob demanda
  if(id === 'classificacao' && !document.getElementById('class-anatomica').hasChildNodes()){
    renderClassificacao();
  }
  if(id === 'doencas' && !document.getElementById('disease-grid').hasChildNodes()){
    renderDiseaseGrid('all');
  }
  if(id === 'tabelas' && !document.getElementById('tab-content').hasChildNodes()){
    renderTabelas();
  }
  if(id === 'algoritmos' && !document.getElementById('algo-list').hasChildNodes()){
    renderAlgoritmos();
  }
  if(id === 'tips'){
    const tipFilters = document.getElementById('tip-filters');
    if(tipFilters && !tipFilters.hasChildNodes()) renderTipFilters();
    if(!document.getElementById('tips-grid').hasChildNodes()) renderTips('all');
  }
  if(id === 'tratamento' && !document.getElementById('trat-content').hasChildNodes()){
    renderTratamento();
  }
  if(id === 'exames' && !document.getElementById('exam-list').hasChildNodes()){
    renderExames();
  }

  // Scroll para o topo
  window.scrollTo({top:0, behavior:'smooth'});
  // Fechar busca
  closeSearch();
}

// ---- BUSCA GLOBAL ----
const SEARCH_INDEX = [];

function buildSearchIndex(){
  DOENCAS.forEach(d=>{
    SEARCH_INDEX.push({
      tipo:'doenca',
      id: d.id,
      titulo: d.nome,
      subtitulo: d.sinonimos,
      preview: d.preview,
      tags: d.tags,
      page: 'doencas'
    });
  });
  TABELAS.forEach((t,i)=>{
    SEARCH_INDEX.push({
      tipo:'tabela',
      id: 'tab-'+i,
      titulo: t.titulo,
      subtitulo: t.subtitulo,
      preview: t.subtitulo,
      tags: [],
      page: 'tabelas'
    });
  });
  ALGORITMOS.forEach((a,i)=>{
    SEARCH_INDEX.push({
      tipo:'algoritmo',
      id: 'algo-'+i,
      titulo: a.titulo,
      subtitulo: a.subtitulo,
      preview: a.subtitulo,
      tags: [],
      page: 'algoritmos'
    });
  });
  TIPS.forEach(t=>{
    SEARCH_INDEX.push({
      tipo:'tip',
      id: t.id,
      titulo: t.titulo,
      subtitulo: t.cat,
      preview: t.corpo.replace(/<[^>]+>/g,'').slice(0,100)+'…',
      tags: [],
      page: 'tips'
    });
  });
}

function doSearch(query){
  if(!query || query.length < 2){
    closeSearch();
    return;
  }
  const q = query.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const results = SEARCH_INDEX.filter(item=>{
    const haystack = [item.titulo, item.subtitulo||'', item.preview||'', (item.tags||[]).join(' ')]
      .join(' ').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
    return haystack.includes(q);
  }).slice(0,8);

  const box = document.getElementById('searchResults');
  if(!box) return;
  if(results.length === 0){
    box.innerHTML = '<div class="sr-empty">Nenhum resultado encontrado.</div>';
    box.style.display = 'block';
    return;
  }
  const typeLabel = {doenca:'Doença',tabela:'Tabela',algoritmo:'Algoritmo',tip:'Tip',tratamento:'Tratamento',exame:'Exame'};
  const typeIcon = {doenca:'🔍',tabela:'📊',algoritmo:'🔄',tip:'💡'};
  box.innerHTML = results.map(r=>`
    <div class="sr-item" onclick="goToResult('${r.page}','${r.id}')">
      <span class="sr-icon">${typeIcon[r.tipo]||'📄'}</span>
      <div class="sr-info">
        <div class="sr-title">${r.titulo}</div>
        <div class="sr-sub">${r.preview ? r.preview.replace(/<[^>]+>/g,'').slice(0,80)+'…' : ''}</div>
      </div>
      <span class="sr-type">${typeLabel[r.tipo]||r.tipo}</span>
    </div>`).join('');
  box.style.display = 'block';
}

function goToResult(page, id){
  showPage(page);
  closeSearch();
  // Scroll para elemento após render
  setTimeout(()=>{
    const el = document.getElementById(id) ||
               document.getElementById('dc-'+id) ||
               document.getElementById('tip-'+id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'});
      el.classList.add('highlight-flash');
      setTimeout(()=>el.classList.remove('highlight-flash'), 2000);
      // Abrir card se fechado
      if(!el.classList.contains('open')) el.classList.add('open');
    }
  }, 200);
}

function closeSearch(){
  const box = document.getElementById('searchResults');
  if(box) box.style.display = 'none';
  const inp = document.getElementById('searchInput');
  if(inp && document.activeElement !== inp) inp.value = '';
}

// ---- FILTROS DE DOENÇAS ----
// (filterDiseases está em doencas.js)

// ---- UTILITÁRIOS ----
function navigateTo(page, diseaseId){
  showPage(page);
  if(diseaseId){
    setTimeout(()=>{
      const el = document.getElementById('dc-'+diseaseId);
      if(el){
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if(!el.classList.contains('open')) el.classList.add('open');
      }
    }, 250);
  }
}

// ---- INICIALIZAÇÃO ----
document.addEventListener('DOMContentLoaded', ()=>{
  // Construir índice de busca
  buildSearchIndex();

  // Evento de busca (input já tem oninput no HTML)
  const searchInput = document.getElementById('searchInput');
  if(searchInput){
    searchInput.addEventListener('keydown', e => {
      if(e.key === 'Escape') closeSearch();
    });
  }

  // Fechar busca ao clicar fora
  document.addEventListener('click', e=>{
    const box = document.getElementById('searchResults');
    const inp = document.getElementById('searchInput');
    if(box && inp && !box.contains(e.target) && e.target !== inp){
      closeSearch();
    }
  });

  // Renderizar home (sem lazy load — sempre visível)
  // Iniciar na home
  showPage('home');

  console.log('Uveítes App iniciado. Doenças:', DOENCAS.length, '| Tabelas:', TABELAS.length, '| Algoritmos:', ALGORITMOS.length, '| Tips:', TIPS.length);
});

// ---- SERVICE WORKER PARA OFFLINE (TWA) ----
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  });
}
