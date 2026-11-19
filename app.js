// NYXORA: connects to your Supabase project. The publishable key is meant to be public.
const SB_URL='https://hadyoglprvbutxpbrszr.supabase.co',SB_KEY='sb_publishable_4DEjo9jeTZbkoX6lGTfH8A_o27ZfAZk';
// Ads appear only if you add some here, one every AD_EVERY posts, for non-Elite users.
const AD_EVERY=20,ADS=[]; // example: {brand:'Brand',text:'Short text',cta:'Learn more',url:'https://example.com'}
const sb=supabase.createClient(SB_URL,SB_KEY),$=s=>document.querySelector(s);
const ic=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${p}"/></svg>`;
const I={home:ic('M3 11l9-8 9 8v10h-6v-6H9v6H3z'),fire:ic('M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-4 3-7 1 1 2 2 3 2 0-2-1-4 0-7z'),me:ic('M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6'),heart:ic('M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z'),chat:ic('M4 5h16v11H9l-5 4z'),plus:ic('M12 5v14M5 12h14'),dia:ic('M12 2l10 10-10 10L2 12z'),img:ic('M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4')};
const ring='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/></svg>';
const bd=t=>t?`<svg class="bd" viewBox="0 0 24 24" aria-label="${t=='g'?'Legendary':'Elite'}"><defs><linearGradient id="gr${t}" x1="0" y1="0" x2="1" y2="1">${t=='g'?'<stop offset="0" stop-color="#FFF4C2"/><stop offset=".4" stop-color="#E2B33C"/><stop offset=".7" stop-color="#8F6208"/><stop offset="1" stop-color="#F6D77A"/>':'<stop offset="0" stop-color="#DDF2FF"/><stop offset=".4" stop-color="#2FA3F2"/><stop offset=".7" stop-color="#0A4F8F"/><stop offset="1" stop-color="#8ED0FF"/>'}</linearGradient></defs><path d="M12 1.5 22.5 12 12 22.5 1.5 12z" fill="url(#gr${t})" stroke="rgba(255,255,255,.4)" stroke-width=".6"/><path d="m7.8 12.2 3 3 5.4-5.8" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`:'';
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ago=t=>{const m=Math.max(1,Math.round((Date.now()-new Date(t))/6e4));return m<60?m+'m':m<1440?Math.round(m/60)+'h':Math.round(m/1440)+'d'};
const day=o=>new Date(Date.now()+(o||0)*864e5).toISOString().slice(0,10);
const sNow=p=>p.last_post_day==day()||p.last_post_day==day(-1)?p.streak:0;
const toast=m=>{const t=$('#ts');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),3000)};
const av=n=>`<div class="av">${esc((n||'?')[0].toUpperCase())}</div>`;
const badge=p=>bd(p.is_legendary?'g':p.is_elite?'e':'');
const nameCell=p=>`<b class="${p.is_elite?'glow':''}" data-a="user" data-id="${esc(p.handle)}">${esc(p.name)}</b>${badge(p)}`;
const imgUrl=p=>sb.storage.from('images').getPublicUrl(p).data.publicUrl;
let me=null,V='home',T='fy',OP=null,IMG=null,AM='in',U=null,PR=null,POSTS=[],LK=new Set(),FOL=new Set(),SUG=[],TOP=[],CM={};

