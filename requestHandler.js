const mariadb = require('./database/connect/mariadb');

// 여기서 요청을 처리한다.
function main(response) {
    console.log('main');

    mariadb.query("select * from product", function(err, rows){
        console.log(rows);
    })

    // 이게 head
    response.writeHead(200, {'Content-Type' : 'text/html'});
    // 이게 body다 
    response.write('Main Page');
    // 전송이 날아간다. 
    response.end();
}

function login(response) {
    console.log('login');

    // 이게 head
    response.writeHead(200, {'Content-Type' : 'text/html'});
    // 이게 body다 
    response.write('Lgoin page');
    // 전송이 날아간다. 
    response.end();
}



let handle = {};
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;