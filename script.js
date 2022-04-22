const fill = document.querySelector('.fill')
const empty = document.querySelectorAll('.empty')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragover', dragEnter)
    empty.addEventListener('dragover', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
    
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter() {
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
   this.className = 'empty'
   this.append(fill)
}