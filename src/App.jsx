import React, { useMemo } from 'react'
import logo from './assets/logo.png'
import NewsList from "./components/NewsList";

export default function App() {
  const nav = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'atuacao', label: 'Áreas' },
    { id: 'infra', label: 'Infraestrutura' },
    { id: 'publicacoes', label: 'Produção' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'contato', label: 'Contato' },
  ];

  const areas = useMemo(() => [
    { title: 'Materiais Avançados', desc: 'Síntese, caracterização e engenharia de interfaces de nanomateriais e compósitos funcionais para aplicações em energia, eletrônica, sensores e biotecnologia.', tags: ['nanomateriais','compósitos','biomateriais','interfaces'] },
    { title: 'Tecnologias de Energia', desc: 'Armazenamento e conversão: supercapacitores, baterias e sistemas híbridos; integração com renováveis e planejamento energético.', tags: ['supercapacitores','baterias','renováveis','eletroquímica'] },
    { title: 'Sensores e Dispositivos', desc: 'Sensores nanoestruturados, TENGs, instrumentação e IoT para monitoramento, automação e aplicações ambientais, industriais e sociais.', tags: ['sensores','IoT','TENGs','instrumentação'] },
    { title: 'Sistemas Inteligentes', desc: 'Automação, controle, eletrônica de potência e plataformas ciberfísicas para energia e processos.', tags: ['automação','controle','ciberfísicos','embarcados'] },
    { title: 'Integração Tecnológica', desc: 'Prototipagem e validação de dispositivos integrando materiais, eletrônica e energia com foco no semiárido.', tags: ['prototipagem','maker','validação','sistemas'] },
    { title: 'Educação, Ciência e Inovação', desc: 'Educação científica, inovação social, ciência cidadã e ambientes criativos de aprendizagem.', tags: ['educação','inovação','ciência cidadã','território'] },
    { title: 'Modelagem e Simulação Aplicada', desc: 'Simulação multi-escala de materiais, dispositivos e sistemas; modelagem preditiva e análise de dados.', tags: ['simulação','otimização','multiescala','modelagem'] },
  ], []);

  const infra = [
    { title: 'Laboratório de Pesquisa em Energias Renováveis (F01)', points: ['Pesquisa aplicada em conversão e armazenamento de energia, com ênfase em soluções sustentáveis','Integração entre eletrocatálise, bioprocessos e tecnologias adaptadas ao semiárido'] },
    { title: 'Sistemas Elétricos de Potência', points: ['Estudos e aplicações em geração, distribuição e uso eficiente de energia elétrica','Formação prática em tecnologias energéticas adaptadas ao semiárido'] },
    { title: 'Controle e Automação (F08)', points: ['Desenvolvimento de sistemas de automação, controle digital e lógica embarcada','Integração entre sensores, atuadores e plataformas programáveis para aplicações educacionais e industriais'] },
    { title: 'Eletricidade e Eletrônica (F11)', points: ['Sensores e Dispositivos – circuitos para sensores, integração com IoT e testes funcionais','Sistemas Inteligentes – desenvolvimento de controladores e plataformas embarcadas'] },
  ];

  const parceiros = [
    { title: 'LEIMO – UNIVASF', points: ['Caracterização Eletroquímica de materiais'] },
    { title: 'Laboratórios de Fotônica/Óptica – UNIVASF', points: ['Caracterização óptica de materiais ópticas'] },
    { title: 'IPCM – UNIVASF', points: ['Caracterização térmica e morfológica de materiais'] },
  ];

  const producao = [
    { ref: 'Journal of Materials Research (2025)', title: 'Ti3C2Tx MXene/alginate-based electrodes for supercapacitors', authors: 'Fotius, J.A.A.; Facure, M.H.M.; Corrêa, D.S.; Carrilho, E.; Barud, H.; Oliveira, H.P.' },
    { ref: 'Solids (2025)', title: 'MXene-Based Composites for Energy Harvesting and Energy Storage Devices', authors: 'Fotius, J.A.A.; Oliveira, H.P.' },
    { ref: 'Materials Research (2025)', title: 'Additive Manufacturing of Conductive Acrylonitrile Butadiene Styrene Filaments via Polypyrrole Incorporation', authors: 'Silva, R.A.F.; Rocha, M.F.B.; Cavalcanti, L.F.M.; Melo, C.P. de; Fotius, J.A.A.; Aguiar, M.F.; Morelli, C.L.; Oliveira, H.P.' },
    { ref: 'Materials Today Communications (2023)', title: 'Biodegradable Hyaluronic Acid-Based Triboelectric Nanogenerator as Self-Powered Temperature Sensor', authors: 'Cândido, I.C.M.; Piovesan, L.F.; Freire, A.L.; Fotius, J.A.A.; Lima, J.J.J.; Barud, H.S.; Oliveira, H.P.' },
    { ref: 'Applied Microbiology (2023)', title: 'Nile Tilapia Skin Impregnated with Antibacterial Silver/Titanium Dioxide Compounds', authors: 'Marcolino, M.C.; Guimarães, M.L.; Fotius, J.A.A.; Colpini, L.M.S.; Costa, M.M.; Oliveira, H.P.' },
  ];

  const equipe = [
    { role: 'Líder do Grupo', people: [{ name: 'Jorge Alexandre Alencar Fotius', tit: 'Me. Ciência dos Materiais', lattes: 'http://lattes.cnpq.br/5020081423514335' }] },
    { role: 'Pesquisadores – IFSertãoPE', people: [
      { name: 'Ricardo Maia Costa', tit: 'Esp. Eng. Elétrica (Automação)', lattes: 'http://lattes.cnpq.br/1423064774150808' },
      { name: 'Luiz Carlos Nascimento Lopes', tit: 'Me. Eng. Elétrica', lattes: 'http://lattes.cnpq.br/5690346494045908' },
      { name: 'Manuel Rangel Borges Neto', tit: 'Dr. Eng. Elétrica', lattes: 'http://lattes.cnpq.br/6227453953185916' },
      { name: 'Raniere Fernando Domingos Farias', tit: 'Me. Eng. Elétrica', lattes: 'http://lattes.cnpq.br/2262626734793302' },
      { name: 'José Américo de Carvalho', tit: 'Adm.', lattes: 'http://lattes.cnpq.br/2471675564897540' },
      { name: 'Poliana Silva', tit: 'Me. Energias Renováveis', lattes: 'http://lattes.cnpq.br/7814401916170568' },
      { name: 'Giulliano de Souza Fagundes', tit: 'Me. Eng. Urbana e Ambiental', lattes: 'http://lattes.cnpq.br/1562185746884106' },
      { name: 'Thiago Luiz de Melo e Silva', tit: 'Esp. Gestão de Pessoas; Me. Dinâmicas do Semiárido', lattes: 'http://lattes.cnpq.br/5033328897749578' },
    ] },
    { role: 'Técnico – IFSertãoPE', people: [ ] },
    { role: 'Pesquisadores – Instituições Parceiras', people: [
      { name: 'Helinando Pequeno de Oliveira (UNIVASF)', tit: 'Dr. Física', lattes: 'http://lattes.cnpq.br/5382132010377738' },
      { name: 'Erlon Rabelo Cordeiro (UNIVASF)', tit: 'Dr. Eng. Industrial', lattes: 'http://lattes.cnpq.br/6713250656114562' },
      { name: 'Nikifor Rakov Gomez (UNIVASF)', tit: 'Dr. Física', lattes: 'http://lattes.cnpq.br/5689587838879849' },
    ] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="LIMENS Logo" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight text-lg">LIMENS</div>
              <div className="text-[11px] text-gray-500 -mt-0.5">
                Materiais • Energias • Nanotecnologia • Sistemas
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-gray-600 hover:text-blue-700 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contato" className="inline-flex items-center rounded-2xl px-3 py-1.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm">
              Fale conosco
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-emerald-50 to-yellow-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Do átomo ao sistema: <span className="text-blue-700">inovação</span> em todas as escalas
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Laboratório de Inovação em Materiais, Energias, Nanotecnologia e Sistemas –
              pesquisa aplicada com forte inserção regional, soluções sustentáveis e formação de excelência.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#atuacao" className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-medium shadow">
                Áreas de atuação
              </a>
              <a href="#publicacoes" className="px-4 py-2 rounded-xl bg-white border font-medium hover:bg-gray-50">
                Produção recente
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { k: '> 7', v: 'Linhas de pesquisa' },
                { k: '> 10', v: 'Pesquisadores e técnicos' },
                { k: '2025', v: 'Criação do LIMENS' },
              ].map((m) => (
                <div key={m.v} className="rounded-2xl bg-white border p-4 shadow-sm">
                  <div className="text-2xl font-extrabold text-gray-900">{m.k}</div>
                  <div className="text-xs text-gray-500">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/3] rounded-3xl bg-white border shadow-lg p-6 flex flex-col items-center justify-center">
                <img
                    src={logo}
                    alt="LIMENS Logo"
                     className="max-h-100 w-auto"
                />

            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Missão</h2>
            <p className="mt-3 text-gray-700">
              Desenvolver pesquisas interdisciplinares e tecnologias inovadoras que integrem
              materiais avançados, fontes e sistemas energéticos, nanotecnologia e engenharia de sistemas,
              com foco em aplicações sustentáveis, soluções adaptadas ao território e impacto científico, social e tecnológico.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Visão</h2>
            <p className="mt-3 text-gray-700">
              Ser referência nacional e internacional em pesquisa aplicada, com forte inserção regional,
              promovendo soluções tecnológicas e formação de excelência.
            </p>
          </div>
        </div>
      </section>

      <section id="noticias" className="bg-gray-50 border-t">
         <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">Notícias</h2>
            <NewsList />
        </div>
      </section>

      <section id="atuacao" className="bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">Áreas Temáticas de Atuação</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a) => (
              <div key={a.title} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{a.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{a.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 border">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="infra" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Infraestrutura & Parceiros</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          O LIMENS combina infraestrutura própria do IFSertãoPE com acesso a laboratórios parceiros estratégicos na UNIVASF.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {infra.map((i) => (
            <div key={i.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{i.title}</h3>
              <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
                {i.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
          {parceiros.map((p) => (
            <div key={p.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{p.title}</h3>
              <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
                {p.points.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="publicacoes" className="bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Produção & Projetos</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {producao.map((p) => (
              <article key={p.title} className="rounded-2xl border p-5 bg-white shadow-sm">
                <div className="text-xs text-blue-700 font-semibold">{p.ref}</div>
                <h3 className="mt-1 font-bold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.authors}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Participação: "Filtro nanoestruturado e antibacteriano com acionamento elétrico para sistemas de circulação de ar em hospitais" (UNIVASF/EBSERH).
          </div>
        </div>
      </section>

<section id="equipe" className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10">Equipe</h2>

  {equipe.map((grp) => (
    <div key={grp.role} className="mb-12">
      <h3 className="text-xl font-semibold mb-6 border-b pb-2">{grp.role}</h3>
      
      {grp.people.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {grp.people.map((pp) => (
            <div
              key={pp.name}
              className="bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {/* Avatar genérico (substituir por imagem se disponível) */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-200 to-emerald-200 flex items-center justify-center text-2xl font-bold text-gray-700">
                {pp.name.charAt(0)}
              </div>

              <div className="mt-4 font-medium text-lg">{pp.name}</div>
              <div className="text-sm text-gray-600">{pp.tit}</div>

              <a
                className="mt-3 text-sm font-medium text-blue-700 hover:underline"
                href={pp.lattes}
                target="_blank"
                rel="noreferrer"
              >
                Currículo Lattes
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">Nenhum membro cadastrado nesta categoria.</p>
      )}
    </div>
  ))}
</section>

      <section id="contato" className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Contato</h2>
              <p className="mt-3 text-gray-700">
                Sala 01 – Bloco F – IFSertãoPE – Campus Petrolina – Av. Maria Luzia de Araújo Gomes Cabral, 791 – João de Deus, Petrolina – PE, 56309-680
              </p>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>E-mail: <a className="text-blue-700 hover:underline" href="mailto:jorge.fotius@ifsertao-pe.edu.br">jorge.fotius@ifsertao-pe.edu.br</a></li>
                <li>Telefone: (87) 2101-4342</li>
                <li>Coordenadas: lat -9.361463, lon -40.538784</li>
              </ul>
              <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" /> Aberto a parcerias, estágios e projetos de P&D.
              </div>
            </div>
            <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
                          <form
                              name="contato"
                              method="POST"
                              data-netlify="true"
                              className="space-y-3"
                          >
                              {/* Campo oculto para o Netlify identificar o formulário */}
                              <input type="hidden" name="form-name" value="contato" />

                              <div>
                                  <label className="text-sm font-medium">Nome</label>
                                  <input
                                      name="nome"
                                      className="mt-1 w-full border rounded-xl px-3 py-2"
                                      placeholder="Seu nome"
                                      required
                                  />
                              </div>

                              <div>
                                  <label className="text-sm font-medium">E-mail</label>
                                  <input
                                      type="email"
                                      name="email"
                                      className="mt-1 w-full border rounded-xl px-3 py-2"
                                      placeholder="voce@exemplo.com"
                                      required
                                  />
                              </div>

                              <div>
                                  <label className="text-sm font-medium">Mensagem</label>
                                  <textarea
                                      name="mensagem"
                                      className="mt-1 w-full border rounded-xl px-3 py-2 h-28"
                                      placeholder="Como podemos colaborar?"
                                      required
                                  />
                              </div>

                              <button
                                  type="submit"
                                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-medium shadow"
                              >
                                  Enviar mensagem
                              </button>

                              <p className="text-xs text-gray-500">
                                  *Este formulário é processado pelo Netlify. As mensagens aparecerão no painel do site.
                              </p>
                          </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-gray-600">© {new Date().getFullYear()} LIMENS – Laboratório de Inovação em Materiais, Energias, Nanotecnologia e Sistemas.</div>
          <div className="flex items-center gap-3 text-xs">
           <img src={logo} alt="LIMENS Logo" className="h-8 w-auto" />
            <a href="#sobre" className="hover:underline">Institucional</a>
            <span>•</span>
            <a href="#contato" className="hover:underline">Contato</a>
            <span>•</span>
            <a href="#publicacoes" className="hover:underline">Publicações</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
