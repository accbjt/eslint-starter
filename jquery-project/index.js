$(document).ready(function () {
  // var buttons = ['click me', 'hello world', 'go to hell'];
  //
  // var firstFunction = function(value) {
  //   secondFunction('yo');
  // }
  //
  // var secondFunction = function(value) {
  //   thirdFunction('whats');
  // }
  //
  // var thirdFunction = function(value) {
  //   fourthFunction('up');
  // }
  //
  // var fourthFunction = function(value) {
  //   var firstStr = 'Hey';
  //
  //   function concatString () {
  //     firstStr;
  //     var secondStr = 'Sup'
  //     function cancatStringAgain () {
  //       secondStr;
  //       console.log(secondStr);
  //       var thirdString = 'Dude';
  //       debugger
  //     }
  //
  //     cancatStringAgain();
  //   }
  //   concatString();
  //   console.log('done');
  // }
  //
  // firstFunction('begin');
  //
  // buttons.forEach(function(button, i) {
  //   $('body').append(
  //     '<div class="button ' + button.replace(/ /g, '-') + '">' + button + '</div>'
  //   );
  //
  //   $('.' + button.replace(/ /g, '-') + '').on('click', function () {
  //     var text = $(this).text();
  //
  //     $('h1').html(text).effect("bounce", {times: 3}, 800);
  //     $(this).effect("bounce", {times: 3}, 800);
  //   });
  // });

  $('.button').on('click', function () {
    var text = $(this).text();
    $('h1').html(text);
  });
});
