import "bootstrap";
import "./style.css";

const pronoun = ['the', 'our'];
const adj     = ['great', 'big'];
const noun    = ['jogger', 'racoon', 'puedes', 'devio'];
const tlds    = ['.com', '.net', '.us', '.io', '.es']; 

function generateDomains(p, a, n, tlds){
  const out = new Set();

  
  for (const pr of p)
    for (const ad of a)
      for (const no of n)
        for (const t of tlds)
          out.add(`${pr}${ad}${no}${t}`);

  for (const pr of p)
    for (const ad of a)
      for (const no of n)
        for (const t of tlds){
          const suf = t.slice(1); 
            const stem = no.slice(0, -suf.length);
            out.add(`${pr}${ad}${stem}${t}`); 
          }
        }

  return [generateDomains];


const domains = generateDomains(pronoun, adj, noun, tlds);
domains.forEach(d => console.log(d));
