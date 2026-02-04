const lessons = {
  1: `
    <h2>Boas-vindas e Introdução</h2>
    <p>
      Parabéns por começar esta jornada no mundo da programação! Este curso foi criado especificamente para pessoas como você: iniciantes absolutos que querem entrar no mercado de trabalho de desenvolvimento web e conquistar seu primeiro estágio.
    </p>
    <br>
    <p>
      <strong>Por que este curso é diferente?</strong><br>
      Ao contrário de muitos cursos online, este foca no que as empresas realmente procuram: habilidades práticas, projetos reais para portfólio e preparação para entrevistas de estágio. Você não apenas aprenderá a codificar, mas também como se posicionar no mercado.
    </p>
    <br>
    <p>
      <strong>O que você vai aprender:</strong>
    </p>
    <ul>
      <li><strong>Fundamentos Técnicos:</strong> HTML, CSS e JavaScript - as bases de qualquer site moderno</li>
      <li><strong>Automação:</strong> Python - linguagem poderosa para automação de tarefas</li>
      <li><strong>Banco de Dados:</strong> Introdução a SQL e conceitos de persistência de dados</li>
      <li><strong>Projetos Práticos:</strong> Criar aplicações reais que impressionarão recrutadores</li>
      <li><strong>Version Control:</strong> Git e GitHub para gerenciar seu código profissionalmente</li>
      <li><strong>Ferramentas Essenciais:</strong> Editores, navegadores e ferramentas que todo dev usa</li>
      <li><strong>Soft Skills:</strong> Habilidades comportamentais para o mercado de trabalho</li>
      <li><strong>Carreira:</strong> Como conseguir seu primeiro estágio, preparar currículo e se destacar</li>
      <li><strong>Mindset:</strong> Técnicas de estudo eficazes e como manter a motivação</li>
    </ul>
    <br>
    <p>
      <strong>Pré-requisitos:</strong> Nenhum! Este curso parte do zero. Você só precisa de um computador, conexão com internet e vontade de aprender.
    </p>
    <br>
    <p>
      <strong>Como usar este curso:</strong>
    </p>
    <ul>
      <li>Navegue pelas lições na barra lateral</li>
      <li>Cada lição tem teoria, exemplos práticos e exercícios</li>
      <li>Pratique tudo que aprender - teoria sem prática não vale nada</li>
      <li>Não pule etapas - a base é fundamental para avançar</li>
      <li>Faça os projetos e hospede no GitHub</li>
    </ul>
    <br>
    <p>
      <strong>Duração estimada:</strong> 6-8 semanas, estudando 2-3 horas por dia. Mas vá no seu ritmo - qualidade sobre velocidade.
    </p>
    <br>
    <p>
      <strong>Motivação:</strong> O mercado de tecnologia está em crescimento. Empresas como Google, Facebook e startups locais estão contratando estagiários o tempo todo. Com dedicação, você pode estar trabalhando em 2-3 meses.
    </p>
    <br>
    <p>
      <strong>Dicas para o sucesso:</strong>
    </p>
    <ul>
      <li>Estude diariamente, mesmo que 30 minutos</li>
      <li>Pratique muito - escreva código todos os dias</li>
      <li>Participe de comunidades (Reddit, Discord)</li>
      <li>Não tenha medo de errar - debugging é parte do aprendizado</li>
      <li>Celebre pequenas vitórias</li>
    </ul>
    <p>
      Vamos começar? Clique na próxima lição para entender como funciona a programação!
    </p>
    <h3>Exercício de Aquecimento</h3>
    <p>
      Pense em uma habilidade que você quer desenvolver (como cozinhar ou tocar guitarra). Escreva 3 passos que você daria para se tornar bom nisso. Isso é similar a como aprenderemos programação!
    </p>
  `,

    2: `
      <h2>Como Funciona a Programação</h2>
      <p>
        Antes de escrever a primeira linha de código, vamos entender o conceito fundamental: <strong>programação é resolver problemas usando lógica e instruções que o computador entende</strong>.
      </p>
      <h3>O que é Programação?</h3>
      <p>
        Programação (ou desenvolvimento de software) é o processo de criar instruções para que um computador execute tarefas específicas. É como dar receitas detalhadas para alguém que nunca cozinhou antes.
      </p>
      <h3>Conceitos Fundamentais</h3>
      <ul>
        <li><strong>Algoritmo:</strong> Sequência finita de passos bem definidos para resolver um problema. Exemplo: receita de bolo</li>
        <li><strong>Linguagem de Programação:</strong> Ferramenta que usamos para escrever algoritmos de forma que computadores entendam. Exemplo: JavaScript, Python, Java, TypeScript e C# são linguagens</li>
        <li><strong>Linguagem de marcação:</strong> Linguagem usada para estruturar conteúdo em documentos web. Exemplo: HTML</li>
        <li><strong>Linguagem de Estilo:</strong> Linguagem usada para definir a aparência visual de documentos web. Exemplo: CSS</li>
        <li><strong>Função:</strong> Bloco de código reutilizável que realiza uma tarefa específica (como uma mini-receita)</li>
        <li><strong>Variável:</strong> Espaço na memória para armazenar dados (como uma caixa com etiqueta)</li>
        <li><strong>Compilador/Interpretador:</strong> Programa que traduz o código que escrevemos para linguagem de máquina (0s e 1s)</li>
        <li><strong>Sintaxe:</strong> Regras gramaticais da linguagem (como pontuação em português)</li>
        <li><strong>Lógica de Programação:</strong> Raciocínio para resolver problemas passo a passo</li>
      </ul>
      <h3>Front-end vs Back-end</h3>
      <p>
        <strong>Front-end (Parte Visível):</strong> O que o usuário vê e interage no navegador.
      </p>
      <p style="font-size: 1.05em;">
        <strong>Principais linguagens em Front-end:</strong>
      </p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin: 1rem 0; font-size: 1rem;">
        <div style="text-align: center;">
          <i class="fa-brands fa-html5" style="font-size: 2.5rem; color: #e34c26;"></i>
          <p style="margin: 0.5rem 0 0;">HTML</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-css3-alt" style="font-size: 2.5rem; color: #1572b6;"></i>
          <p style="margin: 0.5rem 0 0;">CSS</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-js" style="font-size: 2.5rem; color: #f7df1e;"></i>
          <p style="margin: 0.5rem 0 0;">JavaScript</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-react" style="font-size: 2.5rem; color: #61dafb;"></i>
          <p style="margin: 0.5rem 0 0;">React</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-vuejs" style="font-size: 2.5rem; color: #4fc08d;"></i>
          <p style="margin: 0.5rem 0 0;">Vue.js</p>
        </div>
      </div>
      <br>
      <p>
        <strong>Porém, Nosso foco principal será:</strong>
      </p>
      <ul>
        <li><strong><i class="fa-brands fa-html5" style="color: #e34c26;"></i> HTML:</strong> Estrutura o conteúdo (ossos do corpo)</li>
        <li><strong><i class="fa-brands fa-css3-alt" style="color: #1572b6;"></i> CSS:</strong> Define aparência e layout (roupas e maquiagem)</li>
        <li><strong><i class="fa-brands fa-js" style="color: #f7df1e;"></i> JavaScript:</strong> Adiciona interatividade (movimentos e ações)</li>
      </ul>
      <br>
      <p>
        <strong>Back-end (Parte Oculta):</strong> Servidores, bancos de dados, lógica de negócio que roda nos servidores.
      </p>
      <p style="font-size: 1.05em;">
        <strong>Principais linguagens em Back-end:</strong>
      </p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin: 1rem 0; font-size: 1rem;">
        <div style="text-align: center;">
          <i class="fa-brands fa-python" style="font-size: 2.5rem; color: #3776ab;"></i>
          <p style="margin: 0.5rem 0 0;">Python</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-node-js" style="font-size: 2.5rem; color: #68a063;"></i>
          <p style="margin: 0.5rem 0 0;">Node.js</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-java" style="font-size: 2.5rem; color: #007396;"></i>
          <p style="margin: 0.5rem 0 0;">Java</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-brands fa-php" style="font-size: 2.5rem; color: #777bb4;"></i>
          <p style="margin: 0.5rem 0 0;">PHP</p>
        </div>
        <div style="text-align: center;">
          <i class="fa-solid fa-database" style="font-size: 2.5rem; color: #336791;"></i>
          <p style="margin: 0.5rem 0 0;">SQL</p>
        </div>
      </div>
      <h3>Como um Site Funciona</h3>
      <p>
        Quando você digita um endereço no navegador:
      </p>
      <br>
      <ol>
        <li>O navegador faz uma requisição para o servidor</li>
        <li>O servidor envia arquivos HTML, CSS e JS</li>
        <li>O navegador "monta" a página usando essas tecnologias</li>
        <li>JavaScript permite interações dinâmicas</li>
      </ol>
      <h3>Por que JavaScript é Essencial para Estágio?</h3>
      <p>
        JavaScript é a linguagem mais popular do mundo (segundo Stack Overflow Survey). É usada em praticamente todos os sites modernos e é obrigatória para vagas de front-end.
      </p>

       <h3>Paradigmas de Programação</h3>
        <p>
        Existem diferentes estilos ou "paradigmas" de programação, que são abordagens para organizar e escrever código. Cada um tem suas vantagens e é adequado para diferentes tipos de problemas.
      </p>
       <img src="imagens/parad.png" alt="Paradigmas de Programação" style="max-width: 100%; height: auto; margin: 1rem 0;">
     
      <br>
      <h4>Programação Procedural</h4>
      <p>
        Foca em procedimentos ou funções que operam sobre dados. O código é organizado em sequências de passos, como uma receita. Linguagens como C e Pascal seguem esse paradigma. É simples e direto, mas pode se tornar complexo em projetos grandes.
      </p>
      <br>
      <h4>Programação Orientada a Objetos (POO)</h4>
      <p>
        Organiza o código em "objetos" que representam entidades do mundo real, com propriedades (dados) e métodos (ações). Permite modelar sistemas complexos de forma intuitiva, promovendo reutilização e manutenção. JavaScript suporta POO através de protótipos ou classes (ES6+). É amplamente usado em aplicações modernas.
      </p>
      <br>
      <h4>Programação Funcional</h4>
      <p>
        Trata computação como avaliação de funções matemáticas, evitando mudanças de estado e efeitos colaterais. Usa conceitos como imutabilidade e funções de primeira classe. Linguagens como Haskell e Lisp são funcionais, mas JavaScript também suporta elementos funcionais.
      </p>
      <br>
      <h4>Outros Paradigmas</h4>
      <br>
      <ul>
        <li><strong>Programação Estruturada:</strong> Baseada em estruturas de controle (sequência, seleção, repetição), evitando goto.</li>
        <li><strong>Programação Lógica:</strong> Foca em regras e fatos, como em Prolog, usado em IA.</li>
        <li><strong>Programação Reativa:</strong> Responde a mudanças de estado ou eventos, comum em interfaces e sistemas em tempo real.</li>
      </ul>
      <br>
      <p>
        Nosso curso foca em conceitos fundamentais aplicáveis a qualquer paradigma, mas introduziremos POO através de JavaScript, já que é essencial para desenvolvimento web moderno.
      </p>
      <h3>Os 4 Pilares da Programação Orientada a Objetos</h3>
      <p>
        Os 4 pilares da programação geralmente se referem à Programação Orientada a Objetos (POO), que são essenciais para organizar, reutilizar e gerenciar código de forma eficiente, permitindo representar entidades do mundo real em software.
      </p>
      <img src="imagens/pilares.jpg" alt="Pilares da POO" style="max-width: 100%; height: auto; margin: 1rem 0;">
      <br>
      <h4>1. Abstração</h4>
      <p>
        Capacidade de focar nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes. É como ver um carro como um veículo de transporte, sem se preocupar com como o motor funciona internamente.
      </p>
      <br>
      <h4>2. Encapsulamento</h4>
      <p>
        Proteção dos dados internos de um objeto, expondo apenas o necessário através de métodos públicos. Ajuda a manter a integridade do código e facilita mudanças futuras.
      </p>
      <br>
      <h4>3. Herança</h4>
      <p>
        Permite que uma classe herde propriedades e métodos de outra, promovendo reutilização de código. Por exemplo, um "Carro" pode herdar de "Veículo".
      </p>
      <br>
      <h4>4. Polimorfismo</h4>
      <p>
        Capacidade de um objeto se comportar de diferentes formas dependendo do contexto. Permite que métodos com o mesmo nome tenham implementações diferentes em classes derivadas.
      </p>
      <br>
      <p>
        Embora nosso foco seja JavaScript (que suporta POO), esses conceitos são universais e fundamentais para qualquer linguagem de programação moderna.
      </p>
      <h3>Exemplo Prático: Algoritmo Simples</h3>
      <img src="imagens/pensar.jpg" alt="Exemplo de Algoritmo" style="max-width: 20%; height: auto; margin: 1rem 0;">
      <p>
        <strong>Problema:</strong> Fazer um sanduíche
      </p>
      <p>
        <strong>Algoritmo:</strong>
      </p>
      <br>
      <ol>
        <li>Verificar se há ingredientes (pão, queijo, presunto)</li>
        <li>Se sim: pegar 2 fatias de pão</li>
        <li>Colocar queijo e presunto entre as fatias</li>
        <li>Fechar o sanduíche</li>
        <li>Se não: ir ao mercado comprar ingredientes</li>
      </ol>
      <p>
        Este é um algoritmo com estrutura condicional (if/else) - conceito fundamental em programação.
      </p>
      <h3>Exercício Prático</h3>
      <p>
        Escolha uma atividade cotidiana (escovar dentes, fazer café) e escreva os passos sequenciais. Identifique onde há decisões (condicionais) e repetições (loops).
      </p>
      <h3>Dica Importante</h3>
      <p>
        Programação é como aprender um idioma: quanto mais você pratica, melhor fica. Não se preocupe em entender tudo agora - vamos construir conhecimento passo a passo.
      </p>
     
    `,

    3: `
      <h2>HTML</h2>
      <p>
        HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar conteúdo na web. É o esqueleto de qualquer página e é obrigatório saber HTML para qualquer vaga de desenvolvimento web.
      </p>
      <h3>O que é HTML?</h3>
      <p>
        HTML não é uma linguagem de programação, mas uma linguagem de marcação que define a estrutura e significado do conteúdo web. Foi criado por Tim Berners-Lee em 1991.
      </p>
      <h3>Estrutura Básica de um Documento HTML</h3>
      <p>
        Todo documento HTML deve começar com uma declaração DOCTYPE e ter as tags html, head e body.
      </p>
      <p>A estrutura básica de um documento HTML é o alicerce de qualquer página web. O DOCTYPE declara a versão do HTML (aqui HTML5), garantindo que o navegador interprete corretamente. A tag &lt;html&gt; envolve tudo, com atributo lang para acessibilidade (ex.: pt-BR para português brasileiro). O &lt;head&gt; contém metadados invisíveis, como charset (UTF-8 para suportar acentos), viewport (para responsividade móvel) e title (título da aba). O &lt;body&gt; é onde o conteúdo visível vai, com elementos como headings (&lt;h1&gt;) e parágrafos (&lt;p&gt;). Essa estrutura é obrigatória e padronizada para todos os sites.</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Meu Primeiro Site&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Olá, Mundo!&lt;/h1&gt;
  &lt;p&gt;Este é meu primeiro site.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <img src="imagens/olamundo1.png" alt="Estrutura HTML" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <h3>Elementos HTML Essenciais</h3>
      <p>1. <code>&lt;h1&gt; a &lt;h6&gt;</code>: Títulos (h1 é o mais importante para SEO)</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;h1&gt;Bem-vindo ao meu site&lt;/h1&gt;</code></pre>
      <img src="imagens/h1bemvindo.png" alt="Exemplo de Título" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>2. <code>&lt;p&gt;</code>: Parágrafos de texto</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;p&gt;Este é um parágrafo com conteúdo de texto.&lt;/p&gt;</code></pre>
      <img src="imagens/p.png" alt="Exemplo de Parágrafo" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>3.<code>&lt;a href="url"&gt;</code>: Links para outras páginas</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;a href="https://google.com"&gt;Clique aqui&lt;/a&gt;</code></pre>
      <iframe src="https://drive.google.com/file/d/19F2lGtj8X074q-WnzJGZtml3pYiBA2bt/preview" width="640" height="480" style="margin: 1rem 0;" allow="autoplay" sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
      <p>4.<code>&lt;img src="imagem.jpg" alt="descrição"&gt;</code>: Imagens (alt é obrigatório para acessibilidade)</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;img src="foto.jpg" alt="Foto do perfil"&gt;</code></pre>
      <img src="imagens/fotoperfil.png" alt="Exemplo de Imagem" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>5. <code>&lt;ul&gt; e &lt;li&gt;</code>: Listas não ordenadas</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;ul&gt;&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item 2&lt;/li&gt;&lt;/ul&gt;</code></pre>
      <img src="imagens/ul.png" alt="Exemplo de Lista Não Ordenada" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>6. <code>&lt;ol&gt; e &lt;li&gt;</code>: Listas ordenadas</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;ol&gt;&lt;li&gt;Primeiro&lt;/li&gt;&lt;li&gt;Segundo&lt;/li&gt;&lt;/ol&gt;</code></pre>
      <img src="imagens/li.png" alt="Exemplo de Lista Ordenada" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>7. <code>&lt;div&gt;</code>: Container genérico para agrupar elementos</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;div class="container"&gt;&lt;p&gt;Conteúdo do container&lt;/p&gt;&lt;/div&gt;</code></pre>
      <img src="imagens/div.png" alt="Exemplo de Div" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>8. <code>&lt;span&gt;</code>: Container inline para texto</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;p&gt;Texto normal &lt;span style="color: red;"&gt;texto colorido&lt;/span&gt;&lt;/p&gt;</code></pre>
      <img src="imagens/span.png" alt="Exemplo de Span" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <h3>HTML Semântico</h3>
      <p>
        Use elementos semânticos para melhor acessibilidade, SEO e manutenibilidade:
      </p>
      <p>9. <code>&lt;header&gt;</code>: Cabeçalho da página</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;header&gt;&lt;h1&gt;Meu Site&lt;/h1&gt;&lt;/header&gt;</code></pre>
      <img src="imagens/meusite.png" alt="Exemplo de Header" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>10. <code>&lt;nav&gt;</code>: Navegação</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;nav&gt;&lt;a href="/"&gt;Início&lt;/a&gt;&lt;a href="/sobre"&gt;Sobre&lt;/a&gt;&lt;/nav&gt;</code></pre>
      <img src="imagens/nav.png" alt="Exemplo de Nav" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>11. <code>&lt;main&gt;</code>: Conteúdo principal</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;main&gt;&lt;h2&gt;Conteúdo Principal&lt;/h2&gt;&lt;p&gt;...&lt;/p&gt;&lt;/main&gt;</code></pre>
      <img src="imagens/main.png" alt="Exemplo de Main" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>12. <code>&lt;section&gt;</code>: Seções do conteúdo</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;section&gt;&lt;h2&gt;Sobre Nós&lt;/h2&gt;&lt;p&gt;...&lt;/p&gt;&lt;/section&gt;</code></pre>
      <img src="imagens/section.png" alt="Exemplo de Section" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>13. <code>&lt;article&gt;</code>: Conteúdo independente</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;article&gt;&lt;h2&gt;Meu Artigo&lt;/h2&gt;&lt;p&gt;Conteúdo...&lt;/p&gt;&lt;/article&gt;</code></pre>
      <img src="imagens/article.png" alt="Exemplo de Article" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>14. <code>&lt;aside&gt;</code>: Conteúdo relacionado</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;aside&gt;&lt;h3&gt;Links Úteis&lt;/h3&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/aside&gt;</code></pre>
      <img src="imagens/aside.png" alt="Exemplo de Aside" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <p>15. <code>&lt;footer&gt;</code>: Rodapé</p>
      <p><strong>Exemplo:</strong></p>
      <pre><code>&lt;footer&gt;&lt;p&gt;&copy; 2026 Meu Site&lt;/p&gt;&lt;/footer&gt;</code></pre>
      <img src="imagens/footer.png" alt="Exemplo de Footer" style="max-width: 40%; height: auto; margin: 1rem 0;"> 
      <h3 style="color: blue;"> Ao final a página fica dessa forma sem estilização e totalmente genérico, e é nessa parte que entra o css para "enfeitar" tudo isso e deixa com estilo e cores.</h3>
      <img src="imagens/aofinal.png" alt="HTML Semântico" style="max-width: 100%; height: auto; margin: 1rem 0;">
     
      

      <h3>Formulários HTML</h3>
      <p>
        Formulários são essenciais para interação com usuários:
      </p>
      <p>Formulários HTML permitem coletar dados dos usuários, como em cadastros ou pesquisas. A tag &lt;form&gt; agrupa os campos, com atributos action (URL para envio) e method (GET para URLs visíveis, POST para dados seguros). &lt;label&gt; associa texto descritivo a campos via for/id, melhorando acessibilidade. &lt;input&gt; cria campos variados: type="text" para texto, type="email" para validação automática, required para obrigatoriedade. &lt;button type="submit"&gt; envia o formulário. Formulários são fundamentais para interatividade web, integrando com back-end para processamento.</p>
      <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="nome"&gt;Nome:&lt;/label&gt;
  &lt;input type="text" id="nome" name="nome" required&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
<img src="imagens/form.png" alt="Exemplo de Formulário" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <h3>Atributos Importantes</h3>
      <ul>
        <li><code>id</code>: Identificador único do elemento</li>
        <li><code>class</code>: Classe para estilização CSS</li>
        <li><code>src</code>: Caminho para imagens/mídias</li>
        <li><code>href</code>: URL para links</li>
        <li><code>alt</code>: Texto alternativo para imagens</li>
        <li><code>title</code>: Tooltip ao passar mouse</li>
      </ul>
      <h3>Tabelas HTML</h3>
      <p>Tabelas organizam dados em linhas e colunas, ideais para exibir informações tabulares como listas de produtos ou horários. A tag &lt;table&gt; envolve tudo. &lt;thead&gt; define cabeçalhos (&lt;th&gt;), &lt;tbody&gt; o corpo com dados (&lt;td&gt;). Cada linha é &lt;tr&gt;. Embora menos usadas para layout (devido a CSS), tabelas são essenciais para dados estruturados, com suporte a acessibilidade e semântica clara.</p>
      <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nome&lt;/th&gt;
      &lt;th&gt;Idade&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;João&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<img src="imagens/table.png" alt="Exemplo de Tabela" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <h3>Exercício Prático</h3>
      <p>
        Crie um arquivo HTML completo com:
      </p>
      <ul>
        <li>Uma página sobre você (nome, foto, bio)</li>
        <li>Links para suas redes sociais</li>
        <li>Uma lista de suas habilidades</li>
        <li>Use elementos semânticos apropriados</li>
      </ul>
      <p>
        <strong>Dica:</strong> Use a extensão Live Server no VS Code para visualizar seu HTML em tempo real.
      </p>
      <img src="imagens/liveserver.png" alt="Exercício Prático HTML" style="max-width: 40%; height: auto; margin: 1rem 0;">
      <h3>Recursos Adicionais</h3>
      <ul>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">MDN Web Docs - HTML</a></li>
        <li><a href="https://www.w3schools.com/html/" target="_blank">W3Schools - HTML Tutorial</a></li>
      </ul>
      <h3>Caso queira saber mais profundamente sobre HTML recomendo assistir esse vídeo abaixo:</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Fhy-5CtVkiM?si=LKc-r0EZ70J-4-DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Recursos para Aprender Mais</h3>
      <ul>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">MDN Web Docs - HTML</a></li>
        <li><a href="https://www.w3schools.com/html/" target="_blank">W3Schools - HTML Tutorial</a></li>
      </ul>

    `,

    4: `
      <h2>CSS Profissional</h2>
      <p>
        CSS (Cascading Style Sheets) controla a apresentação visual dos elementos HTML. Para se destacar em entrevistas, você precisa mostrar que sabe escrever CSS organizado, responsivo e moderno.
      </p>
      <h3>Como Conectar CSS ao HTML</h3>
      <ul>
        <li><strong>Externo (Recomendado):</strong> <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></li>
        <li><strong>Interno:</strong> <code>&lt;style&gt;...&lt;/style&gt;</code> dentro do head</li>
        <li><strong>Inline:</strong> <code>&lt;h1 style="color: blue;"&gt;</code> (evite usar)</li>
      </ul>
      <h3>Seletores CSS</h3>
      <p>
        Seletores determinam quais elementos serão estilizados:
      </p>
      <ul>
        <li><code>elemento</code>: Seleciona todos os elementos (ex: p, h1)</li>
        <li><code>.classe</code>: Seleciona elementos com classe específica</li>
        <li><code>#id</code>: Seleciona elemento com ID específico</li>
        <li><code>elemento.classe</code>: Combinação de elemento e classe</li>
        <li><code>elemento elemento</code>: Descendente (espaço)</li>
        <li><code>elemento > elemento</code>: Filho direto</li>
        <li><code>elemento + elemento</code>: Irmão adjacente</li>
        <li><code>[atributo]</code>: Seleciona por atributo</li>
        <li><code>:pseudo-classe</code>: Estados especiais (:hover, :focus)</li>
        <li><code>::pseudo-elemento</code>: Partes do elemento (::before, ::after)</li>
      </ul>
      <p>Abaixo há um vídeo explicando os seletores de forma prática:</p>
      <iframe src="https://drive.google.com/file/d/1eo6-wxOEFlbQ4QeI67CtMXe_PKywCcK2/preview" width="100%" height="600" style="margin: 1rem 0;" allow="autoplay" sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
      <h3>Box Model</h3>
      <p>
        Todo elemento HTML é uma caixa retangular composta por:
      </p>
      <img src="imagens/box_model.png" alt="Box Model" style="max-width: 50%; height: auto; margin: 1rem 0;">
      <ul>
        <li><strong>Content:</strong> Conteúdo do elemento</li>
        <li><strong>Padding:</strong> Espaço interno entre content e border</li>
        <li><strong>Border:</strong> Borda do elemento</li>
        <li><strong>Margin:</strong> Espaço externo entre elementos</li>
      </ul>
      <p>O Box Model é o conceito fundamental que explica como os elementos HTML ocupam espaço na página. Cada elemento é tratado como uma caixa com camadas: content (área do texto/imagem), padding (espaço interno, como enchimento), border (linha ao redor) e margin (espaço externo). Propriedades como width/height afetam apenas o content; para tamanho total, considere todas as camadas. Entender isso evita problemas de layout, como elementos "quebrados" por margens inesperadas.</p>
      <pre><code>.box {
  width: 200px;
  padding: 20px;
  border: 2px solid #000;
  margin: 10px;
}</code></pre>
      <h3>Propriedades Essenciais</h3>
      <p>Propriedades CSS essenciais incluem layout (max-width, margin auto para centralizar), tipografia (font-family, font-size, line-height para legibilidade), cores (background-color, color) e espaçamento (padding, margin). Elas formam a base para estilos atraentes e funcionais, garantindo hierarquia visual e usabilidade.</p>
      <pre><code>/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Tipografia */
body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Cores */
.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
}

/* Espaçamento */
.section {
  padding: 2rem 0;
  margin: 2rem 0;
}</code></pre>
      <h3>Flexbox para Layouts Modernos</h3>
      <p>
        Flexbox é essencial para layouts responsivos:
      </p>
      <p>Flexbox (Flexible Box Layout) é um módulo CSS para criar layouts flexíveis e responsivos, distribuindo espaço entre itens em um container. display: flex ativa o modo; justify-content alinha horizontalmente (ex.: space-between para espaçar igualmente); align-items alinha verticalmente (ex.: center); flex-wrap permite quebra de linha. É ideal para navegações, cartões e layouts de coluna, substituindo floats antigos e facilitando designs móveis.</p>
      <pre><code>.flex-container {
  display: flex;
  justify-content: space-between; /* alinhamento horizontal */
  align-items: center; /* alinhamento vertical */
  flex-wrap: wrap; /* quebra linha se necessário */
}

.flex-item {
  flex: 1; /* ocupa espaço disponível */
  min-width: 200px;
}</code></pre>
      <h3>CSS Grid para Layouts Complexos</h3>
      <p>CSS Grid cria layouts bidimensionais (linhas e colunas) para designs complexos, como dashboards ou galerias. display: grid ativa; grid-template-columns define colunas (ex.: repeat(auto-fit, minmax(300px, 1fr)) para responsividade); gap adiciona espaçamento. É poderoso para estruturas simétricas, complementando Flexbox para layouts unidimensionais.</p>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}</code></pre>
      <h3>Responsividade com Media Queries</h3>
      <p>Media queries ajustam estilos com base no dispositivo, usando @media com condições como min-width. Abordagem mobile-first começa com estilos base para telas pequenas, adicionando regras para telas maiores. Essencial para sites acessíveis em desktop, tablet e mobile, prevenindo layouts quebrados.</p>
      <pre><code>/* Mobile first */
.container {
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}</code></pre>
      <h3>Animações e Transições</h3>
      <p>Animações e transições adicionam interatividade suave. Transições (transition) animam mudanças de propriedades como background-color em hover. Keyframes (@keyframes) definem animações complexas, como fadeIn. Elas melhoram UX, mas use com moderação para evitar distração, focando em feedback visual.</p>
      <pre><code>.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}</code></pre>
      <h3>Exercício Prático</h3>
      <p>
        Estilize o HTML que você criou na lição anterior:
      </p>
      <ul>
        <li>Adicione cores e fontes modernas</li>
        <li>Crie um layout responsivo com Flexbox</li>
        <li>Adicione hover effects nos links</li>
        <li>Certifique-se que fica bem em mobile</li>
      </ul>
      <h3>Melhores Práticas</h3>
      <ul>
        <li>Use classes descritivas (evite IDs para CSS)</li>
        <li>Mantenha especificidade baixa</li>
        <li>Use variáveis CSS para cores e espaçamentos</li>
        <li>Organize CSS em seções lógicas</li>
        <li>Teste em diferentes navegadores</li>
      </ul>
      <h3>Caso queira saber mais profundamente sobre CSS recomendo assistir esse vídeo abaixo:</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AB35iSr1YyA?si=Vroa4ozyAMpamJHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Recursos para Aprender Mais</h3>
      <ul>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">MDN Web Docs - CSS</a></li>
        <li><a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a></li>
        <li><a href="https://www.w3schools.com/css/" target="_blank">W3Schools - CSS Tutorial</a></li>
      </ul>
    `,

    5: `
      <h2>JavaScript</h2>
      <p>
        JavaScript é a linguagem de programação que dá vida aos sites. É onde você mostra seu raciocínio lógico - perfeito para impressionar em entrevistas de estágio.
      </p>
      <h3>O que é JavaScript?</h3>
      <p>
        JavaScript é uma linguagem de programação interpretada, orientada a objetos e baseada em protótipos. Foi criada por Brendan Eich em 1995 e é padronizada como ECMAScript.
      </p>
      <h3>Como Adicionar JavaScript</h3>
      <ul>
        <li><strong>Externo (Recomendado):</strong> <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code></li>
        <li><strong>Interno:</strong> <code>&lt;script&gt;...&lt;/script&gt;</code> no final do body</li>
        <li><strong>Inline:</strong> <code>&lt;button onclick="minhaFuncao()"&gt;</code> (evite usar)</li>
      </ul>
      <h3>Variáveis e Tipos de Dados</h3>
      <p>Variáveis são como caixas onde armazenamos informações que podem mudar durante a execução do programa. Elas permitem que o código seja dinâmico e reutilizável. Em JavaScript, usamos <code>let</code> para declarar variáveis que podem ter seu valor alterado posteriormente (escopo de bloco), e <code>const</code> para constantes que permanecem inalteradas (devem ser inicializadas na declaração). Os tipos de dados primitivos incluem: strings (sequências de caracteres, como "Olá Mundo"), numbers (números inteiros ou decimais, como 42 ou 3.14), booleans (valores lógicos true ou false), undefined (quando uma variável é declarada mas não inicializada), null (representa a ausência intencional de valor) e symbol/bigint para casos avançados. Entender tipos de dados é fundamental para manipular informações corretamente e evitar erros.</p>
      <pre><code>// Declaração de variáveis
let nome = "João Silva"; // string
const idade = 25; // number
let estudante = true; // boolean
let notas; // undefined
let endereco = null; // null

// Constantes não podem ser reatribuídas
const PI = 3.14159;

// let permite reatribuição
nome = "Maria Silva";</code></pre>
      <h3>Operadores</h3>
      <p>Operadores são símbolos especiais que realizam operações em valores ou variáveis, permitindo cálculos, comparações e combinações lógicas. Em JavaScript, os operadores aritméticos (+ para soma, - para subtração, * para multiplicação, / para divisão, % para resto da divisão) são usados para matemática básica. Operadores de comparação (== para igualdade solta, === para igualdade estrita considerando tipo, != e !== para desigualdade, > maior, < menor, >= maior ou igual, <= menor ou igual) verificam relações entre valores. Operadores lógicos (&& para AND - ambos verdadeiros, || para OR - pelo menos um verdadeiro, ! para NOT - inverte o valor) combinam condições booleanas. Eles são essenciais para tomada de decisões e validações no código.</p>
      <pre><code>// Aritméticos
let soma = 5 + 3; // 8
let subtracao = 10 - 4; // 6
let multiplicacao = 3 * 4; // 12
let divisao = 15 / 3; // 5
let resto = 17 % 5; // 2

// Comparação
let igual = 5 == "5"; // true (compara valor)
let estritamenteIgual = 5 === "5"; // false (compara valor e tipo)
let maior = 10 > 5; // true
let menorIgual = 5 <= 5; // true

// Lógicos
let e = true && false; // false
let ou = true || false; // true
let nao = !true; // false</code></pre>
      <h3>Arrays (Vetores)</h3>
      <p>Arrays, também conhecidos como vetores ou listas, são estruturas de dados que permitem armazenar múltiplos valores em uma única variável, organizados por índices numéricos começando do 0. Eles podem conter diferentes tipos de dados misturados e são dinâmicos, ou seja, seu tamanho pode mudar. Métodos comuns incluem push() (adiciona elemento no final), pop() (remove do final), shift() (remove do início), unshift() (adiciona no início), e length (propriedade que retorna o número de elementos). Arrays são ideais para listas de itens, como produtos em um carrinho de compras ou nomes de usuários, facilitando iterações e manipulações eficientes de dados.</p>
      <pre><code>// Criando arrays
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misto = ["texto", 42, true];

// Acessando elementos
console.log(frutas[0]); // "maçã"
console.log(frutas.length); // 3

// Métodos comuns
frutas.push("uva"); // adiciona no final
frutas.pop(); // remove do final
frutas.shift(); // remove do início
frutas.unshift("pera"); // adiciona no início</code></pre>
      <h3>Objetos</h3>
      <p>Objetos são estruturas de dados complexas que agrupam propriedades (como chaves-valor) e métodos (funções associadas ao objeto), permitindo representar entidades do mundo real no código, como um usuário com nome, idade e ações. Propriedades são acessadas via notação de ponto (objeto.propriedade) ou colchetes (objeto["propriedade"]), e podem ser adicionadas ou modificadas dinamicamente. Métodos são funções definidas dentro do objeto, acessíveis via this. Objetos são flexíveis e não ordenados, tornando-os perfeitos para dados estruturados, como configurações de aplicativo ou perfis de usuário, e formam a base da programação orientada a objetos em JavaScript.</p>
      <pre><code>// Criando objetos
let pessoa = {
  nome: "João",
  idade: 25,
  estudante: true,
  habilidades: ["HTML", "CSS", "JS"]
};

// Acessando propriedades
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 25

// Adicionando propriedades
pessoa.profissao = "Desenvolvedor";

// Métodos
pessoa.apresentar = function() {
  return \`Olá, sou \${this.nome} e tenho \${this.idade} anos.\`;
};</code></pre>
      <h3>Funções</h3>
      <p>Funções são blocos de código reutilizáveis que executam tarefas específicas, permitindo modularizar o programa e evitar repetição. Elas podem receber parâmetros (valores de entrada) e retornar resultados via return. Em JavaScript, funções podem ser declaradas com function (hoisting), como expressões (atribuídas a variáveis), arrow functions (=>, mais concisas, sem this próprio) ou anônimas. Elas promovem a reutilização, facilitam testes e debugging, e são essenciais para organizar lógica complexa, como calcular totais em um carrinho ou validar formulários. Parâmetros podem ter valores padrão, e funções podem ser passadas como argumentos para outras funções (callbacks).</p>
      <pre><code>// Declaração de função
function saudacao(nome) {
  return \`Olá, \${nome}!\`;
}

// Arrow function (ES6+)
const saudacaoArrow = (nome) => \`Olá, \${nome}!\`;

// Função anônima
const dobro = function(x) {
  return x * 2;
};

// Chamando funções
console.log(saudacao("Maria")); // "Olá, Maria!"
console.log(dobro(5)); // 10</code></pre>
      <h3>Condicionais</h3>
      <p>Condicionais permitem que o programa execute diferentes blocos de código com base em condições booleanas, controlando o fluxo de execução. Usamos if para verificar se uma condição é verdadeira, else if para condições adicionais (avaliadas em sequência), e else para o caso padrão. O operador ternário (? :) oferece uma sintaxe compacta para decisões simples (condição ? valor_se_verdadeiro : valor_se_falso). Condicionais são cruciais para lógica dinâmica, como verificar se um usuário está logado antes de mostrar conteúdo, ou validar entradas de formulário, garantindo que o programa responda adequadamente a diferentes cenários.</p>
      <pre><code>let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 16) {
  console.log("Pode votar");
} else {
  console.log("Menor de idade");
}

// Operador ternário
let status = idade >= 18 ? "Adulto" : "Menor";
console.log(status);</code></pre>
      <h3>Loops (Laços de Repetição)</h3>
      <p>Loops, ou laços de repetição, executam um bloco de código múltiplas vezes até que uma condição seja atendida, automatizando tarefas repetitivas. O loop for é ideal quando sabemos o número exato de iterações (ex.: for(let i = 0; i < 5; i++)), controlando inicialização, condição e incremento. O for...of itera diretamente sobre elementos de arrays ou iteráveis (ex.: for(let fruta of frutas)), simplificando acesso a valores. O for...in percorre propriedades de objetos (ex.: for(let prop in objeto)), útil para inspeção. O while repete enquanto uma condição for verdadeira (ex.: while(contador < 10)), adequado para repetições baseadas em estado variável. Loops evitam código duplicado, como processar listas de usuários ou gerar elementos dinâmicos, mas cuidado com loops infinitos!</p>
      <pre><code>// For loop
for (let i = 0; i < 5; i++) {
  console.log(\`Número: \${i}\`);
}

// For...of (para arrays)
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}

// For...in (para objetos)
let pessoa = {nome: "João", idade: 25};
for (let propriedade in pessoa) {
  console.log(\`\${propriedade}: \${pessoa[propriedade]}\`);
}

// While loop
let contador = 0;
while (contador < 3) {
  console.log(\`Contador: \${contador}\`);
  contador++;
}</code></pre>
      <h3>DOM Manipulation</h3>
      <p>
        O DOM (Document Object Model) permite interagir com elementos HTML:
      </p>
      <pre><code>// Selecionando elementos
const titulo = document.getElementById("titulo");
const paragrafos = document.querySelectorAll("p");
const botao = document.querySelector(".botao");

// Modificando conteúdo
titulo.textContent = "Novo Título";
titulo.innerHTML = "&lt;strong&gt;Novo Título&lt;/strong&gt;";

// Modificando estilos
titulo.style.color = "blue";
titulo.style.fontSize = "24px";

// Adicionando/removendo classes
titulo.classList.add("destaque");
titulo.classList.remove("destaque");
titulo.classList.toggle("ativo");

// Eventos
botao.addEventListener("click", function() {
  alert("Botão clicado!");
});

// Criando elementos
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo";
document.body.appendChild(novoParagrafo);</code></pre>
      <h3>Exercício Prático</h3>
      <p>
        Adicione JavaScript ao seu site pessoal:
      </p>
      <ul>
        <li>Um botão que muda a cor de fundo da página</li>
        <li>Um contador de cliques</li>
        <li>Validação de formulário</li>
        <li>Toggle para mostrar/ocultar conteúdo</li>
      </ul>
      <h3>Caso queira saber mais profundamente sobre JavaScript recomendo assistir esse vídeo abaixo:</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Z7mnxUI4u00?si=X2vrHj8sW3ew4H2a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Recursos para Aprender Mais</h3>
      <ul>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">MDN Web Docs - JavaScript</a></li>
        <li><a href="https://javascript.info/" target="_blank">JavaScript.info</a></li>
        <li><a href="https://www.w3schools.com/js/" target="_blank">W3Schools - JavaScript Tutorial</a></li>
      </ul>
    `,

     15: `
      <h2>Python</h2>
      <p>
        Python é uma linguagem de programação versátil, fácil de aprender e amplamente usada em desenvolvimento web, ciência de dados, automação e mais. Nesta lição, vamos cobrir os fundamentos essenciais.
      </p>
      <h3>Instalação e Configuração</h3>
      <p>
        Baixe Python do site oficial (python.org). Instale e verifique com <code>python --version</code> no terminal.
      </p>
      <h3>Sintaxe Básica</h3>
      <p>
        A sintaxe básica de Python é limpa e legível. Comentários começam com #, print() exibe mensagens, variáveis são criadas sem declaração explícita de tipo, e tipos de dados incluem números, strings, booleanos, listas (arrays dinâmicos) e dicionários (pares chave-valor). Python é case-sensitive e usa indentação para definir blocos de código.
      </p>
      <pre><code># Comentário

print("Olá, Mundo!")

# Variáveis

nome = "João"
idade = 25
altura = 1.75

# Tipos de dados

inteiro = 10
flutuante = 3.14
string = "texto"
booleano = True
lista = [1, 2, 3]
dicionario = {"chave": "valor"}
</code></pre>
      <h3>Operadores</h3>
      <p>
        Operadores em Python realizam operações em valores. Aritméticos (+, -, *, /, %, **) fazem cálculos matemáticos. De comparação (==, !=, >, <, >=, <=) verificam relações entre valores, retornando True ou False. Lógicos (and, or, not) combinam condições booleanas, essenciais para decisões e validações.
      </p>
      <pre><code># Aritméticos

soma = 5 + 3
subtracao = 10 - 4
multiplicacao = 3 * 4
divisao = 15 / 3
resto = 17 % 5
potencia = 2 ** 3

# Comparação

igual = 5 == 5
diferente = 5 != 3
maior = 10 > 5
menor_igual = 5 <= 5

# Lógicos

e = True and False
ou = True or False
nao = not True
</code></pre>
      <h3>Estruturas de Controle</h3>
      <p>
        Estruturas de controle dirigem o fluxo do programa. Condicionais (if/elif/else) executam blocos de código baseados em condições. O operador ternário é uma forma compacta de if-else. Loops repetem ações: for itera sobre sequências ou intervalos, while repete enquanto uma condição for verdadeira. Elas permitem programas dinâmicos e eficientes.
      </p>
      <h4>Condicionais</h4>
      <pre><code>idade = 18

if idade >= 18:
    print("Maior de idade")
elif idade >= 16:
    print("Pode votar")
else:
    print("Menor de idade")

# Operador ternário

status = "Adulto" if idade >= 18 else "Menor"
</code></pre>
      <h4>Loops</h4>
      <p>
        Loops executam blocos de código repetidamente. O loop for é usado para iterar sobre listas, strings ou intervalos (com range()). O loop while continua enquanto uma condição for verdadeira. São essenciais para processar dados em lote, como listas de usuários ou cálculos iterativos.
      </p>
      <pre><code># For loop

for i in range(5):
    print(f"Número: {i}")

# For com lista

frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(fruta)

# While loop

contador = 0
while contador < 3:
    print(f"Contador: {contador}")
    contador += 1
</code></pre>
      <h3>Funções</h3>
      <p>
        Funções são blocos de código reutilizáveis que executam tarefas específicas. Definidas com def, podem receber parâmetros e retornar valores. Parâmetros padrão permitem flexibilidade. Funções lambda são anônimas e concisas, ideais para operações simples. Elas promovem modularidade, facilitam testes e evitam código duplicado.
      </p>
      <pre><code># Definindo função

def saudacao(nome):
    return f"Olá, {nome}!"

# Chamando

resultado = saudacao("Maria")
print(resultado)

# Função com parâmetros padrão

def potencia(base, expoente=2):
    return base ** expoente

print(potencia(3))  # 9
print(potencia(3, 3))  # 27

# Funções lambda

dobro = lambda x: x * 2
print(dobro(5))  # 10
</code></pre>
      <h3>Listas e Dicionários</h3>
      <p>
        Listas são estruturas de dados mutáveis que armazenam coleções ordenadas de itens. Criadas com colchetes [], suportam tipos mistos. Métodos como append(), insert(), remove() e pop() permitem manipulação. Indexação começa em 0, com suporte a slicing. Dicionários são estruturas chave-valor, criadas com chaves {}, onde cada valor é associado a uma chave única. Permitem acesso rápido por chave, são mutáveis e ideais para dados estruturados como perfis de usuário.
      </p>
      <pre><code># Listas

numeros = [1, 2, 3, 4, 5]
print(numeros[0])  # 1
numeros.append(6)
numeros.remove(3)
print(len(numeros))

# Dicionários

pessoa = {
    "nome": "João",
    "idade": 25,
    "cidade": "São Paulo"
}
print(pessoa["nome"])
pessoa["profissao"] = "Desenvolvedor"
for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")
</code></pre>
      <h3>Tratamento de Erros</h3>
      <p>
        O tratamento de erros em Python usa try-except para capturar exceções. O bloco try contém código que pode falhar, except trata tipos específicos de erros, e finally executa sempre. Isso previne crashes, permite recuperação graciosa e melhora robustez do programa. Exceções comuns incluem ValueError (conversão inválida) e ZeroDivisionError (divisão por zero).
      </p>
      <pre><code>try:
    numero = int(input("Digite um número: "))
    resultado = 10 / numero
    print(f"Resultado: {resultado}")
except ValueError:
    print("Digite um número válido")
except ZeroDivisionError:
    print("Não é possível dividir por zero")
finally:
    print("Execução finalizada")
</code></pre>
      <h3>Módulos e Bibliotecas</h3>
      <p>
        Módulos organizam código em arquivos separados, importados com import. Bibliotecas externas são instaladas via pip. Isso promove reutilização, evita conflitos de nomes e acelera desenvolvimento. Exemplos incluem math para operações matemáticas e datetime para datas. Bibliotecas como requests facilitam HTTP, expandindo capacidades do Python.
      </p>
      <pre><code># Importando

import math
print(math.sqrt(16))  # 4.0

from datetime import datetime
agora = datetime.now()
print(agora)

# Instalando bibliotecas
# pip install requests
# import requests
# response = requests.get("https://api.github.com")
# print(response.json())
</code></pre>
      <h3>Programação Orientada a Objetos</h3>
      <p>
        A Programação Orientada a Objetos (POO) organiza código em classes e objetos. Classes são moldes com atributos (dados) e métodos (funções). Objetos são instâncias de classes. __init__ é o construtor. Herança permite subclasses herdarem de superclasses, sobrescrevendo métodos. Isso promove reutilização, encapsulamento e modelagem realista de entidades como pessoas ou estudantes.
      </p>
      <pre><code>class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        return f"Olá, sou {self.nome} e tenho {self.idade} anos"

# Criando objeto

pessoa1 = Pessoa("Ana", 30)
print(pessoa1.apresentar())

# Herança

class Estudante(Pessoa):
    def __init__(self, nome, idade, curso):
        super().__init__(nome, idade)
        self.curso = curso

    def apresentar(self):
        return f"Olá, sou {self.nome}, tenho {self.idade} anos e estudo {self.curso}"

estudante1 = Estudante("Carlos", 22, "Engenharia")
print(estudante1.apresentar())
</code></pre>
      <h3>Trabalhando com Arquivos</h3>
      <p>
        Python manipula arquivos com open(), especificando modo ("r" leitura, "w" escrita, "a" append). O contexto with garante fechamento automático, evitando vazamentos. Métodos incluem write() para escrever, read() para ler tudo, e iteração linha por linha. Isso é essencial para persistir dados, logs ou processar arquivos de entrada.
      </p>
      <pre><code># Escrevendo

with open("arquivo.txt", "w") as arquivo:
    arquivo.write("Olá, mundo!\n")
    arquivo.write("Esta é uma linha de teste.")

# Lendo

with open("arquivo.txt", "r") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)

# Linha por linha

with open("arquivo.txt", "r") as arquivo:
    for linha in arquivo:
        print(linha.strip())
</code></pre>
      <h3>Django e Flask: Frameworks Web em Python</h3>
      <p>
        Frameworks web facilitam desenvolvimento de aplicações web. Django é "batteries included", oferecendo ORM, admin, autenticação e segurança prontos. Flask é minimalista, dando liberdade para escolher componentes. Django é ideal para projetos grandes e complexos, Flask para APIs leves ou MVPs. Ambos usam Python e seguem padrões web.
      </p>
      <h4>Instalação</h4>
      <p>
        Instale via pip: pip install django para Django, pip install flask para Flask. Crie projeto com django-admin startproject nome_projeto ou flask --app app.py run.
      </p>
      <h4>Django Básico</h4>
      <pre><code># models.py
from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nome

# views.py
from django.shortcuts import render
from .models import Produto

def lista_produtos(request):
    produtos = Produto.objects.all()
    return render(request, 'produtos.html', {'produtos': produtos})

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('produtos/', views.lista_produtos, name='lista_produtos'),
]
</code></pre>
      <h4>Flask Básico</h4>
      <pre><code>from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/api/produtos')
def api_produtos():
    produtos = [{'nome': 'Produto 1', 'preco': 10.99}]
    return {'produtos': produtos}

if __name__ == '__main__':
    app.run(debug=True)
</code></pre>
      <p>
        Django oferece estrutura completa para aplicações web robustas, enquanto Flask permite flexibilidade máxima. Escolha baseado na complexidade do projeto.
      </p>
      <h3>Exercícios Práticos</h3>
      <ul>
        <li>Crie um programa que calcule a média de uma lista de números</li>
        <li>Faça um jogo de adivinhação onde o computador escolhe um número aleatório</li>
        <li>Crie uma classe para representar um banco, com métodos para depositar e sacar</li>
        <li>Escreva um script que leia um arquivo CSV e calcule estatísticas básicas</li>
      </ul>
      <h3>Próximos Passos</h3>
      <p>
        Python é uma linguagem poderosa. Para avançar:
      </p>
      <ul>
        <li>Aprenda frameworks como Django (web) ou Flask</li>
        <li>Explore bibliotecas de ciência de dados: Pandas, NumPy, Matplotlib</li>
        <li>Pratique em plataformas como LeetCode ou HackerRank</li>
        <li>Contribua para projetos open source</li>
      </ul>
      <h3>Caso queira saber mais profundamente sobre Python, recomendo assistir esse vídeo abaixo:</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4p7axLXXBGU?si=rbk7awIy775_hIAl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Recursos</h3>
      <ul>
        <li><a href="https://www.python.org/" target="_blank">Site oficial do Python</a></li>
        <li><a href="https://docs.python.org/3/" target="_blank">Documentação Python</a></li>
        <li><a href="https://www.w3schools.com/python/" target="_blank">W3Schools Python</a></li>
        <li><a href="https://realpython.com/" target="_blank">Real Python</a></li>
      </ul>
    `,


    8: `
      <h2>Projeto para Portfólio: Lista de Tarefas</h2>
      <p>
        Agora vamos criar um projeto completo! Uma lista de tarefas (Todo List) é perfeita para portfólio - demonstra HTML, CSS e JavaScript funcionando juntos e mostra suas habilidades práticas.
      </p>
      <h3>Por que este projeto?</h3>
      <ul>
        <li>É funcional e útil</li>
        <li>Demonstra CRUD (Create, Read, Update, Delete)</li>
        <li>Mostra interatividade com JavaScript</li>
        <li>É responsivo e moderno</li>
        <li>Impressiona recrutadores</li>
      </ul>
      <h3>Passo 1: Planejamento</h3>
      <p>
        Funcionalidades que vamos implementar:
      </p>
      <ul>
        <li>Adicionar novas tarefas</li>
        <li>Marcar tarefas como concluídas</li>
        <li>Remover tarefas</li>
        <li>Persistir dados no localStorage</li>
        <li>Interface responsiva</li>
        <li>Animações suaves</li>
      </ul>
      <h3>Passo 2: HTML Estrutura</h3>
      <p>A estrutura HTML define o esqueleto da página, organizando os elementos em uma hierarquia semântica. Usamos tags como &lt;div&gt; para containers, &lt;input&gt; para entradas de usuário, &lt;button&gt; para ações, e &lt;ul&gt; para listas. Atributos como id e class permitem identificar e estilizar elementos via CSS e JavaScript. Uma boa estrutura HTML é essencial para acessibilidade e manutenção.</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Lista de Tarefas&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;📝 Lista de Tarefas&lt;/h1&gt;
    &lt;div class="input-group"&gt;
      &lt;input type="text" id="novaTarefa" placeholder="Digite uma nova tarefa..."&gt;
      &lt;button id="adicionar"&gt;+&lt;/button&gt;
    &lt;/div&gt;

    &lt;div class="filtros"&gt;
      &lt;button class="filtro ativo" data-filtro="todas"&gt;TODAS&lt;/button&gt;
      &lt;button class="filtro" data-filtro="pendentes"&gt;PENDENTES&lt;/button&gt;
      &lt;button class="filtro" data-filtro="concluidas"&gt;CONCLUÍDAS&lt;/button&gt;
    &lt;/div&gt;
    &lt;ul id="listaTarefas"&gt;&lt;/ul&gt;
    &lt;div class="estatisticas"&gt;
      &lt;span id="totalTarefas"&gt;0 tarefas&lt;/span&gt;
      &lt;span id="tarefasConcluidas"&gt;0 concluídas&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <h3>Passo 3: CSS Moderno</h3>
      <p>CSS (Cascading Style Sheets) controla a aparência visual da página, definindo cores, layouts, fontes e responsividade. Usamos seletores para aplicar estilos a elementos HTML, propriedades como flexbox para layouts modernos, e media queries para adaptar a designs móveis. Um CSS bem estruturado torna a interface atrativa e funcional em diferentes dispositivos.</p>
      <pre><code>@import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #163666;
  min-height: 100vh;
  padding: 20px;
  
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 2px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
}


h1 {
  background: none;
  font-family: "Montserrat", sans-serif;
  color: #163666;
  padding: 20px;
  text-align: center;
  font-size: 1.8rem;
  border-bottom: 1px solid #163666;
}

.input-group {
  padding: 20px;
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e1e8ed;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #3498db;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

#adicionar {
  background: #27ae60;
  color: white;
}

#adicionar:hover {
  background: #219a52;
}

.filtros {
  padding: 0 20px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #e1e8ed;
}

.filtro {
  padding: 10px 15px;
  background: #f8f9fa;
  border: none;
  border-radius: 4px;
  font-size: 14px;
}

.filtro.ativo {
  background: #3498db;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 15px 20px;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: background-color 0.3s;
}

li:hover {
  background: #f8f9fa;
}

li.concluida {
  background: #d4edda;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.texto-tarefa {
  flex: 1;
  font-size: 16px;
}

.concluida .texto-tarefa {
  text-decoration: line-through;
  color: #6c757d;
}

.delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
}

.delete-btn:hover {
  background: #c0392b;
}

.estatisticas {
  padding: 15px 20px;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #6c757d;
}

@media (max-width: 480px) {
  .input-group {
    flex-direction: column;
  }
  
  .filtros {
    flex-wrap: wrap;
  }
}</code></pre>
      <h3>Passo 4: JavaScript Funcional</h3>
      <p>JavaScript adiciona interatividade, gerenciando eventos como cliques, armazenando dados no localStorage para persistência, e manipulando o DOM para atualizar a interface dinamicamente. Funções como renderizarTarefas e adicionarTarefa organizam a lógica, enquanto eventos conectam ações do usuário ao código. Isso cria uma aplicação funcional e responsiva.</p>
      <pre><code>// Elementos DOM
const inputTarefa = document.getElementById('novaTarefa');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('listaTarefas');
const filtros = document.querySelectorAll('.filtro');
const totalTarefasEl = document.getElementById('totalTarefas');
const tarefasConcluidasEl = document.getElementById('tarefasConcluidas');

// Estado da aplicação
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let filtroAtual = 'todas';

// Função para salvar no localStorage
function salvarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para criar elemento de tarefa
function criarElementoTarefa(tarefa) {
  const li = document.createElement('li');
  li.className = tarefa.concluida ? 'concluida' : '';
  li.dataset.id = tarefa.id;
  
  li.innerHTML = \`
    &lt;input type="checkbox" class="checkbox" \${tarefa.concluida ? 'checked' : ''}>&gt;
    &lt;span class="texto-tarefa">&gt;\${tarefa.texto}&lt;/span>&gt;
    &lt;button class="delete-btn" style="font-family: 'Montserrat', sans-serif;">&gt;X&lt;/button>&gt;
  \`;
  
  // Eventos
  const checkbox = li.querySelector('.checkbox');
  const deleteBtn = li.querySelector('.delete-btn');
  
  checkbox.addEventListener('change', () => {
    tarefa.concluida = checkbox.checked;
    li.className = tarefa.concluida ? 'concluida' : '';
    salvarTarefas();
    atualizarEstatisticas();
    filtrarTarefas();
  });
  
  deleteBtn.addEventListener('click', () => {
    tarefas = tarefas.filter(t => t.id !== tarefa.id);
    salvarTarefas();
    renderizarTarefas();
  });
  
  return li;
}

// Função para renderizar tarefas
function renderizarTarefas() {
  listaTarefas.innerHTML = '';
  const tarefasFiltradas = filtrarTarefasPorStatus();
  
  tarefasFiltradas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    listaTarefas.appendChild(elementoTarefa);
  });
  
  atualizarEstatisticas();
}

// Função para filtrar tarefas
function filtrarTarefasPorStatus() {
  switch(filtroAtual) {
    case 'pendentes':
      return tarefas.filter(t => !t.concluida);
    case 'concluidas':
      return tarefas.filter(t => t.concluida);
    default:
      return tarefas;
  }
}

// Função para atualizar estatísticas
function atualizarEstatisticas() {
  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;
  
  totalTarefasEl.textContent = \`\${total} tarefa\${total !== 1 ? 's' : ''}\`;
  tarefasConcluidasEl.textContent = \`\${concluidas} concluída\${concluidas !== 1 ? 's' : ''}\`;
}

// Função para adicionar tarefa
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();
  if (texto) {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };
    
    tarefas.push(novaTarefa);
    salvarTarefas();
    renderizarTarefas();
    inputTarefa.value = '';
  }
}

// Event Listeners
botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});

filtros.forEach(filtro => {
  filtro.addEventListener('click', () => {
    filtros.forEach(f => f.classList.remove('ativo'));
    filtro.classList.add('ativo');
    filtroAtual = filtro.dataset.filtro;
    renderizarTarefas();
  });
});

// Inicialização
renderizarTarefas();</code></pre>
      <h3>Passo 5: Exercício prático para Melhorias Avançadas</h3>
      <ul>
        <li>Adicione drag and drop para reordenar tarefas</li>
        <li>Implemente edição inline de tarefas</li>
        <li>Adicione categorias/prioridades</li>
        <li>Estilize o projeto com CSS da forma que preferir</li>
        <li>Adicione notificações push</li>
      </ul>
      <h3>Passo 6: Deploy e Portfólio</h3>
      <ul>
        <li>Hospede no <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> ou <a href="https://www.netlify.com/" target="_blank">Netlify</a></li>
        <li>Adicione ao seu README.md</li>
        <li>Inclua screenshots no portfólio</li>
        <li>Descreva as tecnologias usadas</li>
      </ul>
      <p>
        <strong>Este projeto será seu cartão de visita para entrevistas!</strong> Mostre que você sabe criar aplicações completas e funcionais.
      </p>
    `,

    9: `
      <h2>Version Control com Git</h2>
      <p>
        Git é o sistema de controle de versão mais usado no mundo. Empresas esperam que você saiba usar Git - é essencial para qualquer desenvolvedor profissional.
      </p>
      <h3>O que é Git?</h3>
      <p>
        Git é um sistema de controle de versão distribuído que rastreia mudanças no código fonte durante o desenvolvimento de software. Criado por Linus Torvalds em 2005.
      </p>
      <h3>Instalação</h3>
      <ul>
        <li><strong>Windows:</strong> Baixe do <a href="https://git-scm.com/download/win" target="_blank">site oficial</a></li>
        <li><strong>macOS:</strong> <code>brew install git</code> ou baixe do site</li>
        <li><strong>Linux:</strong> <code>sudo apt install git</code> (Ubuntu/Debian)</li>
      </ul>
      <h3>Configuração Inicial</h3>
      <pre><code>git config --global user.name "Seu Nome Completo"
git config --global user.email "seu.email@exemplo.com"
git config --global core.editor "code --wait"  # VS Code como editor
git config --global init.defaultBranch main</code></pre>
      <h3>Comandos Essenciais</h3>
      <pre><code># Iniciar repositório
git init

# Ver status dos arquivos
git status

# Adicionar arquivos ao stage
git add arquivo.txt          # arquivo específico
git add .                    # todos os arquivos
git add -A                   # todos incluindo deletados

# Fazer commit
git commit -m "Mensagem descritiva do que foi alterado"

# Ver histórico
git log                      # histórico completo
git log --oneline           # versão compacta
git log --graph --decorate  # com gráfico</code></pre>
      <h3>Trabalhando com Branches</h3>
      <pre><code># Ver branches
git branch                   # lista branches locais
git branch -a               # inclui remotos

# Criar branch
git branch nome-do-branch

# Trocar de branch
git checkout nome-do-branch
git switch nome-do-branch    # comando mais novo

# Criar e trocar para novo branch
git checkout -b novo-branch
git switch -c novo-branch

# Mesclar branches
git merge outro-branch       # mescla outro-branch no atual
git rebase outro-branch      # rebase (histórico linear)</code></pre>
      <h3>Trabalhando com Repositórios Remotos</h3>
      <pre><code># Conectar ao repositório remoto
git remote add origin https://github.com/usuario/repo.git

# Ver remotos
git remote -v

# Enviar mudanças
git push -u origin main      # primeira vez
git push                     # vezes subsequentes

# Baixar mudanças
git pull                     # fetch + merge
git fetch                    # apenas baixar
git merge origin/main        # mesclar manualmente

# Clonar repositório
git clone https://github.com/usuario/repo.git</code></pre>
      <h3>GitHub - Plataforma Essencial</h3>
      <p>
        GitHub é onde o mundo open source acontece:
      </p>
      <ul>
        <li>Crie conta gratuita em <a href="https://github.com" target="_blank">github.com</a></li>
        <li>Hospede seus projetos gratuitamente</li>
        <li>Colabore com outros desenvolvedores</li>
        <li>Mostre seu trabalho para empregadores</li>
        <li>Contribua para projetos open source</li>
      </ul>
      <h3>Fluxo de Trabalho Profissional</h3>
      <ol>
        <li>Clone o repositório: <code>git clone +url do projeto</code></li>
        <li>Crie uma branch para sua feature: <code>git checkout -b feature/nova-funcionalidade</code></li>
        <li>Faça commits pequenos e descritivos</li>
        <li>Push sua branch: <code>git push origin feature/nova-funcionalidade</code></li>
        <li>Abra um Pull Request no GitHub</li>
        <li>Aguarde code review e mescle</li>
      </ol>
      <h3>Comandos Avançados</h3>
      <pre><code># Desfazer mudanças
git checkout -- arquivo.txt  # descartar mudanças não committadas
git reset HEAD arquivo.txt   # remover do stage
git reset --hard HEAD~1      # voltar 1 commit (perigoso!)

# Stashing (guardar mudanças temporariamente)
git stash                    # guardar mudanças
git stash pop               # recuperar mudanças
git stash list              # ver stashes guardados

# Ver diferenças
git diff                     # mudanças não stagiadas
git diff --staged           # mudanças stagiadas
git diff HEAD~1             # diferença com commit anterior</code></pre>
      <h3>.gitignore - Arquivos a Ignorar</h3>
      <pre><code># Crie um arquivo .gitignore na raiz do projeto
# Node.js
node_modules/
npm-debug.log*

# macOS
.DS_Store

# Windows
Thumbs.db

# Logs
*.log

# Ambiente
.env
.env.local</code></pre>
      <h3>Exercício Prático</h3>
      <p>
        Para seu projeto de lista de tarefas:
      </p>
      <ul>
        <li>Inicialize um repositório Git: <code>git init</code></li>
        <li>Adicione todos os arquivos: <code>git add .</code></li>
        <li>Faça seu primeiro commit: <code>git commit -m "Initial commit - Todo List project"</code></li>
        <li>Crie um repositório no GitHub</li>
        <li>Conecte e faça push: <code>git remote add origin url && git push -u origin main</code></li>
        <li>Crie uma branch para melhorias: <code>git checkout -b feature/improvements</code></li>
        <li>Adicione uma nova funcionalidade e faça commit</li>
        <li>Volte para main e mescle: <code>git checkout main && git merge feature/improvements</code></li>
      </ul>
      <h4>Abaixo um vídeo explicativo para criação de repositório no GitHub:</h4>
      <iframe
  src="https://drive.google.com/file/d/19F2lGtj8X074q-WnzJGZtml3pYiBA2bt/preview"
  width="100%"
  height="480"
  style="margin: 1rem 0; border-radius: 8px;"
  allow="autoplay; fullscreen"
  allowfullscreen>
</iframe>
      <h3>Dicas para Entrevistas</h3>
      <ul>
        <li>Sempre use commits descritivos em português ou inglês</li>
        <li>Evite commits grandes - prefira commits pequenos e frequentes</li>
        <li>Use branches para features e correções</li>
        <li>Aprenda a resolver conflitos de merge</li>
      </ul>
      <h3>Recursos para Aprender Mais</h3>
      <ul>
        <li><a href="https://git-scm.com/book/pt-br/v2" target="_blank">Pro Git Book (Portuguese)</a></li>
        <li><a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a></li>
        <li><a href="https://github.com/" target="_blank">GitHub</a></li>
      </ul>
    `,

    10: `
      <h2>Ferramentas Essenciais para Desenvolvedores</h2>
      <p>
        Conheça as ferramentas que todo programador profissional usa no dia a dia. Dominar essas ferramentas é tão importante quanto saber programar.
      </p>
      <h3>Editor de Código: Visual Studio Code</h3>
      <p>
        VS Code é o editor mais popular do mundo, gratuito e extremamente poderoso.
      </p>
      <ul>
        <li>Baixe em: <a href="https://code.visualstudio.com" target="_blank">code.visualstudio.com</a></li>
        <li>Instale extensões essenciais:
        <h4 style="color: #007acc;">*Para instalar extensões basta seguir os passos da imagem abaixo, clicar no icone a esquerda, pesquisar pela extensão que deseja e logo após instalar.*</h4>
        <img src="./imagens/liveServer.png" alt="VS Code Extensions" style="max-width: 100%; height: auto;">
          <ul>
            <li>HTML CSS Support</li>
            <li>JavaScript (ES6) code snippets</li>
            <li>Live Server</li>
            <li>Prettier (formatador de código)</li>
            <li>ESLint (analisador de código)</li>
            <li>GitLens (integração com Git)</li>
            <li>Auto Rename Tag</li>
            <li>Bracket Pair Colorizer</li>
          </ul>
        </li>
        <li>Atalhos essenciais:
          <ul>
            <li><code>Ctrl+S</code>: Salvar</li>
            <li><code>Ctrl+Shift+P</code>: Paleta de comandos</li>
            <li><code>Ctrl+P</code>: Abrir arquivo rapidamente</li>
            <li><code>Ctrl+Shift+\`</code>: Terminal integrado</li>
            <li><code>Alt+Shift+F</code>: Formatar código</li>
          </ul>
        </li>
      </ul>
      <h3>Navegadores e Ferramentas de Desenvolvimento</h3>
      <h4>Google Chrome/Edge</h4>
      <ul>
        <li>Ferramentas do desenvolvedor (<code>F12</code> ou <code>Ctrl+Shift+I</code>)</li>
        <li><strong>Elements:</strong> Inspecionar e editar HTML/CSS</li>
        <li><strong>Console:</strong> Executar JavaScript e ver erros</li>
        <li><strong>Network:</strong> Analisar requisições HTTP</li>
        <li><strong>Application:</strong> Ver localStorage, cookies, etc.</li>
        <li><strong>Performance:</strong> Analisar performance da página</li>
      </ul>
      <h4>Firefox Developer Edition</h4>
      <ul>
        <li>Grid Inspector para layouts CSS Grid</li>
        <li>Flexbox Inspector</li>
        <li>Memory e Performance tools</li>
      </ul>
      <h3>Controle de Versão: Git e GitHub</h3>
      <p>
        Já vimos Git em detalhes. GitHub é a plataforma social do código.
      </p>
      <ul>
        <li>Perfil profissional no GitHub</li>
        <img src="./imagens/meuGithub2.png" alt="GitHub Profile" style="max-width: 100%; height: auto;">
        <li>README.md bem escrito para projetos</li>
        <li>GitHub Pages para hospedar sites gratuitamente</li>
        <li>Contribuições para projetos open source</li>
      </ul>
      <h3>Ferramentas de Design e Prototipagem</h3>
      <ul>
        <li><strong>Figma:</strong> Design de interfaces colaborativo</li>
        <li><strong>Canva:</strong> Criação de imagens e mockups</li>
        <li><strong>Photoshop/GIMP:</strong> Edição de imagens</li>
        <li><strong>Excalidraw/Whimsical:</strong> Diagramas e wireframes</li>
      </ul>
      <h3>Ferramentas de Produtividade</h3>
      <ul>
        <li><strong>Notion:</strong> Organização de projetos e notas</li>
        <li><strong>Trello/Asana:</strong> Gerenciamento de tarefas</li>
        <li><strong>Slack/Discord:</strong> Comunicação em equipe</li>
        <li><strong>Zoom/Meet:</strong> Reuniões virtuais</li>
      </ul>
      <h3>Ferramentas de Desenvolvimento Web</h3>
      <ul>
        <li><strong>Postman:</strong> Testar APIs</li>
        <li><strong>DevTools:</strong> Debugging avançado</li>
        <li><strong>Lighthouse:</strong> Auditar performance e SEO</li>
        <li><strong>BrowserStack:</strong> Testar em diferentes browsers</li>
      </ul>
      <h3>Ambientes de Desenvolvimento</h3>
      <ul>
        <li><strong>Node.js:</strong> JavaScript no servidor</li>
        <li><strong>npm/yarn:</strong> Gerenciadores de pacotes</li>
        <li><strong>Webpack/Vite:</strong> Bundlers de módulos</li>
        <li><strong>Babel:</strong> Transpilador JavaScript</li>
      </ul>
      <h3>Ferramentas de Deploy e Hospedagem</h3>
      <ul>
        <li><strong>GitHub Pages:</strong> Hospedagem gratuita</li>
        <li><strong>Netlify:</strong> Deploy automático com CI/CD</li>
        <li><strong>Vercel:</strong> Plataforma para React/Next.js</li>
        <li><strong>Heroku:</strong> PaaS para aplicações web</li>
      </ul>
      <h3>Comunidades e Aprendizado</h3>
      <ul>
        <li><strong>Stack Overflow:</strong> Perguntas e respostas técnicas</li>
        <li><strong>MDN Web Docs:</strong> Documentação oficial web</li>
        <li><strong>Dev.to:</strong> Blog e comunidade de devs</li>
        <li><strong>HackerRank/CodeWars:</strong> Praticar algoritmos</li>
        <li><strong>YouTube:</strong> Canais como Traversy Media, Academind</li>
      </ul>
      <h3>Exercício Prático</h3>
      <ul>
        <li>Instale <a href="https://code.visualstudio.com/" target="_blank">VS Code</a> e configure as extensões recomendadas</li>
        <li>Explore as DevTools (tecla F12 no teclado) do Chrome</li>
        <li>Crie uma conta no <a href="https://github.com/" target="_blank">GitHub</a> e configure seu perfil</li>
        <li>Instale <a href="https://nodejs.org/" target="_blank">Node.js</a> e npm</li>
        <li>Configure Prettier e ESLint no VS Code</li>
        <li>Explore pelo menos 3 ferramentas de design</li>
      </ul>
      <h3>Dicas para Profissionais</h3>
      <ul>
        <li>Invista tempo configurando seu ambiente de desenvolvimento</li>
        <li>Aprenda atalhos de teclado para aumentar produtividade</li>
        <li>Mantenha suas ferramentas atualizadas</li>
        <li>Automatize tarefas repetitivas</li>
        <li>Participe de comunidades para networking</li>
      </ul>
    `,

    11: `
      <h2>Como Conseguir o Primeiro Estágio</h2>
      <p>
        Agora a parte mais importante: transformar seu conhecimento em uma oportunidade real de estágio. Vamos ser práticos e diretos.
      </p>
      <h3>Preparação Prévia</h3>
      <h4>1. Portfólio Profissional</h4>
      <ul>
        <li><strong>GitHub como portfólio:</strong> Seus projetos são seu currículo vivo</li>
        <li>Tenha 2-3 projetos completos bem documentados</li>
        <li>README.md detalhado explicando o projeto</li>
        <li>Demonstre diferentes habilidades (HTML, CSS, JS, Git)</li>
        <li>Hospede projetos no GitHub Pages</li>
      </ul>
      <h4>2. Currículo Eficaz</h4>
      <ul>
        <li>1 página máxima</li>
        <li>Destaque projetos e habilidades técnicas</li>
        <li>Use palavras-chave da área (HTML, CSS, JavaScript, Git)</li>
        <li>Inclua links para GitHub e LinkedIn</li>
        <li>Personalize para cada vaga</li>
        <li>Ferramentas: Canva, Google Docs, ou LaTeX</li>
      </ul>
      <h4>3. LinkedIn Otimizado</h4>
      <ul>
        <li>Foto profissional (não use selfies)</li>
        <li>Headline claro: "Desenvolvedor Front-end | Estudante de TI"</li>
        <li>Resumo destacando projetos e objetivos</li>
        <li>Conecte-se com profissionais da área</li>
        <li>Publique sobre aprendizado e projetos</li>
        <li>Endosse habilidades de outros</li>
      </ul>
      <h3>Onde Buscar Vagas</h3>
      <h4>Plataformas de Emprego</h4>
      <ul>
        <li><strong>LinkedIn Jobs:</strong> Principal fonte de vagas tech</li>
        <li><strong>Indeed/Vagas.com.br:</strong> Busca geral</li>
        <li><strong>GeekHunter/Programathor:</strong> Foco em tecnologia</li>
        <li><strong>Gupy:</strong> Vagas de grandes empresas</li>
      </ul>
      <h4>Sites das Empresas</h4>
      <ul>
        <li>Google, Microsoft, Amazon, Facebook</li>
        <li>Empresas brasileiras: iFood, Nubank, Stone</li>
        <li>Startups locais</li>
        <li>Verifique seções "Carreiras" ou "Trabalhe Conosco"</li>
      </ul>
      <h4>Comunidades e Redes</h4>
      <ul>
        <li><strong>Grupos Facebook:</strong> "Vagas de TI", "Desenvolvimento Web Brasil"</li>
        <li><strong>Telegram:</strong> Canais de vagas tech</li>
        <li><strong>Discord:</strong> Servidores de programação</li>
        <li><strong>Reddit:</strong> r/cscareerquestions, r/brasil</li>
      </ul>
      <h4>Eventos e Feiras</h4>
      <ul>
        <li>Feiras de emprego universitárias</li>
        <li>Meetups de tecnologia (Meetup.com)</li>
        <li>Hackathons e coding challenges</li>
        <li>Eventos como TDC, QCon, BrazilJS</li>
      </ul>
      <h3>Estratégia de Candidatura</h3>
      <h4>1. Pesquisa de Empresa</h4>
      <ul>
        <li>Entenda o que a empresa faz</li>
        <li>Veja projetos similares no GitHub</li>
        <li>Prepare perguntas específicas</li>
        <li>Mostre interesse genuíno</li>
      </ul>
      <h4>2. Currículo Personalizado</h4>
      <ul>
        <li>Adapte para cada vaga</li>
        <li>Destaque experiências relevantes</li>
        <li>Use métricas quando possível</li>
        <li>Evite mentiras - elas aparecem</li>
      </ul>
      <h4>3. Carta de Apresentação</h4>
      <ul>
        <li>Breve (3-4 parágrafos)</li>
        <li>Explique por que você e por que aquela empresa</li>
        <li>Mencione projetos específicos</li>
        <li>Termine com chamada para ação</li>
      </ul>
      <h3>Processo Seletivo</h3>
      <h4>1. Teste Técnico</h4>
      <ul>
        <li>Pratique lógica de programação</li>
        <li>HTML/CSS/JS básicos são comuns</li>
        <li>Plataformas: HackerRank, LeetCode, Codility</li>
        <li>Foque em resolução, não velocidade</li>
      </ul>
      <h4>2. Entrevista Técnica</h4>
      <ul>
        <li>Explique seus projetos detalhadamente</li>
        <li>Mostre código no GitHub</li>
        <li>Prepare-se para perguntas sobre conceitos básicos</li>
        <li>Pratique explicar código para leigos</li>
      </ul>
      <h4>3. Entrevista Comportamental</h4>
      <ul>
        <li>Mostre vontade de aprender</li>
        <li>Demonstre proatividade</li>
        <li>Fale sobre resolução de problemas</li>
        <li>Seja honesto sobre seu nível</li>
      </ul>
      <h3>Dicas Práticas para Iniciantes</h3>
      <ul>
        <li><strong>Comece pequeno:</strong> Estágios em startups ou empresas menores</li>
        <li><strong>Networking:</strong> Conecte-se com pessoas da área</li>
        <li><strong>Não desanime:</strong> Rejeições são normais</li>
        <li><strong>Continue aprendendo:</strong> Mesmo após conseguir o estágio</li>
        <li><strong>Divulgue seu progresso:</strong> Poste sobre aprendizado no LinkedIn</li>
      </ul>
      <h3>Expectativas Realistas</h3>
      <ul>
        <li>Salário inicial: R$ 800 - R$ 1.500 (depende da empresa/local)</li>
        <li>Horário: 4-6 horas diárias</li>
        <li>Aprendizado: Muito! Você vai crescer rápido</li>
        <li>Carga horária: Geralmente 20-30h/semana</li>
      </ul>
      <h3>Depois de Conseguir</h3>
      <ul>
        <li>Seja pontual e responsável</li>
        <li>Faça perguntas quando não entender</li>
        <li>Mostre iniciativa em tarefas</li>
        <li>Documente seu aprendizado</li>
        <li>Mantenha contato com mentores</li>
      </ul>
      <h3>Recursos Adicionais</h3>
      <ul>
        <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a> - Networking profissional</li>
        <li><a href="https://github.com" target="_blank">GitHub</a> - Portfólio de código</li>
        <li><a href="https://www.canva.com" target="_blank">Canva</a> - Criar currículos</li>
        <li><a href="https://www.meetup.com" target="_blank">Meetup</a> - Eventos tech locais</li>
      </ul>
    `,

    13: `
      <h2>Próximos Passos e Recursos</h2>
      <p>
        Parabéns por completar este curso intensivo! Você agora tem uma base sólida em desenvolvimento web front-end. Mas a jornada não para aqui.
      </p>
      <h3>O Que Fazer Agora</h3>
      <h4>1. Reforce o Aprendizado</h4>
      <ul>
        <li>Refatore seus projetos existentes</li>
        <li>Adicione novas funcionalidades</li>
        <li>Peça feedback em comunidades</li>
        <li>Pratique diariamente (mínimo 1 hora)</li>
      </ul>
      <h4>2. Expanda Seu Portfólio</h4>
      <ul>
        <li>Crie mais projetos variados</li>
        <li>Clone sites famosos (Netflix, Spotify)</li>
        <li>Desenvolva ideias próprias</li>
        <li>Hospede tudo no GitHub Pages</li>
      </ul>
      <h4>3. Busque Oportunidades</h4>
      <ul>
        <li>Candidate-se a vagas de estágio</li>
        <li>Participe de hackathons</li>
        <li>Contribua para open source</li>
        <li>Conecte-se com profissionais</li>
      </ul>
      <h3>Caminhos de Aprimoramento</h3>
      <h4>Front-end Avançado</h4>
      <ul>
        <li><strong>React:</strong> Biblioteca JavaScript mais popular</li>
        <li><strong>Vue.js:</strong> Framework progressivo</li>
        <li><strong>Angular:</strong> Framework completo</li>
        <li><strong>TypeScript:</strong> JavaScript tipado</li>
        <li><strong>Sass/SCSS:</strong> Pré-processador CSS</li>
        <li><strong>Webpack/Vite:</strong> Bundlers modernos</li>
      </ul>
      <h4>Back-end e Full-stack</h4>
      <ul>
        <li><strong>Node.js:</strong> JavaScript no servidor</li>
        <li><strong>Express.js:</strong> Framework web para Node</li>
        <li><strong>MongoDB/PostgreSQL:</strong> Bancos de dados</li>
        <li><strong>REST APIs:</strong> Comunicação cliente-servidor</li>
        <li><strong>GraphQL:</strong> Query language para APIs</li>
      </ul>
      <h4>DevOps e Ferramentas</h4>
      <ul>
        <li><strong>Docker:</strong> Containerização</li>
        <li><strong>AWS/Heroku:</strong> Cloud computing</li>
        <li><strong>CI/CD:</strong> Integração e deploy contínuos</li>
        <li><strong>Linux:</strong> Sistema operacional dos devs</li>
        <li><strong>Testes:</strong> Jest, Cypress, Selenium</li>
      </ul>
      <h3>Recursos de Aprendizado</h3>
      <h4>Plataformas Gratuitas</h4>
      <ul>
        <li><strong>MDN Web Docs:</strong> Documentação oficial e tutoriais</li>
        <li><strong>freeCodeCamp:</strong> Cursos interativos completos</li>
        <li><strong>The Odin Project:</strong> Caminho completo para dev</li>
        <li><strong>Codecademy:</strong> Aprendizado gamificado</li>
        <li><strong>Exercism:</strong> Prática de algoritmos</li>
      </ul>
      <h4>YouTube Channels (Portuguese)</h4>
      <ul>
        <li><strong>Rocketseat:</strong> Conteúdo moderno e prático</li>
        <li><strong>Dev em Dobro:</strong> Focado em iniciantes</li>
        <li><strong>Manual do Dev:</strong> Tutoriais completos</li>
        <li><strong>Matheus Battisti:</strong> HTML, CSS, JS, React</li>
        <li><strong>Programador BR:</strong> Carreira e desenvolvimento</li>
      </ul>
      <h4>Livros Recomendados</h4>
      <ul>
        <li><strong>"Eloquent JavaScript":</strong> JavaScript profundo</li>
        <li><strong>"You Don't Know JS":</strong> Série completa sobre JS</li>
        <li><strong>"Clean Code":</strong> Boas práticas de programação</li>
        <li><strong>"The Pragmatic Programmer":</strong> Carreira em tech</li>
      </ul>
      <h4>Comunidades</h4>
      <ul>
        <li><strong>Reddit:</strong> r/learnprogramming, r/webdev, r/cscareerquestions</li>
        <li><strong>Discord:</strong> Servidores brasileiros de programação</li>
        <li><strong>Stack Overflow:</strong> Perguntas e respostas técnicas</li>
        <li><strong>Dev.to:</strong> Blog comunitário de desenvolvedores</li>
        <li><strong>Meetup.com:</strong> Eventos presenciais de tecnologia</li>
      </ul>
      <h3>Prática Contínua</h3>
      <h4>Desafios Diários</h4>
      <ul>
        <li><strong>CodeWars/HackerRank:</strong> Problemas de algoritmos</li>
        <li><strong>Frontend Mentor:</strong> Desafios de UI</li>
        <li><strong>Daily CSS:</strong> Componentes CSS diários</li>
        <li><strong>JavaScript30:</strong> 30 dias de JavaScript puro</li>
      </ul>
      <h4>Projetos para Praticar</h4>
      <ul>
        <li>Clone do Twitter/Instagram</li>
        <li>Dashboard administrativo</li>
        <li>E-commerce simples</li>
        <li>Blog pessoal</li>
        <li>App de clima</li>
        <li>Jogo da memória</li>
      </ul>
      <h3>Mindset de Desenvolvedor</h3>
      <ul>
        <li><strong>Aprendizado Contínuo:</strong> A tecnologia evolui rápido</li>
        <li><strong>Resolução de Problemas:</strong> Debugging é 80% do trabalho</li>
        <li><strong>Comunicação:</strong> Explique código para não-técnicos</li>
        <li><strong>Colaboração:</strong> Git e trabalho em equipe</li>
        <li><strong>Ética:</strong> Código limpo, acessível e seguro</li>
      </ul>
      <h3>Carreira em Tecnologia</h3>
      <h4>Caminhos Possíveis</h4>
      <ul>
        <li><strong>Front-end Developer:</strong> HTML, CSS, JavaScript, frameworks</li>
        <li><strong>Full-stack Developer:</strong> Front + back-end</li>
        <li><strong>UI/UX Developer:</strong> Foco em interfaces</li>
        <li><strong>DevOps:</strong> Infraestrutura e automação</li>
        <li><strong>Product Manager:</strong> Gestão de produto</li>
      </ul>
      <h4>Habilidades Beyond Code</h4>
      <ul>
        <li>Comunicação eficaz</li>
        <li>Trabalho em equipe</li>
        <li>Gestão de tempo</li>
        <li>Aprendizado autodidata</li>
        <li>Adaptabilidade</li>
      </ul>
      <h3>Lembre-se</h3>
      <p>
        <strong>Você chegou até aqui - isso já é uma vitória!</strong> Muitos desistem antes de terminar o básico. Continue com essa determinação.
      </p>
      <p>
        O primeiro estágio é só o começo. Mantenha a curiosidade, pratique constantemente e nunca pare de aprender. A comunidade tech é acolhedora e há espaço para todos.
      </p>
      <p>
        <strong>Contato e Suporte:</strong> Se tiver dúvidas, entre em contato. Lembre-se: todo expert já foi iniciante. Boa sorte na sua jornada!
      </p>
      
      <h3>Checklist Final</h3>
      <ul>
        <li>✅ Completei o curso básico</li>
        <li>✅ Criei projetos para portfólio</li>
        <li>✅ Configurei Git e GitHub</li>
        <li>✅ Candidato-me a vagas</li>
        <li>✅ Continuo aprendendo diariamente</li>
        <li>✅ Participei de comunidades</li>
      </ul>
    `,

    7: `
      <h2>Banco de Dados</h2>
      <p>
        Bancos de dados são sistemas organizados para armazenar, gerenciar e recuperar informações de forma eficiente. Eles são essenciais para aplicações web, permitindo persistir dados além da sessão do usuário. Nesta lição, vamos explorar conceitos fundamentais, com foco em SQL (Structured Query Language), o padrão para bancos relacionais.
      </p>
      <h3>O que é um Banco de Dados?</h3>
      <p>
        Um banco de dados é uma coleção estruturada de dados armazenados electronicamente. Ele permite armazenar grandes volumes de informações e recuperá-las rapidamente. Existem dois tipos principais:
      </p>
      <ul>
        <li><strong>Relacionais (SQL):</strong> Organizam dados em tabelas com relações entre elas (ex.: MySQL, PostgreSQL)</li>
        <li><strong>Não-relacionais (NoSQL):</strong> Mais flexíveis, armazenam dados em documentos, grafos ou pares chave-valor (ex.: MongoDB, Redis)</li>
      </ul>
      <h3>Por que Bancos de Dados são Importantes?</h3>
      <p>
        Sem bancos de dados, os dados se perderiam ao fechar o navegador ou reiniciar o servidor. Eles permitem:
      </p>
      <ul>
        <li>Persistência de dados (usuários, produtos, histórico)</li>
        <li>Consultas eficientes (buscar usuários por email)</li>
        <li>Relacionamentos (um usuário tem múltiplos pedidos)</li>
        <li>Integridade e segurança dos dados</li>
      </ul>
      <h3>Introdução ao SQL</h3>
      <p>
        SQL é a linguagem padrão para interagir com bancos relacionais. Ela permite criar, ler, atualizar e deletar dados (CRUD operations). Vamos ver os comandos básicos:
      </p>
      <h4>1. Criando uma Tabela (CREATE TABLE)</h4>
      <p>
        Tabelas são como planilhas, com colunas (campos) e linhas (registros). Cada coluna tem um tipo de dado.
      </p>
      <pre><code>-- Criar tabela de usuários
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,  -- Chave primária, auto-incremento
  nome VARCHAR(100) NOT NULL,          -- Texto variável, obrigatório
  email VARCHAR(100) UNIQUE NOT NULL,  -- Único e obrigatório
  idade INT,                           -- Número inteiro
  data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data/hora atual por padrão
);</code></pre>
      <h4>2. Inserindo Dados (INSERT)</h4>
      <p>
        Adiciona novos registros à tabela.
      </p>
      <pre><code>-- Inserir um usuário
INSERT INTO usuarios (nome, email, idade) 
VALUES ('João Silva', 'joao@email.com', 25);

-- Inserir múltiplos usuários
INSERT INTO usuarios (nome, email, idade) VALUES
('Maria Santos', 'maria@email.com', 30),
('Pedro Costa', 'pedro@email.com', 22);</code></pre>
      <h4>3. Consultando Dados (SELECT)</h4>
      <p>
        Recupera dados da tabela. É o comando mais usado.
      </p>
      <pre><code>-- Selecionar todos os usuários
SELECT * FROM usuarios;

-- Selecionar campos específicos
SELECT nome, email FROM usuarios;

-- Com condição (WHERE)
SELECT * FROM usuarios WHERE idade > 25;

-- Ordenar resultados (ORDER BY)
SELECT * FROM usuarios ORDER BY nome ASC;

-- Limitar resultados (LIMIT)
SELECT * FROM usuarios LIMIT 10;</code></pre>
      <h4>4. Atualizando Dados (UPDATE)</h4>
      <p>
        Modifica registros existentes.
      </p>
      <pre><code>-- Atualizar idade de um usuário
UPDATE usuarios SET idade = 26 WHERE id = 1;

-- Atualizar múltiplos campos
UPDATE usuarios SET nome = 'João Silva Jr.', idade = 26 WHERE email = 'joao@email.com';</code></pre>
      <h4>5. Deletando Dados (DELETE)</h4>
      <p>
        Remove registros da tabela.
      </p>
      <pre><code>-- Deletar um usuário específico
DELETE FROM usuarios WHERE id = 3;

-- Deletar todos os usuários com idade menor que 18
DELETE FROM usuarios WHERE idade < 18;</code></pre>
      <h3>Relações entre Tabelas</h3>
      <p>
        Bancos relacionais permitem conectar tabelas via chaves estrangeiras (FOREIGN KEY).
      </p>
      <pre><code>-- Criar tabela de pedidos
CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,  -- Referência ao usuário
  produto VARCHAR(100),
  valor DECIMAL(10,2),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)  -- Chave estrangeira
);

-- Consultar pedidos com dados do usuário (JOIN)
SELECT u.nome, p.produto, p.valor 
FROM usuarios u 
JOIN pedidos p ON u.id = p.usuario_id;</code></pre>
      <h3>Exemplo Prático: Sistema de Blog</h3>
      <p>
        Vamos criar um banco simples para um blog:
      </p>
      <pre><code>-- Tabela de posts
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(200) NOT NULL,
  conteudo TEXT,
  autor_id INT,
  data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

-- Inserir um post
INSERT INTO posts (titulo, conteudo, autor_id) 
VALUES ('Meu Primeiro Post', 'Conteúdo do blog...', 1);

-- Buscar posts recentes
SELECT p.titulo, u.nome as autor, p.data_publicacao 
FROM posts p 
JOIN usuarios u ON p.autor_id = u.id 
ORDER BY p.data_publicacao DESC;</code></pre>
      <h3>Conectando com JavaScript (Node.js)</h3>
      <p>
        Para conectar seu app JavaScript a um banco, use bibliotecas como mysql2 ou mongoose (para MongoDB). Exemplo básico com Node.js:
      </p>
      <pre><code>const mysql = require('mysql2');

// Criar conexão
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'meu_banco'
});

// Executar query
connection.execute(
  'SELECT * FROM usuarios WHERE idade > ?',
  [18],
  (err, results) => {
    if (err) throw err;
    console.log(results);
  }
);</code></pre>
      <h3>Melhores Práticas</h3>
      <ul>
        <li>Use prepared statements para evitar SQL injection</li>
        <li>Normalize dados para reduzir redundância</li>
        <li>Faça backups regulares</li>
        <li>Otimize queries com índices</li>
        <li>Use transações para operações críticas</li>
      </ul>
      <h3>Exercício Prático</h3>
      <p>
        Crie um banco de dados simples para uma loja online:
      </p>
      <ul>
        <li>Tabela de produtos (id, nome, preco, estoque)</li>
        <li>Tabela de clientes (id, nome, email)</li>
        <li>Tabela de vendas (id, cliente_id, produto_id, quantidade, data)</li>
        <li>Insira alguns dados de exemplo</li>
        <li>Pratique consultas JOIN para relatórios</li>
      </ul>
      <h3>Próximos Passos</h3>
      <p>
        Esta é apenas uma introdução. Para aprofundar:
      </p>
      <ul>
        <li>Instale MySQL ou PostgreSQL localmente</li>
        <li>Aprenda sobre ORMs (Object-Relational Mapping) como Sequelize</li>
        <li>Explore bancos NoSQL para projetos modernos</li>
        <li>Estude design de banco de dados e modelagem</li>
      </ul>
      <h3>Abaixo um Vídeo Explicativo sobre Banco de Dados e criação de tabelas.</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8FTQ_kfTfPE?si=6x39YEqa6RXv7re8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Recursos para Aprender Mais</h3>
      <ul>
        <li><a href="https://sqlzoo.net/" target="_blank">SQLZoo - Pratique SQL online</a></li>
        <li><a href="https://www.w3schools.com/sql/" target="_blank">W3Schools - SQL Tutorial</a></li>
        <li><a href="https://dev.mysql.com/doc/" target="_blank">Documentação MySQL</a></li>
      </ul>
    `,

    14: `
      <h2>Avaliação Final do Curso</h2>
      <p>
        Parabéns por chegar até aqui! Esta é a avaliação final que testará seus conhecimentos técnicos em desenvolvimento web. A prova abrange todo o conteúdo do curso: HTML, CSS, JavaScript, Git e conceitos fundamentais de programação.
      </p>
      <h3>Sobre a Avaliação</h3>
      <ul>
        <li><strong>20 perguntas</strong> de múltipla escolha</li>
        <li><strong>Nível avançado</strong> - foco em aplicação prática</li>
        <li><strong>Tempo estimado:</strong> 20-30 minutos</li>
        <li><strong>Critérios:</strong> 80% ou mais para aprovação</li>
      </ul>
      <h3>Tópicos Avaliados</h3>
      <ul>
        <li>HTML5 semântico e acessibilidade</li>
        <li>CSS avançado (Grid, Flexbox, animações)</li>
        <li>JavaScript (DOM, eventos, arrays, funções)</li>
        <li>Python (Eventos, classes, funções, loops)</li>
        <li>Version control com Git</li>
        <li>Conceitos fundamentais de desenvolvimento web</li>
      </ul>
      <p>
        <strong>Dica:</strong> Reveja os conceitos que teve dificuldade durante o curso. Esta avaliação é uma oportunidade de consolidar seu aprendizado e se preparar para entrevistas técnicas.
      </p>
      <div style="margin-top: 30px; padding: 20px; background: #f0f8ff; border: 2px solid #3b82f6; border-radius: 10px;">
        <h3>🎯 Iniciar Avaliação Final</h3>
        <p>Pronto para testar seus conhecimentos? Clique no botão abaixo para começar a avaliação.</p>
        <button onclick="startQuiz(14)" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">
          Iniciar Avaliação Final
        </button>
      </div>
     
    `,

    12: `
    <h2>Habilidades Comportamentais (Soft Skills)</h2>
    <p>
        <p>
        Enquanto hard skills (conhecimentos técnicos) te fazem conseguir o emprego, soft skills te ajudam a mantê-lo e crescer na carreira. Segundo pesquisas, 85% dos sucessos profissionais são atribuídos a soft skills. Em tech, elas são ainda mais valorizadas devido ao trabalho colaborativo.
      </p>
      </p>
      <h3>      <h3>1. Resolução de Problemas</h3></h3>
      <p>
              <p>
        Capacidade de identificar, analisar e solucionar desafios de forma sistemática. É a essência da programação.
      </p>
      </p>
      <h4>Como Desenvolver:</h4>
      <ul>
        <li>Quebre problemas complexos em partes menores</li>
        <li>Use técnicas como "divide and conquer"</li>
        <li>Pratique algoritmos e lógica de programação</li>
        <li>Aprenda debugging passo a passo</li>
      </ul>
      <h4>Exemplo Prático:</h4>
      <p>
        Quando um bug aparece, não tente "chutar" soluções. Em vez disso:
      </p>
      <ol>
        <li>Reproduza o erro consistentemente</li>
        <li>Identifique sintomas vs. causas raiz</li>
        <li>Use console.log ou debugger para rastrear</li>
        <li>Teste hipóteses uma por vez</li>
        <li>Documente a solução para referência futura</li>
      </ol>
      <h3>2. Pensamento Crítico</h3>
      <p>
        Habilidade de avaliar informações objetivamente, questionar suposições e tomar decisões baseadas em evidências.
      </p>
      <h4>Como Desenvolver:</h4>
      <ul>
        <li>Leia documentação oficial em vez de tutoriais superficiais</li>
        <li>Questione "porquês" em seu código</li>
        <li>Analise prós e contras de tecnologias</li>
        <li>Participe de code reviews</li>
      </ul>
      <h4>Exemplo em Programação:</h4>
      <p>
        Antes de escolher uma biblioteca, avalie:
      </p>
      <ul>
        <li>Atividade da comunidade (commits recentes, issues abertas)</li>
        <li>Documentação e exemplos</li>
        <li>Compatibilidade com seu projeto</li>
        <li>Curva de aprendizado vs. benefícios</li>
      </ul>
      <h3>3. Comunicação</h3>
      <p>
        Capacidade de expressar ideias claramente, tanto verbalmente quanto por escrito. Essencial para trabalho em equipe.
      </p>
      <h4>Como Desenvolver:</h4>
      <ul>
        <li>Escreva comentários claros no código</li>
        <li>Pratique explicar conceitos técnicos para não-técnicos</li>
        <li>Participe de comunidades online (Reddit, Discord)</li>
        <li>Faça apresentações sobre seus projetos</li>
      </ul>
      <h4>Dicas para Comunicação Técnica:</h4>
      <ul>
        <li>Use analogias para explicar conceitos complexos</li>
        <li>Evite jargões desnecessários</li>
        <li>Seja específico: "O botão não funciona" vs. "O evento click não está sendo capturado no mobile"</li>
        <li>Ouça ativamente antes de responder</li>
      </ul>
      <h3>4. Adaptabilidade</h3>
      <p>
        Capacidade de se ajustar a mudanças, aprender novas tecnologias e lidar com incertezas.
      </p>
      <h4>Como Desenvolver:</h4>
      <ul>
        <li>Aprenda uma nova linguagem/tecnologia a cada 6 meses</li>
        <li>Abrace mudanças nos requisitos do projeto</li>
        <li>Veja erros como oportunidades de aprendizado</li>
        <li>Mantenha-se atualizado com trends da indústria</li>
      </ul>
      <h4>Exemplo:</h4>
      <p>
        Quando uma tecnologia fica obsoleta (como jQuery), em vez de resistir, estude alternativas modernas (como vanilla JS ou frameworks atuais) e adapte seus projetos.
      </p>
      <h3>5. Trabalho em Equipe</h3>
      <p>
        Habilidade de colaborar efetivamente com outros desenvolvedores, designers e stakeholders.
      </p>
      <h4>Como Desenvolver:</h4>
      <ul>
        <li>Participe de projetos open source</li>
        <li>Faça pair programming</li>
        <li>Dê e receba feedback construtivo</li>
        <li>Respeite prazos e compromissos</li>
      </ul>
      <h4>Práticas Ágeis:</h4>
      <ul>
        <li>Daily standups para alinhamento diário</li>
        <li>Sprint planning para organização</li>
        <li>Code reviews para qualidade coletiva</li>
        <li>Retrospectives para melhoria contínua</li>
      </ul>
      <h3>6. Gestão de Tempo e Produtividade</h3>
      <p>
        Capacidade de priorizar tarefas, evitar procrastinação e entregar trabalho de qualidade no prazo.
      </p>
      <h4>Técnicas:</h4>
      <ul>
        <li><strong>Pomodoro:</strong> 25 minutos focados + 5 minutos pausa</li>
        <li><strong>Eisenhower Matrix:</strong> Priorize urgente/importante</li>
        <li><strong>Time blocking:</strong> Reserve horários específicos para tarefas</li>
        <li><strong>80/20 Rule:</strong> 80% dos resultados vêm de 20% dos esforços</li>
      </ul>
      <h4>Ferramentas:</h4>
      <ul>
        <li>Trello ou Jira para gerenciamento de tarefas</li>
        <li>Notion para documentação</li>
        <li>VS Code extensions para produtividade</li>
        <li>Apps de foco como Forest ou Freedom</li>
      </ul>
      <h3>7. Aprendizado Contínuo</h3>
      <p>
        Compromisso com o desenvolvimento profissional através de estudo constante.
      </p>
      <h4>Hábitos:</h4>
      <ul>
        <li>Dedique 1-2 horas diárias para aprendizado</li>
        <li>Siga blogs técnicos (CSS-Tricks, Smashing Magazine)</li>
        <li>Assista conferências (JSConf, React Conf)</li>
        <li>Leia livros como "Clean Code" ou "The Pragmatic Programmer"</li>
      </ul>
      <h4>Fontes de Aprendizado:</h4>
      <ul>
        <li>MDN Web Docs, freeCodeCamp</li>
        <li>YouTube channels (Traversy Media, Academind)</li>
        <li>Podcasts (Syntax, ShopTalk)</li>
        <li>Cursos online (Udemy, Coursera)</li>
      </ul>
      <h3>8. Empatia e Inteligência Emocional</h3>
      <p>
        Capacidade de entender e gerenciar emoções próprias e alheias, especialmente importante em equipes diversas.
      </p>
      <h4>Como Desenvolver:</h4>
      <ul>
        <li>Pratique escuta ativa</li>
        <li>Coloque-se no lugar do usuário/cliente</li>
        <li>Dê feedback positivo antes do construtivo</li>
        <li>Gerencie estresse com técnicas de mindfulness</li>
      </ul>
      <h4>Em Programação:</h4>
      <p>
        Considere a experiência do usuário final. Um código que "funciona" mas é confuso pode causar frustração. Pense em acessibilidade e usabilidade.
      </p>
      <h3>Como Avaliar Suas Soft Skills</h3>
      <p>
        Faça uma auto-avaliação honesta:
      </p>
      <ul>
        <li>Peça feedback de colegas em projetos</li>
        <li>Observe suas interações em reuniões</li>
        <li>Avalie sua capacidade de lidar com mudanças</li>
        <li>Meça sua produtividade semanal</li>
      </ul>
      <h3>Exercício Prático</h3>
      <p>
        Para cada soft skill acima, escreva:
      </p>
      <ul>
        <li>Seu nível atual (1-10)</li>
        <li>Um exemplo de quando a usou bem</li>
        <li>Um exemplo de quando poderia ter usado melhor</li>
        <li>Um plano de ação para melhorar nos próximos 30 dias</li>
      </ul>
      <h3>Soft Skills em Entrevistas</h3>
      <p>
        Prepare respostas para perguntas comportamentais:
      </p>
      <ul>
        <li>"Conte sobre um desafio técnico que enfrentou"</li>
        <li>"Como você lida com prazos apertados?"</li>
        <li>"Descreva uma situação de conflito em equipe"</li>
        <li>"Como você aprende novas tecnologias?"</li>
      </ul>
      <p>
        Use a técnica STAR: Situação, Tarefa, Ação, Resultado.
      </p>
      <h3>Conclusão</h3>
      <p>
        Soft skills são desenvolvidas ao longo da carreira através de prática consciente. Foque em uma ou duas por vez, integre-as em seu dia a dia e celebre pequenas vitórias. Elas não apenas te tornam um melhor profissional, mas também uma pessoa mais completa.
      </p>
      <h3>Recursos para Aprender Mais</h3>
      <ul>
        <li><a href="https://www.coursera.org/specializations/google-project-management" target="_blank">Google Project Management (Coursera)</a></li>
        <li><a href="https://www.mindtools.com/" target="_blank">MindTools - Soft Skills Training</a></li>
        <li><a href="https://hbr.org/" target="_blank">Harvard Business Review</a></li>
      </ul>
    `
};

