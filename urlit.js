var pageurl = window.location.href;
pageurl = pageurl.replace(/http.*\:\/*/, '');
pageurl = pageurl.replace(/www./, '');
pageurl = pageurl.replace(/(.*)\/$/, "$1");
pageurl = pageurl.replace(/\/\?.*/, '');

window.document.title = pageurl;
