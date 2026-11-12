(function(){
  var root=document.documentElement,btn=document.getElementById("themeBtn");
  function isDark(){return root.getAttribute("data-theme")==="dark"}
  function label(){btn.textContent=isDark()?"☀ Light":"☾ Dark"}
  try{var saved=localStorage.getItem("theme");if(saved==="light"||saved==="dark")root.setAttribute("data-theme",saved)}catch(e){}
  label();
  btn.addEventListener("click",function(){
    var next=isDark()?"light":"dark";
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("theme",next)}catch(e){}
    label();
  });
})();

var P="web/";
var CH=[
{t:"Daddy’s Princess, Mummy’s Girl",s:"where every story of hers begins",c:"a",g:[{p:[
 ["01-mummy-papa-princess/papa-lift.jpg","Daddy’s princess","Lifted up, always. Some things never change, however old the princess gets."],
 ["01-mummy-papa-princess/with-mummy-and-papa.jpg","Her safe place","Mummy on one side, Papa on the other. This is home."],
 ["01-mummy-papa-princess/with-mummy-pool.jpg","Mummy’s girl","Best friend, first teacher, forever home."]]}]},
{t:"The Middle One",s:"Not the eldest, not the youngest, just the one holding the whole family together.",c:"b",g:[{p:[
 ["02-the-middle-one/sister-mint-saree.jpg","Shefali Didi","Big sister to look up to, and the one who still gets the first call."],
 ["02-the-middle-one/greenleaf-thane.jpg","Didi & Prachi","Shefali Didi is the one who showed her how it’s done. Prachi is still catching up, and still her favourite."],
 ["02-the-middle-one/brother-laughing.jpg","Arham’s favourite","The only person who can make him laugh like this."],
 ["02-the-middle-one/brother-looking.jpg","Big sister mode","She teases him, she protects him. Never the other way round."]]}]},
{t:"Jinal",s:"Cousins by relation. Best friends by choice. Soulmates by everything else.",c:"a",g:[{p:[
 ["03-jinal/school-days.jpg","Where it started","Low resolution, high importance. Two girls who didn’t know yet that they’d never lose each other.","fade"],
 ["03-jinal/cafe-heads-together.jpg","Heads together","Nothing about Prachi skips Jinal, and nothing about Jinal skips Prachi."],
 ["03-jinal/cafe-selfie.jpg","Selfie first, coffee later","Her Jini knows the right angle."],
 ["03-jinal/cafe-standing.jpg","Café girls","Different tables, same table. They always end up side by side."],
 ["03-jinal/choker-selfie.jpg","Matching moods","They never need to ask how the other one is feeling."],
 ["03-jinal/cliff-by-the-sea.jpg","Edge of the world","Still laughing about something the rest of us missed."],
 ["03-jinal/haldi-hands-on-face.jpg","Haldi days","Yellow cheeks, wide eyes, best friends."],
 ["03-jinal/haldi-laughing.jpg","Laughing in yellow","When they meet in person, they speak in laughter."],
 ["03-jinal/lying-selfie.jpg","Gossip, horizontal","Some conversations are better had lying down."],
 ["03-jinal/mirror-selfie.jpg","Mirror, mirror","Kushagra and I have stopped asking what’s so funny. We just sit there, clueless, and smile."]]}]},
{t:"Loved by Everyone",s:"Soft-spoken, never says no, and somehow everyone’s favourite.",c:"b2",g:[{p:[
 ["04-loved-by-everyone/papas-side/whole-clan-stage.jpg","The whole clan","Grandmother, uncles, aunties, bua, fufas, didis, jijus, cousins, nieces, nephew. She’s the one they all smile about. Helpful, never says no, and her charm does the rest.","w"]]}]},
{t:"Masi’s Girl",s:"Kiara has a hundred people to run to. She always runs to her Masi first.",c:"a",g:[{p:[
 ["05-kiara/holding-hands.jpg","Masi & Kiara","Tiny hand, big trust."],
 ["05-kiara/hug-purple-dress.jpg","Run, run, hug","The moment she sees her Masi, everyone else can wait."],
 ["05-kiara/video-call-hug.jpg","Even over a screen","Distance can’t stop this hug."]]}]},
{t:'<span class="strike">Bahu</span> Beti, a Blessing',s:"The family she married into, and the daughter they gained.",c:"b3",strike:1,g:[{p:[
 ["10-family-after-marriage/birthday-cake-red-polo.jpg","Papa’s Prachi","She says what I can’t say to my father, just like her own: “Yeh acha nahi hai, yeh nahi karna.”"],
 ["10-family-after-marriage/hug-grey-saree.jpg","Chai partners","Mummy and she go along like old friends. The chai is always on."],
 ["10-family-after-marriage/striped-tee-pair.jpg","Bhai’s favourite target","He jokes around with her, and she gives it right back."],
 ["10-family-after-marriage/baby-shower-kaki-to-be.jpg","The one Bhabhi can always count on","She takes care of the kids like her own, and that’s a real relief for Bhabhi."],
 ["10-family-after-marriage/three-women-with-siya.jpg","Don’t mess with the ladies of this house","The Fab 4. Three women and little Siya, running the place."]]}],
 quote:"She came in as a bride. She stays as a daughter. She is a blessing, and not only for me."},
{t:"Choti Maa",s:"“I Love You, Choti Maa.”",c:"a",g:[{p:[
 ["06-choti-maa-kalp/hug-red-saree.jpg","Her Kakudii","Kalp calls me Chote Papa and her Choti Maa. We’ll take both."],
 ["06-choti-maa-kalp/selfie-with-chote-papa.jpg","Chote Papa & Choti Maa","Our little boy’s favourite two people."],
 ["06-choti-maa-kalp/carrying-white-kurta.jpg","Always up in her arms","He’s a bit big for it now. Nobody told him."],
 ["06-choti-maa-kalp/sofa-orange-tshirt.jpg","Sofa time","Sometimes the best plan is doing nothing together."],
 ["06-choti-maa-kalp/diwali-diyas.jpg","Diwali, with diyas","Lighting up the festival, and our little one lights up her day."]]}]},
{t:"Siya",s:"She doesn’t have the words yet. She doesn’t need them.",c:"b",g:[{p:[
 ["07-siya/kiss-green-tee.jpg","Kiss, kiss","Prachi loves her to bits."],
 ["07-siya/kiss-on-bed.jpg","Soft landings","Bed, pillows, and a kiss from Masi."],
 ["07-siya/pink-suit-green-frock.jpg","Dressed up by Prachi","She’s a toddler who doesn’t talk, but Prachi knows exactly how she wants to dress."]]}]},
{t:"The Circle She Found",s:"She married me and got my friends too. Then their wives became hers.",c:"a",g:[{p:[
 ["08-the-circle/c1_friends-group.jpg","The whole gang","Bhumit & Anjali. Mohit & Dimple. Rishabh & Preksha. Kajal & Suyog. They were my friends first. Now they’re her people. Preksha started out as her friend and turned into a sister, and even Pratik, my cousin, is in, waiting for his wedding so she can dance to “Lo Chali Main”.","w"]]}]},
{t:"Zing",s:"",c:"b2",id:"zing",quote:"In Hotel Transylvania, it’s called a Zing. The moment you see her, and just know.",g:[{p:[
 ["08-zing/01-first-meeting/z06_cafe-window-grey-kurta.jpg","25 May 2022","Zing. She’s the one.","top"],
 ["08-zing/02-first-date/z05_sky-selfie-maroon-shirt.jpg","First date","My first date till I turned 26. Magical."],
 ["08-zing/03-friends-wedding/z01_pink-anarkali-navy-kurta-hall.jpg","Friend’s wedding","Courting, and already matching."],
 ["08-zing/04-engagement/z04_prachi-orange-lehenga-mirror-wall.jpg","17 June 2022","Our engagement day. I wasn’t there (weird, right?). But my presence was there in her heart."],
 ["08-zing/05-first-family-function/z07_purple-saree-teal-shirt.jpg","First family function","The saree that knocked me off.","top"],
 ["08-zing/06-proposal/z14_ring-showing-at-home.jpg","18 December 2022","Dance practice turned into a proposal."],
 ["08-zing/07-pre-wedding-shoot/z02_beach-shoot-flowing-pink-gown.jpg","Pre-wedding shoot","Spreading our love across Mumbai."],
 ["08-zing/07-pre-wedding-shoot/z03_cafe-selfie-plaid-shirt.jpg","Between the shots","Enjoyed it a lot, and the camera could tell."],
 ["08-zing/07-pre-wedding-shoot/z12_denim-seaside-promenade.jpg","Seaside, denim, us","The promenade was ours for an afternoon."],
 ["08-zing/07-pre-wedding-shoot/z13_black-saree-steps.jpg","Black saree, big steps","I forgot about the camera."],
 ["08-zing/08-haldi/z11_haldi-couple.jpg","Haldi","Yellow hands, pink hearts."],
 ["08-zing/09-sangeet/z10_dance-dip-purple-stage.jpg","Sangeet","She danced. I tried to keep up."],
 ["08-zing/10-pheras/z09_wedding-stage-pink-sherwani.jpg","26 January 2023","Seven pheras, one Prachi, forever."],
 ["08-zing/11-reception/z08_black-suit-peach-lehenga-green-chair.jpg","Reception","Officially Mr. and Mrs."]]}]},
{t:"Our Trips",s:"Honeymoon, passports, staycations. Wherever she is, that’s the destination.",c:"a",g:[
 {h:"Our Honeymoon",s:"Chandigarh, Shimla, Manali, Amritsar. Cold air, warm hearts. Cozy weather made for love.",p:[
  ["09-trips/himachal/h1_chandigarh-lake-sunglasses.jpg","Chandigarh, by the lake","Sunglasses on. Honeymoon on."],
  ["09-trips/himachal/h2_chandigarh-rock-steps-couple.jpg","Rock steps","She posed. I got the best seat."],
  ["09-trips/himachal/h3_shimla-hotel-room.jpg","Shimla, cosy in the room","Cold outside. Warm in here."],
  ["09-trips/himachal/h4_manali-piggyback.jpg","Piggyback, Manali","Her feet got tired. My back volunteered."],
  ["09-trips/himachal/h5_manali-sitting-on-grass.jpg","On the grass","Nowhere to be, nobody to see."],
  ["09-trips/himachal/h6_manali-snowfall-blue-jacket-hug.jpg","Our first snowfall","Blue jacket, big hug, first snow."],
  ["09-trips/himachal/h7_amritsar-golden-temple.jpg","Amritsar","Ending with blessings."]]},
 {h:"Thailand",s:"Our first international trip: Krabi, Phuket & Bangkok. The beauty of Thailand mesmerized us. The blue ocean, the limestone mountains, the juicy fruits, the tiger cave trail, the Phi Phi islands.",p:[
  ["09-trips/thailand/t11_waiting-for-flight-to-thailand.jpg","Boarding soon…","Our first flight abroad together. Excited doesn’t cover it."],
  ["09-trips/thailand/t03_hotel-room-selfie.jpg","Room with a view of us","Hotel room selfies, because every trip starts with one."],
  ["09-trips/thailand/t02_phuket-beach-mango-shake.jpg","Mango shake, no rush","Beach activities in the day, mango shake in hand."],
  ["09-trips/thailand/t04_selfie-in-the-storm.jpg","Storm? What storm?","The weather had plans. We took a selfie anyway."],
  ["09-trips/thailand/t05_maya-bay.jpg","Maya Bay","The blue ocean and the limestone mountains, just like the postcards."],
  ["09-trips/thailand/t06_quenching-thirst-phi-phi-coconuts.jpg","Quenching thirst","Phi Phi sun, juicy coconuts. Thirst: handled."],
  ["09-trips/thailand/t07_posing-phi-phi-boat.jpg","Island-hopping, Prachi style","Posing on the Phi Phi boat like she owns the sea."],
  ["09-trips/thailand/t10_tiger-cave-trail-1000-steps.jpg","1,000 steps","1,000 steps up the Tiger Cave trail. Worth every single one.","w"],
  ["09-trips/thailand/t08_cuddling-the-tiger.jpg","Scared as hell","She’s smiling. She was NOT okay. Brave anyway."],
  ["09-trips/thailand/t09_phuket-old-town-fav.jpg","Our favourite","Phuket Old Town. My favourite photo of the trip."],
  ["09-trips/thailand/t01_bye-bye-thailand-plane-wing.jpg","Bye bye, Thailand","Until next time. You were beautiful."]]},
 {h:"Goa",s:"For Jinal’s birthday. We reached before them and turned the Airbnb into a surprise.",p:[
  ["09-trips/goa/g2_airbnb-mirror-selfie.jpg","The surprise worked","We beat Jini and Kushagra to Goa and decorated the whole Airbnb. This is the moment they walked in."],
  ["09-trips/goa/g1_cliff-hug-sea-view.jpg","Just us and the sea","Quiet cliffs and a very big ocean."],
  ["09-trips/goa/g3_beach-walk-yellow-dress.jpg","Beach walks","Beaches in the day, with no plan except the next one."],
  ["09-trips/goa/g5_cliff-forehead-kiss.jpg","Sea breeze, forehead kiss","Cloudy sky, loud waves, and my favourite place to rest my lips."],
  ["09-trips/goa/g4_night-beach-arch-walk.jpg","Evenings by the sea","When the sky turns this blue, we go and find dinner."],
  ["09-trips/goa/g6_cafe-night-orange-dress.jpg","Café nights","Cafés, beaches, and kayaking. She wore orange and lit up the room."]]},
 {h:"Staycations",s:"Few bags, no flights, all the love.",p:[
  ["09-trips/staycations/s8_amstel_colourful-houses-with-kaku.jpg","Where it began","Our first staycation, with Kaaku, Kaaki and Kaku. Pastel houses, little hands on her cheek."],
  ["09-trips/staycations/s1_hilltop-heaven_fairy-lights-blue-dress.jpg","Hilltop Heaven","Our first anniversary, under a sky of fairy lights. She glowed brighter than all of them."],
  ["09-trips/staycations/s2_hilltop-heaven_mirror-selfie.jpg","Year one, up close","One year down, a lifetime to go."],
  ["09-trips/staycations/s3_yogi-executive_black-dress-back.jpg","Yogi Executive","Second anniversary. Hair up, boots on. She was looking sizzling."],
  ["09-trips/staycations/s4_yogi-executive_lift-hug-mirror.jpg","Swept off her feet","Some hugs have to be lifted off the floor."],
  ["09-trips/staycations/s5_nirvana-holi-2025_pool.jpg","Nirvana, Holi 2025","With Jinal and Kushagra. Colours washed off. The people stayed."],
  ["09-trips/staycations/s6_air-ecostay_white-chocolate-AP.jpg","A last-minute savour","Air Ecostay, third anniversary. A sweet start for A and P."],
  ["09-trips/staycations/s7_air-ecostay_mango-grove.jpg","Among the mango trees","Three years in, and she still looks at me the same way."]]}]}
];
var DIV='<div class="div"><i></i><svg viewBox="0 0 46 20"><use href="#dv"/></svg><i></i></div>';
var main=document.getElementById("chapters"),n=0,CLS={};
function pol(d){
  var r=((n*3)%7-3)*1.4,t=((n*5)%9-4)*1.5;n++;
  var o=d[3]||"",w=o.indexOf("w")>-1?" w":"",f=o.indexOf("fade")>-1?" fade":"",tp=o.indexOf("top")>-1?" top":"";
  return '<div class="pol'+w+f+tp+'" style="--r:'+r+'deg;--t:'+t+'deg"><span class="tape"></span><div class="card"><div class="face"><div class="img"><img loading="lazy" alt="" src="'+P+d[0]+'" onerror="this.style.display=\'none\'"></div><div class="cap">'+d[1]+'</div><span class="tap">tap to turn</span></div><div class="face back">'+d[2]+'</div></div></div>';
}
CH.forEach(function(c){
  var s=document.createElement("section");s.className="s sec "+c.c;if(c.id)s.id=c.id;if(c.strike)s.dataset.strike=1;
  if(c.confetti)s.dataset.confetti=1;
  var h='<div class="in"><h2>'+c.t+'</h2>'+(c.s?'<p class="sub">'+c.s+'</p>':'')+(c.quote&&c.id==="zing"?'<p class="quote">'+c.quote+'</p>':'')+DIV;
  c.g.forEach(function(g){
    if(g.h)h+='<h3>'+g.h+'</h3><p class="sub">'+g.s+'</p><div style="height:34px"></div>';
    h+='<div class="row">'+g.p.map(pol).join("")+'</div>';
  });
  if(c.quote&&c.id!=="zing")h+='<p class="quote" style="margin-top:56px">'+c.quote+'</p>';
  s.innerHTML=h+'</div>';main.appendChild(s);
});
document.querySelectorAll(".pol").forEach(function(p){p.addEventListener("click",function(){p.classList.toggle("flip")})});
function leaves(){var c=["#f4b9c4","#cdb8e3","#fbd3b5","#ffffff","#e9a9b8"];for(var i=0;i<30;i++){var e=document.createElement("span");e.className="leaf";var z=10+Math.random()*12;e.style.cssText="left:"+Math.random()*100+"vw;width:"+z+"px;height:"+z*1.3+"px;background:"+c[i%5]+";border:1px solid #e9a9b8;animation-duration:"+(3+Math.random()*3)+"s;animation-delay:"+Math.random()*.8+"s";document.body.appendChild(e);setTimeout(function(x){x.remove()},7000,e)}}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.25});
document.querySelectorAll(".pol").forEach(function(p){io.observe(p)});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");if(e.target.id==="zing"||e.target.dataset.strike)leaves();so.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll("section.sec").forEach(function(s){so.observe(s)});