// ---------- views ----------
const post=p=>{const lk=LK.has(p.id);return`<article class="card">${av(p.name)}<div class="bdy"><div class="hd">${nameCell(p)}<span class="mu">@${esc(p.handle)} · ${ago(p.created_at)}</span></div><p>${esc(p.body)}</p>${p.image_expired?'<div class="exp">Image expired.<br>Elite images expire last.</div>':p.image_path?`<img loading="lazy" src="${imgUrl(p.image_path)}" alt="Post image">`:''}<div class="act"><button class="${lk?'lk':''}" data-a="like" data-id="${p.id}">${I.heart} ${p.like_count}</button><button data-a="cm" data-id="${p.id}">${I.chat} ${p.comment_count}</button>${p.user_id==me.id?`<button class="sm" data-a="del" data-id="${p.id}">Delete</button>`:`<button class="sm" data-a="rep" data-id="${p.id}">Report</button>`}</div>${OP==p.id?cmBox(p.id):''}</div></article>`};
const cmBox=id=>`<div class="cms">${(CM[id]||[]).map(c=>`<div class="cm"><b>${esc(c.profiles?.name)}</b> ${esc(c.body)}</div>`).join('')}<div class="cin"><input id="ci" placeholder="Write a reply" maxlength="280"><button class="btn pri sm" data-a="send" data-id="${id}">Reply</button></div></div>`;
const ad=a=>`<article class="card ad"><div class="av">${esc(a.brand[0])}</div><div class="bdy"><div class="hd"><b>${esc(a.brand)}</b><span class="tag">Sponsored</span></div><p>${esc(a.text)}</p><div class="adc"><a class="btn sm" href="${esc(a.url)}" target="_blank" rel="noopener sponsored">${esc(a.cta)}</a><button class="mu sm lnk" data-a="nav" data-id="elite">Remove ads with Elite</button></div></div></article>`;
const feedHtml=l=>l.map((p,i)=>post(p)+(!me.is_elite&&ADS.length&&(i+1)%AD_EVERY==0?ad(ADS[Math.floor(i/AD_EVERY)%ADS.length]):'')).join('');
const sugHtml=()=>SUG.length&&FOL.size<3&&T=='fy'?`<div class="box" style="margin:14px 16px"><b>Who to follow</b>${SUG.map(s=>`<div class="row">${av(s.name)}<div class="g">${nameCell(s)}<div class="mu sm">@${esc(s.handle)}</div></div><button class="btn sm pri" data-a="fol" data-id="${s.id}">Follow</button></div>`).join('')}</div>`:'';
const home=()=>`<div class="tabs"><button class="${T=='fy'?'on':''}" data-a="tab" data-id="fy">For you</button><button class="${T=='fl'?'on':''}" data-a="tab" data-id="fl">Following</button></div><div class="dp"><span class="mu sm">Today’s prompt</span><b>What’s one thing you changed your mind about this year?</b><button class="btn pri sm" data-a="new">Answer it</button></div>${sugHtml()}${POSTS.length?feedHtml(POSTS):`<p class="empty">${T=='fl'?'Follow people to see their posts here.':'No posts yet. Be the first to post.'}</p>`}<p class="end">You’re all caught up</p>`;
const prof=()=>{const own=PR.id==me.id,f=FOL.has(PR.id);return`<div class="pg"><div class="row" style="gap:14px">${av(PR.name)}<div class="g"><div class="hd" style="font-size:18px">${nameCell(PR)}</div><div class="mu">@${esc(PR.handle)}</div></div>${own?'':`<button class="btn sm ${f?'':'pri'}" data-a="fol" data-id="${PR.id}">${f?'Following':'Follow'}</button>`}</div><div class="r"><span><b>${sNow(PR)}</b> day streak</span><span class="mu sm">Joined ${new Date(PR.created_at).toLocaleDateString()}</span></div>${own?`<div class="box sm">${PR.is_legendary?'You’re a Legendary member. Thanks for being early.':'Confirm your email and make your first post to claim a Legendary badge (first 1,000 members).'}</div><div class="r"><button class="btn sm" data-a="dl">Download my photos</button><button class="btn sm" data-a="out">Log out</button></div>`:''}</div>${feedHtml(POSTS)}${POSTS.length?'':'<p class="empty">No posts yet.</p>'}`};
const streakV=()=>{const s=sNow(me),off=me.last_post_day==day()?0:1,B=[['First post',!!me.last_post_day],['3-day streak',s>=3],['7-day streak',s>=7],['30-day streak',s>=30],['Legendary member',me.is_legendary],['Elite member',me.is_elite]];
return`<div class="pg"><div class="box fl">${I.fire}<b>${s}</b><span class="mu">day streak</span><div class="dots">${[6,5,4,3,2,1,0].map(i=>`<i class="${i>=off&&i<off+s?'f':''}"></i>`).join('')}</div><p class="sm mu">${me.last_post_day==day()?'You posted today. Come back tomorrow.':'Post today to keep your streak alive.'}</p></div><h3>Badges</h3><div class="bgs">${B.map(b=>`<div class="${b[1]?'got':''}">${b[0]}</div>`).join('')}</div><h3>Top streaks</h3><div>${TOP.map((r,i)=>`<div class="row"><b>${i+1}</b>${av(r.name)}<div class="g">${nameCell(r)}</div><b>${sNow(r)}</b></div>`).join('')}</div></div>`};
const eliteV=()=>{const R=[['Posts per day','10','50'],['Post length','280','1,000'],['Images per day','2','10'],['Ads','Yes','None'],['Old images','Expire first','Expire last'],['Badge','Legendary or none','Elite diamond'],['Name','Plain','Golden glow']];
return`<div class="pg"><div class="fl"><svg viewBox="0 0 24 24" style="color:#1D9BF0">${bd('e').replace(/<svg[^>]*>|<\/svg>/g,'')}</svg><h1>NYXORA Elite</h1><p class="mu">More room to post, no ads, and a badge that stands out.</p></div><div class="cmp"><div class="h"></div><div class="h">Free</div><div class="h">Elite</div>${R.map(r=>`<div>${r[0]}</div><div>${r[1]}</div><div>${r[2]}</div>`).join('')}</div><p class="sm mu">Also coming: edit posts, pinned post, scheduled posts, analytics, custom themes and bookmark folders.</p><button class="btn elt wide" style="margin:0" disabled>Elite opens soon</button></div>`};
const authV=()=>`<section class="pg auth" style="padding-top:36px"><div class="logo">${ring}NYXORA</div><h1>${AM=='in'?'Welcome back.':'Say something.<br>Find your people.'}</h1>${AM=='up'?'<input id="an" placeholder="Your name" maxlength="40"><input id="ah" placeholder="Handle (letters, numbers, _)" maxlength="20" autocapitalize="none" autocomplete="off">':''}<input id="ae" type="email" placeholder="Email" autocomplete="email"><input id="ap" type="password" placeholder="Password (8+ characters)" autocomplete="${AM=='in'?'current-password':'new-password'}"><p class="err" id="er"></p><button class="btn pri wide" style="margin-top:4px" data-a="${AM=='in'?'signin':'signup'}">${AM=='in'?'Log in':'Create account'}</button><button class="mu sm" style="margin-top:8px" data-a="mode">${AM=='in'?'New here? Create an account':'Have an account? Log in'}</button></section>`;
function paint(){const a=$('#app');if(!me){a.innerHTML=authV();return}
const N=[['home','home'],['streak','fire'],['new','plus'],['elite','dia'],['me','me']],on=k=>k=='me'?V=='user'&&U==me.handle:V==k;
a.innerHTML=`<div class="hdr"><div class="logo">${ring}NYXORA</div><span class="mu sm">@${esc(me.handle)}</span></div>`+(V=='home'?home():V=='streak'?streakV():V=='elite'?eliteV():PR?prof():'')+`<nav class="nav"><div>${N.map(n=>n[0]=='new'?`<button class="fab" data-a="new" aria-label="New post">${I.plus}</button>`:`<button class="${on(n[0])?'on':''}" data-a="nav" data-id="${n[0]}" aria-label="${n[0]}">${I[n[1]]}</button>`).join('')}</div></nav>`}

