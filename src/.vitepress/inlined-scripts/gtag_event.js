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
