//�Լ� ����
function fibonacci(number) {
    if (number < 2) {
        return number;
    } else {
        return fibonacci(number - 2) + fibonacci(number - 1);
    }
}

//�̺�Ʈ ����
onmessage = function (event) {
    //������ ����
    postMessage(fibonacci(event.data));
};