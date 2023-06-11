
var draggedItem = null;

// Function for when dragging starts
function dragStart(event) {
    draggedItem = event.target;
    event.target.classList.add("dragging");
}

// Function for when item is dragged over a container2    
function dragOver(event) {
    event.preventDefault();
}

// Function for when item is dropped onto a container2
function drop(event) {
    event.preventDefault();
    if (draggedItem) {
        event.target.appendChild(draggedItem);
        draggedItem.classList.remove("dragging");
        window.alert("Item dropped successfully!");
        
    }
}

// Function to reset the containers
function reset() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    // Clear the contents of container2
    container2.innerHTML = "";
    // Reset the contents of container1
    container1.innerHTML =`
    <div class="item" draggable="true" ondragstart="dragStart(event)">
<img src="Cunard QM2, New York New Year and Northern Lights Deal.jpg"
    alt="Cunard QM2, New York New Year and Northern Lights Deal" width="30%">
</div>
<div class="item" draggable="true" ondragstart="dragStart(event)">
    <img src="Statue of Liberty.jpg" alt="Statue of Liberty" width="30%">
</div>
<div class="item" draggable="true" ondragstart="dragStart(event)">
    <img src="Flyover Bridge New York.png" alt="Flyover Bridge New York" width="30%">
</div> 
    <div class="item" draggable="true" ondragstart="dragStart(event)">New York</div>
<div class="item" draggable="true" ondragstart="dragStart(event)">Statue of Liberty</div>
<div class="item" draggable="true" ondragstart="dragStart(event)">Bridge New York</div>
        `;
window.alert("Container is Reset Successfully");
        
    }
