const $graphics = $('.canvas');
const elementWatcher = scrollMonitor.create( $graphics[0]);

elementWatcher.fullyEnterViewport(() => $graphics.addClass('animate'));
elementWatcher.exitViewport(() => $graphics.removeClass('animate'));