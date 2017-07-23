// 이벤트 연결
onmessage = function (event) {
    //데이터 전달
    postMessage('ECHO : ' + event.data);
};