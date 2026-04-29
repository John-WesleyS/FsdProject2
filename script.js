
const notifications = [
  "🔔 UPSC Civil Services 2025 Notification Released — Apply by April 30 |",
  "🔔 SSC CGL 2025 Exam Dates Announced — Tier I: July 2025 |",
  "🔔 RRB NTPC 2025 Registration Open — Last Date May 15 |",
  "🔔 AP APPSC Group 1 2025 Notification Out |",
  "🔔 Telangana TSPSC AEE 2025 Results Declared |",
  "🔔 UP Police Constable 2025 Exam Schedule Released |",
  "🔔 IBPS PO 2025 Notification Expected June 2025 |",
  "🔔 TN TRB PG Asst 2025 Counselling Ongoing |",
  "🔔 Maharashtra MPSC State Service 2025 Prelims in August |",
  "🔔 Kerala PSC LDC 2025 — Rank List Published |"
];

const categories = [
  {id:'all',icon:'🏛️',label:'All Exams'},
  {id:'central',icon:'🇮🇳',label:'Central'},
  {id:'upsc',icon:'👔',label:'UPSC'},
  {id:'railway',icon:'🚂',label:'Railways'},
  {id:'banking',icon:'🏦',label:'Banking'},
  {id:'police',icon:'👮',label:'Police'},
  {id:'teacher',icon:'📚',label:'Teaching'},
  {id:'defence',icon:'⚔️',label:'Defence'},
  {id:'state',icon:'🗺️',label:'State PSC'},
  {id:'group',icon:'📋',label:'Group D/C/B'},
  {id:'engineering',icon:'⚙️',label:'Engineering'},
  {id:'medical',icon:'🏥',label:'Medical'},
  {id:'revenue',icon:'📊',label:'Revenue'},
  {id:'judicial',icon:'⚖️',label:'Judicial'},
  {id:'agriculture',icon:'🌾',label:'Agriculture'},
  {id:'forest',icon:'🌲',label:'Forest'},
];

