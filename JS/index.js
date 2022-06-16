`use strict`
function loadTasks() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(response) {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      console.log(data);
      let taskBody = document.getElementById("tasks")
      data.forEach((task, i, arr) => {
        if (i > 5) {
          arr.length = i + 1
        }else {
          let html = `<div class="card task-cards border-primary m-2" style="width: 17.45rem;">
            <div class="card-body">
              <div class="vendor">
              <h4>${task.vendor}</h4>
              </div>
              <div class="created_at">
                  <p style="font-size: 12px;">${task.createdAt}</p>
              </div>
              <div class="item">
                <p style="font-size: 15px;" class="text-primary ">${task.title}</p>
              </div>
              <div class="offer mt-5 text-end">
                <p style="font-size: 10px;">${task.offer}</p>
              </div>
            </div>
          </div>`
          taskBody.innerHTML = taskBody.innerHTML + (html)
        }
      });

    }
  };

  xhttp.open("GET", "https://62aa3913371180affbd1e027.mockapi.io/api/v1/dashboard/tasks", true);
  xhttp.send();

}
loadTasks()


function loadItems() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(response) {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      let taskBody = document.getElementById("items")
      data.forEach((item, i, arr) => {
        if (i > 5) {
          arr.length = i + 1
        }else {
          let html = `<div class="item mb-3 p-2 d-flex" style="border: 1px solid grey; border-radius: 8px; box-shadow: 0px 2px 14px #d2d2d2;">
            <div class="m-2 me-4">
              <p class="mb-0" style="font-size: 18px; font-weight: bold;">${item.created_by}</p>
            </div>
            <div class=" m-2 me-4">
              <p class="mb-0" style="font-size: 18px; font-weight: bold;">${item.item}</p>
            </div>
            <div class=" m-2 me-4">
              <p class="mb-0" style="font-size: 18px; font-weight: bold;">Progress: ${item.no_of_documents}%</p>
              <p class="mb-0" style="font-size: 12px; color: grey;">${item.created_at}</p>
            </div>
            <div class=" m-2 d-flex flex-column">
              <p class="mb-0" style="font-size: 18px; font-weight: bold;">No. of Documents: ${item.no_of_documents}</p>
              <div class="d-flex">
                <p class="mb-0 me-1" style="font-size: 12px; color: grey;"> <b style="color: #000;">Item Id</b> : ${item.id}</p>
              </div>
            </div>
          </div>`
          taskBody.innerHTML = taskBody.innerHTML + (html)
        }
      });

    }
  };

  xhttp.open("GET", "https://62aa3913371180affbd1e027.mockapi.io/api/v1/dashboard/items", true);
  xhttp.send();

}
loadItems()

// chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Monthly Report',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(3, 140, 252)',
          tension: 0.1
        }]
    }
});
