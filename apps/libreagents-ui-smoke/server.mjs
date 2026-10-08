import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const layout = JSON.parse(await readFile(new URL('./layout.json',import.meta.url),'utf8'));
if (layout.version !== 1 || layout.kind !== 'page' || !Array.isArray(layout.items)) throw new Error('Invalid smoke layout');
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const safeUrl = value => typeof value === 'string' && (value.startsWith('/') && !value.startsWith('//') || /^https:\/\//.test(value)) ? escape(value) : '#';
const content = layout.items.map(item => {
  if (item.type === 'text') return `<h1>${escape(item.props.text)}</h1>`;
  if (item.type === 'image') return `<img src="${safeUrl(item.props.src)}" alt="${escape(item.props.alt)}">`;
  if (item.type === 'button') return `<a class="button" href="${safeUrl(item.props.href)}">${escape(item.props.label)}</a>`;
  return `<p>Unsupported component: ${escape(item.type)}</p>`;
}).join('\n');
const html = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>LibreAgents AppCard Smoke</title><style>body{font:18px system-ui;margin:0;background:#f2f6fc;color:#142033}main{max-width:800px;margin:5rem auto;padding:2rem;background:white;border-radius:18px;box-shadow:0 10px 36px #123c7a17}img{max-width:100%;height:auto}.button{display:inline-block;padding:.7rem 1rem;background:#123c7a;color:white;border-radius:8px;text-decoration:none}</style><main>${content}</main></html>`;
const art = await readFile(new URL('./art.svg',import.meta.url));
const server = createServer((request,response) => {
  const path = new URL(request.url ?? '/', 'http://localhost').pathname;
  const headers = {'Content-Security-Policy':"default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'",'X-Content-Type-Options':'nosniff'};
  if (path === '/health') { response.writeHead(200,{...headers,'Content-Type':'text/plain'}); response.end('ok'); return; }
  if (path === '/art.svg') { response.writeHead(200,{...headers,'Content-Type':'image/svg+xml'}); response.end(art); return; }
  if (path === '/') { response.writeHead(200,{...headers,'Content-Type':'text/html; charset=utf-8'}); response.end(html); return; }
  response.writeHead(404,headers); response.end();
});
server.listen(8080,'0.0.0.0');
