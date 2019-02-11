/* Table Template

function makeTable(numQuestion, section) {
    var body = document.body;
    var tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    body.appendChild(tbl)

    for (var i = 0; i < numQuestion; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < COLUMNS; j++){
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            if (j==0){
                td.appendChild(document.createTextNode(i + 1));
            }
            if (j==1){
                td.appendChild(document.createTextNode(i + 1));
            }

            if (j==2){ // show result
                var span = document.createElement("span");
                span.id = section + (i + 1);
                td.appendChild(span);
            }

        }
    }
}
*/


function makeSingleSelect(numQuestion, section, unit) {
    var h2 = document.createElement('h2');
    h2.textContent = unit+section;
    var tbl = document.createElement('table');
    var div = document.createElement('div');
    tbl.style.border = '1px solid black';
    div.appendChild(h2);
    div.appendChild(tbl);
    for (var i = 0; i < numQuestion; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 3; j++) {
            var td = tr.insertCell();
            if (j == 0) {
                td.appendChild(document.createTextNode(i + 1));
            }
            if (j == 1) {
                var array = ['a', 'b', 'c', 'd'];
                array.forEach(function (option) {
                    var input = document.createElement("input");
                    input.type = "radio";
                    input.name = section + (i + 1);
                    input.value = option
                    td.appendChild(document.createTextNode('(' + option + ')'));
                    td.appendChild(input);
                })
            }
            if (j == 2) {
                var span = document.createElement("span");
                span.id = section + (i + 1);
                td.appendChild(span);
            }
            td.style.border = '1px solid black';
        }
    }
    var button = document.createElement('input');
    button.type = "button";
    button.value = "Check Answer";
    button.setAttribute('onclick', "checkSingleSelect("+"answer"+unit+section+',\''+section+'\',\''+section+"\')");
    div.appendChild(button);
    return div;

}
function makeQuestionCI (questionNumber, section) {
    var tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    var options = ['a','b','c','d'];

    for (var i = 0; i < 4; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 4; j++){
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            if (j==0 && i==0){
                td.appendChild(document.createTextNode(questionNumber));
            }
            if (j==1){
                td.appendChild(document.createTextNode('('+options[i]+')'));
            }if (j==2){
                var inputC = document.createElement("input");
                inputC.type = "radio"
                inputC.name = questionNumber + options[i];
                inputC.value = "c"
                td.appendChild(inputC);
                td.appendChild(document.createTextNode('C'))
                var inputI = document.createElement("input");
                inputI.type ="radio"
                inputI.name = questionNumber + options[i];
                inputI.value = "i"
                td.appendChild(inputI);
                td.appendChild(document.createTextNode('I'))
            }

            if (j==3){ // show result
                var span = document.createElement("span");
                span.id= section + questionNumber;
                td.appendChild(span);
            }

        }
    }
    return tbl;
}
function makeCI(numQuestion, section, unit) {
    var h2 = document.createElement('h2');
    h2.textContent = unit+section;
    var div = document.createElement('div');
    div.appendChild(h2);
    for(var i = 0; i<numQuestion; i++){
        var divSingle = document.createElement('div');
        var tbl = makeQuestionCI((i+1),section);
        divSingle.appendChild(tbl);
        div.appendChild(divSingle);
    }
    var button = document.createElement('input');
    button.type = "button";
    button.value = "Check Answer";
    button.setAttribute('onclick', "checkCI("+"answer"+unit+section+',\''+section+'\',\''+section+"\')");
    div.appendChild(button);
    return div;
}

function makeMultipleSelect(numQuestion, section, unit) {
    var h2 = document.createElement('h2');
    h2.textContent = unit+section;
    var div = document.createElement('div');
    var tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    div.appendChild(h2);
    div.appendChild(tbl);

    for (var i = 0; i < numQuestion; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 3; j++){
            var td = tr.insertCell();
            td.style.border = '1px solid black';

            if (j==0){
                td.appendChild(document.createTextNode(i + 1));
            }
            if (j==1){
                var array = ['a', 'b', 'c', 'd'];
                array.forEach(function (option) {
                    var input = document.createElement("input");
                    input.type = "checkbox";
                    input.name = section + (i + 1);
                    input.value = option;
                    td.appendChild(document.createTextNode('(' + option + ')'));
                    td.appendChild(input);
                    td.appendChild(document.createElement('br'));
                })
            }

            if (j==2){
                var span = document.createElement("span");
                span.id = section + (i + 1);
                td.appendChild(span);
            }

        }
    }
    var button = document.createElement('input');
    button.type = "button";
    button.value = "Check Answer";
    button.setAttribute('onclick', "checkMultipleSelect("+"answer"+unit+section+',\''+section+'\',\''+section+"\')");
    div.appendChild(button);
    return div;
}

function makeWritten(numQuestion,section, unit){
    var h2 = document.createElement('h2');
    h2.textContent = unit+section;
    var div = document.createElement('div');
    var tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    div.appendChild(h2);
    div.appendChild(tbl);

    for (var i = 0; i < numQuestion; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 2; j++){
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            if (j==0){
                var label = document.createElement('label');
                label.setAttribute("for", section + (i+1));
                label.textContent = (i+1) + '. ';
                var input = document.createElement('input');
                input.id = section + (i+1);
                input.type = "text";
                input.name = section + (i+1);
                td.appendChild(label);
                td.appendChild(input);
            }
            if (j==1){ // show result
                var span = document.createElement("span");
                span.id = "result" + section + (i + 1);
                td.appendChild(span);
            }

        }
    }
    var button = document.createElement('input');
    button.type = "button";
    button.value = "Check Answer";
    button.setAttribute('onclick', "checkWritten("+"answer"+unit+section+',\''+section+'\',\''+section+"\')");
    div.appendChild(button);
    return div;
}
function makeUnit(unitNum, unitInfo) {
    var body = document.body;
    for (var i =0; i < unitInfo.length; i++){
        var sectionInfo = unitInfo[i];
        var section = sectionInfo[0];
        var questionType = sectionInfo[1];
        var numQuestion = sectionInfo[2];
        switch(questionType){
            case "single":
            var div = makeSingleSelect(numQuestion,section,unitNum);
            break;
            case "written":
            var div = makeWritten(numQuestion,section,unitNum);
            break;
            case "multiple":
            var div = makeMultipleSelect(numQuestion,section, unitNum);
            break;
            case "CI":
            var div = makeCI(numQuestion,section,unitNum)
            break;
            default:
            console.log('unknown question type'+questionType);
        }
        if (div != null){
            body.appendChild(div)
        }
    }
}