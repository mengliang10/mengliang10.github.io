
(function(){
"use strict";
var ROOT=document.getElementById("app-root");if(!ROOT)return;
var PAGE=ROOT.getAttribute("data-page")||"home";
var KEY="marketing-lab-v1";
var defaults={
 vertical:"travel",market:"Singapore",budget:180000,target:18,profitPerDeal:9000,
 mix:[18,13,12,14,15,18,10],
 visitor:12000,visitorLead:3,leadQuality:50,qualifiedMeeting:42,meetingClose:22,dmSpend:35000,
 chSpend:[18000,9000,4000,4000],chLeads:[105,100,52,24],chDeals:[8,3,2,3],
 prCost:6500,prAttendees:70,prQualified:22,prMeetings:10,prWins:2,prProfit:9000,
 mediaRelevance:4,mediaAudience:4,mediaProof:3,mediaTiming:4,
 pitchAudience:"Business and lifestyle editors",
 pitchStory:"A measurable change in how affluent travellers choose culturally distinctive experiences",
 pitchProof:"Independent industry research, a qualified expert spokesperson and a verifiable customer insight",
 pitchRequest:"An interview with an experienced regional travel specialist"
};
var state;
try{state=Object.assign({},defaults,JSON.parse(localStorage.getItem(KEY)||"{}"));}catch(e){state=Object.assign({},defaults);}
["mix","chSpend","chLeads","chDeals"].forEach(function(k){if(!Array.isArray(state[k])||state[k].length!==defaults[k].length)state[k]=defaults[k].slice();});
function persist(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
function e(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function num(v){return Math.max(0,Number(v)||0);}
function pct(v){return (Number(v)||0).toFixed(1)+"%";}
function money(v){return "S$"+Math.round(Number(v)||0).toLocaleString("en-SG");}
function fmt(v){return Math.round(Number(v)||0).toLocaleString("en-SG");}
function clamp(v,min,max){return Math.max(min,Math.min(max,Number(v)||0));}
function input(label,key,min,step,max){return '<div class="field"><label for="f-'+e(key)+'">'+e(label)+'</label><input id="f-'+e(key)+'" type="number" min="'+(min===undefined?0:min)+'" '+(max===undefined?"":'max="'+max+'"')+' step="'+(step||1)+'" data-key="'+e(key)+'" value="'+e(state[key])+'"></div>';}
function stat(name,val,hint){return '<div class="stat"><div class="name">'+e(name)+'</div><div class="number">'+e(val)+'</div><div class="hint">'+e(hint||"")+'</div></div>';}
function section(title,sub){return '<div class="section-title"><h2>'+e(title)+'</h2><span>'+e(sub||"")+'</span></div>';}
var vertical=state.vertical==="workspace"?"workspace":"travel";
function labelSale(){return vertical==="travel"?"paid booking":"signed commencement";}
function labelMeeting(){return vertical==="travel"?"advisor consultation":"attended tour";}
function verticalText(){return vertical==="travel"?"Ultra-luxury travel / HNWI":"Premium flexible workspace / B2B";}
function marketNote(){if(vertical==="travel"){return {Singapore:"Long-term client trust, referrals, new wealthy residents and specialist cultural journeys", "Hong Kong":"Diverse UHNWI profiles, multilingual advisor relationships and differentiated proposition", "Mainland China":"Localized platforms, Mandarin storytelling, private networks and cross-border trust",Sydney:"International luxury clientele and specialist travel advisors"}[state.market]||"Segment by buyer need, not wealth alone.";}return {Singapore:"Occupancy by specific unit size, sales response, broker sourcing and location readiness","Hong Kong":"Enterprise and broker relationships, office-size availability and local service proof","Mainland China":"Local procurement behaviours, workspace supply and procurement constraints",Sydney:"Preleasing, broker engagements and operational opening gates"}[state.market]||"Measure signed starts, not inquiries.";}
function controls(){return '<div class="toolbar"><div class="field"><label for="vertical">Industry lens</label><select id="vertical" data-key="vertical"><option value="travel" '+(vertical==="travel"?"selected":"")+'>HNWI luxury travel</option><option value="workspace" '+(vertical==="workspace"?"selected":"")+'>Premium workspace</option></select></div>'+
'<div class="field"><label for="market">Market lens</label><select id="market" data-key="market">'+["Singapore","Hong Kong","Mainland China","Sydney"].map(function(s){return '<option '+(state.market===s?"selected":"")+'>'+s+'</option>';}).join("")+'</select></div>'+
'<div class="field"><label for="budget">Illustrative 6-month marketing budget (SGD)</label><input id="budget" type="number" min="0" step="1000" data-key="budget" value="'+e(state.budget)+'"></div>'+
'<button type="button" class="btn secondary" data-action="export">Export scenario JSON</button><button type="button" class="btn secondary" data-action="reset">Reset assumptions</button></div>'+
'<div class="warning"><strong>Scenario, not company data.</strong> All figures and assumptions are editable teaching examples. No customer data, proprietary company performance, or live advertising-platform connections. Calculations run locally in this browser.</div>';}
function home(){
ROOT.innerHTML=controls()+section("Three connected operating tools","Think across strategy, reputation and demand")+
'<div class="cards">'+
'<div class="summary-card"><span class="index">01 / STRATEGY</span><h2>360° Marketing</h2><p>Market segments, positioning, acquisition channels, partnership-led growth, budgets and the full commercial journey.</p><a href="360.html">Open integrated planner →</a></div>'+
'<div class="summary-card"><span class="index">02 / REPUTATION</span><h2>Public Relations</h2><p>Editorial stories, reputation controls, media relevance, events, trusted experts and proof-led stakeholder messaging.</p><a href="pr.html">Open PR workbench →</a></div>'+
'<div class="summary-card"><span class="index">03 / REVENUE</span><h2>Digital Marketing</h2><p>Funnel economics, acquisition and retention channels, campaign scenario analysis and financial stop rules.</p><a href="dm.html">Open performance lab →</a></div>'+
'</div>'+section("How marketing reaches revenue","One coherent system")+
'<div class="diagram">'+["Customer insight","Brand & trust","Discovery & PR","Sales conversion","Margin & retention"].map(function(s,i){return '<div class="step"><strong>0'+(i+1)+'</strong><small>'+e(s)+'</small></div>';}).join("")+'</div>'+
'<div class="split equal"><article class="panel"><h3>HNWI luxury travel</h3><p>Separate traveller, payer, researcher, introducer and advisor. The key assets are specialist expertise, access, confidentiality and reliable delivery.</p><ul class="list-lines"><li>Trust: prior travellers, private referrals, credible experts</li><li>Experience: genuinely distinctive design and delivery</li><li>Commercial outcome: contribution after supplier, advisor and acquisition costs</li></ul></article>'+
'<article class="panel"><h3>Premium flexible workspace</h3><p>Separate office decision-maker, user, broker and location operator. Market and promote stock that can actually be sold and serviced.</p><ul class="list-lines"><li>Demand: location, office size, start date and price suitability</li><li>Trust: hospitality, fit-out, first-day readiness</li><li>Commercial outcome: realized occupancy and contribution</li></ul></article></div>';
}
var buckets=[
 ["Brand & positioning","Awareness / qualified recall","Regional marketing lead"],
 ["PR & earned media","Relevance / verified share of quality voice","PR / agency"],
 ["Content & editorial","Qualified engagement / sales enablement","Creative / product specialists"],
 ["Performance media","Incremental qualified demand / CAC","Performance marketing"],
 ["Partnerships & referrals","Accepted introductions / profitable conversions","Partnerships / sales"],
 ["Events & experiences","Qualified meetings / subsequent sales","Field marketing / operations"],
 ["CRM & measurement","Retention / referral / attribution quality","Lifecycle / analytics"]
];
function strategy(){
var sum=state.mix.reduce(function(a,b){return a+num(b);},0),allocated=state.budget*sum/100;
var rows=buckets.map(function(b,i){return '<tr><td>'+e(b[0])+'</td><td><input aria-label="'+e(b[0])+' budget percent" type="number" data-array="mix" data-index="'+i+'" value="'+e(state.mix[i])+'" min="0" max="100" step="1"></td><td>'+money(state.budget*state.mix[i]/100)+'</td><td>'+e(b[1])+'</td><td>'+e(b[2])+'</td></tr>';}).join("");
var gross=num(state.target)*num(state.profitPerDeal),net=gross-state.budget;
var map=vertical==="travel"?[
 ["Discover","Cultural or specialist interests, wealth networks, trusted intermediaries","Share of qualified demand and brand recall"],
 ["Evaluate","Proof of expertise, itinerary detail, access, privacy and fit","Qualified adviser conversations"],
 ["Consult","Travel designer confirms requirements and feasibility","Consultation-to-proposal ratio"],
 ["Book & deliver","Supplier confirmation, deposits, trip quality, on-trip service","Contribution per departure"],
 ["Return & refer","Post-trip follow-up, introductions, family network","Repeat contribution and referrals"]
]:[
 ["Discover","Location search, employer relocation, broker recommendation","Qualified site enquiries"],
 ["Evaluate","Space suitability, access, pricing and brand proof","Tour booking and show rate"],
 ["Tour","Onsite staff demonstrate working experience and genuine stock","Proposal-per-attended-tour"],
 ["Sign & commence","Legal, concessions, desk configuration, service readiness","Signed seats and commencements"],
 ["Retain & refer","Member satisfaction, renewal and advocacy","Net revenue retention and contribution"]
];
ROOT.innerHTML=controls()+section("01 / Market-to-margin thesis","Make the trade-offs explicit")+
'<div class="split equal"><div class="panel"><h2>Positioning decision</h2><p class="eyebrow">'+e(verticalText())+" · "+e(state.market)+'</p><p>'+e(marketNote())+'</p><div class="warning">Position by a customer problem and defensible proof, not by a generic claim such as “premium service.”</div></div>'+
'<div class="panel"><h2>Illustrative outcome model</h2><div class="grid-inputs">'+input("New "+labelSale()+"s (six months)","target",0,1)+input("Average gross contribution per "+labelSale()+" (SGD)","profitPerDeal",0,100)+'</div><div class="kpi">'+stat("Total contribution",money(gross),"Before marketing")+stat("Marketing spend",money(state.budget),"6-month envelope")+stat("Contribution less marketing",money(net),"Not company EBITDA")+'</div></div></div>'+
section("02 / Budget allocation","Editable allocation; does not imply attribution")+
'<article class="panel"><div class="table-wrap"><table><thead><tr><th>Workstream</th><th>Mix %</th><th>Budget</th><th>Accountable outcome</th><th>Owner</th></tr></thead><tbody>'+rows+'</tbody></table></div><p class="fine">Total '+pct(sum)+' / '+money(allocated)+' '+(Math.abs(sum-100)>.01?'<span style="color:var(--red)"> — revise to 100%; allocations currently over/under budget.</span>':" — fully allocated.")+'</p></article>'+
section("03 / Customer journey","Map actions to operating handoffs")+
'<article class="panel"><div class="table-wrap"><table><thead><tr><th>Stage</th><th>Decisive marketing / sales task</th><th>Evidence of success</th></tr></thead><tbody>'+map.map(function(r){return '<tr><td><strong>'+e(r[0])+'</strong></td><td>'+e(r[1])+'</td><td>'+e(r[2])+'</td></tr>';}).join("")+'</tbody></table></div></article>'+
section("04 / Executive decision rehearsal","Decision, trade-off, owner, result")+
'<div class="split equal"><article class="panel"><h3>Choose what NOT to fund</h3><ul class="list-lines"><li>Broad events without suitable buyers or follow-up</li><li>Unmeasurable “awareness” campaigns sold as booked revenue</li><li>Volume-based acquisition when sales/fulfillment capacity is constrained</li></ul></article>'+
'<article class="panel"><h3>Quality of answer</h3><p>Give a 60–90 second recommendation: <strong>who, why, how, expected commercial outcome, operating owner and stop condition.</strong></p><button class="btn secondary" data-action="export-summary">Copy decision brief</button></article></div>';
}
function pr(){
var points=(num(state.mediaRelevance)*.35+num(state.mediaAudience)*.25+num(state.mediaProof)*.25+num(state.mediaTiming)*.15)/5*100;
var profit=num(state.prWins)*num(state.prProfit),net=profit-num(state.prCost);
var textPitch='Subject: '+state.pitchStory+'\n\n'+state.pitchAudience+'\n\nWe are proposing a story on '+state.pitchStory.toLowerCase()+'. The supporting evidence would be '+state.pitchProof.toLowerCase()+'.\n\nWe can offer: '+state.pitchRequest+'.\n\nThis is a proposed pitch framework. Confirm any factual claims, permission, timing and spokesperson availability before sending.';
ROOT.innerHTML=controls()+section("01 / Reputation operating model","Editorial merit before coverage volume")+
'<div class="split equal"><article class="panel"><h2>What earns genuine attention</h2><ul class="list-lines"><li><strong>Evidence:</strong> verified data, independent expert, firsthand insight</li><li><strong>Relevance:</strong> why this matters to an audience today</li><li><strong>Access:</strong> credible spokesperson, location or story subject</li><li><strong>Control:</strong> substantiation, consent, corrections, crisis escalation</li></ul><p class="fine">A PR agency can pitch a story. It cannot guarantee earned coverage or favorable editorial treatment.</p></article><article class="panel"><h2>Sector-specific editorial territories</h2><p><strong>Luxury travel:</strong> specialist cultural knowledge, responsible access, intergenerational travel, distinct resident vs traveller motivations.</p><p><strong>Workspace:</strong> hybrid work, landlord ecosystems, hospitality service, location launch, workplace experience and genuine occupier needs.</p></article></div>'+
section("02 / Editorial pitch workbench","Editable, copyable template")+
'<div class="split"><article class="panel"><div class="field"><label>Intended media audience</label><textarea data-key="pitchAudience">'+e(state.pitchAudience)+'</textarea></div><div class="field"><label>Newsworthy story angle</label><textarea data-key="pitchStory">'+e(state.pitchStory)+'</textarea></div><div class="field"><label>Proof available (do not invent)</label><textarea data-key="pitchProof">'+e(state.pitchProof)+'</textarea></div><div class="field"><label>Offer to journalist</label><textarea data-key="pitchRequest">'+e(state.pitchRequest)+'</textarea></div></article>'+
'<article class="panel"><h3>Pitch draft</h3><pre class="notes" id="pitchText">'+e(textPitch)+'</pre><button class="btn" data-action="copy-pitch">Copy draft</button></article></div>'+
section("03 / Media opportunity filter","Weighted decision score, not measured media reach")+
'<div class="split equal"><article class="panel"><div class="grid-inputs">'+
input("Audience relevance (0–5)","mediaRelevance",0,1,5)+input("Audience quality (0–5)","mediaAudience",0,1,5)+input("Verifiable evidence (0–5)","mediaProof",0,1,5)+input("Timing (0–5)","mediaTiming",0,1,5)+
'</div></article><article class="panel"><div class="result-label">Editorial priority score</div><div class="result-value">'+pct(points)+'</div><p>Weighted: relevance 35%, audience quality 25%, proof 25%, timing 15%.</p><div class="warning">'+(points>=75?"Prioritise after checking consent, factual claims and editorial suitability.":points>=55?"Improve proof or audience relevance before allocating agency time.":"Deprioritise. A press release is not an obligation.")+'</div></article></div>'+
section("04 / Event / experience economics","Attributed wins are not necessarily incremental")+
'<div class="panel"><div class="grid-inputs">'+input("Total event cost (SGD)","prCost",0,100)+input("Attendees","prAttendees",0,1)+input("Qualified attendees","prQualified",0,1)+input("Follow-up meetings or tours","prMeetings",0,1)+input("Event-influenced wins","prWins",0,1)+input("Gross contribution per win (SGD)","prProfit",0,100)+'</div>'+
'<div class="stats">'+stat("Qualification rate",pct(state.prAttendees?100*state.prQualified/state.prAttendees:0),"Qualified / attendees")+stat("Meeting conversion",pct(state.prQualified?100*state.prMeetings/state.prQualified:0),"Meetings / qualified")+stat("Attributed gross contribution",money(profit),"Before event cost")+stat("Contribution less event cost",money(net),"Not incremental ROI")+'</div><p class="fine">Count only consented, traced contacts. To claim incremental ROI, compare against a credible non-event baseline and include sales and fulfillment costs.</p></div>'+
section("05 / Reputation safeguard","Crisis and risk response")+
'<div class="cards"><div class="panel"><h3>Incorrect public claim</h3><p>Freeze reuse; verify source; correct promptly; document what changed.</p></div><div class="panel"><h3>Event or experience failure</h3><p>Protect affected customers first, investigate operations, agree one factual response, then resume amplification.</p></div><div class="panel"><h3>Unapproved launch date</h3><p>Withdraw date-specific publicity; provide transparent readiness criteria, not false reassurance.</p></div></div>';
}
function dm(){
var visits=num(state.visitor),leads=visits*clamp(state.visitorLead,0,100)/100,ql=leads*clamp(state.leadQuality,0,100)/100,meets=ql*clamp(state.qualifiedMeeting,0,100)/100,wins=meets*clamp(state.meetingClose,0,100)/100;
var gp=wins*num(state.profitPerDeal),net=gp-num(state.dmSpend),cac=wins?state.dmSpend/wins:null;
var channelNames=["Paid search","Paid social","SEO / content","CRM / lifecycle"];
var sums={spend:0,leads:0,deals:0};
var rows=channelNames.map(function(name,i){var spend=num(state.chSpend[i]),l=num(state.chLeads[i]),w=num(state.chDeals[i]);sums.spend+=spend;sums.leads+=l;sums.deals+=w;return '<tr><td>'+e(name)+'</td><td><input type="number" min="0" step="100" aria-label="'+e(name)+' spend" data-array="chSpend" data-index="'+i+'" value="'+spend+'"></td><td><input type="number" min="0" aria-label="'+e(name)+' leads" data-array="chLeads" data-index="'+i+'" value="'+l+'"></td><td><input type="number" min="0" aria-label="'+e(name)+' wins" data-array="chDeals" data-index="'+i+'" value="'+w+'"></td><td>'+ (w?money(spend/w):"—")+'</td></tr>';}).join("");
ROOT.innerHTML=controls()+section("01 / Acquisition economics","Start with unit contribution, not CTR")+
'<div class="panel"><div class="grid-inputs">'+input("Website visits / inquiries entry","visitor",0,100)+input("Visitor to lead (%)","visitorLead",0,.5,100)+input("Lead qualified (%)","leadQuality",0,1,100)+input("Qualified to "+labelMeeting()+" (%)","qualifiedMeeting",0,1,100)+input(labelMeeting()+" to "+labelSale()+" (%)","meetingClose",0,1,100)+input("Campaign spend (SGD)","dmSpend",0,100)+input("Contribution per "+labelSale()+" (SGD)","profitPerDeal",0,100)+'</div>'+
'<div class="diagram">'+[["Visitors",fmt(visits)],["Leads",fmt(leads)],["Qualified",fmt(ql)],[labelMeeting()+"s",fmt(meets)],[labelSale()+"s",fmt(wins)]].map(function(p){return '<div class="step"><strong>'+e(p[1])+'</strong><small>'+e(p[0])+'</small></div>';}).join("")+'</div>'+
'<div class="stats">'+stat("Modeled CAC",cac===null?"—":money(cac),"Spend / modeled wins")+stat("Gross contribution",money(gp),"Wins × contribution")+stat("Contribution less media",money(net),"Excludes fixed overhead")+stat("Marketing / contribution",gp?pct(100*state.dmSpend/gp):"—","Inverse of contribution return")+'</div><div class="warning">This is a deterministic <strong>scenario model</strong>, not a forecast. The figures assume independent rates, a single cohort and no sales-cycle delay, multi-touch duplication, refunds or capacity limits.</div></div>'+
section("02 / Channel accountability","Editable source-level scorecard")+
'<article class="panel"><div class="table-wrap"><table><thead><tr><th>Channel</th><th>Spend (S$)</th><th>Leads</th><th>Attributed wins</th><th>Cost / win</th></tr></thead><tbody>'+rows+'</tbody><tfoot><tr><th>Total</th><th>'+money(sums.spend)+'</th><th>'+fmt(sums.leads)+'</th><th>'+fmt(sums.deals)+'</th><th>'+(sums.deals?money(sums.spend/sums.deals):"—")+'</th></tr></tfoot></table></div><p class="fine">Channel attribution is not causal proof. Reconcile duplicate/assisted contacts, maturity of booking cohorts and referral commissions before reallocating budget.</p></article>'+
section("03 / Commercial diagnosis","Choose the bottleneck before buying reach")+
'<div class="cards"><article class="panel"><h3>Low-quality demand</h3><p>Tighten geography, audience and product qualification. Check suitability before changing bids.</p><span class="pill">Sales-accepted lead rate</span></article>'+
'<article class="panel"><h3>Lost consultations / tours</h3><p>Review response speed, lead assignment, booking friction, availability and follow-up.</p><span class="pill">Attendance + proposal rate</span></article>'+
'<article class="panel"><h3>Weak closing</h3><p>Investigate price, product fit, trust, objections and actual supplier/site capacity.</p><span class="pill">Contribution per completed sale</span></article></div>'+
section("04 / A controlled test","Small, explicit and falsifiable")+
'<article class="panel"><p><strong>Hypothesis:</strong> shortening sales response time from next-day to same-day increases qualified '+e(labelMeeting())+' attendance.</p><p><strong>Design:</strong> comparable leads randomly allocated when operationally feasible; measure 14- to 30-day progression and actual signed/paid contribution. Avoid altering both offer and response speed at once.</p><p><strong>Stop rule:</strong> discontinue if response quality deteriorates, servicing cost exceeds incremental contribution, or there is insufficient cohort evidence to justify rollout.</p></article>';
}
function summaryText(){
var x="Marketing Lab decision brief\nLens: "+verticalText()+" / "+state.market+"\nSix-month budget: "+money(state.budget)+"\nPositioning: "+marketNote()+"\n";
if(PAGE==="360")x+="Target "+labelSale()+"s: "+fmt(state.target)+"\nContribution per "+labelSale()+": "+money(state.profitPerDeal)+"\nBudget mix: "+buckets.map(function(r,i){return r[0]+" "+state.mix[i]+"%";}).join("; ")+".\nRisk: Validate operating capacity, source-level margin and incremental sales before scale.";
else if(PAGE==="pr")x+="PR story angle: "+state.pitchStory+"\nEvidence: "+state.pitchProof+"\nRisk: Verify facts, permission, spokesperson and incrementality before publication.";
else x+="Funnel: "+state.visitor+" visitors, "+state.visitorLead+"% lead capture, "+state.leadQuality+"% qualified, "+state.qualifiedMeeting+"% consultations/tours, "+state.meetingClose+"% closes.\nRisk: Hypothetical conversion rates; real cohorts required.";
return x;
}
function render(){vertical=state.vertical==="workspace"?"workspace":"travel";if(PAGE==="360")strategy();else if(PAGE==="pr")pr();else if(PAGE==="dm")dm();else home();}
function downloadJson(){var data={title:"Marketing Lab user-entered scenario",exportedAt:new Date().toISOString(),warning:"Scenario only; no verified company data",assumptions:state};var b=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="marketing-lab-scenario.json";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},1000);}
function copyText(t){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){announce("Copied to clipboard");},function(){fallbackCopy(t);});}else fallbackCopy(t);}
function fallbackCopy(t){var v=document.createElement("textarea");v.value=t;document.body.appendChild(v);v.select();try{document.execCommand("copy");announce("Copied to clipboard");}catch(e){announce("Select and copy text manually");}v.remove();}
function announce(s){var n=document.getElementById("status");if(n)n.textContent=s;}
document.addEventListener("change",function(evt){var t=evt.target;if(!ROOT.contains(t))return;
 if(t.hasAttribute("data-key")){var k=t.getAttribute("data-key");if(!Object.prototype.hasOwnProperty.call(defaults,k))return;var v=t.value;state[k]=typeof defaults[k]==="number"?num(v):v;}
 else if(t.hasAttribute("data-array")){var a=t.getAttribute("data-array"),i=Number(t.getAttribute("data-index"));if(!Array.isArray(state[a])||i<0||i>=state[a].length)return;state[a][i]=num(t.value);}
 else return;persist();render();});
document.addEventListener("click",function(evt){var t=evt.target.closest("[data-action]");if(!t)return;var action=t.getAttribute("data-action");
 if(action==="reset"){state=Object.assign({},defaults,{vertical:state.vertical,market:state.market,mix:defaults.mix.slice(),chSpend:defaults.chSpend.slice(),chLeads:defaults.chLeads.slice(),chDeals:defaults.chDeals.slice()});persist();render();announce("Scenario assumptions reset.");}
 if(action==="export")downloadJson();
 if(action==="copy-pitch"){var p=document.getElementById("pitchText");if(p)copyText(p.textContent);}
 if(action==="export-summary")copyText(summaryText());
});
render();
})();
