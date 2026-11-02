// 사진을 누르면 큰 화면으로 보여줍니다.
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('[data-photo]').forEach((button) => {
  button.addEventListener('click', () => {
    modalImage.src = `images/${button.dataset.photo}`;
    photoModal.classList.add('show');
    photoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closePhotoModal() {
  photoModal.classList.remove('show');
  photoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closePhotoModal);
photoModal.addEventListener('click', (event) => {
  if (event.target === photoModal) closePhotoModal();
});

// ESC 키로 사진 팝업을 닫습니다.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePhotoModal();
    closeCopyModal();
  }
});

// 계좌번호 복사 후 안내 팝업을 표시합니다.
const copyModal = document.getElementById('copyModal');
const copyMessage = document.getElementById('copyMessage');
const toastClose = document.getElementById('toastClose');

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const accountNumber = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(accountNumber);
      copyMessage.textContent = '계좌번호가 복사되었습니다.';
    } catch (error) {
      // 로컬 파일 등에서 클립보드 권한이 없을 때도 안내 팝업은 표시합니다.
      copyMessage.textContent = `계좌번호: ${accountNumber}`;
    }
    copyModal.classList.add('show');
    copyModal.setAttribute('aria-hidden', 'false');
  });
});

function closeCopyModal() {
  copyModal.classList.remove('show');
  copyModal.setAttribute('aria-hidden', 'true');
}
toastClose.addEventListener('click', closeCopyModal);
copyModal.addEventListener('click', (event) => {
  if (event.target === copyModal) closeCopyModal();
});

// 상단 하트 버튼의 표시 상태를 전환합니다.
const heartBtn = document.getElementById('heartBtn');
heartBtn.addEventListener('click', () => {
  heartBtn.textContent = heartBtn.textContent === '♡' ? '♥' : '♡';
});
