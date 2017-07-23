worker.onmessage = function (event) {
    //출력
    alert(event.data);

    //워커 종료
    workder.terminate();
};