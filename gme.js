
let val = 0;
let tim = 0;
function qu() {
    document.getElementById('startbtn').style.display = 'none';
    document.getElementById('submit').style.display = 'block';
    document.getElementById('submit').style.margin = 'auto';

    let c = 0;
    let d = 20;
    let a = c + (d - c) * Math.random();
    a = Math.ceil(a);

    let b = c + (d - c) * Math.random();
    b = Math.ceil(b);
    document.getElementById('question').innerText = a + " is multiplied by " + b
    function sumit() {
        let answer = document.getElementById('ans').value
        if (answer == a * b) {
            val = val + 1
            document.getElementById('inputscore').innerText = val
        }
        else {
            alert("wrong answer. your score is " + val);
            location.reload();
        }
        qu()
        document.getElementById('ans').value = ""
    }
    document.getElementById('submit').onclick = function () {
        sumit()
    };
    function time() {
        alert("timeup. your score is " + val);
        location.reload();
    }
    setInterval(time, 60000);
}
    