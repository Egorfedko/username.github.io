function togglePDF() {
    let block = document.getElementById("pdfBlock");
    block.classList.toggle("active");
}
const hotspots = document.querySelectorAll('.hotspot');

const modal = document.getElementById('modal');

const modalTitle = document.getElementById('modalTitle');

const modalText = document.getElementById('modalText');

const closeModal = document.getElementById('closeModal');

hotspots.forEach(hotspot => {

    hotspot.addEventListener('click', () => {

        const title = hotspot.dataset.title;

        const text = hotspot.dataset.text;

        modalTitle.textContent = title;

        modalText.textContent = text;

        modal.style.display = 'flex';

    });

});

closeModal.addEventListener('click', () => {

    modal.style.display = 'none';

});

window.addEventListener('click', (e) => {

    if(e.target === modal) {

        modal.style.display = 'none';

    }

});
