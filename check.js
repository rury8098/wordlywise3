function checkSingleSelect(correct, section, section) {
    var studentAnswers = [];
    for (var j = 1; j < correct.length + 1; j++) {
        var checked = document.querySelector('input[name="' + section + j + '"]:checked');
        if (checked == null) {
            studentAnswers.push('null');
        } else {
            studentAnswers.push(checked.value);
        }
    }
    var i = 1;
    while (i < studentAnswers.length + 1) {
        if (correct[i - 1] == studentAnswers[i - 1]) {
            document.getElementById(section + i).textContent = "😃"
            i++;
        } else {
            document.getElementById(section + i).textContent = "☹️"
            i++;
        }
    };

}

function checkCI(correct, name, unit) {
    var studentAnswers = [];
    for (var j = 1; j < correct.length + 1; j++) {
        var options = ['a', 'b', 'c', 'd'];
        options.forEach(function (option) {
            var checked = document.querySelector('input[name="' + j + option + '"]:checked');
            if (checked == null) {
                studentAnswers.push('null');
            } else {
                studentAnswers.push(checked.value);
            }
        })
    }
    var counter = 0;
    var question = 1;
    var j = 0;
    var k = 0;
    var correctSplit = [];
    correct.forEach(function (answer) {
        correctSplit.push.apply(correctSplit, answer.split(''));
    })
    for (k = 0; k < studentAnswers.length; k++) {
        if (correctSplit[k] == studentAnswers[k]) {
            j++
        } else {
            j++;
            counter++;
        }
        if (j == 4 && counter == 0) {
            document.getElementById(name + question).textContent = "💯";
            j = 0;
            counter = 0;
            question++;
        } else if (j == 4 && counter !== 0) {
            document.getElementById(name + question).textContent = "-" + counter;
            j = 0;
            counter = 0;
            question++;
        };
    };


}

function checkWritten(correct, questionid, section) {
    var i = 0;
    while (i < correct.length) {
        if (correct[i] == document.getElementById(questionid + (i + 1)).value) {
            document.getElementById("result" + section + (i + 1)).textContent = "😃";
            i++;
        } else {
            document.getElementById("result" + section + (i + 1)).textContent = "☹️";
            i++;
        }
    };

}

function checkMultipleSelect(correct, name, id) {
    var studentAnswers = [[], [], [], [], []]
    var counter = 0;

    for (var k = 0; k < 5; k++) {
        for (var i = 0; i < 4; i++) {
            if (document.getElementsByName(name + (k + 1))[i].checked) {
                studentAnswers[k].push(document.getElementsByName(name + (k + 1))[i].value)
            }
        }
    }

    for (var i = 0; i < 5; i++) {
        if (correct[i].length != studentAnswers[i].length) {
            counter++;
        }
        else {
            for (var k = 0; k < studentAnswers[i].length; k++) {
                if (!(correct[i][k] == studentAnswers[i][k])) {
                    counter++;
                }
            }
        }
        if (counter == 0) {
            document.getElementById(id + (i + 1)).textContent = "😃"
        }
        else {
            document.getElementById(id + (i + 1)).textContent = "☹️"
        }
        counter = 0;
    }

}
