
let chosenHeartRateService = null;
uuid_tnnl = '00000000-0000-1000-8000-00805f9b34fb';
uuid_writ = '00000001-0000-1000-8000-00805f9b34fb';
uuid_down = '00000002-0000-1000-8000-00805f9b34fb';


function show_confirm()
{
var r=confirm("食材是否准备好！");
if (r==true)
  {
	  
	    window.location.href="practice.html";



  }
  }

function go(){
    navigator.bluetooth.requestDevice({filters:[{services: [uuid_tnnl]}]})
    .then(device => {
        console.log('device.gatt.connect');
        return device.gatt.connect();
   }).then(server => {
       console.log('server.getPrimaryService');
       return server.getPrimaryService(uuid_tnnl);
   }).then(service => {
   chosenHeartRateService = service;
   	// window.sesssionStorage.setItem("myobject", objStr);

	
	//var objStr=JSON.stringify(chosenHeartRateService);
	
	//window.localStorage.setItem("myobject", objStr); 
     window.location.href="practice.html";
	//window.open("practice.html");
	 
  });
         };


let rese= new Uint8Array(4);
function setzhi(value){
	rese[0] = 0x2c;
	rese[1] = value;
	chosenHeartRateService.getCharacteristic(uuid_writ).then(characteristic =>{
    characteristic.writeValue(rese);
     });
   console.log(rese);
}