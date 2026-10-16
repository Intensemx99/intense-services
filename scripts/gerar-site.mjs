// Gera as páginas estáticas do site. Uso: node scripts/gerar-site.mjs
// Edite os textos em SERVICOS e rode de novo. Troque SITE se o domínio mudar.
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://intense-services.vercel.app'; // TROCAR pelo domínio definitivo
const NOME = 'Intense Serviços Express';
const FONE = '(37) 99824-4086';
const WA = '5537998244086';
const IG = 'https://www.instagram.com/intense.service/';

const SERVICOS = [
  {
    slug: 'eletricista-arcos-mg', icone: 'bolt', curto: 'Elétrica em geral',
    nome: 'Eletricista em Arcos - MG',
    h1: 'Eletricista em Arcos', h1em: 'sem enrolação.',
    desc: 'Eletricista em Arcos - MG para pequenos reparos e instalações da sua casa: tomadas, interruptores, lâmpadas, chuveiro. Peça orçamento no WhatsApp.',
    lead: 'Tomada que esquenta, disjuntor que desarma, luz que pisca. Descreva o problema no WhatsApp e receba o orçamento do serviço elétrico da sua casa em Arcos.',
    resumo: 'Reparos e instalações elétricas da casa: do ponto que parou de funcionar ao serviço que você vem adiando.',
    sinais: ['Tomada ou interruptor esquentando, soltando faísca ou sem funcionar', 'Disjuntor desarmando toda hora', 'Luz piscando ou lâmpada que queima rápido demais', 'Ponto de luz ou tomada novos para instalar', 'Chuveiro que não esquenta ou desarma o disjuntor'],
    passos: [['Você descreve', 'Conte o que acontece e mande uma foto do ponto, do quadro de disjuntores ou do equipamento.'], ['Você recebe o orçamento', 'O valor chega com o serviço explicado, antes de qualquer visita.'], ['A gente resolve', 'Combinado o dia, o serviço é feito na sua casa em Arcos.']],
    foto: ['O que está acontecendo (barulho, cheiro, faísca)', 'A tomada, o interruptor ou o quadro de disjuntores', 'Quando começou o problema'],
    faq: [['Atende emergência elétrica?', 'Mande a mensagem descrevendo a situação. Se houver risco, como cheiro de queimado ou faísca, desligue o disjuntor geral e só então chame.'], ['Faz instalação nova ou só conserto?', 'Os dois: troca de tomada, interruptor, lâmpada e chuveiro, e instalação de pontos novos simples.'], ['O que posso fazer enquanto espero?', 'Se o problema é em uma tomada ou chuveiro específico, desligue o disjuntor daquele circuito e não use o ponto até a visita.']],
    rel: ['tomadas-e-interruptores-arcos-mg', 'troca-de-chuveiro-arcos-mg', 'troca-de-lampadas-e-plafons-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso de um eletricista em Arcos. Posso explicar o problema?'
  },
  {
    slug: 'troca-de-chuveiro-arcos-mg', icone: 'shower', curto: 'Chuveiro e resistência',
    nome: 'Troca de chuveiro e resistência em Arcos - MG',
    h1: 'Troca de chuveiro em Arcos', h1em: 'banho quente de volta.',
    desc: 'Troca de chuveiro e de resistência em Arcos - MG. Chuveiro sem esquentar ou desarmando o disjuntor? Peça orçamento no WhatsApp.',
    lead: 'Banho frio não dá para esperar. Troca do chuveiro ou só da resistência, com a parte elétrica conferida. Chame no WhatsApp e receba o orçamento.',
    resumo: 'Banho frio é urgente. Troca do chuveiro completo ou só da resistência.',
    sinais: ['Água morna ou fria mesmo na posição quente', 'Chuveiro que desarma o disjuntor ao ligar', 'Resistência queimada (estalo e depois nada)', 'Fios derretidos ou escurecidos perto do chuveiro', 'Chuveiro novo comprado e ainda por instalar'],
    passos: [['Você descreve', 'Diga o modelo ou mande foto do chuveiro e, se puder, da ligação na parede.'], ['Você recebe o orçamento', 'Fica claro se vale trocar só a resistência ou o chuveiro todo.'], ['A gente resolve', 'Troca feita e testada no dia combinado.']],
    foto: ['O chuveiro inteiro e a etiqueta com a potência', 'Os fios na parede, se estiverem visíveis', 'Se o disjuntor desarma ao ligar'],
    faq: [['Troco só a resistência ou o chuveiro inteiro?', 'Depende do estado. Com uma foto do chuveiro e da ligação, dá para dizer qual compensa antes da visita.'], ['Preciso comprar a peça antes?', 'Pergunte no WhatsApp. Se você já tem o chuveiro ou a resistência, é só avisar; se não tem, combinamos o que comprar.'], ['O disjuntor desarma sempre que ligo. É a resistência?', 'Pode ser a resistência, a fiação ou o próprio disjuntor. Não insista em ligar: mande a descrição e uma foto.']],
    rel: ['eletricista-arcos-mg', 'tomadas-e-interruptores-arcos-mg', 'encanador-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso trocar o chuveiro ou a resistência em Arcos.'
  },
  {
    slug: 'tomadas-e-interruptores-arcos-mg', icone: 'plug', curto: 'Tomadas e interruptores',
    nome: 'Instalação e troca de tomadas e interruptores em Arcos - MG',
    h1: 'Tomadas e interruptores em Arcos', h1em: 'trocados com segurança.',
    desc: 'Instalação e troca de tomadas e interruptores em Arcos - MG. Tomada que esquenta, afrouxa ou parou de funcionar? Peça orçamento no WhatsApp.',
    lead: 'Tomada solta, que esquenta ou que parou de funcionar. Troca e instalação de tomadas e interruptores na sua casa. Mande uma foto no WhatsApp.',
    resumo: 'Instalação e troca. Tomada que esquenta, afrouxa ou parou de funcionar.',
    sinais: ['Tomada frouxa, que não segura o plugue', 'Tomada quente ou com a placa amarelada', 'Interruptor que falha, estala ou não acende nada', 'Ponto novo de tomada para instalar', 'Reforma que pede troca de espelhos e módulos'],
    passos: [['Você descreve', 'Mande foto da tomada ou do interruptor e diga quantos são.'], ['Você recebe o orçamento', 'O valor considera a quantidade de pontos e o que precisa ser trocado.'], ['A gente resolve', 'Troca feita no dia combinado, com o ponto testado.']],
    foto: ['A tomada ou interruptor de perto', 'Quantos pontos precisam de troca', 'Se a placa está quente ou escurecida'],
    faq: [['Posso trocar várias tomadas de uma vez?', 'Pode, e costuma compensar. Diga a quantidade no WhatsApp para o orçamento sair completo.'], ['Tomada quente é perigoso?', 'Pode indicar mau contato ou excesso de carga. Pare de usar o ponto e peça uma avaliação.'], ['Instala tomada onde não existe ponto?', 'Instalações simples sim. Mande uma foto do local e conte o que precisa que a gente avalia.']],
    rel: ['eletricista-arcos-mg', 'troca-de-lampadas-e-plafons-arcos-mg', 'troca-de-chuveiro-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso trocar ou instalar tomadas e interruptores em Arcos.'
  },
  {
    slug: 'troca-de-lampadas-e-plafons-arcos-mg', icone: 'bulb', curto: 'Lâmpadas e plafons',
    nome: 'Troca de lâmpadas e plafons em Arcos - MG',
    h1: 'Troca de lâmpadas e plafons em Arcos', h1em: 'até no teto alto.',
    desc: 'Troca de lâmpadas e plafons em Arcos - MG, inclusive em teto alto e área externa. Peça orçamento no WhatsApp.',
    lead: 'Aquele ponto de luz que ninguém alcança: teto alto, escada, área externa. Troca de lâmpadas e plafons em Arcos, sem você se arriscar.',
    resumo: 'Troca em teto alto, em área externa ou naquele ponto que ninguém alcança.',
    sinais: ['Lâmpada queimada em teto alto ou pé-direito duplo', 'Plafom quebrado ou amarelado para trocar', 'Luz da varanda, garagem ou quintal sem funcionar', 'Vários pontos para trocar de uma vez', 'Troca de lâmpadas comuns por LED'],
    passos: [['Você descreve', 'Diga quantos pontos são e mande foto do local e do tipo de lâmpada ou plafom.'], ['Você recebe o orçamento', 'O valor considera a altura e a quantidade de pontos.'], ['A gente resolve', 'Troca feita e cada ponto testado.']],
    foto: ['O ponto de luz e a altura aproximada', 'O tipo de lâmpada ou plafom atual', 'Quantos pontos precisam de troca'],
    faq: [['Troca lâmpada em teto muito alto?', 'Sim, é um dos serviços mais pedidos. Mande uma foto do local e a altura aproximada.'], ['Preciso comprar o plafom e a lâmpada?', 'Pode comprar antes ou combinar o que levar. Pergunte no WhatsApp e alinhamos.'], ['Vale a pena trocar por LED?', 'Em geral, sim: consome menos e dura mais. Conte quantos pontos são e a gente indica.']],
    rel: ['tomadas-e-interruptores-arcos-mg', 'eletricista-arcos-mg', 'troca-de-chuveiro-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso trocar lâmpadas ou plafons em Arcos.'
  },
  {
    slug: 'encanador-arcos-mg', icone: 'tap', curto: 'Torneiras e registros',
    nome: 'Encanador em Arcos - MG: torneiras e registros',
    h1: 'Encanador em Arcos', h1em: 'chega de vazamento.',
    desc: 'Troca de torneiras e registros e conserto de vazamentos em Arcos - MG. Torneira pingando? Peça orçamento no WhatsApp.',
    lead: 'Torneira pingando, registro travado, vazamento que não para. Troca e reparo de torneiras e registros em Arcos. Descreva no WhatsApp.',
    resumo: 'Vazamento, gotejamento e registro travado. Troca e reparo.',
    sinais: ['Torneira pingando mesmo fechada', 'Registro duro, travado ou que não fecha por completo', 'Vazamento visível na pia, no tanque ou na parede', 'Torneira velha para trocar por uma nova', 'Água pingando sob a pia'],
    passos: [['Você descreve', 'Mande foto ou vídeo curto mostrando onde vaza ou qual torneira é.'], ['Você recebe o orçamento', 'O valor chega com o serviço explicado.'], ['A gente resolve', 'Troca ou reparo feito no dia combinado.']],
    foto: ['De onde a água está saindo', 'A torneira ou o registro de perto', 'Um vídeo curto, se o vazamento for difícil de ver'],
    faq: [['O registro está travado. Posso forçar?', 'Melhor não: forçar pode quebrar a peça e piorar o vazamento. Mande uma foto e a gente avalia.'], ['Troca torneira que eu mesmo comprei?', 'Troca. Avise a marca ou mande foto para conferir a compatibilidade.'], ['Fecha a água geral até a visita?', 'Se o vazamento é forte, feche o registro geral da casa e avise no WhatsApp.']],
    rel: ['troca-de-chuveiro-arcos-mg', 'solda-arcos-mg', 'eletricista-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso de um encanador em Arcos (torneira ou registro).'
  },
  {
    slug: 'solda-arcos-mg', icone: 'spark', curto: 'Solda',
    nome: 'Serviço de solda em Arcos - MG',
    h1: 'Serviço de solda em Arcos', h1em: 'reparo e fabricação.',
    desc: 'Serviço de solda em Arcos - MG: reparo e fabricação em metal. Portão, grade, estrutura? Mande uma foto no WhatsApp e peça orçamento.',
    lead: 'Reparo e fabricação em metal. Conte o que precisa, mande uma foto e receba o orçamento do serviço de solda em Arcos.',
    resumo: 'Reparo e fabricação em metal. Conte o que precisa e mande uma foto.',
    sinais: ['Portão, grade ou porta de ferro quebrado ou solto', 'Peça de metal rachada para reparar', 'Estrutura simples para fabricar sob medida', 'Suporte, apoio ou reforço em metal', 'Dúvida se a peça tem conserto'],
    passos: [['Você descreve', 'Mande foto da peça e as medidas, ou explique o que quer fabricar.'], ['Você recebe o orçamento', 'O valor depende do tamanho e do material, e chega explicado.'], ['A gente resolve', 'O serviço é feito no dia combinado.']],
    foto: ['A peça inteira e o ponto quebrado', 'As medidas aproximadas', 'Onde ela fica instalada'],
    faq: [['Faz solda no local ou preciso levar a peça?', 'Depende do serviço. Descreva e mande foto que a gente combina a melhor forma.'], ['Fabrica peça sob medida?', 'Sim, estruturas simples em metal. Conte o que você precisa e as medidas.'], ['Como sei se a peça tem conserto?', 'Uma foto resolve a maioria dos casos. Mande no WhatsApp.']],
    rel: ['encanador-arcos-mg', 'rocada-de-terrenos-arcos-mg', 'eletricista-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso de um serviço de solda em Arcos. Posso mandar uma foto?'
  },
  {
    slug: 'rocada-de-terrenos-arcos-mg', icone: 'grass', curto: 'Roçada de lotes',
    nome: 'Roçada de terrenos e lotes em Arcos - MG',
    h1: 'Roçada de terrenos em Arcos', h1em: 'lote limpo e em ordem.',
    desc: 'Roçada de terrenos e lotes em Arcos - MG. Mato alto tomando o terreno? Mande uma foto no WhatsApp e peça orçamento.',
    lead: 'Mato alto, lote abandonado, terreno que a prefeitura cobra limpar. Roçada de terrenos e lotes em Arcos. Mande uma foto e peça o orçamento.',
    resumo: 'Limpeza de mato alto para deixar o terreno em ordem.',
    sinais: ['Lote com mato alto tomando o terreno', 'Terreno para vender ou construir que precisa de limpeza', 'Quintal ou área grande que você não dá conta de roçar', 'Notificação para limpar o terreno', 'Manutenção periódica do lote'],
    passos: [['Você descreve', 'Informe o bairro e mande foto do terreno, mostrando a altura do mato.'], ['Você recebe o orçamento', 'O valor considera o tamanho do terreno e o estado do mato.'], ['A gente resolve', 'Roçada feita no dia combinado.']],
    foto: ['O terreno visto de fora, com o mato à mostra', 'O bairro ou a rua, e o tamanho aproximado', 'Se há entulho, árvores ou desnível'],
    faq: [['Como calculo o tamanho do meu lote?', 'Não precisa medir certinho. Mande uma foto e o tamanho aproximado, ou a medida da escritura se tiver.'], ['O mato é recolhido depois?', 'Combine no orçamento. Diga se quer o mato roçado e deixado ou também recolhido.'], ['Faz roçada recorrente?', 'Pergunte no WhatsApp. Dá para combinar a manutenção do lote.']],
    rel: ['solda-arcos-mg', 'encanador-arcos-mg', 'eletricista-arcos-mg'],
    msg: 'Olá! Vim pelo site e preciso de roçada de terreno em Arcos. Posso mandar uma foto?'
  }
];
const POR_SLUG = Object.fromEntries(SERVICOS.map(s => [s.slug, s]));

// ---------- blocos reutilizáveis ----------
const wa = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const MSG_GERAL = 'Olá! Vim pelo site e queria pedir um orçamento.';
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.5 14.93L2 22l5.2-1.5A9.94 9.94 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.89.9-3-.2-.31a8.1 8.1 0 1 1 6.8 3.73Zm4.45-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.96-1.21 7.4 7.4 0 0 1-1.36-1.69c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.1 3.64.57.25 1.02.4 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z"/></g></symbol>
<symbol id="i-plug" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M9 9v2M15 9v2M9.5 16h5"/></g></symbol>
<symbol id="i-bulb" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/></g></symbol>
<symbol id="i-shower" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V8a4 4 0 0 1 4-4h2M10 4a8 4 0 0 1 8 4H10M12 12v1M15 12v2M18 12v1M13.5 17v1M16.5 17v2"/></g></symbol>
<symbol id="i-tap" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h9a4 4 0 0 0 4-4V5M16 5h-4M7 10V7M5 7h4M14 10v3M14 17.5c-.8-1-1.5-1.7-1.5-2.5a1.5 1.5 0 0 1 3 0c0 .8-.7 1.5-1.5 2.5Z"/></g></symbol>
<symbol id="i-spark" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></g></symbol>
<symbol id="i-grass" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21c0-5 .5-9-2-13 3 1 4.5 4 5 8M12 21c0-6-1-11 1-16 2 4 2.5 8 2 16M18 21c0-4-.3-6 2-9-3 .5-4.5 3-5 6"/></g></symbol>
<symbol id="i-flame" viewBox="0 0 64 64"><path fill="#ff6a00" d="M34 4c2 10-4 14-9 20-4 5-7 10-7 17 0 11 8 19 18 19s18-8 18-19c0-8-4-13-8-18-1 4-3 6-5 7 2-9-1-17-7-26Z"/><path fill="#ffb800" d="M33 30c1 6-5 8-5 14a8 8 0 0 0 16 0c0-5-3-7-5-10-1 2-2 3-3 3 1-3 0-5-3-7Z"/></symbol>
</defs></svg>`;

const ico = (id, c = '') => `<svg class="ico ${c}" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${id}"/></svg>`;

// Ilustração própria (SVG) de cada serviço; vira o fundo da foto quando a foto não existe.
function cena(icone) {
  const extra = {
    bolt: '<path d="M60 250h70l30-40 40 60 40-90 40 50h70" fill="none" stroke="#ffb800" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>',
    shower: '<g stroke="#ffb800" stroke-width="3" stroke-linecap="round" opacity=".5"><path d="M120 190v20M160 200v26M200 190v24M240 202v28M280 192v22"/></g>',
    plug: '<g fill="none" stroke="#ffb800" stroke-width="3" opacity=".45"><rect x="70" y="80" width="60" height="60" rx="14"/><rect x="270" y="170" width="60" height="60" rx="14"/></g>',
    bulb: '<g stroke="#ffb800" stroke-width="3" stroke-linecap="round" opacity=".55"><path d="M200 40v22M120 70l14 14M280 70l-14 14M92 140h22M286 140h22"/></g>',
    tap: '<g fill="#ffb800" opacity=".5"><path d="M200 236c-8 10-12 16-12 22a12 12 0 0 0 24 0c0-6-4-12-12-22Z"/><path d="M130 258c-5 6-7 10-7 14a7 7 0 0 0 14 0c0-4-2-8-7-14Z"/></g>',
    spark: '<g stroke="#ffb800" stroke-width="3" stroke-linecap="round" opacity=".6"><path d="M90 220l24-10M100 245l30-6M300 210l-26-8M310 238l-32-4M200 250l0 -26"/></g>',
    grass: '<g fill="none" stroke="#ffb800" stroke-width="3" stroke-linecap="round" opacity=".5"><path d="M50 262c4-30 0-50 14-70M90 262c-2-24 8-40 22-58M300 262c2-30-4-46-18-66M340 262c-6-22 2-38 16-52"/></g>'
  }[icone] || '';
  return `<svg class="cena" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs><radialGradient id="g-${icone}" cx="50%" cy="46%" r="55%"><stop offset="0" stop-color="#ff6a00" stop-opacity=".95"/><stop offset=".6" stop-color="#c24d00" stop-opacity=".45"/><stop offset="1" stop-color="#14161a" stop-opacity="0"/></radialGradient></defs>
<rect width="400" height="300" fill="#1d2026"/>
<g stroke="#fff" stroke-opacity=".05">${Array.from({ length: 12 }, (_, i) => `<path d="M${-40 + i * 46} 300 L${40 + i * 46} 0"/>`).join('')}</g>
<circle cx="200" cy="140" r="130" fill="url(#g-${icone})"/>
<circle cx="200" cy="140" r="78" fill="#14161a" stroke="#ffb800" stroke-width="3"/>
<svg x="152" y="92" width="96" height="96" viewBox="0 0 24 24" style="color:#ffb800"><use href="#i-${icone}"/></svg>
${extra}</svg>`;
}

// Moldura de foto: tenta a foto real em imagens/servicos/<slug>.jpg; se não existir, mostra a ilustração.
function quadro(s, alt, eager = false) {
  return `<figure class="quadro">${cena(s.icone)}<img src="/imagens/servicos/${s.slug}.jpg" alt="${esc(alt)}" width="1200" height="900" ${eager ? '' : 'loading="lazy" '}decoding="async" onerror="this.remove()"></figure>`;
}

const topo = (raiz) => `<header class="top${raiz ? '' : ' top-solid'}">
  <a class="brand" href="/" aria-label="${NOME}, início">
    <svg class="brand-flame" viewBox="0 0 64 64" aria-hidden="true"><use href="#i-flame"/></svg>
    <span class="brand-word">Intense <small>Serviços Express</small></span>
  </a>
  <nav class="nav" aria-label="Principal">
    <a href="/#servicos">Serviços</a>
    <a href="/#como-funciona">Como funciona</a>
    <a href="/#duvidas">Dúvidas</a>
  </nav>
  <a class="btn btn-sm" data-wa="${esc(MSG_GERAL)}" href="${wa(MSG_GERAL)}">${ico('wa')} <span>Chamar no WhatsApp</span></a>
</header>`;

const rodape = `<footer class="foot">
  <div class="wrap foot-cols">
    <div>
      <strong class="foot-h">${NOME}</strong>
      <p>Serviços residenciais em Arcos - MG.<br>WhatsApp e ligação: <a href="tel:+${WA}">${FONE}</a><br><a href="${IG}" rel="noopener">@intense.service</a></p>
    </div>
    <div>
      <strong class="foot-h">Serviços em Arcos</strong>
      <ul class="foot-links">${SERVICOS.map(s => `<li><a href="/${s.slug}">${s.curto}</a></li>`).join('')}</ul>
    </div>
  </div>
  <div class="wrap foot-in"><span>© <span id="ano">2026</span> ${NOME} · Arcos - MG</span></div>
  <div class="wrap foot-promo">
    <div>
      <strong>É autônomo e ainda não tem presença na internet?</strong>
      <span>Crio seu site, sua marca, seu perfil no Google e organizo seu WhatsApp para você vender mais.</span>
    </div>
    <a class="foot-cta" href="https://autonomopro.site" target="_blank" rel="noopener">Conheça o AutonomoPro</a>
  </div>
</footer>
<a class="fab" data-wa="${esc(MSG_GERAL)}" href="${wa(MSG_GERAL)}" aria-label="Chamar no WhatsApp">${ico('wa')}</a>`;

const cabeca = ({ titulo, desc, caminho, jsonld }) => `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${caminho}">
<meta name="theme-color" content="#14161a">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${NOME}">
<meta property="og:url" content="${SITE}${caminho}">
<meta property="og:image" content="${SITE}/imagens/og.svg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/imagens/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,700;1,800;1,900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
</script>
</head>
<body>
${SPRITE}
`;

const NEGOCIO = {
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE}/#negocio`,
  name: NOME,
  url: SITE + '/',
  telephone: '+55-37-99824-4086',
  image: `${SITE}/imagens/og.svg`,
  areaServed: { '@type': 'City', name: 'Arcos', containedInPlace: { '@type': 'State', name: 'Minas Gerais' } },
  address: { '@type': 'PostalAddress', addressLocality: 'Arcos', addressRegion: 'MG', addressCountry: 'BR' },
  sameAs: [IG]
};

const faqHtml = (itens) => `<div class="faq-list">${itens.map(([p, r]) => `<details><summary>${esc(p)}</summary><p>${esc(r)}</p></details>`).join('')}</div>`;
const faqLd = (itens) => ({ '@type': 'FAQPage', mainEntity: itens.map(([p, r]) => ({ '@type': 'Question', name: p, acceptedAnswer: { '@type': 'Answer', text: r } })) });

// ---------- página de serviço ----------
function paginaServico(s) {
  const caminho = `/${s.slug}`;
  const titulo = `${s.nome} | ${NOME}`;
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      NEGOCIO,
      { '@type': 'Service', name: s.nome, serviceType: s.curto, provider: { '@id': `${SITE}/#negocio` }, areaServed: { '@type': 'City', name: 'Arcos' }, description: s.desc, url: SITE + caminho },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: s.curto, item: SITE + caminho } ] },
      faqLd(s.faq)
    ]
  };
  return cabeca({ titulo, desc: s.desc, caminho, jsonld }) + topo(false) + `
<main>
  <section class="shero">
    <div class="wrap shero-grid">
      <div class="shero-txt">
        <nav class="crumbs" aria-label="Você está em"><a href="/">Início</a> <span aria-hidden="true">/</span> <a href="/#servicos">Serviços</a> <span aria-hidden="true">/</span> <span aria-current="page">${s.curto}</span></nav>
        <p class="hero-where">${ico('pin')} Atendimento em Arcos - MG</p>
        <h1>${s.h1}, <em>${s.h1em}</em></h1>
        <p class="lead">${s.lead}</p>
        <div class="hero-cta">
          <a class="btn btn-lg" data-wa="${esc(s.msg)}" href="${wa(s.msg)}">${ico('wa')} Pedir orçamento no WhatsApp</a>
          <a class="phone" href="tel:+${WA}">${FONE}</a>
        </div>
      </div>
      ${quadro(s, `${s.curto} em Arcos - MG`, true)}
    </div>
  </section>

  <section class="bloco bloco-papel">
    <div class="wrap duas">
      <div>
        <h2>Quando chamar</h2>
        <p class="sec-sub">Se algum destes casos é o seu, vale mandar uma mensagem.</p>
      </div>
      <ul class="checks">${s.sinais.map(t => `<li>${ico('check')}<span>${t}</span></li>`).join('')}</ul>
    </div>
  </section>

  <section class="bloco bloco-grafite">
    <div class="wrap">
      <h2>Como funciona</h2>
      <ol class="step-list">${s.passos.map(([t, d], i) => `<li><span class="n" aria-hidden="true">${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
    </div>
  </section>

  <section class="bloco bloco-papel">
    <div class="wrap duas">
      <div>
        <h2>O que mandar no WhatsApp</h2>
        <p class="sec-sub">Quanto mais claro o pedido, mais certeiro o orçamento.</p>
      </div>
      <ul class="checks">${s.foto.map(t => `<li>${ico('check')}<span>${t}</span></li>`).join('')}</ul>
    </div>
  </section>

  <section class="faq" id="duvidas">
    <div class="wrap faq-grid">
      <h2>Dúvidas sobre ${s.curto.toLowerCase()}</h2>
      ${faqHtml(s.faq)}
    </div>
  </section>

  <section class="bloco bloco-grafite">
    <div class="wrap">
      <h2>Outros serviços em Arcos</h2>
      <ul class="rel">${s.rel.map(r => `<li><a href="/${r}">${ico(POR_SLUG[r].icone)}<span>${POR_SLUG[r].curto}</span>${ico('arrow', 'seta')}</a></li>`).join('')}</ul>
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>${s.curto}: peça seu orçamento</h2>
      <p>Descreva o que precisa e receba o valor antes de decidir.</p>
      <a class="btn btn-lg btn-dark" data-wa="${esc(s.msg)}" href="${wa(s.msg)}">${ico('wa')} Pedir orçamento no WhatsApp</a>
      <p class="final-phone">ou ligue: <a href="tel:+${WA}">${FONE}</a></p>
    </div>
  </section>
</main>
` + rodape + `\n<script src="/script.js"></script>\n</body>\n</html>\n`;
}

// ---------- home ----------
function paginaHome() {
  const faq = [
    ['Onde vocês atendem?', 'Em Arcos - MG. Se você está por perto e não tem certeza, pergunte no WhatsApp.'],
    ['Preciso mandar foto?', 'Não é obrigatório, mas acelera. Com uma foto da tomada, do chuveiro ou do lote, o orçamento sai mais certeiro.'],
    ['Faz serviço pequeno, como trocar uma lâmpada?', 'Faz. Troca de lâmpada e plafom, tomada e interruptor estão entre os serviços mais pedidos.'],
    ['O orçamento custa alguma coisa?', 'Pedir o orçamento pelo WhatsApp não tem custo. Você só segue em frente se o valor e o serviço fizerem sentido para você.'],
    ['Como falo com vocês?', `Pelo WhatsApp ou por ligação no ${FONE}. Também estamos no <a href="${IG}" rel="noopener">Instagram</a>.`]
  ];
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      { ...NEGOCIO, makesOffer: SERVICOS.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.nome, url: `${SITE}/${s.slug}` } })) },
      { '@type': 'WebSite', '@id': `${SITE}/#site`, url: SITE + '/', name: NOME, inLanguage: 'pt-BR' },
      faqLd(faq.map(([p, r]) => [p, r.replace(/<[^>]+>/g, '')]))
    ]
  };
  const titulo = `${NOME} | Elétrica, hidráulica, solda e roçada em Arcos - MG`;
  const desc = 'Troca de chuveiro, tomadas, torneiras, lâmpadas, solda e roçada de lotes em Arcos - MG. Chame no WhatsApp (37) 99824-4086 e peça seu orçamento.';
  return cabeca({ titulo, desc, caminho: '/', jsonld }) + topo(true) + `
<main id="topo">
  <section class="hero">
    <div class="hero-inner">
      <p class="hero-where">${ico('pin')} Atendimento em Arcos - MG</p>
      <h1>Seu problema resolvido <em>com rapidez.</em></h1>
      <p class="lead">Chuveiro sem esquentar, tomada solta, torneira pingando ou lote tomado pelo mato. Você descreve o que está acontecendo no WhatsApp e recebe o orçamento.</p>
      <div class="hero-cta">
        <a class="btn btn-lg" data-wa="${esc(MSG_GERAL)}" href="${wa(MSG_GERAL)}">${ico('wa')} Pedir orçamento no WhatsApp</a>
        <a class="phone" href="tel:+${WA}">${FONE}</a>
      </div>
    </div>
    <div class="hero-mark" aria-hidden="true">
      <img class="hero-foto" src="/imagens/hero.jpg" alt="" onerror="this.remove()">
      <svg class="hero-flame" viewBox="0 0 64 64"><use href="#i-flame"/></svg>
    </div>
  </section>

  <section class="services" id="servicos">
    <div class="wrap">
      <h2>O que a gente resolve</h2>
      <p class="sec-sub">Serviços de casa e de terreno em Arcos, do pequeno reparo ao serviço que você vem adiando.</p>
      <ul class="cards">${SERVICOS.map(s => `<li class="card">
        <a href="/${s.slug}">
          ${quadro(s, `${s.curto} em Arcos - MG`)}
          <div class="card-txt"><h3>${s.curto}</h3><p>${s.resumo}</p><span class="card-link">Ver o serviço ${ico('arrow')}</span></div>
        </a></li>`).join('')}</ul>
      <p class="svc-note">Não achou o seu serviço na lista? <a data-wa="Olá! Vim pelo site. Meu serviço não está na lista, posso explicar o que preciso?" href="${wa('Olá! Vim pelo site. Meu serviço não está na lista, posso explicar o que preciso?')}">Pergunta no WhatsApp</a>.</p>
    </div>
  </section>

  <section class="steps" id="como-funciona">
    <div class="wrap">
      <h2>Como pedir seu orçamento</h2>
      <ol class="step-list">
        <li><span class="n" aria-hidden="true">1</span><h3>Chame no WhatsApp</h3><p>Conte o que está acontecendo. Uma foto ou um vídeo curto ajuda muito.</p></li>
        <li><span class="n" aria-hidden="true">2</span><h3>Receba o orçamento</h3><p>Você recebe o valor com o serviço explicado e decide se fecha.</p></li>
        <li><span class="n" aria-hidden="true">3</span><h3>Combine e resolva</h3><p>Fechado o orçamento, a gente marca o dia em Arcos e faz o serviço.</p></li>
      </ol>
    </div>
  </section>

  <section class="faq" id="duvidas">
    <div class="wrap faq-grid">
      <h2>Dúvidas comuns</h2>
      ${faqHtml(faq)}
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>Tem algo em casa pedindo conserto?</h2>
      <p>Mande uma mensagem agora. Quanto antes você descrever, antes recebe o orçamento.</p>
      <a class="btn btn-lg btn-dark" data-wa="${esc(MSG_GERAL)}" href="${wa(MSG_GERAL)}">${ico('wa')} Pedir orçamento no WhatsApp</a>
      <p class="final-phone">ou ligue: <a href="tel:+${WA}">${FONE}</a></p>
    </div>
  </section>
</main>
` + rodape + `\n<script src="/script.js"></script>\n</body>\n</html>\n`;
}

