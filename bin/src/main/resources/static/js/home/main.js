/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },



    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());        function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

        function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

          function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

        function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

                                    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

        function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

        function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
                    getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }        function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                    'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                    'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }        var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
      };        window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;









    "use strict";

    //General function for all pages

    //Modernizr touch detect
    Modernizr.load({
            test: Modernizr.touch,
            yep :['css/touch.css?v=1'],
            nope: [] 
    });

	//1. Scroll to top arrow
	// Scroll to top
        var $block =$('<div/>',{'class':'top-scroll'}).append('<a href="#"/>').hide().appendTo('body').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
            return false;
        });
                  
        //initialization
        var $window = $(window);

        if ($window.scrollTop() > 35) {showElem();} 
        else {hideElem();}

        //handlers    
        $window.scroll(function () {    
            if ($(this).scrollTop() > 35) {showElem();} 
            else {hideElem();}
        });

        //functions
        function hideElem(){
            $block.fadeOut();
        }   
        function showElem(){
            $block.fadeIn();
        }

    //2. Mobile menu
    //Init mobile menu
    $('#navigation').mobileMenu({
        triggerMenu:'#navigation-toggle',
        subMenuTrigger: ".sub-nav-toggle",
        animationSpeed:500  
    });

    //3. Search bar dropdown
    //search bar
    $("#search-sort").selectbox({
            onChange: function (val, inst) {

                $(inst.input[0]).children().each(function(item){
                    $(this).removeAttr('selected');
                })
                $(inst.input[0]).find('[value="'+val+'"]').attr('selected','selected');
            }

        });

    //4. Login window pop up
    //Login pop up
    $('.login-window').click(function (e){
        e.preventDefault();
        $('.overlay').removeClass('close').addClass('open');
    });

    $('.overlay-close').click(function (e) {
        e.preventDefault;
        $('.overlay').removeClass('open').addClass('close');

        setTimeout(function(){
            $('.overlay').removeClass('close');}, 500);
    });

function init_Elements () {
    "use strict";

	//1. Accodions
	//Init 2 type accordions
        $('#accordion').collapse();
        $('#accordion-dark').collapse();

    //2. Dropdown
    //select
    $("#select-sort").selectbox({
            onChange: function (val, inst) {

                $(inst.input[0]).children().each(function(item){
                    $(this).removeAttr('selected');
                })
                $(inst.input[0]).find('[value="'+val+'"]').attr('selected','selected');
            }

        });

            

    //3. Datapicker init
    $( ".datepicker__input" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim:"fade"
    });

    $(document).click(function(e) { 
        var ele = $(e.target); 
        if (!ele.hasClass("datepicker__input") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length){
             $(".datepicker__input").datepicker("hide");

        }
   });

   //4. Tabs
   //Init 2 type tabs
    $('#hTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('#vTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    }); 

    //5. Mega select with filters
    //Mega select interaction
            $('.mega-select__filter').click(function(e){
                //prevent the default behaviour of the link
                e.preventDefault();
                $('.select__field').val('');
   
                $('.mega-select__filter').removeClass('filter--active');
                $(this).addClass('filter--active');
                
                //get the data attribute of the clicked link(which is equal to value filter of our content
                var filter = $(this).attr('data-filter');

                //Filter buttoms
                //show all the list items(this is needed to get the hidden ones shown)
                $(".select__btn a").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                $('.select__btn a:not(.' + filter + ')').hide();

                //Filter dropdown
                //show all the list items(this is needed to get the hidden ones shown)
                $(".select__group").removeClass("active-dropdown");
                $(".select__group").show();
                
                /*using the :not attribute and the filter class in it we are selecting
                only the list items that don't have that class and hide them '*/
                $('.select__group.' + filter).addClass("active-dropdown");
                $('.select__group:not(.' + filter + ')').hide();
            });

             $('.filter--active').trigger('click');
                
                
            
            $('.select__field').focus(function() {
                $(this).parent().find('.active-dropdown').css("opacity", 1);
            });

            $('.select__field').blur(function() {
                $(this).parent().find('.active-dropdown').css("opacity", 0);
            });


            $('.select__variant').click( function () {
                var value = $(this).attr('data-value');

                $('.select__field').val(value);
            });

    //6. Progressbar
    		//Count function for progressbar
    		function init_progressBar(duration) {
                    $('.progress').each(function() {
                        var value = $(this).find('.progress__bar').attr('data-level');
                        var result = value + '%';
                        if(duration) {
                            $(this).find('.progress__current').animate({width : value + '%'}, duration);
                        }
                        else {
                            $(this).find('.progress__current').css({'width' : value + '%'});
                        }
                        
                    });
            }

            //inview progress bars
            $('.progress').one('inview', function (event, visible) {
                if (visible == true) {
                      init_progressBar(2000);
                }
            });

    //7. Dropdown for authorize button
    		//user list option
            $('.auth__show').click(function (e){
                e.preventDefault();
                $('.auth__function').toggleClass('open-function')
            })

            $('.btn--singin').click(function (e){
                e.preventDefault();
                $('.auth__function').toggleClass('open-function')
            });

}

