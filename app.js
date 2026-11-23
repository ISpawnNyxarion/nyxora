// NYXORA v22: connects to your Supabase project. The publishable key is meant to be public.
const SB_URL='https://hadyoglprvbutxpbrszr.supabase.co',SB_KEY='sb_publishable_4DEjo9jeTZbkoX6lGTfH8A_o27ZfAZk';
const INTERESTS=['Anime','Technology','Science','Gaming','Music','Photography','Nature','Travel','Art','Books','Philosophy','Entertainment'];
const REPORT_REASONS=['Harassment or abuse','Spam or scam','Hate or threats','Explicit or inappropriate content','Impersonation','Misinformation','Other'];
const LEGAL_EMAIL='sardarrehan252525@gmail.com';
const sb=supabase.createClient(SB_URL,SB_KEY),$=s=>document.querySelector(s);
const ic=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${p}"/></svg>`;
const I={home:ic('M3 11l9-8 9 8v10h-6v-6H9v6H3z'),fire:ic('M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-4 3-7 1 1 2 2 3 2 0-2-1-4 0-7z'),disc:ic('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM16.2 7.8l-2 6.4-6.4 2 2-6.4z'),me:ic('M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6'),heart:ic('M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z'),chat:ic('M4 5h16v11H9l-5 4z'),plus:ic('M12 5v14M5 12h14'),img:ic('M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4'),dl:ic('M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2'),back:ic('M15 5l-7 7 7 7'),gear:ic('M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1'),dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>',pen:ic('M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z'),chev:ic('M9 6l6 6-6 6'),rep:ic('M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3'),eye:ic('M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'),quote:ic('M7 8h4v5c0 2-1 3-3 4M14 8h4v5c0 2-1 3-3 4'),bell:ic('M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7zM10 20a2 2 0 0 0 4 0'),search:ic('M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3'),bm:ic('M6 4h12v17l-6-4-6 4z'),mute:ic('M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6'),blk:ic('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM4.9 4.9l14.2 14.2'),flag:ic('M4 21V4h11l-1 4h5l-2 6H4'),share:ic('M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13'),pin:ic('M12 17v5M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6a1 1 0 0 1 1-1V3H8v2a1 1 0 0 1 1 1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24z'),mic:ic('M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8'),trash:ic('M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6'),reply:ic('M9 17l-5-5 5-5M4 12h11a4 4 0 0 1 4 4v3'),lock:ic('M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z'),pal:ic('M12 3a9 9 0 1 0 0 18 2 2 0 0 0 2-2v-.5a2 2 0 0 1 2-2h1.5A3.5 3.5 0 0 0 21 13c0-5.5-4-10-9-10z'),play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>'};
const ring='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/></svg>';
const bd=t=>t=='g'?`<svg class="bd" viewBox="0 0 24 24" aria-label="Legendary 7-day streak badge"><defs><linearGradient id="grg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF4C2"/><stop offset=".45" stop-color="#E2B33C"/><stop offset="1" stop-color="#8F6208"/></linearGradient></defs><circle cx="12" cy="12" r="10.2" fill="url(#grg)" stroke="rgba(255,255,255,.45)" stroke-width=".8"/><path d="M12 6.2l1.8 3.7 4.1.6-3 2.9.7 4.1-3.6-1.9-3.6 1.9.7-4.1-3-2.9 4.1-.6z" fill="#1A1200" opacity=".85"/></svg>`:t=='et'?`<svg class="bd" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="gret" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60C5FF"/><stop offset=".55" stop-color="#1D9BF0"/><stop offset="1" stop-color="#0B6BCB"/></linearGradient></defs><path d="M12 2l2.3 1.7 2.8-.2 1.2 2.6 2.5 1.3-.3 2.8L22 12l-1.5 2.3.3 2.8-2.5 1.3-1.2 2.6-2.8-.2L12 22l-2.3-1.7-2.8.2-1.2-2.6-2.5-1.3.3-2.8L2 12l1.5-2.3-.3-2.8 2.5-1.3 1.2-2.6 2.8.2z" fill="url(#gret)" stroke="rgba(255,255,255,.4)" stroke-width=".6"/><path d="m8.2 12.2 2.6 2.7 5.2-5.4" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`:t=='e'?`<span class="ebadges" title="Elite member perk (not identity verified)" aria-label="Elite member perk (not identity verified)">${bd('et')}</span>`:'';
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const cleanCtrl=s=>String(s??'').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,'');
const safeUrl=u=>{const s=String(u||'').trim();if(!s||/[\s<>'"]/.test(s))return'';try{const x=new URL(s);return(x.protocol==='https:'||x.protocol==='http:')?x.href:''}catch(e){return''}};
const safeMediaUrl=u=>{const s=String(u||'').trim();if(!s||/[\s<>'"()\\]/.test(s))return'';try{const x=new URL(s);if(x.protocol==='blob:'&&x.origin===location.origin)return x.href;return x.protocol==='https:'?x.href:''}catch(e){return''}};
const safeImgPath=p=>{const s=String(p||'').trim();return /^[0-9a-f-]{8,64}\/[A-Za-z0-9_.-]+$/.test(s)&&!s.includes('..')?s:''};
const shuffle=a=>{const b=[...(a||[])];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
const jf=async u=>{const r=await fetch(u);if(!r.ok)throw Error('HTTP '+r.status);return r.json()};
const wpg=g=>(g&&g.content_urls&&(g.content_urls.mobile&&g.content_urls.mobile.page||g.content_urls.desktop&&g.content_urls.desktop.page))||(g&&g.title?'https://en.wikipedia.org/wiki/'+encodeURIComponent(String(g.title).replace(/ /g,'_')):'');
const ago=t=>{const m=Math.max(1,Math.round((Date.now()-new Date(t))/6e4));return m<60?m+'m':m<1440?Math.round(m/60)+'h':Math.round(m/1440)+'d'};
const hrsLeft=iso=>{const ms=new Date(iso).getTime()-Date.now();if(ms<=0)return'0m';const h=Math.floor(ms/36e5),m=Math.max(1,Math.ceil((ms%36e5)/6e4));return h>0?`${h}h ${m%60}m`:`${m}m`};
const toast=m=>{const t=$('#ts');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),Math.max(3000,m.length*70))};
const imgUrl=p=>{const sp=safeImgPath(p);return sp?sb.storage.from('images').getPublicUrl(sp).data.publicUrl:''};
const av=(n,u,h,fnd)=>{const d=h?` data-a="user" data-id="${esc(h)}"`:'',url=u?imgUrl(u):'',c='av'+(fnd?' fnd':'');return url?`<div class="${c}"${d}><img src="${esc(url)}" alt=""></div>`:`<div class="${c}"${d}>${esc((n||'?')[0].toUpperCase())}</div>`};
const badge=p=>(p.is_legendary?bd('g'):'')+(p.is_elite?bd('e'):'');
const nameCell=p=>`<b class="${p.is_elite?'glow':''}" data-a="user" data-id="${esc(p.handle)}">${esc(p.name)}</b>${badge(p)}`;
let me=null,V='home',T='fy',OP=null,IMG=null,IMG_META=null,IMG_PV_URL=null,ALLOW_DL=true,POST_SENS=false,QUOTA=null,AUTH_EMAIL='',OAUTH_ERR='',DEL_BZ=false,U=null,PR=null,POSTS=[],LK=new Set(),FOL=new Set(),REQ_OUT=new Set(),FREQ=[],FREQ_LD=false,NTAB='all',SUG=[],TOP=[],CM={},PAGE=20,MORE=false,LD=false,DET=null,PREV=null,LBO=false,BZ=false,LIST=[],LT='',SQV='',SR=[],CNT={fr:0,fg:0,lk:0,vw:0},BM=new Set(),PS=[],NT=null,UNR=0,UNR_CHAT=0,CHATS=null,DM_CONV=null,DM_PARTNER=null,DM_MSGS=[],DM_SEEN=new Set(),DM_NEW_IDS=new Set(),DM_MORE=false,DM_LD=false,DM_ALLOW=true,DM_BLOCKED=false,DM_REASON='',DM_SENDING=false,DM_TEXT='',DM_QUOTA=null,DM_EDIT_ID=null,DM_REPLY=null,DM_STREAK=null,DM_STK_BZ=false,DM_REC=null,DM_AUDIO=null,DM_VOICE_URLS={},DM_RATE_UNTIL=0,DM_RATE_TMR=null,CT_URLS={},CT_DRAFT=null,OFF=0,DIRTY=false,RP=new Set(),HOT=[],HPOOL=[],HLD=false,HDEAD=false,HNEWS=[],HOT_QUOTA=null,tvLast=0,HIO=null,SQT='p',SQD=false,SP=[],SQ_TERMS=[],SQ_LD=false,CLK=new Set(),RC=null,UPUSH=false,VSENT=new Set(),WARN=0,RT=null,QT=null,SUBV=['post','list','edit','search','bms','notif','settings','acct','disp','hkw','cmod','safety','chats','dm','mod','privacy','terms','retention'],EDIT_INT=new Set(),DTAB='int',DISC=[],DISC_OFF=0,DISC_MORE=false,DISC_LD=false,DPEOPLE=[],DPEOPLE_LD=false,DQV='',DSR=[],DSR_OFF=0,DSR_MORE=false,DSR_LD=false,D_ERR='',SEEN_SENT=new Set(),SEEN_Q=new Set(),SEEN_TMR=null,FEED_IO=null,FEED_READY=false,HKW=[],MUTES=new Set(),BLOCKS=new Set(),EXPANDED=new Set(),REV_KW=new Set(),REV_SENS=new Set(),STAB='m',SAFETY_M=[],SAFETY_B=[],SAFETY_LD=false,REP_TGT=null,REP_REASON='',MOD_SECTION='reports',MOD_TAB='pending',MOD_LIST=[],MOD_LD=false,MOD_ERR='',ELT_TAB='wallet',ELT_ST=null,ELT_LD=false,ELT_ERR='',ELT_BZ=false,LB_MONTH='cur',LB_LIST=[],LB_LD=false,LB_ERR='',ELT_APP_TAB='pending',ELT_APPS=[],ELT_APP_LD=false,ELT_APP_ERR='',MY_STREAK=null,PR_STREAK=null,RESTORE_BZ=false,CROP=null,SHARE_P=null;
const G_ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.2 0-5.9-2.1-6.8-5H1.2v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.2 14.2A7.2 7.2 0 0 1 4.8 12c0-.8.1-1.5.4-2.2V6.7H1.2A12 12 0 0 0 0 12c0 1.9.5 3.8 1.2 5.3l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A11.9 11.9 0 0 0 12 0 12 12 0 0 0 1.2 6.7l4 3.1c.9-2.9 3.6-5 6.8-5z"/></svg>';
function readOAuthErr(){try{const qs=new URLSearchParams(location.search),hs=new URLSearchParams((location.hash||'').replace(/^#/,''));const msg=qs.get('error_description')||hs.get('error_description')||qs.get('error')||hs.get('error');if(msg){OAUTH_ERR=msg.replace(/\+/g,' ').trim();qs.delete('error');qs.delete('error_description');qs.delete('error_code');history.replaceState(history.state,'',location.pathname+(qs.toString()?'?'+qs.toString():''))}}catch(e){}}
readOAuthErr();

// ---------- text & views ----------
const PREVIEW_MAX=380;
const escRx=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function kwRegex(){const ws=[...new Set(HKW.map(k=>String(k.keyword||'').trim().replace(/\s+/g,' ')).filter(Boolean))].sort((a,b)=>b.length-a.length);if(!ws.length)return null;return new RegExp(ws.map(w=>w.split(' ').map(escRx).join('\\s+')).join('|'),'gi')}
function blurText(s,scope){const txt=String(s??'');if(!txt)return'';const rx=kwRegex();if(!rx)return esc(txt);let out='',last=0,n=0,m;while((m=rx.exec(txt))!==null){const st=m.index,val=m[0],en=st+val.length;if(!val){rx.lastIndex=st+1;continue}const preOk=!/^[A-Za-z0-9_]/.test(val)||st===0||!/[A-Za-z0-9_]/.test(txt[st-1]);const postOk=!/[A-Za-z0-9_]$/.test(val)||en===txt.length||!/[A-Za-z0-9_]/.test(txt[en]);if(!preOk||!postOk){rx.lastIndex=st+1;continue}if(st>last)out+=esc(txt.slice(last,st));const id=scope+':'+(n++),rev=REV_KW.has(id);out+=`<button type="button" class="kwblur${rev?' rev':''}" data-a="revkw" data-id="${esc(id)}" aria-label="${rev?esc(val):'Hidden keyword, tap to reveal'}">${esc(val)}</button>`;last=en}if(last<txt.length)out+=esc(txt.slice(last));return out}
function previewSplit(s,max=PREVIEW_MAX){const t=String(s??'');if(t.length<=max)return{short:t,long:false};let cut=t.slice(0,max);const ws=Math.max(cut.lastIndexOf(' '),cut.lastIndexOf('\n'),cut.lastIndexOf('\t'));if(ws>Math.floor(max*0.55))cut=cut.slice(0,ws);return{short:cut.replace(/\s+$/,'')+'…',long:true}}
function renderPostBody(text,key,full,openAction,openId){const raw=String(text??'');if(!raw)return'';const k=String(key),sp=full?{short:raw,long:false}:previewSplit(raw,PREVIEW_MAX),exp=full||EXPANDED.has(k),shown=exp?raw:sp.short,oa=openAction?` data-a="${openAction}" data-id="${esc(String(openId??key))}"`:'';return`<div class="ptxt" data-k="${esc(k)}"><p class="pbody"${oa}>${blurText(shown,'b'+k)}</p>${sp.long?`<button type="button" class="pmore" data-a="pmore" data-id="${esc(k)}">${exp?'Show Less':'Show More'}</button>`:''}</div>`}
const sk=()=>Array(4).fill('<article class="card"><div class="av sk-b"></div><div class="bdy"><div class="sk-l w40"></div><div class="sk-l"></div><div class="sk-l w70"></div></div></article>').join('');
function queueSeen(id){id=+id;if(!id||!me||SEEN_SENT.has(id)||SEEN_Q.has(id))return;SEEN_Q.add(id);if(SEEN_Q.size>=20){flushSeen();return}clearTimeout(SEEN_TMR);SEEN_TMR=setTimeout(flushSeen,800)}
function flushSeen(){clearTimeout(SEEN_TMR);if(!me||!SEEN_Q.size)return;const ids=[...SEEN_Q].slice(0,60);ids.forEach(i=>{SEEN_Q.delete(i);SEEN_SENT.add(i)});sb.rpc('record_seen_posts',{ids}).then(({error})=>{if(error)ids.forEach(i=>SEEN_SENT.delete(i))},()=>{ids.forEach(i=>SEEN_SENT.delete(i))})}
function watchFeed(){if(FEED_IO)FEED_IO.disconnect();if(V!='home'||T!='fy'||!me||!FEED_READY||!POSTS.length)return;if(typeof IntersectionObserver=='undefined'){POSTS.slice(0,10).forEach(p=>queueSeen(p.id));return}if(!FEED_IO)FEED_IO=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const pid=+e.target.dataset.pid;if(pid)queueSeen(pid);FEED_IO.unobserve(e.target)}})},{threshold:0.35});document.querySelectorAll('#app .card[data-pid]').forEach(el=>{const pid=+el.dataset.pid;if(pid&&!SEEN_SENT.has(pid))FEED_IO.observe(el)})}
const FREE_THEMES=new Set(['snow','midnight']);
const isFreeTheme=k=>FREE_THEMES.has(k);
const activeThemeKey=()=>me?(me.is_elite?(THEMES[me.theme]?me.theme:'snow'):(isFreeTheme(me.theme)?me.theme:'snow')):'snow';
const THEMES={
  snow:['Pure White',{bg:'#FFFFFF',sf:'#FFFFFF',s2:'#F3F5F7',ln:'#E2E8F0',tx:'#0F1419',mu:'#536471',ac:'#1D9BF0',as:'#EAF5FD'},'Crisp daylight default','light'],
  midnight:['Midnight',{bg:'#000000',sf:'#000000',s2:'#16181C',ln:'#2F3336',tx:'#E7E9EA',mu:'#71767B',ac:'#1D9BF0',as:'#0A1A2A'},'Pitch black dark','dark'],
  graphite:['Graphite',{bg:'#0E0F11',sf:'#0E0F11',s2:'#1B1D21',ln:'#2B2E34',tx:'#E7E9EA',mu:'#71767B',ac:'#9AA4B2',as:'#1E2128'},'Matte slate & steel','dark'],
  ocean:['Ocean',{bg:'#06121F',sf:'#06121F',s2:'#0E2236',ln:'#1C3A57',tx:'#E7E9EA',mu:'#71767B',ac:'#38BDF8',as:'#0B2A44'},'Abyssal navy & sky','dark'],
  emerald:['Emerald',{bg:'#04120D',sf:'#04120D',s2:'#0C241B',ln:'#1B4332',tx:'#E7E9EA',mu:'#71767B',ac:'#34D399',as:'#0A2E22'},'Forest obsidian & jade','dark'],
  rose:['Rose',{bg:'#14070C',sf:'#14070C',s2:'#2A0F19',ln:'#4A1D2C',tx:'#E7E9EA',mu:'#71767B',ac:'#FB7185',as:'#3A1220'},'Velvet burgundy & coral','dark'],
  gold:['Gold',{bg:'#0D0A04',sf:'#0D0A04',s2:'#1E1707',ln:'#3A2E10',tx:'#E7E9EA',mu:'#71767B',ac:'#E2B33C',as:'#2A200A'},'Gilded obsidian & amber','dark'],
  amethyst:['Amethyst',{bg:'#0E0717',sf:'#0E0717',s2:'#1D1130',ln:'#382357',tx:'#E7E9EA',mu:'#71767B',ac:'#A855F7',as:'#291544'},'Nocturnal plum & violet','dark']
};
const applyTheme=k=>{const key=THEMES[k]?k:'snow',entry=THEMES[key],t=entry[1],scheme=entry[3]||'dark',r=document.documentElement;for(const x in t)r.style.setProperty('--'+x,t[x]);r.style.colorScheme=scheme;r.dataset.theme=key;const mc=document.querySelector('meta[name="theme-color"]');if(mc)mc.setAttribute('content',t.bg)};
const NK={follow:'followed you',follow_request:'requested to follow you',follow_accept:'accepted your follow request',like:'liked your post',reply:'replied to your post',repost:'reposted your post',quote:'quoted your post',comment_like:'liked your comment',comment_reply:'replied to your comment'};
const notifRow=n=>{const sys=n.kind=='report_submitted'||n.kind=='mod_removed'||n.kind=='mod_warning'||n.kind=='elite_notice';const isUserTap=n.kind=='follow'||n.kind=='follow_request'||n.kind=='follow_accept';const tap=sys?'':` data-a="${isUserTap?'user':'opn'}" data-id="${isUserTap?esc(n.a.handle):n.post_id}"`;const body=n.kind=='report_submitted'?`<b>Report submitted</b>${n.note?`<div class="ntnote">${esc(n.note)}</div>`:''}`:n.kind=='mod_removed'?`<b>Content removed by moderation</b>${n.note?`<div class="ntnote">${esc(n.note)}</div>`:''}`:n.kind=='mod_warning'?`<b>Account moderation notice</b>${n.note?`<div class="ntnote">${esc(n.note)}</div>`:''}`:n.kind=='elite_notice'?`<b>NYXORA Elite Update</b>${n.note?`<div class="ntnote">${esc(n.note)}</div>`:''}`:`<b class="${n.a.is_elite?'glow':''}">${esc(n.a.name||'Someone')}</b>${badge(n.a)} ${NK[n.kind]||''}`;return`<div class="row ntr ${n.is_read?'':'unr'}" style="padding:12px 16px"${tap}>${n.kind=='elite_notice'?`<div class="av">${bd('et')}</div>`:sys?`<div class="av">${I.flag}</div>`:av(n.a.name,n.a.avatar_url,null,n.a.is_founder_elite)}<div class="g">${body}<div class="mu sm">${ago(n.created_at)}</div></div></div>`};
const freqRow=r=>`<div class="freqrow">${av(r.name,r.avatar_url,r.handle,r.is_founder_elite)}<div class="g"><div class="hd">${nameCell(r)}<span class="mu sm">@${esc(r.handle)}</span></div>${r.bio?`<p class="sm mu">${esc(r.bio)}</p>`:''}<div class="mu sm">Requested ${ago(r.created_at)}</div><div class="freqacts"><button type="button" class="btn pri sm" data-a="freqact" data-id="accept:${esc(r.requester)}">Accept</button><button type="button" class="btn sm" data-a="freqact" data-id="decline:${esc(r.requester)}">Decline</button></div></div></div>`;
const notifV=()=>`<div class="tabs"><button class="${NTAB=='all'?'on':''}" data-a="ntab" data-id="all">All</button><button class="${NTAB=='followers'?'on':''}" data-a="ntab" data-id="followers">Followers${FREQ.length?' ('+FREQ.length+')':''}</button></div>`+(NTAB=='followers'?`<div class="ntnotice">Approve or decline incoming follow requests when your account is private.</div>`+(FREQ_LD&&!FREQ.length?sk():FREQ.length?FREQ.map(freqRow).join(''):'<p class="empty">No pending follow requests.</p>'):`<div class="ntnotice">Notifications are automatically deleted after 90 days.</div>`+(NT?(NT.length?NT.map(notifRow).join(''):'<p class="empty">No notifications yet.</p>'):sk()));
const tid=p=>p.target_id||p.id;
const isSub=()=>SUBV.includes(V)||(V=='user'&&UPUSH);
const embed=p=>{if(p.quote_of&&!p.o_handle)return'<div class="qt"><span class="mu sm">Quoted post unavailable</span></div>';const oie=!!p.o_image_expired,oip=oie?null:p.o_image_path,odl=p.o_allow_download!==false;return`<div class="qt" data-a="opn" data-id="${p.quote_of}"><div class="hd">${av(p.o_name,p.o_avatar_url,null,p.o_is_founder_elite)}<b class="${p.o_is_elite?'glow':''}">${esc(p.o_name||'Unavailable')}</b>${(p.o_is_legendary?bd('g'):'')+(p.o_is_elite?bd('e'):'')}<span class="mu">@${esc(p.o_handle)}</span>${p.o_edited_at?'<span class="edtag">· Edited</span>':''}</div>${renderPostBody(p.o_body,'q'+p.id,V=='post')}${oie?'<div class="exp"><b>Image expired</b><span>Post images expire 30 days after upload.</span></div>':oip?`<img class="${odl?'':'nodl'}" loading="lazy" src="${imgUrl(oip)}" alt="Quoted post image" data-a="zoom" data-id="${odl?1:0}:${esc(oip)}">${odl?'':'<div class="dlnote">Downloads disabled by author · Screenshots cannot always be prevented</div>'}`:''}</div>`};
const qprev=()=>`<div class="qt"><div class="hd">${av(QT.name,QT.avatar_url,null,QT.is_founder_elite)}<b>${esc(QT.name)}</b><span class="mu">@${esc(QT.handle)}</span></div><p class="pbody">${blurText(QT.body,'qp')}</p></div>`;
function trackViews(rows){const ids=[...new Set(rows.map(tid))].filter(i=>!VSENT.has(i)).slice(0,60);if(!ids.length)return;ids.forEach(i=>VSENT.add(i));sb.rpc('record_post_views',{ids}).then(()=>{},()=>{})}
const hideSplash=()=>{const s=$('#splash');if(s){s.classList.add('out');setTimeout(()=>s.remove(),450)}};setTimeout(hideSplash,10000);
function subRT(){if(RT||!me)return;RT=sb.channel('n-'+me.id).on('postgres_changes',{event:'INSERT',schema:'public',table:'notifications',filter:'recipient=eq.'+me.id},()=>{UNR++;updBell();loadFollowRequests();if(V=='notif')loadNotif().then(paint)}).subscribe()}
// ---------- private messaging service (modular transport ready for future Workers/DO) ----------
const DM_SVC=(()=>{
let inboxCh=null,inboxUid=null,dmCh=null,dmTopic=null;
const convId=(a,b)=>a&&b&&a!==b?(String(a)<String(b)?a+'_'+b:b+'_'+a):null;
async function syncAuth(){try{const {data:{session}}=await sb.auth.getSession();if(session&&session.access_token)await sb.realtime.setAuth(session.access_token)}catch(e){}}
async function connectInbox(uid,onPing,onReady){
  if(!uid)return;
  if(inboxCh&&inboxUid===uid)return;
  if(inboxCh){sb.removeChannel(inboxCh);inboxCh=null}
  inboxUid=uid;await syncAuth();
  inboxCh=sb.channel('inbox:'+uid,{config:{private:true,broadcast:{self:false}}})
    .on('broadcast',{event:'dm:msg'},({payload})=>onPing&&onPing({...(payload||{}),kind:'msg'}))
    .on('broadcast',{event:'dm:edit'},({payload})=>onPing&&onPing({...(payload||{}),kind:'edit'}))
    .subscribe(st=>{if(st=='SUBSCRIBED'&&onReady)onReady()});
}
async function connectThread(cid,onPing,onReady,onEdit){
  if(!cid)return;
  const topic='dm:'+cid;
  if(dmCh&&dmTopic===topic)return;
  disconnectThread();dmTopic=topic;await syncAuth();
  dmCh=sb.channel(topic,{config:{private:true,broadcast:{self:false}}})
    .on('broadcast',{event:'dm:msg'},({payload})=>onPing&&onPing(payload))
    .on('broadcast',{event:'dm:edit'},({payload})=>onEdit&&onEdit(payload))
    .subscribe(st=>{if(st=='SUBSCRIBED'&&onReady)onReady()});
}
function disconnectThread(){if(dmCh){sb.removeChannel(dmCh);dmCh=null}dmTopic=null}
function disconnectAll(){disconnectThread();if(inboxCh){sb.removeChannel(inboxCh);inboxCh=null}inboxUid=null}
async function fetchUnreadTotal(){const {data,error}=await sb.rpc('total_unread_dms');return error?null:+data||0}
async function fetchQuota(){const {data,error}=await sb.rpc('dm_quota_status');if(error)return null;return Array.isArray(data)?data[0]:data}
async function fetchConversations(){const {data,error}=await sb.rpc('list_conversations',{p_lim:50});if(error)throw Error(error.message);return data||[]}
async function fetchMessages(cid,opts={}){const {data,error}=await sb.rpc('get_dm_messages',{p_conv_id:cid,p_after_id:opts.afterId||0,p_before_id:opts.beforeId||0,p_lim:opts.lim||40});if(error)throw Error(error.message);return data||[]}
async function fetchOne(msgId){const {data,error}=await sb.rpc('get_dm_message',{p_msg_id:msgId});if(error)return null;return Array.isArray(data)?data[0]:data}
async function fetchEdits(cid,minId,maxId){const {data,error}=await sb.rpc('get_dm_edits',{p_conv_id:cid,p_min_id:minId,p_max_id:maxId});return error?[]:(data||[])}
async function markRead(cid,upToId){const {data}=await sb.rpc('mark_dm_read',{p_conv_id:cid,p_up_to_id:upToId||null});return +data||0}
async function checkPolicy(target){const {data,error}=await sb.rpc('message_policy_status',{target});if(error)throw Error(error.message);return Array.isArray(data)?data[0]:data}
async function send(target,body,opts={}){const {data,error}=await sb.rpc('send_dm',{target,p_body:body||'',p_reply_to_id:opts.replyToId||null,p_msg_type:opts.msgType||'text',p_voice_path:opts.voicePath||null,p_voice_duration_sec:opts.voiceDurationSec||null});if(error)throw Error(error.message);return Array.isArray(data)?data[0]:data}
async function edit(msgId,body){const {data,error}=await sb.rpc('edit_dm',{p_msg_id:msgId,p_body:body});if(error)throw Error(error.message);return Array.isArray(data)?data[0]:data}
async function delMsg(msgId,mode){const {data,error}=await sb.rpc('delete_dm_message',{p_msg_id:msgId,p_mode:mode||'me'});if(error)throw Error(error.message);return Array.isArray(data)?data[0]:data}
async function delContact(cid){const {error}=await sb.rpc('delete_dm_contact',{p_conv_id:cid});if(error)throw Error(error.message);return true}
async function ensureConv(target){const {data,error}=await sb.rpc('ensure_dm_conversation',{target});if(error)throw Error(error.message);return data}
async function fetchStreak(cid){const {data,error}=await sb.rpc('get_chat_streak',{p_conv_id:cid});if(error)return null;return Array.isArray(data)?data[0]:data}
async function restoreStreak(cid){const {data,error}=await sb.rpc('restore_chat_streak',{p_conv_id:cid});if(error)throw Error(error.message);return Array.isArray(data)?data[0]:data}
async function voiceUrl(path){if(!path)return'';const c=DM_VOICE_URLS[path];if(c&&c.exp>Date.now()+60000)return c.url;const {data,error}=await sb.storage.from('dm_voice').createSignedUrl(path,3600);if(error||!data||!data.signedUrl)throw Error((error&&error.message)||'Voice clip unavailable.');DM_VOICE_URLS[path]={url:data.signedUrl,exp:Date.now()+3500000};return data.signedUrl}
async function removeVoices(paths){if(!paths||!paths.length)return;await sb.storage.from('dm_voice').remove(paths).catch(()=>{})}
async function sendInboxEvent(targetId,event,payload){
  if(!targetId)return;
  await syncAuth();
  const out=sb.channel('inbox:'+targetId,{config:{private:true,broadcast:{self:false}}});
  let done=false;const fin=()=>{if(done)return;done=true;sb.removeChannel(out)};
  const tmr=setTimeout(fin,4000);
  out.subscribe(async st=>{if(st=='SUBSCRIBED'){clearTimeout(tmr);try{await out.send({type:'broadcast',event,payload})}catch(e){}fin()}else if(st=='CHANNEL_ERROR'||st=='TIMED_OUT'||st=='CLOSED'){clearTimeout(tmr);fin()}});
}
async function broadcastMsg(targetId,msg){
  if(!msg)return;
  const payload={id:msg.id,conversation_id:msg.conversation_id,sender_id:msg.sender_id,created_at:msg.created_at};
  if(dmCh&&dmTopic==='dm:'+msg.conversation_id)dmCh.send({type:'broadcast',event:'dm:msg',payload}).catch(()=>{});
  if(targetId)sendInboxEvent(targetId,'dm:msg',payload);
}
async function broadcastEdit(targetId,msg){
  if(!msg)return;
  const payload={id:msg.id,conversation_id:msg.conversation_id,edited_at:msg.edited_at||msg.deleted_for_everyone_at||new Date().toISOString()};
  if(dmCh&&dmTopic==='dm:'+msg.conversation_id)dmCh.send({type:'broadcast',event:'dm:edit',payload}).catch(()=>{});
  if(targetId)sendInboxEvent(targetId,'dm:edit',payload);
}
return{convId,syncAuth,connectInbox,connectThread,disconnectThread,disconnectAll,fetchUnreadTotal,fetchQuota,fetchConversations,fetchMessages,fetchOne,fetchEdits,markRead,checkPolicy,send,edit,delMsg,delContact,ensureConv,fetchStreak,restoreStreak,voiceUrl,removeVoices,broadcastMsg,broadcastEdit};
})();
function updChatBadge(){const b=$('.hchat');if(b)b.innerHTML=I.chat+(UNR_CHAT?`<i class="nd">${UNR_CHAT>9?'9+':UNR_CHAT}</i>`:'')}
async function syncChatUnread(){if(!me)return;const n=await DM_SVC.fetchUnreadTotal();if(n!==null){UNR_CHAT=n;updChatBadge()}}
async function loadChats(quiet){if(!me)return;if(!quiet&&V=='chats')paint();try{const rows=await DM_SVC.fetchConversations();CHATS=rows;UNR_CHAT=CHATS.reduce((s,c)=>s+(c.is_blocked||BLOCKS.has(c.other_id)?0:+c.unread_count||0),0);updChatBadge();if(V=='chats')paint()}catch(e){if(!quiet)toast(e.message||'Could not load conversations.')}}
const dmTime=t=>new Date(t).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
const fmtDur=s=>{const n=Math.max(0,Math.round(+s||0)),m=Math.floor(n/60),r=n%60;return m+':'+String(r).padStart(2,'0')};
const DM_EDIT_MS=3600000;
const canEditDm=m=>!!(m&&me&&m.sender_id==me.id&&m.msg_type!='voice'&&!m.deleted_for_everyone_at&&(Date.now()-new Date(m.created_at).getTime()<=DM_EDIT_MS)&&(!m.expires_at||new Date(m.expires_at).getTime()>Date.now()));
const dmRateRem=()=>Math.max(0,Math.ceil((DM_RATE_UNTIL-Date.now())/1000));
function dmRateTxt(){const s=dmRateRem();return s>0?`You sent 8 messages in 30 seconds. Please wait ${s}s before sending more.`:''}
function dmQuotaTxt(){if(!me)return'';const vl=DM_QUOTA&&DM_QUOTA.voice_daily_limit?DM_QUOTA.voice_daily_limit:(me.is_elite?30:10),vr=DM_QUOTA&&DM_QUOTA.voice_remaining!==undefined?DM_QUOTA.voice_remaining:vl;if(DM_QUOTA){if(DM_QUOTA.remaining<=0)return`Daily message limit reached (${DM_QUOTA.used_today}/${DM_QUOTA.daily_limit}). Resets at 00:00 UTC.`;return`${DM_QUOTA.remaining}/${DM_QUOTA.daily_limit} msgs · ${vr}/${vl} voice left today`}return`${me.is_elite?700:300} msgs · ${vl} voice/day · Resets 00:00 UTC`}
function updDmRateUI(){const r=$('#dmrate'),txt=dmRateTxt();if(r){r.textContent=txt;r.hidden=!txt}updDmQuotaUI()}
function startDmRateWait(sec){DM_RATE_UNTIL=Date.now()+Math.max(1,sec||30)*1000;clearInterval(DM_RATE_TMR);updDmRateUI();DM_RATE_TMR=setInterval(()=>{updDmRateUI();if(dmRateRem()<=0){clearInterval(DM_RATE_TMR);DM_RATE_TMR=null}},500)}
function updDmQuotaUI(){const q=$('#dmq'),i=$('#dmi'),b=$('#dmsend'),mc=$('#dmmic');const lim=!!(DM_QUOTA&&DM_QUOTA.remaining<=0&&!DM_EDIT_ID),vlim=!!(DM_QUOTA&&DM_QUOTA.voice_remaining<=0),cool=dmRateRem()>0&&!DM_EDIT_ID;if(q){q.textContent=dmQuotaTxt();q.classList.toggle('lim',!!(DM_QUOTA&&DM_QUOTA.remaining<=0))}if(i)i.disabled=lim||cool||DM_SENDING;if(b)b.disabled=lim||cool||DM_SENDING;if(mc)mc.disabled=lim||vlim||cool||DM_SENDING||!!DM_EDIT_ID}
async function loadDmQuota(){if(!me)return null;const row=await DM_SVC.fetchQuota();if(row){DM_QUOTA={daily_limit:+row.daily_limit,used_today:+row.used_today,remaining:+row.remaining,resets_at:row.resets_at,voice_daily_limit:+(row.voice_daily_limit||(me.is_elite?30:10)),voice_used_today:+(row.voice_used_today||0),voice_remaining:row.voice_remaining!==undefined?+row.voice_remaining:(me.is_elite?30:10)};updDmQuotaUI()}return DM_QUOTA}
async function loadChatStreak(cid){if(!me||!cid||DM_BLOCKED)return null;const row=await DM_SVC.fetchStreak(cid);if(V=='dm'&&DM_CONV===cid&&row){const prev=JSON.stringify(DM_STREAK);DM_STREAK=row;if(prev!==JSON.stringify(row))paint()}return row}
function stopDmAudio(){if(DM_AUDIO){try{DM_AUDIO.audio.pause();DM_AUDIO.audio.src=''}catch(e){}DM_AUDIO=null}}
function cancelDmRec(){if(!DM_REC)return;const r=DM_REC;DM_REC=null;r.cancelled=true;clearInterval(r.timer);try{if(r.mr&&r.mr.state!='inactive')r.mr.stop()}catch(e){}try{r.stream&&r.stream.getTracks().forEach(t=>t.stop())}catch(e){}if(V=='dm')paint()}
function setDmReply(mid){const m=DM_MSGS.find(x=>x.id==+mid);if(!m||m.deleted_for_everyone_at||!DM_ALLOW||DM_BLOCKED)return;DM_EDIT_ID=null;DM_REPLY={id:m.id,sender_id:m.sender_id,name:m.sender_id==me.id?'You':(DM_PARTNER?DM_PARTNER.name:'User'),body:m.msg_type=='voice'?`Voice message (${fmtDur(m.voice_duration_sec)})`:m.body,msg_type:m.msg_type,voice_duration_sec:m.voice_duration_sec};paint();const i=$('#dmi');if(i&&!i.disabled)i.focus()}
function dmMsgSnippet(m){if(!m)return'';if(m.deleted_for_everyone_at)return'This message was deleted';if(m.msg_type=='voice')return`Voice message (${fmtDur(m.voice_duration_sec)})`;return m.body||''}
function markNewDm(id){if(!id)return;DM_NEW_IDS.add(id);setTimeout(()=>DM_NEW_IDS.delete(id),350)}
function mergeDmMsgs(rows){let added=0,upd=0;rows.forEach(m=>{if(!m)return;if(DM_SEEN.has(m.id)){const cur=DM_MSGS.find(x=>x.id==m.id);if(cur&&(cur.body!==m.body||cur.edited_at!==m.edited_at||cur.deleted_for_everyone_at!==m.deleted_for_everyone_at||cur.voice_path!==m.voice_path)){cur.body=m.body;cur.edited_at=m.edited_at;cur.deleted_for_everyone_at=m.deleted_for_everyone_at;cur.voice_path=m.voice_path;cur.voice_duration_sec=m.voice_duration_sec;if(cur.deleted_for_everyone_at&&DM_AUDIO&&DM_AUDIO.id==cur.id)stopDmAudio();upd++}return}DM_SEEN.add(m.id);DM_MSGS.push(m);added++});if(added)DM_MSGS.sort((a,b)=>a.id-b.id);return added+upd}
function dmVoiceHtml(m){const active=DM_AUDIO&&DM_AUDIO.id==m.id,playing=active&&DM_AUDIO.playing,dur=Math.max(1,m.voice_duration_sec||1),pct=active&&DM_AUDIO.dur>0?Math.min(100,Math.round((DM_AUDIO.cur/DM_AUDIO.dur)*100)):0,lbl=active&&DM_AUDIO.cur>0?`${fmtDur(DM_AUDIO.cur)} / ${fmtDur(dur)}`:fmtDur(dur);return`<div class="dmvplay" data-vid="${m.id}"><button type="button" class="dmvbtn" data-a="dmplay" data-id="${m.id}" aria-label="${playing?'Pause voice message':'Play voice message'}">${playing?I.pause:I.play}</button><div class="dmvtrk"><div class="dmvbar"><i style="width:${pct}%"></i></div><span class="dmvdur">${lbl}</span></div></div>`}
function dmRowHtml(m){const mine=m.sender_id==me.id,del=!!m.deleted_for_everyone_at,rWho=m.reply_sender_id?(m.reply_sender_id==me.id?'You':(DM_PARTNER?DM_PARTNER.name:'User')):'',rTxt=m.reply_to_id?(m.reply_msg_type=='voice'?`Voice message (${fmtDur(m.reply_voice_duration_sec)})`:(m.reply_body||'Original message unavailable')):'';const qt=m.reply_to_id&&!del?`<button type="button" class="dmqt" data-a="dmjump" data-id="${m.reply_to_id}">${rWho?`<b>${esc(rWho)}</b>`:''}<span>${esc(rTxt)}</span></button>`:'';const inner=del?'This message was deleted':m.msg_type=='voice'?dmVoiceHtml(m):`<span>${blurText(m.body,'dm'+m.id)}</span>`;const opt=`<button type="button" class="dmactbtn" data-a="dmmsgopt" data-id="${m.id}" aria-label="Message options">${I.dots}</button>`;return`<div class="dmrow${mine?' me':''}${DM_NEW_IDS.has(m.id)?' new':''}" id="dm-m-${m.id}" data-mid="${m.id}">${mine?opt:''}<div class="dmb${mine?' me':''}${del?' del':''}">${qt}${inner}<span class="dmt">${!del&&m.edited_at?'Edited · ':''}${dmTime(m.created_at)}</span></div>${!mine?opt:''}</div>`}
function dmMsgsHtml(){const notice='<div class="dmnotice"><span>Messages &amp; voice clips expire after 7 days.</span><button type="button" data-a="dmpriv">Privacy info</button></div>';const stkBan=!DM_BLOCKED&&DM_STREAK&&DM_STREAK.can_restore?`<div class="dmstkban"><span>🔥 Lost <b>${DM_STREAK.lost_streak}-day</b> chat streak · ${hrsLeft(DM_STREAK.restore_expires_at)} left (${DM_STREAK.restores_left_month}/3 this month)</span><button type="button" class="btn sm pri" data-a="dmrstk"${DM_STK_BZ?' disabled':''}>${DM_STK_BZ?'Restoring…':'Restore'}</button></div>`:'';if(DM_BLOCKED)return notice+`<div class="blkbox" style="margin:8px 0"><b>Messaging blocked</b><p class="sm mu">${esc(DM_REASON||'You cannot read or send messages because one of you has blocked the other.')}</p></div>`;const top=DM_MORE?'<button class="btn sm" style="align-self:center;margin-bottom:6px" data-a="dmold">Load older messages</button>':'';return notice+stkBan+(DM_LD&&!DM_MSGS.length?sk():DM_MSGS.length?top+DM_MSGS.map(dmRowHtml).join(''):'<p class="empty">No messages yet. Swipe any message left to reply, or send a voice note.</p>')}
function updDmDom(scrollBottom){const box=$('#dmmsgs');if(!box)return;const near=scrollBottom||(innerHeight+scrollY>=document.body.scrollHeight-120);box.innerHTML=dmMsgsHtml();if(near)scrollTo(0,document.body.scrollHeight)}
async function syncDmEditMsg(payload){if(!me||V!='dm'||DM_BLOCKED||!payload||payload.conversation_id!==DM_CONV||!payload.id)return;const row=await DM_SVC.fetchOne(payload.id);if(!row||V!='dm'||DM_CONV!==row.conversation_id)return;if(mergeDmMsgs([row]))updDmDom(false);loadChats(true)}
async function catchUpDm(cid){if(!me||V!='dm'||DM_BLOCKED||DM_CONV!==cid)return;try{const last=DM_MSGS.length?DM_MSGS[DM_MSGS.length-1].id:0,minId=DM_MSGS.length?DM_MSGS[0].id:0,rows=await DM_SVC.fetchMessages(cid,{afterId:last,lim:50});if(V!='dm'||DM_CONV!==cid)return;if(last>0&&rows.length)rows.forEach(r=>markNewDm(r.id));let changed=mergeDmMsgs(rows);if(changed){const maxId=DM_MSGS[DM_MSGS.length-1].id;await DM_SVC.markRead(cid,maxId);syncChatUnread();loadChatStreak(cid)}if(minId&&last){const eds=await DM_SVC.fetchEdits(cid,minId,last);if(V!='dm'||DM_CONV!==cid)return;eds.forEach(e=>{const cur=DM_MSGS.find(x=>x.id==e.id);if(cur&&(cur.body!==e.body||cur.edited_at!==e.edited_at||cur.deleted_for_everyone_at!==e.deleted_for_everyone_at)){cur.body=e.body;cur.edited_at=e.edited_at;cur.deleted_for_everyone_at=e.deleted_for_everyone_at;cur.voice_path=e.voice_path;cur.voice_duration_sec=e.voice_duration_sec;if(cur.deleted_for_everyone_at&&DM_AUDIO&&DM_AUDIO.id==cur.id)stopDmAudio();changed++}})}if(changed)updDmDom(rows.length>0)}catch(e){}}
async function startDM(){if(!me)return;await DM_SVC.connectInbox(me.id,payload=>{if(V=='dm'&&payload&&payload.conversation_id===DM_CONV){if(payload.kind=='edit')syncDmEditMsg(payload);else catchUpDm(DM_CONV)}else if(V=='chats')loadChats(true);else if(!payload||payload.kind!=='edit')syncChatUnread()},()=>{syncChatUnread();if(V=='chats')loadChats(true);if(V=='dm'&&DM_CONV)catchUpDm(DM_CONV)})}

// ---------- chat themes & custom image wallpapers ----------
const CT_THEMES={
  default:{name:'Default',bg:'var(--bg)',out:'var(--ac)',inBg:'var(--s2)',inTx:'var(--tx)',sw:'var(--s2)',dot:'var(--ac)'},
  ocean:{name:'Ocean Breeze',bg:'linear-gradient(160deg,#082032 0%,#0F3460 55%,#13547A 100%)',out:'#0284C7',inBg:'rgba(15,23,42,.82)',inTx:'#F8FAFC',sw:'linear-gradient(135deg,#082032,#13547A)',dot:'#38BDF8'},
  emerald:{name:'Emerald Mist',bg:'linear-gradient(160deg,#052E23 0%,#0B4F3B 55%,#116D51 100%)',out:'#059669',inBg:'rgba(6,36,27,.84)',inTx:'#ECFDF5',sw:'linear-gradient(135deg,#052E23,#116D51)',dot:'#34D399'},
  sunset:{name:'Sunset Amber',bg:'linear-gradient(160deg,#2C1018 0%,#6B1D2F 55%,#9A3412 100%)',out:'#EA580C',inBg:'rgba(34,15,22,.84)',inTx:'#FFF7ED',sw:'linear-gradient(135deg,#2C1018,#9A3412)',dot:'#FB923C'},
  velvet:{name:'Midnight Velvet',bg:'linear-gradient(160deg,#120926 0%,#2E1065 55%,#4C1D95 100%)',out:'#7C3AED',inBg:'rgba(24,14,48,.84)',inTx:'#F5F3FF',sw:'linear-gradient(135deg,#120926,#4C1D95)',dot:'#A78BFA'},
  rose:{name:'Rose Quartz',bg:'linear-gradient(160deg,#2D0B18 0%,#5B1531 55%,#831843 100%)',out:'#E11D48',inBg:'rgba(38,11,22,.84)',inTx:'#FFF1F2',sw:'linear-gradient(135deg,#2D0B18,#831843)',dot:'#FB7185'}
};
const ctMetaKey=()=>me?'nyx_ct_'+me.id:'';
function cleanCtEntry(e){if(!e||typeof e!=='object')return null;const theme=CT_THEMES[e.theme]?e.theme:'default',dim=typeof e.dim==='number'&&isFinite(e.dim)?Math.max(0,Math.min(.75,e.dim)):0.35;return{theme,dim,hasImg:!!e.hasImg}}
function readCtMeta(){if(!me)return{global:null,chats:{}};try{const raw=JSON.parse(localStorage.getItem(ctMetaKey())||'null');const chats={};if(raw&&raw.chats&&typeof raw.chats==='object'){for(const [k,v] of Object.entries(raw.chats)){if(/^[0-9a-f_-]{6,80}$/i.test(k)){const c=cleanCtEntry(v);if(c)chats[k]=c}}}return{global:cleanCtEntry(raw&&raw.global),chats}}catch(e){return{global:null,chats:{}}}}
function writeCtMeta(m){if(!me)return;try{localStorage.setItem(ctMetaKey(),JSON.stringify(m))}catch(e){}}
let ctDbP=null;
function ctDb(){if(ctDbP)return ctDbP;if(typeof indexedDB=='undefined')return Promise.resolve(null);ctDbP=new Promise(res=>{try{const req=indexedDB.open('nyx_chat_walls',1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('walls'))req.result.createObjectStore('walls')};req.onsuccess=()=>res(req.result);req.onerror=()=>res(null)}catch(e){res(null)}});return ctDbP}
async function ctPutBlob(key,blob){const db=await ctDb();if(!db)return;return new Promise(res=>{try{const tx=db.transaction('walls','readwrite');tx.objectStore('walls').put(blob,key);tx.oncomplete=()=>res(true);tx.onerror=()=>res(false)}catch(e){res(false)}})}
async function ctGetBlob(key){const db=await ctDb();if(!db)return null;return new Promise(res=>{try{const tx=db.transaction('walls','readonly'),r=tx.objectStore('walls').get(key);r.onsuccess=()=>res(r.result||null);r.onerror=()=>res(null)}catch(e){res(null)}})}
async function ctDelBlob(key){const db=await ctDb();if(!db)return;return new Promise(res=>{try{const tx=db.transaction('walls','readwrite');tx.objectStore('walls').delete(key);tx.oncomplete=()=>res(true);tx.onerror=()=>res(false)}catch(e){res(false)}})}
function revokeChatUrls(){Object.keys(CT_URLS).forEach(k=>{if(CT_URLS[k]){try{URL.revokeObjectURL(CT_URLS[k])}catch(e){}}delete CT_URLS[k]})}
function resolveChatTheme(cid){
  const meta=readCtMeta(),hasChat=!!(cid&&meta.chats[cid]);
  const src=hasChat?meta.chats[cid]:(meta.global||null);
  const theme=src&&CT_THEMES[src.theme]?src.theme:'default';
  const dim=src&&typeof src.dim=='number'?Math.max(0,Math.min(.75,src.dim)):0.35;
  const hasImg=!!(src&&src.hasImg);
  const urlKey=hasImg&&me?(me.id+':'+(hasChat?cid:'global')):'';
  return{theme,dim,hasImg,urlKey,scope:hasChat?'chat':(meta.global?'global':'none'),wallUrl:urlKey?(CT_URLS[urlKey]||''):''};
}
async function ensureChatWallpaperUrl(cid){
  const r=resolveChatTheme(cid);
  if(!r.hasImg||!r.urlKey||CT_URLS[r.urlKey])return;
  const blob=await ctGetBlob(r.urlKey);
  if(!blob||!me)return;
  if(CT_URLS[r.urlKey])try{URL.revokeObjectURL(CT_URLS[r.urlKey])}catch(e){}
  CT_URLS[r.urlKey]=URL.createObjectURL(blob);
  if(V=='dm'&&DM_CONV===cid)paint();
}
async function compWall(file){
  checkImgFile(file);
  let bm;try{bm=await createImageBitmap(file)}catch(e){throw Error('Could not read that image. Try a JPG, PNG, or WebP file.')}
  try{const maxW=1280,maxH=1600,s=Math.min(1,maxW/bm.width,maxH/bm.height),c=document.createElement('canvas');c.width=Math.max(1,Math.round(bm.width*s));c.height=Math.max(1,Math.round(bm.height*s));c.getContext('2d').drawImage(bm,0,0,c.width,c.height);let b=await toB(c,'image/webp',.82);if(!b||b.type!='image/webp')b=await toB(c,'image/jpeg',.82);if(!b)throw Error('Could not process wallpaper image.');return b}finally{bm.close&&bm.close()}
}
function syncChatThemePreview(){
  if(!CT_DRAFT)return;
  const pv=$('#ctprev'),dimEl=$('#ctdimrow'),clrBtn=$('#ctclrimg'),t=CT_THEMES[CT_DRAFT.theme]||CT_THEMES.default;
  const imgUrlStr=safeMediaUrl(CT_DRAFT.previewUrl||'');
  if(pv){
    const dimLayer=pv.querySelector('.ctprevdim'),inB=pv.querySelector('.ctbubble.in'),outB=pv.querySelector('.ctbubble.out');
    if(imgUrlStr){pv.style.background='';pv.style.backgroundImage=`url('${imgUrlStr}')`}
    else{pv.style.backgroundImage='none';pv.style.background=t.bg}
    if(dimLayer){dimLayer.style.opacity=imgUrlStr?String(CT_DRAFT.dim):'0'}
    if(inB){inB.style.background=imgUrlStr?'rgba(18,22,28,.82)':t.inBg;inB.style.color=imgUrlStr?'#F8FAFC':t.inTx}
    if(outB){outB.style.background=t.out}
  }
  if(dimEl)dimEl.hidden=!imgUrlStr;
  if(clrBtn)clrBtn.hidden=!imgUrlStr;
  const dl=$('#ctdimval');if(dl)dl.textContent=Math.round(CT_DRAFT.dim*100)+'%';
  document.querySelectorAll('[data-a="ctpick"]').forEach(el=>el.classList.toggle('on',el.dataset.id===CT_DRAFT.theme));
}
async function openChatThemeSheet(){
  if(!DM_CONV||DM_BLOCKED)return;
  const cur=resolveChatTheme(DM_CONV);
  let draftBlob=null,previewUrl=cur.wallUrl||'';
  if(cur.hasImg&&!previewUrl&&cur.urlKey){
    draftBlob=await ctGetBlob(cur.urlKey);
    if(draftBlob)previewUrl=URL.createObjectURL(draftBlob);
  }else if(cur.hasImg&&cur.urlKey){
    draftBlob=await ctGetBlob(cur.urlKey);
  }
  CT_DRAFT={theme:cur.theme,dim:cur.dim,hasImg:!!(cur.hasImg&&previewUrl),blob:draftBlob,previewUrl,ownsUrl:!cur.wallUrl&&!!previewUrl};
  const sws=Object.entries(CT_THEMES).map(([k,t])=>`<button type="button" class="ctsw${CT_DRAFT.theme===k?' on':''}" data-a="ctpick" data-id="${k}"><div class="ctswbox" style="background:${t.sw}"><i style="background:${t.dot}"></i></div><span>${esc(t.name)}</span></button>`).join('');
  $('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>Chat Theme &amp; Wallpaper</b><button type="button" class="mu" data-a="close">Close</button></div><div class="ctprev" id="ctprev"><div class="ctprevdim"></div><div class="ctbubble in">Hey! How’s your day going?</div><div class="ctbubble out">Loving this clean new chat look ✨</div></div><div class="ctgrid">${sws}</div><div class="r" style="gap:8px;flex-wrap:wrap"><label class="btn sm" style="cursor:pointer;flex:1;text-align:center">${I.img} Custom wallpaper photo<input type="file" id="ctfile" accept="image/*" hidden></label><button type="button" class="btn sm" id="ctclrimg" data-a="ctclearimg"${CT_DRAFT.previewUrl?'':' hidden'}>Remove photo</button></div><div class="cropctl" id="ctdimrow"${CT_DRAFT.previewUrl?'':' hidden'}><span class="mu sm">Dim <b id="ctdimval">${Math.round(CT_DRAFT.dim*100)}%</b></span><input type="range" id="ctdim" min="0" max="0.75" step="0.05" value="${CT_DRAFT.dim}" aria-label="Wallpaper dim"></div><div class="ctacts"><button type="button" class="btn pri" data-a="ctapply" data-id="chat">Apply to this chat</button><button type="button" class="btn" data-a="ctapply" data-id="all">Apply to all chats</button></div><button type="button" class="btn sm" data-a="ctreset">Reset to default</button></div>`;
  $('#sh').classList.add('on');
  syncChatThemePreview();
}

async function openDmByTarget(target){
  if(!target||!me)return;
  if(target.id==me.id)return;
  stopDmAudio();cancelDmRec();
  const localBlk=BLOCKS.has(target.id);
  const st=await DM_SVC.checkPolicy(target.id);
  const isBlk=localBlk||!!(st&&st.is_blocked);
  if(!isBlk&&(!st||(!st.allowed&&!st.has_history)))return toast((st&&st.reason)||'Messaging is unavailable with this account.');
  let partner=isBlk?{id:target.id,handle:'',name:'Blocked',avatar_url:null,is_elite:false,is_legendary:false,is_founder_elite:false}:target;
  if(!isBlk&&(!partner.handle||!partner.name)){const {data}=await sb.from('profiles').select('id,handle,name,avatar_url,is_elite,is_legendary,is_founder_elite').eq('id',target.id).maybeSingle();if(!data)return toast('Profile not found.');partner=data}
  DM_SVC.disconnectThread();
  DM_CONV=(st&&st.conv_id)||DM_SVC.convId(me.id,partner.id);
  DM_PARTNER=partner;DM_BLOCKED=isBlk;DM_ALLOW=!isBlk&&!!(st&&st.allowed);DM_REASON=(st&&st.reason)||(isBlk?'Messaging is unavailable because one of you has blocked the other.':'');DM_MSGS=[];DM_SEEN=new Set();DM_NEW_IDS=new Set();DM_MORE=false;DM_LD=!isBlk;DM_SENDING=false;DM_TEXT='';DM_EDIT_ID=null;DM_REPLY=null;DM_STREAK=null;
  if(V!='dm')pushV();V='dm';scrollTo(0,0);paint();
  ensureChatWallpaperUrl(DM_CONV);
  if(DM_BLOCKED)return;
  try{
    const [rows,_,stk]=await Promise.all([DM_SVC.fetchMessages(DM_CONV,{lim:40}),loadDmQuota(),DM_SVC.fetchStreak(DM_CONV)]);
    if(V!='dm'||DM_CONV!==((st&&st.conv_id)||DM_SVC.convId(me.id,partner.id)))return;
    DM_STREAK=stk;mergeDmMsgs(rows);DM_MORE=rows.length==40;DM_LD=false;
    if(DM_MSGS.length)await DM_SVC.markRead(DM_CONV,DM_MSGS[DM_MSGS.length-1].id);
    if(CHATS){const c=CHATS.find(x=>x.conversation_id===DM_CONV);if(c)c.unread_count=0}
    syncChatUnread();
    await DM_SVC.connectThread(DM_CONV,()=>catchUpDm(DM_CONV),()=>catchUpDm(DM_CONV),payload=>syncDmEditMsg(payload));
    paint();scrollTo(0,document.body.scrollHeight);
    if(DM_ALLOW&&(!DM_QUOTA||DM_QUOTA.remaining>0)&&dmRateRem()<=0){const i=$('#dmi');if(i)i.focus()}
  }catch(e){DM_LD=false;paint();toast(e.message||'Could not load messages.')}
}
const chatRow=c=>{const blk=!!(c.is_blocked||BLOCKS.has(c.other_id));return`<div class="crowwrap${!blk&&c.unread_count>0?' unr':''}"><button type="button" class="crow" data-a="opendm" data-id="${esc(c.other_id)}">${blk?`<div class="av blk">${I.blk}</div>`:av(c.other_name,c.other_avatar_url,null,c.other_is_founder_elite)}<div class="bdy"><div class="cmeta"><div class="hd">${blk?'<b>Blocked</b>':`<b class="${c.other_is_elite?'glow':''}">${esc(c.other_name||'User')}</b>${badge({is_elite:c.other_is_elite,is_legendary:c.other_is_legendary})}${c.other_handle?`<span class="mu sm">@${esc(c.other_handle)}</span>`:''}`}</div>${!blk&&c.chat_streak>0?`<span class="cstk" title="Mutual chat streak">🔥 ${c.chat_streak}</span>`:''}<span class="ctime">${c.last_message_at?ago(c.last_message_at):''}</span></div><div class="cprev">${blk?'Messaging blocked':`${c.last_message_sender==me.id?'You: ':''}${esc(c.last_message_preview||'')}`}</div></div>${!blk&&c.unread_count>0?`<span class="cunr" aria-label="${c.unread_count} unread">${c.unread_count>99?'99+':c.unread_count}</span>`:''}</button><button type="button" class="crowmenu" data-a="chatmenu" data-id="${esc(c.other_id)}" aria-label="Chat options">${I.dots}</button></div>`};
const chatsV=()=>CHATS===null?sk():CHATS.length?`<div class="sl">${CHATS.map(chatRow).join('')}</div>`:`<div class="empty"><p>No conversations yet.</p><p class="sm mu" style="margin-top:6px">Open any profile or Discover People and tap Message to start a 1-on-1 chat.</p><button class="btn sm pri" style="margin-top:14px" data-a="nav" data-id="discover">Discover People</button></div>`;
const dmV=()=>{const ct=resolveChatTheme(DM_CONV),t=CT_THEMES[ct.theme]||CT_THEMES.default,wUrl=safeMediaUrl(ct.wallUrl),hasWall=!!(!DM_BLOCKED&&(ct.theme!=='default'||wUrl)),inBg=wUrl?'rgba(18,22,28,.82)':t.inBg,inTx=wUrl?'#F8FAFC':t.inTx,bgHtml=hasWall?`<div class="dmbg" style="${wUrl?`background-image:url('${esc(wUrl)}')`:`background:${t.bg}`}">${wUrl?`<div class="dmbgdim" style="opacity:${ct.dim}"></div>`:''}</div>`:'',wrapStyle=hasWall?` style="--dm-out:${t.out};--dm-inbg:${inBg};--dm-intx:${inTx}"`:'';if(DM_BLOCKED)return`<div class="dmwrap"><div id="dmmsgs" class="dmmsgs">${dmMsgsHtml()}</div><div class="dmlock">Messaging blocked · Reading and sending are disabled.</div></div>`;const atLim=!!(DM_QUOTA&&DM_QUOTA.remaining<=0),atVLim=!!(DM_QUOTA&&DM_QUOTA.voice_remaining<=0),rTxt=dmRateTxt(),cool=!!rTxt&&!DM_EDIT_ID;const dis=DM_SENDING||(atLim&&!DM_EDIT_ID)||cool,vdis=dis||atVLim||!!DM_EDIT_ID;const rBar=DM_REPLY&&!DM_EDIT_ID?`<div class="dmreplybar"><div class="dmreplytxt"><b>Replying to ${esc(DM_REPLY.name)}</b><span>${esc(DM_REPLY.body)}</span></div><button type="button" data-a="dmcancreply" aria-label="Cancel reply">✕</button></div>`:'';const recBar=DM_REC?`<div class="dmrec"><span class="dmrecdot" aria-hidden="true"></span><span class="dmrectime" id="dmrect">${fmtDur(DM_REC.sec)} / 0:30</span><div class="dmrecbar"><i id="dmrecb" style="width:${Math.min(100,Math.round((DM_REC.sec/30)*100))}%"></i></div><button type="button" class="btn sm dmrecbtn" data-a="dmreccanc" aria-label="Cancel recording">${I.trash}</button><button type="button" class="btn pri sm dmrecbtn" data-a="dmrecsend"${DM_REC.busy?' disabled':''}>Send</button></div>`:`<div class="dminr"><textarea id="dmi" placeholder="${cool?'Please wait before sending more…':atLim&&!DM_EDIT_ID?'Daily message limit reached':'Write a message…'}" maxlength="1000" rows="1"${dis?' disabled':''}>${esc(DM_TEXT)}</textarea>${DM_EDIT_ID?'':`<button type="button" class="dmmic" id="dmmic" data-a="dmrecstart" aria-label="Record voice message (up to 30s)" title="Voice message (max 30s)"${vdis?' disabled':''}>${I.mic}</button>`}<button class="btn pri sm" id="dmsend" data-a="dmsend"${dis?' disabled':''}>${DM_EDIT_ID?'Save':'Send'}</button></div>`;return`<div class="dmwrap${hasWall?' haswall':''}"${wrapStyle}>${bgHtml}<div id="dmmsgs" class="dmmsgs">${dmMsgsHtml()}</div>${DM_ALLOW?`<div class="dmin${hasWall?' haswall':''}">${DM_EDIT_ID?'<div class="dmeditbar"><span>Editing message</span><button type="button" data-a="dmcancedit">Cancel</button></div>':''}${rBar}<div class="dmrate" id="dmrate"${rTxt?'':' hidden'}>${esc(rTxt)}</div>${recBar}<div class="r"><span class="dmq${atLim?' lim':''}" id="dmq">${esc(dmQuotaTxt())}</span><span class="mu sm" id="dmct">${DM_TEXT.length}/1000</span></div></div>`:`<div class="dmlock">${esc(DM_REASON||'Replies are currently unavailable for this conversation.')}</div>`}</div>`};
const row2=(t,a,d)=>`<button class="srow" data-a="${a}"${d?` data-id="${d}"`:''}><span>${t}</span>${I.chev}</button>`;
const modMode=()=>me&&me.content_moderation=='off'?'off':'blur';
const modUnblurred=()=>!!(me&&me.show_sensitive_unblurred);
const modSummary=()=>modMode()=='off'?'Off (Hidden)':(modUnblurred()?'Show Sensitive':'Blur');
const setV=()=>`<div class="sl"><button class="srow" data-a="toggpriv" role="switch" aria-checked="${!!me.is_private}"><span><span style="display:block">Private account</span><span class="mu sm" style="display:block;margin-top:2px">When on, only approved followers see your posts and lists. Existing followers stay connected.</span></span><span class="swbtn${me.is_private?' on':''}"><i></i></span></button><button class="srow" data-a="toggdm" role="switch" aria-checked="${me.allow_first_message!==false}"><span><span style="display:block">Allow anyone to message me first</span><span class="mu sm" style="display:block;margin-top:2px">When off, others cannot message you until you message them first.</span></span><span class="swbtn${me.allow_first_message!==false?' on':''}"><i></i></span></button>${me.is_admin?row2('Moderation Queue (Admin)','mod'):''}${row2('NYXORA Elite','nav','elite')}${row2('Account','acct')}${row2('Display & themes','disp')}${row2('Content Moderation ('+modSummary()+')','cmod')}${row2('Hidden Keywords','hkw')}${row2('Muted & Blocked','safety')}${row2('Bookmarks','bms')}</div><div class="setsec">Legal &amp; Data Retention</div><div class="sl">${row2('Privacy Policy','legal','privacy')}${row2('Terms of Service','legal','terms')}${row2('Retention & Safety Guide','legal','retention')}</div><div style="padding:24px 16px"><button class="btn danger wide" style="margin:0" data-a="out">Log Out</button></div>`;
const cmodV=()=>{const m=modMode(),unb=modUnblurred(),isBlurDef=m=='blur'&&!unb,isUnblur=m=='blur'&&unb,isOff=m=='off';return`<div class="pg"><div><b>Content Moderation</b><p class="sm mu" style="margin-top:4px">Choose one option for how posts marked as sensitive or NSFW appear across your Home feed, profiles, search, and bookmarks.</p></div><button type="button" class="modopt${isBlurDef?' on':''}" data-a="setmod" data-id="blur" aria-pressed="${isBlurDef}"><div class="modopt-hd"><span>Blur (Default)</span><span class="modopt-tag">${isBlurDef?'Active':'Select'}</span></div><p class="sm mu">Blurs sensitive posts behind a cover until you tap <b>See anyway</b> on that post.</p></button><button type="button" class="modopt${isUnblur?' on':''}" data-a="setmod" data-id="unblur" aria-pressed="${isUnblur}"><div class="modopt-hd"><span>See more sensitive content</span><span class="modopt-tag">${isUnblur?'Active':'Select'}</span></div><p class="sm mu">Shows sensitive posts without blur automatically while keeping them in your feeds.</p></button><button type="button" class="modopt${isOff?' on':''}" data-a="setmod" data-id="off" aria-pressed="${isOff}"><div class="modopt-hd"><span>Off (Hide completely)</span><span class="modopt-tag">${isOff?'Active':'Select'}</span></div><p class="sm mu">Hides all sensitive and NSFW posts completely across feeds, profiles, bookmarks, and search.</p></button></div>`};
const HANDLE_CD_MS=7*864e5,NAME_CD_MS=864e5;
const cdRem=(ts,dur)=>ts?Math.max(0,new Date(ts).getTime()+dur-Date.now()):0;
function fmtCd(ms){if(ms<=0)return'';const d=Math.floor(ms/864e5),h=Math.floor((ms%864e5)/36e5),m=Math.floor((ms%36e5)/6e4),s=Math.ceil((ms%6e4)/1000);if(d>0)return`${d}d ${h}h`;if(h>0)return`${h}h ${m}m`;if(m>0)return`${m}m ${s}s`;return`${Math.max(1,s)}s`}
function syncCooldownUI(){
  if(!me)return;
  if(V=='acct'){
    const el=$('#hcd'),inp=$('#au'),btn=$('[data-a="saveun"]');
    if(!el)return;
    const rem=cdRem(me.handle_changed_at,HANDLE_CD_MS);
    if(rem>0){el.textContent='Locked · '+fmtCd(rem);if(inp)inp.disabled=true;if(btn)btn.disabled=true}
    else if(inp&&inp.disabled)paint();
  }else if(V=='edit'){
    const el=$('#ncd'),inp=$('#en');
    if(!el)return;
    const rem=cdRem(me.name_changed_at,NAME_CD_MS);
    if(rem>0){el.textContent='Locked · '+fmtCd(rem);if(inp)inp.disabled=true}
    else if(inp&&inp.disabled)paint();
  }
}
const acctV=()=>{const hRem=cdRem(me.handle_changed_at,HANDLE_CD_MS),hLkd=hRem>0;return`<div class="pg"><div class="fld"><span>Linked Google Email</span><div class="acctemail"><span>${esc(AUTH_EMAIL||'Signed in with Google')}</span><span class="acctbadge">Google</span></div></div><label class="fld"><span class="fldhd"><span>Username</span>${hLkd?`<span class="cdtag lkd" id="hcd">Locked · ${fmtCd(hRem)}</span>`:'<span class="cdtag">7-day cooldown after change</span>'}</span><input id="au" value="${esc(me.handle)}" maxlength="20" autocapitalize="none" autocomplete="off"${hLkd?' disabled':''}></label><p class="sm mu" style="margin-top:-6px">${hLkd?'Usernames can only be changed once every 7 days.':'Your first username change is available now; subsequent changes wait 7 days.'}</p><button class="btn pri" data-a="saveun"${hLkd?' disabled':''}>${hLkd?'Username locked':'Change username'}</button><h3>My pictures</h3><button class="btn" data-a="dl">Download my pictures</button><div class="dangerbox"><b>Delete Account</b><p class="sm mu">Deleting your account signs you out immediately and hides your profile, posts, comments, and listings for a 72-hour grace period. Signing back in with Google within 72 hours automatically restores your account.</p><button type="button" class="btn danger" data-a="delacctask">Delete account</button></div></div>`};
function themeCardHtml([k,[nm,t,desc]]){
  const free=isFreeTheme(k),lock=!me.is_elite&&!free,cur=activeThemeKey()==k;
  return`<button type="button" class="thcard${cur?' on':''}${lock?' lkd':''}" data-a="theme" data-id="${k}">
    <div class="thmini" style="background:${t.bg};border-color:${t.ln}">
      <div class="thminih">
        <span class="thsws"><i style="background:${t.bg}"></i><i style="background:${t.s2}"></i><i style="background:${t.ac}"></i></span>
        <span class="thpill" style="background:${t.ac}">${k=='snow'?'Default':free?'Free':'Elite'}</span>
      </div>
      <div class="thline" style="background:${t.tx}"></div>
      <div class="thline sm" style="background:${t.ac}"></div>
    </div>
    <div class="thmeta">
      <div><span class="thname">${k=='snow'?'Pure White (Default)':k=='midnight'?'Midnight (Free)':esc(nm)}</span><span class="mu sm">${esc(desc)}</span></div>
      <span class="thstat">${cur?'✓ Active':lock?'🔒 Elite':'Select'}</span>
    </div>
  </button>`;
}
const dispV=()=>`<div class="thintro"><b>App Themes</b><p class="sm mu">${me.is_elite?'All 8 themes (2 free + 6 Elite) are unlocked with NYXORA Elite.':'Pure White (Default) and Midnight are free for everyone. Tap any of the 6 Elite themes to preview.'}</p></div><div class="thgrid">${Object.entries(THEMES).map(themeCardHtml).join('')}</div>`;
const hkwV=()=>`<div class="pg"><p class="sm mu">Words or phrases added here are blurred inside posts and comments. Tap any blurred word to reveal it.</p><div class="kwform"><input id="hkwi" placeholder="Add a word or phrase" maxlength="60" autocomplete="off"><button class="btn pri sm" data-a="addkw">Add</button></div></div>${HKW.length?`<div class="sl">${HKW.map(k=>`<div class="kwrow"><span class="kwtxt">${esc(k.keyword)}</span><button class="btn sm" data-a="delkw" data-id="${k.id}">Remove</button></div>`).join('')}</div>`:'<p class="empty">No hidden keywords yet.</p>'}`;
const safetyRow=(u,kind)=>`<div class="row" style="padding:10px 16px">${av(u.name,u.avatar_url,u.handle,u.is_founder_elite)}<div class="g"><div class="hd">${nameCell(u)}</div><div class="mu sm">@${esc(u.handle)}</div></div><button class="btn sm" data-a="${kind=='m'?'unmute':'unblock'}" data-id="${u.id}">${kind=='m'?'Unmute':'Unblock'}</button></div>`;
const safetyV=()=>{const list=STAB=='m'?SAFETY_M:SAFETY_B;return`<div class="tabs"><button class="${STAB=='m'?'on':''}" data-a="stab" data-id="m">Muted (${MUTES.size})</button><button class="${STAB=='b'?'on':''}" data-a="stab" data-id="b">Blocked (${BLOCKS.size})</button></div>${SAFETY_LD?sk():list.length?list.map(u=>safetyRow(u,STAB)).join(''):`<p class="empty">${STAB=='m'?'No muted accounts.':'No blocked accounts.'}</p>`}`};
const modCard=r=>{const pend=r.status=='pending',canRem=r.target_type!=='profile';return`<article class="modcard"><div class="r"><span class="tag">${esc((r.target_type||'post').toUpperCase())}</span><span class="mu sm">${esc(r.status)} · ${ago(r.created_at)}</span></div><div class="sm"><b>Reason:</b> ${esc(r.reason)}</div>${r.details?`<div class="sm mu"><b>Details:</b> ${esc(r.details)}</div>`:''}<div class="sm mu">Reporter: @${esc(r.reporter_handle||'unknown')} · Owner: @${esc(r.target_handle||'unknown')}</div>${r.snapshot?`<div class="modsnap">${esc(r.snapshot)}</div>`:''}${pend?`<input id="modr-${r.id}" placeholder="Accurate moderation reason (required to remove/warn)" maxlength="300" autocomplete="off"><div class="modacts"><button class="btn sm" data-a="modact" data-id="dismiss:${r.id}">Dismiss</button>${canRem?`<button class="btn sm danger" data-a="modact" data-id="remove:${r.id}">Remove &amp; Notify Owner</button>`:`<button class="btn sm danger" data-a="modact" data-id="warn:${r.id}">Send Caution Notice</button>`}</div>`:`<div class="sm mu">Action: <b>${esc(r.mod_action||r.status)}</b>${r.mod_reason?' · '+esc(r.mod_reason):''}${r.reviewer_handle?' (by @'+esc(r.reviewer_handle)+')':''}</div>`}</article>`};
const eliteAppCard=a=>{const pend=a.status=='pending';return`<article class="modcard"><div class="r"><div class="hd">${av(a.name,a.avatar_url,a.handle,a.is_founder_elite)}<div><div class="hd">${nameCell(a)}</div><div class="mu sm">@${esc(a.handle)} · ${a.streak_at_apply}-day streak</div></div></div><span class="eltpill${a.status=='approved'?' on':a.status=='rejected'?' rej':''}">${esc(a.status.toUpperCase())}</span></div><div class="sm mu">Month: <b>${esc(a.month_key)}</b> · Applied ${ago(a.created_at)}</div>${a.note?`<div class="modsnap">${esc(a.note)}</div>`:''}${pend?`<input id="eappn-${a.id}" placeholder="Optional note for applicant" maxlength="300" autocomplete="off"><div class="modacts"><button class="btn sm" data-a="eltapprev" data-id="reject:${a.id}">Reject</button><button class="btn pri sm" data-a="eltapprev" data-id="approve:${a.id}">Approve (+30d Elite)</button></div>`:`<div class="sm mu">Reviewed: <b>${esc(a.status)}</b>${a.review_note?' · '+esc(a.review_note):''}${a.reviewer_handle?' (by @'+esc(a.reviewer_handle)+')':''}</div>`}</article>`};
const modV=()=>`<div class="tabs"><button class="${MOD_SECTION=='reports'?'on':''}" data-a="modsec" data-id="reports">Reports</button><button class="${MOD_SECTION=='apps'?'on':''}" data-a="modsec" data-id="apps">Elite Apps</button></div>${MOD_SECTION=='apps'?`<div class="tabs"><button class="${ELT_APP_TAB=='pending'?'on':''}" data-a="eltapptab" data-id="pending">Pending</button><button class="${ELT_APP_TAB=='reviewed'?'on':''}" data-a="eltapptab" data-id="reviewed">Reviewed</button></div>${ELT_APP_ERR?`<p class="empty">${esc(ELT_APP_ERR)}</p>`:ELT_APP_LD?sk():ELT_APPS.length?ELT_APPS.map(eliteAppCard).join(''):`<p class="empty">${ELT_APP_TAB=='pending'?'No pending Elite applications.':'No reviewed Elite applications yet.'}</p>`}`:`<div class="tabs"><button class="${MOD_TAB=='pending'?'on':''}" data-a="modtab" data-id="pending">Pending</button><button class="${MOD_TAB=='reviewed'?'on':''}" data-a="modtab" data-id="reviewed">Reviewed</button></div>${MOD_ERR?`<p class="empty">${esc(MOD_ERR)}</p>`:MOD_LD?sk():MOD_LIST.length?MOD_LIST.map(modCard).join(''):`<p class="empty">${MOD_TAB=='pending'?'No pending reports.':'No reviewed reports yet.'}</p>`}`}`;
function openReportSheet(type,id){REP_TGT={type,id:String(id)};REP_REASON='';$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>Report ${esc(type)}</b><button class="mu" data-a="close">Cancel</button></div><div class="repropts">${REPORT_REASONS.map(r=>`<button type="button" class="repropt" data-a="reppick" data-id="${esc(r)}"><span>${esc(r)}</span></button>`).join('')}</div><textarea id="repnote" class="ta" maxlength="500" placeholder="Optional explanation for moderators…"></textarea><p class="sm mu">Reports are private and reviewed before any action is taken.</p><button class="btn pri wide" style="margin:0" id="repsub" data-a="repsend" disabled>Submit Report</button></div>`;$('#sh').classList.add('on')}
const pktDay=()=>{try{return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Karachi',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}catch(e){return new Date(Date.now()+18e6).toISOString().slice(0,10)}};
function pktResetTxt(){
  const pktNow=new Date(Date.now()+18e6);
  const minsLeft=Math.max(1,1440-(pktNow.getUTCHours()*60+pktNow.getUTCMinutes()));
  const h=Math.floor(minsLeft/60),m=minsLeft%60;
  return`00:00 PKT (in ${h}h ${m}m)`;
}
const hotStorageKey=()=>me?'nyx_hot_'+me.id:'nyx_hot';
const HOT_POLL_BANK=[
  {t:'Which creative mode helps you unwind most?',o:['Late-night music & coding','Long walks outdoors','Reading fiction or essays','Gaming with friends'],v:[31,26,22,21]},
  {t:'Preferred theme vibe on NYXORA?',o:['Pitch Black Midnight','Ocean or Emerald dark','Gold / Royal Amber','Amethyst & Rose'],v:[44,24,18,14]},
  {t:'How long should a great post ideally be?',o:['1–2 punchy lines','Short paragraph (~250 chars)','Deep mini-essay','Image speaks for itself'],v:[35,33,17,15]},
  {t:'Best way to start a chat streak?',o:['Morning coffee check-in','Sending a funny meme','Quick voice note','Sharing what you built today'],v:[22,34,27,17]},
  {t:'Would you rather explore…',o:['Deep ocean trenches','Unsolved space mysteries','Lost ancient cities','Future AI labs'],v:[18,41,23,18]},
  {t:'Pick one daily habit to never miss:',o:['Posting for a 7-day streak','Learning one new trivia fact','Reading 20 pages a day','Zero-screen wind-down hour'],v:[29,21,28,22]},
  {t:'Morning person or nocturnal builder?',o:['Early sunrise sprinter','Steady afternoon worker','Midnight owl','Whenever inspiration hits'],v:[19,21,38,22]},
  {t:'Favorite Hot tab discovery?',o:['Wikipedia rabbit holes','Tech News headlines','Trivia challenges','Dog photos & daily cards'],v:[28,27,25,20]},
  {t:'Voice notes in DMs — yay or nay?',o:['Quick 15s clips are awesome','Only for close friends','Prefer text always','Depends on my mood'],v:[31,32,20,17]},
  {t:'Which Weekend reset sounds best?',o:['Digital detox & nature','Movie + snack marathon','Side-project sprint','Coffee shop & journaling'],v:[24,33,22,21]}
];
const HS={
wk:async()=>{const d=await jf('https://en.wikipedia.org/api/rest_v1/page/random/summary');return d&&d.extract?[{id:'w'+d.pageid,k:'Wikipedia',t:d.title,x:d.extract.slice(0,280),i:d.thumbnail&&d.thumbnail.source,u:wpg(d)}]:[]},
tv:async()=>{if(Date.now()-tvLast<8000)return[];tvLast=Date.now();const d=await jf('https://opentdb.com/api.php?amount=3&type=multiple&encode=url3986');if(d.response_code!==0)return[];const q=s=>decodeURIComponent(s);return d.results.map(r=>{const c=q(r.correct_answer);return{id:'t'+q(r.question).slice(0,40),k:'Trivia',t:q(r.question),o:shuffle([c,...r.incorrect_answers.map(q)]),c}})},
jk:async()=>{const d=await jf('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single&amount=3');return(d.jokes||[]).map(j=>({id:'j'+j.id,k:'Joke',x:j.joke}))},
dg:async()=>{const d=await jf('https://dog.ceo/api/breeds/image/random/3');return(d.message||[]).map(u=>({id:'d'+u,k:'Dogs',t:'Good dog of the day',i:u}))},
ct:async()=>{const d=await jf('https://catfact.ninja/facts?limit=3');return(d.data||[]).map(f=>({id:'c'+f.fact.slice(0,30),k:'Fun fact',x:f.fact}))},
qs:async()=>{const d=await jf('https://dummyjson.com/quotes?limit=3&skip='+Math.floor(Math.random()*1400));return(d.quotes||[]).map(q=>({id:'q'+q.id,k:'Quote',x:'“'+q.quote+'”',s:'— '+q.author}))},
od:async()=>{const n=new Date(),p=v=>String(v).padStart(2,'0'),d=await jf('https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/'+p(n.getMonth()+1)+'/'+p(n.getDate()));return shuffle(d.events||[]).slice(0,3).map(e=>{const g=(e.pages||[])[0]||{};return{id:'o'+e.year+(e.text||'').slice(0,20),k:'On this day',t:String(e.year),x:e.text,i:g.thumbnail&&g.thumbnail.source,u:wpg(g)}})},
hn:async()=>{if(!HNEWS.length)HNEWS=shuffle((await jf('https://hacker-news.firebaseio.com/v0/topstories.json')).slice(0,120));const ids=HNEWS.splice(0,3);return(await Promise.all(ids.map(i=>jf('https://hacker-news.firebaseio.com/v0/item/'+i+'.json')))).filter(x=>x&&x.title).map(x=>({id:'h'+x.id,k:'Tech news',t:x.title,s:x.score+' points',u:x.url||'https://news.ycombinator.com/item?id='+x.id}))},
pl:async()=>{const rnd=Math.floor(Math.random()*1e6);return shuffle(HOT_POLL_BANK).slice(0,2).map((q,idx)=>({id:'pl'+rnd+'-'+idx,k:'Poll',t:q.t,o:q.o,v:q.v,poll:1}))}};
function readHotCache(){
  const today=pktDay();
  try{
    const raw=JSON.parse(localStorage.getItem(hotStorageKey())||'null');
    if(raw&&raw.pkt_day===today&&Array.isArray(raw.items))return raw.items;
  }catch(e){}
  return [];
}
const hotSave=()=>{const items=[...HOT,...HPOOL];const seen=new Set(),dedup=[];for(const it of items){if(it&&it.id&&!seen.has(it.id)){seen.add(it.id);const {p,...rest}=it;dedup.push(rest)}}try{localStorage.setItem(hotStorageKey(),JSON.stringify({pkt_day:pktDay(),items:dedup.slice(0,300)}))}catch(e){}};
async function loadHotQuota(){
  if(!me)return null;
  const prevDay=HOT_QUOTA&&HOT_QUOTA.pkt_day;
  const {data,error}=await sb.rpc('hot_feed_quota_status');
  if(!error&&data){const r=Array.isArray(data)?data[0]:data;if(r){const nd=r.pkt_day||pktDay();if(prevDay&&prevDay!==nd){HOT=[];HPOOL=[];try{localStorage.removeItem(hotStorageKey())}catch(e){}}HOT_QUOTA={daily_limit:+r.daily_limit||300,used_today:+r.used_today||0,remaining:+r.remaining||0,pkt_day:nd,resets_at:r.resets_at}}}
  return HOT_QUOTA;
}
async function hotBatch(){const J=[HS.wk(),HS.wk(),HS.wk(),HS.tv(),HS.jk(),HS.dg(),HS.ct(),HS.qs(),HS.od(),HS.hn(),HS.pl()],rs=await Promise.allSettled(J),seen=new Set([...HOT,...HPOOL].map(x=>x.id)),out=[];rs.forEach(r=>{if(r.status=='fulfilled')r.value.forEach(x=>{if(x&&x.id&&!seen.has(x.id)){seen.add(x.id);if(!/^https:\/\//.test(x.i||''))x.i=null;if(!/^https:\/\//.test(x.u||''))x.u=null;out.push(x)}})});return shuffle(out).slice(0,20)}
async function hotMore(){
  const today=pktDay();
  if(HOT_QUOTA&&HOT_QUOTA.pkt_day!==today){HOT=[];HPOOL=[];HOT_QUOTA=null;try{localStorage.removeItem(hotStorageKey())}catch(e){}}
  if(HLD||HOT.length>=300)return;
  HLD=true;if(!HOT.length)paint();
  try{
    if(!HOT_QUOTA)await loadHotQuota();
    if(HPOOL.length){
      const take=HPOOL.splice(0,20);
      HOT=[...HOT,...take].slice(0,300);
      hotSave();
    }else if(!HOT_QUOTA||HOT_QUOTA.remaining>0){
      const want=HOT_QUOTA?Math.min(20,HOT_QUOTA.remaining):20;
      if(want>0){
        const batch=await hotBatch();
        if(!batch.length){HDEAD=true}
        else{
          const {data,error}=await sb.rpc('consume_hot_feed_quota',{p_count:Math.min(want,batch.length)});
          if(!error&&data){
            const qr=Array.isArray(data)?data[0]:data;
            if(qr){
              HOT_QUOTA={daily_limit:+qr.daily_limit||300,used_today:+qr.used_today||0,remaining:+qr.remaining||0,pkt_day:qr.pkt_day||today,resets_at:qr.resets_at};
              const granted=Math.max(0,+qr.granted||0);
              if(granted>0)HOT=[...HOT,...batch.slice(0,granted)].slice(0,300);
              hotSave();
            }
          }else{
            HOT=[...HOT,...batch.slice(0,want)].slice(0,300);
            hotSave();
          }
        }
      }
    }
  }catch(e){HDEAD=true}finally{HLD=false}
  if(V=='home'&&T=='ht')paint();
}
async function openHot(){
  let c=shuffle(readHotCache());
  HOT=c.slice(0,20);HPOOL=c.slice(20);HDEAD=false;
  scrollTo(0,0);paint();
  await loadHotQuota();
  if(HOT.length<20&&(!HOT_QUOTA||HOT_QUOTA.remaining>0))await hotMore();
  if(V=='home'&&T=='ht')paint();
}
async function refreshHot(){
  const today=pktDay();
  if(HOT_QUOTA&&HOT_QUOTA.pkt_day!==today){HOT=[];HPOOL=[];HOT_QUOTA=null;try{localStorage.removeItem(hotStorageKey())}catch(e){}}
  await loadHotQuota();
  const cached=shuffle(readHotCache());
  if(!HOT_QUOTA||HOT_QUOTA.remaining>0){
    HOT=[];HPOOL=[];HNEWS=[];HDEAD=false;
    await hotMore();
    if(!HOT.length&&cached.length){HOT=cached.slice(0,20);HPOOL=cached.slice(20)}
    else if(cached.length){const have=new Set(HOT.map(x=>x.id));HPOOL=shuffle(cached.filter(x=>!have.has(x.id)))}
    hotSave();
  }else{
    HOT=cached.slice(0,20);HPOOL=cached.slice(20);HDEAD=false;
    toast('Daily Hot limit reached (300/300). Shuffled today’s items.');
  }
  scrollTo(0,0);paint();
}
function watchHot(){const e=$('#hs');if(!e||typeof IntersectionObserver=='undefined')return;if(!HIO)HIO=new IntersectionObserver(es=>{if(es[0].isIntersecting&&V=='home'&&T=='ht')hotMore()},{rootMargin:'500px'});HIO.disconnect();HIO.observe(e)}
const hotCard=(h,i)=>{const hu=safeUrl(h.u),hi=safeUrl(h.i),isPoll=!!h.poll;const opts=h.o?h.o.map((o,j)=>{if(isPoll){const picked=h.p!=null,sel=h.p===j,pct=(h.v&&h.v[j]!=null)?h.v[j]:Math.round(100/h.o.length);return`<button class="opt poll${sel?' sel':''}" data-a="tans" data-id="${i}:${j}"><span>${esc(o)}</span>${picked?`<span class="pollpct">${pct}%</span>`:''}</button>`}return`<button class="opt ${h.p==null?'':o==h.c?'ok':h.p==j?'no':''}" data-a="tans" data-id="${i}:${j}">${esc(o)}</button>`}).join(''):'';return`<article class="card hot"><div class="cw"><div class="av hk">${esc(h.k[0])}</div><div class="bdy"><div class="hd"><b>${esc(h.k)}</b><span class="tag">Hot</span></div>${h.t?`<p><b>${esc(h.t)}</b></p>`:''}${h.x?`<p>${esc(h.x)}</p>`:''}${h.s?`<div class="mu sm">${esc(h.s)}</div>`:''}${hi?`<img loading="lazy" src="${esc(hi)}" alt="" referrerpolicy="no-referrer">`:''}${opts}${hu?`<a class="lnk sm" href="${esc(hu)}" target="_blank" rel="noopener noreferrer nofollow">${h.k=='Tech news'?'Read article':'Read more'}</a>`:''}</div></div></article>`};
const hotBarHtml=()=>{const lim=HOT_QUOTA?HOT_QUOTA.daily_limit:300,used=HOT_QUOTA?HOT_QUOTA.used_today:Math.min(300,HOT.length),rem=HOT_QUOTA?HOT_QUOTA.remaining:Math.max(0,300-used);return`<div class="hotbar"><span><b>${used}/${lim}</b> today · ${rem} left · Resets ${esc(pktResetTxt())}</span><button type="button" class="btn sm" data-a="hotref">Shuffle</button></div>`};
const hotV=()=>{const atLim=!!(HOT_QUOTA&&HOT_QUOTA.remaining<=0&&!HPOOL.length)||HOT.length>=300;return hotBarHtml()+(HOT.length?HOT.map(hotCard).join('')+(atLim?`<div class="end"><p>Daily Hot limit reached (300/300). Resets at ${esc(pktResetTxt())}.</p><button class="btn sm" data-a="hotref">Shuffle today’s items</button></div>`:HDEAD?'<div class="end"><p>Couldn’t load more right now.</p><button class="btn sm" data-a="hotmore">Try again</button></div>':'<div id="hs" class="end">Loading more…</div>'):(atLim?`<div class="end"><p>You’ve reached today’s 300-item Hot limit. Resets at ${esc(pktResetTxt())}.</p></div>`:HDEAD&&!HLD?'<div class="end"><p>Couldn’t load Hot right now.</p><button class="btn sm" data-a="hotmore">Try again</button></div>':sk()))};
const rsKey=()=>me?'nyx_rs_'+me.id:'';
function loadRecentSq(){try{const a=JSON.parse(localStorage.getItem(rsKey())||'[]');return Array.isArray(a)?a.filter(x=>typeof x=='string'&&x.trim()).slice(0,8):[]}catch(e){return[]}}
function saveRecentSq(q){q=String(q||'').trim();if(!q||!me)return;const a=[q,...loadRecentSq().filter(x=>x.toLowerCase()!=q.toLowerCase())].slice(0,8);try{localStorage.setItem(rsKey(),JSON.stringify(a))}catch(e){}}
function delRecentSq(q){if(!me)return;const a=loadRecentSq().filter(x=>x!=q);try{localStorage.setItem(rsKey(),JSON.stringify(a))}catch(e){}}
function buildSqTerms(q,postSnips=[],userRows=[]){
  const v=String(q||'').trim(),vl=v.toLowerCase();
  if(!v)return[];
  const out=[],seen=new Set(),add=(term,kind)=>{const t=String(term||'').trim();if(!t)return;const k=t.toLowerCase();if(seen.has(k))return;seen.add(k);out.push({t,kind})};
  add(v,'query');
  loadRecentSq().filter(x=>x.toLowerCase().includes(vl)).slice(0,3).forEach(x=>add(x,'recent'));
  INTERESTS.filter(x=>x.toLowerCase().includes(vl)).slice(0,3).forEach(x=>add(x,'topic'));
  (userRows||[]).slice(0,3).forEach(u=>{if(u.handle)add('@'+u.handle,'user')});
  (postSnips||[]).forEach(p=>{
    const words=String(p.body||'').split(/\s+/).map(w=>w.replace(/^[^#@A-Za-z0-9_]+|[^A-Za-z0-9_]+$/g,'')).filter(w=>w.length>=3&&w.length<=32&&w.toLowerCase().includes(vl));
    if(words[0])add(words[0],'topic');
  });
  return out.slice(0,7);
}
async function loadSearchSug(q){
  const v=String(q||'').trim(),clean=v.replace(/^@/,'');
  SQ_TERMS=buildSqTerms(v,[],[]);
  if(!v){SR=[];if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();return}
  const safe=v.replace(/[%,()*\\_]/g,' ').trim();
  const [ur,pr]=await Promise.all([
    clean.length>=1?sb.rpc('search_profiles',{q:clean,lim:6}):Promise.resolve({data:[]}),
    safe.length>=2?sb.from('feed').select('body').is('repost_of',null).ilike('body','%'+safe+'%').order('created_at',{ascending:false}).limit(8):Promise.resolve({data:[]})
  ]);
  if(SQV.trim()!=v||SQD)return;
  SR=(ur.data||[]).filter(x=>!BLOCKS.has(x.id));
  SQ_TERMS=buildSqTerms(v,pr.data||[],SR);
  if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();
}
async function runSearch(term){
  const raw=(typeof term=='string'?term:SQV).trim();
  if(!raw)return;
  SQV=raw;SQD=true;SQ_LD=true;
  saveRecentSq(raw);
  const inp=$('#sq');if(inp)inp.value=raw;
  updSqClear();
  if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();
  const uq=raw.replace(/^@/,'').trim(),safe=raw.replace(/[%,()*\\_]/g,' ').trim();
  const [u,p]=await Promise.all([
    uq?sb.rpc('search_profiles',{q:uq,lim:20}):Promise.resolve({data:[]}),
    safe?sb.from('feed').select('*').is('repost_of',null).ilike('body','%'+safe+'%').order('created_at',{ascending:false}).limit(25):Promise.resolve({data:[]})
  ]);
  SR=(u.data||[]).filter(x=>!BLOCKS.has(x.id));
  SP=(p.data||[]).filter(x=>!BLOCKS.has(x.user_id)&&!(x.repost_of&&!x.o_handle)&&(modMode()!='off'||!isSensitivePost(x)));
  SQ_LD=false;
  if(raw.startsWith('@')&&SR.length)SQT='u';
  else if(SP.length&&!SR.length)SQT='p';
  else if(SR.length&&!SP.length)SQT='u';
  POSTS=SP;LK=new Set();BM=new Set();RP=new Set();
  await marks([...new Set(SP.map(tid))]);trackViews(SP);
  if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();
}
const isSensitivePost=p=>!!(p&&(p.repost_of?p.o_is_sensitive:(p.is_sensitive||p.o_is_sensitive)));
const moreBtn=()=>MORE?'<button class="btn wide" style="width:calc(100% - 32px);margin:12px 16px" data-a="more">Load more</button>':'';
const cacheSave=()=>{try{localStorage.setItem('nyx_c',JSON.stringify({u:me.id,me,p:POSTS.slice(0,PAGE),l:[...LK],f:[...FOL]}))}catch(e){}};
const post=(p,full)=>{const rp=!!p.repost_of,t=tid(p),lk=LK.has(t),a=rp?{name:p.o_name,handle:p.o_handle,avatar_url:p.o_avatar_url,is_elite:p.o_is_elite,is_legendary:p.o_is_legendary,is_founder_elite:p.o_is_founder_elite}:p,body=rp?p.o_body:p.body,ie=!!(rp?p.o_image_expired:(p.image_expired||(p.image_expires_at&&new Date(p.image_expires_at)<=new Date()))),ip=ie?null:(rp?p.o_image_path:p.image_path),dl=(rp?p.o_allow_download:p.allow_download)!==false,at=rp?p.o_created_at:p.created_at,edAt=rp?p.o_edited_at:p.edited_at,mine=p.user_id==me.id,pin=V=='user'&&!!p.pinned_at,sens=isSensitivePost(p),blurred=sens&&modMode()=='blur'&&!modUnblurred()&&!REV_SENS.has(t);
const inner=`${renderPostBody(body,p.id,!!full,'cm',p.id)}${ie?'<div class="exp"><b>Image expired</b><span>Post images expire 30 days after upload.</span></div>':ip?`<img class="${dl?'':'nodl'}" loading="lazy" src="${imgUrl(ip)}" alt="Post image" data-a="zoom" data-id="${dl?1:0}:${esc(ip)}">${dl?'':'<div class="dlnote">Downloads disabled by author · Screenshots cannot always be prevented</div>'}`:''}${p.quote_of?embed(p):''}`;
const wrappedInner=blurred?`<div class="senswrap blurred"><div class="sensbdy" aria-hidden="true">${inner}</div><div class="sensovl"><b>Sensitive or NSFW content</b><span class="mu sm">Blurred by Content Moderation</span><button type="button" class="btn sm" data-a="seepost" data-id="${t}">See anyway</button></div></div>`:inner;
return`<article class="card${rp?' rp':''}${pin?' pin':''}" data-pid="${p.id}">${pin?`<div class="pinlbl">${I.pin} Pinned</div>`:''}${rp?`<div class="rpl">${I.rep} ${mine?'You':esc(p.name)} reposted</div>`:''}<div class="cw">${av(a.name,a.avatar_url,a.handle,a.is_founder_elite)}<div class="bdy"><div class="hd">${nameCell(a)}<span class="mu">@${esc(a.handle)} · ${ago(at)}${edAt?' <span class="edtag">· Edited</span>':''}${sens?' <span class="edtag">· Sensitive</span>':''}</span></div>${wrappedInner}<div class="act"><button class="${lk?'lk':''}" data-a="like" data-id="${t}">${I.heart} ${p.like_count}</button><button data-a="cm" data-id="${p.id}">${I.chat} ${p.comment_count}</button><button class="${RP.has(t)?'rpd':''}" data-a="rpm" data-id="${t}">${I.rep} ${p.repost_count||0}</button><span class="vw">${I.eye} ${p.view_count||0}</span><button class="${BM.has(t)?'bmk':''}" data-a="bm" data-id="${t}" aria-label="Bookmark">${I.bm}</button><button data-a="pshare" data-id="${p.id}" aria-label="Share post">${I.share}</button>${ip&&dl?`<button class="sm" data-a="dlimg" data-id="${t}:${esc(ip)}" aria-label="Download image">${I.dl}</button>`:''}${mine?(rp?`<button class="sm" data-a="del" data-id="${p.id}">Undo</button>`:`<button class="popts" data-a="postopt" data-id="${p.id}" aria-label="Post options">${I.dots}</button>`):`<button class="sm" data-a="rep" data-id="post:${t}">Report</button>`}</div></div></div></article>`};
const cmRow=(c,rep,isPin)=>`<article class="card cmr${rep?' rep':''}${isPin?' pin':''}">${av(c.name,c.avatar_url,c.handle,c.is_founder_elite)}<div class="bdy">${isPin?`<div class="pinlbl">${I.pin} Pinned comment</div>`:''}<div class="hd">${nameCell(c)}<span class="mu">@${esc(c.handle)} · ${ago(c.created_at)}</span></div>${c.reply_handle?`<div class="mu sm">Replying to @${esc(c.reply_handle)}</div>`:''}<p class="pbody">${blurText(c.body,'c'+c.id)}</p><div class="act"><button class="${CLK.has(c.id)?'lk':''}" data-a="clike" data-id="${c.id}">${I.heart} ${c.like_count}</button><button data-a="creply" data-id="${c.id}">${I.chat} Reply</button>${DET&&DET.user_id==me.id?`<button class="sm" data-a="pincm" data-id="${c.id}">${isPin?'Unpin':'Pin'}</button>`:''}${c.user_id!=me.id?`<button class="sm" data-a="rep" data-id="comment:${c.id}">Report</button>`:''}${c.user_id==me.id||(DET&&DET.user_id==me.id)?`<button class="sm" data-a="cdel" data-id="${c.id}">Delete</button>`:''}</div></div></article>`;
const thread=l=>{const pinId=DET&&DET.pinned_comment_id,pinC=pinId?l.find(c=>c.id==pinId):null,top=l.filter(c=>!c.parent_id&&(!pinC||c.id!=pinC.id)),pinHtml=pinC?(pinC.parent_id?cmRow(pinC,0,1):cmRow(pinC,0,1)+l.filter(r=>r.parent_id==pinC.id).map(r=>cmRow(r,1)).join('')):'';return pinHtml+top.map(c=>cmRow(c)+l.filter(r=>r.parent_id==c.id&&(!pinC||r.id!=pinC.id)).map(r=>cmRow(r,1)).join('')).join('')};
const postV=()=>modMode()=='off'&&isSensitivePost(DET)?`<div class="blkbox"><b>Hidden by Content Moderation</b><p class="sm mu">This post is marked sensitive or NSFW and your Content Moderation setting is set to Off.</p><button class="btn sm" data-a="cmod">Content Moderation Settings</button></div>`:`${post(DET,1)}${RC?`<div class="mu sm" style="padding:10px 16px 0">Replying to @${esc(RC.handle)} <button class="lnk" data-a="creset">Cancel</button></div>`:''}<div class="cin" style="padding:12px 16px"><input id="ci" placeholder="${RC?'Write your reply':'Write a reply'}" maxlength="280"><button class="btn pri sm" data-a="send" data-id="${DET.id}">Reply</button></div>${CM[DET.id]?(CM[DET.id].length?thread(CM[DET.id]):'<p class="empty">No replies yet. Start the conversation.</p>'):sk()}`;
const visPosts=l=>(l||[]).filter(p=>!BLOCKS.has(p.user_id)&&!(p.repost_of&&!p.o_handle)&&(modMode()!='off'||!isSensitivePost(p)));
const feedHtml=l=>visPosts(l).map(p=>post(p)).join('');
const home=()=>{const vis=T=='ht'?[]:visPosts(POSTS);return`<div class="tabs htabs"><button class="${T=='fy'?'on':''}" data-a="tab" data-id="fy">For You</button><button class="${T=='ht'?'on':''}" data-a="tab" data-id="ht">Hot 🔥</button><button class="${T=='fl'?'on':''}" data-a="tab" data-id="fl">Following</button></div>${T=='ht'?hotV():`<div class="cbar" data-a="new">${av(me.name,me.avatar_url,null,me.is_founder_elite)}<span class="mu">Share something…</span></div>${vis.length?vis.map(p=>post(p)).join('')+moreBtn()+(MORE?'':'<p class="end">You’re all caught up</p>'):LD?sk():MORE?`<p class="empty">Posts on this page are hidden by Content Moderation.</p>${moreBtn()}`:`<p class="empty">${T=='fl'?'Follow people to see their posts here.':'No posts yet. Be the first to post.'}</p>`}`}`};
function streakCardHtml(st,isOwn,compact){
  if(!st)return compact?'':'<div class="stkcard"><div class="sk-l w40"></div><div class="sk-l"></div></div>';
  const s=+st.streak||0,prog=Math.min(7,Math.max(0,+st.goal_progress||0)),leg=!!st.is_legendary;
  const rest=st.status=='restorable',rem=+st.credits_remaining||0,lim=+st.credits_limit||3;
  const msg=st.status=='active_today'
    ?'Qualifying post published today (UTC). Come back tomorrow!'
    :st.status=='due_today'
      ?'Publish an original or quote post today (UTC) to keep your streak.'
      :rest
        ?(isOwn?`Missed a day — restore within ${hrsLeft(st.grace_until)} before reset (posting starts a new 1-day streak).`:'Streak in 48-hour restoration grace window.')
        :(isOwn?'Publish an original or quote post today (UTC) to start a 7-day streak.':'No active streak yet.');
  const dots=Array.from({length:7},(_,i)=>`<i class="${i<prog?'f':''}"></i>`).join('');
  return`<div class="stkcard${rest&&isOwn?' warn':''}"${compact?'':' style="margin:0"'}>
    <div class="stkhead">
      <div class="stkl">${I.fire}<div><b>${s}-day streak</b><div class="mu sm">${leg?'7-day goal achieved':`${prog}/7 days toward Legendary`}</div></div></div>
      ${leg?`<span class="stktag">${bd('g')}Legendary</span>`:`<span class="stktag mut">${prog}/7 days</span>`}
    </div>
    <div class="stkb" aria-label="7-day goal progress: ${prog} of 7">${dots}</div>
    <p class="sm mu">${esc(msg)}</p>
    ${isOwn?`<div class="stkfoot"><span class="sm mu">${rem} of ${lim} monthly restores left · Resets 1st UTC</span>${rest?(rem>0?`<button class="btn pri sm" data-a="restorestreak"${RESTORE_BZ?' disabled':''}>${RESTORE_BZ?'Restoring…':`Restore Streak (${rem} left)`}</button>`:`<span class="sm mu">No credits left this month</span>`):''}</div>`:''}
</div>`;
}
const profSk=()=>`<div class="banwrap"><div class="ban sk-b"></div></div><div class="pg" style="padding-top:0;gap:10px"><div class="pt"><div class="avb"><div class="av sk-b psk-av">${ring}</div></div><div class="pa"><span class="sk-l psk-btn"></span><span class="sk-l psk-btn"></span></div></div><div class="sk-l w40" style="height:18px"></div><div class="sk-l" style="width:28%"></div><div class="sk-l w70"></div><div class="sk-l" style="width:55%"></div></div><div class="sep"></div>${sk()}`;
const canViewPrivateProf=p=>!!(p&&(!p.is_private||p.id==me.id||FOL.has(p.id)));
function followBtnHtml(uid,extraCls){const f=FOL.has(uid),req=!f&&REQ_OUT.has(uid);return`<button class="btn sm ${extraCls?extraCls+' ':''}${f||req?'':'pri'}" data-a="fol" data-id="${uid}">${f?'Following':req?'Requested':'Follow'}</button>`}
const prof=()=>{const own=PR.id==me.id,blk=!own&&BLOCKS.has(PR.id),mut=!own&&!blk&&MUTES.has(PR.id),privLocked=!own&&!blk&&!canViewPrivateProf(PR),req=REQ_OUT.has(PR.id),ints=Array.isArray(PR.interests)?PR.interests.filter(x=>INTERESTS.includes(x)):[],plk=safeUrl(PR.link),bUrl=safeMediaUrl(PR.banner_url&&imgUrl(PR.banner_url)),stCount=PR_STREAK?(+PR_STREAK.streak||0):(+PR.streak||0),vis=(blk||privLocked)?[]:visPosts(POSTS);return`<div class="banwrap"><div class="ban${bUrl?' banv':''}"${bUrl?` style="background-image:url('${esc(bUrl)}')" data-a="zoom" data-id="2:${esc(PR.banner_url)}"`:''}></div>${blk?'':`<span class="pstreak" aria-label="${stCount}-day streak">🔥 <b>${stCount}</b></span>`}</div><div class="pg" style="padding-top:0;gap:10px"><div class="pt"><div class="avb${PR.avatar_url?' avv':''}"${PR.avatar_url?` data-a="zoom" data-id="2:${esc(PR.avatar_url)}"`:''}>${av(PR.name,PR.avatar_url,null,blk?false:PR.is_founder_elite)}</div><div class="pa"><button class="ib2" data-a="${own?'about':'pmenu'}" aria-label="${own?'About this profile':'Account options'}">${I.dots}</button>${own?'':blk?`<button class="btn sm pill danger" data-a="unblock" data-id="${PR.id}">Unblock</button>`:`<button class="btn sm pill" data-a="msg" data-id="${PR.id}">${I.chat} Message</button>${followBtnHtml(PR.id,'pill')}`}</div></div><div><div class="hd" style="font-size:20px;font-weight:700">${nameCell(PR)}${PR.is_private?`<span class="privbadge" title="Private account" aria-label="Private account">${I.lock}</span>`:''}</div><div class="mu">@${esc(PR.handle)}</div></div>${mut?'<div class="mu sm">Muted from Explore</div>':''}${PR.bio?`<p>${esc(PR.bio)}</p>`:''}${ints.length?`<div class="pints" aria-label="Interests"><span class="pints-lbl">Interests</span>${ints.map((t,i)=>`${i?'<span aria-hidden="true">·</span>':''}<span class="pint">${esc(t)}</span>`).join('')}</div>`:''}${own?`<button class="btn sm eb" data-a="edit">${I.pen} Edit profile</button>`:''}${plk?`<a class="lnk sm" href="${esc(plk)}" target="_blank" rel="noopener noreferrer nofollow ugc">${esc(plk.replace(/^https?:\/\//,''))}</a>`:''}<div class="r pstats" style="justify-content:flex-start;gap:18px;flex-wrap:wrap"><button class="${privLocked?'pstats-lk':''}" data-a="lst" data-id="followers"><b>${CNT.fr}</b> <span class="mu">Followers</span></button><button class="${privLocked?'pstats-lk':''}" data-a="lst" data-id="following"><b>${CNT.fg}</b> <span class="mu">Following</span></button><span class="st">${I.heart}<b>${CNT.lk}</b> <span class="mu">Total Likes</span></span></div></div><div class="sep"></div>${blk?`<div class="blkbox"><b>You blocked @${esc(PR.handle)}</b><p class="sm mu">Their posts are hidden from your feeds, they are excluded from user search, and neither of you can follow or start new conversations with each other.</p><button class="btn sm" data-a="unblock" data-id="${PR.id}">Unblock</button></div>`:privLocked?`<div class="privlock">${I.lock}<b>This account is private</b><p class="sm mu">${req?'Your follow request is pending approval. Once accepted, you’ll see their posts, replies, and follower/following lists here.':'Follow this account to see their posts, replies, and follower/following lists.'}</p></div>`:`${vis.length?vis.map(p=>post(p)).join('')+moreBtn():(MORE?`<p class="empty">Posts on this page are hidden by Content Moderation.</p>${moreBtn()}`:'<p class="empty">No posts yet.</p>')}`}`};
const prow=s=>`<div class="row" style="padding:10px 16px">${av(s.name,s.avatar_url,s.handle,s.is_founder_elite)}<div class="g"><div class="hd">${nameCell(s)}</div><div class="mu sm">@${esc(s.handle)}</div>${s.bio?`<div class="sm">${esc(s.bio)}</div>`:''}</div>${s.id==me.id?'':followBtnHtml(s.id)}</div>`;
const peopleV=l=>l.length?l.map(prow).join(''):'<p class="empty">Nobody here yet.</p>';
const sqSugRow=x=>`<div class="sqrow"><button type="button" class="sqpick" data-a="sqpick" data-id="${esc(x.t)}">${I.search}<span class="sqtxt">${esc(x.t)}</span>${x.kind=='recent'?'<span class="mu sm">Recent</span>':x.kind=='topic'?'<span class="mu sm">Topic</span>':x.kind=='user'?'<span class="mu sm">Account</span>':''}</button><button type="button" class="sqfill" data-a="sqfill" data-id="${esc(x.t)}" aria-label="Fill search">↖</button></div>`;
const srHtml=()=>{
  const q=SQV.trim();
  if(SQD&&q){
    return`<div class="tabs"><button class="${SQT=='u'?'on':''}" data-a="sqt" data-id="u">Users${SQ_LD?'':' ('+SR.length+')'}</button><button class="${SQT=='p'?'on':''}" data-a="sqt" data-id="p">Posts${SQ_LD?'':' ('+SP.length+')'}</button></div>${SQ_LD?sk():SQT=='u'?(SR.length?SR.map(prow).join(''):'<p class="empty">No users found matching “'+esc(q)+'”.</p>'):(SP.length?feedHtml(SP):'<p class="empty">No posts found matching “'+esc(q)+'”.</p>')}`;
  }
  if(!q){
    const rec=loadRecentSq();
    return rec.length
      ?`<div class="r dh"><span>Recent searches</span><button type="button" class="lnk sm" data-a="sqclearall">Clear all</button></div>${rec.map(t=>`<div class="sqrow"><button type="button" class="sqpick" data-a="sqpick" data-id="${esc(t)}">${I.search}<span class="sqtxt">${esc(t)}</span></button><button type="button" class="sqdel" data-a="sqdel" data-id="${esc(t)}" aria-label="Remove search">✕</button></div>`).join('')}`
      :'<p class="empty">Search posts, topics, or users on NYXORA.</p>';
  }
  const terms=SQ_TERMS.length?SQ_TERMS:buildSqTerms(q,[],[]);
  return`${terms.map(sqSugRow).join('')}${SR.length?`<div class="dh">Matching accounts</div>${SR.slice(0,5).map(prow).join('')}`:''}`;
};
const bmsV=()=>{const vis=visPosts(POSTS);return vis.length?vis.map(p=>post(p)).join(''):(POSTS.length?'<p class="empty">Bookmarked posts are hidden by your Content Moderation setting.</p>':'<p class="empty">No bookmarks yet. Tap the bookmark icon on a post to save it.</p>')};
const editV=()=>{const nRem=cdRem(me.name_changed_at,NAME_CD_MS),nLkd=nRem>0,ebUrl=safeMediaUrl(me.banner_url&&imgUrl(me.banner_url));return`<div class="pg"><label class="bnr" style="${ebUrl?`background-image:url('${esc(ebUrl)}')`:''}"><span>Change banner</span><input type="file" id="bf" accept="image/*" hidden></label><div class="edavrow">${av(me.name,me.avatar_url,null,me.is_founder_elite)}<label class="btn sm pill" style="cursor:pointer">Change photo<input type="file" id="pf" accept="image/*" hidden></label></div><p class="sm mu" style="margin-top:-6px">Choose a banner or photo to crop and preview before saving.</p><label class="fld"><span class="fldhd"><span>Name</span>${nLkd?`<span class="cdtag lkd" id="ncd">Locked · ${fmtCd(nRem)}</span>`:'<span class="cdtag">24h cooldown after change</span>'}</span><input id="en" value="${esc(me.name)}" maxlength="40"${nLkd?' disabled':''}></label>${nLkd?'<p class="sm mu" style="margin-top:-6px">Display name can be changed once every 24 hours. Bio, photo, banner, location, link, and interests can still be saved.</p>':''}<label class="fld">Bio<textarea id="eb" class="ta" maxlength="160" placeholder="Tell people about yourself">${esc(me.bio||'')}</textarea></label><label class="fld">Location<input id="el" value="${esc(me.location||'')}" maxlength="40" placeholder="City, Country"></label><label class="fld">Link (one only)<input id="ek" value="${esc(me.link||'')}" maxlength="100" placeholder="https://"></label><div class="fld"><span>My Interests</span><span class="mu sm">Select topics you like so others with similar interests can discover you.</span><div class="ints">${INTERESTS.map(t=>`<button type="button" class="int${EDIT_INT.has(t)?' on':''}" data-a="int" data-id="${t}" aria-pressed="${EDIT_INT.has(t)}">${EDIT_INT.has(t)?'✓ ':''}${t}</button>`).join('')}</div></div><button class="btn pri wide" style="margin:0" data-a="saveprof">Save</button></div>`};
const discCard=u=>{const sh=Array.isArray(u.shared_interests)?u.shared_interests:[],all=Array.isArray(u.interests)?u.interests:[];return`<article class="dcard">${av(u.name,u.avatar_url,u.handle,u.is_founder_elite)}<div class="bdy"><div class="hd">${nameCell(u)}<span class="mu sm">@${esc(u.handle)}</span></div>${u.bio?`<p class="sm">${esc(u.bio)}</p>`:''}${sh.length?`<div class="dshared">Shared interests: ${sh.map(esc).join(' · ')}</div>`:(all.length?`<div class="mu sm" style="margin-top:5px">Interests: ${all.map(esc).join(' · ')}</div>`:'')}<div class="dacts"><button class="btn sm" data-a="user" data-id="${esc(u.handle)}">View Profile</button>${followBtnHtml(u.id)}<button class="btn sm" data-a="msg" data-id="${u.id}">Message</button></div></div></article>`};
const discResHtml=()=>{const q=DQV.trim(),myInt=Array.isArray(me&&me.interests)?me.interests:[];if(D_ERR)return`<p class="empty">${esc(D_ERR)}</p>`;if(q.length){if(DSR_LD&&!DSR.length)return sk();if(!DSR.length)return`<p class="empty">No users found matching “${esc(q)}”.</p>`;return`<div class="dh">Search results</div>${DSR.map(discCard).join('')}${DSR_MORE?'<button class="btn wide" style="width:calc(100% - 32px);margin:12px 16px" data-a="dsmore">Load more</button>':''}`}if(DTAB=='all'){if(DPEOPLE_LD&&!DPEOPLE.length)return sk();return DPEOPLE.length?`<div class="r dh"><span>People on NYXORA</span><button type="button" class="lnk sm" data-a="dshuf">Shuffle</button></div>${DPEOPLE.map(discCard).join('')}`:'<p class="empty">No other people found yet.</p>'}if(DISC_LD&&!DISC.length)return sk();const tip=!myInt.length?`<div class="box" style="margin:14px 16px;display:grid;gap:8px;justify-items:start"><b>Select your interests</b><p class="sm mu">Add interests in Edit Profile to discover people who share what you like.</p><button class="btn sm pri" data-a="edit">Choose interests</button></div>`:'';return`${tip}${DISC.length?`<div class="dh">People who share your interests</div>${DISC.map(discCard).join('')}${DISC_MORE?'<button class="btn wide" style="width:calc(100% - 32px);margin:12px 16px" data-a="dmore">Load more</button>':''}`:(myInt.length?'<p class="empty">No matching people found yet. Try the People tab or search by username above.</p>':'')}`};
const discoverV=()=>`<div class="tabs"><button class="${DTAB=='int'?'on':''}" data-a="dtab" data-id="int">Shared Interests</button><button class="${DTAB=='all'?'on':''}" data-a="dtab" data-id="all">People</button></div><div class="dsb"><div class="dsw"><input id="dq" type="search" class="sqi" style="margin-left:0" placeholder="Search users by name or @username" value="${esc(DQV)}" autocomplete="off" enterkeyhint="search">${DQV?'<button type="button" class="dsc" data-a="dclear" aria-label="Clear search">✕</button>':''}</div></div><div id="dr">${discResHtml()}</div>`;
function about(){const q=PR,u=location.origin+location.pathname+'?u='+q.handle,expTxt=q.is_elite?(q.elite_expires_at?'Active until '+new Date(q.elite_expires_at).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}):'Permanent Elite'):'';$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>About this profile</b><button class="mu" data-a="close">Close</button></div>${q.is_founder_elite?`<div class="ab"><span class="hd"><span class="fndic" aria-hidden="true"></span><b>Founder Elite</b></span><span class="mu sm">Manual recognition for early supporters &amp; builders · Not identity verified</span></div>`:''}${q.is_legendary?`<div class="ab"><span class="hd">${bd('g')}<b>Legendary Badge</b></span><span class="mu sm">7-day activity streak</span></div>`:''}${q.is_elite?`<div class="ab"><span class="hd">${bd('e')}<b>Elite Member</b></span><span class="mu sm">${esc(expTxt)} · Membership perk · Not identity verified</span></div>`:''}<div class="ab"><span class="mu">Location</span><span>${esc(q.location||'Not set')}</span></div><div class="ab"><span class="mu">Joined</span><span>${new Date(q.created_at).toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})}</span></div><div class="ab"><span class="mu">Total post views</span><span>${CNT.vw}</span></div><div class="ab"><span class="mu sm" style="overflow:hidden;text-overflow:ellipsis">${esc(u)}</span><button class="lnk" data-a="share" data-id="${esc(q.handle)}">Copy</button></div></div>`;$('#sh').classList.add('on')}
function pmenu(){if(!PR||PR.id==me.id)return about();const mut=MUTES.has(PR.id),blk=BLOCKS.has(PR.id);$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><button class="mi" data-a="about">${I.eye} About this profile</button><button class="mi" data-a="rep" data-id="profile:${PR.id}">${I.flag} Report @${esc(PR.handle)}</button><button class="mi" data-a="${mut?'unmute':'mute'}" data-id="${PR.id}">${I.mute} ${mut?'Unmute':'Mute'} @${esc(PR.handle)}</button><button class="mi danger" data-a="${blk?'unblock':'blkask'}" data-id="${PR.id}">${I.blk} ${blk?'Unblock':'Block'} @${esc(PR.handle)}</button><button class="mu" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on')}
function pushV(){RC=null;PS.push({V,T,U,y:scrollY,UP:UPUSH});history.pushState({n:PS.length},'')}
async function marks(ids){if(!ids.length)return;const f=t=>sb.from(t).select(t=='posts'?'repost_of':'post_id').eq('user_id',me.id).in(t=='posts'?'repost_of':'post_id',ids),[l,b,r]=await Promise.all([f('likes'),f('bookmarks'),f('posts')]);(l.data||[]).forEach(x=>LK.add(x.post_id));(b.data||[]).forEach(x=>BM.add(x.post_id));(r.data||[]).forEach(x=>RP.add(x.repost_of))}
async function loadCnt(){const r=await sb.rpc('profile_stats',{target:PR.id});let d=(r.data||[])[0];if(r.error||!d){const c=f=>sb.from('follows').select('follower',{count:'exact',head:true}).eq(f,PR.id),[a,b,l]=await Promise.all([c('followee'),c('follower'),sb.from('likes').select('post_id,posts!inner(user_id)',{count:'exact',head:true}).eq('posts.user_id',PR.id)]);d={followers:a.count,following:b.count,likes:l.count,views:0};if(!WARN){WARN=1;toast('Run the latest SQL update to enable view counts.')}}CNT={fr:+d.followers||0,fg:+d.following||0,lk:+d.likes||0,vw:+d.views||0}}
async function loadFollowRequests(){if(!me)return;FREQ_LD=true;try{const {data,error}=await sb.rpc('list_incoming_follow_requests',{p_lim:50});if(!error&&Array.isArray(data))FREQ=data}catch(e){}finally{FREQ_LD=false;if(V=='notif')paint()}}
async function loadOutgoingRequests(){if(!me)return;try{const {data,error}=await sb.rpc('my_outgoing_follow_requests');if(!error&&Array.isArray(data))REQ_OUT=new Set(data)}catch(e){}}
async function loadUnread(){try{const r=await sb.from('notifications').select('id',{count:'exact',head:true}).eq('recipient',me.id).eq('is_read',false);UNR=r.count||0;updBell()}catch(e){}}
function updBell(){const b=$('.bell');if(b)b.innerHTML=I.bell+(UNR?`<i class="nd">${UNR>9?'9+':UNR}</i>`:'')}
async function loadNotif(){const [{data,error}]=await Promise.all([sb.from('notifications').select('id,kind,post_id,note,is_read,created_at,actor').eq('recipient',me.id).order('created_at',{ascending:false}).limit(40),loadFollowRequests()]);const rows=(data||[]).filter(n=>n.kind=='report_submitted'||n.kind=='mod_removed'||n.kind=='mod_warning'||n.kind=='elite_notice'||!BLOCKS.has(n.actor)),ids=[...new Set(rows.map(n=>n.actor).filter(Boolean))],P=ids.length?(await sb.from('profiles').select('id,handle,name,avatar_url,is_elite,is_legendary,is_founder_elite').in('id',ids)).data||[]:[],m=Object.fromEntries(P.map(p=>[p.id,p]));NT=rows.map(n=>({...n,a:m[n.actor]||{}}));if(error)toast('Notifications: '+error.message);if(UNR){UNR=0;updBell();sb.from('notifications').update({is_read:true}).eq('recipient',me.id).eq('is_read',false).then(()=>{},()=>{})}}
async function loadMod(){if(!me||!me.is_admin)return;MOD_LD=true;MOD_ERR='';paint();const {data,error}=await sb.rpc('admin_list_reports',{p_status:MOD_TAB,p_lim:50});MOD_LD=false;if(error)MOD_ERR=error.message;else MOD_LIST=data||[];if(V=='mod')paint()}
async function loadAdminEliteApps(){if(!me||!me.is_admin)return;ELT_APP_LD=true;ELT_APP_ERR='';paint();const {data,error}=await sb.rpc('admin_list_elite_applications',{p_status:ELT_APP_TAB,p_lim:50});ELT_APP_LD=false;if(error)ELT_APP_ERR=error.message;else ELT_APPS=data||[];if(V=='mod')paint()}
async function loadList(kind){if(!PR||!canViewPrivateProf(PR)){LIST=[];return}const col=kind=='followers'?'follower':'followee',eq=kind=='followers'?'followee':'follower',{data,error}=await sb.from('follows').select(col).eq(eq,PR.id).limit(100);if(error)toast(error.message);const ids=(data||[]).map(r=>r[col]);LIST=ids.length?((await sb.from('profiles').select('id,handle,name,avatar_url,is_elite,is_legendary,is_founder_elite,bio').in('id',ids)).data||[]).filter(x=>!BLOCKS.has(x.id)):[]}
async function loadBms(){const {data}=await sb.from('bookmarks').select('post_id').eq('user_id',me.id).order('created_at',{ascending:false}).limit(50),ids=(data||[]).map(r=>r.post_id);POSTS=ids.length?((await sb.from('feed').select('*').in('id',ids).order('created_at',{ascending:false})).data||[]).filter(p=>!BLOCKS.has(p.user_id)&&!(p.repost_of&&!p.o_handle)):[];MORE=false;LK=new Set();BM=new Set(ids);await marks(ids)}
async function loadDiscover(more){D_ERR='';const off=more?DISC_OFF:0;DISC_LD=true;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();const {data,error}=await sb.rpc('discover_people',{lim:PAGE,off_n:off});DISC_LD=false;if(error){D_ERR=error.message;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();return}const rows=data||[];DISC_OFF=off+rows.length;DISC_MORE=rows.length==PAGE;DISC=more?[...DISC,...rows]:rows;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml()}
async function loadDiscoverPeople(forceFetch){
  D_ERR='';
  if(!forceFetch&&DPEOPLE.length){DPEOPLE=shuffle(DPEOPLE);if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();return}
  DPEOPLE_LD=true;
  if(V=='discover'&&DTAB=='all'&&$('#dr'))$('#dr').innerHTML=discResHtml();
  let res=await sb.rpc('discover_all_people',{lim:60});
  if(res.error){res=await sb.rpc('random_profiles',{n:30})}
  DPEOPLE_LD=false;
  if(res.error){D_ERR=res.error.message;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();return}
  DPEOPLE=shuffle((res.data||[]).filter(x=>x.id!=me.id&&!BLOCKS.has(x.id)));
  if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();
}
async function loadDiscoverSearch(more){D_ERR='';const q=DQV.trim();if(!q){DSR=[];DSR_OFF=0;DSR_MORE=false;DSR_LD=false;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();return}const off=more?DSR_OFF:0;DSR_LD=true;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();const {data,error}=await sb.rpc('search_discover_users',{q,lim:PAGE,off_n:off});DSR_LD=false;if(DQV.trim()!=q)return;if(error){D_ERR=error.message;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();return}const rows=data||[];DSR_OFF=off+rows.length;DSR_MORE=rows.length==PAGE;DSR=more?[...DSR,...rows]:rows;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml()}
async function loadSafety(){if(!me)return;const [k,m,b]=await Promise.all([sb.from('hidden_keywords').select('id,keyword').eq('user_id',me.id).order('created_at',{ascending:false}),sb.from('mutes').select('muted').eq('muter',me.id),sb.from('blocks').select('blocked').eq('blocker',me.id)]);HKW=k.data||[];MUTES=new Set((m.data||[]).map(x=>x.muted));BLOCKS=new Set((b.data||[]).map(x=>x.blocked))}
async function loadSafetyProfiles(){SAFETY_LD=true;paint();const mids=[...MUTES],bids=[...BLOCKS];const [mr,br]=await Promise.all([mids.length?sb.from('profiles').select('id,handle,name,avatar_url,is_elite,is_legendary,is_founder_elite').in('id',mids):Promise.resolve({data:[]}),bids.length?sb.from('profiles').select('id,handle,name,avatar_url,is_elite,is_legendary,is_founder_elite').in('id',bids):Promise.resolve({data:[]})]);SAFETY_M=mr.data||[];SAFETY_B=br.data||[];SAFETY_LD=false;if(V=='safety')paint()}
async function fetchStreak(uid){const {data,error}=await sb.rpc('streak_status',{p_target:uid||me.id});if(error)return null;return Array.isArray(data)?data[0]:data}
async function loadMyStreak(){if(!me)return null;const row=await fetchStreak(me.id);if(row){MY_STREAK=row;me.streak=+row.streak||0;me.last_post_day=row.last_post_day;me.is_legendary=!!row.is_legendary}return MY_STREAK}
async function loadPrStreak(uid){if(!uid)return null;const row=await fetchStreak(uid);if(row){PR_STREAK=row;if(PR&&PR.id==uid){PR.streak=+row.streak||0;PR.last_post_day=row.last_post_day;PR.is_legendary=!!row.is_legendary}if(me&&me.id==uid){MY_STREAK=row;me.streak=+row.streak||0;me.last_post_day=row.last_post_day;me.is_legendary=!!row.is_legendary}}return PR_STREAK}
const streakV=()=>{const st=MY_STREAK,s=st?+st.streak||0:0,leg=st?!!st.is_legendary:!!me.is_legendary,B=[['First qualifying post',!!(st?st.last_post_day:me.last_post_day)],['3-day streak',s>=3],['7-day Legendary goal',s>=7],['30-day streak',s>=30],['Legendary badge',leg],['Elite member',!!me.is_elite]];
return`<div class="pg">${streakCardHtml(st,true,false)}<h3>Badges</h3><div class="bgs">${B.map(b=>`<div class="${b[1]?'got':''}">${b[0]}</div>`).join('')}</div><h3>Top streaks</h3><div>${TOP.length?TOP.map((r,i)=>`<div class="row"><b>${i+1}</b>${av(r.name,r.avatar_url,r.handle,r.is_founder_elite)}<div class="g">${nameCell(r)}</div><b>${+r.effective_streak||0}</b></div>`).join(''):'<p class="sm mu">No active streaks yet.</p>'}</div></div>`};
const curUtcMonth=()=>new Date().toISOString().slice(0,7);
const prevUtcMonth=()=>{const d=new Date();return new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()-1,1)).toISOString().slice(0,7)};
function utcResetTxt(){const n=new Date(),mins=Math.max(1,1440-(n.getUTCHours()*60+n.getUTCMinutes())),h=Math.floor(mins/60),m=mins%60;return`00:00 UTC (in ${h}h ${m}m)`}
function fmtEliteLeft(iso){if(!iso)return'';const ms=new Date(iso).getTime()-Date.now();if(ms<=0)return'Expired';const d=Math.floor(ms/864e5),h=Math.floor((ms%864e5)/36e5);return d>0?`${d}d ${h}h left`:`${Math.max(1,Math.ceil(ms/36e5))}h left`}
function fmtMonthReset(iso){if(!iso)return'00:00 UTC on the 1st of next month';const d=new Date(iso);return d.toLocaleDateString(undefined,{month:'short',day:'numeric',timeZone:'UTC'})+' at 00:00 UTC ('+fmtEliteLeft(iso)+')'}
async function syncMyElite(){if(!me)return;try{const {data,error}=await sb.rpc('sync_my_elite_status');if(!error&&data){const r=Array.isArray(data)?data[0]:data;if(r){me.is_elite=!!r.is_elite;me.elite_expires_at=r.elite_expires_at||null;me.points_balance=+r.points_balance||0;me.theme=r.theme||'snow';applyTheme(activeThemeKey());if(PR&&PR.id==me.id){PR.is_elite=me.is_elite;PR.elite_expires_at=me.elite_expires_at;PR.theme=me.theme}}}}catch(e){}}
async function loadEliteWallet(){if(!me)return;ELT_LD=true;ELT_ERR='';if(V=='elite')paint();const {data,error}=await sb.rpc('elite_wallet_status');ELT_LD=false;if(error){ELT_ERR=error.message}else{const r=Array.isArray(data)?data[0]:data;if(r){ELT_ST=r;me.is_elite=!!r.is_elite;me.elite_expires_at=r.elite_expires_at||null;me.points_balance=+r.points_balance||0;applyTheme(activeThemeKey());if(PR&&PR.id==me.id){PR.is_elite=me.is_elite;PR.elite_expires_at=me.elite_expires_at}}}if(V=='elite')paint()}
async function loadLeaderboard(){if(!me)return;LB_LD=true;LB_ERR='';if(V=='elite')paint();const mk=LB_MONTH=='prev'?prevUtcMonth():curUtcMonth();const {data,error}=await sb.rpc('monthly_elite_leaderboard',{p_month_key:mk,p_lim:50});LB_LD=false;if(error)LB_ERR=error.message;else LB_LIST=data||[];if(V=='elite')paint()}
const meterRow=(lbl,sub,cur,cap)=>{const pct=Math.min(100,Math.round((cur/Math.max(1,cap))*100));return`<div><div class="eltrow"><span>${lbl}</span><span class="mu">${sub}</span></div><div class="eltmeter"><i style="width:${pct}%"></i></div></div>`};
function eliteWalletHtml(){
  const R=[['Posts per day','10','50'],['Post length','1,500','3,000'],['Edit published posts','Locked','Included'],['Images per day','10','20'],['Messages per day','300','700'],['Voice messages / day','10 (30s max)','30 (30s max)'],['Explore ranking','Standard','Priority boost'],['Badge','Legendary via streak','Blue tick'],['Name','Plain','Golden glow'],['Themes','Pure White & Midnight','6 custom themes']];
  if(ELT_ERR)return`<p class="empty">${esc(ELT_ERR)}</p>`;
  if(ELT_LD&&!ELT_ST)return sk();
  const s=ELT_ST||{points_balance:+(me&&me.points_balance)||0,is_elite:!!(me&&me.is_elite),is_permanent_elite:!!(me&&me.is_elite&&!me.elite_expires_at),elite_expires_at:me&&me.elite_expires_at,checkin_claimed:false,posts_earned:0,posts_cap:5,replies_earned:0,replies_cap:6,likes_earned:0,likes_cap:10,points_today:0,max_daily_points:115};
  const bal=+s.points_balance||0,perm=!!s.is_permanent_elite,act=!!s.is_elite;
  const stPill=perm?'Permanent Elite':act?`Elite Active · ${fmtEliteLeft(s.elite_expires_at)}`:'Free Tier';
  const expSub=perm?'Manual permanent recognition active.':act&&s.elite_expires_at?`Expires ${new Date(s.elite_expires_at).toLocaleString(undefined,{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',timeZone:'UTC'})} UTC · New days stack`:'Earn daily points below or apply at a 30-day streak.';
  return`<div class="eltstat">
    <div class="elttop">
      <div><span class="eltpill${act?' on':''}">${esc(stPill)}</span><p class="sm mu" style="margin-top:8px">${esc(expSub)}</p></div>
      <div style="text-align:right"><span class="mu sm">Points Wallet</span><div class="eltpts">${bal.toLocaleString()}</div></div>
    </div>
    <button type="button" class="btn pri wide" style="margin:0" data-a="eltcheckin"${s.checkin_claimed||ELT_BZ?' disabled':''}>${s.checkin_claimed?`Checked in today · Resets ${utcResetTxt()}`:ELT_BZ?'Claiming…':'Claim Daily Check-in (+15 pts)'}</button>
  </div>
  <div class="eltprog">
    <div class="eltrow"><b>Daily Missions · UTC Earn Progress</b><span class="mu">${+s.points_today||0} / ${+s.max_daily_points||115} pts</span></div>
    <p class="sm mu">Resets daily at ${utcResetTxt()}. Activity points update automatically as you post, reply, and like.</p>
    ${meterRow('Daily Check-in (+15 pts)',s.checkin_claimed?'15 / 15 pts':'0 / 15 pts',s.checkin_claimed?1:0,1)}
    ${meterRow('Posts (+10 pts each)',`${+s.posts_earned||0}/${+s.posts_cap||5} · ${(+s.posts_earned||0)*10}/50 pts`,+s.posts_earned||0,+s.posts_cap||5)}
    ${meterRow('Replies (+5 pts, 1/post)',`${+s.replies_earned||0}/${+s.replies_cap||6} · ${(+s.replies_earned||0)*5}/30 pts`,+s.replies_earned||0,+s.replies_cap||6)}
    ${meterRow('Likes given (+2 pts, 1/post)',`${+s.likes_earned||0}/${+s.likes_cap||10} · ${(+s.likes_earned||0)*2}/20 pts`,+s.likes_earned||0,+s.likes_cap||10)}
  </div>
  <div><b>Redeem Elite Days</b><p class="sm mu" style="margin-top:2px">Redeemed days stack directly onto your existing Elite expiry date.</p></div>
  <div class="eltredeem">
    <div class="eltrcard"><div><h4>3 Days Elite</h4><div class="eltrcost">700 pts</div><p class="sm mu" style="margin-top:4px">Instant +3 days stacked onto your membership.</p></div><button type="button" class="btn${bal>=700&&!perm?' pri':''} sm" data-a="eltredeem" data-id="3"${bal<700||perm||ELT_BZ?' disabled':''}>${perm?'Permanent Active':bal>=700?'Redeem 3 Days':`Need ${700-bal} more`}</button></div>
    <div class="eltrcard"><div><h4>7 Days Elite</h4><div class="eltrcost">1,200 pts</div><p class="sm mu" style="margin-top:4px">Best value · +7 stacked Elite days.</p></div><button type="button" class="btn${bal>=1200&&!perm?' pri':''} sm" data-a="eltredeem" data-id="7"${bal<1200||perm||ELT_BZ?' disabled':''}>${perm?'Permanent Active':bal>=1200?'Redeem 7 Days':`Need ${1200-bal} more`}</button></div>
  </div>
  <div style="margin-top:4px"><b>Compare Free vs Elite</b></div>
  <div class="cmp"><div class="h"></div><div class="h">Free</div><div class="h">Elite</div>${R.map(r=>`<div>${r[0]}</div><div>${r[1]}</div><div>${r[2]}</div>`).join('')}</div>`;
}
function eliteApplyHtml(){
  if(ELT_ERR)return`<p class="empty">${esc(ELT_ERR)}</p>`;
  if(ELT_LD&&!ELT_ST)return sk();
  const s=ELT_ST||{effective_streak:+(MY_STREAK&&MY_STREAK.streak)||+(me&&me.streak)||0,is_permanent_elite:false,app_status:null,app_expires_at:null,app_note:null,app_review_note:null};
  const stk=+s.effective_streak||0,perm=!!s.is_permanent_elite,st=s.app_status,pct=Math.min(100,Math.round((stk/30)*100));
  if(perm)return`<div class="eltappcard"><div class="elttop"><b>Permanent Elite Active</b><span class="eltpill on">Unlocked</span></div><p class="sm mu">Your account already holds permanent NYXORA Elite access.</p></div>`;
  const pill=st=='approved'?'<span class="eltpill on">Approved (+30d Elite)</span>':st=='rejected'?'<span class="eltpill rej">Declined this month</span>':st=='pending'?'<span class="eltpill app">Applied · Pending review</span>':stk>=30?'<span class="eltpill on">Eligible</span>':'<span class="eltpill">Locked</span>';
  return`<div class="eltappcard">
    <div class="elttop"><div><b>Apply for NYXORA Elite</b><p class="sm mu" style="margin-top:4px">Requires an active 30+ day posting streak. Approved applications add +30 stacked Elite days.</p></div>${pill}</div>
    ${meterRow('Streak Requirement',`${stk} / 30 days`,Math.min(30,stk),30)}
    ${st?`<div class="sm"><b>Status:</b> ${st=='pending'?'Applied — awaiting admin review.':st=='approved'?'Approved — +30 days of Elite added!':'Declined for this month.'}</div>${s.app_note?`<div class="modsnap">${esc(s.app_note)}</div>`:''}${s.app_review_note?`<div class="sm mu"><b>Reviewer note:</b> ${esc(s.app_review_note)}</div>`:''}<p class="sm mu">Cooldown until end-of-month midnight: ${esc(fmtMonthReset(s.app_expires_at))}.</p><button type="button" class="btn wide" style="margin:0" disabled>Applied</button>`:stk>=30?`<textarea id="eltappnote" class="ta" maxlength="240" placeholder="Optional note for NYXORA reviewers (e.g., what you share on NYXORA)…"></textarea><button type="button" class="btn pri wide" style="margin:0" data-a="eltapply"${ELT_BZ?' disabled':''}>${ELT_BZ?'Submitting…':'Apply for Elite'}</button>`:`<p class="sm mu">Reach a 30-day active streak (${30-stk} more day${30-stk===1?'':'s'} to go) to unlock Elite Apply.</p><button type="button" class="btn wide" style="margin:0" disabled>Apply for Elite (Need 30d streak)</button>`}
  </div>`;
}
function eliteLeaderboardHtml(){
  const curM=curUtcMonth(),prevM=prevUtcMonth(),s=ELT_ST;
  const myRow=s&&LB_MONTH=='cur'?(s.is_admin?'<div class="eltappcard"><span class="sm mu">Admin accounts are excluded from the Monthly Leaderboard and Top 5 prizes.</span></div>':`<div class="eltappcard"><div class="eltrow"><b>Your ${esc(curM)} Standing</b><span>${s.monthly_rank?`Rank #${s.monthly_rank} · `:''}<b>${(+s.monthly_points||0).toLocaleString()} pts</b></span></div></div>`):'';
  const listHtml=LB_ERR?`<p class="empty">${esc(LB_ERR)}</p>`:LB_LD?sk():LB_LIST.length?LB_LIST.map(r=>{
    const rk=+r.rank_pos||0,cls=rk==1?'top1':rk==2?'top2':rk==3?'top3':rk<=5?'top5':'';
    const prize=r.is_winner?'Won 14d Elite':(LB_MONTH=='cur'&&rk<=5?'Top 5 · 14d Elite':'');
    return`<div class="lbrow${r.user_id==me.id?' me':''}"><span class="lbrank ${cls}">#${rk}</span>${av(r.name,r.avatar_url,r.handle,r.is_founder_elite)}<div class="g"><div class="hd">${nameCell(r)}</div><div class="mu sm">@${esc(r.handle)}</div></div><div class="lbpts"><b>${(+r.points||0).toLocaleString()} pts</b>${prize?`<span class="lbwin">${prize}</span>`:''}</div></div>`;
  }).join(''):`<p class="empty">${LB_MONTH=='prev'?`No leaderboard scores recorded for ${esc(prevM)}.`:'No monthly points earned yet this month.'}</p>`;
  return`<div class="lbprizecard">
    <div class="lbmbar"><div><b>Monthly Leaderboard</b><p class="sm mu" style="margin-top:2px">Top 5 non-admin earners each month win <b>14 days of stacked Elite</b> at 00:00 UTC on the 1st.</p></div><span class="eltpill on">Top 5 · 14d</span></div>
    <div class="lbmbtns">
      <button type="button" class="btn sm${LB_MONTH=='cur'?' pri':''}" data-a="lbmonth" data-id="cur">This Month (${esc(curM)})</button>
      <button type="button" class="btn sm${LB_MONTH=='prev'?' pri':''}" data-a="lbmonth" data-id="prev">Last Month (${esc(prevM)})</button>
    </div>
  </div>${myRow}<div class="box" style="padding:0;overflow:hidden">${listHtml}</div>`;
}
const eliteV=()=>`<div class="tabs"><button class="${ELT_TAB=='wallet'?'on':''}" data-a="elttab" data-id="wallet">Wallet &amp; Perks</button><button class="${ELT_TAB=='apply'?'on':''}" data-a="elttab" data-id="apply">Elite Apply</button><button class="${ELT_TAB=='leaderboard'?'on':''}" data-a="elttab" data-id="leaderboard">Leaderboard</button></div><div class="pg">${ELT_TAB=='apply'?eliteApplyHtml():ELT_TAB=='leaderboard'?eliteLeaderboardHtml():`<div class="fl"><span style="display:inline-flex;transform:scale(1.6);margin-bottom:4px">${bd('e')}</span><h1>NYXORA Elite</h1><p class="sm mu">Always ad-free · Membership perks do not verify real-world identity.</p></div>${eliteWalletHtml()}`}</div>`;
function legalV(kind){
  const tabs=`<div class="tabs"><button class="${kind=='privacy'?'on':''}" data-a="legal" data-id="privacy">Privacy</button><button class="${kind=='terms'?'on':''}" data-a="legal" data-id="terms">Terms</button><button class="${kind=='retention'?'on':''}" data-a="legal" data-id="retention">Retention</button></div>`;
  const mail=`<a class="lnk" href="mailto:${LEGAL_EMAIL}">${LEGAL_EMAIL}</a>`;
  if(kind=='privacy'){
    return`${tabs}<div class="pg legpg"><h2>NYXORA Privacy Policy</h2><p class="sm mu">Effective November 2026 · Contact: ${mail}</p>
    <div class="legcard"><b>1. Information We Collect</b><p class="sm mu">When you sign in to NYXORA with Google, we store your linked Google email address, display name, @handle, optional profile details (bio, location, website link, interests, avatar, banner), posts (including optional sensitivity flags), comments, likes, bookmarks, follows, 1-on-1 text and voice messages, app and chat streak history, daily quota ledgers, and safety preferences (Content Moderation mode, hidden keywords, muted accounts, blocked accounts, and reports).</p></div>
    <div class="legcard"><b>2. How Your Data Is Used</b><p class="sm mu">Your data powers feeds, Discover People matching, 1-on-1 messaging, app and chat streaks, daily Hot feed quotas, Content Moderation filtering, and abuse moderation. NYXORA is ad-free, never sells your personal information, and never exposes private messages, private voice clips, or private reports to the public feed.</p></div>
    <div class="legcard"><b>3. Automatic Data Expiry Rules</b><p class="sm mu">• <b>Notifications (90 Days):</b> Ordinary social notifications expire and are permanently deleted 90 days after delivery. Moderation action notices remain retained for account safety records.<br>• <b>Direct Messages &amp; Voice Clips (7 Days):</b> Private text messages and compressed 30-second voice clips automatically expire and are permanently deleted 7 days after they were sent (or earlier if deleted for everyone by the sender). Deletion on NYXORA cannot erase screenshots or copies saved outside the app by a recipient.<br>• <b>Post Images (30 Days):</b> Post image attachments automatically expire 30 days after upload and are removed from feeds and storage. Profile avatars and banners stay active until replaced or deleted.</p></div>
    <div class="legcard"><b>4. Moderation, Safety &amp; Blocking</b><p class="sm mu">In Settings &gt; Content Moderation, you can keep <b>Blur</b> mode (which blurs sensitive or NSFW posts until you tap <b>See anyway</b>, with an optional <b>See more sensitive content</b> unblurred view) or switch to <b>Off</b> mode (which hides sensitive posts completely). Post authors can also toggle download buttons per image, and blocking a contact masks their name and photo as <b>Blocked</b> while disabling messaging in both directions.</p></div>
    <div class="legcard"><b>5. Your Rights, Account Deletion &amp; Contact</b><p class="sm mu">You may update your profile, change your username, manage Content Moderation, download your active photos, block or mute accounts, delete contacts or messages, or request account deletion inside Settings &gt; Account at any time. Account deletion signs you out and hides your account for a 72-hour grace period (signing back in with Google within 72 hours restores it; after 72 hours it is permanently deleted). For privacy questions, email ${mail}.</p></div></div>`;
  }
  if(kind=='terms'){
    return`${tabs}<div class="pg legpg"><h2>NYXORA Terms of Service</h2><p class="sm mu">Effective November 2026 · Contact: ${mail}</p>
    <div class="legcard"><b>1. Account &amp; Google Sign-In</b><p class="sm mu">Access to NYXORA requires signing in with Google. You are responsible for safeguarding your Google account and all activity under your NYXORA profile. Choose an accurate display name and follow NYXORA handle rules (3–20 lowercase letters, numbers, or underscores).</p></div>
    <div class="legcard"><b>2. Acceptable Conduct &amp; Sensitivity Labeling</b><p class="sm mu">Do not post harassment, threats, hate speech, non-consensual explicit material, scams, impersonation, or unlawful content. Tag sensitive or NSFW posts truthfully using the composer checkbox; automated keyword detection may also flag explicit posts for Content Moderation filtering. Do not attempt to bypass daily quotas, rate limits (8 direct messages per 30 seconds), block restrictions, or backend security controls.</p></div>
    <div class="legcard"><b>3. Content &amp; Fair Moderation</b><p class="sm mu">You retain ownership of the content you publish while granting NYXORA permission to host and display it within the service. Reports are reviewed privately by human moderators before removal; when content violates these rules and is removed, NYXORA sends an accurate removal reason notice to the owner rather than issuing unreviewed blind bans.</p></div>
    <div class="legcard"><b>4. Daily Quotas, Ad-Free Service &amp; Elite Perks</b><p class="sm mu">NYXORA is ad-free across all accounts. Free accounts include 10 posts/day (1,500 chars), 10 post images/day, 300 text DMs/day, 10 voice DMs/day (30s max), and Pure White &amp; Midnight themes. Elite accounts include 50 posts/day (3,000 chars), post editing, 20 post images/day, 700 text DMs/day, 30 voice DMs/day (30s max), priority Explore visibility, 6 custom themes, and visual badges (blue tick and golden glow). All accounts include up to <b>300 Hot feed items/day</b> resetting at <b>00:00 PKT (Asia/Karachi, UTC+5)</b>. Elite marks denote membership perks and <b>do not verify real-world identity</b>.</p></div>
    <div class="legcard"><b>5. Account Deletion, Retention &amp; Contact</b><p class="sm mu">NYXORA is provided on an as-available basis. Requesting account deletion signs you out and hides your profile for 72 hours before permanent deletion (you can cancel by signing back in with Google during the 72-hour window). Scheduled expiry jobs permanently purge 7-day text and voice messages, 30-day post images, and 90-day notifications. Questions or moderation appeals can be sent to ${mail}.</p></div></div>`;
  }
  return`${tabs}<div class="pg legpg"><h2>Data Retention &amp; Safety Guide</h2><p class="sm mu">How automatic expiry, daily quotas, content moderation, and privacy controls work across NYXORA.</p>
  <div class="legcard"><b>Content Moderation (Blur vs. Off)</b><p class="sm mu">Posts tagged by authors or flagged by keyword detection obey your choice in Settings &gt; Content Moderation. <b>Blur</b> mode blurs sensitive/NSFW posts until you tap <b>See anyway</b> (with an optional <b>See more sensitive content</b> toggle to view them unblurred). <b>Off</b> mode removes sensitive/NSFW posts from your feeds, profiles, bookmarks, and search.</p></div>
  <div class="legcard"><b>7-Day Direct Message &amp; Voice Retention</b><p class="sm mu">1-on-1 text messages and compressed 30-second voice clips automatically expire 7 days after sending. Senders can edit text messages within 1 hour or choose <b>Delete for me</b> / <b>Delete for everyone</b>. Server-enforced limits: max 8 messages per 30 seconds, 300 text + 10 voice DMs/day (Free) or 700 text + 30 voice DMs/day (Elite) resetting at 00:00 UTC. Mutual Chat Streaks require both sides to message on a UTC day and can be restored within 24 hours up to 3 times per month per chat. Blocking masks the contact as <b>Blocked</b> and disables reading and sending.</p></div>
  <div class="legcard"><b>Daily Feed &amp; Image Quotas (UTC &amp; PKT)</b><p class="sm mu">The <b>Hot</b> tab loads up to <b>300 items per user per day</b> (Wikipedia, Trivia, Dogs, Tech News, and random Polls/Cards) and resets daily after <b>00:00 PKT (Asia/Karachi, UTC+5)</b>. Post images are compressed under 300 KB and expire 30 days after upload (profile avatars and banners stay active until changed). Ordinary notifications expire after 90 days.</p></div>
  <div class="legcard"><b>Reporting &amp; Admin Review</b><p class="sm mu">You can privately report posts, comments, messages, or profiles. Submitting a report sends you a confirmation notice and places it in a restricted admin-only review queue. Moderators can dismiss a report, remove violating content with an accurate reason delivered to the owner, or send a caution notice.</p></div>
  <div class="legcard"><b>Support &amp; Appeals</b><p class="sm mu">Need help with privacy, safety, or a moderation notice? Reach us anytime at ${mail}.</p></div></div>`;
}
const authV=()=>`<section class="pg auth" style="padding-top:44px"><div class="logo">${ring}NYXORA</div><h1>Say something.<br>Find your people.</h1><p class="authsub">Sign in with your Google account to post, discover people who share your interests, and unlock NYXORA Elite.</p><p class="err" id="er">${esc(OAUTH_ERR)}</p><button type="button" class="gbtn" id="gbtn" data-a="gsignin">${G_ICON}<span>Continue with Google</span></button><div class="authleg"><div class="authleglinks"><button type="button" data-a="legal" data-id="privacy">Privacy Policy</button><span aria-hidden="true">·</span><button type="button" data-a="legal" data-id="terms">Terms of Service</button><span aria-hidden="true">·</span><button type="button" data-a="legal" data-id="retention">Retention &amp; Safety</button></div><p class="sm mu">Google Sign-In · 90d notifications · 7d DMs &amp; voice · 30d post images · Ad-free · <a class="lnk" href="mailto:${LEGAL_EMAIL}">${LEGAL_EMAIL}</a></p></div></section>`;
function paint(){applyTheme(activeThemeKey());const a=$('#app');
const TTL={post:'Post',list:LT,edit:'Edit profile',bms:'Bookmarks',notif:'Notifications',settings:'Settings',acct:'Account',disp:'Display & themes',hkw:'Hidden Keywords',cmod:'Content Moderation',safety:'Muted & Blocked',chats:'Messages',mod:'Moderation Queue',user:'Profile',privacy:'Privacy Policy',terms:'Terms of Service',retention:'Retention & Safety'};
if(!me){if(V=='privacy'||V=='terms'||V=='retention'){a.innerHTML=`<div class="hdr"><button class="bk2" data-a="authback" aria-label="Back">${I.back}</button><b>${esc(TTL[V])}</b><span></span></div>${legalV(V)}`;return}a.innerHTML=authV();return}
const N=[['home','home'],['streak','fire'],['new','plus'],['discover','disc'],['me','me']],on=k=>k=='me'?V=='user'&&U==me.handle:V==k;
const bk=`<button class="bk2" data-a="back" aria-label="Back">${I.back}</button>`;
const dmStkBtnHtml=()=>{if(DM_BLOCKED||!DM_PARTNER)return'';const e=DM_STREAK?DM_STREAK.effective_streak:0;if(DM_STREAK&&DM_STREAK.can_restore)return`<button type="button" class="dmstkbtn rst" data-a="dmstkinfo" aria-label="Chat streak restore available">🔥 Restore</button>`;return`<button type="button" class="dmstkbtn${e>0?' hot':''}" data-a="dmstkinfo" aria-label="Chat streak ${e} days">🔥 ${e}</button>`};
const dmHdrActsHtml=()=>{if(DM_BLOCKED||!DM_PARTNER)return'<span></span>';return`<div class="dmhdracts"><button type="button" class="dmthbtn" data-a="dmtheme" aria-label="Chat theme and wallpaper" title="Chat theme & wallpaper">${I.pal}</button>${dmStkBtnHtml()}</div>`};
const dmHdrBlocked=DM_PARTNER&&(DM_BLOCKED||BLOCKS.has(DM_PARTNER.id));
const hdr=V=='search'?`<div class="hdr">${bk}<div class="sqw"><input id="sq" class="sqi" style="margin-left:0" placeholder="Search posts, topics, or users" enterkeyhint="search" value="${esc(SQV)}" autocomplete="off">${SQV?'<button type="button" class="sqc" data-a="sqclear" aria-label="Clear search">✕</button>':''}</div></div>`:V=='dm'&&DM_PARTNER?`<div class="hdr">${bk}<div class="dmh"${dmHdrBlocked?'':` data-a="user" data-id="${esc(DM_PARTNER.handle)}"`}>${dmHdrBlocked?`<div class="av blk">${I.blk}</div><div style="min-width:0"><b>Blocked</b></div>`:`${av(DM_PARTNER.name,DM_PARTNER.avatar_url,null,DM_PARTNER.is_founder_elite)}<div style="min-width:0"><div class="hd"><b class="${DM_PARTNER.is_elite?'glow':''}">${esc(DM_PARTNER.name)}</b>${badge(DM_PARTNER)}</div><div class="mu sm">@${esc(DM_PARTNER.handle)}</div></div>`}</div>${dmHdrActsHtml()}</div>`:isSub()?`<div class="hdr">${bk}<b>${esc(TTL[V]||'')}</b><span></span></div>`:`<div class="hdr"><button class="gear" data-a="settings" aria-label="Settings">${I.gear}</button><div class="logo">${ring}NYXORA</div><span class="hs"><button data-a="search" aria-label="Search">${I.search}</button><button class="hchat" data-a="chats" aria-label="Messages">${I.chat}${UNR_CHAT?`<i class="nd">${UNR_CHAT>9?'9+':UNR_CHAT}</i>`:''}</button><button class="bell" data-a="notif" aria-label="Notifications">${I.bell}${UNR?`<i class="nd">${UNR>9?'9+':UNR}</i>`:''}</button></span></div>`;
a.innerHTML=hdr+(V=='home'?home():V=='streak'?streakV():V=='discover'?discoverV():V=='elite'?eliteV():V=='post'&&DET?postV():V=='list'?peopleV(LIST):V=='search'?`<div id="sr">${srHtml()}</div>`:V=='edit'?editV():V=='bms'?bmsV():V=='notif'?notifV():V=='settings'?setV():V=='acct'?acctV():V=='disp'?dispV():V=='hkw'?hkwV():V=='cmod'?cmodV():V=='safety'?safetyV():V=='chats'?chatsV():V=='dm'?dmV():V=='mod'?modV():V=='privacy'||V=='terms'||V=='retention'?legalV(V):PR?prof():(V=='user'?profSk():sk()))+`<nav class="nav"><div>${N.map(n=>n[0]=='new'?`<button class="fab" data-a="new" aria-label="New post">${I.plus}</button>`:`<button class="${on(n[0])?'on':''}" data-a="nav" data-id="${n[0]}" aria-label="${n[0]}">${I[n[1]]}</button>`).join('')}</div></nav>`;watchHot();watchFeed()}

// ---------- data ----------
async function loadMe(id){const {data,error}=await sb.from('profiles').select('*').eq('id',id).maybeSingle();if(error)throw Error('Could not load your profile: '+error.message);me=data}
async function loadFol(id){FOL=new Set(((await sb.from('follows').select('followee').eq('follower',id)).data||[]).map(r=>r.followee))}
async function loadPosts(more){
if(V=='home'&&T=='fy'){const ex=[...new Set([...(more?POSTS.map(p=>p.id):[]),...SEEN_SENT])].slice(-1000);let {data,error}=await sb.rpc('explore_feed',{lim:PAGE,exclude_ids:ex});if(error){toast(error.message);return}let rows=data||[];if(!more&&!rows.length&&ex.length){const fb=await sb.rpc('explore_feed',{lim:PAGE,exclude_ids:[]});if(!fb.error)rows=fb.data||[]}MORE=rows.length==PAGE;const have=more?new Set(POSTS.map(p=>p.id)):new Set();const add=rows.filter(p=>!have.has(p.id));POSTS=more?[...POSTS,...add]:add;FEED_READY=true;if(!more){LK=new Set();BM=new Set();RP=new Set();OFF=rows.length}else OFF+=add.length;await marks([...new Set(add.map(tid))]);trackViews(add);return}
const from=more?OFF:0;let q=sb.from('feed').select('*');
if(V=='user')q=q.eq('user_id',PR.id).order('pinned_at',{ascending:true,nullsFirst:false}).order('created_at',{ascending:false}).range(from,from+PAGE-1);else{q=q.order('created_at',{ascending:false}).range(from,from+PAGE-1);if(T=='fl')q=q.in('user_id',[...FOL,me.id])}
const {data,error}=await q;if(error){toast(error.message);return}OFF=from+data.length;MORE=data.length==PAGE;const have=more?new Set(POSTS.map(p=>p.id)):new Set();const add=data.filter(p=>!have.has(p.id));POSTS=more?[...POSTS,...add]:add;if(!more){LK=new Set();BM=new Set();RP=new Set()}
await marks([...new Set(add.map(tid))]);trackViews(add)}
async function loadSug(){const {data}=await sb.from('profiles').select('id,handle,name,is_elite,is_legendary,is_founder_elite,avatar_url').neq('id',me.id).order('created_at',{ascending:false}).limit(16);SUG=(data||[]).filter(s=>!FOL.has(s.id)&&!BLOCKS.has(s.id)&&!MUTES.has(s.id)).slice(0,3)}
async function loadCm(id){const [{data,error},pinRes]=await Promise.all([sb.from('comment_feed').select('*').eq('post_id',id).order('created_at'),sb.from('posts').select('pinned_comment_id').eq('id',id).maybeSingle()]);if(error)toast(error.message);if(DET&&DET.id==id&&pinRes&&!pinRes.error&&pinRes.data)DET.pinned_comment_id=pinRes.data.pinned_comment_id;CM[id]=(data||[]).filter(c=>!BLOCKS.has(c.user_id));const ids=CM[id].map(c=>c.id),uids=[...new Set(CM[id].map(c=>c.user_id).filter(Boolean))];const [clRes,fpRes]=await Promise.all([ids.length?sb.from('comment_likes').select('comment_id').eq('user_id',me.id).in('comment_id',ids):Promise.resolve({data:[]}),uids.length?sb.from('profiles').select('id,is_founder_elite').in('id',uids):Promise.resolve({data:[]})]);(clRes.data||[]).forEach(x=>CLK.add(x.comment_id));const fm=Object.fromEntries((fpRes.data||[]).map(x=>[x.id,!!x.is_founder_elite]));CM[id].forEach(c=>{c.is_founder_elite=!!fm[c.user_id]})}
async function refresh(){
if(V=='home'&&T!='ht')await loadPosts();
else if(V=='bms')await loadBms();
else if(V=='user'){PR_STREAK=null;PR=(await sb.from('profiles').select('*').eq('handle',U).maybeSingle()).data;if(!PR){toast('Profile not found');return go('home')}if(BLOCKS.has(PR.id)||!canViewPrivateProf(PR)){POSTS=[];MORE=false;await Promise.all([loadCnt(),loadPrStreak(PR.id)])}else await Promise.all([loadPosts(),loadCnt(),loadPrStreak(PR.id)])}
else if(V=='streak'){const [,tRes]=await Promise.all([loadMyStreak(),sb.rpc('top_streaks',{p_lim:10})]);TOP=(tRes&&tRes.data)||[]}
else if(V=='discover')await Promise.all([loadDiscover(false),loadDiscoverPeople(true)]);
else if(V=='safety')await loadSafetyProfiles();
else if(V=='elite')await Promise.all([loadEliteWallet(),ELT_TAB=='leaderboard'?loadLeaderboard():Promise.resolve()]);
LD=false;if(V=='home'&&T=='fy'&&me)cacheSave();paint()}
async function go(v,h){DM_SVC.disconnectThread();stopDmAudio();cancelDmRec();DM_EDIT_ID=null;DM_REPLY=null;DM_STREAK=null;DM_BLOCKED=false;V=v;OP=null;PS=[];UPUSH=false;if(v=='user'){U=h;PR=null;PR_STREAK=null}if(v=='discover'){DQV='';DSR=[];DSR_OFF=0;DSR_MORE=false;DSR_LD=false;DISC=[];DISC_OFF=0;DISC_MORE=false;DISC_LD=true;DPEOPLE=[];DPEOPLE_LD=true;D_ERR=''}if(v=='home'||v=='user'){POSTS=[];LD=true}scrollTo(0,0);paint();await refresh()}
function quotaTxt(){if(!me)return'';if(QUOTA){if(QUOTA.remaining<=0)return`Daily image limit reached (${QUOTA.used_today}/${QUOTA.daily_limit}). Resets at 00:00 UTC.`;return`${QUOTA.remaining} of ${QUOTA.daily_limit} image uploads left today · Resets 00:00 UTC`}return`${me.is_elite?20:10} image uploads/day · Post images expire in 30 days`}
function updQuotaUI(){const q=$('#imgq'),fi=$('#fi'),fil=$('#fil');if(q)q.textContent=quotaTxt();if(fi&&fil){const off=!!(QUOTA&&QUOTA.remaining<=0);fi.disabled=off;fil.classList.toggle('off',off)}}
async function loadQuota(){if(!me)return null;const {data,error}=await sb.rpc('image_quota_status');if(!error&&data){const row=Array.isArray(data)?data[0]:data;if(row){QUOTA={daily_limit:+row.daily_limit,used_today:+row.used_today,remaining:+row.remaining,resets_at:row.resets_at};updQuotaUI()}}return QUOTA}
async function cleanExpired(){if(!me)return;try{const [{data,error},{data:vdata}]=await Promise.all([sb.rpc('claim_my_expired_images'),sb.rpc('claim_my_expired_dm_voices')]);if(!error&&data&&data.length){const paths=[...new Set(data.map(r=>r.image_path).filter(p=>p&&!/\/(avatar|banner)-/.test(p)))];if(paths.length)await sb.storage.from('images').remove(paths)}if(vdata&&vdata.length){const vpaths=[...new Set(vdata.map(r=>r.voice_path).filter(Boolean))];if(vpaths.length)await DM_SVC.removeVoices(vpaths)}}catch(e){}}
async function dlFile(path,name){try{const r=await fetch(imgUrl(path));if(!r.ok)throw Error('Could not download image.');const blob=await r.blob(),ext=blob.type=='image/webp'?'.webp':blob.type=='image/png'?'.png':'.jpg',u=URL.createObjectURL(blob),l=document.createElement('a');l.href=u;l.download=(name||'nyxora-image')+ext;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),1000)}catch(e){toast(e.message||'Could not download image.')}}
function resetLocalState(){freeCrop();stopDmAudio();cancelDmRec();revokeChatUrls();if(CT_DRAFT&&CT_DRAFT.ownsUrl&&CT_DRAFT.previewUrl){try{URL.revokeObjectURL(CT_DRAFT.previewUrl)}catch(e){}}CT_DRAFT=null;if(RT){sb.removeAllChannels();RT=null}DM_SVC.disconnectAll();if(FEED_IO)FEED_IO.disconnect();if(HIO){HIO.disconnect();HIO=null}clearTimeout(SEEN_TMR);clearInterval(DM_RATE_TMR);DM_RATE_TMR=null;if(IMG_PV_URL){URL.revokeObjectURL(IMG_PV_URL);IMG_PV_URL=null}FEED_READY=false;SEEN_SENT=new Set();SEEN_Q=new Set();REQ_OUT=new Set();FREQ=[];FREQ_LD=false;NTAB='all';DM_NEW_IDS=new Set();HKW=[];MUTES=new Set();BLOCKS=new Set();EXPANDED=new Set();REV_KW=new Set();REV_SENS=new Set();SAFETY_M=[];SAFETY_B=[];QUOTA=null;HOT_QUOTA=null;tvLast=0;HOT=[];HPOOL=[];HNEWS=[];HDEAD=false;HLD=false;IMG=null;IMG_META=null;ALLOW_DL=true;POST_SENS=false;UNR_CHAT=0;CHATS=null;DM_CONV=null;DM_PARTNER=null;DM_MSGS=[];DM_SEEN=new Set();DM_MORE=false;DM_LD=false;DM_ALLOW=true;DM_BLOCKED=false;DM_REASON='';DM_SENDING=false;DM_TEXT='';DM_QUOTA=null;DM_EDIT_ID=null;DM_REPLY=null;DM_STREAK=null;DM_STK_BZ=false;DM_VOICE_URLS={};DM_RATE_UNTIL=0;REP_TGT=null;REP_REASON='';MOD_SECTION='reports';MOD_LIST=[];ELT_TAB='wallet';ELT_ST=null;ELT_LD=false;ELT_ERR='';ELT_BZ=false;LB_MONTH='cur';LB_LIST=[];LB_LD=false;LB_ERR='';ELT_APP_TAB='pending';ELT_APPS=[];ELT_APP_LD=false;ELT_APP_ERR='';MY_STREAK=null;PR_STREAK=null;RESTORE_BZ=false;DPEOPLE=[];DPEOPLE_LD=false;SQ_TERMS=[];SQ_LD=false;SHARE_P=null;AUTH_EMAIL='';DEL_BZ=false;me=null;V='home';POSTS=[];try{localStorage.removeItem('nyx_c')}catch(e){}}
async function start(s){s=s||(await sb.auth.getSession()).data.session;if(!s)return paint();AUTH_EMAIL=(s.user&&s.user.email)||'';OAUTH_ERR='';const {error:ensErr}=await sb.rpc('ensure_my_profile');await Promise.all([loadMe(s.user.id),loadFol(s.user.id),loadSafety()]);if(!me){resetLocalState();await sb.auth.signOut();OAUTH_ERR=(ensErr&&ensErr.message)||'Could not initialize your NYXORA profile. Please try signing in with Google again.';paint();return}const {data:delData,error:delErr}=await sb.rpc('sync_account_deletion_state');const delRow=Array.isArray(delData)?delData[0]:delData,delSt=delRow&&delRow.state;if(!delErr&&delSt==='expired'){resetLocalState();await sb.auth.signOut();OAUTH_ERR='Your 72-hour account restoration window expired and your account was permanently deleted.';paint();return}if(!delErr&&delSt==='restored'){await loadMe(s.user.id);toast('Welcome back! Your pending account deletion was cancelled and your profile is active.')}await Promise.all([syncMyElite(),loadOutgoingRequests()]);V='home';T='fy';if(!POSTS.length)LD=true;paint();loadUnread();loadFollowRequests();subRT();startDM();cleanExpired();loadQuota();loadDmQuota();loadHotQuota();loadMyStreak();await refresh()}

// ---------- compose ----------
function setProg(pct,msg){const box=$('#upprog'),bar=$('#upbar'),txt=$('#upmsg');if(!box||!bar||!txt)return;if(pct<=0&&!msg){box.hidden=true;bar.style.width='0%';txt.textContent='';return}box.hidden=false;bar.style.width=Math.min(100,Math.max(0,pct))+'%';txt.textContent=msg||''}
function renderPv(){const pv=$('#pv');if(!pv)return;if(IMG_PV_URL){URL.revokeObjectURL(IMG_PV_URL);IMG_PV_URL=null}if(!IMG){pv.innerHTML='';return}IMG_PV_URL=URL.createObjectURL(IMG);const saved=IMG_META&&IMG_META.orig>0?Math.max(0,Math.round((1-IMG.size/IMG_META.orig)*100)):0,sz=Math.max(1,Math.round(IMG.size/1024));pv.innerHTML=`<div class="pvw"><img class="pvi" src="${IMG_PV_URL}" alt="Selected image preview"><div class="pvbar"><span class="mu sm">Ready · ${sz} KB${saved>0?' (-'+saved+'%)':''}</span><button type="button" class="btn sm" data-a="rmimg">Remove</button></div><label class="dlopt"><span>Allow others to download this image</span><input type="checkbox" id="adlw"${ALLOW_DL?' checked':''}></label><span class="mu sm">When off, normal download buttons are omitted. Screenshots or external copies cannot always be prevented.</span></div>`}
function sheet(){const L=me.is_elite?3000:1500;if(IMG_PV_URL){URL.revokeObjectURL(IMG_PV_URL);IMG_PV_URL=null}IMG=null;IMG_META=null;ALLOW_DL=true;POST_SENS=false;$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><button class="mu" data-a="close">Cancel</button><button class="btn pri sm" id="pb" data-a="post">Post</button></div><textarea id="tx" placeholder="${QT?'Add a comment…':'Share something…'}" maxlength="${L}"></textarea><div id="pv"></div><div id="upprog" class="uprog" hidden><div class="bar"><i id="upbar" style="width:0%"></i></div><span class="mu sm" id="upmsg"></span></div>${QT?qprev():''}<div class="r"><label class="ib" id="fil" aria-label="Attach image">${I.img}<input type="file" id="fi" accept="image/jpeg,image/png,image/webp,image/gif,image/heic,image/heif,image/avif" hidden></label><span class="mu sm" id="ct">0/${L}</span></div><label class="dlopt"><span>Mark as sensitive or NSFW</span><input type="checkbox" id="psens"></label><div class="mu sm" id="imgq">${esc(quotaTxt())}</div><div class="mu sm">${me.is_elite?'Elite: 50 posts, 20 images/day, 3,000 chars':'Free: 10 posts, 10 images/day, 1,500 chars'}</div></div>`;$('#sh').classList.add('on');updQuotaUI();loadQuota();$('#tx').focus()}
function freeCrop(){if(CROP){CROP.bm&&CROP.bm.close&&CROP.bm.close();CROP=null}const pf=$('#pf'),bf=$('#bf');if(pf)pf.value='';if(bf)bf.value=''}
const close=()=>{freeCrop();if(IMG_PV_URL){URL.revokeObjectURL(IMG_PV_URL);IMG_PV_URL=null}if(CT_DRAFT&&CT_DRAFT.ownsUrl&&CT_DRAFT.previewUrl){try{URL.revokeObjectURL(CT_DRAFT.previewUrl)}catch(e){}}CT_DRAFT=null;$('#sh').classList.remove('on');$('#sh').innerHTML='';IMG=null;IMG_META=null;ALLOW_DL=true;POST_SENS=false;QT=null;REP_TGT=null;REP_REASON='';SHARE_P=null;applyTheme(activeThemeKey())};
const findPost=id=>POSTS.find(x=>x.id==id)||SP.find(x=>x.id==id)||(DET&&DET.id==id?DET:null);
function openShareCard(p){
  if(!p)return;
  const rp=!!p.repost_of,t=tid(p),a=rp?{name:p.o_name,handle:p.o_handle,avatar_url:p.o_avatar_url,is_elite:p.o_is_elite,is_legendary:p.o_is_legendary,is_founder_elite:p.o_is_founder_elite}:p,body=String((rp?p.o_body:p.body)||'').trim(),ie=!!(rp?p.o_image_expired:(p.image_expired||(p.image_expires_at&&new Date(p.image_expires_at)<=new Date()))),ip=ie?null:(rp?p.o_image_path:p.image_path),at=rp?p.o_created_at:p.created_at,url=location.origin+location.pathname+'?p='+t;
  SHARE_P={p,t,a,body,url};
  $('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>Share post</b><button class="mu" data-a="close">Close</button></div><div class="scard"><div class="r scardh"><div class="hd">${av(a.name,a.avatar_url,null,a.is_founder_elite)}<div><div class="hd"><b class="${a.is_elite?'glow':''}">${esc(a.name)}</b>${badge(a)}</div><div class="mu sm">@${esc(a.handle)} · ${ago(at)}</div></div></div><span class="scardlogo">${ring}<span>NYXORA</span></span></div>${body?`<p class="pbody scardb">${esc(body.length>240?body.slice(0,240)+'…':body)}</p>`:''}${ip?`<img class="scardimg" src="${imgUrl(ip)}" alt="">`:''}<div class="mu sm scardm">${p.like_count||0} likes · ${p.comment_count||0} replies · ${p.repost_count||0} reposts</div></div><div class="shacts"><button type="button" class="btn pri" data-a="shcopy">Copy Link</button><button type="button" class="btn" data-a="shcopytxt">Copy Text</button><button type="button" class="btn" data-a="shsys">${I.share} Share</button></div></div>`;
  $('#sh').classList.add('on');
}
function openThemeLockPreview(id){
  const entry=THEMES[id];if(!entry)return;
  const [nm,t,desc]=entry;
  applyTheme(id);
  $('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>${esc(nm)} Theme · Locked</b><button class="mu" data-a="close">Close</button></div><div class="thmini" style="background:${t.bg};border-color:${t.ln}"><div class="thminih"><span class="thsws"><i style="background:${t.bg}"></i><i style="background:${t.s2}"></i><i style="background:${t.ac}"></i></span><span class="thpill" style="background:${t.ac}">Live Preview</span></div><div class="thline" style="background:${t.tx}"></div><div class="thline sm" style="background:${t.ac}"></div></div><p class="sm"><b>${esc(nm)}</b> (${esc(desc)}) is one of 6 custom themes exclusive to NYXORA Elite.</p><p class="sm mu">You are viewing a temporary preview. Pure White (Default) and Midnight can be saved on the Free plan.</p><div class="r" style="gap:8px"><button class="btn elt" style="flex:1" data-a="epelite">View Elite Perks</button><button class="btn" style="flex:1" data-a="close">Keep Current</button></div></div>`;
  $('#sh').classList.add('on');
}
function openEditPostSheet(p){
  if(!p||p.user_id!=me.id||p.repost_of)return;
  if(!me.is_elite){
    $('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>Edit Post · Elite Feature</b><button class="mu" data-a="close">Close</button></div><div class="lockpv"><span class="mu sm">Locked preview (read-only)</span><textarea class="ta" disabled>${esc(p.body||'')}</textarea>${p.image_path?'<span class="mu sm">Attached image &amp; download permissions remain preserved when edited.</span>':''}${p.quote_of?'<span class="mu sm">Quoted post remains preserved when edited.</span>':''}</div><p class="sm mu">Editing published posts (up to 3,000 characters) is reserved for NYXORA Elite members while keeping post ownership, timestamps, and permissions intact.</p><div class="r" style="gap:8px"><button class="btn elt" style="flex:1" data-a="epelite">View Elite Perks</button><button class="btn" style="flex:1" data-a="close">Close</button></div></div>`;
    $('#sh').classList.add('on');
    return;
  }
  const cur=p.body||'';
  $('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><button class="mu" data-a="close">Cancel</button><b>Edit post</b><button class="btn pri sm" id="epsave" data-a="epostsave" data-id="${p.id}">Save</button></div><textarea id="eptx" placeholder="Edit your post…" maxlength="3000">${esc(cur)}</textarea>${p.image_path?'<div class="mu sm">Attached image and download permissions will be preserved.</div>':''}${p.quote_of?'<div class="mu sm">Quoted post embed will be preserved.</div>':''}<div class="r"><span class="mu sm">Up to 3,000 characters</span><span class="mu sm" id="epct">${cur.length}/3000</span></div></div>`;
  $('#sh').classList.add('on');
  const ta=$('#eptx');if(ta){ta.focus();ta.setSelectionRange(ta.value.length,ta.value.length)}
}
const toB=(c,t,q)=>new Promise(r=>c.toBlob(r,t,q));
function clampCrop(){if(!CROP)return;const s=CROP.minS*CROP.zoom,mx=Math.max(0,(CROP.bm.width*s-CROP.fw)/2),my=Math.max(0,(CROP.bm.height*s-CROP.fh)/2);CROP.ox=Math.max(-mx,Math.min(mx,CROP.ox));CROP.oy=Math.max(-my,Math.min(my,CROP.oy))}
function drawCrop(){if(!CROP)return;const cv=$('#cropcv');if(!cv)return;clampCrop();const dpr=Math.min(2,window.devicePixelRatio||1),w=CROP.fw,h=CROP.fh;if(cv.width!==Math.round(w*dpr)||cv.height!==Math.round(h*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr)}const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);const s=CROP.minS*CROP.zoom,dw=CROP.bm.width*s,dh=CROP.bm.height*s,dx=(w-dw)/2+CROP.ox,dy=(h-dh)/2+CROP.oy;ctx.drawImage(CROP.bm,dx,dy,dw,dh)}
async function openCropper(kind,file){
  checkImgFile(file);
  let bm;try{bm=await createImageBitmap(file)}catch(e){throw Error('Could not read that image. Try a JPG, PNG, or WebP file.')}
  freeCrop();
  CROP={kind,bm,fw:0,fh:0,minS:1,zoom:1,ox:0,oy:0,busy:false};
  $('#sh').innerHTML=`<div class="bk" data-a="cropcancel"></div><div class="pnl croppnl"><div class="r"><button type="button" class="mu" data-a="cropcancel">Cancel</button><b>${kind=='av'?'Preview & crop photo':'Preview & crop banner'}</b><button type="button" class="btn pri sm" id="cropdone" data-a="cropdone">Done</button></div><div class="cropstage${kind=='bn'?' bn':''}" id="cropstage"><canvas id="cropcv"></canvas><div class="cropmask${kind=='bn'?' bn':''}"></div></div><div class="cropctl"><span class="mu sm">Drag to position</span><input type="range" id="cropz" min="1" max="3" step="0.02" value="1" aria-label="Zoom"></div></div>`;
  $('#sh').classList.add('on');
  const st=$('#cropstage'),zi=$('#cropz');
  if(!st)return;
  CROP.fw=st.clientWidth||260;CROP.fh=st.clientHeight||(kind=='bn'?100:260);
  CROP.minS=Math.max(CROP.fw/bm.width,CROP.fh/bm.height);
  drawCrop();
  let drag=null;
  st.addEventListener('pointerdown',e=>{if(!CROP||CROP.busy)return;drag={x:e.clientX,y:e.clientY,ox:CROP.ox,oy:CROP.oy};st.setPointerCapture&&st.setPointerCapture(e.pointerId)});
  st.addEventListener('pointermove',e=>{if(!drag||!CROP||CROP.busy)return;CROP.ox=drag.ox+(e.clientX-drag.x);CROP.oy=drag.oy+(e.clientY-drag.y);drawCrop()});
  const end=()=>{drag=null};
  st.addEventListener('pointerup',end);st.addEventListener('pointercancel',end);
  if(zi)zi.addEventListener('input',()=>{if(!CROP||CROP.busy)return;CROP.zoom=Math.max(1,Math.min(3,+zi.value||1));drawCrop()});
}
async function saveCroppedImg(){
  if(!CROP||CROP.busy)return;
  CROP.busy=true;const btn=$('#cropdone');if(btn){btn.disabled=true;btn.textContent='Saving…'}
  try{
    clampCrop();
    const s=CROP.minS*CROP.zoom,dw=CROP.bm.width*s,dh=CROP.bm.height*s,left=(CROP.fw-dw)/2+CROP.ox,top=(CROP.fh-dh)/2+CROP.oy;
    const sx=Math.max(0,-left/s),sy=Math.max(0,-top/s),sw=Math.min(CROP.bm.width-sx,CROP.fw/s),sh=Math.min(CROP.bm.height-sy,CROP.fh/s);
    const isAv=CROP.kind=='av',W=isAv?256:1200,H=isAv?256:400,c=document.createElement('canvas');
    c.width=W;c.height=H;c.getContext('2d').drawImage(CROP.bm,sx,sy,sw,sh,0,0,W,H);
    let b=null;
    if(isAv){b=await toB(c,'image/webp',.8);if(!b||b.type!='image/webp')b=await toB(c,'image/jpeg',.8)}
    else{for(const q of [.75,.55,.4,.25]){b=await toB(c,'image/webp',q);if(!b||b.type!='image/webp')b=await toB(c,'image/jpeg',q);if(b&&b.size<=3e5)break}}
    if(!b)throw Error('Could not process image.');
    const prefix=isAv?'/avatar-':'/banner-',col=isAv?'avatar_url':'banner_url',old=me[col],path=me.id+prefix+Date.now()+(b.type=='image/webp'?'.webp':'.jpg');
    const {error:ue}=await sb.storage.from('images').upload(path,b,{contentType:b.type,cacheControl:'31536000'});
    if(ue)throw Error((isAv?'Photo':'Banner')+' upload failed: '+ue.message);
    const {error}=await sb.from('profiles').update({[col]:path}).eq('id',me.id);
    if(error)throw Error(error.message);
    if(old)await sb.storage.from('images').remove([old]).catch(()=>{});
    await loadMe(me.id);if(PR&&PR.id==me.id)PR=me;DIRTY=true;
    close();toast(isAv?'Profile photo updated':'Banner updated');paint();
  }catch(x){
    if(CROP)CROP.busy=false;if(btn){btn.disabled=false;btn.textContent='Done'}
    toast(x.message||'Could not save image.');
  }
}
const IMG_TYPES=new Set(['image/jpeg','image/jpg','image/png','image/webp','image/gif','image/heic','image/heif','image/avif']);
function checkImgFile(f){if(!f)throw Error('No file selected.');const tp=(f.type||'').toLowerCase();if(tp.startsWith('video/')||/\.(mp4|mov|webm|m4v|avi|mkv)$/i.test(f.name||''))throw Error('Video uploads are not supported. Please select an image.');if(tp&&!IMG_TYPES.has(tp))throw Error('Unsupported image format. Use JPG, PNG, WebP, or GIF.');if(!tp&&!/\.(jpe?g|png|webp|gif|heic|heif|avif)$/i.test(f.name||''))throw Error('Please select a valid image file.');if(f.size<=0)throw Error('Selected file is empty.');if(f.size>20*1024*1024)throw Error('Image is too large (max 20 MB before compression).')}
async function comp(f){checkImgFile(f);let bm;try{bm=await createImageBitmap(f)}catch(e){throw Error('Could not read that image. Try a JPG, PNG, or WebP file.')}try{const maxW=1080,maxH=1350,s=Math.min(1,maxW/bm.width,maxH/bm.height),c=document.createElement('canvas');c.width=Math.max(1,Math.round(bm.width*s));c.height=Math.max(1,Math.round(bm.height*s));c.getContext('2d').drawImage(bm,0,0,c.width,c.height);let b=null;for(const q of [.72,.56,.42,.30]){b=await toB(c,'image/webp',q);if(!b||b.type!='image/webp')b=await toB(c,'image/jpeg',q);if(b&&b.size<=180000)break}if(!b||b.size>260000){const c2=document.createElement('canvas');c2.width=Math.max(1,Math.round(c.width*.75));c2.height=Math.max(1,Math.round(c.height*.75));c2.getContext('2d').drawImage(c,0,0,c2.width,c2.height);for(const q of [.55,.40,.28]){const b2=await toB(c2,'image/webp',q);const t2=(!b2||b2.type!='image/webp')?await toB(c2,'image/jpeg',q):b2;if(t2&&(!b||t2.size<b.size))b=t2;if(b&&b.size<=250000)break}}if(!b||b.size>300000)throw Error('Could not compress image small enough. Try a simpler image.');return{blob:b,orig:f.size,w:c.width,h:c.height}}finally{bm.close&&bm.close()}}
async function doPost(){const t=$('#tx').value.trim(),limLen=me.is_elite?3000:1500,btn=$('#pb'),fi=$('#fi');if(!t&&!IMG&&!QT)return;if(t.length>limLen)return toast('Post is too long (max '+limLen+' characters).');btn.disabled=true;if(fi)fi.disabled=true;let path=null,uploaded=false;
try{if(IMG){setProg(20,'Checking daily allowance…');const q=await loadQuota();if(q&&q.remaining<=0)throw Error(`Daily image upload limit reached (${q.used_today}/${q.daily_limit}). Resets at 00:00 UTC.`);setProg(50,'Uploading compressed image…');path=me.id+'/post-'+Date.now()+(IMG.type=='image/webp'?'.webp':'.jpg');const {error:ue}=await sb.storage.from('images').upload(path,IMG,{contentType:IMG.type,cacheControl:'2592000'});if(ue){const msg=/row-level security|violates|policy/i.test(ue.message)?`Daily image upload limit reached (${me.is_elite?20:10}/day). Resets at 00:00 UTC.`:ue.message;throw Error('Image upload failed: '+msg)}uploaded=true}
setProg(80,'Saving post…');const {error}=await sb.from('posts').insert({user_id:me.id,body:t,image_path:path,allow_download:IMG?ALLOW_DL:true,quote_of:QT?QT.id:null,is_sensitive:!!POST_SENS});if(error){if(uploaded&&path)await sb.storage.from('images').remove([path]).catch(()=>{});throw Error(error.message)}
setProg(100,'Posted');const was=me.is_legendary;if(uploaded)loadQuota();close();await Promise.all([loadMe(me.id),loadMyStreak()]);toast(!was&&me.is_legendary?'You earned the Legendary badge!':'Posted');await refresh()}
catch(x){setProg(0,'');toast(x.message||'Could not publish post.');btn.disabled=false;updQuotaUI()}}

// ---------- actions ----------
async function act(a,id){
if(a=='gsignin'){const btn=$('#gbtn'),er=$('#er');if(er)er.textContent='';if(btn){btn.disabled=true;btn.querySelector('span').textContent='Redirecting to Google…'}const {error}=await sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});if(error){if(er)er.textContent=error.message;if(btn){btn.disabled=false;btn.querySelector('span').textContent='Continue with Google'}}return}
if(a=='close'){if(LBO)return history.back();return close()}if(a=='back')return history.back();if(a=='new')return sheet();if(a=='post')return doPost();
if(a=='tab'){flushSeen();T=id;V='home';if(id=='ht')return openHot();POSTS=[];LD=true;FEED_READY=false;paint();return refresh()}
if(a=='nav'){flushSeen();return go(id=='me'?'user':id,id=='me'?me.handle:null)}
if(a=='user'){if(V=='user'&&PR&&PR.handle==id)return;pushV();UPUSH=true;V='user';U=id;PR=null;POSTS=[];LD=true;scrollTo(0,0);paint();return refresh()}
if(a=='like'){if(act.lk)return;act.lk=1;try{const t=+id,had=LK.has(t),r=had?await sb.from('likes').delete().match({post_id:t,user_id:me.id}):await sb.from('likes').insert({post_id:t,user_id:me.id});if(r.error&&r.error.code!='23505')return toast('Like failed: '+r.error.message);had?LK.delete(t):LK.add(t);const {count}=await sb.from('likes').select('post_id',{count:'exact',head:true}).eq('post_id',t),n=Math.max(count??0,LK.has(t)?1:0);POSTS.forEach(x=>{if(tid(x)==t)x.like_count=n});if(DET&&tid(DET)==t)DET.like_count=n;return paint()}finally{act.lk=0}}
if(a=='cm'){if(V=='post')return;const p=POSTS.find(x=>x.id==id);if(!p)return;queueSeen(p.id);if(p.repost_of)return act('opn',p.repost_of);pushV();DET=p;V='post';scrollTo(0,0);delete CM[p.id];paint();await loadCm(p.id);return paint()}
if(a=='notif'){pushV();V='notif';NT=null;scrollTo(0,0);paint();await loadNotif();return paint()}
if(a=='ntab'){NTAB=id=='followers'?'followers':'all';paint();if(NTAB=='followers')loadFollowRequests();return}
if(a=='freqact'){if(act.fq)return;act.fq=1;try{const [kind,reqId]=String(id||'').split(':'),accept=kind=='accept';const {error}=await sb.rpc('respond_follow_request',{p_requester:reqId,p_accept:accept});if(error)return toast(error.message);FREQ=FREQ.filter(x=>x.requester!==reqId);if(V=='user'&&PR&&PR.id==me.id&&accept)CNT.fr++;paint();loadUnread();toast(accept?'Follow request accepted':'Follow request declined')}finally{act.fq=0}return}
if(a=='opn'){const r=await sb.from('feed').select('*').eq('id',id).maybeSingle();if(!r.data)return toast('That post is no longer available.');queueSeen(r.data.id);LK=new Set();BM=new Set();await marks([r.data.id]);POSTS=[r.data];DIRTY=true;DET=r.data;trackViews([DET]);pushV();V='post';scrollTo(0,0);delete CM[DET.id];paint();await loadCm(DET.id);return paint()}
if(a=='theme'){if(!me.is_elite&&!isFreeTheme(id))return openThemeLockPreview(id);const {data,error}=await sb.rpc('set_profile_theme',{p_theme:id});if(error)return toast(error.message);me.theme=data||id;if(PR&&PR.id==me.id)PR.theme=me.theme;paint();return toast('Theme updated')}
if(a=='epelite'){close();return go('elite')}
if(a=='postopt'){const p=findPost(id);if(!p||p.user_id!=me.id||p.repost_of)return;$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><button class="mi" data-a="pinpost" data-id="${p.id}">${I.pin} ${p.pinned_at?'Unpin from profile':'Pin to profile'}</button><button class="mi" data-a="pedit" data-id="${p.id}">${I.pen} ${me.is_elite?'Edit post':'Edit post (Elite · Preview)'}</button><button class="mi danger" data-a="del" data-id="${p.id}">${I.blk} Delete post</button><button class="mu" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='pinpost'){const p=findPost(id);if(!p||p.user_id!=me.id||p.repost_of)return close();if(!p.pinned_at&&V=='user'&&POSTS.filter(x=>x.pinned_at).length>=2){close();return toast('You can pin up to 2 posts. Unpin one first.')}const {data,error}=await sb.rpc('toggle_pin_post',{p_post_id:+id});close();if(error)return toast(error.message);const row=Array.isArray(data)?data[0]:data,pa=row&&row.pinned?row.pinned_at:null;[...POSTS,...SP,DET].forEach(x=>{if(x&&x.id==+id)x.pinned_at=pa});if(V=='user')POSTS.sort((x,y)=>{const xp=x.pinned_at?new Date(x.pinned_at).getTime():Infinity,yp=y.pinned_at?new Date(y.pinned_at).getTime():Infinity;if(xp!==yp)return xp-yp;return new Date(y.created_at).getTime()-new Date(x.created_at).getTime()});toast(pa?'Pinned to profile':'Unpinned from profile');return paint()}
if(a=='pincm'){if(!DET||DET.user_id!=me.id)return;const {data,error}=await sb.rpc('toggle_pin_comment',{p_post_id:DET.id,p_comment_id:+id});if(error)return toast(error.message);const pid=data||null;DET.pinned_comment_id=pid;[...POSTS,...SP].forEach(x=>{if(x&&x.id==DET.id)x.pinned_comment_id=pid});toast(pid?'Comment pinned':'Comment unpinned');return paint()}
if(a=='pshare'){const p=findPost(id);if(p)openShareCard(p);return}
if(a=='shcopy'){if(!SHARE_P)return;try{await navigator.clipboard.writeText(SHARE_P.url);toast('Post link copied')}catch(e){toast('Could not copy link')}return}
if(a=='shcopytxt'){if(!SHARE_P)return;const txt=(SHARE_P.body?`@${SHARE_P.a.handle}: ${SHARE_P.body}\n\n`:`Post by @${SHARE_P.a.handle}\n`)+SHARE_P.url;try{await navigator.clipboard.writeText(txt);toast('Post text copied')}catch(e){toast('Could not copy text')}return}
if(a=='shsys'){if(!SHARE_P)return;if(navigator.share){try{await navigator.share({title:`@${SHARE_P.a.handle} on NYXORA`,text:SHARE_P.body||`Post by @${SHARE_P.a.handle}`,url:SHARE_P.url});close()}catch(e){if(e&&e.name!='AbortError')toast('Could not open share dialog')}}else{try{await navigator.clipboard.writeText(SHARE_P.url);toast('Post link copied')}catch(e){toast('Sharing unavailable')}}return}
if(a=='pedit'){const p=findPost(id);close();return openEditPostSheet(p)}
if(a=='epostsave'){const p=findPost(id);if(!p)return close();if(!me.is_elite){close();return openEditPostSheet(p)}const ta=$('#eptx'),body=(ta?ta.value:'').trim();if(!body&&!p.image_path&&!p.quote_of)return toast('Post text cannot be empty.');if(body.length>3000)return toast('Post is too long (max 3,000 characters).');const btn=$('#epsave');if(btn)btn.disabled=true;const {data,error}=await sb.rpc('edit_post',{p_post_id:+id,p_body:body});if(error){if(btn)btn.disabled=false;return toast(error.message)}const row=Array.isArray(data)?data[0]:data,nb=row?row.body:body,ed=row?row.edited_at:new Date().toISOString(),sensKw=/\b(nsfw|porn|porno|pornography|xxx|hentai|erotica|fetish|nude|nudes|nudity|onlyfans|sex\s+tape|gore|beheading|self[-\s]?harm|suicide)\b/i.test(nb);[...POSTS,...SP,DET].forEach(x=>{if(!x)return;if(x.id==+id){x.body=nb;x.edited_at=ed;if(sensKw)x.is_sensitive=true}if(x.repost_of==+id||x.quote_of==+id){x.o_body=nb;x.o_edited_at=ed;if(sensKw)x.o_is_sensitive=true}});EXPANDED.delete(String(id));close();paint();return toast('Post updated')}
if(a=='settings'||a=='acct'||a=='disp'||a=='hkw'){pushV();V=a;if(a=='disp')syncMyElite().then(()=>{if(V=='disp')paint()});scrollTo(0,0);return paint()}
if(a=='legal'){const tgt=['privacy','terms','retention'].includes(id)?id:'privacy';if(!me){if(!['privacy','terms','retention'].includes(V))history.pushState({authLegal:1},'')}else if(!['privacy','terms','retention'].includes(V))pushV();V=tgt;scrollTo(0,0);return paint()}
if(a=='authback'){if(!me){if(history.state&&history.state.authLegal)return history.back();V='home';scrollTo(0,0);return paint()}return history.back()}
if(a=='elttab'){ELT_TAB=['wallet','apply','leaderboard'].includes(id)?id:'wallet';paint();if(ELT_TAB=='leaderboard')return Promise.all([loadEliteWallet(),loadLeaderboard()]);return loadEliteWallet()}
if(a=='lbmonth'){LB_MONTH=id=='prev'?'prev':'cur';return loadLeaderboard()}
if(a=='eltcheckin'){if(ELT_BZ)return;ELT_BZ=true;paint();try{const {data,error}=await sb.rpc('claim_daily_points_checkin');if(error)return toast(error.message);const row=Array.isArray(data)?data[0]:data;await loadEliteWallet();if(ELT_TAB=='leaderboard')await loadLeaderboard();toast(row&&row.already_claimed?'Daily check-in already claimed today':'+15 pts claimed!')}finally{ELT_BZ=false;paint()}return}
if(a=='eltredeem'){if(ELT_BZ)return;const days=+id;ELT_BZ=true;paint();try{const {data,error}=await sb.rpc('redeem_elite_points',{p_days:days});if(error)return toast(error.message);await Promise.all([loadMe(me.id),loadEliteWallet()]);toast(`Redeemed ${days} days of stacked NYXORA Elite!`)}finally{ELT_BZ=false;paint()}return}
if(a=='eltapply'){if(ELT_BZ)return;const noteEl=$('#eltappnote'),note=(noteEl?noteEl.value:'').trim();ELT_BZ=true;paint();try{const {error}=await sb.rpc('apply_for_elite',{p_note:note||null});if(error)return toast(error.message);await loadEliteWallet();toast('Application submitted · Status: Applied')}finally{ELT_BZ=false;paint()}return}
if(a=='mod'){if(!me.is_admin)return toast('Admin access required.');pushV();V='mod';MOD_SECTION='reports';MOD_TAB='pending';MOD_LIST=[];ELT_APP_TAB='pending';ELT_APPS=[];scrollTo(0,0);return loadMod()}
if(a=='modsec'){MOD_SECTION=id=='apps'?'apps':'reports';return MOD_SECTION=='apps'?loadAdminEliteApps():loadMod()}
if(a=='eltapptab'){ELT_APP_TAB=id;ELT_APPS=[];return loadAdminEliteApps()}
if(a=='eltapprev'){const [actKind,aid]=String(id||'').split(':'),inp=$('#eappn-'+aid),note=(inp?inp.value:'').trim();const {error}=await sb.rpc('admin_review_elite_application',{p_app_id:+aid,p_action:actKind,p_note:note||null});if(error)return toast(error.message);toast(actKind=='approve'?'Elite application approved (+30d added)':'Elite application declined');return loadAdminEliteApps()}
if(a=='modtab'){MOD_TAB=id;MOD_LIST=[];return loadMod()}
if(a=='modact'){const [actKind,rid]=String(id||'').split(':'),inp=$('#modr-'+rid),reason=(inp?inp.value:'').trim();if((actKind=='remove'||actKind=='warn')&&reason.length<3)return toast('Please enter an accurate reason before taking action.');const {error}=await sb.rpc('admin_review_report',{p_report_id:+rid,p_action:actKind,p_reason:reason||null});if(error)return toast(error.message);if(actKind=='remove')DIRTY=true;toast(actKind=='dismiss'?'Report dismissed':actKind=='remove'?'Content removed & owner notified':'Caution notice sent');return loadMod()}
if(a=='safety'){pushV();V='safety';STAB='m';scrollTo(0,0);return loadSafetyProfiles()}
if(a=='stab'){STAB=id;return paint()}
if(a=='addkw'){const inp=$('#hkwi'),kw=inp?inp.value.trim().replace(/\s+/g,' '):'';if(!kw)return toast('Enter a word or phrase.');if(kw.length>60)return toast('Keep keywords under 60 characters.');if(HKW.some(x=>x.keyword.toLowerCase()==kw.toLowerCase()))return toast('That keyword is already in your list.');const {data,error}=await sb.from('hidden_keywords').insert({user_id:me.id,keyword:kw}).select('id,keyword').single();if(error)return toast(error.message);HKW=[data,...HKW];REV_KW=new Set();paint();toast('Keyword added');return}
if(a=='delkw'){const kid=+id,{error}=await sb.from('hidden_keywords').delete().match({id:kid,user_id:me.id});if(error)return toast(error.message);HKW=HKW.filter(x=>x.id!=kid);REV_KW=new Set();paint();toast('Keyword removed');return}
if(a=='revkw'){if(REV_KW.has(id))REV_KW.delete(id);else REV_KW.add(id);document.querySelectorAll('[data-a="revkw"]').forEach(el=>{if(el.dataset.id==id){const rev=REV_KW.has(id);el.classList.toggle('rev',rev);el.setAttribute('aria-label',rev?el.textContent:'Hidden keyword, tap to reveal')}});return}
if(a=='pmore'){const k=String(id);if(EXPANDED.has(k))EXPANDED.delete(k);else EXPANDED.add(k);const isQ=k.startsWith('q'),pid=isQ?k.slice(1):k,p=POSTS.find(x=>String(x.id)==pid)||(DET&&String(DET.id)==pid?DET:null),el=document.querySelector('.ptxt[data-k="'+k+'"]');if(p&&el){const body=isQ?p.o_body:(p.repost_of?p.o_body:p.body);el.outerHTML=renderPostBody(body,k,false,isQ?'':'cm',pid)}else paint();return}
if(a=='saveun'){const rem=cdRem(me.handle_changed_at,HANDLE_CD_MS);if(rem>0)return toast('Username locked. Try again in '+fmtCd(rem)+'.');const h=$('#au').value.trim().toLowerCase();if(h==me.handle)return toast('That is already your username.');if(!/^[a-z0-9_]{3,20}$/.test(h))return toast('Use 3 to 20 letters, numbers or underscores.');const {data:t}=await sb.from('profiles').select('id').eq('handle',h).maybeSingle();if(t)return toast('That username is taken.');const oldH=me.handle,{error}=await sb.from('profiles').update({handle:h}).eq('id',me.id);if(error){await loadMe(me.id);paint();return toast(error.message)}await loadMe(me.id);if(U===oldH)U=me.handle;PS.forEach(s=>{if(s.U===oldH)s.U=me.handle});if(PR&&PR.id==me.id)PR=me;DIRTY=true;paint();return toast('Username changed · Next change in 7 days')}
if(a=='rpm'){const t=+id;$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><button class="mi" data-a="rpdo" data-id="${t}">${I.rep} ${RP.has(t)?'Undo repost':'Repost'}</button><button class="mi" data-a="qtdo" data-id="${t}">${I.quote} Quote</button><button class="mu" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='rpdo'){const t=+id,had=RP.has(t);close();const r=had?await sb.from('posts').delete().match({user_id:me.id,repost_of:t}):await sb.from('posts').insert({user_id:me.id,body:'',repost_of:t});if(r.error)return toast(r.error.message);had?RP.delete(t):RP.add(t);if(had)POSTS=POSTS.filter(x=>!(x.repost_of==t&&x.user_id==me.id));POSTS.forEach(x=>{if(tid(x)==t)x.repost_count=Math.max(0,(x.repost_count||0)+(had?-1:1))});if(DET&&tid(DET)==t)DET.repost_count=Math.max(0,(DET.repost_count||0)+(had?-1:1));toast(had?'Repost removed':'Reposted');return paint()}
if(a=='qtdo'){const t=+id,w=POSTS.find(x=>tid(x)==t)||DET;if(!w)return;QT=w.repost_of?{id:t,name:w.o_name,handle:w.o_handle,body:w.o_body,avatar_url:w.o_avatar_url,is_founder_elite:w.o_is_founder_elite}:{id:t,name:w.name,handle:w.handle,body:w.body,avatar_url:w.avatar_url,is_founder_elite:w.is_founder_elite};return sheet()}
if(a=='hotmore'){HDEAD=false;return hotMore()}
if(a=='hotref')return refreshHot();
if(a=='tans'){const [i,j]=id.split(':').map(Number);if(HOT[i]&&HOT[i].p==null){HOT[i].p=j;paint()}return}
if(a=='seepost'){REV_SENS.add(+id);return paint()}
if(a=='cmod'){pushV();V='cmod';scrollTo(0,0);return paint()}
if(a=='setmod'){const next=id=='off'?'off':'blur',nextU=id=='unblur',prevM=me.content_moderation,prevU=!!me.show_sensitive_unblurred;me.content_moderation=next;me.show_sensitive_unblurred=nextU;paint();const {data,error}=await sb.rpc('set_content_moderation',{p_mode:next,p_unblurred:nextU});if(error){me.content_moderation=prevM;me.show_sensitive_unblurred=prevU;paint();return toast(error.message)}const row=Array.isArray(data)?data[0]:data;if(row){me.content_moderation=row.content_moderation;me.show_sensitive_unblurred=!!row.show_sensitive_unblurred}REV_SENS.clear();DIRTY=true;paint();return toast(next=='off'?'Sensitive content hidden completely':nextU?'Sensitive content shown without blur':'Content Moderation set to Blur')}
if(a=='sqt'){SQT=id;if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();return}
if(a=='search'){pushV();V='search';SQV='';SQD=false;SQ_LD=false;SP=[];SR=[];SQ_TERMS=[];paint();const q=$('#sq');if(q)q.focus();return}
if(a=='sqclear'){SQV='';SQD=false;SQ_LD=false;SR=[];SP=[];SQ_TERMS=[];const q=$('#sq');if(q){q.value='';q.focus()}updSqClear();if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();return}
if(a=='sqpick'){return runSearch(id)}
if(a=='sqfill'){SQV=String(id||'');SQD=false;const q=$('#sq');if(q){q.value=SQV;q.focus()}updSqClear();return loadSearchSug(SQV)}
if(a=='sqdel'){delRecentSq(id);if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();return}
if(a=='sqclearall'){try{localStorage.removeItem(rsKey())}catch(e){}if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();return}
if(a=='lst'){if(PR&&!canViewPrivateProf(PR))return toast('Follow this private account to see this list.');LT=id=='followers'?'Followers':'Following';pushV();V='list';LIST=[];paint();await loadList(id);return paint()}
if(a=='edit'){EDIT_INT=new Set(Array.isArray(me.interests)?me.interests.filter(x=>INTERESTS.includes(x)):[]);pushV();V='edit';scrollTo(0,0);return paint()}
if(a=='int'){if(!INTERESTS.includes(id))return;if(EDIT_INT.has(id))EDIT_INT.delete(id);else EDIT_INT.add(id);const el=document.querySelector('[data-a="int"][data-id="'+id+'"]');if(el){const on=EDIT_INT.has(id);el.classList.toggle('on',on);el.setAttribute('aria-pressed',String(on));el.textContent=(on?'✓ ':'')+id}return}
if(a=='msg'){const p=(PR&&PR.id==id?PR:null)||DISC.find(x=>x.id==id)||DSR.find(x=>x.id==id)||DPEOPLE.find(x=>x.id==id)||{id};return openDmByTarget(p)}
if(a=='chats'){pushV();V='chats';scrollTo(0,0);paint();return loadChats(true)}
if(a=='opendm'){const c=(CHATS||[]).find(x=>x.other_id==id);const p=c?{id:c.other_id,handle:c.other_handle||'',name:c.other_name||'Blocked',avatar_url:c.other_avatar_url,is_elite:!!c.other_is_elite,is_legendary:!!c.other_is_legendary,is_founder_elite:!!c.other_is_founder_elite}:{id};return openDmByTarget(p)}
if(a=='chatmenu'){const c=(CHATS||[]).find(x=>x.other_id==id);if(!c)return;const blk=!!(c.is_blocked||BLOCKS.has(c.other_id)),iBlk=BLOCKS.has(c.other_id);$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>${blk?'Blocked contact':esc(c.other_name||c.other_handle||'Chat')}</b><button class="mu" data-a="close">Close</button></div><button class="mi danger" data-a="delcontact" data-id="${esc(c.conversation_id)}">${I.trash} Delete contact</button>${iBlk?`<button class="mi" data-a="unblock" data-id="${esc(c.other_id)}">${I.blk} Unblock user</button>`:`<button class="mi" data-a="blkask" data-id="${esc(c.other_id)}">${I.blk} ${blk?'Block user':'Block @'+esc(c.other_handle||'user')}</button>`}<button class="mu" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='delcontact'){close();if(!confirm('Delete this contact from your Messages list and clear older messages for you?'))return;await DM_SVC.delContact(id);if(CHATS)CHATS=CHATS.filter(x=>x.conversation_id!==id);UNR_CHAT=(CHATS||[]).reduce((s,c)=>s+(c.is_blocked||BLOCKS.has(c.other_id)?0:+c.unread_count||0),0);updChatBadge();paint();return toast('Contact removed from Messages')}
if(a=='dmold'){if(!DM_CONV||!DM_MSGS.length)return;const box=$('#dmmsgs'),prevH=document.body.scrollHeight;try{const rows=await DM_SVC.fetchMessages(DM_CONV,{beforeId:DM_MSGS[0].id,lim:40});DM_MORE=rows.length==40;if(mergeDmMsgs(rows)&&box){box.innerHTML=dmMsgsHtml();scrollBy(0,document.body.scrollHeight-prevH)}else if(box)box.innerHTML=dmMsgsHtml()}catch(e){toast(e.message||'Could not load older messages.')}return}
if(a=='dmpriv'){$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>Message Expiry &amp; Privacy</b><button class="mu" data-a="close">Close</button></div><p class="sm">Messages and voice clips are automatically deleted 7 days after they were sent.</p><p class="sm mu">Deletion from NYXORA does not erase screenshots, copies already seen by recipients, or notifications already delivered.</p></div>`;$('#sh').classList.add('on');return}
if(a=='dmmsgopt'){const m=DM_MSGS.find(x=>x.id==+id);if(!m)return;const mine=m.sender_id==me.id,del=!!m.deleted_for_everyone_at,ed=canEditDm(m);$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl">${!del?`<button class="mi" data-a="dmreply" data-id="${m.id}">${I.reply} Reply</button>`:''}${ed?`<button class="mi" data-a="dmedit" data-id="${m.id}">${I.pen} Edit message</button>`:''}<button class="mi danger" data-a="dmdelask" data-id="${m.id}">${I.trash} Delete message</button>${!mine&&!del?`<button class="mi" data-a="rep" data-id="message:${m.id}">${I.flag} Report message</button>`:''}<button class="mu" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='dmreply'){close();setDmReply(id);return}
if(a=='dmcancreply'){DM_REPLY=null;paint();const i=$('#dmi');if(i&&!i.disabled)i.focus();return}
if(a=='dmjump'){const el=$('#dm-m-'+id);if(!el)return toast('Original message is no longer available.');el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');setTimeout(()=>el.classList.remove('flash'),1300);return}
if(a=='dmdelask'){const m=DM_MSGS.find(x=>x.id==+id);if(!m)return close();const mine=m.sender_id==me.id&&!m.deleted_for_everyone_at;$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><b>Delete message?</b><p class="sm mu">${mine?'Choose whether to remove this message just for your account or for everyone in this chat.':'This will remove the message from your view only.'}</p>${mine?`<button class="btn danger wide" style="margin:0" data-a="dmdel" data-id="everyone:${m.id}">Delete for everyone</button>`:''}<button class="btn wide" style="margin:0" data-a="dmdel" data-id="me:${m.id}">Delete for me</button><button class="btn wide" style="margin:0" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='dmdel'){const [mode,midStr]=String(id||'').split(':'),mid=+midStr;close();if(!mid)return;const res=await DM_SVC.delMsg(mid,mode=='everyone'?'everyone':'me');const m=DM_MSGS.find(x=>x.id==mid);if(mode=='everyone'){const dt=(res&&res.deleted_for_everyone_at)||new Date().toISOString();if(m){m.deleted_for_everyone_at=dt;m.body='This message was deleted';m.voice_path=null;m.voice_duration_sec=null;m.edited_at=null}if(DM_AUDIO&&DM_AUDIO.id==mid)stopDmAudio();if(res&&res.voice_path_to_remove)await DM_SVC.removeVoices([res.voice_path_to_remove]);if(DM_PARTNER&&m)DM_SVC.broadcastEdit(DM_PARTNER.id,m);if(DM_REPLY&&DM_REPLY.id==mid)DM_REPLY=null;if(DM_EDIT_ID==mid){DM_EDIT_ID=null;DM_TEXT=''}updDmDom(false);toast('Deleted for everyone')}else{DM_MSGS=DM_MSGS.filter(x=>x.id!=mid);DM_SEEN.delete(mid);if(DM_AUDIO&&DM_AUDIO.id==mid)stopDmAudio();if(DM_REPLY&&DM_REPLY.id==mid)DM_REPLY=null;if(DM_EDIT_ID==mid){DM_EDIT_ID=null;DM_TEXT=''}updDmDom(false);toast('Deleted for you')}loadChats(true);syncChatUnread();return}
if(a=='dmplay'){return toggleDmVoice(+id)}
if(a=='dmrecstart'){return startDmRec()}
if(a=='dmreccanc'){cancelDmRec();return toast('Voice recording cancelled')}
if(a=='dmrecsend'){return stopAndSendDmRec()}
if(a=='dmstkinfo'){if(!DM_CONV||DM_BLOCKED)return;if(!DM_STREAK)DM_STREAK=await DM_SVC.fetchStreak(DM_CONV);const s=DM_STREAK||{effective_streak:0,longest_streak:0,i_sent_today:false,partner_sent_today:false,can_restore:false,restores_left_month:3,lost_streak:0,restore_expires_at:null};$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><b>🔥 Chat Streak</b><button class="mu" data-a="close">Close</button></div><div class="stkcard${s.can_restore?' warn':''}" style="margin:0"><div class="stkhead"><div class="stkl"><b>${s.effective_streak} day${s.effective_streak==1?'':'s'}</b></div><span class="mu sm">Best: ${s.longest_streak}d</span></div><p class="sm mu">Grows +1 per UTC day once <b>both</b> you and ${esc(DM_PARTNER?DM_PARTNER.name:'your friend')} send at least 1 message in this chat.</p><div class="r sm"><span>You today: <b>${s.i_sent_today?'Sent':'Waiting'}</b></span><span>${esc(DM_PARTNER?DM_PARTNER.name:'Partner')} today: <b>${s.partner_sent_today?'Sent':'Waiting'}</b></span></div>${s.can_restore?`<p class="sm">Lost <b>${s.lost_streak}-day</b> streak · ${hrsLeft(s.restore_expires_at)} left to restore (${s.restores_left_month}/3 left this month).</p><button type="button" class="btn pri wide" style="margin:0" data-a="dmrstk"${DM_STK_BZ?' disabled':''}>${DM_STK_BZ?'Restoring…':'Restore Chat Streak'}</button>`:`<p class="sm mu">24-hour streak restores left this month for this chat: <b>${s.restores_left_month}/3</b>. Separate from your main app streak.</p>`}</div></div>`;$('#sh').classList.add('on');return}
if(a=='dmrstk'){if(!DM_CONV||DM_BLOCKED||DM_STK_BZ)return;DM_STK_BZ=true;paint();try{const res=await DM_SVC.restoreStreak(DM_CONV);DM_STREAK=await DM_SVC.fetchStreak(DM_CONV);close();loadChats(true);toast((res&&res.message)||'Chat streak restored')}finally{DM_STK_BZ=false;paint()}return}
if(a=='dmedit'){close();const m=DM_MSGS.find(x=>x.id==+id);if(!canEditDm(m))return toast('Messages can only be edited within 1 hour of sending.');DM_REPLY=null;DM_EDIT_ID=m.id;DM_TEXT=m.body;paint();const i=$('#dmi');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length)}return}
if(a=='dmcancedit'){DM_EDIT_ID=null;DM_TEXT='';paint();const i=$('#dmi');if(i)i.focus();return}
if(a=='dmtheme')return openChatThemeSheet();
if(a=='ctpick'){if(!CT_DRAFT||!CT_THEMES[id])return;CT_DRAFT.theme=id;syncChatThemePreview();return}
if(a=='ctclearimg'){if(!CT_DRAFT)return;if(CT_DRAFT.ownsUrl&&CT_DRAFT.previewUrl){try{URL.revokeObjectURL(CT_DRAFT.previewUrl)}catch(e){}}CT_DRAFT.hasImg=false;CT_DRAFT.blob=null;CT_DRAFT.previewUrl='';CT_DRAFT.ownsUrl=false;const cf=$('#ctfile');if(cf)cf.value='';syncChatThemePreview();return}
if(a=='ctapply'){if(!CT_DRAFT||!DM_CONV)return;const scope=id=='all'?'all':'chat',meta=readCtMeta(),targetKey=me.id+':'+(scope=='all'?'global':DM_CONV),hasImg=!!(CT_DRAFT.hasImg&&CT_DRAFT.blob);if(hasImg)await ctPutBlob(targetKey,CT_DRAFT.blob);else await ctDelBlob(targetKey);if(CT_URLS[targetKey]){try{URL.revokeObjectURL(CT_URLS[targetKey])}catch(e){}}delete CT_URLS[targetKey];if(hasImg&&CT_DRAFT.blob)CT_URLS[targetKey]=URL.createObjectURL(CT_DRAFT.blob);const entry={theme:CT_DRAFT.theme,dim:CT_DRAFT.dim,hasImg};if(scope=='all'){meta.global=entry;delete meta.chats[DM_CONV]}else{meta.chats[DM_CONV]=entry}writeCtMeta(meta);close();paint();return toast(scope=='all'?'Applied to all chats':'Applied to this chat')}
if(a=='ctreset'){if(!DM_CONV)return;const meta=readCtMeta(),chatKey=me.id+':'+DM_CONV,globKey=me.id+':global';if(meta.chats[DM_CONV]){delete meta.chats[DM_CONV];await ctDelBlob(chatKey);if(CT_URLS[chatKey]){try{URL.revokeObjectURL(CT_URLS[chatKey])}catch(e){}delete CT_URLS[chatKey]}}else if(meta.global){meta.global=null;await ctDelBlob(globKey);if(CT_URLS[globKey]){try{URL.revokeObjectURL(CT_URLS[globKey])}catch(e){}delete CT_URLS[globKey]}}writeCtMeta(meta);close();paint();return toast('Chat wallpaper reset to default')}
if(a=='dmsend'){if(DM_SENDING||!DM_PARTNER||!DM_ALLOW||DM_BLOCKED||DM_REC)return;if(!DM_EDIT_ID&&dmRateRem()>0)return updDmRateUI();const inp=$('#dmi'),body=(inp?inp.value:DM_TEXT).trim();if(!body)return;if(body.length>1000)return toast('Message is too long (max 1,000 characters).');if(!DM_EDIT_ID&&DM_QUOTA&&DM_QUOTA.remaining<=0)return toast(`Daily message limit reached (${DM_QUOTA.used_today}/${DM_QUOTA.daily_limit}). Resets at 00:00 UTC.`);DM_SENDING=true;const btn=$('#dmsend');if(btn)btn.disabled=true;try{if(DM_EDIT_ID){const eid=DM_EDIT_ID,msg=await DM_SVC.edit(eid,body);DM_EDIT_ID=null;DM_TEXT='';if(msg){mergeDmMsgs([msg]);DM_SVC.broadcastEdit(DM_PARTNER.id,msg);loadChats(true)}paint()}else{const repId=DM_REPLY?DM_REPLY.id:null;const msg=await DM_SVC.send(DM_PARTNER.id,body,{replyToId:repId,msgType:'text'});DM_TEXT='';DM_REPLY=null;if(inp)inp.value='';if(msg){markNewDm(msg.id);mergeDmMsgs([msg]);DM_SVC.broadcastMsg(DM_PARTNER.id,msg);loadChats(true);syncChatUnread();loadChatStreak(DM_CONV)}paint();scrollTo(0,document.body.scrollHeight);loadDmQuota()}}catch(e){if(/blocked/i.test(e.message||'')){DM_BLOCKED=true;DM_ALLOW=false;DM_MSGS=[];DM_SEEN=new Set();DM_SVC.disconnectThread();DM_REASON=e.message;paint()}else if(/8 messages in 30 seconds/i.test(e.message||'')){const m=(e.message||'').match(/wait\s+(\d+)/i);startDmRateWait(m?+m[1]:30)}loadDmQuota();toast(e.message||'Could not send message.')}finally{DM_SENDING=false;updDmQuotaUI();const i2=$('#dmi');if(i2&&!i2.disabled)i2.focus()}return}
if(a=='toggpriv'){if(act.pv)return;act.pv=1;const prev=!!me.is_private,next=!prev;me.is_private=next;if(PR&&PR.id==me.id)PR.is_private=next;paint();try{const {data,error}=await sb.rpc('set_account_privacy',{p_private:next});if(error){me.is_private=prev;if(PR&&PR.id==me.id)PR.is_private=prev;paint();return toast(error.message)}const val=typeof data=='boolean'?data:next;me.is_private=val;if(PR&&PR.id==me.id)PR.is_private=val;if(!val)loadFollowRequests();DIRTY=true;paint();return toast(val?'Account is now private · Existing followers stay connected':'Account is now public · Pending requests approved')}finally{act.pv=0}}
if(a=='toggdm'){const prev=me.allow_first_message!==false,next=!prev;me.allow_first_message=next;paint();const {error}=await sb.from('profiles').update({allow_first_message:next}).eq('id',me.id);if(error){me.allow_first_message=prev;paint();return toast(error.message)}return toast(next?'Anyone can message you first':'Only people you message first can message you')}
if(a=='dtab'){DTAB=id=='all'?'all':'int';paint();if(DTAB=='all')return loadDiscoverPeople(true);return}
if(a=='dshuf')return loadDiscoverPeople(true);
if(a=='dclear'){DQV='';DSR=[];DSR_OFF=0;DSR_MORE=false;DSR_LD=false;paint();const q=$('#dq');if(q)q.focus();return DTAB=='all'?loadDiscoverPeople(true):loadDiscover(false)}
if(a=='dmore'){if(BZ)return;BZ=true;try{await loadDiscover(true)}finally{BZ=false}return}
if(a=='dsmore'){if(BZ)return;BZ=true;try{await loadDiscoverSearch(true)}finally{BZ=false}return}
if(a=='bms'){pushV();V='bms';POSTS=[];scrollTo(0,0);paint();await loadBms();return paint()}
if(a=='about')return about();
if(a=='pmenu')return pmenu();
if(a=='mute'){close();const {error}=await sb.from('mutes').insert({muter:me.id,muted:id});if(error&&error.code!='23505')return toast(error.message);MUTES.add(id);DIRTY=true;paint();return toast(PR&&PR.id==id?'Muted @'+PR.handle:'Account muted')}
if(a=='unmute'){close();const {error}=await sb.from('mutes').delete().match({muter:me.id,muted:id});if(error)return toast(error.message);MUTES.delete(id);SAFETY_M=SAFETY_M.filter(x=>x.id!=id);DIRTY=true;paint();return toast(PR&&PR.id==id?'Unmuted @'+PR.handle:'Account unmuted')}
if(a=='blkask'){const chatC=(CHATS||[]).find(x=>x.other_id==id);const h=PR&&PR.id==id?PR.handle:(chatC&&chatC.other_handle)||'this account';$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><b>Block @${esc(h)}?</b><p class="sm mu">Their posts will be hidden from feeds, their profile will be hidden from user search, existing follows between you both will be removed, and neither of you can follow or send messages to each other.</p><button class="btn danger wide" style="margin:0" data-a="block" data-id="${esc(id)}">Block @${esc(h)}</button><button class="btn wide" style="margin:0" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='block'){close();const {error}=await sb.from('blocks').insert({blocker:me.id,blocked:id});if(error&&error.code!='23505')return toast(error.message);BLOCKS.add(id);FOL.delete(id);REQ_OUT.delete(id);FREQ=FREQ.filter(x=>x.requester!==id);POSTS=POSTS.filter(x=>x.user_id!=id);SUG=SUG.filter(s=>s.id!=id);DISC=DISC.filter(x=>x.id!=id);DSR=DSR.filter(x=>x.id!=id);SR=SR.filter(x=>x.id!=id);if(CHATS)CHATS.forEach(x=>{if(x.other_id==id){x.is_blocked=true;x.other_name='Blocked';x.other_handle='';x.other_avatar_url=null;x.other_is_elite=false;x.other_is_legendary=false;x.other_is_founder_elite=false;x.unread_count=0;x.chat_streak=0;x.last_message_preview='Messaging blocked'}});if(DM_PARTNER&&DM_PARTNER.id==id){stopDmAudio();cancelDmRec();DM_BLOCKED=true;DM_ALLOW=false;DM_MSGS=[];DM_SEEN=new Set();DM_SVC.disconnectThread()}syncChatUnread();DIRTY=true;if(V=='user'&&PR&&PR.id==id){POSTS=[];MORE=false;await loadCnt()}paint();return toast(PR&&PR.id==id?'Blocked @'+PR.handle:'Account blocked')}
if(a=='unblock'){close();const {error}=await sb.from('blocks').delete().match({blocker:me.id,blocked:id});if(error)return toast(error.message);BLOCKS.delete(id);SAFETY_B=SAFETY_B.filter(x=>x.id!=id);CHATS=null;syncChatUnread();DIRTY=true;if(V=='chats')await loadChats(true);else if(V=='user'&&PR&&PR.id==id)await refresh();else paint();return toast(PR&&PR.id==id?'Unblocked @'+PR.handle:'Account unblocked')}
if(a=='share'){try{await navigator.clipboard.writeText(location.origin+location.pathname+'?u='+id)}catch(e){}return toast('Profile link copied')}
if(a=='saveprof'){const nLkd=cdRem(me.name_changed_at,NAME_CD_MS)>0,name=nLkd?me.name:cleanCtrl($('#en').value).trim(),bio=cleanCtrl($('#eb').value,true).trim(),loc=cleanCtrl($('#el').value).trim();let link=$('#ek').value.trim();if(!nLkd&&!name)return toast('Name can’t be empty.');if(link){if(!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(link))link='https://'+link;link=safeUrl(link);if(!link)return toast('Link must be a valid https:// or http:// URL.')}const ints=INTERESTS.filter(t=>EDIT_INT.has(t));const upd={bio:bio||null,location:loc||null,link:link||null,interests:ints};if(!nLkd&&name!==me.name)upd.name=name;const {error}=await sb.from('profiles').update(upd).eq('id',me.id);if(error){await loadMe(me.id);paint();return toast(error.message)}await loadMe(me.id);if(PR&&PR.id==me.id)PR=me;DIRTY=true;toast(upd.name?'Profile saved · Name cooldown 24h':'Profile saved');return history.back()}
if(a=='delacctask'){$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><b>Delete your NYXORA account?</b><p class="sm mu">Your account will be scheduled for permanent deletion in <b>72 hours</b>. During this 72-hour window:</p><p class="sm mu">• You will be signed out immediately.<br>• Your profile, posts, comments, and listings are hidden from everyone.<br>• Signing back in with Google within 72 hours automatically cancels deletion and restores your account.<br>• After 72 hours, your account and data are permanently deleted.</p><button type="button" class="btn danger wide" style="margin:0" id="delacctbtn" data-a="delacctdo">Schedule Deletion &amp; Sign Out</button><button type="button" class="btn wide" style="margin:0" data-a="close">Cancel</button></div>`;$('#sh').classList.add('on');return}
if(a=='delacctdo'){if(DEL_BZ)return;DEL_BZ=true;const btn=$('#delacctbtn');if(btn){btn.disabled=true;btn.textContent='Scheduling deletion…'}try{const {error}=await sb.rpc('request_account_deletion');if(error){if(btn){btn.disabled=false;btn.textContent='Schedule Deletion & Sign Out'}return toast(error.message)}close();resetLocalState();await sb.auth.signOut();OAUTH_ERR='';paint();toast('Account scheduled for deletion in 72 hours. Sign in with Google within 72 hours to restore.')}finally{DEL_BZ=false}return}
if(a=='bm'){const p=+id;if(BM.has(p)){BM.delete(p);paint();const r=await sb.from('bookmarks').delete().match({user_id:me.id,post_id:p});if(r.error){BM.add(p);paint();return toast(r.error.message)}if(V=='bms'){POSTS=POSTS.filter(x=>x.id!=p);paint()}}else{BM.add(p);paint();const r=await sb.from('bookmarks').insert({user_id:me.id,post_id:p});if(r.error){BM.delete(p);paint();return toast(r.error.message)}toast('Saved to bookmarks')}return}
if(a=='more'){if(BZ)return;BZ=true;const btn=$('[data-a="more"]');if(btn){btn.disabled=true;btn.textContent='Loading...'}try{await loadPosts(true);paint()}finally{BZ=false}return}
if(a=='zoom'){let mode='1',path=String(id||'');if(/^[012]:/.test(path)){mode=path[0];path=path.slice(2)}const dl=mode!='0',vo=mode=='2',zUrl=safeMediaUrl(imgUrl(path))||imgUrl(path);$('#sh').innerHTML=`<div class="lbx" data-a="close"><img class="${dl?'':'nodl'}" src="${esc(zUrl)}" alt=""><button class="lbc" data-a="close" aria-label="Close">✕</button>${vo?'':dl?`<button class="lbdl" data-a="dlimg" data-id="0:${esc(path)}">${I.dl} Download</button>`:'<div class="lbnote">Downloads disabled by author · Screenshots cannot always be prevented</div>'}</div>`;$('#sh').classList.add('on');LBO=true;history.pushState({lb:1},'');return}
if(a=='cropcancel')return close();
if(a=='cropdone')return saveCroppedImg();
if(a=='dlimg'){const s=String(id||''),i=s.indexOf(':'),pid=i>0?+s.slice(0,i):0,path=i>=0?s.slice(i+1):s;const match=POSTS.find(x=>tid(x)==pid)||(DET&&tid(DET)==pid?DET:null);if(match){const ok=match.repost_of?match.o_allow_download!==false:match.allow_download!==false;if(!ok)return toast('Downloads are disabled for this post.')}if(!path)return;return dlFile(path,'nyxora-post')}
if(a=='rmimg'){IMG=null;IMG_META=null;ALLOW_DL=true;const fi=$('#fi');if(fi)fi.value='';renderPv();return}
if(a=='send'){const v=$('#ci').value.trim();if(!v)return;const {error}=await sb.from('comments').insert({post_id:+id,user_id:me.id,body:v,...(RC?{parent_id:RC.root,reply_to:RC.uid}:{})});if(error)return toast(error.message);RC=null;await loadCm(+id);DET.comment_count=CM[+id].length;return paint()}
if(a=='creply'){const c=CM[DET.id].find(x=>x.id==+id);if(!c)return;RC={root:c.parent_id||c.id,uid:c.user_id,handle:c.handle};paint();const i=$('#ci');if(i)i.focus();return}
if(a=='creset'){RC=null;return paint()}
if(a=='clike'){if(act.cl)return;act.cl=1;try{const c=+id,had=CLK.has(c),r=had?await sb.from('comment_likes').delete().match({comment_id:c,user_id:me.id}):await sb.from('comment_likes').insert({comment_id:c,user_id:me.id});if(r.error&&r.error.code!='23505')return toast(r.error.message);had?CLK.delete(c):CLK.add(c);const {count}=await sb.from('comment_likes').select('comment_id',{count:'exact',head:true}).eq('comment_id',c),x=CM[DET.id].find(k=>k.id==c);if(x)x.like_count=Math.max(count??0,CLK.has(c)?1:0);return paint()}finally{act.cl=0}}
if(a=='cdel'){if(!confirm('Delete this comment?'))return;const r=await sb.from('comments').delete().eq('id',+id);if(r.error)return toast(r.error.message);await loadCm(DET.id);DET.comment_count=CM[DET.id].length;paint();return toast('Comment deleted')}
if(a=='fol'){if(BLOCKS.has(id))return toast('Unblock this account before following.');if(act.folLk)return;act.folLk=1;try{const {data,error}=await sb.rpc('request_or_follow',{p_target:id});if(error)return toast(error.message);const row=Array.isArray(data)?data[0]:data,st=row&&row.status;if(st=='unfollowed'){FOL.delete(id);REQ_OUT.delete(id);if(V=='user'&&PR&&PR.id==id){CNT.fr=Math.max(0,CNT.fr-1);if(PR.is_private){POSTS=[];MORE=false}}toast('Unfollowed')}else if(st=='cancelled'){REQ_OUT.delete(id);toast('Follow request cancelled')}else if(st=='requested'){FOL.delete(id);REQ_OUT.add(id);toast('Follow request sent')}else if(st=='following'){REQ_OUT.delete(id);FOL.add(id);SUG=SUG.filter(s=>s.id!=id);if(V=='user'&&PR&&PR.id==id){CNT.fr++;if(PR.is_private)await loadPosts()}toast('Following')}return paint()}finally{act.folLk=0}}
if(a=='del'){close();if(!confirm('Delete this post?'))return;const p=findPost(id);if(!p)return;await sb.from('posts').delete().eq('id',p.id);if(p.repost_of)RP.delete(p.repost_of);if(p.image_path)await sb.storage.from('images').remove([p.image_path]);POSTS=POSTS.filter(x=>x.id!=p.id);SP=SP.filter(x=>x.id!=p.id);if(V=='post')history.back();else paint();return toast('Deleted')}
if(a=='rep'){close();const s=String(id||''),i=s.indexOf(':'),tp=i>0?s.slice(0,i):'post',tidVal=i>0?s.slice(i+1):s;return openReportSheet(tp,tidVal)}
if(a=='reppick'){REP_REASON=id||'';document.querySelectorAll('[data-a="reppick"]').forEach(el=>el.classList.toggle('on',el.dataset.id===REP_REASON));const sbBtn=$('#repsub');if(sbBtn)sbBtn.disabled=!REP_REASON;return}
if(a=='repsend'){if(!REP_TGT||!REP_REASON)return toast('Please select a reason.');const btn=$('#repsub'),note=($('#repnote')&&$('#repnote').value||'').trim();if(btn)btn.disabled=true;const {error}=await sb.rpc('submit_report',{p_target_type:REP_TGT.type,p_target_id:REP_TGT.id,p_reason:REP_REASON,p_details:note||null});if(error){if(btn)btn.disabled=false;return toast(error.message)}close();loadUnread();return toast('Report submitted for review.')}
if(a=='restorestreak'){if(RESTORE_BZ)return;RESTORE_BZ=true;paint();try{const {data,error}=await sb.rpc('restore_streak');if(error)return toast(error.message);const res=Array.isArray(data)?data[0]:data;await Promise.all([loadMe(me.id),loadMyStreak(),PR&&PR.id==me.id?loadPrStreak(me.id):Promise.resolve()]);if(V=='streak'){const {data:td}=await sb.rpc('top_streaks',{p_lim:10});TOP=td||[]}toast((res&&res.message)||'Streak updated')}finally{RESTORE_BZ=false;paint()}return}
if(a=='out'){resetLocalState();await sb.auth.signOut();OAUTH_ERR='';return paint()}
if(a=='dl'){const {data}=await sb.from('posts').select('image_path').eq('user_id',me.id).not('image_path','is',null).eq('image_expired',false).or('image_expires_at.is.null,image_expires_at.gt.'+new Date().toISOString()).limit(100);if(!data||!data.length)return toast('You have no active pictures to download.');toast('Downloading '+data.length+' picture(s)...');for(const [i,p] of data.entries())await dlFile(p.image_path,'nyxora-photo-'+(i+1))}}

async function toggleDmVoice(mid){
  const m=DM_MSGS.find(x=>x.id==mid);
  if(!m||m.msg_type!='voice'||!m.voice_path||m.deleted_for_everyone_at)return toast('Voice message unavailable.');
  if(DM_AUDIO&&DM_AUDIO.id==mid){
    if(DM_AUDIO.playing){DM_AUDIO.audio.pause();DM_AUDIO.playing=false}
    else{try{await DM_AUDIO.audio.play();DM_AUDIO.playing=true}catch(e){toast('Could not play voice message.')}}
    paint();return;
  }
  stopDmAudio();
  try{
    const url=await DM_SVC.voiceUrl(m.voice_path);
    const au=new Audio(url);
    const curAudio={id:mid,audio:au,playing:true,cur:0,dur:m.voice_duration_sec||1};
    DM_AUDIO=curAudio;
    const syncNode=()=>{
      const w=document.querySelector(`.dmvplay[data-vid="${mid}"]`);
      if(!w||DM_AUDIO!==curAudio)return;
      const d=isFinite(au.duration)&&au.duration>0?au.duration:(m.voice_duration_sec||1);
      curAudio.dur=d;curAudio.cur=au.currentTime||0;
      const bar=w.querySelector('.dmvbar i'),durEl=w.querySelector('.dmvdur');
      if(bar)bar.style.width=Math.min(100,Math.round((curAudio.cur/Math.max(.1,d))*100))+'%';
      if(durEl)durEl.textContent=curAudio.cur>0?`${fmtDur(curAudio.cur)} / ${fmtDur(d)}`:fmtDur(d);
    };
    au.addEventListener('timeupdate',syncNode);
    au.addEventListener('loadedmetadata',syncNode);
    au.addEventListener('ended',()=>{if(DM_AUDIO===curAudio){stopDmAudio();paint()}});
    au.addEventListener('error',()=>{if(DM_AUDIO===curAudio){stopDmAudio();paint();toast('Could not play voice message.')}});
    paint();
    await au.play();
  }catch(e){stopDmAudio();paint();toast(e.message||'Voice message unavailable.')}
}
function pickVoiceMime(){
  if(typeof MediaRecorder=='undefined')return'';
  const prefs=['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/ogg','audio/mp4','audio/aac'];
  return prefs.find(t=>!MediaRecorder.isTypeSupported||MediaRecorder.isTypeSupported(t))||'';
}
async function startDmRec(){
  if(DM_REC||DM_SENDING||!DM_PARTNER||!DM_ALLOW||DM_BLOCKED||DM_EDIT_ID)return;
  if(dmRateRem()>0)return updDmRateUI();
  if(DM_QUOTA&&DM_QUOTA.remaining<=0)return toast(`Daily message limit reached (${DM_QUOTA.used_today}/${DM_QUOTA.daily_limit}). Resets at 00:00 UTC.`);
  if(DM_QUOTA&&DM_QUOTA.voice_remaining<=0)return toast(`Daily voice message limit reached (${DM_QUOTA.voice_used_today}/${DM_QUOTA.voice_daily_limit}). Resets at 00:00 UTC.`);
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||typeof MediaRecorder=='undefined')return toast('Voice recording is not supported in this browser.');
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true,channelCount:1,sampleRate:16000}});
    const mime=pickVoiceMime();
    let mr;
    try{mr=new MediaRecorder(stream,{...(mime?{mimeType:mime}:{}),audioBitsPerSecond:20000})}
    catch(e){mr=mime?new MediaRecorder(stream,{mimeType:mime}):new MediaRecorder(stream)}
    const chunks=[];
    const rec={mr,stream,chunks,mime:mr.mimeType||mime||'audio/webm',startedAt:Date.now(),sec:0,timer:null,cancelled:false,busy:false};
    DM_REC=rec;
    mr.ondataavailable=ev=>{if(ev.data&&ev.data.size>0)chunks.push(ev.data)};
    mr.onstop=async()=>{
      clearInterval(rec.timer);
      try{stream.getTracks().forEach(t=>t.stop())}catch(e){}
      if(rec.cancelled)return;
      const ms=Date.now()-rec.startedAt;
      if(ms<700||!chunks.length){DM_REC=null;paint();return toast('Record at least 1 second for a voice message.')}
      const dur=Math.max(1,Math.min(30,Math.round(ms/1000)));
      const rawMime=(rec.mime||'audio/webm').split(';')[0].trim().toLowerCase();
      const baseMime=/^audio\/(webm|ogg|mp4|aac|mpeg|x-m4a)$/.test(rawMime)?rawMime:'audio/webm';
      const ext=baseMime.includes('mp4')||baseMime.includes('m4a')?'m4a':baseMime.includes('ogg')?'ogg':baseMime.includes('aac')?'aac':'webm';
      const blob=new Blob(chunks,{type:baseMime});
      if(blob.size>512000){DM_REC=null;paint();return toast('Voice clip is too large. Please keep it concise.')}
      let path=null,uploaded=false;
      try{
        const cid=await DM_SVC.ensureConv(DM_PARTNER.id);
        path=`${cid}/${me.id}/voice-${Date.now()}.${ext}`;
        const {error:ue}=await sb.storage.from('dm_voice').upload(path,blob,{contentType:baseMime,cacheControl:'604800'});
        if(ue)throw Error(ue.message);
        uploaded=true;
        const repId=DM_REPLY?DM_REPLY.id:null;
        const msg=await DM_SVC.send(DM_PARTNER.id,'Voice message',{replyToId:repId,msgType:'voice',voicePath:path,voiceDurationSec:dur});
        DM_REPLY=null;DM_REC=null;
        if(msg){markNewDm(msg.id);mergeDmMsgs([msg]);DM_SVC.broadcastMsg(DM_PARTNER.id,msg);loadChats(true);syncChatUnread();loadChatStreak(DM_CONV)}
        paint();scrollTo(0,document.body.scrollHeight);loadDmQuota();
      }catch(err){
        if(uploaded&&path)await DM_SVC.removeVoices([path]);
        DM_REC=null;loadDmQuota();paint();
        if(/8 messages in 30 seconds/i.test(err.message||'')){const m=(err.message||'').match(/wait\s+(\d+)/i);startDmRateWait(m?+m[1]:30)}
        toast(err.message||'Could not send voice message.');
      }
    };
    mr.start(250);
    rec.timer=setInterval(()=>{
      if(DM_REC!==rec)return clearInterval(rec.timer);
      rec.sec=Math.min(30,Math.floor((Date.now()-rec.startedAt)/1000));
      const tEl=$('#dmrect'),bEl=$('#dmrecb');
      if(tEl)tEl.textContent=fmtDur(rec.sec)+' / 0:30';
      if(bEl)bEl.style.width=Math.min(100,Math.round((rec.sec/30)*100))+'%';
      if(Date.now()-rec.startedAt>=30000)stopAndSendDmRec();
    },200);
    paint();
  }catch(err){cancelDmRec();toast(err.name=='NotAllowedError'?'Microphone permission denied.':'Could not start microphone.')}
}
function stopAndSendDmRec(){
  if(!DM_REC||DM_REC.busy)return;
  DM_REC.busy=true;clearInterval(DM_REC.timer);
  const btn=document.querySelector('[data-a="dmrecsend"]');if(btn)btn.disabled=true;
  try{if(DM_REC.mr&&DM_REC.mr.state!='inactive')DM_REC.mr.stop()}catch(e){cancelDmRec();toast('Could not finish recording.')}
}

let dmSw=null;
document.addEventListener('touchstart',e=>{
  if(V!='dm'||DM_BLOCKED||!DM_ALLOW||e.touches.length!==1)return;
  const row=e.target.closest('#dmmsgs .dmrow[data-mid]');
  if(!row)return;
  const mid=+row.dataset.mid,m=DM_MSGS.find(x=>x.id==mid);
  if(!m||m.deleted_for_everyone_at)return;
  dmSw={row,mid,x:e.touches[0].clientX,y:e.touches[0].clientY,dx:0,active:false};
},{passive:true});
document.addEventListener('touchmove',e=>{
  if(!dmSw||e.touches.length!==1)return;
  const dx=e.touches[0].clientX-dmSw.x,dy=e.touches[0].clientY-dmSw.y;
  if(!dmSw.active){
    if(Math.abs(dy)>Math.abs(dx)*0.9&&Math.abs(dy)>8){dmSw=null;return}
    if(dx<-10&&Math.abs(dx)>Math.abs(dy)*1.2){dmSw.active=true;dmSw.row.classList.add('swiping')}
  }
  if(dmSw&&dmSw.active){
    dmSw.dx=Math.max(-64,Math.min(0,dx));
    dmSw.row.style.transform=`translateX(${dmSw.dx}px)`;
  }
},{passive:true});
function endDmSwipe(){
  if(!dmSw)return;
  const s=dmSw;dmSw=null;
  s.row.classList.remove('swiping');s.row.style.transform='';
  if(s.active&&s.dx<=-42){if(navigator.vibrate)navigator.vibrate(10);setDmReply(s.mid)}
}
document.addEventListener('touchend',endDmSwipe,{passive:true});
document.addEventListener('touchcancel',endDmSwipe,{passive:true});

function updSqClear(){const w=$('.sqw'),c=$('.sqc');if(!w)return;if(SQV&&!c){const b=document.createElement('button');b.type='button';b.className='sqc';b.dataset.a='sqclear';b.setAttribute('aria-label','Clear search');b.textContent='✕';w.appendChild(b)}else if(!SQV&&c)c.remove()}
document.addEventListener('click',async e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled)return;try{await act(b.dataset.a,b.dataset.id)}catch(x){toast(x.message||'Something went wrong')}});
document.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest('.nodl'))e.preventDefault()});
document.addEventListener('dragstart',e=>{if(e.target.closest&&e.target.closest('.nodl'))e.preventDefault()});
document.addEventListener('input',e=>{if(e.target.id=='tx')$('#ct').textContent=e.target.value.length+'/'+e.target.maxLength;if(e.target.id=='eptx')$('#epct').textContent=e.target.value.length+'/3000';if(e.target.id=='dmi'){DM_TEXT=e.target.value;const c=$('#dmct');if(c)c.textContent=e.target.value.length+'/1000'}if(e.target.id=='ctdim'&&CT_DRAFT){CT_DRAFT.dim=Math.max(0,Math.min(.75,+e.target.value||0));syncChatThemePreview()}});
document.addEventListener('change',e=>{if(e.target.id=='adlw')ALLOW_DL=!!e.target.checked;if(e.target.id=='psens')POST_SENS=!!e.target.checked});
document.addEventListener('change',async e=>{if(e.target.id!='ctfile'||!e.target.files[0]||!CT_DRAFT)return;const f=e.target.files[0];try{const blob=await compWall(f);if(!CT_DRAFT)return;if(CT_DRAFT.ownsUrl&&CT_DRAFT.previewUrl){try{URL.revokeObjectURL(CT_DRAFT.previewUrl)}catch(ex){}}CT_DRAFT.blob=blob;CT_DRAFT.hasImg=true;CT_DRAFT.previewUrl=URL.createObjectURL(blob);CT_DRAFT.ownsUrl=true;syncChatThemePreview()}catch(x){e.target.value='';toast(x.message||'Could not read that image.')}});
document.addEventListener('change',async e=>{if(e.target.id!='fi'||!e.target.files[0])return;const f=e.target.files[0];try{if(QUOTA&&QUOTA.remaining<=0)throw Error(`Daily image upload limit reached (${QUOTA.used_today}/${QUOTA.daily_limit}). Resets at 00:00 UTC.`);setProg(35,'Compressing image…');const res=await comp(f);IMG=res.blob;IMG_META=res;setProg(0,'');renderPv();toast('Compressed to '+Math.max(1,Math.round(IMG.size/1024))+' KB')}catch(x){setProg(0,'');e.target.value='';toast(x.message||'Could not read that image.')}});
document.addEventListener('change',async e=>{if(e.target.id!='pf'||!e.target.files[0])return;try{await openCropper('av',e.target.files[0])}catch(x){e.target.value='';toast(x.message||'Could not read that image.')}});
let srT;document.addEventListener('input',e=>{if(e.target.id!='sq')return;clearTimeout(srT);const v=e.target.value.trim();SQV=e.target.value;SQD=false;updSqClear();SQ_TERMS=buildSqTerms(v,[],[]);if(!v){SR=[];if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();return}if(V=='search'&&$('#sr'))$('#sr').innerHTML=srHtml();srT=setTimeout(()=>loadSearchSug(v),220)});
let dqT;document.addEventListener('input',e=>{if(e.target.id!='dq')return;const v=e.target.value;DQV=v;const w=$('.dsw'),clr=$('.dsc');if(w){if(v&&!clr){const b=document.createElement('button');b.type='button';b.className='dsc';b.dataset.a='dclear';b.setAttribute('aria-label','Clear search');b.textContent='✕';w.appendChild(b)}else if(!v&&clr)clr.remove()}clearTimeout(dqT);dqT=setTimeout(()=>{if(!v.trim()){DSR=[];DSR_OFF=0;DSR_MORE=false;DSR_LD=false;if(V=='discover'&&$('#dr'))$('#dr').innerHTML=discResHtml();if(DTAB=='all')loadDiscoverPeople(true);else if(!DISC.length&&!DISC_LD)loadDiscover(false)}else loadDiscoverSearch(false)},300)});
document.addEventListener('change',async e=>{if(e.target.id!='bf'||!e.target.files[0])return;try{await openCropper('bn',e.target.files[0])}catch(x){e.target.value='';toast(x.message||'Could not read that image.')}});
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='sq'){e.preventDefault();clearTimeout(srT);SQV=e.target.value.trim();runSearch()}if(e.key=='Enter'&&e.target.id=='dq'){e.preventDefault();clearTimeout(dqT);DQV=e.target.value;loadDiscoverSearch(false)}if(e.key=='Enter'&&e.target.id=='hkwi'){e.preventDefault();act('addkw')}if(e.key=='Enter'&&!e.shiftKey&&e.target.id=='dmi'){e.preventDefault();act('dmsend')}});
window.addEventListener('popstate',async()=>{if(LBO){LBO=false;close();return}if(!me){V='home';scrollTo(0,0);return paint()}if(isSub()){const w=V,P=PS.pop()||{V:'home',T,U,y:0,UP:false};if(w=='dm'){DM_SVC.disconnectThread();stopDmAudio();cancelDmRec();DM_EDIT_ID=null;DM_REPLY=null;DM_STREAK=null}V=P.V;T=P.T;U=P.U;UPUSH=!!P.UP;DET=null;const need=(V=='home'||V=='user'||V=='bms')&&(w=='bms'||w=='user'||w=='search'||DIRTY||(V=='user'&&(!PR||PR.handle!=U)));if(V=='chats'){paint();loadChats(true)}else if(V=='dm'&&DM_PARTNER){if(BLOCKS.has(DM_PARTNER.id)){DM_BLOCKED=true;DM_ALLOW=false;DM_MSGS=[];DM_SEEN=new Set();DM_SVC.disconnectThread();paint()}else{const st=await DM_SVC.checkPolicy(DM_PARTNER.id);if(st&&(st.is_blocked||BLOCKS.has(DM_PARTNER.id))){DM_BLOCKED=true;DM_ALLOW=false;DM_MSGS=[];DM_SEEN=new Set();DM_SVC.disconnectThread();paint()}else if(DM_BLOCKED){openDmByTarget(DM_PARTNER)}else{paint();ensureChatWallpaperUrl(DM_CONV);catchUpDm(DM_CONV);loadChatStreak(DM_CONV)}}}else if(V=='discover'){DIRTY=false;paint();if(DQV.trim())loadDiscoverSearch(false);else{if(!DISC.length)loadDiscover(false);loadDiscoverPeople(true)}}else if(need){DIRTY=false;POSTS=[];LD=true;paint();refresh()}else paint();scrollTo(0,P.y)}});
sb.auth.onAuthStateChange(ev=>{if(ev=='TOKEN_REFRESHED')DM_SVC.syncAuth();if(ev=='SIGNED_OUT'){resetLocalState();paint()}});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState=='hidden')flushSeen();else if(me){syncChatUnread();if(V=='dm'&&DM_CONV){catchUpDm(DM_CONV);loadChatStreak(DM_CONV)}if(V=='chats')loadChats(true)}});
window.addEventListener('pagehide',flushSeen);
(async()=>{try{const {data:{session}}=await sb.auth.getSession();if(!session){paint();return}try{const c=JSON.parse(localStorage.getItem('nyx_c')||'null');if(c&&c.u==session.user.id){me=c.me;POSTS=c.p;LK=new Set(c.l);FOL=new Set(c.f);paint()}}catch(e){}await start(session);const sp=new URLSearchParams(location.search),u=sp.get('u'),pid=sp.get('p');if(pid&&+pid>0&&me)await act('opn',+pid);else if(u&&me)go('user',u.toLowerCase())}catch(x){paint();toast(x.message||'Could not connect. Check your internet.')}finally{hideSplash()}})();
setInterval(()=>{if(me&&document.visibilityState=='visible'){loadUnread();syncChatUnread()}},60000);
setInterval(syncCooldownUI,1000);