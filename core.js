(function(root){
'use strict';
const shuffle = (items, rng = Math.random) => { const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; };
const normalize = value => String(value??'').normalize('NFKC').trim().toLowerCase().replace(/[.!?,;:]+$/g,'').replace(/\s+/g,' ');
function draw(stories, storyId, drawn, rng=Math.random){
 const pool=storyId ? stories.find(s=>s.id===storyId).cards.filter(id=>!drawn.includes(id)) : stories.flatMap(s=>s.cards);
 if(!pool.length) return null;
 const card=pool[Math.floor(rng()*pool.length)];
 return {card,storyId:stories.find(s=>s.cards.includes(card)).id};
}
function grade(q,response){if(q.type==='order')return Array.isArray(response)&&response.length===q.answer.length&&response.every((item,i)=>item===q.answer[i]);return normalize(response)===normalize(q.answer);}
root.GameCore={shuffle,normalize,draw,grade};
})(globalThis);
