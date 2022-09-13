
  document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;

    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');

    // initialize the external events
    // -----------------------------------------------------------------

    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });

    // initialize the calendar
    // -----------------------------------------------------------------

    var calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }
    });

    calendar.render();
  });

  (()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(e){var t,n,r,o={collapseHtml:!0,collapseCss:!0,filterJsUrl:function(e){return!e.match(/\/demo-to-codepen\.js$/)},filterCssUrl:function(e){return!e.match(/\/demo-to-codepen\.css$/)},filterJs:function(e){return e},filterCss:function(e){return e.replace(/\.demo-topbar[^{]*\{[^}]*?\}/g,"")},filterHtml:function(e){return e.replace(/<div[^>]+class\s*=\s*['"]demo-topbar['"][\s\S]*?<\/\s*div\s*>/gi,"").replace(/<(a|button)[^>]+data-codepen[^>]*>[\s\S]*?<\/\s*\1\s*>/gi,"")}};function s(e){var t;return(t=function(e){for(var t,n,r,o=/^[\t ]+/gm,s=[],c=1e3;t=o.exec(e);)(r=t[0])&&(s.push(r),c=Math.min(c,r.length));if(s.length){for(r=s[0].substr(0,c),n=1;n<s.length;n++)if(s[n].substr(0,c)!==r)return"";return r}return""}(e=(e=e.replace(/[\t ]+$/gm,"")).replace(/\n{2,}/g,"\n\n")))&&(e=e.replace(new RegExp("^"+t,"mg"),"")),e.trim()}function c(e,t){var n,r,o,s,c=/^(\w+:\/\/([^\/]+))(.*)$/;if(e.match(c))return e;if(n=t.match(c),"/"===e.charAt(0))return n[1]+e;for(o=n[2].split("/"),r=e.split("/"),o.pop(),s=0;s<r.length;s++)"."!==r[s]&&(".."===r[s]?o.pop():o.push(r[s]));return n[1]+o.join("/")}function i(e,t){var n=new RegExp(t+"s*=s*[\\'\"]([^\\'\"]+)[\\'\"]").exec(e);if(n)return n[1]}(t="a[data-codepen], button[data-codepen]",r=(n||document).querySelectorAll(t),Array.prototype.slice.call(r)).forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-codepen");!function(e){var t=window.open("","_blank");!function(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){200===n.status&&t(n.responseText)},n.send()}(e,(function(n){var r=function(e,t){var n,r,l,a=/<script([^>]*)>([\s\S]*?)<\/script>/g,u=/<link([^>]*)>/g,p=/<style([^>]*)>([\s\S]*?)<\/style>/g,f="",d=[],m=[],h=[],g=[];for((n=/<body([^>]*)>([\s\S]*)<\/body>/.exec(e))&&(f=s(function(e,t){return e.replace(/(src|href)(\s*=\s*['"])([^'"]*)(['"])/g,(function(e,n,r,o,s){return n+r+c(o,t)+s}))}(o.filterHtml(n[2],t),t)));n=a.exec(e);)(r=i(n[1],"src"))?h.push(c(r,t)):(l=s(n[2]))&&(l=o.filterJs(l,t),d.push(l));for(;n=u.exec(e);)"stylesheet"===i(n[1],"rel")&&"print"!==i(n[1],"media")&&(r=i(n[1],"href"))&&g.push(c(r,t));for(;n=p.exec(e);)l=n[2],(l=s(l=o.filterCss(l,t)))&&m.push(l);return{css:m.join("\n\n"),js:d.join("\n\n"),html:f,js_external:h.filter(o.filterJsUrl).join(";"),css_external:g.filter(o.filterCssUrl).join(";"),editors:(!o.collapseHtml&&f?"1":"0")+(!o.collapseCss&&m.length?"1":"0")+(!o.collapseJs&&d.length?"1":"0")}}(n,e);t.document.open(),t.document.write('<html><body><form action="https://codepen.io/pen/define" method="POST"><input type="hidden" name="data" value="'+(JSON.stringify(r)+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")+'" /></form><script>document.forms[0].submit()<\/script></body></html>'),t.document.close()}))}(t?c(t,window.location.href):window.location.href)}))}))}))})();