// ---------- data ----------
async function loadMe(id){me=(await sb.from('profiles').select('*').eq('id',id).single()).data}
async function loadFol(){FOL=new Set(((await sb.from('follows').select('followee').eq('follower',me.id)).data||[]).map(r=>r.followee))}
async function loadPosts(){POSTS=[];let q=sb.from('feed').select('*').order('created_at',{ascending:false}).limit(40);
if(V=='user')q=q.eq('user_id',PR.id);else if(T=='fl')q=q.in('user_id',[...FOL,me.id]);
const {data,error}=await q;if(error){toast(error.message);return}POSTS=data;LK=new Set();
if(POSTS.length)LK=new Set(((await sb.from('likes').select('post_id').eq('user_id',me.id).in('post_id',POSTS.map(p=>p.id))).data||[]).map(x=>x.post_id))}
async function loadSug(){const {data}=await sb.from('profiles').select('id,handle,name,is_elite,is_legendary').neq('id',me.id).order('created_at',{ascending:false}).limit(12);SUG=(data||[]).filter(s=>!FOL.has(s.id)).slice(0,3)}
async function loadCm(id){CM[id]=(await sb.from('comments').select('id,body,profiles(name,handle)').eq('post_id',id).order('created_at')).data||[]}
async function refresh(){
if(V=='home')await Promise.all([loadPosts(),loadSug()]);
else if(V=='user'){PR=(await sb.from('profiles').select('*').eq('handle',U).maybeSingle()).data;if(!PR){toast('Profile not found');return go('home')}await loadPosts()}
else if(V=='streak')TOP=(await sb.from('profiles').select('id,handle,name,is_elite,is_legendary,streak,last_post_day').order('streak',{ascending:false}).limit(5)).data||[];
paint()}
async function go(v,h){V=v;OP=null;if(v=='user'){U=h;PR=null}scrollTo(0,0);paint();await refresh()}
async function start(){const {data:{session}}=await sb.auth.getSession();await loadMe(session.user.id);await loadFol();V='home';T='fy';await refresh()}

