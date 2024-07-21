let http = require('http')  // node에서 제공하는 http 관련 내용을 받아온다

// start 안에 넣어준다. start를 사용하고 싶으면 export 하자 
function start() {
    // 요청과 응답을 받는다. 자동으로 node에서 각각 넣어주고 만들어준다.
    function onRequest(request, response){
        // http는 head와 body로 이루어진다.
        // 이떄 body에는 내용이 들어가고, head에는 통신 상태가 들어간다.(200, 204, 500 등), 또 응답의 형태를 적어준다. (html인지 뭔지 등)
        // 이게 head
        response.writeHead(200, {'Content-Type' : 'text/html'});
        // 이게 body다 
        response.write('Hello Node.js');
        // 전송이 날아간다. 
        response.end();
    }

    // onRequest 함수로 통신하고 이떄 주파수는 8888로 맞출것이다. 다른말로 포트 번호다. 
    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

// 외부에서 start 함수를 사용이 가능하게 한다.
exports.start = start;

// 이 파일을 실행할 떄는 node server.js를 터미널에 입력한다. 파일명은 그떄마다 다르게 하자
// 서버를 종료할 때는 터미널에서 ctrl + c를 하자
