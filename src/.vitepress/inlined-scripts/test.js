var getLongitude = "";
var getLatitude = "";
console.error(33)

if(navigator.geolocation) {
  console.error(22)
  navigator.geolocation.getCurrentPosition(
    //locationSuccess 获取成功的话
    function(position) {
      getLongitude = position.coords.longitude;
      getLatitude = position.coords.latitude;
    },
    //locationError  获取失败的话
    function() {
      // console.log(error)
    }
  );
}