function init_Home() {
    "use strict";

	//1. Init revolution slider and add arrows behaviour
				var api = $('.banner').revolution({
                    delay:9000,
                    startwidth:1170,
                    startheight:500,
             
                     onHoverStop:"on",
             
                     hideArrowsOnMobile:"off",

                     hideTimerBar:"on",
                     hideThumbs:'0',
             
                     keyboardNavigation:"on",
             
                     navigationType:"none",
                     navigationArrows:"solo",
             
                     soloArrowLeftHalign:"left",
                     soloArrowLeftValign:"center",
                     soloArrowLeftHOffset:0,
                     soloArrowLeftVOffset:0,
             
                     soloArrowRightHalign:"right",
                     soloArrowRightValign:"center",
                     soloArrowRightHOffset:0,
                     soloArrowRightVOffset:0,
             
             
                     touchenabled:"on",
                     swipe_velocity:"0.7",
                     swipe_max_touches:"1",
                     swipe_min_touches:"1",
                     drag_block_vertical:"false",
             
             
                     fullWidth:"off",
                     forceFullWidth:"off",
                     fullScreen:"off",
             
                  });

                    api.bind("revolution.slide.onchange",function (e,data) {
                         var slides = $('.banner .slide');
                         var currentSlide= data.slideIndex;

                         var nextSlide = slides.eq(currentSlide).attr('data-slide');
                         var prevSlide = slides.eq(currentSlide-2).attr('data-slide');

                         var lastSlide = slides.length;

                         if(currentSlide == lastSlide) {
                             var nextSlide = slides.eq(0).attr('data-slide');
                         }

                         //put onload value for slider navigation
                        $('.tp-leftarrow').html( '<span class="slider__info">' + prevSlide + '</span>');
                        $('.tp-rightarrow').html( '<span class="slider__info">' + nextSlide + '</span>');

                    });

	
	//2. Dropdown for authorize button
    		//user list option
            $('.auth__show').click(function (e){
                e.preventDefault();
                $('.auth__function').toggleClass('open-function')
            })

            $('.btn--singin').click(function (e){
                e.preventDefault();
                $('.auth__function').toggleClass('open-function')
            });

    //3. Mega select with filters (and markers)
    //Mega select interaction
                    $('.mega-select__filter').click(function(e){
                        //prevent the default behaviour of the link
                        e.preventDefault();
                        $('.select__field').val('');
           
                        $('.mega-select__filter').removeClass('filter--active');
                        $(this).addClass('filter--active');
                        
                        //get the data attribute of the clicked link(which is equal to value filter of our content)
                        var filter = $(this).attr('data-filter');

                        //Filter buttons
                        //show all the list items(this is needed to get the hidden ones shown)
                        $(".select__btn a").show();
                        $(".select__btn a").css('display', 'inline-block');
                        
                        /*using the :not attribute and the filter class in it we are selecting
                        only the list items that don't have that class and hide them '*/
                        $('.select__btn a:not(.' + filter + ')').hide();

                        //Filter dropdown
                        //show all the list items(this is needed to get the hidden ones shown)
                        $(".select__group").removeClass("active-dropdown");
                        $(".select__group").show();
                        
                        /*using the :not attribute and the filter class in it we are selecting
                        only the list items that don't have that class and hide them '*/
                        $('.select__group.' + filter).addClass("active-dropdown");
                        $('.select__group:not(.' + filter + ')').hide();

                        //Filter marker
                        //show all the list items(this is needed to get the hidden ones shown)
                        $(".marker-indecator").show();
                        
                        /*using the :not attribute and the filter class in it we are selecting
                        only the list items that don't have that class and hide them '*/
                        $('.marker-indecator:not(.' + filter + ')').hide();                        
                    });

                    $('.filter--active').trigger('click');
                    $('.active-dropdown').css("z-index", '-1');
            
                    $('.select__field').focus(function() {
                        $(this).parent().find('.active-dropdown').css("opacity", 1);
                        $(this).parent().find('.active-dropdown').css("z-index", '50');
                    });

                    $('.select__field').blur(function() {
                        $(this).parent().find('.active-dropdown').css("opacity", 0);
                        $(this).parent().find('.active-dropdown').css("z-index", '-1');
                    });

                    $('.select__variant').click( function (e) {
                        e.preventDefault();
                        $(this).parent().find('.active-dropdown').css("z-index", '50');
                        var value = $(this).attr('data-value');
                        $('.select__field').val(value);
                        $(this).parent().find('.active-dropdown').css("z-index", '-1');
                    });

                    $('body').click( function (e){
                      console.log(e.target);
                    })

    //4. Rating scrore init
    //Rating star
    $('.score').raty({
        width:130, 
        score: 0,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

    //5. Scroll down navigation function
    //scroll down
    $('.movie-best__check').click(function (ev) {
        ev.preventDefault();
        $('html, body').stop().animate({'scrollTop': $('#target').offset().top-30}, 900, 'swing');
    });
}

function init_BookingOne() {
    "use strict";

	//1. Buttons for choose order method
	//order factor
    $('.order__control-btn').click(function (e) {
        e.preventDefault();

        $('.order__control-btn').removeClass('active');
        $(this).addClass('active');
    })

    //2. Init vars for order data
    // var for booking;
                var movie = $('.choosen-movie'),
                    city = $('.choosen-city'),
                    date = $('.choosen-date'),
                    cinema = $('.choosen-cinema'),
                    time = $('.choosen-time');

    //3. Swiper slider
    //init employee sliders
                var mySwiper = new Swiper('.swiper-container',{
                    slidesPerView:10,
                    loop:true
                  });

                $('.swiper-slide-active').css({'marginLeft':'-2px'});
                //media swipe visible slide
                //Onload detect
                    if ($(window).width() > 1930 ){
                         mySwiper.params.slidesPerView=13;
                         mySwiper.resizeFix();         
                    }else

                    if ($(window).width() >993 & $(window).width() <  1199  ){
                         mySwiper.params.slidesPerView=6;
                         mySwiper.resizeFix();         
                    }
                    else
                    if ($(window).width() >768 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=5;
                         mySwiper.resizeFix();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=4;
                         mySwiper.resizeFix();    
                    
                    } else
                     if ($(window).width() < 480){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.resizeFix();    
                    }

                    else{
                        mySwiper.params.slidesPerView=10;
                        mySwiper.resizeFix();
                    }

                //Resize detect
                $(window).resize(function(){
                    if ($(window).width() > 1930 ){
                         mySwiper.params.slidesPerView=13;
                         mySwiper.reInit();          
                    }

                    if ($(window).width() >993 & $(window).width() <  1199  ){
                         mySwiper.params.slidesPerView=6;
                         mySwiper.reInit();          
                    }
                    else
                     if ($(window).width() >768 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=5;
                         mySwiper.reInit();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=4;
                          mySwiper.reInit();    
                    
                    } else
                     if ($(window).width() < 480){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();   
                    }

                    else{
                        mySwiper.params.slidesPerView=10;
                        mySwiper.reInit();
                    }
                 });
	
	//4. Dropdown init 
				//select
                $("#select-sort").selectbox({
                        onChange: function (val, inst) {

                            $(inst.input[0]).children().each(function(item){
                                $(this).removeAttr('selected');
                            })
                            $(inst.input[0]).find('[value="'+val+'"]').attr('selected','selected');
                        }

                    });

    
    //5. Datepicker init
                $( ".datepicker__input" ).datepicker({
                  showOtherMonths: true,
                  selectOtherMonths: true,
                  showAnim:"fade"
                });

                $(document).click(function(e) { 
                    var ele = $(e.target); 
                    if (!ele.hasClass("datepicker__input") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length){
                       $(".datepicker__input").datepicker("hide");
                     }
                });

	//6. Choose variant proccess
				//choose film
                $('.film-images').click(function (e) {
                	 //visual iteractive for choose
                     $('.film-images').removeClass('film--choosed');
                     $(this).addClass('film--choosed');

                     //data element init
                     var chooseFilm = $(this).parent().attr('data-film');
                     $('.choose-indector--film').find('.choosen-area').text(chooseFilm);

                     //data element set
                     movie.val(chooseFilm);

                })

                //choose time
                $('.time-select__item').click(function (){
                	//visual iteractive for choose
                    $('.time-select__item').removeClass('active');
                    $(this).addClass('active');

                    //data element init
                    var chooseTime = $(this).attr('data-time');
                     $('.choose-indector--time').find('.choosen-area').text(chooseTime);

                    //data element init
                    var chooseCinema = $(this).parent().parent().find('.time-select__place').text(); 

                    //data element set
                    time.val(chooseTime);
                    cinema.val(chooseCinema);
                });

                // choose (change) city and date for film

                //data element init (default)
                var chooseCity = $('.select .sbSelector').text();
                var chooseDate = $('.datepicker__input').val();

                //data element set (default)
                city.val(chooseCity);
                date.val(chooseDate);


                $('.select .sbOptions').click(function (){
                	//data element change
                    var chooseCity = $('.select .sbSelector').text();
                    //data element set change
                    city.val(chooseCity);
                });

                $('.datepicker__input').change(function () {
                	//data element change
                    var chooseDate = $('.datepicker__input').val();
                    //data element set change
                    date.val(chooseDate);
                });

                // --- Step for data - serialize and send to next page---//
                $('.booking-form').submit( function () {
                    var bookData = $(this).serialize();
                    $.get( $(this).attr('action'), bookData );
                })

    //7. Visibility block on page control
    			//control block display on page
                $('.choose-indector--film').click(function (e) {
                    e.preventDefault();
                    $(this).toggleClass('hide-content');
                    $('.choose-film').slideToggle(400);
                })

                $('.choose-indector--time').click(function (e) {
                    e.preventDefault();
                    $(this).toggleClass('hide-content');
                    $('.time-select').slideToggle(400);
                })
}


function init_BookingTwo() {
    "use strict";

    // Khởi tạo danh sách ghế đã chọn từ sessionStorage
    var selectedSeats = sessionStorage.getItem('selectedSeats');
    selectedSeats = selectedSeats ? JSON.parse(selectedSeats) : [];

    //data elements init
    var sum = 0;
    var cheap = 0;
    var middle = 0;
    var expansive = 0;

    // Hàm áp dụng trạng thái đã chọn cho ghế
    function applySelectedSeats() {
        $('.sits__place').each(function () {
            var roomId = $(this).attr('data-room-chair-id');
            if (selectedSeats.includes(roomId)) {
                var place = $(this).attr('data-place');
                var ticketPrice = $(this).attr('data-price');
                var position = $(this).text();

                $(this).addClass('sits-state--your');

         
            }
        });

        // Hiển thị danh sách ghế đã chọn
        displaySelectedSeats();
    }

    // Hàm hiển thị danh sách ghế đã chọn
    function displaySelectedSeats() {
    // Xóa toàn bộ nội dung trong .checked-place
    $('.checked-place').empty();

    // Reset tổng giá vé khi hiển thị lại danh sách ghế đã chọn
    var sum = 0;

    // Thêm lại từng ghế đã chọn
    selectedSeats.forEach(function (roomId) {
        var placeElement = $('.sits__place[data-room-chair-id="' + roomId + '"]');
        var place = placeElement.attr('data-place');
        
        // Sửa đổi giá vé thành 40
        var ticketPrice = 40;

        var position = placeElement.text();

        $('.checked-place').append('<span class="choosen-place ' + place + '" data-sit="' + place + '">' + position + '</span>');

        // Thực hiện phép nhân giá vé với số lượng ghế đã chọn và cộng vào sum
        sum += ticketPrice;
    });

    // Cập nhật kết quả
    $('.checked-result').text('$' + sum);
}

    // Áp dụng trạng thái đã chọn khi tải trang
    applySelectedSeats();

    $('.sits__place').click(function (e) {
        e.preventDefault();
        var place = $(this).attr('data-place');
        var ticketPrice = $(this).attr('data-price');
        var roomId = $(this).attr('data-room-chair-id'); // Lấy ID của ghế
        var position = $(this).text();

        if (!$(e.target).hasClass('sits-state--your')) {
            if (!$(this).hasClass('sits-state--not')) {
                $(this).addClass('sits-state--your');

                // Lưu ID của ghế vào danh sách ghế đã chọn
                selectedSeats.push(roomId);
                // Lưu danh sách ghế đã chọn vào sessionStorage
                sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));

                // Hiển thị danh sách ghế đã chọn
                displaySelectedSeats();
            }
        } else {
            $(this).removeClass('sits-state--your');

            // Xóa ID của ghế khỏi danh sách ghế đã chọn
            selectedSeats = selectedSeats.filter(seatId => seatId !== roomId);
            // Cập nhật sessionStorage
            sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));

            // Hiển thị danh sách ghế đã chọn
            displaySelectedSeats();
        }
    });
}