const quizzes = {
  14: {
    title: "Avaliação Final - Desenvolvimento Web Completo",
    questions: [
      {
        question: "Qual é a diferença entre < div > e < section > em termos de semântica HTML5?",
        options: [
          "< div > é para layout, < section > é para conteúdo genérico",
          "<section > define uma seção temática, div é um container genérico sem significado semântico",
          "Ambos são idênticos, apenas nomes diferentes",
          "< div > é obsoleto, < section > é o novo padrão"
        ],
        correct: 1
      },
      {
        question: "Em CSS, qual propriedade cria um layout de grid responsivo com 3 colunas em desktop e 1 coluna em mobile?",
        options: [
          "display: flex; flex-wrap: wrap;",
          "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));",
          "float: left; width: 33.33%;",
          "position: absolute; left: 0; right: 0;"
        ],
        correct: 1
      },
      {
        question: "Qual é o resultado de: const arr = [1,2,3]; const result = arr.map(x => x * 2).filter(x => x > 3);",
        options: [
          "[2,4,6]",
          "[4,6]",
          "[1,2,3]",
          "Erro de sintaxe"
        ],
        correct: 1
      },
      {
        question: "Em JavaScript, qual método é usado para adicionar um event listener a um elemento DOM?",
        options: [
          "element.addEvent()",
          "element.onClick()",
          "element.addEventListener()",
          "element.listen()"
        ],
        correct: 2
      },
      {
        question: "Qual comando Git cria um novo branch e muda para ele simultaneamente?",
        options: [
          "git branch novo-branch && git checkout novo-branch",
          "git checkout -b novo-branch",
          "git create-branch novo-branch",
          "git new-branch novo-branch"
        ],
        correct: 1
      },
      {
        question: "Qual é a diferença entre == e === em JavaScript?",
        options: [
          "== compara valores, === compara tipos",
          "== compara tipos, === compara valores",
          "Ambos são idênticos",
          "== é para strings, === para números"
        ],
        correct: 0
      },
      {
        question: "Em CSS, como criar uma animação que move um elemento 100px para a direita em 2 segundos?",
        options: [
          "animation: move 2s linear; @keyframes move { to { transform: translateX(100px); } }",
          "transition: transform 2s; transform: translateX(100px);",
          "position: relative; left: 100px; duration: 2s;",
          "move: 100px 2s right;"
        ],
        correct: 0
      },
      {
        question: "Qual atributo HTML5 é usado para validação de formulários sem JavaScript?",
        options: [
          "validate",
          "required",
          "check",
          "mandatory"
        ],
        correct: 1
      },
      {
        question: "Em JavaScript, como verificar se uma variável é um array?",
        options: [
          "typeof arr === 'array'",
          "arr.isArray()",
          "Array.isArray(arr)",
          "arr instanceof Array"
        ],
        correct: 2
      },
      {
        question: "Qual é o propósito do atributo 'alt' em imagens HTML?",
        options: [
          "Definir tamanho alternativo",
          "Texto alternativo para acessibilidade e quando imagem não carrega",
          "Link alternativo",
          "Cor alternativa"
        ],
        correct: 1
      },
      {
        question: "Em CSS, qual unidade é relativa ao tamanho da fonte do elemento raiz (html)?",
        options: [
          "em",
          "rem",
          "px",
          "vh"
        ],
        correct: 1
      },
      {
        question: "Qual método JavaScript converte uma string JSON em um objeto?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.objectify()"
        ],
        correct: 0
      },
      {
        question: "Em Git, qual comando mostra o status dos arquivos no repositório?",
        options: [
          "git show",
          "git status",
          "git log",
          "git diff"
        ],
        correct: 1
      },
      {
        question: "Qual propriedade CSS cria espaço interno dentro de um elemento?",
        options: [
          "margin",
          "border",
          "padding",
          "spacing"
        ],
        correct: 2
      },
      {
        question: "Em JavaScript, qual é a diferença entre let, const e var?",
        options: [
          "var é global, let e const são locais",
          "let permite reatribuição, const não; var tem hoisting",
          "const é para constantes, let para variáveis, var é obsoleto",
          "Todas as opções acima são parcialmente corretas"
        ],
        correct: 3
      },
      {
        question: "Em Python, qual é a sintaxe correta para definir uma função?",
        options: [
          "function minha_funcao():",
          "def minha_funcao():",
          "create minha_funcao():",
          "func minha_funcao():"
        ],
        correct: 1
      },
      {
        question: "Qual é o resultado de: lista = [1, 2, 3, 4]; lista.append(5); print(len(lista))",
        options: [
          "4",
          "5",
          "[1, 2, 3, 4, 5]",
          "Erro"
        ],
        correct: 1
      },
      {
        question: "Qual conceito Python permite criar classes e objetos?",
        options: [
          "Programação Funcional",
          "Programação Orientada a Objetos",
          "Programação Estruturada",
          "Programação Lógica"
        ],
        correct: 1
      },
      {
        question: "Em Python, qual é a diferença entre == e is?",
        options: [
          "== compara valores, is compara identidade de objeto",
          "is compara valores, == compara identidade",
          "Ambos são idênticos",
          "== é para números, is para strings"
        ],
        correct: 0
      },
      {
        question: "Em JavaScript, qual é a diferença entre null e undefined?",
        options: [
          "null é atribuído intencionalmente, undefined é valor padrão não inicializado",
          "undefined é atribuído intencionalmente, null é valor padrão",
          "Ambos representam ausência de valor da mesma forma",
          "null é para objetos, undefined para variáveis"
        ],
        correct: 0
      },
      {
        question: "Qual método JavaScript adiciona um elemento ao final de um array?",
        options: [
          "array.add()",
          "array.push()",
          "array.append()",
          "array.insert()"
        ],
        correct: 1
      }
    ]
  }
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;

