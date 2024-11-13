const form = document.querySelector('form');
const userIdInput = document.getElementById('userid');
const commentInput = document.getElementById('comment');
const commentList = document.querySelector('.comment-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userId = userIdInput.value; 
    const comment = commentInput.value; 

    if (userId && comment) { 
        const li = document.createElement('li'); 
        li.textContent = `${userId} - ${comment}`; 
        commentList.appendChild(li); 

        userIdInput.value = '';
        commentInput.value = '';
    } else {
        alert('아이디와 댓글을 모두 입력해주세요'); 
    }
});