function init_CinemaList () {
    "use strict";

	//1. Dropdowns
				//select
                $(".select__sort").selectbox({
                    onChange: function (val, inst) {

                        $(inst.input[0]).children().each(function(item){
                            $(this).removeAttr('selected');
                        })
                        $(inst.input[0]).find('[value="'+val+'"]').attr('selected','selected');
                    }

                });

    //2. Sorting buy category
                // sorting function
                $('.tags__item').click(function (e) {
                    //prevent the default behaviour of the link
                    e.preventDefault();

                        $('.tags__item').removeClass('item-active');
                        $(this).addClass('item-active');

                        var filter = $(this).attr('data-filter');

                        //show all the list items(this is needed to get the hidden ones shown)
                        $(".cinema-item").show();
                        //hide advertazing and pagination block
                        $('.adv-place').show();
                        $('.pagination').show();
                            
                        /*using the :not attribute and the filter class in it we are selecting
                            only the list items that don't have that class and hide them '*/
                        if ( filter.toLowerCase()!=='all'){
                            $('.cinema-item:not(.' + filter + ')').hide();
                            //show advertazing and pagination block only on filter (all)
                            $('.pagination').hide();
                            $('.adv-place').hide();
                            // fix grid position
                            $('.row').css('clear','none');
                        }
                });
}

