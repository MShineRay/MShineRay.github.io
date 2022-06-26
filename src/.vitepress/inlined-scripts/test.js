var org_id =  '1snn5n9w';

try {
  var merchant_ID = 'opayegypt'
  var session_ID =  'order_id'
  var src = 'https://h.online-metrix.net/fp/tags.js?org_id=' + org_id +'&session_id=' + merchant_ID + session_ID
  var f = document.createElement('script')
  f.type = 'text/javascript'
  f.async = true
  f.src = src
  var e = document.getElementsByTagName('script')[0]
  e.parentNode.insertBefore(f, e)
  // console.log('risk success:'+src, document.getElementsByTagName('script')[0])
} catch (error) {
  console.error(error)
}