function loadLesson(id) {
  console.log('Loading lesson:', id);
  const content = document.getElementById("content");
  console.log('Content element:', content);
  if (!content) {
    console.error('Content element not found');
    return;
  }

  if (lessons[id]) {
    content.innerHTML = lessons[id];
    console.log('Lesson loaded successfully');

    setTimeout(() => {
      content.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 10);
    
    // Não marcar lição 14 como completa automaticamente - será marcada apenas após quiz
    if (id != 14) {
      let progress = JSON.parse(localStorage.getItem('courseProgress')) || [];
      if (!progress.includes(id)) {
        progress.push(id);
        localStorage.setItem('courseProgress', JSON.stringify(progress));
        console.log('Progress saved:', progress);
      }
    }
  } else {
    content.innerHTML = "<p>LiÃ§Ã£o nÃ£o encontrada.</p>";
    console.log('Lesson not found');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contactForm.reset();
    });
  }

  const generateBtn = document.getElementById('generateCert');
  if (generateBtn) {
    generateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      generateCertificate();
    });
  }
});

function generateCertificate() {
  const nomeInput = document.getElementById('nome');
  const nome = nomeInput.value.trim();
  
  if (!nome) {
    alert('Por favor, digite seu nome completo.');
    return;
  }

  const progress = JSON.parse(localStorage.getItem('courseProgress')) || [];
  // Limpar duplicatas e garantir que sejam números
  const uniqueProgress = [...new Set(progress.map(id => parseInt(id)))];
  if (uniqueProgress.length !== progress.length) {
    localStorage.setItem('courseProgress', JSON.stringify(uniqueProgress));
  }
  const totalLessons = 14; // Total de lições incluindo a avaliação final
  
  if (uniqueProgress.length < totalLessons) {
    alert(`Você precisa visualizar todas as lições antes de emitir o certificado. Progresso atual: ${uniqueProgress.length}/${totalLessons} lições visualizadas.`);
    return;
  }
  
  // Verificar se a avaliação final foi feita
  const quizResults = JSON.parse(localStorage.getItem('quizResults')) || {};
  if (!quizResults['14'] || quizResults['14'].percentage < 80) {
    const message = !quizResults['14'] 
      ? 'Você precisa fazer a avaliação final antes de emitir o certificado.'
      : `Você precisa obter pelo menos 80% na avaliação final. Sua pontuação atual: ${quizResults['14'].percentage}%.`;
    alert(message);
    return;
  }

  // Certificado validado com sucesso
  alert('Certificado validado com sucesso! Acesse a página de certificado para fazer o download.');
}

