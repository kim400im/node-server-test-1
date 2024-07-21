function route(pathname, handle, response){
    console.log('pathname : ' + pathname);
    // pathname은 서버가 준다.
    // 이걸 다른 파일에서도 사용하도록 export 하자

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log('No request handler found for ' + pathname);

        // 이게 head
        response.writeHead(404, {'Content-Type' : 'text/html'});
        // 이게 body다 
        response.write('Not Found');
        // 전송이 날아간다. 
        response.end();
    }
}


exports.route = route;