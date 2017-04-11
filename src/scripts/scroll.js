const $graphics = $('.canvas');
const elementWatcher = scrollMonitor.create( $graphics[0], {top: -300} );

elementWatcher.enterViewport(() => $graphics.addClass('animate'));
elementWatcher.exitViewport(() => $graphics.removeClass('animate'));