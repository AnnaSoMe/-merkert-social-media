const fs = require('fs');

const designs = [
  {id:'s1',label:'Strukturiert 1',folder:'strukturiert',bg:'#F0EDE8',text:'#2C2420',border:'#C67B5A'},
  {id:'s2',label:'Strukturiert 2',folder:'strukturiert',bg:'#F0EDE8',text:'#2C2420',border:'#C67B5A'},
  {id:'s3',label:'Strukturiert 3',folder:'strukturiert',bg:'#F0EDE8',text:'#2C2420',border:'#C67B5A'},
  {id:'s4',label:'Strukturiert 4',folder:'strukturiert',bg:'#F0EDE8',text:'#2C2420',border:'#C67B5A'},
  {id:'s5',label:'Strukturiert 5',folder:'strukturiert',bg:'#F0EDE8',text:'#2C2420',border:'#C67B5A'},
  {id:'c1',label:'Clean 1',folder:'clean',bg:'#FFFFFF',text:'#2C2420',border:'#4A6741'},
  {id:'c2',label:'Clean 2',folder:'clean',bg:'#FFFFFF',text:'#2C2420',border:'#4A6741'},
  {id:'c3',label:'Clean 3',folder:'clean',bg:'#FFFFFF',text:'#2C2420',border:'#4A6741'},
  {id:'c4',label:'Clean 4',folder:'clean',bg:'#FFFFFF',text:'#2C2420',border:'#4A6741'},
  {id:'c5',label:'Clean 5',folder:'clean',bg:'#FFFFFF',text:'#2C2420',border:'#4A6741'},
  {id:'b1',label:'Bold 1',folder:'bold',bg:'#2C2420',text:'#FFFFFF',border:'#C8AA22'},
  {id:'b2',label:'Bold 2',folder:'bold',bg:'#2C2420',text:'#FFFFFF',border:'#C8AA22'},
  {id:'b3',label:'Bold 3',folder:'bold',bg:'#2C2420',text:'#FFFFFF',border:'#C8AA22'},
  {id:'b4',label:'Bold 4',folder:'bold',bg:'#2C2420',text:'#FFFFFF',border:'#C8AA22'},
  {id:'b5',label:'Bold 5',folder:'bold',bg:'#2C2420',text:'#FFFFFF',border:'#C8AA22'},
];

designs.forEach(d => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500">
    <rect width="400" height="500" fill="${d.bg}"/>
    <rect width="400" height="500" fill="none" stroke="${d.border}" stroke-width="8"/>
    <rect width="400" height="60" fill="${d.border}"/>
    <text x="200" y="38" font-family="sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">${d.folder.toUpperCase()}</text>
    <text x="200" y="300" font-family="sans-serif" font-size="120" font-weight="bold" fill="${d.border}" text-anchor="middle" opacity="0.3">${d.id.slice(1)}</text>
    <text x="200" y="460" font-family="sans-serif" font-size="20" fill="${d.text}" text-anchor="middle">${d.label}</text>
    <text x="200" y="490" font-family="sans-serif" font-size="12" fill="${d.text}" text-anchor="middle" opacity="0.4">Platzhalter</text>
  </svg>`;

  const path = `C:/Users/annam/Projekte/merkert-social-media/designs/${d.folder}/${d.id}.svg`;
  fs.writeFileSync(path, svg);
  console.log('Erstellt:', path);
});

console.log('Fertig – 15 SVG-Platzhalter erstellt');