function pagina404() {
  const jsonld = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Página não encontrada' };
  return cabeca({ titulo: `Página não encontrada | ${NOME}`, desc: 'Página não encontrada.', caminho: '/404', jsonld }).replace('<meta name="description"', '<meta name="robots" content="noindex">\n<meta name="description"') + topo(false) + `
<main>
  <section class="shero"><div class="wrap">
    <h1>Essa página <em>não existe.</em></h1>
    <p class="lead">O endereço pode ter mudado. Veja os serviços ou chame direto no WhatsApp.</p>
    <div class="hero-cta"><a class="btn btn-lg" href="/#servicos">Ver os serviços</a><a class="phone" href="tel:+${WA}">${FONE}</a></div>
  </div></section>
</main>
` + rodape + `\n<script src="/script.js"></script>\n</body>\n</html>\n`;
}

// ---------- arquivos ----------
const out = (nome, txt) => writeFileSync(join(RAIZ, nome), txt, 'utf8');
out('index.html', paginaHome());
for (const s of SERVICOS) out(`${s.slug}.html`, paginaServico(s));
out('404.html', pagina404());

const hoje = new Date().toISOString().slice(0, 10);
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[['/', '1.0'], ...SERVICOS.map(s => ['/' + s.slug, '0.8'])].map(([p, pr]) => `  <url><loc>${SITE}${p === '/' ? '/' : p}</loc><lastmod>${hoje}</lastmod><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`);
out('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
out('vercel.json', JSON.stringify({ cleanUrls: true, trailingSlash: false }, null, 2) + '\n');

const flame = '<path fill="#ff6a00" d="M34 4c2 10-4 14-9 20-4 5-7 10-7 17 0 11 8 19 18 19s18-8 18-19c0-8-4-13-8-18-1 4-3 6-5 7 2-9-1-17-7-26Z"/><path fill="#ffb800" d="M33 30c1 6-5 8-5 14a8 8 0 0 0 16 0c0-5-3-7-5-10-1 2-2 3-3 3 1-3 0-5-3-7Z"/>';
out('imagens/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#14161a"/><g transform="translate(8 8) scale(.75)">${flame}</g></svg>\n`);
out('imagens/og.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#14161a"/><circle cx="1000" cy="560" r="420" fill="#ff6a00" opacity=".35"/><g transform="translate(790 90) scale(6)">${flame}</g><text x="70" y="270" fill="#fff" font-family="Arial Narrow,Arial,sans-serif" font-weight="900" font-style="italic" font-size="120">INTENSE</text><text x="70" y="360" fill="#ffb800" font-family="Arial Narrow,Arial,sans-serif" font-weight="800" font-style="italic" font-size="54">SERVIÇOS EXPRESS</text><text x="70" y="470" fill="#c9c4bb" font-family="Arial,sans-serif" font-size="40">Elétrica, hidráulica, solda e roçada em Arcos - MG</text></svg>\n`);
console.log('Gerado:', 1 + SERVICOS.length + 1, 'páginas + sitemap, robots, vercel.json, favicon, og');