// ---------- auth ----------
async function auth(a){const em=$('#ae').value.trim(),pw=$('#ap').value,er=t=>{$('#er').textContent=t};
if(!em||pw.length<8)return er('Enter your email and a password of 8+ characters.');
if(a=='signin'){const {error}=await sb.auth.signInWithPassword({email:em,password:pw});if(error)return er(error.message);return start()}
const name=$('#an').value.trim(),h=$('#ah').value.trim().toLowerCase();
if(!name)return er('Add your name.');if(!/^[a-z0-9_]{3,20}$/.test(h))return er('Handle: 3 to 20 letters, numbers or underscores.');
const {data:t}=await sb.from('profiles').select('id').eq('handle',h).maybeSingle();if(t)return er('That handle is taken.');
const {data,error}=await sb.auth.signUp({email:em,password:pw,options:{data:{name,handle:h}}});if(error)return er(error.message);
if(data.session)return start();AM='in';paint();$('#er').textContent='Check your email to confirm your account, then log in.'}

// ---------- compose ----------
function sheet(){const L=me.is_elite?1000:280;$('#sh').innerHTML=`<div class="bk" data-a="close"></div><div class="pnl"><div class="r"><button class="mu" data-a="close">Cancel</button><button class="btn pri sm" id="pb" data-a="post">Post</button></div><textarea id="tx" placeholder="What’s happening?" maxlength="${L}"></textarea><div id="pv"></div><div class="r"><label class="ib">${I.img}<input type="file" id="fi" accept="image/*" hidden></label><span class="mu sm" id="ct">0/${L}</span></div><div class="mu sm">${me.is_elite?'Elite: 50 posts and 10 images a day':'Free: 10 posts and 2 images a day'}</div></div>`;$('#sh').classList.add('on');$('#tx').focus()}
const close=()=>{$('#sh').classList.remove('on');$('#sh').innerHTML='';IMG=null};
const toB=(c,t,q)=>new Promise(r=>c.toBlob(r,t,q));
async function comp(f){const bm=await createImageBitmap(f),s=Math.min(1,1080/bm.width),c=document.createElement('canvas');c.width=Math.round(bm.width*s);c.height=Math.round(bm.height*s);c.getContext('2d').drawImage(bm,0,0,c.width,c.height);let b;
for(const q of [.7,.5,.35,.2]){b=await toB(c,'image/webp',q);if(!b||b.type!='image/webp')b=await toB(c,'image/jpeg',q);if(b.size<=3e5)break}return b}
async function doPost(){const t=$('#tx').value.trim(),btn=$('#pb');if(!t&&!IMG)return;btn.disabled=true;let path=null;
try{if(IMG){const lim=me.is_elite?10:2,{count}=await sb.from('posts').select('id',{count:'exact',head:true}).eq('user_id',me.id).not('image_path','is',null).gte('created_at',new Date(Date.now()-864e5).toISOString());
if(count>=lim)throw Error('Daily image limit reached. Elite gets 10 a day.');
path=me.id+'/'+Date.now()+(IMG.type=='image/webp'?'.webp':'.jpg');const {error:ue}=await sb.storage.from('images').upload(path,IMG,{contentType:IMG.type,cacheControl:'31536000'});if(ue)throw Error('Image upload failed: '+ue.message)}
const {error}=await sb.from('posts').insert({user_id:me.id,body:t,image_path:path});if(error)throw Error(error.message);
const was=me.is_legendary;close();await loadMe(me.id);toast(!was&&me.is_legendary?'You earned the Legendary badge!':'Posted');await refresh()}
catch(x){toast(x.message);btn.disabled=false}}

