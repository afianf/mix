function darkMode(){var e=qSel("#mainCont");Pu.sLS("webMode","drK"===Pu.gLS("webMode")?"lgT":"drK"),"drK"===Pu.gLS("webMode")?(e.classList.remove("syD","lgT"),addCt(e,"drK")):(e.classList.remove("drK","syD"),addCt(e,"lgT")),themeColor("themeC")};function headScroll(){var e=window.pageYOffset||document.documentElement.scrollTop,d=qSel("#header"),l=qSel("#mobile-menu");20<e?(addCt(d,"stick"),addCt(l,"slide")):(remCt(d,"stick"),remCt(l,"slide"))}
window.addEventListener("scroll",headScroll);"true"==isPrivateBlog&&toastNotif('<i class="check"></i>'+blogTitle+" Blog is Private.");(function(){var imgU=qSell('img.imgThm, .sImg .im, .cmAv .im, .pIm .im, .admIm .im, .sldC .sldIm');for(var i=0;i<imgU.length;i++){if(imgU[i].getAttribute('data-src')){var uImg=imgU[i].getAttribute('data-src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&(uImg.includes('-pd')==!0||uImg.includes('-p-k-no-nu')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30').replace('-pd','-pd-rw-e30'))}}else if(imgU[i].getAttribute('src')){var uImg=imgU[i].getAttribute('src');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-src',uImg.replace('-nu','-nu-rw-e30'))}else{imgU[i].setAttribute('data-src',uImg)};addCt(imgU[i],'lazy');imgU[i].setAttribute('src','data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')}else if(imgU[i].getAttribute('data-style')){var uImg=imgU[i].getAttribute('data-style');if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('w60')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('w60','w60-rw-e30'))}else if((uImg.includes('blogspot')==!0||uImg.includes('googleusercontent')==!0)&&uImg.includes('p-k-no-nu')==!0&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace('-nu','-nu-rw-e30'))}else if((uImg.includes('=s')==!0||uImg.includes('/s')==!0)&&uImg.includes('-rw')==!1){imgU[i].setAttribute('data-style',uImg.replace(/\/s[0-9]+(\-c)?/,'/s1280-rw-e30').replace(/\=s[0-9]+(\-c)?/,'=s1280-rw-e30'))}}}})();Defer.dom('.lazy',100,'loaded',null,{rootMargin:'1px'});'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',()=>Defer.dom('.lazy',100,'loaded',null,{rootMargin:'1px'}));const PuSet={realViews:{databaseUrl:"",abbreviation:"true"},noInternet:{enablePopup:"true",enableToast:"true",offlineMes:"You are Offline!",onlineMes:"You are Online!"},preCopy:{copiedMes:"<i class='clipboard'></i>Copied to Clipboard!"},cookieCon:{consentMaxAge:"2592000",cookieError:"Error: Cookie can&#039;t be set! Please unblock this site from the cookie setting of your browser."},gTranslate:{pageLang:"en",includedLangs:"en,hi,gu,bn,ta,te,mr,ne,id",autoDisplay:"true",multiLangPage:"true"},bookmark:{bmTitle:"Bookmark Posts",closeText:"Close",noBmIcon:"<svg class='line' viewBox='0 0 24 24'><g transform='translate(3.650100, 2.749900)'><path d='M16.51,5.55 L10.84,0.15 C10.11,0.05 9.29,0 8.39,0 C2.1,0 -1.95399252e-14,2.32 -1.95399252e-14,9.25 C-1.95399252e-14,16.19 2.1,18.5 8.39,18.5 C14.69,18.5 16.79,16.19 16.79,9.25 C16.79,7.83 16.7,6.6 16.51,5.55 Z'/><path d='M10.2839,0.0827 L10.2839,2.7437 C10.2839,4.6017 11.7899,6.1067 13.6479,6.1067 L16.5989,6.1067'/><line class='svgC' x1='10.6623' y1='10.2306' x2='5.7623' y2='10.2306'/><line class='svgC' x1='8.2131' y1='12.6808' x2='8.2131' y2='7.7808'/></g></svg>",noBmMes:"The list of favorite articles does not exist yet...",noBmAll:"View all articles",noBmLink:"/search",delIcon:"<svg class='line' viewBox='0 0 24 24'><g transform='translate(3.500000, 2.000000)'><path d='M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524'/><line x1='16.8651429' y1='4.47980952' x2='0.714666667' y2='4.47980952'/><path d='M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952'/></g></svg>",addedNtf:"<i class='check'></i>Added to Bookmarks!",removedNtf:"<i class='del'></i>Removed from Bookmarks!",},adsenseAds:{publisherId:data.blog.adsenseClientId.replace("ca-pub-",""),antiAdBClose:"true",ignoreMaxAge:"86400",loadType:"defer"},analytics:{propertyID:analyticsID},fontFamily:{mobileFonts:""}};var baseUrl="https://cdn.jsdelivr.net/gh/fineshop/plus-ui@2.6";PuSet.license={key:""};function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:PuSet.gTranslate.pageLang,includedLanguages:PuSet.gTranslate.includedLangs,autoDisplay:PuSet.gTranslate.autoDisplay,multilanguagePage:PuSet.gTranslate.multiLangPage,layout:google.translate.TranslateElement.InlineLayout.SIMPLE},"google_translate_element")}function puViews(){if(""!=PuSet.realViews.databaseUrl&&null!=getid("fb-db")&&0<firebase.apps.length)for(var e=qSell(".pu-views"),s=firebase.database(),t=0;t<e.length;t++){var a=e[t],l=a.getAttribute("data-id");(l=s.ref("BlogID_"+blogID+"/PostID_"+l)).once("value",function(s,t){return function(e){0<(e=e.exists()?e.val():0)&&("true"==PuSet.realViews.abbreviation?s.setAttribute("data-text",Pu.abv(e)):s.setAttribute("data-text",e),remCt(s,"hidden")),"true"==s.getAttribute("data-add")&&(s.setAttribute("data-add",!1),e=parseInt(e)+1,t.set(e))}}(a,l))}}function blogAdmin(){null!=qSel("#maintainCont")&&addCt(qSel("#maintainCont"),"hdn")}utils.lazy.then(()=>{var e,s;ldJs(baseUrl+"/js/AdditionalJavascripts.min.js","adtnl-js",!1,"body",function(){null!=qSel("#themeBtn")&&ldCss(baseUrl+"/css/ThemeColor.min.css","thmC-css")}),("true"==isSingleItem&&ldJs(baseUrl+"/js/CopyPreContent.min.js","pre-js",!0,"body"),ldJs(baseUrl+"/js/NoInternetWidget.min.js","noInt-js",!0,"body"),"true"==isSingleItem&&(e=qSell("#postToc, #autoToc"),s=qSell("#postBody h1, #postBody h2, #postBody h3, #postBody h4, #postBody h5, #postBody h6"),0<e.length&&0<s.length&&ldJs(baseUrl+"/js/TableOfContents.min.js","toc-js",!0,"head",function(){ldCss(baseUrl+"/css/TableOfContents.min.css","toc-css",function(){null!=qSel("#postToc")&&new TableOfContents({from:qSel("#postBody"),to:qSel("#postToc")}).generateToc(),null!=qSel("#autoToc")&&new TableOfContents({from:qSel("#postBody"),to:qSel("#autoToc")}).generateToc()})})),Defer(function(){function e(){dataLayer.push(arguments)}var s;null!=qSel(".gTrans")&&ldJs(baseUrl+"/lib/translate.js","gt-js",!0,"body",function(){setTimeout(function(){null!=getclass("goog-te-gadget-simple")[0]&&remCt(qSel(".gTrans"),"hidden")},2e3)}),ldCss("https://www.blogger.com/dyn-css/authorization.css?targetBlogID="+blogID,"auth-css",function(){var e=qSel("#admCk");null!=e&&"block"==window.getComputedStyle(e).display&&blogAdmin()}),0<qSell(".dldCo").length&&ldJs(baseUrl+"/js/CountdownDownloadBox.min.js","cdb-js",!0,"body",function(){ldCss(baseUrl+"/css/CountdownDownloadBox.min.css","cdb-css")}),null!=qSel("#musicPlayer")&&ldJs(baseUrl+"/lib/vue-2.6.11.min.js","vue-js",!0,"body",function(){ldCss(baseUrl+"/css/MusicPlayer.min.css","msp-css",function(){ldJs(baseUrl+"/js/MusicPlayer.min.js","msp-js",!0,"body")})}),0<qSell("div.hl pre").length&&ldJs(baseUrl+"/lib/highlight-11.5.0.min.js","hl-js",!0,"body",function(){qSell("div.hl pre").forEach(e=>{hljs.highlightElement(e)})}),"true"==isPost&&"true"!=isPrivateBlog&&(null!=qSel("#rPst")&&ldCss(baseUrl+"/css/RelatedPosts.min.css","rPst-css",function(){ldJs(baseUrl+"/js/RelatedPosts.min.js","rPst-js",!0,"body")}),null!=qSel("#aRel")&&ldJs(baseUrl+"/js/AutoRelated.min.js","aRel-js",!0,"body"),null!=qSel("#aChp")&&ldJs(baseUrl+"/js/AutoChapters.min.js","aChp-js",!0,"body")),""!=PuSet.analytics.propertyID&&((s=document.createElement("script")).src="https://www.googletagmanager.com/gtag/js?id="+PuSet.analytics.propertyID,document.body.appendChild(s),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",PuSet.analytics.propertyID)),""!=PuSet.realViews.databaseUrl&&ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js","fb-app",!0,"head",function(){ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-database.js","fb-db",!0,"head",function(){var e=qSell(".pu-views"),s={};s.databaseURL=PuSet.realViews.databaseUrl,firebase.initializeApp(s);for(var t=firebase.database(),a=0;a<e.length;a++){var l=e[a],n=l.getAttribute("data-id");(n=t.ref("BlogID_"+blogID+"/PostID_"+n)).once("value",function(s,t){return function(e){0<(e=e.exists()?e.val():0)&&("true"==PuSet.realViews.abbreviation?s.setAttribute("data-text",Pu.abv(e)):s.setAttribute("data-text",e),remCt(s,"hidden")),"true"==s.getAttribute("data-add")&&(s.setAttribute("data-add",!1),e=parseInt(e)+1,t.set(e))}}(l,n))}})})},100),setTimeout(function(){null!=qSel(".isBkm")&&ldJs(baseUrl+"/js/BookmarkPosts.min.js","bkm-js",!0,"body",function(){ldCss(baseUrl+"/css/BookmarkPosts.min.css","bkm-css")})},100),"true"!=isError&&("lazy"==PuSet.adsenseAds.loadType?ldJs(baseUrl+"/js/AdsenseAds.min.js","adstr-js",!0,"body"):"defer"==PuSet.adsenseAds.loadType&&Defer.js(baseUrl+"/js/AdsenseAds.min.js","adstr-js"))),"true"==isMobile&&""!=PuSet.fontFamily.mobileFonts&&((s=(e=document).createElement("style")).id="styleFonts",s.textContent=PuSet.fontFamily.mobileFonts,e.getElementsByTagName("head")[0].appendChild(s))}),function(){var e=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===e||0!=document.body.scrollTop&&!1===e)&&(null!=qSel("#ckWrap")&&null==Pu.gC("CookiePolicy")&&Defer(function(){ldCss(baseUrl+"/css/CookieConsent.min.css","ck-css",function(){ldJs(baseUrl+"/js/CookieConsent.min.js","ck-js",!0,"body")})},5e3),"true"!=isError&&"scroll"==PuSet.adsenseAds.loadType&&ldJs(baseUrl+"/js/AdsenseAds.min.js","adstr-js",!0,"body"),e=!0)},!0)}()