/* mosaic */
var M=window.MOSAIC,mo=document.getElementById("mosaic"),cv=document.getElementById("mc"),done=false;
function runMosaic(){
  var CS=18,W=M.cols*CS,H=M.rows*CS;cv.width=W;cv.height=H;var x=cv.getContext("2d");
  x.fillStyle="#f6ece4";x.fillRect(0,0,W,H);
  var th=[],loaded=0;
  function go(){
    var order=[];for(var i=0;i<M.cells.length;i++)order.push(i);
    order.sort(function(){return Math.random()-.5});
    var k=0,per=Math.ceil(order.length/150);
    (function step(){
      for(var j=0;j<per&&k<order.length;j++,k++){
        var i=order[k],c=M.cells[i],cx=(i%M.cols)*CS,cy=Math.floor(i/M.cols)*CS,im=th[c[0]];
        if(im&&im.complete&&im.naturalWidth)x.drawImage(im,cx,cy,CS,CS);else{x.fillStyle="rgb("+c[1]+","+c[2]+","+c[3]+")";x.fillRect(cx,cy,CS,CS)}
        x.fillStyle="rgba("+c[1]+","+c[2]+","+c[3]+",.42)";x.fillRect(cx,cy,CS,CS);
      }
      if(k<order.length)requestAnimationFrame(step);else finish();
    })();
  }
  function finish(){
    var f=document.getElementById("fav");f.src=M.fav;
    setTimeout(function(){mo.classList.add("full")},700);
    setTimeout(function(){document.getElementById("hb").classList.add("in");document.getElementById("dt").classList.add("in");leaves()},2200);
  }
  for(var i=0;i<M.n;i++){(function(i){var im=new Image();im.onload=im.onerror=function(){if(++loaded===M.n)go()};im.src=P+"thumbs/"+i+".jpg";th[i]=im})(i)}
}
var fo=new IntersectionObserver(function(es){if(es[0].isIntersecting&&!done){done=true;
  if(M)runMosaic();else{document.getElementById("hb").classList.add("in");document.getElementById("dt").classList.add("in")}}},{threshold:.35});
fo.observe(mo);
mo.addEventListener("click",function(){mo.classList.toggle("full")});
var L=window.LETTER||{to:"My dearest Prachi,",body:["Your letter goes here."],from:"Forever yours,<br>Avinash"};
document.getElementById("lt").innerHTML=L.to+"<br><br>"+L.body.join("<br><br>")+"<br><br>"+L.from;
document.getElementById("open").onclick=function(){document.getElementById("letter").classList.toggle("open");leaves()};
