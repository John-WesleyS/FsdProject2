/* ═══════════════════════════════════════════════
   MODAL FUNCTIONS
═══════════════════════════════════════════════ */

// ─── MODAL MANAGEMENT ───
function openModal(id){
  const e = EXAMS.find(x=>x.id===id);
  if(!e) return;

  // Header
  document.getElementById('modalHeader').innerHTML = `
    <div class="modal-icon" style="background:${e.colorBg}">${e.icon}</div>
    <div>
      <div class="modal-title">${e.title}</div>
      <div class="modal-sub">${e.conducting} &nbsp;|&nbsp; ${e.state}</div>
    </div>
    <button class="modal-close" onclick="closeModal()">✕</button>
  `;

  // Tabs
  const tabs = ['Overview','Syllabus','Exam Pattern','Timeline','Cut-offs','Study Material','Admit Cards','Mock Tests'];
  document.getElementById('modalTabs').innerHTML = tabs.map((t,i)=>
    `<button class="mtab ${i===0?'active':''}" onclick="switchTab(${i},this)">${t}</button>`
  ).join('');

  // Body
  document.getElementById('modalBody').innerHTML = `
    ${buildOverviewTab(e)}
    ${buildSyllabusTab(e)}
    ${buildPatternTab(e)}
    ${buildTimelineTab(e)}
    ${buildCutoffTab(e)}
    ${buildMaterialTab(e)}
    ${buildAdmitCardTab(e)}
    ${buildMockTestTab(e)}
  `;

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e){
  if(e && e.target !== document.getElementById('overlay')) return;
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow='auto';
}

function switchTab(tabIndex, btn) {
  document.querySelectorAll('.mtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach((p, i) => {
    p.classList.toggle('active', i === tabIndex);
  });
}

// ─── TAB BUILDERS ───
function buildOverviewTab(e){
  return `<div class="tab-panel active">
    <div class="alert-box">📢 Always verify dates from official website. This is indicative data for guidance only.</div>
    <div class="info-grid">
      <div class="info-box"><div class="info-box-label">Conducting Body</div><div class="info-box-val" style="font-size:.85rem">${e.conducting}</div></div>
      <div class="info-box"><div class="info-box-label">Vacancies</div><div class="info-box-val">${e.vacancies}</div></div>
      <div class="info-box"><div class="info-box-label">Eligibility</div><div class="info-box-val" style="font-size:.85rem">${e.eligibility}</div></div>
      <div class="info-box"><div class="info-box-label">Mode</div><div class="info-box-val">${e.mode}</div></div>
      <div class="info-box"><div class="info-box-label">Language</div><div class="info-box-val">${e.language}</div></div>
      <div class="info-box"><div class="info-box-label">Status</div><div class="info-box-val" style="color:${e.status==='active'?'#34d399':e.status==='upcoming'?'#fbbf24':'#64748b'}">${e.status.toUpperCase()}</div></div>
    </div>
    <h3 class="sec">Posts & Services</h3>
    <p style="color:var(--text2);font-size:.9rem;line-height:1.7;">${e.posts}</p>
  </div>`;
}