const EXAMS = [
  // ─── CENTRAL ───
  {
    id:'upsc_cse',title:'UPSC Civil Services (IAS/IPS/IFS)',
    short:'UPSC CSE',icon:'👔',state:'Central',type:'central',
    category:['upsc','central'],
    colorBg:'rgba(236,72,153,.15)',colorText:'#f472b6',
    conducting:'Union Public Service Commission',
    posts:'IAS, IPS, IFS, IRS and 24 other services',
    vacancies:'~1000 (varies annually)',
    eligibility:'Any Graduate (Min 21, Max 32 yrs)',
    mode:'Offline (OMR + Descriptive)',
    language:'English & Hindi',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    prelims:'June 2025',
    mains:'Sept 2025',
    interview:'Jan 2026',
    result:'April 2026',
    admitCardUrl:'https://upsc.gov.in/',
    syllabus:{
      'GS Paper I':['Indian Heritage & Culture','History of India','Geography of India & World'],
      'GS Paper II':['Governance & Constitution','Polity','Social Justice','International Relations'],
      'GS Paper III':['Technology','Economic Development','Biodiversity','Security','Disaster Management'],
      'GS Paper IV':['Ethics, Integrity & Aptitude','Public Administration'],
      'CSAT (Qualifying)':['Comprehension','Logical Reasoning','Analytical Ability','Decision Making','Basic Numeracy'],
      'Optional Subjects':['26 Options Available','Mains Paper VI & VII','250 Marks Each'],
    },
    pattern:[
      {stage:'Prelims (Screening)',papers:'GS Paper I (100Q, 200M) + CSAT (80Q, 200M)',duration:'2 hrs each',marks:'200+200'},
      {stage:'Mains (Written)',papers:'9 Papers: Essay + GS I-IV + Optional I-II + Lang',duration:'3 hrs each',marks:'1750'},
      {stage:'Personality Test',papers:'Interview by UPSC Board',duration:'~30 min',marks:'275'},
    ],
    cutoffs:[
      {year:'2023',general:'1009 (GS+Interview combined)',obc:'994',sc:'981',st:'958',ews:'984'},
      {year:'2022',general:'1011',obc:'999',sc:'988',st:'960',ews:'987'},
      {year:'2021',general:'987',obc:'975',sc:'962',st:'935',ews:'968'},
    ],
    materials:[
      {icon:'📖',title:'NCERT Books (VI–XII)',type:'Free PDFs','desc':'Foundation reading'},
      {icon:'📰',title:'The Hindu / PIB',type:'Daily','desc':'Current Affairs'},
      {icon:'📋',title:'Previous Year Papers',type:'PDF','desc':'2010–2024'},
      {icon:'🎥',title:'UPSC Pathshala YouTube',type:'Free','desc':'Video lectures'},
      {icon:'📘',title:'Laxmikant Polity',type:'Book','desc':'M.Laxmikant'},
      {icon:'📙',title:'Spectrum Modern India',type:'Book','desc':'Rajiv Ahir'},
    ],
  },
  {
    id:'ssc_cgl',title:'SSC Combined Graduate Level (CGL)',
    short:'SSC CGL',icon:'📋',state:'Central',type:'central',
    category:['central','group'],
    colorBg:'rgba(99,102,241,.15)',colorText:'#818cf8',
    conducting:'Staff Selection Commission',
    posts:'Inspector (IT/CB/CE), Asst Section Officer, Auditor, UDC, DEO, etc.',
    vacancies:'~17,000',
    eligibility:'Graduate (21-32 yrs, varies by post)',
    mode:'CBT (Online)',
    language:'English & Hindi',
    status:'active',
    notification:'Sept 2024',
    applyLast:'Oct 2024',
    tier1:'Jan–March 2025',
    tier2:'June–July 2025',
    result:'Oct 2025',
    admitCardUrl:'https://ssc.nic.in/',
    syllabus:{
      'Tier I — General Intelligence':['Analogy','Series','Coding-Decoding','Directions','Blood Relations','Puzzles'],
      'Tier I — General Awareness':['History','Geography','Polity','Economics','Science','Current Affairs'],
      'Tier I — Quantitative Aptitude':['Number System','Ratio & Proportion','Percentage','Profit-Loss','Geometry','Trigonometry','DI'],
      'Tier I — English':['Reading Comprehension','Error Spotting','Fill in Blanks','One Word Sub','Cloze Test'],
      'Tier II — Mathematical Abilities':['Advanced Maths','Statistics (for JSO)'],
      'Tier II — English Language':['Grammar','Vocabulary','Comprehension'],
    },
    pattern:[
      {stage:'Tier I (Screening)',papers:'4 Sections x 25Q = 100Q',duration:'60 min',marks:'200'},
      {stage:'Tier II (Main)',papers:'Session I (3 hrs) + Session II (2.15 hrs)',duration:'5+ hrs',marks:'690'},
    ],
    cutoffs:[
      {year:'2023',general:'146 (T1)',obc:'138',sc:'130',st:'125',ews:'140'},
      {year:'2022',general:'144',obc:'136',sc:'129',st:'122',ews:'138'},
      {year:'2021',general:'142',obc:'134',sc:'127',st:'120',ews:'136'},
    ],
    materials:[
      {icon:'📖',title:'Kiran SSC CGL Guide',type:'Book','desc':'Complete guide'},
      {icon:'📋',title:'Previous Year Papers',type:'PDF','desc':'2010–2024'},
      {icon:'🎥',title:'SSC Adda YouTube',type:'Free','desc':'Video lectures'},
      {icon:'📘',title:'Rakesh Yadav Maths',type:'Book','desc':'Quantitative'},
    ],
  },
  {
    id:'rrb_ntpc',title:'RRB Non-Technical Popular Categories (NTPC)',
    short:'RRB NTPC',icon:'🚂',state:'Central',type:'central',
    category:['railway','central'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Railway Recruitment Boards (21 RRBs)',
    posts:'Junior Clerk, Accounts Clerk, Junior Time Keeper, Commercial cum Ticket Clerk, Traffic Asst, Goods Guard, Sr Commercial cum Ticket Clerk, Sr Clerk cum Typist, JSA, Sr Time Keeper, Commercial Apprentice, Station Master',
    vacancies:'~11,558',
    eligibility:'10+2 to Graduation (18-33 yrs)',
    mode:'CBT (Online)',
    language:'15 languages',
    status:'active',
    notification:'Sept 2024',
    applyLast:'Oct 2024',
    cbt1:'Feb–April 2025',
    cbt2:'June 2025',
    skill:'July–Aug 2025',
    result:'Dec 2025',
    admitCardUrl:'https://indianrailways.gov.in/',
    syllabus:{
      'Mathematics':['Number System','Decimals','Fractions','LCM & HCF','Ratio & Proportion','Percentage','Mensuration','Time & Work','Time & Distance','SI & CI','Profit & Loss','Elementary Algebra','Geometry','Trigonometry'],
      'General Intelligence':['Analogies','Completion of Number/Alphabetic Series','Coding-Decoding','Directions','Data Sufficiency','Statement Conclusion','Venn Diagrams','Blood Relations'],
      'General Awareness':['Current Events (National & International)','Games & Sports','Art & Culture','Geography','Economics','Politics','Science'],
    },
    pattern:[
      {stage:'CBT Stage 1',papers:'Maths 30Q + GI&R 30Q + GA 40Q = 100Q',duration:'90 min',marks:'100'},
      {stage:'CBT Stage 2',papers:'Maths 35Q + GI&R 35Q + GA 50Q = 120Q',duration:'90 min',marks:'120'},
      {stage:'CBAT / Typing Skill Test',papers:'Aptitude for Station Master; Typing for Clerk posts',duration:'Varies',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2019 Cycle',general:'70 (CBT1)',obc:'65',sc:'62',st:'58',ews:'68'},
      {year:'2016 Cycle',general:'75',obc:'70',sc:'67',st:'62',ews:'N/A'},
    ],
    materials:[
      {icon:'📖',title:'Arihant RRB NTPC Guide',type:'Book','desc':'Complete guide'},
      {icon:'📋',title:'RRB Previous Papers',type:'PDF','desc':'All years'},
      {icon:'🎥',title:'Exampur YouTube',type:'Free','desc':'Free classes'},
    ],
  },
  {
    id:'rrb_groupd',title:'RRB Group D (Level 1)',
    short:'RRB Group D',icon:'🚂',state:'Central',type:'central',
    category:['railway','central','group'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Railway Recruitment Boards',
    posts:'Track Maintainer, Helper (Electrical/Mechanical/Signal & Telecom), Porter, Pointsman, Gateman',
    vacancies:'~32,000',
    eligibility:'10th Pass + ITI or Equivalent (18-33 yrs)',
    mode:'CBT + PET',
    language:'15 languages',
    status:'upcoming',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    exam:'May–June 2025',
    pet:'Aug 2025',
    result:'Nov 2025',
    syllabus:{
      'Mathematics':['Number System','BODMAS','Decimals & Fractions','LCM/HCF','Ratio','Percentage','Mensuration','Time/Work/Distance','SI/CI','Profit/Loss','Geometry','Trigonometry'],
      'General Intelligence & Reasoning':['Analogy','Coding-Decoding','Blood Relations','Series','Puzzles','Non-verbal'],
      'General Science':['Physics (10th level)','Chemistry (10th level)','Life Sciences (10th level)'],
      'General Awareness':['Current Affairs','Sports','Art & Culture','Geography','Polity','Economy'],
    },
    pattern:[
      {stage:'CBT (Online)',papers:'Maths 25Q + GI&R 30Q + GS 25Q + GA 20Q = 100Q',duration:'90 min',marks:'100'},
      {stage:'PET (Physical)',papers:'Male: 35kg carry 100m in 2min; 1000m in 4.15min; Female: 20kg in 2min; 1000m in 5.40min',duration:'As specified',marks:'Qualifying'},
      {stage:'Document Verification',papers:'Medical + Document Check',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2022 Cycle',general:'58',obc:'54',sc:'50',st:'46',ews:'56'},
      {year:'2018 Cycle',general:'55',obc:'50',sc:'48',st:'44',ews:'N/A'},
    ],
    materials:[
      {icon:'📖',title:'RRB Group D Guide',type:'Book','desc':'Arihant / Kiran'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'All CBT papers'},
    ],
  },
  {
    id:'ibps_po',title:'IBPS Probationary Officer (PO)',
    short:'IBPS PO',icon:'🏦',state:'Central',type:'central',
    category:['banking','central'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Institute of Banking Personnel Selection',
    posts:'Probationary Officer / Management Trainee in 11 PSU Banks',
    vacancies:'~4,000',
    eligibility:'Any Graduate (20-30 yrs)',
    mode:'Online CBT + Interview',
    language:'English & Hindi',
    status:'upcoming',
    notification:'June 2025',
    applyLast:'July 2025',
    prelims:'Oct 2025',
    mains:'Nov 2025',
    interview:'Dec 2025–Jan 2026',
    syllabus:{
      'Prelims — English Language':['Reading Comprehension','Cloze Test','Parajumbles','Error Detection','Fill in Blanks'],
      'Prelims — Quantitative Aptitude':['Data Interpretation','Quadratic Equation','Number Series','Simplification','Miscellaneous Arithmetic'],
      'Prelims — Reasoning Ability':['Puzzles & Seating','Syllogism','Inequality','Coding-Decoding','Blood Relations','Input-Output','Direction Sense'],
      'Mains — Reasoning & Computer':['Advanced Reasoning','Computer Awareness','Machine Input'],
      'Mains — English Language':['RC','Grammar','Vocabulary','Essay Writing'],
      'Mains — Data Analysis':['DI (Tables/Charts/Graphs)','Caselet DI','Arithmetic'],
      'Mains — General/Economy/Banking Awareness':['Banking Awareness','Financial Awareness','Current Affairs'],
    },
    pattern:[
      {stage:'Prelims',papers:'English 30Q + Quant 35Q + Reasoning 35Q = 100Q',duration:'20+20+20=60 min',marks:'100'},
      {stage:'Mains',papers:'Reasoning+Computer 45Q + Eng 35Q + DI+Analysis 35Q + GA/Economy 40Q + Essay+Letter',duration:'4 hrs',marks:'200+25'},
      {stage:'Interview',papers:'Personal Interview',duration:'~15 min',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'52.50 (Prelims)',obc:'50.75',sc:'45.25',st:'41.00',ews:'51.00'},
      {year:'2022',general:'51.75',obc:'49.50',sc:'44.00',st:'40.25',ews:'50.25'},
    ],
    materials:[
      {icon:'📖',title:'Oliveboard IBPS PO',type:'App','desc':'Mock tests'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'All IBPS papers'},
      {icon:'📘',title:'Arun Sharma Quant',type:'Book','desc':'Quantitative'},
      {icon:'📙',title:'Plinth to Paramount',type:'Book','desc':'English grammar'},
    ],
  },
  {
    id:'nda',title:'NDA & NA Examination',
    short:'NDA',icon:'⚔️',state:'Central',type:'central',
    category:['defence','central'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Union Public Service Commission',
    posts:'Army, Navy & Air Force — Permanent Commission',
    vacancies:'~400 (NDA I) + 400 (NDA II)',
    eligibility:'12th Pass PCM for Navy/AF; Any stream for Army (16.5–19.5 yrs)',
    mode:'Offline (Written) + SSB',
    language:'English & Hindi',
    status:'active',
    notification:'Dec 2024 (NDA I) / May 2025 (NDA II)',
    applyLast:'Jan 2025 / June 2025',
    written:'April 2025 / Sept 2025',
    ssb:'June–Sept 2025',
    result:'Dec 2025',
    admitCardUrl:'https://upsc.gov.in/',
    syllabus:{
      'Mathematics (300M)':['Algebra','Matrices & Determinants','Trigonometry','Analytical Geometry 2D&3D','Differential Calculus','Integral Calculus','Vector Algebra','Statistics & Probability'],
      'GAT — English (200M)':['Grammar','Vocabulary','Comprehension','Composition'],
      'GAT — General Knowledge (400M)':['Physics','Chemistry','General Science','History','Freedom Movement','Geography','Current Events'],
    },
    pattern:[
      {stage:'Written — Mathematics',papers:'120 Questions',duration:'2.5 hrs',marks:'300'},
      {stage:'Written — GAT',papers:'150 Questions',duration:'2.5 hrs',marks:'600'},
      {stage:'SSB Interview',papers:'Psychological Tests + GTO + Interview + Conference',duration:'5 days',marks:'900'},
    ],
    cutoffs:[
      {year:'2023 NDA II',general:'(Written) 360 / (Final) 699',obc:'—',sc:'—',st:'—',ews:'—'},
      {year:'2022 NDA II',general:'355 / 695',obc:'—',sc:'—',st:'—',ews:'—'},
    ],
    materials:[
      {icon:'📖',title:'Pathfinder NDA/NA',type:'Book','desc':'Arihant'},
      {icon:'📋',title:'Previous 10 Years',type:'PDF','desc':'Solved papers'},
      {icon:'🎥',title:'Study IQ Defence',type:'YouTube','desc':'Free videos'},
    ],
  },

  // ─── ANDHRA PRADESH ───
  {
    id:'ap_group1',title:'APPSC Group I Services',
    short:'APPSC Group 1',icon:'🏛️',state:'Andhra Pradesh',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Deputy Collector, DSP, Commercial Tax Officer, Regional Transport Officer, DVO, AEE (Civil)',
    vacancies:'~120',
    eligibility:'Any Degree (21-42 yrs)',
    mode:'Offline (Written)',
    language:'Telugu & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    prelims:'June 2025',
    mains:'Oct 2025',
    interview:'Dec 2025',
    admitCardUrl:'https://psc.ap.gov.in/',
    syllabus:{
      'Paper I — History & Culture':['AP History','National Movement','Indian Culture','AP Festivals & Arts'],
      'Paper II — Geography & Environment':['AP Geography','Rivers','Forests','Environment & Ecology'],
      'Paper III — Indian Polity & Constitution':['Constitution','Governance','AP Reorganization Act','Panchayati Raj'],
      'Paper IV — Economy':['Indian Economy','AP Economy','Development Programmes','Budget & Fiscal Policy'],
      'Paper V — Science & Technology':['Physics / Chemistry / Bio basics','IT & Computers','Space Technology'],
      'Paper VI — Current Affairs':['State & National Events','Awards','Sports','New Appointments'],
    },
    pattern:[
      {stage:'Preliminary (Screening)',papers:'150Q MCQ — General Studies',duration:'150 min',marks:'150'},
      {stage:'Main Exam',papers:'6 GS Papers + 1 Optional Paper',duration:'3 hrs each',marks:'1800'},
      {stage:'Interview (Viva-Voce)',papers:'Personality Assessment',duration:'—',marks:'75'},
    ],
    cutoffs:[
      {year:'2022–23',general:'Prelims: 85 / Mains: 925',obc:'81 / 890',sc:'77 / 855',st:'73 / 835',ews:'83 / 910'},
      {year:'2020–21',general:'80 / 900',obc:'76 / 870',sc:'72 / 840',st:'68 / 820',ews:'N/A'},
    ],
    materials:[
      {icon:'📖',title:'AP History — Shivaji',type:'Book','desc':'Telugu medium'},
      {icon:'📋',title:'APPSC Previous Papers',type:'PDF','desc':'Group 1 papers'},
      {icon:'🎥',title:'Mana TV / ETV',type:'YouTube','desc':'AP GS content'},
    ],
  },
  {
    id:'ap_police_si',title:'AP Police Sub-Inspector (SI)',
    short:'AP Police SI',icon:'👮',state:'Andhra Pradesh',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'SLPRB Andhra Pradesh',
    posts:'Civil SI, AR SI, SRSP SI, SAR CPL, Fire Station Officer',
    vacancies:'~700–1000',
    eligibility:'Any Degree (21-30 yrs)',
    mode:'Written + Physical + Oral',
    language:'Telugu & English',
    status:'active',
    notification:'Nov 2024',
    applyLast:'Dec 2024',
    written:'March 2025',
    physical:'May 2025',
    oral:'July 2025',
    syllabus:{
      'Paper I — Telugu':['Grammar','Essay','Letter Writing','Comprehension'],
      'Paper II — English':['Grammar','Comprehension','Composition'],
      'Paper III — General Studies':['Polity','History','Geography','Economy','Science','Current Affairs'],
      'Paper IV — Arithmetic & Test of Reasoning':['Number System','Algebra','Trigonometry','Geometry','Data Interpretation','Logical Reasoning'],
      'Physical Test':['100m Sprint','800m Run','Long Jump','High Jump','Shotput'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (Telugu 100M) + Paper II (English 100M) + Paper III (GS 100M) + Paper IV (Maths/Reasoning 100M)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Measurement',papers:'Height & Chest standards',duration:'—',marks:'Qualifying'},
      {stage:'Physical Efficiency Test',papers:'Run, Jump, Shotput events',duration:'—',marks:'50'},
      {stage:'Oral Test',papers:'Personality Assessment',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'310 (Written+PET+Oral)',obc:'295',sc:'280',st:'268',ews:'305'},
      {year:'2019',general:'305',obc:'290',sc:'275',st:'262',ews:'N/A'},
    ],
    materials:[
      {icon:'📖',title:'AP Police SI Guide',type:'Book','desc':'Sakshi / Eenadu'},
      {icon:'📋',title:'SLPRB Previous Papers',type:'PDF','desc':'2015–2023'},
    ],
  },
  {
    id:'ap_tet',title:'AP TET (Teacher Eligibility Test)',
    short:'AP TET',icon:'📚',state:'Andhra Pradesh',type:'state',
    category:['teacher','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'APSCERT / School Education Dept, AP',
    posts:'School Assistant (SA), Secondary Grade Teacher (SGT), Language Pandit, Physical Education Teacher',
    vacancies:'Eligibility Certificate (No fixed vacancies)',
    eligibility:'D.Ed / B.Ed / DEECET qualified',
    mode:'OMR / Online',
    language:'Telugu, English, Urdu',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    exam:'June–July 2025',
    result:'Aug 2025',
    syllabus:{
      'Paper I (SGT — Classes 1–5)':['Child Development & Pedagogy','Language I (Telugu/Urdu)','Language II (English)','Mathematics — Content & Pedagogy','Environmental Studies — Content & Pedagogy'],
      'Paper II (SA — Classes 6–8)':['Child Development & Pedagogy','Language I (Telugu/Urdu)','Language II (English)','Mathematics & Science OR Social Studies'],
      'Child Development & Pedagogy':['Child Development Concepts','Learning & Pedagogy','Inclusive Education','Special Needs Children'],
    },
    pattern:[
      {stage:'Paper I',papers:'150Q MCQ (30 each section)',duration:'150 min',marks:'150'},
      {stage:'Paper II',papers:'150Q MCQ (30 each section)',duration:'150 min',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'90 / 150 (60%)',obc:'82',sc:'79',st:'75',ews:'87'},
      {year:'2022',general:'90',obc:'82',sc:'79',st:'75',ews:'87'},
    ],
    materials:[
      {icon:'📖',title:'AP TET Complete Guide',type:'Book','desc':'Sura Books'},
      {icon:'📋',title:'AP TET Previous Papers',type:'PDF','desc':'2012–2023'},
    ],
  },
  {
    id:'ap_engineering',title:'APPSC AE (Assistant Engineer)',
    short:'APPSC AE',icon:'⚙️',state:'Andhra Pradesh',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~200',
    eligibility:'BE/B.Tech (21-42 yrs)',
    mode:'Written + Interview',
    language:'English & Telugu',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies & Mental Ability','Current Affairs','General Science'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'180',obc:'170',sc:'160',st:'150',ews:'175'},
    ],
    materials:[
      {icon:'📖',title:'APPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'ap_medical',title:'APPSC Medical Officer',
    short:'APPSC MO',icon:'🏥',state:'Andhra Pradesh',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~150',
    eligibility:'MBBS/BDS (22-45 yrs)',
    mode:'Written + Interview',
    language:'English & Telugu',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'250',obc:'240',sc:'230',st:'220',ews:'245'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'ap_revenue',title:'APPSC Deputy Tahsildar',
    short:'APPSC Deputy Tahsildar',icon:'📊',state:'Andhra Pradesh',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Deputy Tahsildar, Junior Assistant',
    vacancies:'~100',
    eligibility:'Any Degree (18-42 yrs)',
    mode:'Written + Interview',
    language:'Telugu & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'160',obc:'150',sc:'140',st:'130',ews:'155'},
    ],
    materials:[
      {icon:'📖',title:'Deputy Tahsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'ap_judicial',title:'APPSC Junior Civil Judge',
    short:'APPSC JCJ',icon:'⚖️',state:'Andhra Pradesh',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Junior Civil Judge, Judicial Magistrate',
    vacancies:'~50',
    eligibility:'LLB Degree (22-35 yrs)',
    mode:'Written + Interview',
    language:'English & Telugu',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'200',obc:'190',sc:'180',st:'170',ews:'195'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'ap_agriculture',title:'APPSC Agriculture Officer',
    short:'APPSC AO',icon:'🌾',state:'Andhra Pradesh',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Agriculture Officer, Assistant Agriculture Officer',
    vacancies:'~80',
    eligibility:'B.Sc Agriculture (21-40 yrs)',
    mode:'Written + Interview',
    language:'English & Telugu',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'170',obc:'160',sc:'150',st:'140',ews:'165'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'ap_forest',title:'APPSC Forest Range Officer',
    short:'APPSC FRO',icon:'🌲',state:'Andhra Pradesh',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Andhra Pradesh Public Service Commission',
    posts:'Forest Range Officer, Forest Beat Officer',
    vacancies:'~60',
    eligibility:'B.Sc Forestry/Bachelor Degree (21-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'English & Telugu',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'180',obc:'170',sc:'160',st:'150',ews:'175'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── TELANGANA ───
  {
    id:'ts_group1',title:'TSPSC Group I Services',
    short:'TSPSC Group 1',icon:'🏛️',state:'Telangana',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Telangana State Public Service Commission',
    posts:'Deputy Collector, DSP, Commercial Tax Officer, DTO, AEE, DVO',
    vacancies:'~503',
    eligibility:'Any Degree (18-44 yrs)',
    mode:'Written + Interview',
    language:'Telugu, English, Urdu',
    status:'active',
    notification:'Oct 2022 (cycle 2022–23)',
    applyLast:'Nov 2022',
    prelims:'June 2023',
    mains:'Dec 2023 – Jan 2024',
    interview:'May 2025',
    syllabus:{
      'Paper I — History':['Telangana History','National Movement','Indian & Telangana Culture'],
      'Paper II — Geography':['Telangana Geography','India Geography','Rivers & Forests'],
      'Paper III — Indian Polity':['Constitution','Telangana Formation','Governance'],
      'Paper IV — Economy':['Indian Economy','Telangana Economy','Welfare Schemes'],
      'Paper V — Science & Technology':['Science Basics','IT & Space','Biotech'],
      'Paper VI — Current Affairs':['TS State Events','National News','Sports & Culture'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'150 min',marks:'150'},
      {stage:'Main Exam',papers:'6 Papers x 150M = 900M',duration:'3 hrs each',marks:'900'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'75'},
    ],
    cutoffs:[
      {year:'2022–23 Prelims',general:'98',obc:'90',sc:'84',st:'79',ews:'95'},
      {year:'2019',general:'94',obc:'86',sc:'80',st:'75',ews:'N/A'},
    ],
    materials:[
      {icon:'📖',title:'TS History — Prabhas',type:'Book','desc':'Telangana specific'},
      {icon:'📋',title:'TSPSC Previous Papers',type:'PDF','desc':'Group 1 papers'},
    ],
  },
  {
    id:'ts_police_si',title:'Telangana Police SI (SCT)',
    short:'TS Police SI',icon:'👮',state:'Telangana',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'TSLPRB — Telangana',
    posts:'SCT SI (Civil), SCT SI (AR), SCT SI (TSSP)',
    vacancies:'~700',
    eligibility:'Any Degree (18-25 yrs — direct; up to 30 for excused categories)',
    mode:'Written + Physical + Oral',
    language:'Telugu, English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Preliminary Written Test':['Mental Ability','Reasoning','English','Basic Math (10th level)'],
      'Final Written Test (FWT)':['Telugu or Urdu','English','Arithmetic & Test of Reasoning','General Studies'],
      'Physical Efficiency Test (PET)':['100m Sprint','800m Run','High Jump','Long Jump'],
    },
    pattern:[
      {stage:'Preliminary Written Test',papers:'100 MCQ — Mixed',duration:'90 min',marks:'100'},
      {stage:'Physical Measurement Test',papers:'Height/Chest/Weight',duration:'—',marks:'Qualifying'},
      {stage:'Physical Efficiency Test',papers:'4 events',duration:'—',marks:'40'},
      {stage:'Final Written Test',papers:'Paper I–IV (100M each)',duration:'2 hrs each',marks:'400'},
      {stage:'Oral Test',papers:'Personality Assessment',duration:'—',marks:'40'},
    ],
    cutoffs:[
      {year:'2023 (Final)',general:'340',obc:'320',sc:'305',st:'295',ews:'335'},
    ],
    materials:[
      {icon:'📖',title:'TS Police SI Guide',type:'Book','desc':'Sakshi Publications'},
      {icon:'📋',title:'TSLPRB Previous Papers',type:'PDF','desc':'2018–2023'},
    ],
  },
  {
    id:'ts_tet',title:'TS TET (Telangana Teacher Eligibility Test)',
    short:'TS TET',icon:'📚',state:'Telangana',type:'state',
    category:['teacher','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'TSCERT / TS School Education Dept',
    posts:'SGT, SA (Language/Maths/Science/Social), Language Pandit, PET',
    vacancies:'Eligibility Certificate',
    eligibility:'D.Ed / B.Ed',
    mode:'OMR',
    language:'Telugu, English, Urdu',
    status:'upcoming',
    notification:'May 2025',
    applyLast:'June 2025',
    exam:'Aug 2025',
    syllabus:{
      'Paper I':['Child Development (30Q)','Language I: Telugu (30Q)','Language II: English (30Q)','Mathematics (30Q)','Environmental Studies (30Q)'],
      'Paper II':['Child Development (30Q)','Language I: Telugu (30Q)','Language II: English (30Q)','Maths & Science OR Social (60Q)'],
    },
    pattern:[
      {stage:'Paper I (SGT)',papers:'150 MCQ',duration:'150 min',marks:'150'},
      {stage:'Paper II (SA)',papers:'150 MCQ',duration:'150 min',marks:'150'},
    ],
    cutoffs:[
      {year:'2022',general:'90/150 (60%)',obc:'82',sc:'75',st:'70',ews:'87'},
    ],
    materials:[
      {icon:'📖',title:'TS TET Guide',type:'Book','desc':'Neetu Singh'},
      {icon:'📋',title:'TS TET Previous Papers',type:'PDF','desc':'2014–2022'},
    ],
  },
  {
    id:'ts_engineering',title:'TSPSC AE (Assistant Engineer)',
    short:'TSPSC AE',icon:'⚙️',state:'Telangana',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Telangana State Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~150',
    eligibility:'BE/B.Tech (21-44 yrs)',
    mode:'Written + Interview',
    language:'English, Telugu, Urdu',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies & Mental Ability','Current Affairs','General Science'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'175',obc:'165',sc:'155',st:'145',ews:'170'},
    ],
    materials:[
      {icon:'📖',title:'TSPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'ts_medical',title:'TSPSC Medical Officer',
    short:'TSPSC MO',icon:'🏥',state:'Telangana',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Telangana State Public Service Commission',
    posts:'Medical Officer, Civil Assistant Surgeon',
    vacancies:'~120',
    eligibility:'MBBS Degree (22-44 yrs)',
    mode:'Written + Interview',
    language:'English, Telugu, Urdu',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'245',obc:'235',sc:'225',st:'215',ews:'240'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'ts_revenue',title:'TSPSC Deputy Tahsildar',
    short:'TSPSC Deputy Tahsildar',icon:'📊',state:'Telangana',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Telangana State Public Service Commission',
    posts:'Deputy Tahsildar, Junior Assistant',
    vacancies:'~80',
    eligibility:'Any Degree (18-44 yrs)',
    mode:'Written + Interview',
    language:'Telugu, Urdu, English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'155',obc:'145',sc:'135',st:'125',ews:'150'},
    ],
    materials:[
      {icon:'📖',title:'Deputy Tahsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'ts_judicial',title:'TSPSC Junior Civil Judge',
    short:'TSPSC JCJ',icon:'⚖️',state:'Telangana',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Telangana State Public Service Commission',
    posts:'Junior Civil Judge, Judicial Magistrate',
    vacancies:'~40',
    eligibility:'LLB Degree (22-34 yrs)',
    mode:'Written + Interview',
    language:'English, Telugu, Urdu',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'195',obc:'185',sc:'175',st:'165',ews:'190'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'ts_agriculture',title:'TSPSC Agriculture Officer',
    short:'TSPSC AO',icon:'🌾',state:'Telangana',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Telangana State Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~60',
    eligibility:'B.Sc Agriculture (21-44 yrs)',
    mode:'Written + Interview',
    language:'English, Telugu, Urdu',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'165',obc:'155',sc:'145',st:'135',ews:'160'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'ts_forest',title:'TSPSC Forest Range Officer',
    short:'TSPSC FRO',icon:'🌲',state:'Telangana',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Telangana State Public Service Commission',
    posts:'Forest Range Officer, Forest Beat Officer',
    vacancies:'~50',
    eligibility:'B.Sc Forestry/Bachelor Degree (21-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'English, Telugu, Urdu',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (150Q) + Paper II (150Q)',duration:'2.5 hrs each',marks:'300'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'175',obc:'165',sc:'155',st:'145',ews:'170'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── UTTAR PRADESH ───
  {
    id:'up_pcs',title:'UPPSC — UP PCS (Provincial Civil Services)',
    short:'UPPSC PCS',icon:'🏛️',state:'Uttar Pradesh',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Uttar Pradesh Public Service Commission',
    posts:'SDM, DSP, BDCO, Asst Commissioner Commercial Tax, Dy Jailor, Block Development Officer',
    vacancies:'~400',
    eligibility:'Any Degree (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    prelims:'May 2025',
    mains:'Sept 2025',
    interview:'Jan 2026',
    syllabus:{
      'Prelims — GS I':['Indian History','National Movement','World Geography','Indian Polity','Economy','Science','Current Affairs','Environment'],
      'Prelims — CSAT':['Reading Comprehension','Communication Skills','Logical Reasoning','Analytical Ability','Decision Making','Basic Numeracy (Qualifying)'],
      'Mains GS I':['Indian History','UP History','Indian Culture'],
      'Mains GS II':['Indian Constitution & Polity','Social Justice'],
      'Mains GS III':['Economic Development','Technology','Disaster Management'],
      'Mains GS IV':['Ethics & Aptitude'],
    },
    pattern:[
      {stage:'Prelims',papers:'GS I 150Q 200M + CSAT 100Q 200M (Qualifying)',duration:'2 hrs each',marks:'200'},
      {stage:'Mains',papers:'GS I+II+III+IV (200M each) + Optional (2 papers 200M each) + Essay 150M + Hindi 150M (Qualifying)',duration:'3 hrs each',marks:'1500'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 96 / Final: 818',obc:'91 / 792',sc:'86 / 775',st:'82 / 760',ews:'93 / 800'},
    ],
    materials:[
      {icon:'📖',title:'UP GK — Lucent',type:'Book','desc':'UP specific'},
      {icon:'📋',title:'UPPSC Previous Papers',type:'PDF','desc':'PCS papers'},
    ],
  },
  {
    id:'up_police',title:'UP Police Constable',
    short:'UP Police Constable',icon:'👮',state:'Uttar Pradesh',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'UP Police Recruitment & Promotion Board (UPPRPB)',
    posts:'Constable (Civil Police, PAC, FIRE)',
    vacancies:'~60,244',
    eligibility:'12th Pass (18-22 yrs)',
    mode:'Written + Physical',
    language:'Hindi',
    status:'active',
    notification:'Dec 2023',
    applyLast:'Feb 2024',
    written:'June–July 2024',
    physical:'Oct 2024',
    result:'Dec 2024',
    syllabus:{
      'General Hindi':['Grammar','Comprehension','Idioms','Synonyms/Antonyms'],
      'General Knowledge':['Polity','History','Geography','Economy','Science','UP State GK'],
      'Numerical Ability':['Number System','Simplification','DI','Mensuration'],
      'Mental Aptitude / IQ / Reasoning':['Series','Directions','Coding','Blood Relations','Analogies'],
    },
    pattern:[
      {stage:'Written Exam',papers:'150Q MCQ (Hindi 37.5M + GK 37.5M + Num Ability 37.5M + Reasoning 37.5M)',duration:'120 min',marks:'300'},
      {stage:'Physical Standard Test',papers:'Height/Weight/Chest Measurement',duration:'—',marks:'Qualifying'},
      {stage:'Physical Efficiency Test',papers:'Male: 4.8km/25min; Female: 2.4km/14min',duration:'—',marks:'Qualifying'},
      {stage:'Medical Examination',papers:'Medical fitness',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2024 (Written)',general:'220',obc:'210',sc:'200',st:'192',ews:'215'},
      {year:'2019',general:'275',obc:'260',sc:'245',st:'232',ews:'N/A'},
    ],
    materials:[
      {icon:'📖',title:'UP Police Constable Guide',type:'Book','desc':'Arihant / Kiran'},
      {icon:'📋',title:'UPPRPB Previous Papers',type:'PDF','desc':'2014–2024'},
    ],
  },

  // ─── MAHARASHTRA ───
  {
    id:'mh_psc',title:'MPSC State Service Examination',
    short:'MPSC State Service',icon:'🏛️',state:'Maharashtra',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Maharashtra Public Service Commission',
    posts:'Deputy Collector, Deputy SP, Tax Assistant Commissioner, Sales Tax Inspector, State Tax Inspector',
    vacancies:'~400',
    eligibility:'Any Degree (19-38 yrs)',
    mode:'Written + Interview',
    language:'Marathi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    syllabus:{
      'Prelims — GS':['History (Maharashtra & India)','Geography (Maharashtra & India)','Polity','Economy','Science','Current Affairs'],
      'Prelims — CSAT':['Reading Comprehension','Logical Reasoning','Quantitative Aptitude (Qualifying)'],
      'Mains Paper I':['Marathi & English Language'],
      'Mains Paper II':['History & Heritage of India & Maharashtra'],
      'Mains Paper III':['Geography & Disaster Management'],
      'Mains Paper IV':['Indian Constitution, Polity & Law'],
      'Mains Paper V':['Economic Development','Agriculture','Science & Tech'],
      'Mains Paper VI':['Ethics, Integrity & Aptitude'],
    },
    pattern:[
      {stage:'Prelims',papers:'GS 100Q 200M + CSAT 80Q 200M (Qualifying)',duration:'2 hrs each',marks:'200'},
      {stage:'Mains',papers:'6 GS Papers + Marathi/English',duration:'3 hrs each',marks:'1300'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 102 / Final: 780',obc:'95 / 754',sc:'89 / 730',st:'84 / 715',ews:'99 / 765'},
    ],
    materials:[
      {icon:'📖',title:'Marathi Rajyaseva Guide',type:'Book','desc':'Unique Publications'},
      {icon:'📋',title:'MPSC Previous Papers',type:'PDF','desc':'State Service papers'},
    ],
  },
  {
    id:'mh_police',title:'Maharashtra Police Constable',
    short:'MH Police Constable',icon:'👮',state:'Maharashtra',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Maharashtra Police Recruitment Board',
    posts:'Police Constable (Armed & Unarmed)',
    vacancies:'~17,000',
    eligibility:'12th Pass (18-28 yrs)',
    mode:'Written + Physical',
    language:'Marathi & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    exam:'May–June 2025',
    syllabus:{
      'Marathi':['Grammar','Comprehension'],
      'English':['Grammar','Basic Vocabulary'],
      'General Knowledge':['Maharashtra GK','India GK','Current Affairs'],
      'Arithmetic':['Basic Maths 10th level'],
    },
    pattern:[
      {stage:'Written Exam',papers:'100Q MCQ',duration:'90 min',marks:'100'},
      {stage:'Physical Test',papers:'Run + Physical Measurement',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'68',obc:'63',sc:'58',st:'54',ews:'66'},
    ],
    materials:[
      {icon:'📖',title:'MH Police Constable Guide',type:'Book','desc':'Marathi Medium'},
    ],
  },
  {
    id:'mh_engineering',title:'MPSC AE (Assistant Engineer)',
    short:'MPSC AE',icon:'⚙️',state:'Maharashtra',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Maharashtra Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~200',
    eligibility:'BE/B.Tech (19-38 yrs)',
    mode:'Written + Interview',
    language:'English & Marathi',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies & Mental Ability','Current Affairs','General Science'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'110',sc:'100',st:'90',ews:'115'},
    ],
    materials:[
      {icon:'📖',title:'MPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'mh_medical',title:'MPSC Medical Officer',
    short:'MPSC MO',icon:'🏥',state:'Maharashtra',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Maharashtra Public Service Commission',
    posts:'Medical Officer, Civil Surgeon',
    vacancies:'~150',
    eligibility:'MBBS Degree (22-45 yrs)',
    mode:'Written + Interview',
    language:'English & Marathi',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'240',obc:'230',sc:'220',st:'210',ews:'235'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'mh_revenue',title:'MPSC Deputy Collector',
    short:'MPSC Deputy Collector',icon:'📊',state:'Maharashtra',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Maharashtra Public Service Commission',
    posts:'Deputy Collector, Tahsildar',
    vacancies:'~100',
    eligibility:'Any Degree (19-38 yrs)',
    mode:'Written + Interview',
    language:'Marathi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Marathi','English','Arithmetic','Reasoning'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Deputy Collector Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'mh_judicial',title:'MPSC Civil Judge Junior Division',
    short:'MPSC CJJD',icon:'⚖️',state:'Maharashtra',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Maharashtra Public Service Commission',
    posts:'Civil Judge Junior Division, Judicial Magistrate',
    vacancies:'~60',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'English & Marathi',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'190',obc:'180',sc:'170',st:'160',ews:'185'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'mh_agriculture',title:'MPSC Agriculture Officer',
    short:'MPSC AO',icon:'🌾',state:'Maharashtra',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Maharashtra Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~80',
    eligibility:'B.Sc Agriculture (19-38 yrs)',
    mode:'Written + Interview',
    language:'English & Marathi',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'mh_forest',title:'MPSC Forest Service Officer',
    short:'MPSC FSO',icon:'🌲',state:'Maharashtra',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Maharashtra Public Service Commission',
    posts:'Forest Service Officer, Range Forest Officer',
    vacancies:'~70',
    eligibility:'B.Sc Forestry/Bachelor Degree (19-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'English & Marathi',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── RAJASTHAN ───
  {
    id:'rpsc_ras',title:'RPSC — RAS/RTS (Rajasthan Administrative Service)',
    short:'RPSC RAS',icon:'🏛️',state:'Rajasthan',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Rajasthan Public Service Commission',
    posts:'RAS Officer, Sub-Divisional Magistrate, Block Development Officer, Deputy SP, Tax Officer',
    vacancies:'~900',
    eligibility:'Any Degree (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    prelims:'May 2025',
    mains:'Sept 2025',
    syllabus:{
      'Prelims GS':['History (India & Rajasthan)','Art & Culture','Geography','Economy','Polity','Science','Current Affairs','Environment & Ecology','Rajasthan GK'],
      'Mains Paper I':['History & Culture of Rajasthan','India & World History'],
      'Mains Paper II':['Indian Constitution, Polity, Social Justice & International Relations'],
      'Mains Paper III':['Economy & Agriculture'],
      'Mains Paper IV':['General Science & Technology'],
      'Mains Paper V':['General Hindi & English'],
    },
    pattern:[
      {stage:'Prelims',papers:'200Q 200M',duration:'3 hrs',marks:'200'},
      {stage:'Mains',papers:'Paper I–IV (200M each) + Gn Hindi 200M + Gn English 100M (Qualifying)',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 105 / Final: 625',obc:'99 / 602',sc:'93 / 585',st:'88 / 572',ews:'102 / 615'},
    ],
    materials:[
      {icon:'📖',title:'Rajasthan GK — Kiran',type:'Book','desc':'Rajasthan specific'},
      {icon:'📋',title:'RPSC Previous Papers',type:'PDF','desc':'RAS papers'},
    ],
  },
  {
    id:'raj_police',title:'Rajasthan Police Constable',
    short:'Raj Police Constable',icon:'👮',state:'Rajasthan',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Rajasthan Police',
    posts:'Police Constable (General & Telecommunication)',
    vacancies:'~4,588',
    eligibility:'10+2 (18-23 yrs)',
    mode:'Written + Physical',
    language:'Hindi',
    status:'active',
    notification:'Nov 2024',
    applyLast:'Dec 2024',
    exam:'March–April 2025',
    syllabus:{
      'Reasoning & Computer':['Logical Reasoning','Computer Basics'],
      'General Knowledge':['Rajasthan GK','India GK','Current Affairs'],
      'Hindi':['Grammar','Comprehension'],
      'Science & Maths':['10th level Science','Basic Maths'],
    },
    pattern:[
      {stage:'Written Exam',papers:'150Q MCQ',duration:'120 min',marks:'150'},
      {stage:'Physical Test',papers:'5km Run (Male) / 2.5km (Female) + Measurements',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2022',general:'76',obc:'70',sc:'66',st:'61',ews:'74'},
    ],
    materials:[
      {icon:'📖',title:'Raj Police Constable Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },
  {
    id:'rj_engineering',title:'RPSC AE (Assistant Engineer)',
    short:'RPSC AE',icon:'⚙️',state:'Rajasthan',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Rajasthan Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~150',
    eligibility:'BE/B.Tech (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies & Mental Ability','Current Affairs','General Science'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'115',obc:'105',sc:'95',st:'85',ews:'110'},
    ],
    materials:[
      {icon:'📖',title:'RPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'rj_medical',title:'RPSC Medical Officer',
    short:'RPSC MO',icon:'🏥',state:'Rajasthan',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Rajasthan Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~120',
    eligibility:'MBBS/BDS (22-45 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'235',obc:'225',sc:'215',st:'205',ews:'230'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'rj_revenue',title:'RPSC Tehsildar',
    short:'RPSC Tehsildar',icon:'📊',state:'Rajasthan',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Rajasthan Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~80',
    eligibility:'Any Degree (18-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'rj_judicial',title:'RPSC Civil Judge',
    short:'RPSC CJ',icon:'⚖️',state:'Rajasthan',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Rajasthan Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~50',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'185',obc:'175',sc:'165',st:'155',ews:'180'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'rj_agriculture',title:'RPSC Agriculture Officer',
    short:'RPSC AO',icon:'🌾',state:'Rajasthan',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Rajasthan Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~60',
    eligibility:'B.Sc Agriculture (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'135',obc:'125',sc:'115',st:'105',ews:'130'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'rj_forest',title:'RPSC Forest Range Officer',
    short:'RPSC FRO',icon:'🌲',state:'Rajasthan',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Rajasthan Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~70',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── TAMIL NADU ───
  {
    id:'tnpsc_group1',title:'TNPSC Group I (Combined Civil Services I)',
    short:'TNPSC Group 1',icon:'🏛️',state:'Tamil Nadu',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Deputy Collector, Deputy SP, DCTO, AEE, Block Development Officer',
    vacancies:'~69',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'active',
    notification:'Oct 2024',
    applyLast:'Nov 2024',
    prelims:'March 2025',
    mains:'July 2025',
    interview:'Oct 2025',
    syllabus:{
      'Prelims (General Studies)':['General Science','Current Events','Geography','History','Polity & Economy','Aptitude & Mental Ability Tests'],
      'Mains Paper I':['General Essay'],
      'Mains Paper II':['General Studies (Indian Economy, Planning, Polity, History, Geography)'],
      'Mains Paper III':['General Studies (Social Issues, Environment, Science & Technology)'],
      'Mains Paper IV':['Language (Tamil or English)'],
    },
    pattern:[
      {stage:'Prelims',papers:'200Q 300M (GS + Aptitude combined)',duration:'3 hrs',marks:'300'},
      {stage:'Mains',papers:'Paper I: Essay 250M + Paper II: GS 250M + Paper III: GS 250M + Paper IV: Language 100M',duration:'3 hrs each',marks:'850'},
      {stage:'Interview',papers:'Personality Assessment',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2022',general:'Prelims: 155 / Final: 645',obc:'148 / 620',sc:'140 / 600',st:'132 / 585',ews:'152 / 632'},
    ],
    materials:[
      {icon:'📖',title:'TNPSC Group I Guide',type:'Book','desc':'Sura / Suras Books'},
      {icon:'📋',title:'TNPSC Previous Papers',type:'PDF','desc':'2010–2024'},
    ],
  },
  {
    id:'tn_police_pc',title:'Tamil Nadu Police Constable (SLPC)',
    short:'TN Police Constable',icon:'👮',state:'Tamil Nadu',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Tamil Nadu Uniformed Services Recruitment Board (MRB/TNUSRB)',
    posts:'Grade II Police Constable (Armed Reserve)',
    vacancies:'~6,000+',
    eligibility:'10+2 (18-25 yrs)',
    mode:'Written + Physical',
    language:'Tamil',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    exam:'July 2025',
    syllabus:{
      'Written Test':['General Knowledge & Current Events','General Tamil / General English','Aptitude & Mental Ability','General Science'],
      'Physical Standards Test':['Height, Weight, Chest Measurement'],
      'Physical Endurance Test':['1500m Run','Rope Climbing','High Jump','Long Jump','Shot Put'],
    },
    pattern:[
      {stage:'Written Exam',papers:'100Q 100M',duration:'90 min',marks:'100'},
      {stage:'Physical Standards Test',papers:'Measurement',duration:'—',marks:'Qualifying'},
      {stage:'Physical Endurance Test',papers:'5 events',duration:'—',marks:'Qualifying / Graded'},
    ],
    cutoffs:[
      {year:'2023',general:'63',obc:'58',sc:'54',st:'50',ews:'61'},
    ],
    materials:[
      {icon:'📖',title:'TN Police PC Guide',type:'Book','desc':'Tamil Medium'},
    ],
  },
  {
    id:'tn_tet',title:'TN TET (Tamil Nadu Teacher Eligibility Test)',
    short:'TN TET',icon:'📚',state:'Tamil Nadu',type:'state',
    category:['teacher','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'TNTET — Teacher Recruitment Board (TRB)',
    posts:'Primary Teacher (Paper I), Graduate Teacher / B.T. Asst (Paper II)',
    vacancies:'Eligibility Certificate',
    eligibility:'D.Ed (Paper I) / B.Ed (Paper II)',
    mode:'OMR / Online',
    language:'Tamil & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    exam:'June 2025',
    syllabus:{
      'Paper I':['Child Development & Pedagogy (30Q)','Language I — Tamil (30Q)','Language II — English (30Q)','Mathematics (30Q)','Environmental Studies (30Q)'],
      'Paper II':['Child Development & Pedagogy (30Q)','Language I — Tamil (30Q)','Language II — English (30Q)','Subject-specific: Maths-Science OR Social Science (60Q)'],
    },
    pattern:[
      {stage:'Paper I',papers:'150 MCQ',duration:'150 min',marks:'150'},
      {stage:'Paper II',papers:'150 MCQ',duration:'150 min',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'90 (60%)',obc:'82',sc:'75',st:'75',ews:'87'},
    ],
    materials:[
      {icon:'📖',title:'TN TET Guide',type:'Book','desc':'Sura Books Tamil'},
    ],
  },
  {
    id:'tn_engineering',title:'TNPSC AE (Assistant Engineer)',
    short:'TNPSC AE',icon:'⚙️',state:'Tamil Nadu',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~200',
    eligibility:'BE/B.Tech (21-37 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'TNPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'tn_medical',title:'TNPSC Medical Officer',
    short:'TNPSC MO',icon:'🏥',state:'Tamil Nadu',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~150',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'245',obc:'235',sc:'225',st:'215',ews:'240'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'tn_revenue',title:'TNPSC Tehsildar',
    short:'TNPSC Tehsildar',icon:'📊',state:'Tamil Nadu',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~100',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'135',obc:'125',sc:'115',st:'105',ews:'130'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'tn_judicial',title:'TNPSC Civil Judge',
    short:'TNPSC CJ',icon:'⚖️',state:'Tamil Nadu',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~60',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'195',obc:'185',sc:'175',st:'165',ews:'190'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'tn_agriculture',title:'TNPSC Agriculture Officer',
    short:'TNPSC AO',icon:'🌾',state:'Tamil Nadu',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~80',
    eligibility:'B.Sc Agriculture (21-37 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'145',obc:'135',sc:'125',st:'115',ews:'140'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'tn_forest',title:'TNPSC Forest Range Officer',
    short:'TNPSC FRO',icon:'🌲',state:'Tamil Nadu',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~90',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Tamil & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'135',obc:'125',sc:'115',st:'105',ews:'130'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── KARNATAKA ───
  {
    id:'kpsc_kas',title:'KPSC — KAS (Karnataka Administrative Service)',
    short:'KPSC KAS',icon:'🏛️',state:'Karnataka',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Karnataka Public Service Commission',
    posts:'Gazetted Probationers: Group A & B — Tahsildar, PDO, AEE, Asst Director, Inspector',
    vacancies:'~400',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    prelims:'June 2025',
    mains:'Oct 2025',
    syllabus:{
      'Prelims':['Kannada','English','General Studies','General Mental Ability'],
      'Mains GS I':['History of India & Karnataka','Geography of India & Karnataka'],
      'Mains GS II':['Indian Constitution','Polity','Social Justice'],
      'Mains GS III':['Economy','Technology','Environment'],
      'Mains GS IV':['Ethics & Integrity'],
      'Mains — Kannada & English':['Language Papers'],
    },
    pattern:[
      {stage:'Prelims',papers:'100Q 100M (GS+Kannada+English+Aptitude)',duration:'90 min',marks:'100'},
      {stage:'Mains',papers:'GS I–IV (150M each) + Kannada 150M + English 100M + Optional (Two papers)',duration:'3 hrs each',marks:'~1200'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2022',general:'Prelims: 52 / Final: 635',obc:'47 / 608',sc:'44 / 590',st:'41 / 578',ews:'50 / 625'},
    ],
    materials:[
      {icon:'📖',title:'KAS Guide — Unique Publications',type:'Book','desc':'Kannada Medium'},
      {icon:'📋',title:'KPSC Previous Papers',type:'PDF','desc':'KAS papers'},
    ],
  },
  {
    id:'kar_police',title:'Karnataka Police Constable (PCR)',
    short:'KAR Police Constable',icon:'👮',state:'Karnataka',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Karnataka State Police (Recruitment Cell)',
    posts:'Police Constable (Civil), Armed Reserve Constable, Women Police Constable',
    vacancies:'~4,000',
    eligibility:'SSLC/10th (18-25 yrs)',
    mode:'Written + Physical',
    language:'Kannada',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    exam:'April 2025',
    syllabus:{
      'Written Test':['Kannada Language & General Knowledge','Reasoning & Mental Ability','General Science & Current Affairs'],
      'Physical Standard Test':['Height / Chest Measurement'],
      'Physical Efficiency Test':['1500m Run / 800m Run (Female)','Shot Put','Long Jump'],
    },
    pattern:[
      {stage:'Written Exam',papers:'100Q 100M',duration:'90 min',marks:'100'},
      {stage:'PST + PET',papers:'Physical events',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2021',general:'56',obc:'51',sc:'47',st:'43',ews:'54'},
    ],
    materials:[
      {icon:'📖',title:'KAR Police Constable Guide',type:'Book','desc':'Kannada Medium'},
    ],
  },
  {
    id:'kar_engineering',title:'KPSC AE (Assistant Engineer)',
    short:'KPSC AE',icon:'⚙️',state:'Karnataka',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Karnataka Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~180',
    eligibility:'BE/B.Tech (21-35 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'110',sc:'100',st:'90',ews:'115'},
    ],
    materials:[
      {icon:'📖',title:'KPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'kar_medical',title:'KPSC Medical Officer',
    short:'KPSC MO',icon:'🏥',state:'Karnataka',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Karnataka Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~130',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'240',obc:'230',sc:'220',st:'210',ews:'235'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'kar_revenue',title:'KPSC Tehsildar',
    short:'KPSC Tehsildar',icon:'📊',state:'Karnataka',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Karnataka Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~85',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'kar_judicial',title:'KPSC Civil Judge',
    short:'KPSC CJ',icon:'⚖️',state:'Karnataka',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Karnataka Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~55',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'190',obc:'180',sc:'170',st:'160',ews:'185'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'kar_agriculture',title:'KPSC Agriculture Officer',
    short:'KPSC AO',icon:'🌾',state:'Karnataka',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Karnataka Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~75',
    eligibility:'B.Sc Agriculture (21-35 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'kar_forest',title:'KPSC Forest Range Officer',
    short:'KPSC FRO',icon:'🌲',state:'Karnataka',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Karnataka Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~85',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Kannada & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── KERALA ───
  {
    id:'kerala_psc_deg',title:'Kerala PSC Degree Level Examinations',
    short:'Kerala PSC Degree Level',icon:'🏛️',state:'Kerala',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Kerala Public Service Commission',
    posts:'Civil Excise Officer, Junior Employment Officer, Sub-Inspector of Co-op Societies, Village Field Asst, Lower Division Clerk',
    vacancies:'Varies (multiple notifications per year)',
    eligibility:'Degree (varies by post, 18-36 yrs)',
    mode:'OMR + Online (CBT)',
    language:'Malayalam & English',
    status:'active',
    notification:'Quarterly Notifications',
    applyLast:'Rolling',
    exam:'Scheduled monthly',
    syllabus:{
      'Main Topics':['General Knowledge & Current Affairs','Renaissance of Kerala & Social Movements','Indian Constitution & Polity','Basic Science','Quantitative Aptitude','Mental Ability'],
      'Subject-Specific (by post)':['Each post has tailored syllabus','Usually 70 marks GK + 30 marks Subject-specific or Aptitude'],
    },
    pattern:[
      {stage:'Main Exam (OMR)',papers:'100Q 100M — GK + Aptitude + Subject',duration:'75 min',marks:'100'},
    ],
    cutoffs:[
      {year:'2024 (Civil Excise)',general:'80',obc:'75',sc:'70',st:'65',ews:'78'},
    ],
    materials:[
      {icon:'📖',title:'Kerala PSC Guide — DC Books',type:'Book','desc':'Malayalam Medium'},
      {icon:'📋',title:'KPSC Previous Papers',type:'PDF','desc':'All degree-level'},
    ],
  },
  {
    id:'kerala_engineering',title:'Kerala PSC AE (Assistant Engineer)',
    short:'Kerala PSC AE',icon:'⚙️',state:'Kerala',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Kerala Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~160',
    eligibility:'BE/B.Tech (19-36 yrs)',
    mode:'Written + Interview',
    language:'Malayalam & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'115',obc:'105',sc:'95',st:'85',ews:'110'},
    ],
    materials:[
      {icon:'📖',title:'Kerala PSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'kerala_medical',title:'Kerala PSC Medical Officer',
    short:'Kerala PSC MO',icon:'🏥',state:'Kerala',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Kerala Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~140',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Malayalam & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'235',obc:'225',sc:'215',st:'205',ews:'230'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'kerala_revenue',title:'Kerala PSC Tehsildar',
    short:'Kerala PSC Tehsildar',icon:'📊',state:'Kerala',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Kerala Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~90',
    eligibility:'Any Degree (19-36 yrs)',
    mode:'Written + Interview',
    language:'Malayalam & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'kerala_judicial',title:'Kerala PSC Civil Judge',
    short:'Kerala PSC CJ',icon:'⚖️',state:'Kerala',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Kerala Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~65',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Malayalam & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'185',obc:'175',sc:'165',st:'155',ews:'180'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'kerala_agriculture',title:'Kerala PSC Agriculture Officer',
    short:'Kerala PSC AO',icon:'🌾',state:'Kerala',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Kerala Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~85',
    eligibility:'B.Sc Agriculture (19-36 yrs)',
    mode:'Written + Interview',
    language:'Malayalam & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'135',obc:'125',sc:'115',st:'105',ews:'130'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'kerala_forest',title:'Kerala PSC Forest Range Officer',
    short:'Kerala PSC FRO',icon:'🌲',state:'Kerala',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Kerala Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~95',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Malayalam & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── WEST BENGAL ───
  {
    id:'wbcs',title:'WBCS (West Bengal Civil Service)',
    short:'WBCS',icon:'🏛️',state:'West Bengal',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'West Bengal Public Service Commission (WBPSC)',
    posts:'WBCS (Exe) — Deputy Magistrate, Block Development Officer; Group B: Sub-Inspector of Schools, Inspectors; Group C & D: Clerks',
    vacancies:'~400',
    eligibility:'Any Degree (21-36 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Oct 2025',
    syllabus:{
      'Prelims':['English Composition','General Studies','Arithmetic & Test of Reasoning','General Science'],
      'Mains — Bengali/Hindi/Urdu/Nepali/Santali':['Language Paper'],
      'Mains — English':['Essay, Précis, Drafting'],
      'Mains — GS I':['Indian History, Bengali History, World History'],
      'Mains — GS II':['Geography + Environment'],
      'Mains — GS III':['Indian Polity + Constitutional Development'],
      'Mains — GS IV':['Economy + Science & Technology'],
    },
    pattern:[
      {stage:'Prelims',papers:'200Q 200M',duration:'2.5 hrs',marks:'200'},
      {stage:'Mains',papers:'Language + English + GS I–IV + Optional (Arith or Subject)',duration:'3 hrs each',marks:'1400'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'200'},
    ],
    cutoffs:[
      {year:'2022',general:'Prelims: 105 / Final: 775',obc:'99 / 748',sc:'93 / 726',st:'88 / 710',ews:'102 / 760'},
    ],
    materials:[
      {icon:'📖',title:'WBCS Guide — M.K. Publishers',type:'Book','desc':'Bengali Medium'},
    ],
  },
  {
    id:'wb_engineering',title:'WBPSC AE (Assistant Engineer)',
    short:'WBPSC AE',icon:'⚙️',state:'West Bengal',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'West Bengal Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~220',
    eligibility:'BE/B.Tech (21-36 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'WBPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'wb_medical',title:'WBPSC Medical Officer',
    short:'WBPSC MO',icon:'🏥',state:'West Bengal',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'West Bengal Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~180',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'250',obc:'240',sc:'230',st:'220',ews:'245'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'wb_revenue',title:'WBPSC Tehsildar',
    short:'WBPSC Tehsildar',icon:'📊',state:'West Bengal',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'West Bengal Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~110',
    eligibility:'Any Degree (21-36 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'wb_judicial',title:'WBPSC Civil Judge',
    short:'WBPSC CJ',icon:'⚖️',state:'West Bengal',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'West Bengal Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~75',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'200',obc:'190',sc:'180',st:'170',ews:'195'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'wb_agriculture',title:'WBPSC Agriculture Officer',
    short:'WBPSC AO',icon:'🌾',state:'West Bengal',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'West Bengal Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~95',
    eligibility:'B.Sc Agriculture (21-36 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'150',obc:'140',sc:'130',st:'120',ews:'145'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'wb_forest',title:'WBPSC Forest Range Officer',
    short:'WBPSC FRO',icon:'🌲',state:'West Bengal',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'West Bengal Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~105',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Bengali & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── GUJARAT ───
  {
    id:'gpsc_cse',title:'GPSC (Gujarat Public Service Commission) Class I-II',
    short:'GPSC Class I-II',icon:'🏛️',state:'Gujarat',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Gujarat Public Service Commission',
    posts:'Deputy Collector, Deputy SP, Commercial Tax Officer, City Town Planner, Asst Conservator of Forests',
    vacancies:'~350',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    prelims:'May 2025',
    mains:'Sept 2025',
    syllabus:{
      'Prelims':['History of India & Gujarat','Geography of India & Gujarat','Indian Constitution & Polity','Indian Economy & Gujarat Economy','Science & Technology','Current Affairs','Environment & Ecology','Mental Ability'],
      'Mains':['Language Paper (Gujarati+English)','GS I — History & Geography','GS II — Polity & Governance','GS III — Economy & Environment','GS IV — Ethics','Optional (Two papers)'],
    },
    pattern:[
      {stage:'Prelims',papers:'200Q 200M',duration:'2 hrs',marks:'200'},
      {stage:'Mains',papers:'Language + GS I–IV + Optional',duration:'3 hrs each',marks:'~1400'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2022',general:'Prelims: 112 / Final: 680',obc:'106 / 658',sc:'100 / 638',st:'95 / 622',ews:'110 / 670'},
    ],
    materials:[
      {icon:'📖',title:'GPSC Guide — Vikas Publishers',type:'Book','desc':'Gujarati Medium'},
    ],
  },
  {
    id:'guj_engineering',title:'GPSC AE (Assistant Engineer)',
    short:'GPSC AE',icon:'⚙️',state:'Gujarat',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Gujarat Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~190',
    eligibility:'BE/B.Tech (21-35 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'110',sc:'100',st:'90',ews:'115'},
    ],
    materials:[
      {icon:'📖',title:'GPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'guj_medical',title:'GPSC Medical Officer',
    short:'GPSC MO',icon:'🏥',state:'Gujarat',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Gujarat Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~160',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'240',obc:'230',sc:'220',st:'210',ews:'235'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'guj_revenue',title:'GPSC Tehsildar',
    short:'GPSC Tehsildar',icon:'📊',state:'Gujarat',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Gujarat Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~95',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'guj_judicial',title:'GPSC Civil Judge',
    short:'GPSC CJ',icon:'⚖️',state:'Gujarat',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Gujarat Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~70',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'190',obc:'180',sc:'170',st:'160',ews:'185'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'guj_agriculture',title:'GPSC Agriculture Officer',
    short:'GPSC AO',icon:'🌾',state:'Gujarat',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Gujarat Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~85',
    eligibility:'B.Sc Agriculture (21-35 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'guj_forest',title:'GPSC Forest Range Officer',
    short:'GPSC FRO',icon:'🌲',state:'Gujarat',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Gujarat Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~90',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Gujarati & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── PUNJAB ───
  {
    id:'ppsc',title:'PPSC Punjab Civil Services',
    short:'PPSC',icon:'🏛️',state:'Punjab',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Punjab Public Service Commission',
    posts:'PCS Officers: Block Development & Panchayat Officer, Deputy SP, Excise & Taxation Inspector',
    vacancies:'~300',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Punjabi, Hindi & English',
    status:'upcoming',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    prelims:'April 2025',
    mains:'Aug 2025',
    syllabus:{
      'Prelims':['General Studies','Mental Ability Test','Reasoning','English Comprehension','Punjab Current Affairs','Punjab History & Culture'],
      'Mains':['Punjabi Language','English Language','General Studies I','General Studies II','Essay','Optional Subject'],
    },
    pattern:[
      {stage:'Prelims',papers:'120Q 120M',duration:'2 hrs',marks:'120'},
      {stage:'Mains',papers:'Language + GS I+II + Essay + Optional',duration:'3 hrs each',marks:'1100'},
      {stage:'Interview',papers:'—',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2022',general:'Prelims: 65 / Final: 595',obc:'60 / 572',sc:'55 / 555',st:'51 / 541',ews:'63 / 585'},
    ],
    materials:[
      {icon:'📖',title:'PPSC Guide — Bright Publishers',type:'Book','desc':'Hindi/Punjabi Medium'},
    ],
  },
  {
    id:'punjab_engineering',title:'PPSC AE (Assistant Engineer)',
    short:'PPSC AE',icon:'⚙️',state:'Punjab',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Punjab Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~140',
    eligibility:'BE/B.Tech (21-37 yrs)',
    mode:'Written + Interview',
    language:'Punjabi & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'115',obc:'105',sc:'95',st:'85',ews:'110'},
    ],
    materials:[
      {icon:'📖',title:'PPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'punjab_medical',title:'PPSC Medical Officer',
    short:'PPSC MO',icon:'🏥',state:'Punjab',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Punjab Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~120',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Punjabi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'235',obc:'225',sc:'215',st:'205',ews:'230'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'punjab_revenue',title:'PPSC Tehsildar',
    short:'PPSC Tehsildar',icon:'📊',state:'Punjab',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Punjab Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~80',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Punjabi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'punjab_judicial',title:'PPSC Civil Judge',
    short:'PPSC CJ',icon:'⚖️',state:'Punjab',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Punjab Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~55',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Punjabi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'185',obc:'175',sc:'165',st:'155',ews:'180'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'punjab_agriculture',title:'PPSC Agriculture Officer',
    short:'PPSC AO',icon:'🌾',state:'Punjab',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Punjab Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~70',
    eligibility:'B.Sc Agriculture (21-37 yrs)',
    mode:'Written + Interview',
    language:'Punjabi & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'135',obc:'125',sc:'115',st:'105',ews:'130'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'punjab_forest',title:'PPSC Forest Range Officer',
    short:'PPSC FRO',icon:'🌲',state:'Punjab',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Punjab Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~75',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Punjabi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── JHARKHAND ───
  {
    id:'jpsc',title:'JPSC Civil Services (Jharkhand PSC)',
    short:'JPSC',icon:'🏛️',state:'Jharkhand',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Jharkhand Public Service Commission',
    posts:'Deputy Collector, Deputy SP, Treasury Officer, Block Development Officer',
    vacancies:'~340',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Oct 2024',
    applyLast:'Nov 2024',
    prelims:'Feb 2025',
    mains:'June 2025',
    syllabus:{
      'Prelims':['General Studies','General Science','Jharkhand GK','History','Geography','Economy','Current Affairs'],
      'Mains':['Jharkhand: History, Culture, Society','National/International Importance','Governance & Tribal Movements','Economy & Regional Development','GS Papers I–III','Language Papers','Optional'],
    },
    pattern:[
      {stage:'Prelims',papers:'120Q',duration:'2 hrs',marks:'120'},
      {stage:'Mains',papers:'Language + GS I–III + Optional',duration:'3 hrs each',marks:'~1000'},
      {stage:'Interview',papers:'—',duration:'—',marks:'75'},
    ],
    cutoffs:[
      {year:'2021',general:'Prelims: 59 / Final: 540',obc:'54 / 515',sc:'50 / 498',st:'46 / 485',ews:'57 / 530'},
    ],
    materials:[
      {icon:'📖',title:'Jharkhand GK Guide',type:'Book','desc':'Jharkhand specific'},
    ],
  },
  {
    id:'jharkhand_engineering',title:'JPSC AE (Assistant Engineer)',
    short:'JPSC AE',icon:'⚙️',state:'Jharkhand',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Jharkhand Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~110',
    eligibility:'BE/B.Tech (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'110',obc:'100',sc:'90',st:'80',ews:'105'},
    ],
    materials:[
      {icon:'📖',title:'JPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'jharkhand_medical',title:'JPSC Medical Officer',
    short:'JPSC MO',icon:'🏥',state:'Jharkhand',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Jharkhand Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~95',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'225',obc:'215',sc:'205',st:'195',ews:'220'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'jharkhand_revenue',title:'JPSC Tehsildar',
    short:'JPSC Tehsildar',icon:'📊',state:'Jharkhand',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Jharkhand Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~65',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'110',sc:'100',st:'90',ews:'115'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'jharkhand_judicial',title:'JPSC Civil Judge',
    short:'JPSC CJ',icon:'⚖️',state:'Jharkhand',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Jharkhand Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~45',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'175',obc:'165',sc:'155',st:'145',ews:'170'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'jharkhand_agriculture',title:'JPSC Agriculture Officer',
    short:'JPSC AO',icon:'🌾',state:'Jharkhand',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Jharkhand Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~55',
    eligibility:'B.Sc Agriculture (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'130',obc:'120',sc:'110',st:'100',ews:'125'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'jharkhand_forest',title:'JPSC Forest Range Officer',
    short:'JPSC FRO',icon:'🌲',state:'Jharkhand',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Jharkhand Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~60',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'110',sc:'100',st:'90',ews:'115'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── MADHYA PRADESH ───
  {
    id:'mppsc',title:'MPPSC State Service Exam (MP)',
    short:'MPPSC SSE',icon:'🏛️',state:'Madhya Pradesh',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Deputy Collector, Deputy SP, Commercial Tax Officer, Block Development Officer, Nayab Tehsildar',
    vacancies:'~500',
    eligibility:'Any Degree (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'Dec 2024',
    applyLast:'Jan 2025',
    prelims:'April 2025',
    mains:'Aug 2025',
    syllabus:{
      'Prelims — GS':['Science & Technology','Social Science','India & MP Economy','History','Geography','MP GK','Polity & Governance'],
      'Mains Paper I':['History, Culture, Literature of MP'],
      'Mains Paper II':['Geography, Ecology of MP & India'],
      'Mains Paper III':['Constitution, Government & Economy'],
      'Mains Paper IV':['Science, Technology & Cyber Security'],
      'Mains Paper V':['Current Events & Sports'],
      'Mains Paper VI':['Hindi Language'],
      'Mains Paper VII':['Hindi Essay'],
    },
    pattern:[
      {stage:'Prelims',papers:'100Q 200M',duration:'2 hrs',marks:'200'},
      {stage:'Mains',papers:'Paper I–VII',duration:'3 hrs each',marks:'1400'},
      {stage:'Interview',papers:'—',duration:'—',marks:'175'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 108 / Final: 785',obc:'102 / 762',sc:'96 / 742',st:'91 / 726',ews:'105 / 774'},
    ],
    materials:[
      {icon:'📖',title:'MP GK Samanya Gyan',type:'Book','desc':'Hindi Medium'},
    ],
  },
  {
    id:'mp_engineering',title:'MPPSC AE (Assistant Engineer)',
    short:'MPPSC AE',icon:'⚙️',state:'Madhya Pradesh',type:'state',
    category:['engineering','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Assistant Engineer (Civil/Electrical/Mechanical)',
    vacancies:'~250',
    eligibility:'BE/B.Tech (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Civil/Electrical/Mechanical Engineering','Technical Subjects'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Technical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'125',obc:'115',sc:'105',st:'95',ews:'120'},
    ],
    materials:[
      {icon:'📖',title:'MPPSC AE Guide',type:'Book','desc':'Engineering Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AE papers'},
    ],
  },
  {
    id:'mp_medical',title:'MPPSC Medical Officer',
    short:'MPPSC MO',icon:'🏥',state:'Madhya Pradesh',type:'state',
    category:['medical','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Medical Officer, Dental Surgeon',
    vacancies:'~200',
    eligibility:'MBBS/BDS (22-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    interview:'July 2025',
    syllabus:{
      'Paper I':['Anatomy','Physiology','Biochemistry','Pharmacology','Pathology'],
      'Paper II':['Medicine','Surgery','Obstetrics','Gynecology','Pediatrics'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (200Q) + Paper II (200Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Interview',papers:'Medical Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'250',obc:'240',sc:'230',st:'220',ews:'245'},
    ],
    materials:[
      {icon:'📖',title:'Medical Officer Guide',type:'Book','desc':'Subject-wise'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'MO papers'},
    ],
  },
  {
    id:'mp_revenue',title:'MPPSC Tehsildar',
    short:'MPPSC Tehsildar',icon:'📊',state:'Madhya Pradesh',type:'state',
    category:['revenue','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Tehsildar, Nayab Tehsildar',
    vacancies:'~130',
    eligibility:'Any Degree (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    interview:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','Mental Ability','Current Affairs'],
      'Paper II':['Arithmetic','Reasoning','Computer Knowledge'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Revenue Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Tehsildar Guide',type:'Book','desc':'Revenue Dept'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Revenue papers'},
    ],
  },
  {
    id:'mp_judicial',title:'MPPSC Civil Judge',
    short:'MPPSC CJ',icon:'⚖️',state:'Madhya Pradesh',type:'state',
    category:['judicial','state'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Civil Judge, Judicial Magistrate',
    vacancies:'~85',
    eligibility:'LLB Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    written:'Aug 2025',
    interview:'Oct 2025',
    syllabus:{
      'Paper I':['Civil Law','Criminal Law','Constitutional Law'],
      'Paper II':['Hindu Law','Mohammedan Law','Transfer of Property Act'],
      'Paper III':['Limitation Act','Evidence Act','CPRC & CrPC'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I-III (100Q each)',duration:'2 hrs each',marks:'300'},
      {stage:'Interview',papers:'Judicial Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'200',obc:'190',sc:'180',st:'170',ews:'195'},
    ],
    materials:[
      {icon:'📖',title:'Judicial Services Guide',type:'Book','desc':'Law Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Judicial papers'},
    ],
  },
  {
    id:'mp_agriculture',title:'MPPSC Agriculture Officer',
    short:'MPPSC AO',icon:'🌾',state:'Madhya Pradesh',type:'state',
    category:['agriculture','state'],
    colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Agriculture Officer, Extension Officer',
    vacancies:'~110',
    eligibility:'B.Sc Agriculture (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    interview:'Aug 2025',
    syllabus:{
      'Paper I':['General Studies','Current Affairs','Mental Ability'],
      'Paper II':['Agronomy','Horticulture','Plant Pathology','Entomology'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Interview',papers:'Agriculture Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'150',obc:'140',sc:'130',st:'120',ews:'145'},
    ],
    materials:[
      {icon:'📖',title:'Agriculture Officer Guide',type:'Book','desc':'Agri Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'AO papers'},
    ],
  },
  {
    id:'mp_forest',title:'MPPSC Forest Range Officer',
    short:'MPPSC FRO',icon:'🌲',state:'Madhya Pradesh',type:'state',
    category:['forest','state'],
    colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Forest Range Officer, Forest Guard',
    vacancies:'~120',
    eligibility:'B.Sc Forestry/Bachelor Degree (18-30 yrs)',
    mode:'Written + Physical + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    written:'July 2025',
    physical:'Sept 2025',
    syllabus:{
      'Paper I':['General Studies','General Science','Current Affairs'],
      'Paper II':['Forestry','Environmental Science','Wildlife Management'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Walking, Running, Medical',duration:'—',marks:'Qualifying'},
      {stage:'Interview',papers:'Forest Interview',duration:'—',marks:'50'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Forest Officer Guide',type:'Book','desc':'Forestry Books'},
      {icon:'📋',title:'Previous Papers',type:'PDF','desc':'Forest papers'},
    ],
  },

  // ─── RAJASTHAN ───
  {
    id:'rj_rpsc',title:'RPSC RAS (Rajasthan Administrative Services)',
    short:'RPSC RAS',icon:'🏛️',state:'Rajasthan',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Rajasthan Public Service Commission',
    posts:'RAS, RTS, Tehsildar, BDO, etc.',
    vacancies:'~500',
    eligibility:'Any Graduate (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['History','Geography','Polity','Economy','Science','Current Affairs'],
      'Mains GS I':['History & Culture','Geography'],
      'Mains GS II':['Polity & Administration','Economy'],
      'Mains GS III':['Science & Technology','Environment'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'180 min',marks:'200'},
      {stage:'Main Exam',papers:'4 Papers x 150M',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 85 / Final: 720',obc:'80 / 700',sc:'75 / 680',st:'70 / 660',ews:'82 / 710'},
    ],
    materials:[
      {icon:'📖',title:'Rajasthan GK',type:'Book','desc':'Complete Guide'},
      {icon:'📋',title:'RPSC Previous Papers',type:'PDF','desc':'RAS papers'},
    ],
  },
  {
    id:'rj_police_si',title:'Rajasthan Police Sub-Inspector',
    short:'Rajasthan Police SI',icon:'👮',state:'Rajasthan',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Rajasthan Police',
    posts:'SI (Civil), SI (Armed)',
    vacancies:'~1000',
    eligibility:'Graduate (18-25 yrs)',
    mode:'Written + Physical',
    language:'Hindi',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['Reasoning','General Knowledge','Current Affairs'],
      'Paper II':['Hindi','English','Maths'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (75Q) + Paper II (75Q)',duration:'2 hrs each',marks:'300'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'180',obc:'170',sc:'160',st:'150',ews:'175'},
    ],
    materials:[
      {icon:'📖',title:'Rajasthan Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── TAMIL NADU ───
  {
    id:'tn_tnpsc_group1',title:'TNPSC Group I Services',
    short:'TNPSC Group 1',icon:'🏛️',state:'Tamil Nadu',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Tamil Nadu Public Service Commission',
    posts:'Deputy Collector, DSP, BDO, etc.',
    vacancies:'~100',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Tamil & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','Aptitude'],
      'Mains':['Tamil Language','English Language','General Studies I-III'],
    },
    pattern:[
      {stage:'Preliminary',papers:'200Q MCQ',duration:'180 min',marks:'300'},
      {stage:'Main Exam',papers:'5 Papers',duration:'3 hrs each',marks:'1020'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'120'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 120 / Final: 850',obc:'115 / 830',sc:'110 / 810',st:'105 / 790',ews:'118 / 840'},
    ],
    materials:[
      {icon:'📖',title:'TNPSC Group 1 Guide',type:'Book','desc':'Tamil Medium'},
      {icon:'📋',title:'TNPSC Previous Papers',type:'PDF','desc':'Group 1 papers'},
    ],
  },
  {
    id:'tn_police_si',title:'Tamil Nadu Police Sub-Inspector',
    short:'TN Police SI',icon:'👮',state:'Tamil Nadu',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Tamil Nadu Uniformed Services Recruitment Board',
    posts:'SI (Taluk, Armed Reserve, TSP)',
    vacancies:'~500',
    eligibility:'Any Degree (20-30 yrs)',
    mode:'Written + Physical + Oral',
    language:'Tamil & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Psychology'],
      'Paper II':['Tamil Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (80Q) + Paper II (80Q)',duration:'2.5 hrs each',marks:'160'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
      {stage:'Oral Test',papers:'Interview',duration:'—',marks:'40'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'115',sc:'110',st:'105',ews:'118'},
    ],
    materials:[
      {icon:'📖',title:'TN Police SI Guide',type:'Book','desc':'Tamil Medium'},
    ],
  },
  {
    id:'tn_trb_tet',title:'TN TRB TET (Teacher Eligibility Test)',
    short:'TN TET',icon:'📚',state:'Tamil Nadu',type:'state',
    category:['teacher','state'],
    colorBg:'rgba(245,158,11,.15)',colorText:'#fbbf24',
    conducting:'Tamil Nadu Teachers Recruitment Board',
    posts:'Primary & Secondary Teachers',
    vacancies:'Eligibility Certificate',
    eligibility:'D.Ed / B.Ed',
    mode:'OMR',
    language:'Tamil & English',
    status:'upcoming',
    notification:'May 2025',
    applyLast:'June 2025',
    exam:'Aug 2025',
    syllabus:{
      'Paper I':['Child Development','Language I','Language II','Mathematics','Environmental Studies'],
      'Paper II':['Child Development','Language I','Language II','Maths & Science OR Social Studies'],
    },
    pattern:[
      {stage:'Paper I',papers:'150Q MCQ',duration:'150 min',marks:'150'},
      {stage:'Paper II',papers:'150Q MCQ',duration:'150 min',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'90/150 (60%)',obc:'82',sc:'75',st:'70',ews:'87'},
    ],
    materials:[
      {icon:'📖',title:'TN TET Guide',type:'Book','desc':'Tamil Medium'},
      {icon:'📋',title:'TN TET Previous Papers',type:'PDF','desc':'2012–2023'},
    ],
  },

  // ─── KARNATAKA ───
  {
    id:'ka_kpsc',title:'KPSC KAS (Karnataka Administrative Services)',
    short:'KPSC KAS',icon:'🏛️',state:'Karnataka',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Karnataka Public Service Commission',
    posts:'Deputy Commissioner, ASP, Tehsildar, etc.',
    vacancies:'~300',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Kannada & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','Current Affairs'],
      'Mains':['Kannada Language','English Language','General Studies I-III'],
    },
    pattern:[
      {stage:'Preliminary',papers:'180Q MCQ',duration:'180 min',marks:'180'},
      {stage:'Main Exam',papers:'5 Papers',duration:'3 hrs each',marks:'900'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 95 / Final: 780',obc:'90 / 760',sc:'85 / 740',st:'80 / 720',ews:'92 / 770'},
    ],
    materials:[
      {icon:'📖',title:'Karnataka GK',type:'Book','desc':'Kannada Medium'},
      {icon:'📋',title:'KPSC Previous Papers',type:'PDF','desc':'KAS papers'},
    ],
  },
  {
    id:'ka_police_si',title:'Karnataka Police Sub-Inspector',
    short:'Karnataka Police SI',icon:'👮',state:'Karnataka',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Karnataka State Police',
    posts:'PSI (Civil), PSI (Armed)',
    vacancies:'~800',
    eligibility:'Any Degree (19-25 yrs)',
    mode:'Written + Physical',
    language:'Kannada & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['Kannada Language','English Language'],
      'Paper II':['General Studies','Current Affairs','Reasoning'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (50Q) + Paper II (100Q)',duration:'2 hrs each',marks:'300'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'180',obc:'170',sc:'160',st:'150',ews:'175'},
    ],
    materials:[
      {icon:'📖',title:'Karnataka Police SI Guide',type:'Book','desc':'Kannada Medium'},
    ],
  },

  // ─── KERALA ───
  {
    id:'kl_kpsc',title:'Kerala PSC State Civil Services',
    short:'Kerala PSC',icon:'🏛️',state:'Kerala',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Kerala Public Service Commission',
    posts:'Deputy Collector, Police Officer, etc.',
    vacancies:'~200',
    eligibility:'Any Degree (19-36 yrs)',
    mode:'Written + Interview',
    language:'Malayalam & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','Current Affairs'],
      'Mains':['Malayalam Language','English Language','General Studies I-II'],
    },
    pattern:[
      {stage:'Preliminary',papers:'100Q MCQ',duration:'90 min',marks:'100'},
      {stage:'Main Exam',papers:'4 Papers',duration:'2-3 hrs each',marks:'600'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 45 / Final: 450',obc:'42 / 430',sc:'40 / 410',st:'38 / 390',ews:'43 / 440'},
    ],
    materials:[
      {icon:'📖',title:'Kerala PSC Guide',type:'Book','desc':'Malayalam Medium'},
      {icon:'📋',title:'Kerala PSC Previous Papers',type:'PDF','desc':'PSC papers'},
    ],
  },
  {
    id:'kl_police_si',title:'Kerala Police Sub-Inspector',
    short:'Kerala Police SI',icon:'👮',state:'Kerala',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Kerala Police Service',
    posts:'SI (Trainee)',
    vacancies:'~600',
    eligibility:'Any Degree (19-31 yrs)',
    mode:'Written + Physical + Medical',
    language:'Malayalam & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs'],
      'Paper II':['Simple Arithmetic','Mental Ability'],
      'Paper III':['Regional Language (Malayalam)'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (80Q) + Paper II (80Q) + Paper III (80Q)',duration:'1.5 hrs each',marks:'240'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'160',obc:'150',sc:'140',st:'130',ews:'155'},
    ],
    materials:[
      {icon:'📖',title:'Kerala Police SI Guide',type:'Book','desc':'Malayalam Medium'},
    ],
  },

  // ─── WEST BENGAL ───
  {
    id:'wb_wbcs',title:'WBCS (West Bengal Civil Services)',
    short:'WBCS',icon:'🏛️',state:'West Bengal',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'West Bengal Public Service Commission',
    posts:'WBCS Executive, Police Service, etc.',
    vacancies:'~250',
    eligibility:'Any Degree (21-36 yrs)',
    mode:'Written + Interview',
    language:'Bengali & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','Arithmetic'],
      'Mains':['Bengali Language','English Language','General Studies I-II'],
    },
    pattern:[
      {stage:'Preliminary',papers:'200Q MCQ',duration:'150 min',marks:'200'},
      {stage:'Main Exam',papers:'6 Papers',duration:'3 hrs each',marks:'1100'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'200'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 105 / Final: 850',obc:'100 / 830',sc:'95 / 810',st:'90 / 790',ews:'102 / 840'},
    ],
    materials:[
      {icon:'📖',title:'WBCS Guide',type:'Book','desc':'Bengali Medium'},
      {icon:'📋',title:'WBCS Previous Papers',type:'PDF','desc':'Executive papers'},
    ],
  },
  {
    id:'wb_police_si',title:'West Bengal Police Sub-Inspector',
    short:'WB Police SI',icon:'👮',state:'West Bengal',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'West Bengal Police Recruitment Board',
    posts:'SI (Unarmed Branch)',
    vacancies:'~1000',
    eligibility:'Any Degree (20-27 yrs)',
    mode:'Written + Physical',
    language:'Bengali & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['General Studies','Logical & Analytical Reasoning'],
      'Paper II':['English'],
      'Paper III':['Bengali/Hindi/Urdu/Nepali'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (85Q) + Paper II (25Q) + Paper III (25Q)',duration:'1.5 hrs each',marks:'135'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'90',obc:'85',sc:'80',st:'75',ews:'87'},
    ],
    materials:[
      {icon:'📖',title:'WB Police SI Guide',type:'Book','desc':'Bengali Medium'},
    ],
  },

  // ─── GUJARAT ───
  {
    id:'gj_gpsc',title:'GPSC Gujarat Administrative Services',
    short:'GPSC GAS',icon:'🏛️',state:'Gujarat',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Gujarat Public Service Commission',
    posts:'Deputy Collector, DSP, etc.',
    vacancies:'~150',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Gujarati & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Gujarati Language','English Language','General Studies I-III'],
    },
    pattern:[
      {stage:'Preliminary',papers:'200Q MCQ',duration:'180 min',marks:'200'},
      {stage:'Main Exam',papers:'5 Papers',duration:'3 hrs each',marks:'900'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 110 / Final: 780',obc:'105 / 760',sc:'100 / 740',st:'95 / 720',ews:'107 / 770'},
    ],
    materials:[
      {icon:'📖',title:'Gujarat GK',type:'Book','desc':'Gujarati Medium'},
      {icon:'📋',title:'GPSC Previous Papers',type:'PDF','desc':'GAS papers'},
    ],
  },
  {
    id:'gj_police_si',title:'Gujarat Police Sub-Inspector',
    short:'Gujarat Police SI',icon:'👮',state:'Gujarat',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Gujarat Police',
    posts:'PSI (Unarmed), PSI (Armed)',
    vacancies:'~700',
    eligibility:'Any Degree (18-27 yrs)',
    mode:'Written + Physical',
    language:'Gujarati & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','History','Geography','Polity'],
      'Paper II':['English','Gujarati Language'],
      'Paper III':['Arithmetic','Reasoning'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (50Q) + Paper III (50Q)',duration:'2 hrs each',marks:'300'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'180',obc:'170',sc:'160',st:'150',ews:'175'},
    ],
    materials:[
      {icon:'📖',title:'Gujarat Police SI Guide',type:'Book','desc':'Gujarati Medium'},
    ],
  },

  // ─── PUNJAB ───
  {
    id:'pb_ppsc',title:'Punjab PCS (Provincial Civil Services)',
    short:'Punjab PCS',icon:'🏛️',state:'Punjab',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Punjab Public Service Commission',
    posts:'Deputy Commissioner, DSP, etc.',
    vacancies:'~100',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Punjabi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Punjabi Language','English Language','General Studies I-II'],
    },
    pattern:[
      {stage:'Preliminary',papers:'120Q MCQ',duration:'120 min',marks:'240'},
      {stage:'Main Exam',papers:'4 Papers',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'120'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 120 / Final: 650',obc:'115 / 630',sc:'110 / 610',st:'105 / 590',ews:'117 / 640'},
    ],
    materials:[
      {icon:'📖',title:'Punjab GK',type:'Book','desc':'Punjabi Medium'},
      {icon:'📋',title:'PPSC Previous Papers',type:'PDF','desc':'PCS papers'},
    ],
  },
  {
    id:'pb_police_si',title:'Punjab Police Sub-Inspector',
    short:'Punjab Police SI',icon:'👮',state:'Punjab',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Punjab Police',
    posts:'SI (Investigation)',
    vacancies:'~500',
    eligibility:'Any Degree (18-27 yrs)',
    mode:'Written + Physical',
    language:'Punjabi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['General Awareness','Quantitative Aptitude','Reasoning'],
      'Paper II':['Punjabi Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (50Q)',duration:'2 hrs each',marks:'200'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'120',obc:'115',sc:'110',st:'105',ews:'117'},
    ],
    materials:[
      {icon:'📖',title:'Punjab Police SI Guide',type:'Book','desc':'Punjabi Medium'},
    ],
  },

  // ─── JHARKHAND ───
  {
    id:'jh_jpsc',title:'JPSC Jharkhand Administrative Services',
    short:'JPSC JAS',icon:'🏛️',state:'Jharkhand',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Jharkhand Public Service Commission',
    posts:'Deputy Collector, DSP, etc.',
    vacancies:'~200',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Hindi Language','English Language','General Studies I-III'],
    },
    pattern:[
      {stage:'Preliminary',papers:'100Q MCQ',duration:'120 min',marks:'200'},
      {stage:'Main Exam',papers:'5 Papers',duration:'3 hrs each',marks:'900'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 95 / Final: 720',obc:'90 / 700',sc:'85 / 680',st:'80 / 660',ews:'92 / 710'},
    ],
    materials:[
      {icon:'📖',title:'Jharkhand GK',type:'Book','desc':'Hindi Medium'},
      {icon:'📋',title:'JPSC Previous Papers',type:'PDF','desc':'JAS papers'},
    ],
  },
  {
    id:'jh_police_si',title:'Jharkhand Police Sub-Inspector',
    short:'Jharkhand Police SI',icon:'👮',state:'Jharkhand',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Jharkhand Staff Selection Commission',
    posts:'SI (Civil)',
    vacancies:'~600',
    eligibility:'Any Degree (18-25 yrs)',
    mode:'Written + Physical',
    language:'Hindi',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs'],
      'Paper II':['Hindi Language','English Language'],
      'Paper III':['Mathematics','Reasoning'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (60Q) + Paper II (40Q) + Paper III (60Q)',duration:'2 hrs each',marks:'240'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'140',obc:'130',sc:'120',st:'110',ews:'135'},
    ],
    materials:[
      {icon:'📖',title:'Jharkhand Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── MADHYA PRADESH ───
  {
    id:'mp_mpsc',title:'MPPSC State Service Exam',
    short:'MPPSC SSE',icon:'🏛️',state:'Madhya Pradesh',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Madhya Pradesh Public Service Commission',
    posts:'Deputy Collector, DSP, etc.',
    vacancies:'~300',
    eligibility:'Any Degree (21-40 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Hindi Language','English Language','General Studies I-IV'],
    },
    pattern:[
      {stage:'Preliminary',papers:'100Q MCQ',duration:'120 min',marks:'200'},
      {stage:'Main Exam',papers:'6 Papers',duration:'3 hrs each',marks:'1200'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 108 / Final: 785',obc:'102 / 762',sc:'96 / 742',st:'91 / 726',ews:'105 / 774'},
    ],
    materials:[
      {icon:'📖',title:'MP GK Samanya Gyan',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── BIHAR ───
  {
    id:'bihar_bpsc',title:'BPSC Bihar Public Service Commission',
    short:'BPSC',icon:'🏛️',state:'Bihar',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Bihar Public Service Commission',
    posts:'Deputy Collector, DSP, BDO, etc.',
    vacancies:'~500',
    eligibility:'Any Degree (21-37 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['General Hindi','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'120 min',marks:'150'},
      {stage:'Main Exam',papers:'4 Papers',duration:'3 hrs each',marks:'900'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'120'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 105 / Final: 480',obc:'100 / 460',sc:'95 / 440',st:'90 / 420',ews:'102 / 470'},
    ],
    materials:[
      {icon:'📖',title:'BPSC Guide',type:'Book','desc':'Hindi Medium'},
      {icon:'📋',title:'BPSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'bihar_police_si',title:'Bihar Police Sub-Inspector',
    short:'Bihar Police SI',icon:'👮',state:'Bihar',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Bihar Police Subordinate Services Commission',
    posts:'SI (Civil)',
    vacancies:'~1000',
    eligibility:'Any Degree (20-25 yrs)',
    mode:'Written + Physical',
    language:'Hindi',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Hindi Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'250',obc:'240',sc:'230',st:'220',ews:'245'},
    ],
    materials:[
      {icon:'📖',title:'Bihar Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── ODISHA ───
  {
    id:'odisha_opsc',title:'OPSC Odisha Public Service Commission',
    short:'OPSC',icon:'🏛️',state:'Odisha',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Odisha Public Service Commission',
    posts:'Deputy Collector, DSP, etc.',
    vacancies:'~400',
    eligibility:'Any Degree (21-32 yrs)',
    mode:'Written + Interview',
    language:'Odia & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Odia Language','English Language','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'150 min',marks:'150'},
      {stage:'Main Exam',papers:'5 Papers',duration:'3 hrs each',marks:'1200'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 110 / Final: 650',obc:'105 / 630',sc:'100 / 610',st:'95 / 590',ews:'107 / 640'},
    ],
    materials:[
      {icon:'📖',title:'OPSC Guide',type:'Book','desc':'Odia Medium'},
      {icon:'📋',title:'OPSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'odisha_police_si',title:'Odisha Police Sub-Inspector',
    short:'Odisha Police SI',icon:'👮',state:'Odisha',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Odisha Police',
    posts:'SI (Civil)',
    vacancies:'~800',
    eligibility:'Any Degree (21-25 yrs)',
    mode:'Written + Physical',
    language:'Odia & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Odia Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'240',obc:'230',sc:'220',st:'210',ews:'235'},
    ],
    materials:[
      {icon:'📖',title:'Odisha Police SI Guide',type:'Book','desc':'Odia Medium'},
    ],
  },

  // ─── ASSAM ───
  {
    id:'assam_apsc',title:'APSC Assam Public Service Commission',
    short:'APSC',icon:'🏛️',state:'Assam',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Assam Public Service Commission',
    posts:'Deputy Commissioner, DSP, etc.',
    vacancies:'~300',
    eligibility:'Any Degree (21-38 yrs)',
    mode:'Written + Interview',
    language:'Assamese & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Assamese Language','English Language','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'120 min',marks:'150'},
      {stage:'Main Exam',papers:'5 Papers',duration:'3 hrs each',marks:'1000'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'150'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 95 / Final: 550',obc:'90 / 530',sc:'85 / 510',st:'80 / 490',ews:'92 / 540'},
    ],
    materials:[
      {icon:'📖',title:'APSC Guide',type:'Book','desc':'Assamese Medium'},
      {icon:'📋',title:'APSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'assam_police_si',title:'Assam Police Sub-Inspector',
    short:'Assam Police SI',icon:'👮',state:'Assam',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Assam Police',
    posts:'SI (UB)',
    vacancies:'~600',
    eligibility:'Any Degree (20-24 yrs)',
    mode:'Written + Physical',
    language:'Assamese & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Assamese Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'220',obc:'210',sc:'200',st:'190',ews:'215'},
    ],
    materials:[
      {icon:'📖',title:'Assam Police SI Guide',type:'Book','desc':'Assamese Medium'},
    ],
  },

  // ─── HARYANA ───
  {
    id:'haryana_hpsc',title:'HPSC Haryana Public Service Commission',
    short:'HPSC',icon:'🏛️',state:'Haryana',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Haryana Public Service Commission',
    posts:'Deputy Commissioner, DSP, etc.',
    vacancies:'~200',
    eligibility:'Any Degree (21-42 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Hindi Language','English Language','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'100Q MCQ',duration:'120 min',marks:'100'},
      {stage:'Main Exam',papers:'4 Papers',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'80'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 85 / Final: 420',obc:'80 / 400',sc:'75 / 380',st:'70 / 360',ews:'82 / 410'},
    ],
    materials:[
      {icon:'📖',title:'HPSC Guide',type:'Book','desc':'Hindi Medium'},
      {icon:'📋',title:'HPSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'haryana_police_si',title:'Haryana Police Sub-Inspector',
    short:'Haryana Police SI',icon:'👮',state:'Haryana',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Haryana Staff Selection Commission',
    posts:'SI (Civil)',
    vacancies:'~500',
    eligibility:'Any Degree (21-27 yrs)',
    mode:'Written + Physical',
    language:'Hindi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Hindi Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'200',obc:'190',sc:'180',st:'170',ews:'195'},
    ],
    materials:[
      {icon:'📖',title:'Haryana Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── HIMACHAL PRADESH ───
  {
    id:'hp_himachal_hpsc',title:'HPPSC Himachal Pradesh Public Service Commission',
    short:'HPPSC',icon:'🏛️',state:'Himachal Pradesh',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Himachal Pradesh Public Service Commission',
    posts:'Deputy Commissioner, DSP, etc.',
    vacancies:'~150',
    eligibility:'Any Degree (21-35 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Hindi Language','English Language','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'100Q MCQ',duration:'120 min',marks:'100'},
      {stage:'Main Exam',papers:'4 Papers',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 80 / Final: 400',obc:'75 / 380',sc:'70 / 360',st:'65 / 340',ews:'77 / 390'},
    ],
    materials:[
      {icon:'📖',title:'HPPSC Guide',type:'Book','desc':'Hindi Medium'},
      {icon:'📋',title:'HPPSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'hp_police_si',title:'Himachal Pradesh Police Sub-Inspector',
    short:'HP Police SI',icon:'👮',state:'Himachal Pradesh',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Himachal Pradesh Police',
    posts:'SI (Civil)',
    vacancies:'~300',
    eligibility:'Any Degree (20-26 yrs)',
    mode:'Written + Physical',
    language:'Hindi & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Hindi Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'180',obc:'170',sc:'160',st:'150',ews:'175'},
    ],
    materials:[
      {icon:'📖',title:'HP Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── UTTARAKHAND ───
  {
    id:'uk_ukpsc',title:'UKPSC Uttarakhand Public Service Commission',
    short:'UKPSC',icon:'🏛️',state:'Uttarakhand',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Uttarakhand Public Service Commission',
    posts:'Deputy Collector, DSP, etc.',
    vacancies:'~200',
    eligibility:'Any Degree (21-42 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'March 2025',
    applyLast:'April 2025',
    prelims:'July 2025',
    mains:'Nov 2025',
    interview:'Feb 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Hindi Language','English Language','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'120 min',marks:'150'},
      {stage:'Main Exam',papers:'4 Papers',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 90 / Final: 450',obc:'85 / 430',sc:'80 / 410',st:'75 / 390',ews:'87 / 440'},
    ],
    materials:[
      {icon:'📖',title:'UKPSC Guide',type:'Book','desc':'Hindi Medium'},
      {icon:'📋',title:'UKPSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'uk_police_si',title:'Uttarakhand Police Sub-Inspector',
    short:'UK Police SI',icon:'👮',state:'Uttarakhand',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Uttarakhand Police',
    posts:'SI (Civil)',
    vacancies:'~400',
    eligibility:'Any Degree (21-28 yrs)',
    mode:'Written + Physical',
    language:'Hindi & English',
    status:'active',
    notification:'Jan 2025',
    applyLast:'Feb 2025',
    written:'May 2025',
    physical:'July 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Hindi Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'190',obc:'180',sc:'170',st:'160',ews:'185'},
    ],
    materials:[
      {icon:'📖',title:'UK Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },

  // ─── CHHATTISGARH ───
  {
    id:'cg_cgpsc',title:'CGPSC Chhattisgarh Public Service Commission',
    short:'CGPSC',icon:'🏛️',state:'Chhattisgarh',type:'state',
    category:['state','group'],
    colorBg:'rgba(139,92,246,.15)',colorText:'#a78bfa',
    conducting:'Chhattisgarh Public Service Commission',
    posts:'Deputy Collector, DSP, etc.',
    vacancies:'~250',
    eligibility:'Any Degree (21-30 yrs)',
    mode:'Written + Interview',
    language:'Hindi & English',
    status:'upcoming',
    notification:'April 2025',
    applyLast:'May 2025',
    prelims:'Aug 2025',
    mains:'Dec 2025',
    interview:'March 2026',
    syllabus:{
      'Prelims':['General Studies','CSAT'],
      'Mains':['Hindi Language','English Language','General Studies I-II','Optional Subject'],
    },
    pattern:[
      {stage:'Preliminary',papers:'150Q MCQ',duration:'120 min',marks:'150'},
      {stage:'Main Exam',papers:'4 Papers',duration:'3 hrs each',marks:'800'},
      {stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'},
    ],
    cutoffs:[
      {year:'2023',general:'Prelims: 95 / Final: 480',obc:'90 / 460',sc:'85 / 440',st:'80 / 420',ews:'92 / 470'},
    ],
    materials:[
      {icon:'📖',title:'CGPSC Guide',type:'Book','desc':'Hindi Medium'},
      {icon:'📋',title:'CGPSC Previous Papers',type:'PDF','desc':'All papers'},
    ],
  },
  {
    id:'cg_police_si',title:'Chhattisgarh Police Sub-Inspector',
    short:'CG Police SI',icon:'👮',state:'Chhattisgarh',type:'state',
    category:['police','state'],
    colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
    conducting:'Chhattisgarh Police',
    posts:'SI (Civil)',
    vacancies:'~600',
    eligibility:'Any Degree (21-28 yrs)',
    mode:'Written + Physical',
    language:'Hindi & English',
    status:'active',
    notification:'Feb 2025',
    applyLast:'March 2025',
    written:'June 2025',
    physical:'Aug 2025',
    syllabus:{
      'Paper I':['General Knowledge','Current Affairs','Mathematics','Reasoning'],
      'Paper II':['Hindi Language','English Language'],
    },
    pattern:[
      {stage:'Written Exam',papers:'Paper I (100Q) + Paper II (100Q)',duration:'2 hrs each',marks:'400'},
      {stage:'Physical Test',papers:'Height, Chest, Running',duration:'—',marks:'Qualifying'},
    ],
    cutoffs:[
      {year:'2023',general:'210',obc:'200',sc:'190',st:'180',ews:'205'},
    ],
    materials:[
      {icon:'📖',title:'CG Police SI Guide',type:'Book','desc':'Hindi Medium'},
    ],
  },
];

/* ═══════════════════════════════════════════════
   STATE / FILTER
═══════════════════════════════════════════════ */
let activeFilter = 'all';
let activeCategory = 'all';
let searchQuery = '';

const states = ['Central','Andhra Pradesh','Telangana','Uttar Pradesh','Maharashtra','Rajasthan','Tamil Nadu','Karnataka','Kerala','West Bengal','Gujarat','Punjab','Jharkhand','Madhya Pradesh','Bihar','Odisha','Assam','Haryana','Himachal Pradesh','Uttarakhand','Chhattisgarh'];

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

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
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
  document.body.style.overflow='hidden';
}

function closeModal(e){
  if(e && e.target !== document.getElementById('overlay')) return;
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow='';
}

function switchTab(idx, btn){
  document.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach((p,i)=>{
    p.classList.toggle('active', i===idx);
  });
}

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

/* ═══════════════════════════════════════════════
   PAGE NAVIGATION (simple show/hide)
═══════════════════════════════════════════════ */
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

function showCalendarModal(){
  document.getElementById('modalHeader').innerHTML = `
    <div class="modal-icon" style="background:rgba(59,130,246,.15)">📅</div>
    <div><div class="modal-title">Exam Calendar 2025</div><div class="modal-sub">Upcoming government exam dates</div></div>
    <button class="modal-close" onclick="closeModal()">✕</button>
  `;
  document.getElementById('modalTabs').innerHTML = '';

  const calEvents = [
    {month:'April 2025',events:['UPSC CSE Prelims Application (Last Date)','RRB NTPC Registration Open','AP Group 1 Prelims']},
    {month:'May 2025',events:['UPPSC PCS Prelims','GPSC Class I Prelims','SSC CGL 2025 Notification','NDA I Written Exam']},
    {month:'June 2025',events:['APPSC Group 1 Prelims','SSC CGL Tier I','RRB NTPC CBT Stage 1','UPSC CSE Prelims','TS TET Exam','TNPSC Group 1 Prelims']},
    {month:'July 2025',events:['IBPS PO Notification','TS Police SI Written','TN Police PC Exam','AP TET Exam','WBCS Prelims','SSC CGL Tier II']},
    {month:'August 2025',events:['MPSC State Service Prelims','UPPSC PCS Mains','MPPSC Prelims','TS TET Results']},
    {month:'September 2025',events:['RPSC RAS Prelims','KPSC KAS Prelims','NDA II Written Exam','IBPS PO Prelims','SSC CGL Tier II Final']},
    {month:'October 2025',events:['APPSC Group 1 Mains','TNPSC Group 1 Mains','IBPS PO Mains','PPSC Mains']},
    {month:'November 2025',events:['UPSC CSE Mains','GPSC Mains','WBCS Mains','JPSC Mains']},
    {month:'December 2025',events:['TSPSC Group 1 Interviews','IBPS PO Results','SSC CGL Results']},
  ];

  document.getElementById('modalBody').innerHTML = `<div class="tab-panel active">
    ${calEvents.map(m=>`
      <h3 class="sec">${m.month}</h3>
      <ul style="padding-left:0;list-style:none;">
        ${m.events.map(ev=>`<li style="padding:8px 0;border-bottom:1px solid var(--border);font-size:.88rem;color:var(--text2);display:flex;gap:10px;align-items:center"><span style="color:var(--accent)">▸</span>${ev}</li>`).join('')}
      </ul>
    `).join('')}
  </div>`;

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function showNotifModal(){
  document.getElementById('modalHeader').innerHTML = `
    <div class="modal-icon" style="background:rgba(239,68,68,.15)">🔔</div>
    <div><div class="modal-title">Live Notifications</div><div class="modal-sub">Latest government exam updates</div></div>
    <button class="modal-close" onclick="closeModal()">✕</button>
  `;
  document.getElementById('modalTabs').innerHTML = '';

  const notifs = [
    {date:'Apr 28, 2025',exam:'UPSC CSE 2025',update:'Notification released. Apply at upsconline.gov.in',tag:'active'},
    {date:'Apr 25, 2025',exam:'RRB NTPC 2025',update:'Registration window now open. Last date: May 15, 2025',tag:'active'},
    {date:'Apr 22, 2025',exam:'SSC CGL 2025',update:'Exam schedule announced. Tier I: July 2025',tag:'upcoming'},
    {date:'Apr 20, 2025',exam:'AP Group 1 2025',update:'Notification released by APPSC. Apply now',tag:'active'},
    {date:'Apr 18, 2025',exam:'TSPSC AEE 2025',update:'Results declared. Check merit list on tspsc.gov.in',tag:'active'},
    {date:'Apr 15, 2025',exam:'UP Police Constable 2025',update:'Exam city intimation released for 60,244 posts',tag:'active'},
    {date:'Apr 12, 2025',exam:'IBPS PO 2025',update:'Notification expected in June 2025',tag:'upcoming'},
    {date:'Apr 10, 2025',exam:'TN TRB PG Asst',update:'Counselling schedule announced at trb.tn.gov.in',tag:'active'},
    {date:'Apr 08, 2025',exam:'MPSC State Service 2025',update:'Preliminary exam scheduled for August 2025',tag:'upcoming'},
    {date:'Apr 05, 2025',exam:'Kerala PSC LDC',update:'Rank list published on keralapsc.gov.in',tag:'active'},
    {date:'Apr 02, 2025',exam:'MPPSC 2025',update:'Online application form available at mppsc.mp.gov.in',tag:'active'},
    {date:'Mar 28, 2025',exam:'RRB Group D 2025',update:'Notification to be released in April 2025',tag:'upcoming'},
  ];

  document.getElementById('modalBody').innerHTML = `<div class="tab-panel active">
    ${notifs.map(n=>`<div style="display:flex;gap:16px;padding:14px 0;border-bottom:1px solid var(--border);align-items:flex-start">
      <span style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--text3);min-width:90px;padding-top:2px">${n.date}</span>
      <div>
        <div style="font-weight:600;font-size:.9rem;color:var(--accent);margin-bottom:4px">${n.exam}</div>
        <div style="font-size:.85rem;color:var(--text2)">${n.update}</div>
      </div>
      <span class="status-badge status-${n.tag==='active'?'active':'upcoming'}" style="margin-left:auto;flex-shrink:0">${n.tag}</span>
    </div>`).join('')}
  </div>`;

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

// Keyboard close
document.addEventListener('keydown',e=>{ if(e.key==='Escape') { document.getElementById('overlay').classList.remove('open'); document.body.style.overflow=''; }});

// Init
init();
