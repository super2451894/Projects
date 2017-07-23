// JavaScript source code
        var removePrefix = (function () {
            // Set Variable
            var prefixes = ['webkit', 'ms', 'moz', 'o'];
            // ù ���ڸ� �빮�ڷ� ����� �Լ�
            var capitalize = function (name) {
                return name.substr(0, 1).toUpperCase() + name.substr(1);
            };
            // �����Ƚ� ���� �Լ�
            return function (object, name) {
                // �����Ƚ��� �����մϴ�.
                prefixes.forEach(function (prefix) {
                    object[name] = object[name] || object[prefix + capitalize(name)];
                });
            };
        })();