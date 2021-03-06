(function(){
    'use strict';

    var atag = document.getElementsByClassName('widget');
    atag[0].style.display = 'none';
    
    var iframe = document.createElement('iframe');
    iframe.scrolling = 'no';
    iframe.frameBorder = 0;
    iframe.marginWidth = 0;
    iframe.marginHeight = 0;
    iframe.width = '100%';
    iframe.height = '100px';

    // atagの隣にiframeを挿入
    atag[0].parentNode.insertBefore(iframe,atag[0]);
    
    // widgetの中身（ここに後で中身を書いていきます）
    var widget = '';
    widget += (function(){/*
<!DOCTYPE html>
<html>
  <head>
    <title>sample widget</title>
    <script>
        var JSON_URL = 'https://phji.github.io/sample_loader/sample_v1.json';

        var request = new XMLHttpRequest();
        request.open('GET', JSON_URL, true);
        request.responseType = 'json';

        request.onload = function () {
            var data = this.response;
            var name = data['name'];

            var e = document.querySelector('body');
            var div = document.createElement('div');
            div.innerHTML = name;
            e.appendChild(div);
        };

         request.send();
    </script>
    <meta name="viewport" content="user-scalable=no">
  </head>
  <body>
  </body>
</html>

       */}).toString().replace(/(\n)/g, '').split('/*')[1].split('*/')[0];
    
    // iframeにウィジェットの内容
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(widget);
    doc.close();
})();