function init_Contact () {
    "use strict";

	//1. Fullscreen map init
				//Init map
                    var mapOptions = {
                        scaleControl: true,
                        center: new google.maps.LatLng(51.509708, -0.130539),
                        zoom: 15,
                        navigationControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('location-map'),mapOptions);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: map.getCenter() 
                    });

                    //Custome map style
                    var map_style = [{stylers:[{saturation:-100},{gamma:3}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:0},{gamma:2},{hue:"#aaaaaa"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]}]

                    //Then we use this data to create the styles.
                    var styled_map = new google.maps.StyledMapType(map_style, {name: "Cusmome style"});

                    map.mapTypes.set('map_styles', styled_map);
                    map.setMapTypeId('map_styles');


                    //=====================================

                    // Maker

                    //=====================================

                    //Creates the information to go in the pop-up info box.
                    var boxTextA = document.createElement("div");
                    boxTextA.innerHTML = '<span class="pop_up_box_text">Leicester Sq, London, WC2H 7LP</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsA = {
                     content: boxTextA
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxA = new InfoBox(infoboxOptionsA);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(marker, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxA.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(marker.getPosition());
                    });
}

function init_Gallery () {
    "use strict";
	//1. Pop up fuction for gallery elements

				//pop up for photo (object - images)
                $('.gallery-item--photo').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    mainClass: 'mfp-fade',
                    image: {
                        verticalFit: true
                    },
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    }
                    
                });

                //pop up for photo (object - title link)
                $('.gallery-item--photo-link').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    mainClass: 'mfp-fade',
                    image: {
                        verticalFit: true
                    },
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    }
                    
                });

                //pop up for video (object - images)
                 $('.gallery-item--video').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,

                    fixedContentPos: false,
                    gallery: {
                        enabled: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    }
                });

                //pop up for video (object - title link)
                 $('.gallery-item--video-link').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,

                    fixedContentPos: false,
                    gallery: {
                        enabled: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    }
                });
}

