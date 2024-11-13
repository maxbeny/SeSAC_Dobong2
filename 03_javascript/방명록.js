function writeNote() {
    const writer = document.getElementById('writer').value;
    const content = document.getElementById('content').value; 
    const table = document.getElementById('table');

    if (writer === '' || content === '') {
        alert('작성자와 내용을 모두 입력하세요.'); 
        return;
    }

    const now = new Date(); 
    const dateString = now.toISOString().slice(0, 19).replace('T', ' '); 

    const newRow = table.insertRow(); 
    const writerCell = newRow.insertCell(0);
    const contentCell = newRow.insertCell(1);
    const dateCell = newRow.insertCell(2);

    writerCell.textContent = writer;
    contentCell.textContent = content;
    dateCell.textContent = dateString;

    document.getElementById('writer').value = '';
    document.getElementById('content').value = '';
}