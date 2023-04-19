export let pages = {
    '.box-instruction' : 'flex',
    '.box-mode' : 'none',
    '.box-play' : 'none',
    '.box-game-over' : 'none'
}

export function editStatus(target){
    if (target != null){
        pages[target] = 'flex';

        for (let a in pages){
            if (a != target){
                pages[a] = 'none';
            }
        }

        updateStatus();
    }
}

export function updateStatus(){
    for (let i in pages){
        document.querySelector(i).style.display = `${pages[i]}`;
    }
}