function init_MovieList () {
    "use strict";

	//1. Dropdown init 
				//select
                $(".select__sort").selectbox({
                    onChange: function (val, inst) {

                        $(inst.input[0]).children().each(function(item){
                            $(this).removeAttr('selected');
                        })
                        $(inst.input[0]).find('[value="'+val+'"]').attr('selected','selected');
                    }

                });

    
    //2. Datepicker init
                $( ".datepicker__input" ).datepicker({
                  showOtherMonths: true,
                  selectOtherMonths: true,
                  showAnim:"fade"
                });

                $(document).click(function(e) { 
                    var ele = $(e.target); 
                    if (!ele.hasClass("datepicker__input") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length){
                       $(".datepicker__input").datepicker("hide");
                     }
                });

    //3. Rating scrore init
    //Rating star
    $('.score').raty({
        width:130, 
        score: 0,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

    //4. Sorting by category
    			// sorting function
                $('.tags__item').click(function (e) {
                    //prevent the default behaviour of the link
                    e.preventDefault();

                        //active sorted item
                        $('.tags__item').removeClass('item-active');
                        $(this).addClass('item-active');

                        var filter = $(this).attr('data-filter');

                        //show all the list items(this is needed to get the hidden ones shown)
                        $(".movie--preview").show();
                        $('.pagination').show();
                            
                        /*using the :not attribute and the filter class in it we are selecting
                            only the list items that don't have that class and hide them '*/
                        if ( filter.toLowerCase()!=='all'){
                            $('.movie--preview:not(.' + filter + ')').hide();
                            //Show pagination on filter = all;
                            $('.pagination').hide();
                        }
                });

	//5. Toggle function for additional content
				//toggle timetable show
                $('.movie__show-btn').click(function (ev) {
                    ev.preventDefault();

                    $(this).parents('.movie--preview').find('.time-select').slideToggle(500);
                });

                $('.time-select__item').click(function (){
                    $('.time-select__item').removeClass('active');
                    $(this).addClass('active');
                });
}

function init_MoviePage () {
    "use strict";

	//1. Rating scrore init
    //Rating star
    $('.score').raty({
        width:130, 
        score: 5,
        path: 'images/rate/',
        starOff : 'star-off.svg',
        starOn  : 'star-on.svg' 
    });

    //2. Swiper slider
    //Media slider
                //init employee sliders
                var mySwiper = new Swiper('.swiper-container',{
                    slidesPerView:4,
                  });

                $('.swiper-slide-active').css({'marginLeft':'-1px'});

                //Media switch
                $('.list--photo').click(function (e){
                    e.preventDefault();

                    var mediaFilter = $(this).attr('data-filter');

                    $('.swiper-slide').hide();
                    $('.' + mediaFilter).show();

                    $('.swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)')
                    mySwiper.params.slideClass = mediaFilter;
         
                    mySwiper.reInit();
                    $('.swiper-slide-active').css({'marginLeft':'-1px'});
                })

                $('.list--video').click(function (e){
                    e.preventDefault();

                    var mediaFilter = $(this).attr('data-filter');
                    $('.swiper-slide').hide();
                    $('.' + mediaFilter).show();

                    $('.swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)')
                    mySwiper.params.slideClass = mediaFilter;

                    mySwiper.reInit();
                    $('.swiper-slide-active').css({'marginLeft':'-1px'});
                });

                    //media swipe visible slide
                    //Onload detect

                    if ($(window).width() >760 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.resizeFix();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=3;
                         mySwiper.resizeFix();    
                    
                    } else

                     if ($(window).width() < 480 & $(window).width() > 361){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.resizeFix();    
                    } else
                    if ($(window).width() < 360){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.resizeFix();    
                    }

                    else{
                        mySwiper.params.slidesPerView=4;
                        mySwiper.resizeFix();
                    }

                     if ($('.swiper-container').width() > 900 ){
                        mySwiper.params.slidesPerView=5;
                        mySwiper.resizeFix();
                     }

                  //Resize detect
                $(window).resize(function(){

                     if ($(window).width() >760 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=3;
                          mySwiper.reInit();    
                    
                    } else
                     if ($(window).width() < 480 & $(window).width() > 361){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();   
                    } else 
                    if ($(window).width() < 360){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.reInit();   
                    }

                    else{
                        mySwiper.params.slidesPerView=4;
                        mySwiper.reInit();
                    }


                 });

    //3. Slider item pop up
   				//boolian var
                var toggle = true;

                //pop up video media element
                $('.media-video .movie__media-item').magnificPopup({
                    //disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,

                    fixedContentPos: false,

                    gallery: {
                        enabled: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },

                    disableOn:function () {
                        return toggle;
                    }
                });

                //pop up photo media element
                $('.media-photo .movie__media-item').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    mainClass: 'mfp-fade',
                    image: {
                        verticalFit: true
                    },

                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },

                    disableOn:function () {
                        return toggle;
                    }
                    
                });

                //detect if was move after click
                $('.movie__media .swiper-slide').on('mousedown', function(e){
                    toggle = true;
                    $(this).on('mousemove', function testMove(){
                          toggle = false;
                    });
                });

    //4. Dropdown init 
				//select
                $("#select-sort").selectbox({
                    onChange: function (val, inst) {

                        $(inst.input[0]).children().each(function(item){
                            $(this).removeAttr('selected');
                        })
                        $(inst.input[0]).find('[value="'+val+'"]').attr('selected','selected');
                    }

                });

    
    //5. Datepicker init
                $( ".datepicker__input" ).datepicker({
                  showOtherMonths: true,
                  selectOtherMonths: true,
                  showAnim:"fade"
                });

                $(document).click(function(e) { 
                    var ele = $(e.target); 
                    if (!ele.hasClass("datepicker__input") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length){
                       $(".datepicker__input").datepicker("hide");
                     }
                });

    //6. Reply comment form
    			// button more comments
                $('#hide-comments').hide();

                $('.comment-more').click(function (e) {
                        e.preventDefault();
                        $('#hide-comments').slideDown(400);
                        $(this).hide();
                })

                  //reply comment function
                  $('.comment__reply').click( function (e) {
                        e.preventDefault();

                        $('.comment').find('.comment-form').remove();
                        $(this).parent().append("<form id='comment-form' class='comment-form' method='post'>\
                            <textarea class='comment-form__text' placeholder='Add you comment here'></textarea>\
                            <label class='comment-form__info'>250 characters left</label>\
                            <button type='submit' class='btn btn-md btn--danger comment-form__btn'>add comment</button>\
                        </form>");
                  });

    //7. Timetable active element
    			$('.time-select__item').click(function (){
                    $('.time-select__item').removeClass('active');
                    $(this).addClass('active');
                });

    //8. Toggle between cinemas timetable and map with location
    			//change map - ticket list
                $('#map-switch').click(function(ev){
                    ev.preventDefault();

                    $('.time-select').slideToggle(500);
                    $('.map').slideToggle(500);

                    $('.show-map').toggle();
                    $('.show-time').toggle();
                    $(this).blur();
                });

                $(window).load(function () {
                    $('.map').addClass('hide-map');
                })

   	//9. Init map with several markers on.
   					//Map start init
                    var mapOptions = {
                        scaleControl: true,
                        center: new google.maps.LatLng(51.508798, -0.131687),
                        zoom: 15,
                        navigationControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('cimenas-map'),mapOptions);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: map.getCenter()
                    });

                    var markerB = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(51.510838, -0.130400)
                    });

                    var markerC = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(51.512615, -0.130607)
                    });

                    var markerD = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(51.509859, -0.130213)
                    });

                    var markerE = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(51.509194, -0.130091)
                    });


                    //Custome map style
                    var map_style = [{stylers:[{saturation:-100},{gamma:3}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:0},{gamma:2},{hue:"#aaaaaa"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]}]

                    //Then we use this data to create the styles.
                    var styled_map = new google.maps.StyledMapType(map_style, {name: "Cusmome style"});

                    map.mapTypes.set('map_styles', styled_map);
                    map.setMapTypeId('map_styles');

                    //=====================================

                    // Maker A

                    //=====================================

                    //Creates the information to go in the pop-up info box.
                    var boxTextA = document.createElement("div");
                    boxTextA.innerHTML = '<span class="pop_up_box_text">Cineworld, 63-65 Haymarket, London</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsA = {
                     content: boxTextA
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxA = new InfoBox(infoboxOptionsA);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(marker, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxA.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(marker.getPosition());
                    });



                    //=====================================

                    // Maker B

                    //=====================================

                    //Creates the information to go in the pop-up info box.
                    var boxTextB = document.createElement("div");
                    boxTextB.innerHTML = '<span class="pop_up_box_text">Empire Cinemas, 5-6 Leicester Square, London</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsB = {
                     content: boxTextB
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxB = new InfoBox(infoboxOptionsB);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(markerB, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxB.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(markerB.getPosition());
                    });

                    //=====================================

                    // Maker C

                    //=====================================


                    //Creates the information to go in the pop-up info box.
                    var boxTextC = document.createElement("div");
                    boxTextC.innerHTML = '<span class="pop_up_box_text">Curzon Soho, 99 Shaftesbury Ave , London</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsC = {
                     content: boxTextC
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxC = new InfoBox(infoboxOptionsC);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(markerC, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxC.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(markerC.getPosition());
                    });

                    //=====================================

                    // Maker D

                    //=====================================

                    //Creates the information to go in the pop-up info box.
                    var boxTextD = document.createElement("div");
                    boxTextD.innerHTML = '<span class="pop_up_box_text">Odeon Cinema West End, Leicester Square, London</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsD = {
                     content: boxTextD
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxD = new InfoBox(infoboxOptionsD);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(markerD, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxD.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(markerD.getPosition());
                    });



                    //=====================================

                    // Maker E

                    //=====================================

                    //Creates the information to go in the pop-up info box.
                    var boxTextE = document.createElement("div");
                    boxTextE.innerHTML = '<span class="pop_up_box_text">Picturehouse Cinemas Ltd, Orange Street, London</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsE = {
                     content: boxTextE
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxE = new InfoBox(infoboxOptionsE);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(markerE, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxE.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(markerE.getPosition());
                    });
    
    //10. Scroll down navigation function
    //scroll down
    $('.comment-link').click(function (ev) {
        ev.preventDefault();
        $('html, body').stop().animate({'scrollTop': $('.comment-wrapper').offset().top-90}, 900, 'swing');
    });
}

