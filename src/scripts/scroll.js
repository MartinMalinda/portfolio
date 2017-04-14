const $graphics = $('.canvas');
const elementWatcher = scrollMonitor.create( $graphics[0], {top: 300, bottom: 300});

elementWatcher.fullyEnterViewport(() => $graphics.addClass('animate'));
elementWatcher.exitViewport(() => $graphics.removeClass('animate'));