
 let chosenHeartRateService = null;

function search(){
	document.getElementById("demo").innerHTML="My First JavaScript";
	let options = {
	optionalServices:['00000000-0000-1000-8000-00805f9b34fb']
	};
	let filters = [];
	let filterName = document.querySelector('#name').value;
    if (filterName) {
    filters.push({name: filterName});
	 options.filters = filters;
    }else{
     options.acceptAllDevices = true;
    }
  
	navigator.bluetooth.requestDevice(options).then(device => {
	return	device.gatt.connect();
	
		       }).then(server => {		
			 return server.getPrimaryService('00000000-0000-1000-8000-00805f9b34fb');
			}).then(service => {
			 chosenHeartRateService = service;
			return Promise.all([
			
				  service.getCharacteristic('00000001-0000-1000-8000-00805f9b34fb').then(w),
				  service.getCharacteristic('00000003-0000-1000-8000-00805f9b34fb').then(read)
			]);
	
             }).catch(error => {
			document.getElementById("demo").innerHTML=error;
			});
}




function Notifications(){
	if(chosenHeartRateService){
	chosenHeartRateService.getCharacteristic('00000002-0000-1000-8000-00805f9b34fb').then(characteristic =>{
	 characteristic.startNotifications(); 
	});
	}
	
 
	 
}


function read(characteristic){
	
	Notifications();
   
	return characteristic.readValue().then(sensorLocationData => {
		
		if(sensorLocationData.zIndex >1){
		
		let sensorLocation = sensorLocationData.getUint8(1);
			document.getElementById("data").innerHTML="sensorLocation"+sensorLocation;
		}
		
	});
	
}



function w(characteristic){
    let resetEnergyExpended = new Uint8Array([34,8,35,7]);
    characteristic.writeValue(resetEnergyExpended);
	Notifications();
	document.getElementById("w").innerHTML="write";
}




