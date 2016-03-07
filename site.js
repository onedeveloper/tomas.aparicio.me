$(function () {
  var intro = join([
    'Type one of the following commands:',
    '- bio (b)',
    '- links (l)',
    '- projects (p)',
    '- superpowers (s)',
    '- philosophy (o)',
    '- location (l)',
    '- photo (i)',
    '- contact (c)',
    '- help (h)',
    '- exit (x)',
  ])

  var commands = {
    links: links,
    l: links,
    projects: projects,
    p: projects,
    superpowers: superpowers,
    s: superpowers,
    photo: photo,
    i: photo,
    help: help,
    h: help,
    bio: bio,
    b: bio,
    philosophy: philosophy,
    o: philosophy,
    location: location,
    l: location,
    contact: contact,
    c: contact,
    exit: exit,
    x: exit
  }

  var jqconsole = $('#console').jqconsole('', 'guest@localhost ~> ')
  jqconsole.Append($('<div>' + cmd('photo') + '</div>\n'))
  jqconsole.Append($('<div>Tomas Aparicio\'s interactive site</div><br>\n').addClass('jqconsole-prompt'))
  jqconsole.Append($('<div>' + intro + '</div><br>\n'))
  startPrompt()

  function startPrompt () {
    // Start the prompt with history enabled.
    jqconsole.Prompt(true, function (input) {
      // Output input with the class jqconsole-output.
      jqconsole.Append($('<div>' + cmd(input) + '</div>\n').addClass('jqconsole-output'))
      // Restart the prompt.
      startPrompt()
    })
  }

  function cmd (name) {
    return (commands[name] || unsupported)()
  }

  function help () {
    return intro
  }

  function unsupported () {
    return 'Unsupported command.\n\n' + intro
  }

  function contact () {
    return 'Email: tomas {at} aparicio.me'
  }

  function links () {
    return join([
      '- <a href="http://github.com/h2non">github</a>',
      '- <a href="http://twitter.com/h2non">twitter</a>',
      '- <a href="https://stackoverflow.com/users/4100223/tomas">stackoverflow</a>',
      '- <a href="https://ie.linkedin.com/in/tomasaparicio">linkedin</a>',
    ])
  }

  function bio () {
    return join([
      '25 yo. Full stack dev. Geek.',
      'I code for fun. I code for passion.',
      'I like clean and simple code. I enjoy creating things with code.',
      'I like to create usable software that simplify things.',
      'Open source obsessive-compulsive coder.',
    ])
  }

  function philosophy () {
    return join([
      '- Try to keep humble.',
      '- Invest time building things that you believe in.',
      '- Trust your instincts.',
      '- Curiosity is the road to the knowledge. Keep it as much as you can.',
      '- Put passion in every thing you do.',
      '- Don\'t waste time with assholes. Unfortunately there\'re a bunch out there.',
      '- Fail a lot. Fail often. Do it as soon as possible, do it quickly and learn the lesson.',
      '- Reinveting the wheel is not implicitely bad, you can learn a lot doing it.',
      '- Keep close people you want to copy and learn from.',
      '- Trust people until they give you a reason not to.',
      '- Be patient. Be persistent.',
    ])
  }

  function location () {
    return join([
      'Virtually: github.com/h2non',
      'Physically: Dublin, Ireland',
    ])
  }

  function resume () {
    return 'You already have it. Think seriously about this.'
  }

  function superpowers () {
    return join([
      'Languages:',
      '- JavaScript (#####)',
      '- Go (####-)',
      '- HTML/CSS (####-)',
      '- Ruby (###--)',
      '- PHP (###--)',
      '- Bourne Shell (###--)',
      '- Python (##---)',
      '- C (##---)',
      '- Clojure (##---)',
      '- Swift (#----)',
      '- Scala (#----)',
      '- Haskell (#----)',
      '- Erlang (#----)',
      '- Rust (#----)',
      '- Elixir (#----)',
      '',
      'Human Languages:',
      '- Spanish (#####)',
      '- English (###--)',
      '- Italian (####-)',
      '- Catalan (####-)'
    ])
  }

  function exit () {
    window.location.href = 'https://www.google.com'
    return 'Exited.'
  }

  function photo () {
    return photoAscii
  }

  function projects () {
    return join([
      'Relevant personal open source projects:',
      '- <a href="//github.com/h2non/gentleman">gentleman</a> - 2016 - Full-featured plugin-driven HTTP client toolkit for Go.',
      '- <a href="//github.com/h2non/gock">gock</a> - 2016 - Versatile HTTP mocking made easy for Go.',
      '- <a href="//github.com/jsdocs/jsdocs">jsdocs</a> - 2015 - Free documentation hosting for the JS community.',
      '- <a href="//github.com/h2non/theon">theon</a> - 2015 - Easily create expressive and extensible API client in node.js and browsers.',
      '- <a href="//github.com/h2non/rocky">rocky</a> - 2015 - Extensible middleware-oriented HTTP/WebSocket proxy',
      '- <a href="//github.com/h2non/toxy">toxy</a> - 2015 - Hackable HTTP proxy to simulate server failure scenarios',
      '- <a href="//github.com/h2non/imaginary">imaginary</a> - 2015 - Fast HTTP microservice for high-level image processing.',
      '- <a href="//github.com/h2non/bimg">bimg</a> - 2015 - Go package for fast image processing using libvips via C bindings.',
      '- <a href="//github.com/h2non/videoshow">videoshow</a> - 2015 - Easily create video slideshows using ffmpeg.',
      '- <a href="//github.com/h2non/youtube-video-api">youtube-api</a> - 2015 - Simplified Youtube API bindings for node.js.',
      '- <a href="//github.com/h2non/filetype">filetype</a> - 2015 - File type checking via magic numbers signature in Go.',
      '- <a href="//github.com/h2non/semver.c">semver.c</a> - 2015 - Semantic versioning parser in ANSI C.',
      '- <a href="//resilient-http.github.io">resilient</a> - 2014 - Fault-tolerant, reactive HTTP client.',      
      '- <a href="//github.com/h2non/nar">nar</a> - 2014 - Self-contained executable node.js apps.',
      '- <a href="//github.com/h2non/thread.js">thread.js</a> - 2014 - Frictionless multithreading in browsers.',
      '- <a href="//github.com/innotech/dployr">dployr</a> - 2014 - Cloud deployment made simple in Ruby.',
      '- <a href="//lil-js.github.io">lil.js</a> - 2014 - A collection of tiny JavaScript modules to do colossal things.',
      '- <a href="//oli-lang.github.io">oli-lang</a> - 2014 - Declarative and minimalist description language for humans.',
      '- <a href="//github.com/h2non/oml">oml</a> - 2014 - Mimimal template engine using Oli language (inspired by Jade).',
      '- <a href="//github.com/h2non/hu">hu</a> - 2014 - Functional library written with Clojure-like language for JS environments.',
      '- <a href="//github.com/h2non/promitto">promitto</a> - 2014 - Functional Promise implementation for JS environments.',
      '- <a href="//github.com/h2non/injecty">injecty</a> - 2014 - Minimalist, functional dependency injection library (inspired by Angular DI).',
      '- <a href="//github.com/frontstack/frontstack">frontstack</a> - 2013 - Portable complete web development environment made easy.',
      '- <a href="//github.com/AdesisNetlife/authrc">authrc</a> - 2013 - Configuration file specification to store credentials safety.',
      '- <a href="//github.com/AdesisNetlife/croak">croak</a> - 2013 - Grunt made easy for large projects.',
      '- <a href="//github.com/h2non/jshashes">jshashes</a> - 2012 - Cryptographic hashing library for node.js and browsers.',
      '- <a href="//turismodecastellon.actiopolis.com">actiomaps</a> - 2012 - ExtJS + Google Maps custom framework to build GIS web apps easily.',
      '- <a href="//sourceforge.net/projects/opew/">opew</a> - 2011 - Full stack, portable development environment for GNU/Linux.',
    ])
  }

  function join (arr) {
    return arr.join('\n')
  }
})