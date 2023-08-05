window.addEventListener("load", solve);

function solve() {
  let nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', nextClick);

  function nextClick() {
    let candidatesList = document.getElementById('candidates-list');
    let previewList = document.getElementById('preview-list');
    let studentInput = document.getElementById('student');
    let universityInput = document.getElementById('university');
    let scoreInput = document.getElementById('score');
    
    let student = studentInput.value;
    let university = universityInput.value;
    let score = scoreInput.value;

    if (!student || !university || !score) {
      return;
    }

    let liElement = document.createElement('li');
    liElement.className = 'application';
    
    let articleElement = document.createElement('article');

    let h4Element = document.createElement('h4');
    h4Element.textContent = student;

    let pUniversityElement = document.createElement('p');
    pUniversityElement.textContent = `University: ${university}`;

    let pScoreElement = document.createElement('p');
    pScoreElement.textContent = `Score: ${score}`;

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pUniversityElement);
    articleElement.appendChild(pScoreElement);

    let btnEditElement = document.createElement('button');
    btnEditElement.classList.add('action-btn');
    btnEditElement.classList.add('edit');
    btnEditElement.textContent = 'edit';
    let btnApplyElement = document.createElement('button');
    btnApplyElement.classList.add('action-btn');
    btnApplyElement.classList.add('apply');
    btnApplyElement.textContent = 'apply';

    liElement.appendChild(articleElement);
    liElement.appendChild(btnEditElement);
    liElement.appendChild(btnApplyElement);

    previewList.appendChild(liElement);

    studentInput.value='';
    universityInput.value='';
    scoreInput.value = '';
    
    nextBtn.disabled = true;

    btnEditElement.addEventListener('click', (e) => {
      studentInput.value = student;
      universityInput.value = university;
      scoreInput.value = score;

      liElement.remove();
      nextBtn.disabled = false;
    })

    btnApplyElement.addEventListener('click', (e) => {
      btnEditElement.remove();
      btnApplyElement.remove();

      candidatesList.appendChild(liElement);
    })
  }
}