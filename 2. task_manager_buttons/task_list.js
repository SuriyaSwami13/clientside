"use strict";
var $ = function(id) { return document.getElementById(id); };

var tasks = [];
var sortDirection = "ASC";

var displayTaskList = function() {
    var list = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { tasks = storage.split("|"); }
    }
    
    // if there are tasks in array, sort and create tasks string
    /*if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }*/
    // display tasks string and set focus on task text box
    
    if (tasks.length > 0) {
        
    if(sortDirection === "ASC"){
         tasks.sort();
    }else{
        tasks.reverse();
    }
        
    }
    
     list = tasks.join("\n");
    $("task_list").value = list;
    $("task").focus();
    
    
    //name
    
     var namestorage = localStorage.getItem("names") || "";
    if(namestorage.length > 0){
       
         $("name").innerHTML =  namestorage +"'s ";
    }
    else{
        $("name").value = "";
    }
    
   
}

var addToTaskList = function() {   
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {  
        // add task to array and local storage
        
           var res = task.value.split(",");
        
        for(var i=0;i<res.length;i++){
            
             tasks.push(res[i]);
        }
        
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

var deleteTask = function() {

     var index = parseInt(prompt("Please Enter the Index"));
     if(!isNaN(index)){
         
         if((index >= 0) && (index<tasks.length) )
            tasks.splice(index,1);
     }
  
    
   localStorage.tasks = tasks.join("|");
    displayTaskList();
    
}

var toggleSort = function() {

    if(sortDirection === "ASC"){
        sortDirection = "DESC"
    }
    else{
        sortDirection = "ASC"
    }
     displayTaskList();
}

var setName = function() {

    var name = prompt("Please Enter the Index");
    if(name.length > 0){
         localStorage.names = name;
    }
    
    displayTaskList();
}


window.onload = function() {
    
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    $("delete_task").onclick = deleteTask;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    displayTaskList();
}