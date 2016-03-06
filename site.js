$(function () {
  var intro = [
    'Type one of the following commands:',
    '- bio',
    '- links',
    '- projects',
    '- powers',
    '- philosophy',
    '- location',
    '- photo',
    '- contact',
    '- help',
    '- exit'
  ].join('\n') 

  var jqconsole = $('#console').jqconsole(intro + '\n', 'guest@localhost ~> ')

  startPrompt()

  var commands = {
    links: links,
    projects: projects,
    powers: superpowers,
    photo: photo,
    help: help,
    h: help,
    bio: bio,
    philosophy: philosophy,
    resume: resume,
    location: location,
    contact: contact,
    exit: exit
  }

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
    return [
      'Email: tomas {at} aparicio.me'
    ].join('\n')
  }

  function links () {
    return [
      '- <a href="http://github.com/h2non">github</a>',
      '- <a href="http://twitter.com/h2non">twitter</a>',
      '- <a href="https://stackoverflow.com/users/4100223/tomas">stackoverflow</a>',
      '- <a href="https://ie.linkedin.com/in/tomasaparicio">linkedin</a>',
    ].join('\n')
  }

  function bio () {
    return [
      '25 yo. Full stack dev.',
      'I code for fun. I code for passion.',
      'I like clean and simple code. I enjoy creating things with code.',
      'Open source obsessive-compulsive coder.',
    ].join('\n')
  }

  function philosophy () {
    return [
      '- Try to keep humble.',
      '- Invest time building things that you believe in.',
      '- Trust your instincts.',
      '- Put passion in every thing you do.',
      '- Don\'t waste time with assholes. Unfortunately there\'re a bunch out there.',
      '- Reinveting the wheel is not implicitely bad, you can learn a lot doing it.',
      '- Fail a lot. Fail often. Do it as soon as possible, do it quickly and learn the lesson.',
      '- Be patient. Be persistent.',
      '- Trust people until they give you a reason not to.'
    ].join('\n')
  }

  function location () {
    return [
      'Virtually: github.com/h2non',
      'Physically: Dublin, Ireland',
    ].join('\n')
  }

  function resume () {
    return [
      'You already have it. Think seriously about this.',
    ].join('\n')
  }

  function superpowers () {
    return [
      'Languages:',
      '- JavaScript (#####)',
      '- Go (####-)',
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
      '\nHuman Languages:',
      '- Spanish (#####)',
      '- English (###--)',
      '- Italian (####-)',
      '- Catalan (####-)'
    ].join('\n')
  }

  function exit () {
    window.location.href = 'https://www.google.com'
    return 'Exited.'
  }

  function photo () {
    return photoAscii
  }

  function projects () {
    return [
      'Personal open source projects:',
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
      '- <a href="//sourceforge.net/projects/opew/">opew</a> - 2011 - Full stack, portable development environment for GNU/Linux.',
    ]
    .concat([
      // '\nCompany projects:',
      // '- <a href="//www.guidecentr.al">Guidecentral</a> - 2015-2016 - Powered by: node.js, go, ruby, java, swift'
    ]).join('\n')
  }
})