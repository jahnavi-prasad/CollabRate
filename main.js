document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Backlog';

  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

  if (localStorage.getItem('issues') == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();

  e.preventDefault();
}

// Status: Backlog
function setStatusBacklog(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Backlog';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// Status: Work In Progress
function setStatusWIP(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Work In Progress';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// Status: Pending
function setStatusPending(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Pending';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// Status: Review
function setStatusReview(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Review';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// Status: Closed
function setStatusClosed(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Closed';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// Action: Delete
function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// The Boss Function
function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesLista = document.getElementById('issuesList');
  var issuesListb = document.getElementById('issuesList2');
  var issuesListc = document.getElementById('issuesList3');
  var issuesListc = document.getElementById('issuesList4');

  issuesList.innerHTML = '';
  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    if(status == 'Backlog'){
      issuesList.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
      '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
      '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
      '<br><br>'+
      '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
      '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
      '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
      '<br><br>'+
      '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>';
    }
  }

  issuesList2.innerHTML = '';
  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    if(status == 'Work In Progress'){
      issuesList2.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
      '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
      '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
      '<br><br>'+
      '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
      '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
      '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
      '<br><br>'+
      '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>';
    }
  }

  issuesList3.innerHTML = '';
  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    if(status == 'Pending'){
      issuesList3.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
      '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
      '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
      '<br><br>'+
      '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
      '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
      '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
      '<br><br>'+
      '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>';
    }
  }

  issuesList4.innerHTML = '';
  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    if(status == 'Review'){
      issuesList4.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
      '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
      '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
      '<br><br>'+
      '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
      '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
      '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
      '<br><br>'+
      '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>';
    }
  }

  issuesList5.innerHTML = '';
  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;
    if(status == 'Closed'){
      issuesList5.innerHTML += '<div class="well">' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
      '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
      '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
      '<br><br>'+
      '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
      '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
      '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
      '<br><br>'+
      '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>';
    }
  }
}
