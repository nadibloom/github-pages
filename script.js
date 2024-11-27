function showContent() {
    const content = document.getElementById('materi-content');
    content.style.display = 'block';
  }
  
  function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const feedback = document.getElementById('feedback');
    if (answer.includes('mencerdaskan kehidupan bangsa')) {
      feedback.textContent = "Benar! Jawaban Anda tepat.";
      feedback.style.color = 'green';
    } else {
      feedback.textContent = "Salah. Coba lagi!";
      feedback.style.color = 'red';
    }
  }
  function toggleMateri() {
    const content = document.getElementById('materi-content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
  