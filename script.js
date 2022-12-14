window.addEventListener('load', () =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit',(e) => {  
        e.preventDefault();

        /*Assignment - Validation code
        Validation code so as to not enter a blank task */
        var x = document.forms["task_form"]["new-task-input"].value;
        if (x == "" || x == null) {
          alert("Task must be filled out");
          return false;
        }

        const task = input.value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        /* Assignment - Numbered tasks
        'Div' is replaced with 'li' so as to have numbered tasks; Also 'div' is replaced by 'ol' in html */
        const task_content_el = document.createElement('li');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;

        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

       
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);

        input.value = '';

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) =>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }else{
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });
        task_del_el.addEventListener('click', (e) =>{
            list_el.removeChild(task_el);

            
              
        });
    });
});

//Assignment - Set up a validation such that you cannot enter a blank task (Hint: submit, add event listener)
//           - Figure out how to number the tasks
               