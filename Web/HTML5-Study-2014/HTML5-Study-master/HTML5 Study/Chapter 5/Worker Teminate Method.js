worker.onmessage = function (event) {
    //���
    alert(event.data);

    //��Ŀ ����
    workder.terminate();
};