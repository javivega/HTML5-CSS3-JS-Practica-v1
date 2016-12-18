$(document).ready(function(){
	var tasks = [];
	var newTaskInput = $('#newTaskName');
	var tasksContainer = $('#taskContainer');
	
	var drawTasks = function(){
		tasksContainer.empty();
		
		var contentToAdd = '';
		for(var i = 0; i < tasks.length; i++){
			 contentToAdd += '<li>' + tasks[i].name + '</li>';
		}
		
		tasksContainer.append(contentToAdd);
	}
	
	var createTask = function(name){
		var success = function(data){
			newTaskInput.val("");
			tasks.push(data);
			drawTasks();
		}
		
		var data = {
			'name': name
		}
		$.ajax({
			type: "POST",
			url: "http://localhost:8000/api/task",
			data: data,
			success: success
		});
	}
	
	
	$('#sendNewTask').on("click", function(){
		event.preventDefault();
		createTask(newTaskInput.val());
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})