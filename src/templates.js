export const SlideTemplate = (styles = '') => `<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Holyrics - Receber Transmissão (Texto)</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="main.css" />
    <link rel="stylesheet" type="text/css" href="utilities.css" />
    <style>${styles}</style>
    <script src="jquery-1.8.3.js"></script>
    <script src="holyrics-plugin-json-stream-1.0.2.js"></script>
  </head>
  <body onload="setTimeout('bodyOnload()', 100)" onresize="updateOnResize()">
    <div id="general" class="screen-custom" ondblclick="fullscreenToggle()">
      <div id="display" class="text-custom">
        <div id="visible"></div>
        <div id="invisible"></div>
      </div>
      <div class="marquee alert-custom" id="alert"></div>
      <div id="alert-invisible" class="alert-custom"></div>
    </div>
    <div id="snackbar"></div>
    <div id="modal" class="modal"></div>
    <script
      type="text/javascript"
      src="holyrics-plugin-utils-1.0.0.js"
    ></script>
    <script type="text/javascript">
      htmlType = 2;
    </script>
  </body>
</html>
`