function startQuiz(lessonId) {
  currentQuiz = quizzes[lessonId];
  currentQuestionIndex = 0;
  quizScore = 0;
  
  if (!currentQuiz) {
    alert('Questionário não encontrado para esta lição.');
    return;
  }
  
  showQuestion();
}

function showQuestion() {
  const content = document.getElementById("content");
  const question = currentQuiz.questions[currentQuestionIndex];
  
  const quizHTML = `
    <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border: 2px solid #ffc107; border-radius: 10px;">
      <h3>🎯 ${currentQuiz.title}</h3>
      <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h4>Pergunta ${currentQuestionIndex + 1} de ${currentQuiz.questions.length}</h4>
        <p style="font-size: 18px; margin: 15px 0;">${question.question}</p>
        <div id="optionsContainer">
          ${question.options.map((option, index) => `
            <button class="quiz-option" data-index="${index}" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background: #f8f9fa; border: 2px solid #dee2e6; border-radius: 6px; cursor: pointer; text-align: left; font-size: 16px;">
              ${option}
            </button>
          `).join('')}
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <button id="backToLessonBtn" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
          Voltar para Lição
        </button>
        
      </div>
    </div>
  `;
  
  content.innerHTML = quizHTML;
  
  document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', (e) => {
      const selectedIndex = parseInt(e.target.dataset.index);
      checkAnswer(selectedIndex);
    });
  });
  
  document.getElementById('backToLessonBtn').addEventListener('click', () => {
    const currentLessonId = Object.keys(quizzes).find(id => quizzes[id] === currentQuiz);
    loadLesson(parseInt(currentLessonId));
  });
}