function init_MoviePageFull () {
    "use strict";

            //init employee sliders
                var mySwiper = new Swiper('.swiper-container',{
                    slidesPerView:5,
                  });

                $('.swiper-slide-active').css({'marginLeft':'-1px'});

                //Media switch
                $('.list--photo').click(function (e){
                    e.preventDefault();

                    var mediaFilter = $(this).attr('data-filter');

                    $('.swiper-slide').hide();
                    $('.' + mediaFilter).show();

                    $('.swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)')
                    mySwiper.params.slideClass = mediaFilter;
         
                    mySwiper.reInit();
                    $('.swiper-slide-active').css({'marginLeft':'-1px'});
                })

                $('.list--video').click(function (e){
                    e.preventDefault();

                    var mediaFilter = $(this).attr('data-filter');
                    $('.swiper-slide').hide();
                    $('.' + mediaFilter).show();

                    $('.swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)')
                    mySwiper.params.slideClass = mediaFilter;

                    mySwiper.reInit();
                    $('.swiper-slide-active').css({'marginLeft':'-1px'});
                });
                    //media swipe visible slide
                    //Onload detect

                    if ($(window).width() >768 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=3;
                         mySwiper.resizeFix();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=3;
                         mySwiper.resizeFix();    
                    
                    } else
                     if ($(window).width() < 480 & $(window).width() > 361){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.resizeFix();    
                    } else
                    if ($(window).width() < 360){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.resizeFix();    
                    }

                    else{
                        mySwiper.params.slidesPerView=5;
                        mySwiper.resizeFix();
                    }

                     if ($('.swiper-container').width() > 900 ){
                        mySwiper.params.slidesPerView=5;
                        mySwiper.resizeFix();
                     }

                  //Resize detect
                $(window).resize(function(){
                  if ($(window).width() > 993 & $('.swiper-container').width() > 900 ){
                        mySwiper.params.slidesPerView=5;
                        mySwiper.reInit(); 
                     }

                     if ($(window).width() >768 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=3;
                         mySwiper.reInit();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=3;
                          mySwiper.reInit();    
                    
                    } else
                     if ($(window).width() < 480 & $(window).width() > 361){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();   
                    } else 
                    if ($(window).width() < 360){
                         mySwiper.params.slidesPerView=1;
                         mySwiper.reInit();   
                    }

                    else{
                        mySwiper.params.slidesPerView=5;
                        mySwiper.reInit();
                    }


                 });
}

