let pushButton = document.querySelector("#push");
let input = document.querySelector("#newTask input");
let tasksDiv = document.querySelector('#taks');

pushButton.addEventListener("click", function () {
    if (input.value.length == 0) {
        alert("Please enter a task")
    } else {
        tasksDiv.innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${input.value}
                </span>

                <button class="delete">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3846 6.72019C16.7976 6.75419 17.1056 7.11519 17.0726 7.52819C17.0666 7.59619 16.5246 14.3072 16.2126 17.1222C16.0186 18.8692 14.8646 19.9322 13.1226 19.9642C11.7896 19.9872 10.5036 20.0002 9.2466 20.0002C7.8916 20.0002 6.5706 19.9852 5.2636 19.9582C3.5916 19.9252 2.4346 18.8412 2.2456 17.1292C1.9306 14.2892 1.3916 7.59519 1.3866 7.52819C1.3526 7.11519 1.6606 6.75319 2.0736 6.72019C2.4806 6.70919 2.8486 6.99519 2.8816 7.40719C2.88479 7.45059 3.10514 10.1842 3.34526 12.8889L3.39349 13.4286C3.51443 14.773 3.63703 16.0648 3.7366 16.9642C3.8436 17.9372 4.3686 18.4392 5.2946 18.4582C7.7946 18.5112 10.3456 18.5142 13.0956 18.4642C14.0796 18.4452 14.6116 17.9532 14.7216 16.9572C15.0316 14.1632 15.5716 7.47519 15.5776 7.40719C15.6106 6.99519 15.9756 6.70719 16.3846 6.72019ZM11.3454 0.000488281C12.2634 0.000488281 13.0704 0.619488 13.3074 1.50649L13.5614 2.76749C13.6435 3.18086 14.0062 3.48275 14.4263 3.48938L17.708 3.48949C18.122 3.48949 18.458 3.82549 18.458 4.23949C18.458 4.65349 18.122 4.98949 17.708 4.98949L14.4556 4.98934C14.4505 4.98944 14.4455 4.98949 14.4404 4.98949L14.416 4.98849L4.04162 4.98937C4.03355 4.98945 4.02548 4.98949 4.0174 4.98949L4.002 4.98849L0.75 4.98949C0.336 4.98949 0 4.65349 0 4.23949C0 3.82549 0.336 3.48949 0.75 3.48949L4.031 3.48849L4.13202 3.48209C4.50831 3.43327 4.82104 3.14749 4.8974 2.76749L5.1404 1.55149C5.3874 0.619488 6.1944 0.000488281 7.1124 0.000488281H11.3454ZM11.3454 1.50049H7.1124C6.8724 1.50049 6.6614 1.66149 6.6004 1.89249L6.3674 3.06249C6.33779 3.21068 6.29467 3.3535 6.23948 3.48976H12.2186C12.1634 3.3535 12.1201 3.21068 12.0904 3.06249L11.8474 1.84649C11.7964 1.66149 11.5854 1.50049 11.3454 1.50049Z" fill="black"/>
                </svg>
            </button>
            </div> 
            
        `;

        // Delete button a task
        var deleteButtons = document.querySelectorAll(".delete");

        for (let button of deleteButtons) {           
            button.addEventListener("click",function(){
                this.parentNode.remove();
            })
        }

        //add compleated class to a task
        let tasks = document.querySelectorAll(".task");

        for (let task of tasks) {
            task.addEventListener("click", function(){
                this.classList.toggle("completed");
            })
        }

        input.value=""
    }

})



