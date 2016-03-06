$(function () {
  var intro = [
    'Type one of the following commands:',
    '- help',
    '- bio',
    '- links',
    '- projects',
    '- powers',
    '- philosophy',
    '- resume',
    '- location',
    '- photo',
    '- contact',
  ].join('\n') 

  var jqconsole = $('#console').jqconsole(intro + '\n', 'guest@localhost ~> ')

  function startPrompt () {
    // Start the prompt with history enabled.
    jqconsole.Prompt(true, function (input) {
      // Output input with the class jqconsole-output.
      jqconsole.Append($('<div>' + cmd(input) + '</div>\n').addClass('jqconsole-output'))
      // Restart the prompt.
      startPrompt()
    })
  }

  startPrompt()

  function cmd (name) {
    if (name === 'links') {
      return links()
    }
    if (name === 'projects') {
      return projects()
    }
    if (name === 'photo') {
      return photoAscii
    }
    if (name === 'help' || name === 'h') {
      return intro
    }
    if (name === 'bio') {
      return bio()
    }
    if (name === 'powers') {
      return superpowers()
    }
    if (name === 'philosophy') {
      return philosophy()
    }
    if (name === 'resume') {
      return resume()
    }
    if (name === 'location') {
      return location()
    }
    if (name === 'contact') {
      return contact()
    }
    return unsupported()
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
      'Open source obssesive-compulsive coder.',
    ].join('\n')
  }

  function philosophy () {
    return [
      '- Try to be humble',
      '- Invest time building new things.',
      '- Refuse to deal with assholes.',
      '- Reinveting the wheel is not implicitely bad, you can learn a lot doing it.',
    ].join('\n')
  }

  function location () {
    return [
      'Virtually: github.com/h2non',
      'Physically: Dublin, Ireland',
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

  function projects () {
    return [
      '- <a href="http://google.es">rocky</a> - node.js - Extensible middleware-oriented HTTP/WebSocket proxy',
      '- toxy - node.js - Hackable HTTP proxy to simulate complex server failure scenarios'
    ].join('\n')
  }
})