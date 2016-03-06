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
      '- <a href="http://google.es">rocky</a> - node.js - Extensible middleware-oriented HTTP/WebSocket proxy',
      '- toxy - node.js - Hackable HTTP proxy to simulate complex server failure scenarios'
    ].join('\n')
  }
})