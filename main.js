let input = document.getElementById('input').value;
const buttons = document.getElementById('BTN')

buttons.addEventListener('click', () => {
    let tache = document.getElementById('input').value;
    setTache(tache)
    getAllTaches()
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let tache = document.getElementById('input').value;
        setTache(tache)
        getAllTaches()
    }
});
function setTache(tache) {
    const oldTableaux = localStorage.getItem("taches");
    let parsedTableaux;
    if (oldTableaux != null) {
        parsedTableaux = JSON.parse(oldTableaux);
    } else {
        parsedTableaux = [];
    }

    parsedTableaux.push(tache);
    localStorage.setItem("taches", JSON.stringify(parsedTableaux));
}
function getAllTaches() {
    const tableaux = localStorage.getItem("taches");
    if (tableaux) {
        const parsedTableaux = JSON.parse(tableaux);
        const DivTaches = document.createElement('ul');
        const taches = document.querySelector('.Taches');
        parsedTableaux.forEach((element, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = element;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'ed';
            deleteButton.addEventListener('click', () => supprimerTache(index));
            listItem.appendChild(deleteButton);
            DivTaches.appendChild(listItem);
        });
        taches.innerHTML = '';
        taches.appendChild(DivTaches);
        return parsedTableaux;
    } else {
        const emptyTableaux = [];
        localStorage.setItem("taches", JSON.stringify(emptyTableaux));
        return emptyTableaux;
    }
}
function supprimerTache(index) {
    const tableaux = localStorage.getItem("taches");
    if (tableaux) {
        const parsedTableaux = JSON.parse(tableaux);
        parsedTableaux.splice(index, 1);
        localStorage.setItem("taches", JSON.stringify(parsedTableaux));
        getAllTaches();
    }
}
document.addEventListener('DOMContentLoaded', getAllTaches);