function init_Rates () {
    "use strict";

	//1. Rating fucntion
				//Rating star
                $('.score').raty({
                    width:130, 
                    score: 0,
                    path: 'images/rate/',
                    starOff : 'star-off.svg',
                    starOn  : 'star-on.svg' 
                });

                //After rate callback
                $('.score').click(function () {
                    $(this).children().hide();

                    $(this).html('<span class="rates__done">Thanks for your vote!<span>')
                })
}

function init_Cinema () {
    "use strict";

	//1. Swiper slider
				//init cinema sliders
                var mySwiper = new Swiper('.swiper-container',{
                    slidesPerView:8,
                    loop:true,
                  });

                $('.swiper-slide-active').css({'marginLeft':'-1px'});
                //media swipe visible slide

                //onload detect
                    if ($(window).width() >993 & $(window).width() <  1199  ){
                         mySwiper.params.slidesPerView=6;
                         mySwiper.resizeFix();         
                    }
                    else
                    if ($(window).width() >768 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=5;
                         mySwiper.resizeFix();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=4;
                         mySwiper.resizeFix();    
                    
                    } else
                     if ($(window).width() < 480){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.resizeFix();    
                    }

                    else{
                        mySwiper.params.slidesPerView=8;
                        mySwiper.resizeFix();
                    }

				//resize detect                   
                $(window).resize(function(){
                    if ($(window).width() >993 & $(window).width() <  1199  ){
                         mySwiper.params.slidesPerView=6;
                         mySwiper.reInit();          
                    }
                    else
                     if ($(window).width() >768 & $(window).width() <  992  ){
                         mySwiper.params.slidesPerView=5;
                         mySwiper.reInit();         
                    }

                    else
                    if ($(window).width() < 767 & $(window).width() > 481){
                         mySwiper.params.slidesPerView=4;
                          mySwiper.reInit();    
                    
                    } else
                     if ($(window).width() < 480){
                         mySwiper.params.slidesPerView=2;
                         mySwiper.reInit();   
                    }

                    else{
                        mySwiper.params.slidesPerView=8;
                        mySwiper.reInit();
                    }
                 });

	//2. Datepicker
				//datepicker
                $( ".datepicker__input" ).datepicker({
                  showOtherMonths: true,
                  selectOtherMonths: true,
                  showAnim:"fade"
                });

                $(document).click(function(e) { 
                    var ele = $(e.target); 
                    if (!ele.hasClass("datepicker__input") && !ele.hasClass("ui-datepicker") && !ele.hasClass("ui-icon") && !$(ele).parent().parents(".ui-datepicker").length){
                       $(".datepicker__input").datepicker("hide");

                     }

                });

    //3. Comment area control
    			// button more comments
                  $('#hide-comments').hide();

                  $('.comment-more').click(function (e) {
                        e.preventDefault();
                        $('#hide-comments').slideDown(400);
                        $(this).hide();
                  })

                  //reply comment function

                  $('.comment__reply').click( function (e) {
                        e.preventDefault();

                        $('.comment').find('.comment-form').remove();


                        $(this).parent().append("<form id='comment-form' class='comment-form' method='post'>\
                            <textarea class='comment-form__text' placeholder='Add you comment here'></textarea>\
                            <label class='comment-form__info'>250 characters left</label>\
                            <button type='submit' class='btn btn-md btn--danger comment-form__btn'>add comment</button>\
                        </form>");
                  });

    //4. Init map
    				var mapOptions = {
                        scaleControl: true,
                        center: new google.maps.LatLng(51.508798, -0.131687),
                        zoom: 16,
                        navigationControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('cinema-map'),mapOptions);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: map.getCenter()
                    });

                    //Custome map style
                    var map_style = [{stylers:[{saturation:-100},{gamma:3}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:0},{gamma:2},{hue:"#aaaaaa"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]}]

                    //Then we use this data to create the styles.
                    var styled_map = new google.maps.StyledMapType(map_style, {name: "Cusmome style"});

                    map.mapTypes.set('map_styles', styled_map);
                    map.setMapTypeId('map_styles');


                    //=====================================

                    // Maker

                    //=====================================

                    //Creates the information to go in the pop-up info box.
                    var boxTextA = document.createElement("div");
                    boxTextA.innerHTML = '<span class="pop_up_box_text">Cineworld, 63-65 Haymarket, London</span>';

                    //Sets up the configuration options of the pop-up info box.
                    var infoboxOptionsA = {
                     content: boxTextA
                     ,disableAutoPan: false
                     ,maxWidth: 0
                     ,pixelOffset: new google.maps.Size(30, -50)
                     ,zIndex: null
                     ,boxStyle: {
                     background: "#4c4145"
                     ,opacity: 1
                     ,width: "300px"
                     ,color: " #b4b1b2"
                     ,fontSize:"13px"
                     ,padding:'14px 20px 15px'
                     }
                     ,closeBoxMargin: "6px 2px 2px 2px"
                     ,infoBoxClearance: new google.maps.Size(1, 1)
                     ,closeBoxURL: "images/components/close.svg"
                     ,isHidden: false
                     ,pane: "floatPane"
                     ,enableEventPropagation: false
                    };

                    
                    //Creates the pop-up infobox for Glastonbury, adding the configuration options set above.
                    var infoboxA = new InfoBox(infoboxOptionsA);


                    //Add an 'event listener' to the Glastonbury map marker to listen out for when it is clicked.
                    google.maps.event.addListener(marker, "click", function (e) {
                     //Open the Glastonbury info box.
                     infoboxA.open(map, this);
                     //Sets the Glastonbury marker to be the center of the map.
                     map.setCenter(marker.getPosition());
                    });
}

