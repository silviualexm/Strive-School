/* EXERCISE 5: 
          Add a new task to the list.
          Suggestion:
          - Use document.getElementById to get the UL item and the input text
          - Use the document.createElement to create the new List Item
          - Append the child to the UL
      */
    const addNewTask = () => {
    let taskList = document.getElementById(`myTaskList`)
    let targettingInputText = document.getElementById(`newTask`)
    let newTask = targettingInputText.value
    let newItemList = document.createElement(`li`)
    taskList.appendChild(newItemList)
    newItemList.style.listStyle = "none"
    newItemList.innerText = newTask
    targettingInputText.value = ""
    }
    let 
      /* EXERCISE 6: 
          Create a method "removeLast" which removes the last item from the task list
      */
    const removeLast = () => {
        let  taskList = document.getElementById("myTaskList") //--> targetting my list by ID -I think first is getting the element an if later is fill it becomes to be an HTMLCollection(why?) 
        let lastListItem = taskList.lastElementChild //--> This is just a read property of [HTMLCollection] to get last element if not returns => null //https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild
        taskList.removeChild(lastListItem) //-->This is a method of [HTMLCollectioon] 
    }
      /* EXERCISE 7: 
          Create a method "removeFirst" which removes the first item from the task list
      */
     const removeFirst = () => {
        let  taskList = document.getElementById("myTaskList")
        let firstListItem = taskList.firstElementChild
        taskList.removeChild(firstListItem)
    }
      /* EXERCISE 8: 
          Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
      */
    const getTasksAsArray = () => {
        let  taskList = document.getElementsByTagName(`li`) //--> Using elements by TagName to receive an [HTML Collection]
        let arrayOfTaskList = [...taskList] //--> Using ... Spread Syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        console.log(arrayOfTaskList)
    }
      /* EXERCISE 9:
          Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
          onchange event listener ad applies it as background to every list item
      */
    const changeTaskBackgroundColor = (event) => {  //--> i write directly in HTML the event, still isn't clear how to do it from DOM manipulation, I'll check again the recording
        const selectedColor = event.target.value
        let selectingColorPicker = document.getElementById(`colorPicker`)
        let newColor = selectingColorPicker.value
        let taskList = document.getElementsByTagName(`li`)
        for (const li of taskList) {
        //    li.style.backgroundColor = newColor
            switch (newColor) { //Trying to use a switch to solve matter of font-visibility with darker background-colors
                case "0 0 0":
                    li.style.color = "255 255 255"
                    break;
            
                default:
                    li.style.backgroundColor = newColor
                    break;
            }
        }
    }
      /* EXTRA */

      /* EXERCISE 10: 
          Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
      
          Use your spare time to beautify your task list with CSS.

          Suggestion:
          - Break the code into many function for semplicity 
          - Reuse the functions previously created
      */