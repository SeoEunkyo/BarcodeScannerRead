var SerialPort = require("serialport");
var port = new SerialPort("COM5");// 시리얼 포트 번호를 입력해주세요 
//const Delimiter = require('@serialport/parser-delimiter')
const InterByteTimeout = require('@serialport/parser-inter-byte-timeout')


const parser = port.pipe(new InterByteTimeout({interval: 100}))

port.write('open', function() {
    port.write('main screen turn on', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
      console.log('message written');
    });
});

var productFormatList = []

const addProductInfoFormat = (data) => {
    console.log(data.toString('utf8')) //"data : " + 
    const barcode = data.toString('utf8');
    

}
parser.on('data', addProductInfoFormat)

port.on('error', function(err) {
   console.log('Error: ', err.message);
})
