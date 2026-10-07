<template>
    <div class="w-[1440px] min-h-[900px] bg-slate-100 inline-flex justify-start items-start overflow-hidden">
  <div class="w-52 self-stretch px-5 pt-7 pb-6 bg-white border-r border-slate-200 inline-flex flex-col justify-start items-start gap-9 overflow-hidden">
    <div class="size- inline-flex justify-start items-center gap-2.5 overflow-hidden">
      <div class="size-8 bg-sky-600 rounded-[10px] flex justify-center items-center overflow-hidden">
        <div class="size-6 relative overflow-hidden">
          <div class="size-5 left-[1.92px] top-[1.92px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white"></div>
        </div>
      </div>
      <div class="size- inline-flex flex-col justify-start items-start gap-0.5 overflow-hidden">
        <div class="justify-start text-sky-950 text-lg font-bold font-['Inter']">atmos</div>
        <div class="justify-start text-slate-500 text-[9px] font-normal font-['Inter']">OBSERVATÓRIO</div>
      </div>
    </div>
    <div class="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
      <div class="w-24 h-6 justify-start text-slate-400 text-[10px] font-semibold font-['Inter']">MONITORAMENTO</div>
      <router-link to="/" class="self-stretch h-10 px-2.5 bg-white rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-slate-50 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Visão geral</div>
      </router-link>
      <router-link to="/compararEstacoes" class="self-stretch h-10 px-2.5 bg-white rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-slate-50 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="size-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Comparar estações</div>
      </router-link>
      <router-link to="/mapaEstacoes" class="self-stretch h-10 px-2.5 bg-indigo-50 rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-indigo-100 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="size-4 left-[1.48px] top-[1.43px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
        </div>
        <div class="justify-start text-sky-700 text-xs font-semibold font-['Inter']">Mapa das estações</div>
      </router-link>
      <router-link to="/baixarDados" class="self-stretch h-10 px-2.5 bg-white rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-slate-50 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="w-3 h-3 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Baixar dados</div>
      </router-link>
    </div>
    <div class="self-stretch p-3.5 bg-slate-100 rounded-xl flex flex-col justify-start items-start gap-3 overflow-hidden">
      <div class="justify-start text-slate-500 text-[10px] font-semibold font-['Inter']">ESTAÇÃO ATUAL</div>
      <div class="size- flex flex-col justify-start items-start gap-[5px] overflow-hidden">
        <div class="justify-start text-slate-800 text-sm font-semibold font-['Inter']">Santa Maria</div>
        <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Rio Grande do Sul</div>
      </div>
      <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">EST-001 • Estação automática</div>
      <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
        <div class="justify-start text-sky-600 text-xs font-semibold font-['Inter']">Selecionar estação</div>
        <div class="size-3.5 relative overflow-hidden">
          <div class="w-1.5 h-1 left-[3.50px] top-[5.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
        </div>
      </div>
    </div>
    <div class="self-stretch flex-1"></div>
    <div class="self-stretch pt-4 border-t border-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
      <div class="size-4 relative overflow-hidden">
        <div class="w-3 h-3.5 left-[3px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
      </div>
      <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Explore uma base exemplo</div>
      <div class="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Todas as medições deste painel são ilustrativas.</div>
      <div class="justify-start text-slate-400 text-[10px] font-normal font-['Inter']">Atmos • Painel meteorológico</div>
    </div>
  </div>
  <div class="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
    <div class="self-stretch h-16 px-8 bg-white border-b border-slate-200 inline-flex justify-between items-center overflow-hidden">
      <div class="justify-start"><span class="text-slate-500 text-xs font-normal font-['Inter']">Estações  /  Santa Maria, RS  /  </span><span class="text-slate-800 text-xs font-medium font-['Inter']">Mapa das estações</span></div>
      <div class="size- flex justify-start items-center gap-2 overflow-hidden">
        <div class="size-3.5 relative overflow-hidden">
          <div class="size-3 left-[1.25px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Ambiente demonstrativo</div>
      </div>
    </div>
    <div class="self-stretch p-8 flex flex-col justify-start items-start gap-7 overflow-hidden">
      <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
        <div class="size- inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div class="size- inline-flex justify-start items-center gap-3 overflow-hidden">
            <div class="justify-start text-slate-800 text-3xl font-normal font-['Inter']">Mapa das estações</div>
            <div class="size- px-2 py-[5px] bg-indigo-50 rounded-[100px] flex justify-start items-center gap-1.5 overflow-hidden">
              <div class="justify-start text-sky-700 text-xs font-semibold font-['Inter']">Dados ilustrativos</div>
            </div>
          </div>
          <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Visualize o contexto geográfico visível e localizações identificadas.</div>
        </div>
        <div class="size- inline-flex flex-col justify-start items-end gap-[5px] overflow-hidden">
          <div class="justify-start text-slate-800 text-xs font-medium font-['Inter']">Terça-feira, 6 de outubro de 2026</div>
          <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Última medição do exemplo às 14:00</div>
        </div>
      </div>
      <div class="self-stretch p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div class="justify-start text-slate-800 text-base font-semibold font-['Inter']">Mapa das estações</div>
          <div class="size- flex justify-start items-center gap-2 overflow-hidden">
            <div class="size-2 bg-sky-600 rounded-full"></div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Estação selecionada</div>
          </div>
        </div>
        <div class="self-stretch h-96 relative bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
          <div class="w-[666px] h-96 left-[24px] top-[24px] absolute bg-slate-100 rounded-lg border border-slate-200"></div>
          <div class="w-[690px] h-96 left-[32px] top-[32px] absolute bg-slate-50 rounded-md border border-slate-200"></div>
          <div class="size-2 left-[188px] top-[54px] absolute bg-sky-600 rounded-full border-2 border-white"></div>
          <div class="size-2 left-[388px] top-[74px] absolute bg-sky-600 rounded-full border-2 border-white"></div>
          <div class="size-2 left-[548px] top-[118px] absolute bg-sky-600 rounded-full border-2 border-white"></div>
          <div class="size-2 left-[318px] top-[138px] absolute bg-sky-600 rounded-full border-2 border-white"></div>
          <div class="size- px-2 py-1 left-[188px] top-[34px] absolute bg-sky-600 rounded-[100px] inline-flex justify-start items-start">
            <div class="justify-start text-white text-[10px] font-semibold font-['Inter']">EST-001</div>
          </div>
          <div class="size- px-2 py-1 left-[388px] top-[54px] absolute bg-sky-600 rounded-[100px] inline-flex justify-start items-start">
            <div class="justify-start text-white text-[10px] font-semibold font-['Inter']">EST-002</div>
          </div>
          <div class="size- px-2 py-1 left-[548px] top-[98px] absolute bg-sky-600 rounded-[100px] inline-flex justify-start items-start">
            <div class="justify-start text-white text-[10px] font-semibold font-['Inter']">EST-003</div>
          </div>
          <div class="size- px-2 py-1 left-[318px] top-[118px] absolute bg-sky-600 rounded-[100px] inline-flex justify-start items-start">
            <div class="justify-start text-white text-[10px] font-semibold font-['Inter']">EST-004</div>
          </div>
          <div class="left-[24px] top-[390px] absolute justify-start text-slate-400 text-[10px] font-normal font-['Inter']">Mapa ilustrativo • Localização das estações</div>
        </div>
      </div>
      <div class="self-stretch inline-flex justify-between items-start overflow-hidden">
        <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Dados ilustrativos • Sem conexão com uma estação ou base de dados real.</div>
        <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Horários em Brasília (UTC−3)</div>
      </div>
    </div>
  </div>
</div>
    </template>