window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R31NB6KKBC');
function gtag_event(eventName, data) {
  gtag("event", eventName, data || {
    // send_to: __opay_tracking_id,
    // 'debug_mode':true
  });
  return false;
}
window.onload = function (){
  console.log('onload...')
  window.gtag_event && window.gtag_event(location.pathname)
}
function getParam(path) {
  var url = window.location.search
  var theRequest = {}
  if (url.indexOf('?') !== -1) {
    var str = url.substr(url.indexOf('?')+1)
    var strs = str.split('&')
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split('=')[0]]=decodeURIComponent(strs[i].split('=')[1])
    }
  }
  return theRequest
}
