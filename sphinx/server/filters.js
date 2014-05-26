chatStream.addFilter(function(eventName, args) {
  if(eventName == 'chat') {
    var message = args[0];
    if(message) {
      message = message.replace(/bitch/ig, '*****');
    }
    return [message];
  } else {
    return args;
  }
});