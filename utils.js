/* ═══════════════════════════════════════════════
   UTILITY FUNCTIONS
═══════════════════════════════════════════════ */

// ─── GLOBAL STATE ───
let activeFilter = 'all';
let activeCategory = 'all';
let searchQuery = '';

const states = ['Central','Andhra Pradesh','Telangana','Uttar Pradesh','Maharashtra','Rajasthan','Tamil Nadu','Karnataka','Kerala','West Bengal','Gujarat','Punjab','Jharkhand','Madhya Pradesh','Bihar','Odisha','Assam','Haryana','Himachal Pradesh','Uttarakhand','Chhattisgarh'];

// ─── INITIALIZATION ───
function init(){
  // Notifications ticker
  document.getElementById('notifText').textContent = notifications.join('  ');

  // Quick links
  const ql = document.getElementById('quickLinks');
  categories.forEach(c=>{
    ql.innerHTML += `<div class="quick-card" onclick="setCategory('${c.id}')">
      <div class="quick-icon">${c.icon}</div>
      <div class="quick-label">${c.label}</div>
    </div>`;
  });

  // Filter chips
  const fc = document.getElementById('filterChips');
  // Central filter
  fc.innerHTML += `<span class="chip central ${activeFilter==='Central'?'active':''}" onclick="setFilter('Central')">🇮🇳 Central</span>`;
  // State filters
  states.filter(s=>s!=='Central').forEach(s=>{
    fc.innerHTML += `<span class="chip" onclick="setFilter('${s}')">${s}</span>`;
  });
  // All
  fc.innerHTML = `<span class="chip ${activeFilter==='all'?'active':''}" onclick="setFilter('all')">All States</span>` + fc.innerHTML;

  renderGrid();
}

// ─── FILTERING FUNCTIONS ───
function setFilter(f){
  activeFilter = f;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  event.target.classList.add('active');
  renderGrid();
}

function setCategory(c){
  activeCategory = c;
  renderGrid();
  document.getElementById('examGrid').scrollIntoView({behavior:'smooth',block:'start'});
}

function filterExams(){
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  renderGrid();
}

// ─── RENDERING FUNCTIONS ───
function renderGrid(){
  const grid = document.getElementById('examGrid');
  const title = document.getElementById('gridTitle');
  let exams = EXAMS;

  // State filter
  if(activeFilter !== 'all'){
    exams = exams.filter(e=>e.state === activeFilter);
  }
  // Category filter
  if(activeCategory !== 'all'){
    exams = exams.filter(e=>e.category.includes(activeCategory));
  }
  // Search
  if(searchQuery){
    exams = exams.filter(e=>
      e.title.toLowerCase().includes(searchQuery) ||
      e.short.toLowerCase().includes(searchQuery) ||
      e.state.toLowerCase().includes(searchQuery) ||
      e.conducting.toLowerCase().includes(searchQuery) ||
      e.posts.toLowerCase().includes(searchQuery)
    );
  }

  // Update title
  let tl = 'All Government Exams';
  if(activeFilter!=='all') tl = `${activeFilter} Exams`;
  if(activeCategory!=='all'){
    const cat = categories.find(c=>c.id===activeCategory);
    tl = (cat?cat.label+' ':'')+tl;
  }
  title.textContent = `${tl} (${exams.length})`;

  if(exams.length === 0){
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1">
      <div class="empty-icon">🔍</div>
      <h3>No exams found</h3>
      <p>Try changing filters or search query</p>
    </div>`;
    return;
  }

  grid.innerHTML = exams.map(e=>{
    const typeTag = e.type==='central'
      ? `<span class="tag tag-central">Central</span>`
      : `<span class="tag tag-state">${e.state}</span>`;

    let catTags = '';
    if(e.category.includes('railway')) catTags+=`<span class="tag tag-rail">Railway</span>`;
    if(e.category.includes('police')) catTags+=`<span class="tag tag-police">Police</span>`;
    if(e.category.includes('teacher')) catTags+=`<span class="tag tag-teach">Teaching</span>`;
    if(e.category.includes('upsc')) catTags+=`<span class="tag tag-upsc">UPSC</span>`;
    if(e.category.includes('banking')) catTags+=`<span class="tag tag-group">Banking</span>`;
    if(e.category.includes('defence')) catTags+=`<span class="tag tag-police">Defence</span>`;
    if(e.category.includes('group')) catTags+=`<span class="tag tag-group">Group Exam</span>`;

    const statusClass = `status-${e.status}`;
    const statusLabel = e.status==='active'?'🟢 Active':e.status==='upcoming'?'🟡 Upcoming':'⚫ Closed';

    return `<div class="exam-card" onclick="openModal('${e.id}')">
      <div class="card-head">
        <div class="card-icon" style="background:${e.colorBg}">${e.icon}</div>
        <div>
          <div class="card-title">${e.title}</div>
          <div class="card-sub">${e.conducting}</div>
        </div>
      </div>
      <div class="card-tags">${typeTag}${catTags}</div>
      <div class="card-body">
        <div class="info-row"><span>Posts</span>${e.posts.length>60?e.posts.substring(0,60)+'…':e.posts}</div>
        <div class="info-row"><span>Vacancies</span>${e.vacancies}</div>
        <div class="info-row"><span>Eligibility</span>${e.eligibility}</div>
        <div class="info-row"><span>Mode</span>${e.mode}</div>
      </div>
      <div class="card-footer">
        <span class="status-badge ${statusClass}">${statusLabel}</span>
        <button class="view-btn">View Details →</button>
      </div>
    </div>`;
  }).join('');
}

// ─── UI UPDATE FUNCTIONS ───
// (Removed - not needed in original design)

// ─── PAGE NAVIGATION ───
function showPage(page){
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
  if(page==='central'){
    setFilter('Central');
    setCategory('all');
    activeCategory='all';
  } else if(page==='state'){
    setFilter('all');
    setCategory('state');
    activeCategory='state';
  } else if(page==='home'){
    setFilter('all');
    setCategory('all');
    activeFilter='all';activeCategory='all';
    renderGrid();
  } else if(page==='calendar'){
    showCalendarModal();
    return;
  } else if(page==='notifications'){
    showNotifModal();
    return;
  }
  document.querySelector('.main').scrollIntoView({behavior:'smooth'});
}