function checkAnswer(selectedIndex) {
  const question = currentQuiz.questions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correct;
  
  if (isCorrect) {
    quizScore++;
  }
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h4 style="color: ${isCorrect ? '#10b981' : '#ef4444'}">
        ${isCorrect ? '✅ Correto!' : '❌ Incorreto'}
      </h4>
      <p style="margin: 15px 0;">
        ${isCorrect ? 'Parabéns! Você acertou.' : `Resposta correta: ${question.options[question.correct]}`}
      </p>
      <button id="nextQuestionBtn" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">
        ${currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
      </button>
    </div>
  `;
  
  document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
      showQuestion();
    } else {
      showQuizResults();
    }
  });
}

function showQuizResults() {
  const content = document.getElementById("content");
  const percentage = Math.round((quizScore / currentQuiz.questions.length) * 100);
  const currentLessonId = Object.keys(quizzes).find(id => quizzes[id] === currentQuiz);

  const quizResults = JSON.parse(localStorage.getItem('quizResults')) || {};
  quizResults[currentLessonId] = {
    score: quizScore,
    total: currentQuiz.questions.length,
    percentage: percentage,
    date: new Date().toISOString()
  };
  localStorage.setItem('quizResults', JSON.stringify(quizResults));
  
  // Marcar lição 11 como completa após finalizar o quiz
  if (currentLessonId == 11) {
    let progress = JSON.parse(localStorage.getItem('courseProgress')) || [];
    if (!progress.includes(11)) {
      progress.push(11);
      localStorage.setItem('courseProgress', JSON.stringify(progress));
      console.log('Lição 11 marcada como completa após quiz');
    }
  }
  
  // Marcar lição 14 como completa após finalizar o quiz com aprovação
  if (currentLessonId == 14 && percentage >= 80) {
    let progress = JSON.parse(localStorage.getItem('courseProgress')) || [];
    if (!progress.includes(14)) {
      progress.push(14);
      localStorage.setItem('courseProgress', JSON.stringify(progress));
      console.log('Lição 14 marcada como completa após quiz aprovado');
    }
  }
  
  let feedbackMessage = '';
  let feedbackColor = '';
  
  if (percentage >= 80) {
    feedbackMessage = '🎉 Excelente! Você demonstrou um ótimo entendimento do conteúdo!';
    feedbackColor = '#10b981';
  } else if (percentage >= 60) {
    feedbackMessage = '👍 Bom trabalho! Você está no caminho certo, mas pode revisar alguns conceitos.';
    feedbackColor = '#f59e0b';
  } else {
    feedbackMessage = '📚 Precisa de mais estudo. Recomendamos revisar a lição e tentar novamente.';
    feedbackColor = '#ef4444';
  }
  
  const resultsHTML = `
    <div style="margin-top: 30px; padding: 20px; background: #f0f8ff; border: 2px solid #3b82f6; border-radius: 10px;">
      <h3>📊 Resultado do Questionário</h3>
      <div style="background: white; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: center;">
        <h2 style="color: ${feedbackColor}; margin: 0;">${percentage}%</h2>
        <p style="font-size: 18px; margin: 10px 0;">
          Você acertou ${quizScore} de ${currentQuiz.questions.length} perguntas
        </p>
        <div style="background: #e5e7eb; height: 20px; border-radius: 10px; margin: 20px 0; overflow: hidden;">
          <div style="background: ${feedbackColor}; height: 100%; width: ${percentage}%; border-radius: 10px;"></div>
        </div>
        <p style="color: ${feedbackColor}; font-weight: bold; margin: 15px 0;">
          ${feedbackMessage}
        </p>
      </div>
      <div style="text-align: center;">
        <button id="retryQuizBtn" style="background: #f59e0b; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; margin-right: 10px;">
          Refazer Questionário
        </button>
        <button id="backToLessonBtn" style="background: #6c757d; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">
          Voltar para Lição
        </button>
        <a href="certificate.html" class="cert-button">Emitir Certificado</a>
      </div>
    </div>
  `;
  
  content.innerHTML = resultsHTML;
  
  document.getElementById('retryQuizBtn').addEventListener('click', () => startQuiz(parseInt(currentLessonId)));
  document.getElementById('backToLessonBtn').addEventListener('click', () => loadLesson(parseInt(currentLessonId)));
}

