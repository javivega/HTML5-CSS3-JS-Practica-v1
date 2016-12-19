$(document).ready(function () {
	var API_URL = 'http://localhost:8000/api/';
	var tasks = [];
	var newTaskInput = $('#newTaskName');
	var tasksContainer = $('#taskContainer');
	var loader = $('.loader');
	
	
	var drawTasks = function () {
		tasksContainer.empty();
		var contentToAdd = '';
		if (tasks.length == "") {
			tasksContainer.append("<li class='task-item'>No hay Tareas Pendientes</li>")
		}
		else {
			for (var i = 0; i < tasks.length; i++) {
				contentToAdd += '<li class="task-item">' + tasks[i].name + '<button class="deleteTask" data-task-id="' + tasks[i].id + '">Eliminar</button></li>';
			}
			tasksContainer.append(contentToAdd);
		}
	}
	
	
	var createTask = function (name) {
		var success = function (data) {
			newTaskInput.val("");
			tasks.push(data);
			drawTasks();
		}
		var data = {
			'name': name
		}
		var error = function (error) {
			console.error("Error al crear la tarea", error);
		}
		$.ajax({
			type: "POST"
			, url: API_URL + "task"
			, data: data
			, success: success
			, error: error
		});
	}
	
	
	var getTask = function () {
		var success = function (data) {
			tasks = data;
			drawTasks();
		};
		var error = function (error) {
			console.error("Error cargando tareas", error);
		}
		var complete = function (object, textStatus) {
			loader.hide();
			console.log(object, textStatus);
			if (textStatus == 'error') {
				console.log("Ha habido un error, revisalo");
			}
			else {
				console.log("todo ha ido bien");
			}
		}
		
		var beforeSend = function(){
			loader.show();
		}
		
		$.ajax({
			type: "GET"
			, url: API_URL + "task"
			, success: success
			, error: error
			, complete: complete
			, beforeSend: beforeSend
		})
	}
	
	
	var removeTask = function (id) {
		var success = function (data) {
			tasks = $.grep(tasks, function (item) {
				return item.id != id;
			});
			drawTasks();
		}
		$.ajax({
			type: 'DELETE'
			, url: API_URL + "task/" + id
			, success: success
		}).fail(function (error) {
			console.error("No de ha podido borrar la tarea", error);
		}).always(function (object, status, error) {
			console.log(object, status, error);
		});
	}
	
	
	$('#sendNewTask').on("click", function () {
		if (newTaskInput.val() != '') {
			event.preventDefault();
			createTask(newTaskInput.val());
		}
	});
	
	
	$(document).on("click", ".deleteTask", function (event) {
		var id = $(this).data('taskId');
		removeTask(id);
	})
	
	
	getTask();
})