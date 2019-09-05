var SerialPort = require("serialport");
var port = new SerialPort("COM3");// 시리얼 포트 번호를 입력해주세요 
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
    console.log(data) //"data : " + 
    // 리스트에다가 저장을 해둔다. 
    // DB에서 데이터 읽어서 Json으로 처리해야함.
    // factory link에서 데이터 읽어와야하고 ..  model.suffix 알아내야하고.
}
parser.on('data', addProductInfoFormat)

port.on('error', function(err) {
   console.log('Error: ', err.message);
})