function buildSyllabusTab(e){
  const boxes = Object.entries(e.syllabus).map(([k,v])=>`
    <div class="syllabus-box">
      <h4>${k}</h4>
      <ul>${v.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');
  return `<div class="tab-panel">
    <h3 class="sec">Complete Syllabus</h3>
    <div class="syllabus-grid">${boxes}</div>
  </div>`;
}

function buildPatternTab(e){
  if(!e.pattern) return `<div class="tab-panel"><p style="color:var(--text3)">Pattern data not available</p></div>`;
  const rows = e.pattern.map(p=>`
    <tr>
      <td><strong style="color:var(--text)">${p.stage}</strong></td>
      <td>${p.papers}</td>
      <td>${p.duration}</td>
      <td><strong style="color:var(--accent)">${p.marks}</strong></td>
    </tr>
  `).join('');
  return `<div class="tab-panel">
    <h3 class="sec">Exam Pattern & Selection Process</h3>
    <table class="cutoff-table">
      <thead><tr><th>Stage</th><th>Papers / Events</th><th>Duration</th><th>Marks</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function buildTimelineTab(e){
  const events = [];
  const fields = ['notification','applyLast','prelims','tier1','cbt1','written','exam','mains','tier2','cbt2','physical','pet','skill','ssb','interview','result'];
  const labels = {
    notification:'📢 Notification Released',applyLast:'📝 Last Date to Apply',
    prelims:'📝 Preliminary Exam',tier1:'📝 Tier I Exam',cbt1:'📝 CBT Stage 1',
    written:'📝 Written Exam',exam:'📝 Examination',mains:'📝 Main Exam',
    tier2:'📝 Tier II Exam',cbt2:'📝 CBT Stage 2',physical:'🏃 Physical Test',
    pet:'🏃 Physical Efficiency Test',skill:'⌨️ Skill Test',ssb:'🎖️ SSB Interview',
    interview:'🎤 Interview / Personality Test',result:'🏆 Final Result'
  };
  fields.forEach(f=>{ if(e[f]) events.push({label:labels[f],date:e[f]}); });

  return `<div class="tab-panel">
    <h3 class="sec">Important Dates & Timeline</h3>
    <ul class="timeline-list">
      ${events.map(ev=>`<li class="timeline-item">
        <span class="tl-date">${ev.date}</span>
        <span class="tl-event">${ev.label}</span>
      </li>`).join('')}
    </ul>
  </div>`;
}

function buildCutoffTab(e){
  if(!e.cutoffs || !e.cutoffs.length){
    return `<div class="tab-panel"><p style="color:var(--text3)">Cut-off data not available for this exam cycle</p></div>`;
  }
  const rows = e.cutoffs.map(c=>`
    <tr>
      <td><strong style="color:var(--accent)">${c.year}</strong></td>
      <td>${c.general}</td>
      <td>${c.obc}</td>
      <td>${c.sc}</td>
      <td>${c.st}</td>
      <td>${c.ews}</td>
    </tr>
  `).join('');
  return `<div class="tab-panel">
    <h3 class="sec">Previous Year Cut-offs</h3>
    <div style="overflow-x:auto">
    <table class="cutoff-table">
      <thead><tr><th>Year / Stage</th><th>General</th><th>OBC</th><th>SC</th><th>ST</th><th>EWS</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    </div>
    <p style="color:var(--text3);font-size:.78rem;margin-top:12px">* Cut-offs are indicative. Actual values depend on vacancy, difficulty, and number of candidates.</p>
  </div>`;
}

function buildMaterialTab(e){
  if(!e.materials || !e.materials.length){
    return `<div class="tab-panel"><p style="color:var(--text3)">Study material list not available</p></div>`;
  }
  return `<div class="tab-panel">
    <h3 class="sec">Recommended Study Material</h3>
    <div class="material-grid">
      ${e.materials.map(m=>`
        <div class="material-card">
          <div class="mat-icon">${m.icon}</div>
          <div>
            <div class="mat-title">${m.title}</div>
            <div class="mat-sub">${m.type} — ${m.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <h3 class="sec" style="margin-top:28px">General Free Resources</h3>
    <div class="material-grid">
      <div class="material-card"><div class="mat-icon">🌐</div><div><div class="mat-title">Official Website</div><div class="mat-sub">Commission's official portal</div></div></div>
      <div class="material-card"><div class="mat-icon">📰</div><div><div class="mat-title">Drishti IAS / Unacademy</div><div class="mat-sub">Free notes & articles</div></div></div>
      <div class="material-card"><div class="mat-icon">🎥</div><div><div class="mat-title">YouTube — Free Classes</div><div class="mat-sub">Khan GS Research Centre</div></div></div>
      <div class="material-card"><div class="mat-icon">📱</div><div><div class="mat-title">Testbook / Adda247 App</div><div class="mat-sub">Mock tests & quizzes</div></div></div>
    </div>
  </div>`;
}

function buildAdmitCardTab(e){
  // Assume each exam has an official website or admit card link
  const admitCardUrl = e.admitCardUrl || `https://www.google.com/search?q=${encodeURIComponent(e.conducting + ' admit card')}`;
  return `<div class="tab-panel">
    <h3 class="sec">Download Admit Card</h3>
    <p style="color:var(--text2);font-size:.9rem;margin-bottom:20px;">Click the button below to download your admit card or visit the official exam website.</p>
    <a href="${admitCardUrl}" target="_blank" class="download-btn">📄 Download Admit Card / Visit Official Site</a>
    <div class="alert-box" style="margin-top:20px;">⚠️ Admit cards are usually released 2-4 weeks before the exam date. Check the official website regularly.</div>
  </div>`;
}

function buildMockTestTab(e){
  const mockTestSites = [
    {name: 'Testbook', url: 'https://testbook.com/', icon: '📱'},
    {name: 'Adda247', url: 'https://www.adda247.com/', icon: '🎯'},
    {name: 'Oliveboard', url: 'https://www.oliveboard.in/', icon: '🧠'},
    {name: 'Gradeup', url: 'https://gradeup.co/', icon: '📈'},
  ];
  return `<div class="tab-panel">
    <h3 class="sec">Practice Mock Tests</h3>
    <p style="color:var(--text2);font-size:.9rem;margin-bottom:20px;">Improve your preparation with mock tests from popular platforms.</p>
    <div class="material-grid">
      ${mockTestSites.map(site=>`
        <div class="material-card" onclick="window.open('${site.url}', '_blank')">
          <div class="mat-icon">${site.icon}</div>
          <div>
            <div class="mat-title">${site.name}</div>
            <div class="mat-sub">Mock Tests & Practice</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="alert-box" style="margin-top:20px;">💡 Regular mock test practice helps in time management and identifying weak areas.</div>
  </div>`;
}

// ─── UTILITY FUNCTIONS ───
// ─── NOTIFICATION & CALENDAR MODALS ───
function showNotifModal() {
  const modal = document.getElementById('notif-modal');
  const notifList = modal.querySelector('.notif-list');

  notifList.innerHTML = notifications.map(notif =>
    `<div class="notif-item">${notif}</div>`
  ).join('');

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function showCalendarModal() {
  const modal = document.getElementById('calendar-modal');
  const calendarGrid = modal.querySelector('.calendar-grid');

  // Simple calendar implementation
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  modal.querySelector('.calendar-header h3').textContent =
    `${monthNames[currentMonth]} ${currentYear}`;

  // Generate calendar days
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  let calendarHTML = '<div class="calendar-week days-header">';
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day =>
    calendarHTML += `<div>${day}</div>`
  );
  calendarHTML += '</div>';

  let currentDate = new Date(startDate);
  for (let week = 0; week < 6; week++) {
    calendarHTML += '<div class="calendar-week">';
    for (let day = 0; day < 7; day++) {
      const isCurrentMonth = currentDate.getMonth() === currentMonth;
      const isToday = currentDate.toDateString() === today.toDateString();
      const dayClass = `calendar-day ${isCurrentMonth ? '' : 'other-month'} ${isToday ? 'today' : ''}`;

      calendarHTML += `<div class="${dayClass}">${currentDate.getDate()}</div>`;
      currentDate.setDate(currentDate.getDate() + 1);
    }
    calendarHTML += '</div>';
  }

  calendarGrid.innerHTML = calendarHTML;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}