// ---------- actions ----------
async function act(a,id){
if(a=='mode'){AM=AM=='in'?'up':'in';return paint()}
if(a=='signin'||a=='signup')return auth(a);
if(a=='close')return close();if(a=='new')return sheet();if(a=='post')return doPost();
if(a=='tab'){T=id;V='home';return refresh()}
if(a=='nav')return go(id=='me'?'user':id,id=='me'?me.handle:null);
if(a=='user')return go('user',id);
if(a=='like'){const p=POSTS.find(x=>x.id==id);if(LK.has(p.id)){LK.delete(p.id);p.like_count--;paint();await sb.from('likes').delete().match({post_id:p.id,user_id:me.id})}else{LK.add(p.id);p.like_count++;paint();await sb.from('likes').insert({post_id:p.id,user_id:me.id})}return}
if(a=='cm'){OP=OP==+id?null:+id;if(OP&&!CM[OP])await loadCm(OP);return paint()}
if(a=='send'){const v=$('#ci').value.trim();if(!v)return;const {error}=await sb.from('comments').insert({post_id:+id,user_id:me.id,body:v});if(error)return toast(error.message);await loadCm(+id);POSTS.find(x=>x.id==id).comment_count++;return paint()}
if(a=='fol'){if(FOL.has(id)){FOL.delete(id);await sb.from('follows').delete().match({follower:me.id,followee:id})}else{FOL.add(id);await sb.from('follows').insert({follower:me.id,followee:id})}SUG=SUG.filter(s=>s.id!=id);return paint()}
if(a=='del'){if(!confirm('Delete this post?'))return;const p=POSTS.find(x=>x.id==id);await sb.from('posts').delete().eq('id',p.id);if(p.image_path)await sb.storage.from('images').remove([p.image_path]);POSTS=POSTS.filter(x=>x!==p);paint();return toast('Deleted')}
if(a=='rep'){if(!confirm('Report this post?'))return;await sb.from('reports').insert({reporter:me.id,post_id:+id,reason:'Reported in app'});return toast('Thanks. We’ll review it.')}
if(a=='out'){await sb.auth.signOut();me=null;V='home';return paint()}
if(a=='dl'){const m=POSTS.filter(p=>p.user_id==me.id&&p.image_path&&!p.image_expired);if(!m.length)return toast('You have no photos yet.');
for(const [i,p] of m.entries()){const u=URL.createObjectURL(await (await fetch(imgUrl(p.image_path))).blob()),l=document.createElement('a');l.href=u;l.download='nyxora-photo-'+(i+1);l.click();URL.revokeObjectURL(u)}}}
document.addEventListener('click',async e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled)return;try{await act(b.dataset.a,b.dataset.id)}catch(x){toast(x.message||'Something went wrong')}});
document.addEventListener('input',e=>{if(e.target.id=='tx')$('#ct').textContent=e.target.value.length+'/'+e.target.maxLength});
document.addEventListener('change',async e=>{if(e.target.id!='fi'||!e.target.files[0])return;try{IMG=await comp(e.target.files[0]);$('#pv').innerHTML=`<img class="pvi" src="${URL.createObjectURL(IMG)}" alt="">`;toast('Compressed to '+Math.round(IMG.size/1024)+' KB')}catch(x){toast('Could not read that image.')}});
sb.auth.onAuthStateChange(ev=>{if(ev=='SIGNED_OUT'){me=null;paint()}});
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
(async()=>{try{const {data:{session}}=await sb.auth.getSession();if(session)await start();else paint()}catch(x){paint();toast('Could not connect. Check your internet.')}})();
