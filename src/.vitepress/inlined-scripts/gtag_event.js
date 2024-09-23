window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R31NB6KKBC');
function gtag_event(eventName, data) {
  gtag("event", eventName, data || {});
  return false;
}
window.onload = function (){
  console.log('onload...')
  debugger
  window.gtag_event && window.gtag_event(location.pathname)
}
