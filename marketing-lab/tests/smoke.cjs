
"use strict";
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const base=path.resolve(__dirname,"..");
const source=fs.readFileSync(path.join(base,"assets/core.js"),"utf8");
function run(page,stored){
 const root={attrs:{"data-page":page},html:"",getAttribute(k){return this.attrs[k]},contains(){return true;},set innerHTML(s){this.html=s;},get innerHTML(){return this.html;}};
 const handlers={};
 const storage={data:stored||{},getItem(k){return this.data[k]||null;},setItem(k,v){this.data[k]=String(v);}};
 const document={
  getElementById(id){if(id==="app-root")return root;if(id==="status")return {textContent:""};return null;},
  addEventListener(k,fn){handlers[k]=fn;}
 };
 const context={document,localStorage:storage,navigator:{},Number,String,Array,Object,Math,JSON,Date,setTimeout,console};
 vm.runInNewContext(source,context,{filename:"core.js",timeout:1000});
 return {root,handlers,storage};
}
const checks=[
 ["index.html","home","Three connected operating tools"],
 ["360.html","360","Budget allocation"],
 ["pr.html","pr","Editorial pitch workbench"],
 ["dm.html","dm","Acquisition economics"]
];
for(const [file,page,marker] of checks){
 const html=fs.readFileSync(path.join(base,file),"utf8");
 assert.match(html,/<main\b/);
 assert.ok(html.includes('data-page="'+page+'"'));
 assert.ok(html.includes('assets/core.js'));
 assert.ok(html.includes('assets/style.css'));
 const x=run(page);
 assert.ok(x.root.html.includes(marker),page+" did not render");
 console.log("PASS "+page+" render");
}
const example=run("360");
assert.ok(example.root.html.includes("S$180,000"));
const t={value:"workspace",hasAttribute(k){return k==="data-key";},getAttribute(k){return k==="data-key"?"vertical":null;}};
example.handlers.change({target:t});
assert.ok(example.root.html.includes("signed commencement"));
const persisted=JSON.parse(example.storage.getItem("marketing-lab-v1"));
assert.equal(persisted.vertical,"workspace");
console.log("PASS shared scenario persistence");

const dm=run("dm",{"marketing-lab-v1":JSON.stringify({visitor:0,visitorLead:0,leadQuality:0,qualifiedMeeting:0,meetingClose:0,dmSpend:0,chSpend:[0,0,0,0],chLeads:[0,0,0,0],chDeals:[0,0,0,0]})});
assert.ok(!dm.root.html.includes("NaN"),"division-by-zero produced NaN");
assert.ok(!dm.root.html.includes("Infinity"),"division-by-zero produced Infinity");
console.log("PASS zero denominator handling");

const pr=run("pr",{"marketing-lab-v1":JSON.stringify({pitchStory:"<unsafe> & news"})});
assert.ok(pr.root.html.includes("&lt;unsafe&gt; &amp; news"),"user input not escaped");
assert.ok(!pr.root.html.includes("Subject: <unsafe>"),"unsafe HTML in pitch");
console.log("PASS output escaping");

console.log("All Marketing Lab tests passed");
