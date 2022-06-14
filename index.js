
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(response) {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      let taskBody = document.getElementById("tasks")
      data.data.task_assigned.forEach((task, i, arr) => {
        if (i > 5) {
          arr.length = i + 1
        }else {
          let html = `<div class="card task-cards border-primary m-2" style="width: 15rem;">
            <div class="card-body">
              <div class="vendor">
              <h4>${task.vendor}</h4>
              </div>
              <div class="created_at">
                  <p style="font-size: 12px;">${task.created_at}</p>
              </div>
              <div class="item">
                <p style="font-size: 15px;" class="text-primary ">${task.item}</p>
              </div>
              <div class="offer mt-5 text-end">
                <p style="font-size: 10px;">${task.offer}</p>
              </div>
            </div>
          </div>`
          console.log(html);
          taskBody.innerHTML = taskBody.innerHTML + (html)
        }
      });

    }
  };

  xhttp.open("GET", "https://85ce0c83-aa18-42d9-a7d8-963d3ac18204.mock.pstmn.io/dashboard/tasks", true);
  xhttp.send();

}
loadDoc()
