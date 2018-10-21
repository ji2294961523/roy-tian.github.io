document.getElementById('cn').onclick = function () {
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    randomize.textContent = '随机生成笑话';
};

document.getElementById('us').onclick = document.getElementById('uk').onclick = function () {
    document.getElementById('lbl-customname').textContent = 'Enter custom name:';
    document.getElementById('lbl-cn').textContent = 'CN';
    document.getElementById('lbl-us').textContent = 'US';
    document.getElementById('lbl-uk').textContent = 'UK';
    document.getElementById('customname').placeholder = 'Bob';
    randomize.textContent = 'Generate random story';
};
