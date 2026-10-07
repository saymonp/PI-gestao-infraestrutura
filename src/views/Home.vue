<template>
<div class="w-[1440px] h-[1480px] min-h-[1480px] bg-slate-100 inline-flex justify-start items-start overflow-hidden">
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
      <router-link to="/" class="self-stretch h-10 px-2.5 bg-indigo-50 rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-indigo-100 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
        </div>
        <div class="justify-start text-sky-700 text-xs font-semibold font-['Inter']">Visão geral</div>
      </router-link>
      <router-link to="/compararEstacoes" class="self-stretch h-10 px-2.5 bg-white rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-slate-50 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="size-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Comparar Estações</div>
      </router-link>
      <router-link to="/mapaEstacoes" class="self-stretch h-10 px-2.5 bg-white rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-slate-50 transition-colors">
        <div class="size-4 relative overflow-hidden">
          <div class="size-4 left-[1.48px] top-[1.43px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Mapas das Estações</div>
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
      <div class="justify-start"><span class="text-slate-500 text-xs font-normal font-['Inter']">Estações  /  Santa Maria, RS  /  </span><span class="text-slate-800 text-xs font-medium font-['Inter']">Visão geral</span></div>
      <div class="size- flex justify-start items-center gap-2 overflow-hidden">
        <div class="size-3.5 relative overflow-hidden">
          <div class="size-3 left-[1.25px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-slate-500"></div>
        </div>
        <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Ambiente demonstrativo</div>
      </div>
    </div>
    <div class="self-stretch p-8 flex flex-col justify-start items-start gap-7 overflow-hidden">
      <div class="self-stretch flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div class="size- inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div class="size- inline-flex justify-start items-center gap-3 overflow-hidden">
              <div class="justify-start text-slate-800 text-3xl font-normal font-['Inter']">Painel meteorológico</div>
              <div class="size- px-2 py-[5px] bg-indigo-50 rounded-[100px] flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-sky-700 text-xs font-semibold font-['Inter']">Dados ilustrativos</div>
              </div>
            </div>
            <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
              <div class="size-3.5 relative overflow-hidden">
                <div class="w-2.5 h-3 left-[2.33px] top-[1.17px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
              </div>
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Santa Maria, RS • EST-001</div>
              <div class="justify-start text-slate-400 text-xs font-normal font-['Inter']"> /  29,69° S · 53,81° O · 95 m</div>
            </div>
          </div>
          <div class="size- inline-flex flex-col justify-start items-end gap-[5px] overflow-hidden">
            <div class="justify-start text-slate-800 text-xs font-medium font-['Inter']">Terça-feira, 6 de outubro de 2026</div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Última medição do exemplo às 14:00</div>
          </div>
        </div>
        <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div class="size- flex justify-start items-center gap-3 overflow-hidden">
            <div class="justify-start text-slate-800 text-base font-semibold font-['Inter']">Condições atuais</div>
            <div class="size- px-2 py-[5px] bg-emerald-50 rounded-[100px] flex justify-start items-center gap-1.5 overflow-hidden">
              <div class="size-[5px] bg-teal-700 rounded-full"></div>
              <div class="justify-start text-teal-700 text-xs font-semibold font-['Inter']">Registro válido</div>
            </div>
          </div>
          <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">06/10/2026 • 14:00 (UTC−3)</div>
        </div>
        <div class="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
          <div class="flex-1 p-5 bg-sky-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-sky-950 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-300 text-xs font-medium font-['Inter']">Temperatura</div>
              <div class="size-4 relative overflow-hidden">
                <div class="w-1.5 h-3.5 left-[6px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-300"></div>
              </div>
            </div>
            <div class="justify-start"><span class="text-white text-3xl font-medium font-['IBM_Plex_Mono']">24,8</span><span class="text-slate-300 text-base font-normal font-['Inter']"> °C</span></div>
            <div class="justify-start text-slate-300 text-xs font-normal font-['Inter']">Mín. 18,2° / Máx. 26,1° hoje</div>
          </div>
          <div class="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Umidade relativa</div>
              <div class="size-4 relative overflow-hidden">
                <div class="size-3.5 left-[2.25px] top-[2.26px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
              </div>
            </div>
            <div class="justify-start"><span class="text-slate-800 text-3xl font-medium font-['IBM_Plex_Mono']">62</span><span class="text-slate-500 text-base font-normal font-['Inter']"> %</span></div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Mín. 58% / Máx. 89% hoje</div>
          </div>
          <div class="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Pressão atmosférica</div>
              <div class="size-4 relative overflow-hidden">
                <div class="w-3.5 h-3 left-[1.50px] top-[3px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
              </div>
            </div>
            <div class="justify-start"><span class="text-slate-800 text-3xl font-medium font-['IBM_Plex_Mono']">1013,2</span><span class="text-slate-500 text-base font-normal font-['Inter']"> hPa</span></div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Pressão na estação</div>
          </div>
          <div class="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Vento</div>
              <div class="size-4 relative overflow-hidden">
                <div class="w-3.5 h-3 left-[1.50px] top-[3px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
              </div>
            </div>
            <div class="justify-start"><span class="text-slate-800 text-3xl font-medium font-['IBM_Plex_Mono']">12,6</span><span class="text-slate-500 text-base font-normal font-['Inter']"> km/h</span></div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Direção NE • 45°</div>
          </div>
          <div class="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Precipitação</div>
              <div class="size-4 relative overflow-hidden">
                <div class="size-3.5 left-[1.50px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
              </div>
            </div>
            <div class="justify-start"><span class="text-slate-800 text-3xl font-medium font-['IBM_Plex_Mono']">2,4</span><span class="text-slate-500 text-base font-normal font-['Inter']"> mm</span></div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Acumulado de hoje até 14:00</div>
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div class="justify-start text-slate-800 text-base font-semibold font-['Inter']">Explorar medições</div>
          <div class="size- p-[3px] bg-slate-200 rounded-lg flex justify-start items-start overflow-hidden">
            <div class="size- px-3 py-1.5 bg-white rounded-md flex justify-start items-start overflow-hidden">
              <div class="justify-start text-sky-600 text-xs font-semibold font-['Inter']">Hoje</div>
            </div>
            <div class="size- px-3 py-1.5 bg-white/0 rounded-md flex justify-start items-start overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">7 dias</div>
            </div>
            <div class="size- px-3 py-1.5 bg-white/0 rounded-md flex justify-start items-start overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">30 dias</div>
            </div>
            <div class="size- px-3 py-1.5 bg-white/0 rounded-md flex justify-start items-start overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Personalizado</div>
            </div>
          </div>
        </div>
        <div class="self-stretch p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-end gap-3.5 overflow-hidden">
          <div class="w-60 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Início do período</div>
            <div class="self-stretch h-10 px-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-800 text-xs font-normal font-['Inter']">06/10/2026  00:00</div>
              <div class="size-3.5 relative overflow-hidden">
                <div class="size-3 left-[1.88px] top-[1.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
              </div>
            </div>
          </div>
          <div class="w-60 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Fim do período</div>
            <div class="self-stretch h-10 px-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-800 text-xs font-normal font-['Inter']">06/10/2026  14:00</div>
              <div class="size-3.5 relative overflow-hidden">
                <div class="size-3 left-[1.88px] top-[1.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
              </div>
            </div>
          </div>
          <div class="w-40 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div class="justify-start text-slate-500 text-xs font-medium font-['Inter']">Intervalo</div>
            <div class="self-stretch h-10 px-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-800 text-xs font-normal font-['Inter']">1 hora</div>
              <div class="size-3.5 relative overflow-hidden">
                <div class="w-2 h-1 left-[3.75px] top-[5.63px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
              </div>
            </div>
          </div>
          <div class="flex-1 h-10 inline-flex flex-col justify-center items-start overflow-hidden">
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">15 registros no período</div>
          </div>
          <div class="h-10 px-4 bg-sky-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-600 flex justify-center items-center gap-2 overflow-hidden">
            <div class="size-4 relative overflow-hidden">
              <div class="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white"></div>
            </div>
            <div class="justify-start text-white text-xs font-semibold font-['Inter']">Consultar</div>
          </div>
        </div>
        <div class="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
          <div class="w-[754px] p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div class="justify-start text-slate-800 text-base font-semibold font-['Inter']">Temperatura e umidade</div>
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">°C / %</div>
            </div>
            <div class="size- inline-flex justify-start items-start gap-5 overflow-hidden">
              <div class="size- flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="w-5 h-0 border-2 border-sky-600"></div>
                <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Temperatura</div>
              </div>
              <div class="size- flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="w-5 h-0 border-2 border-slate-400"></div>
                <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Umidade relativa</div>
              </div>
            </div>
            <div class="w-[706px] h-52 relative inline-flex justify-start items-start overflow-hidden">
              <div class="w-7 left-0 top-[8px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">28°</div>
              <div class="w-7 left-0 top-[48px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">25°</div>
              <div class="w-7 left-0 top-[88px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">22°</div>
              <div class="w-7 left-0 top-[128px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">19°</div>
              <div class="w-7 left-0 top-[168px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">16°</div>
              <div class="left-[678px] top-[8px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">90</div>
              <div class="left-[678px] top-[48px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">80</div>
              <div class="left-[678px] top-[88px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">70</div>
              <div class="left-[678px] top-[128px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">60</div>
              <div class="left-[678px] top-[168px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">50</div>
              <div class="w-[638px] h-px left-[34px] top-[14px] absolute bg-slate-100"></div>
              <div class="w-[638px] h-px left-[34px] top-[54px] absolute bg-slate-100"></div>
              <div class="w-[638px] h-px left-[34px] top-[94px] absolute bg-slate-100"></div>
              <div class="w-[638px] h-px left-[34px] top-[134px] absolute bg-slate-100"></div>
              <div class="w-[638px] h-px left-[34px] top-[174px] absolute bg-slate-100"></div>
              <div class="w-[638px] h-32 left-[34px] top-[39.33px] absolute bg-gradient-to-b from-sky-600/10 to-sky-600/0"></div>
              <div class="w-[638px] h-32 left-[34px] top-[18px] absolute border-2 border-slate-400"></div>
              <div class="w-[638px] h-28 left-[34px] top-[39.33px] absolute border-[2.50px] border-sky-600"></div>
              <div class="size-2 left-[668px] top-[52.67px] absolute bg-sky-600 rounded-full border-2 border-white"></div>
              <div class="w-7 left-[20px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">00h</div>
              <div class="w-7 left-[111.10px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">02h</div>
              <div class="w-7 left-[202.30px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">04h</div>
              <div class="w-7 left-[293.40px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">06h</div>
              <div class="w-7 left-[384.60px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">08h</div>
              <div class="w-7 left-[475.70px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">10h</div>
              <div class="w-7 left-[566.90px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">12h</div>
              <div class="w-7 left-[658px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">14h</div>
            </div>
            <div class="self-stretch pt-3.5 border-t border-slate-200 inline-flex justify-between items-start overflow-hidden">
              <div class="justify-start"><span class="text-slate-500 text-xs font-normal font-['Inter']">Mínima </span><span class="text-slate-800 text-xs font-semibold font-['Inter']">18,2 °C</span><span class="text-slate-500 text-xs font-normal font-['Inter']"> às 05h  ·  Máxima </span><span class="text-slate-800 text-xs font-semibold font-['Inter']">26,1 °C</span><span class="text-slate-500 text-xs font-normal font-['Inter']"> às 12h</span></div>
              <div class="justify-start text-slate-400 text-xs font-normal font-['Inter']">15 medições</div>
            </div>
          </div>
          <div class="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div class="self-stretch inline-flex justify-between items-start overflow-hidden">
              <div class="justify-start text-slate-800 text-base font-semibold font-['Inter']">Precipitação</div>
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">mm</div>
            </div>
            <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
              <div class="w-5 h-0 border-2 border-sky-600"></div>
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Volume por intervalo de 1 hora</div>
            </div>
            <div class="w-80 h-52 relative inline-flex justify-start items-start">
              <div class="w-7 left-0 top-[8px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">2,0</div>
              <div class="w-7 left-0 top-[48px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">1,5</div>
              <div class="w-7 left-0 top-[88px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">1,0</div>
              <div class="w-7 left-0 top-[128px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">0,5</div>
              <div class="w-7 left-0 top-[168px] absolute justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">0,0</div>
              <div class="w-72 h-px left-[34px] top-[14px] absolute bg-slate-100"></div>
              <div class="w-72 h-px left-[34px] top-[54px] absolute bg-slate-100"></div>
              <div class="w-72 h-px left-[34px] top-[94px] absolute bg-slate-100"></div>
              <div class="w-72 h-px left-[34px] top-[134px] absolute bg-slate-100"></div>
              <div class="w-72 h-px left-[34px] top-[174px] absolute bg-slate-100"></div>
              <div class="w-3 h-0.5 left-[37px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[57px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[77px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[97px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[117px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[137px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-16 left-[157px] top-[110px] absolute bg-sky-600 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-32 left-[177px] top-[46px] absolute bg-sky-600 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[197px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[217px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[237px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[257px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[277px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[297px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="w-3 h-0.5 left-[317px] top-[172px] absolute bg-slate-200 rounded-tl-[3px] rounded-tr-[3px]"></div>
              <div class="left-[151px] top-[94px] absolute justify-start text-sky-600 text-[10px] font-semibold font-['Inter']">0,8</div>
              <div class="left-[172px] top-[30px] absolute justify-start text-sky-600 text-[10px] font-semibold font-['Inter']">1,6</div>
              <div class="w-7 left-[29px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">00h</div>
              <div class="w-7 left-[109px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">04h</div>
              <div class="w-7 left-[189px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">08h</div>
              <div class="w-7 left-[269px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">12h</div>
              <div class="w-7 left-[309px] top-[188px] absolute text-center justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">14h</div>
            </div>
            <div class="self-stretch pt-3.5 border-t border-slate-200 inline-flex justify-between items-start overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">Total no período</div>
              <div class="justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">2,4 mm</div>
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div class="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div class="size- inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div class="size- inline-flex justify-start items-center gap-2 overflow-hidden">
              <div class="justify-start text-slate-800 text-base font-semibold font-['Inter']">Histórico de medições</div>
              <div class="size- px-1.5 py-[3px] bg-slate-200 rounded-[5px] flex justify-start items-start overflow-hidden">
                <div class="justify-start text-slate-500 text-[10px] font-semibold font-['Inter']">15 registros</div>
              </div>
            </div>
            <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">06/10/2026, 00:00–14:00 • Medições horárias • Mais recentes primeiro</div>
          </div>
          <div class="h-10 px-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden">
            <div class="size-4 relative overflow-hidden">
              <div class="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-sky-600"></div>
            </div>
            <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Exportar CSV</div>
          </div>
        </div>
        <div class="self-stretch bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
          <div class="self-stretch px-6 py-3.5 bg-slate-50 border-b border-slate-200 inline-flex justify-start items-start overflow-hidden">
            <div class="w-36 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Data</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">dd/mm/aaaa</div>
            </div>
            <div class="w-24 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Horário</div>
                <div class="size-3 relative overflow-hidden">
                  <div class="size-1.5 left-[2.50px] top-[2.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
                </div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">UTC−3</div>
            </div>
            <div class="w-32 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Temperatura</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">°C</div>
            </div>
            <div class="w-28 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Umidade</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">%</div>
            </div>
            <div class="w-36 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Pressão</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">hPa</div>
            </div>
            <div class="w-28 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Vento</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">km/h</div>
            </div>
            <div class="w-36 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Direção</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">° / orientação</div>
            </div>
            <div class="w-36 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
              <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
                <div class="justify-start text-slate-800 text-xs font-semibold font-['Inter']">Precipitação</div>
              </div>
              <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">mm / intervalo</div>
            </div>
          </div>
          <div class="self-stretch h-12 px-6 bg-slate-50 border-b border-slate-100 inline-flex justify-start items-center overflow-hidden">
            <div class="w-36 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">06/10/2026</div>
            <div class="w-24 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">14:00</div>
            <div class="w-32 justify-start text-sky-700 text-xs font-medium font-['IBM_Plex_Mono']">24,8</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">62</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">1013,2</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">12,6</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">45° · NE</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-medium font-['IBM_Plex_Mono']">0,0</div>
          </div>
          <div class="self-stretch h-12 px-6 bg-white border-b border-slate-100 inline-flex justify-start items-center overflow-hidden">
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">06/10/2026</div>
            <div class="w-24 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">13:00</div>
            <div class="w-32 justify-start text-sky-700 text-xs font-normal font-['IBM_Plex_Mono']">25,6</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">60</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">1013,4</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">14,4</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">45° · NE</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">0,0</div>
          </div>
          <div class="self-stretch h-12 px-6 bg-white border-b border-slate-100 inline-flex justify-start items-center overflow-hidden">
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">06/10/2026</div>
            <div class="w-24 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">12:00</div>
            <div class="w-32 justify-start text-sky-700 text-xs font-normal font-['IBM_Plex_Mono']">26,1</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">58</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">1013,6</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">13,8</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">67° · ENE</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">0,0</div>
          </div>
          <div class="self-stretch h-12 px-6 bg-white border-b border-slate-100 inline-flex justify-start items-center overflow-hidden">
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">06/10/2026</div>
            <div class="w-24 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">11:00</div>
            <div class="w-32 justify-start text-sky-700 text-xs font-normal font-['IBM_Plex_Mono']">25,4</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">61</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">1013,9</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">11,2</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">45° · NE</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">0,0</div>
          </div>
          <div class="self-stretch h-12 px-6 bg-white border-b border-slate-100 inline-flex justify-start items-center overflow-hidden">
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">06/10/2026</div>
            <div class="w-24 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">10:00</div>
            <div class="w-32 justify-start text-sky-700 text-xs font-normal font-['IBM_Plex_Mono']">24,3</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">66</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">1014,1</div>
            <div class="w-28 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">9,8</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">22° · NNE</div>
            <div class="w-36 justify-start text-slate-800 text-xs font-normal font-['IBM_Plex_Mono']">0,0</div>
          </div>
          <div class="self-stretch h-14 px-6 inline-flex justify-between items-center overflow-hidden">
            <div class="justify-start"><span class="text-slate-500 text-xs font-normal font-['Inter']">Mostrando </span><span class="text-slate-800 text-xs font-semibold font-['Inter']">1–5</span><span class="text-slate-500 text-xs font-normal font-['Inter']"> de 15 registros</span></div>
            <div class="size- flex justify-start items-center gap-1.5 overflow-hidden">
              <div class="justify-start text-slate-500 text-xs font-normal font-['Inter']">5 por página</div>
              <div class="size-3 relative overflow-hidden">
                <div class="w-1.5 h-[3px] left-[3px] top-[4.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500"></div>
              </div>
              <div class="size-7 flex justify-center items-center overflow-hidden">
                <div class="size-3.5 relative overflow-hidden">
                  <div class="w-1 h-1.5 left-[5.25px] top-[3.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-400"></div>
                </div>
              </div>
              <div class="size-7 bg-indigo-50 rounded-md flex justify-center items-center overflow-hidden">
                <div class="justify-start text-sky-600 text-xs font-semibold font-['Inter']">1</div>
              </div>
              <div class="size-7 bg-white rounded-md flex justify-center items-center overflow-hidden">
                <div class="justify-start text-slate-500 text-xs font-semibold font-['Inter']">2</div>
              </div>
              <div class="size-7 bg-white rounded-md flex justify-center items-center overflow-hidden">
                <div class="justify-start text-slate-500 text-xs font-semibold font-['Inter']">3</div>
              </div>
              <div class="size-7 flex justify-center items-center overflow-hidden">
                <div class="size-3.5 relative overflow-hidden">
                  <div class="w-1 h-1.5 left-[5.25px] top-[3.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="size- inline-flex justify-start items-center gap-1.5 overflow-hidden">
          <div class="size-3 relative overflow-hidden">
            <div class="size-2.5 left-[1.08px] top-[1.08px] absolute outline outline-1 outline-offset-[-0.50px] outline-slate-500"></div>
          </div>
          <div class="justify-start text-slate-500 text-[10px] font-normal font-['Inter']">Precipitação da tabela = volume no intervalo de 1 hora. O cartão de condições atuais mostra o acumulado do dia.</div>
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