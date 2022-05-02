function calculate() {
  let type = document.querySelector('select').value;
  let arr = document.querySelector('.Arrival').value;
  arr = arr.split(' ').map(Number);
  let bu = document.querySelector('.Burst').value;
  bu = bu.split(' ').map(Number);
  let show;
  show = document.querySelector('.hidden');
  show.classList.add('hidden');
  for (i = 0; i < arr.length; i++) {
    p[i] = i;
  }
  swapArrlowtohigh(arr, bu, p);
  //-- text process first ---
  const box = document.querySelector('.box');
  const boxRf = document.createElement('p');
  boxRf.textContent = '0';
  box.appendChild(boxRf);
  if (type == 'non') {
    completeTime[0] = arr[c] + bu[c];
    complete[0] = 0;
    p[0] = 0;
    // process box
    const pro = document.createElement('div');
    pro.textContent = 'P' + p[0];
    pro.style.fontWeight = '700';
    pro.classList.add('box__right');
    //-- text process ---
    const box = document.querySelector('.box');
    box.appendChild(pro);
    const boxR = document.createElement('p');
    boxR.textContent = completeTime[0];
    box.appendChild(boxR);
    do {
      count = 0;
      for (i = 0; arr[i] <= completeTime[c]; i++) {
        if (p[i] == 0) continue;
        roundArr(arr[p[i]], bu[p[i]], completeTime[c], count, p[i]);
        count++;
      }
      if (count > 0) {
        swapR(r, NoR, count);
        completeTime[c + 1] = completeTime[c] + bu[NoR[0]];
        complete[c + 1] = NoR[0];
        // process box
        const pro = document.createElement('div');
        pro.textContent = 'P' + p[NoR[0]];
        pro.style.fontWeight = '700';
        pro.classList.add('box__right');
        //-- text process ---
        const box = document.querySelector('.box');
        box.appendChild(pro);
        const boxR = document.createElement('p');
        boxR.textContent = completeTime[c + 1];
        box.appendChild(boxR);
        p[NoR[0]] = 0;
        r = [];
        NoR = [];
        c++;
      }
    } while (c != arr.length - 1);
  } else {
    let process = 0;
    let q = document.querySelector('.Quantum').value;
    q = parseInt(q);
    let newBu = new Array();
    for (i = 0; i < bu.length; i++) {
      newBu[i] = bu[i];
    }
    let newArr = new Array();
    for (i = 0; i < arr.length; i++) {
      newArr[i] = arr[i];
    }
    do {
      count = 0;
      for (i = 0; arr[i] <= process; i++) {
        if (p[i] == -1) continue;
        roundArr(newArr[p[i]], newBu[p[i]], process, count, p[i]);
        count++;
      }
      if (count > 0) {
        swapR(r, NoR, count);
        if (newBu[NoR[0]] <= q) {
          process += newBu[NoR[0]];
          completeTime[c] = process;
          complete[c] = NoR[0];
          // process box
          const pro = document.createElement('div');
          pro.textContent = 'P' + p[complete[c]];
          pro.style.fontWeight = '700';
          pro.classList.add('box__right');
          //-- text process ---
          const box = document.querySelector('.box');
          box.appendChild(pro);
          const boxR = document.createElement('p');
          boxR.textContent = process;
          box.appendChild(boxR);
          p[NoR[0]] = -1;
          c++;
        } else {
          process += q;
          newArr[NoR[0]] = process;
          newBu[NoR[0]] -= q;
          // process box
          const pro = document.createElement('div');
          pro.textContent = 'P' + p[NoR[0]];
          pro.style.fontWeight = '700';
          pro.classList.add('box__right');
          //-- text process ---
          const box = document.querySelector('.box');
          box.appendChild(pro);
          const boxR = document.createElement('p');
          boxR.textContent = process;
          box.appendChild(boxR);
        }
      } else process = arr[0];
      r = [];
      NoR = [];
    } while (c != arr.length);
  }
  Last(arr, bu, p);
  const output = document.querySelector('.card__title');
  output.classList.add('hidden');
  for (let i = 0; i < arr.length; i++) {
    const info = document.createElement('tr');
    const info1 = document.createElement('td');
    const info2 = document.createElement('td');
    const info3 = document.createElement('td');
    const info4 = document.createElement('td');
    const info5 = document.createElement('td');
    const info6 = document.createElement('td');
    info1.textContent = 'Process ' + p[i];
    info2.textContent = arr[i];
    info3.textContent = bu[i];
    info4.textContent = completeTimeAns[i];
    info5.textContent = TurnAroundTime[i];
    info6.textContent = WaitingTime[i];
    info.appendChild(info1);
    info.appendChild(info2);
    info.appendChild(info3);
    info.appendChild(info4);
    info.appendChild(info5);
    info.appendChild(info6);
    const display = document.querySelector('tbody');
    display.appendChild(info);
  }
  show.classList.remove('hidden');
  const tt = document.createElement('h6');
  const wt = document.createElement('h6');
  const sum = document.querySelector('.avg');
  tt.textContent = 'TurnAround Avg. Time : ' + averageTurn;
  sum.appendChild(tt);
  wt.textContent = 'Waiting Avg. Time : ' + averageWait;
  sum.appendChild(wt);
}

function getSelectValue(){
  var selectValue = document.getElementById("AlgorithmInput").value;
  if (selectValue === 'Pre') {
    const quan = document.getElementById("TimeQuantumInput");
    quan.classList.toggle('hidden1');
  } else {
    const quan = document.getElementById("TimeQuantumInput");
    quan.classList.toggle('hidden1');
  }
  console.log(selectValue);
}

function swapR(r, n, round) {
  for (i = 0; i < round; i++) {
    if (round == 1) continue;
    for (j = i + 1; j < round; j++) {
      if (r[i] < r[j]) {
        let temp = r[i];
        r[i] = r[j];
        r[j] = temp;

        temp = n[i];
        n[i] = n[j];
        n[j] = temp;
      }
    }
  }
}

function swapArrlowtohigh(arr, bu, p) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        temp = bu[i];
        bu[i] = bu[j];
        bu[j] = temp;

        temp = p[i];
        p[i] = p[j];
        p[j] = temp;
      }
    }
  }
}

function roundArr(Arr, Bu, com, count, p) {
  let w = com - Arr;
  r[count] = (w + Bu) / Bu;
  NoR[count] = p;
}

function Last(arr, bu, p) {
  let average = new Array();
  average = [0, 0];
  TurnAroundTime = [0];
  WaitingTime = [0];
  for (i = 0; i < completeTime.length; i++) {
    completeTimeAns[complete[i]] = completeTime[i];
    p[i] = i;
  }
  for (i = 0; i < completeTime.length; i++) {
    TurnAroundTime[i] = completeTimeAns[i] - arr[i];
    average[0] += TurnAroundTime[i];
  }
  for (i = 0; i < completeTime.length; i++) {
    WaitingTime[i] = TurnAroundTime[i] - bu[i];
    average[1] += WaitingTime[i];
  }
  averageTurn = average[0] / arr.length;
  averageWait = average[1] / arr.length;
}

var averageTurn;
var averageWait;
var TurnAroundTime = Array();
var WaitingTime = Array();
var c = 0;
var count = 0;
var completeTime = Array();
var complete = Array();
var completeTimeAns = Array(); //finish time
var p = Array(); //process
var r = Array(); //leastest burst time
var NoR = Array();
const input = document.querySelector('#solve');
input.addEventListener('click', calculate);