function init_SinglePage () {
    "use strict";

	//1. Swiper slider (with arrow behaviur).
				//init images sliders
                var mySwiper = new Swiper('.swiper-container',{
                    slidesPerView:1,
                    onSlideChangeStart:function change(index){
                        var i = mySwiper.activeIndex;
                        var prev = i-1;
                        var next = i+1;

                        var prevSlide = $('.post__preview .swiper-slide').eq(prev).attr('data-text');
                             $('.arrow-left').find('.slider__info').text(prevSlide);
                        var nextSlide = $('.post__preview .swiper-slide').eq(next).attr('data-text');
                            $('.arrow-right').find('.slider__info').text(nextSlide);

                        //condition first-last slider
                        $('.arrow-left , .arrow-right').removeClass('no-hover');

                        if(i == 0){
                            $('.arrow-left').find('.slider__info').text('');
                            $('.arrow-left').addClass('no-hover');
                        }

                        if(i == last){
                            $('.arrow-right').find('.slider__info').text('');
                            $('.arrow-right').addClass('no-hover');
                        }
                    }
                  });

                //var init and put onload value
                var i = mySwiper.activeIndex;
                var last =mySwiper.slides.length - 1; 
                var prev = i-1;
                var next = i+1;

                var prevSlide = $('.post__preview .swiper-slide').eq(prev).attr('data-text');
                var nextSlide = $('.post__preview .swiper-slide').eq(next).attr('data-text');

                //put onload value for slider navigation
                $('.arrow-left').find('.slider__info').text(prevSlide);
                $('.arrow-right').find('.slider__info').text(nextSlide);

                //condition first-last slider
                if(i == 0){
                    $('.arrow-left').find('.slider__info').text('');
                }

                if(i == last){
                    $('.arrow-right').find('.slider__info').text('');
                }

                //init slider navigation arrow

                  $('.arrow-left').on('click', function(e){
                    e.preventDefault();
                    mySwiper.swipePrev();
                  })
                  $('.arrow-right').on('click', function(e){
                    e.preventDefault();
                    mySwiper.swipeNext();
                  })

	//2. Comment area control
				// button more comments
                  $('#hide-comments').hide();

                  $('.comment-more').click(function (e) {
                        e.preventDefault();
                        $('#hide-comments').slideDown(400);
                        $(this).hide();
                  })

                  //reply comment function

                  $('.comment__reply').click( function (e) {
                        e.preventDefault();

                        $('.comment').find('.comment-form').remove();


                        $(this).parent().append("<form id='comment-form' class='comment-form' method='post'>\
                            <textarea class='comment-form__text' placeholder='Add you comment here'></textarea>\
                            <label class='comment-form__info'>250 characters left</label>\
                            <button type='submit' class='btn btn-md btn--danger comment-form__btn'>add comment</button>\
                        </form>");
                  });
}

function init_Trailer () {
    "use strict";

	//1. Element controls
				//pop up element
                $('.trailer-sample').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,

                    fixedContentPos: false
                });

                //show hide content
                $('.trailer-btn').click(function (e) {
                    e.preventDefault();

                    $(this).hide();
                    $(this).parent().addClass('trailer-block--short').find('.hidden-content').slideDown(500);
                })
}
