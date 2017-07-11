
	  
 BluetoothRemoteGATTServer bltr;
  BluetoothRemoteGattCharacteristic crx,ctx;

function search(){
	let options = {
		  filters: []
	   };
	options.acceptAllDevices = true;
	navigator.bluetooth.requestDevice(options).then(device => {
			console.log('Got device:', device.name);
			console.log('id:', device.id);
			console.log('Connected:' + device.gatt.connected);
			console.log('Connected:' + device.gatt.connected);
			
			bltr =device.gatt.connect();
		
			}).catch(error => {}
			document.getElementById("demo").innerHTML="My First JavaScript"+error;
			);
	
}


//function getService(){
	//blegatt = bltr.getPrimaryService('00000000-0000-1000-8000-00805F9B34FB');
//}

function getServices(){
	ctx = bltr.getCharacteristic('00000001-0000-1000-8000-00805F9B34FB');
	crx = bltr.getCharacteristic('00000002-0000-1000-8000-00805F9B34FB');
}

function startNo(){
	crx.startNotifications();
}

function stopNo(){
	crx.stopNotifications();
}

function read(){
	DataView data = crx.readValue();
}

function write(){
	ctx.writeValue(BufferSource value);
}

