//함수 선언
function fibonacci(number) {
    if (number < 2) {
        return number;
    } else {
        return fibonacci(number - 2) + fibonacci(number - 1);
    }
}

//이벤트 연결
onmessage = function (event) {
    //데이터 전송
    postMessage(fibonacci(event.data));
};