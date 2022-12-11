// Dummy Tickets for tutorial
$(document).ready(function() {
  if(!localStorage.visited) {
    var string = '[{"id":"220762b0-22c3-5927-93d7-b846bc5eae39","title":"Ticket #1: Welcome to CollabRate","description":"Hello there! Thanks for checking out my project. This is an example of a ticket. Move me to Work In Progress by clicking the Work In Progress button.","severity":"Very High","assignedTo":"JP","status":"Backlog"},{"id":"9c5c42d5-ecb8-5378-aa09-391a3dcc1df4","title":"Ticket #2: Delete a ticket","description":"Hi, the name of this ticket is Reginald! Reginald is a concept created by you while reading this. When you click the Delete button below, Reginald ceases to exist. Your choice to click or not is the thin barrier between him and the Void.","severity":"Very High","assignedTo":"Reginald`s Killer","status":"Review"}]';
    localStorage.setItem('issues', string);
    localStorage.visited = true;
  }
});

// Add Ticket Section
var InputForm = document.getElementById('issueInputForm');
if (InputForm) {
  document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

  function saveIssue(e) {
    var issueTitle = document.getElementById('issueTitleInput').value;
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid();
    var issueStatus = 'Backlog';

    var issue = {
      id: issueId,
      title: issueTitle,
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
      issues[i].status = 'Deleted';
      //issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
}

// The Boss Function
function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesLista = document.getElementById('issuesList1');
  var issuesListb = document.getElementById('issuesList2');
  var issuesListc = document.getElementById('issuesList3');
  var issuesListd = document.getElementById('issuesList4');
  var issuesListe = document.getElementById('issuesList5');
  var issuesListf = document.getElementById('issuesList6');

  // Backlog Tickets Body
  if (issuesLista) {
    issuesList1.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var title = issues[i].title;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      if (status == 'Backlog') {
        issuesList1.innerHTML += '<div class="well">' +
          '<h6>Issue ID: ' + id + '</h6>' +
          '<p><span class="label label-info">' + status + '</span></p>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
          '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
          '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
          '<br><br>' +
          '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
          '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
          '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
          '<br><br>' +
          '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
          '</div>';
      }
    }
  }

  // WIP Tickets Body
  if (issuesListb) {
    issuesList2.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var title = issues[i].title;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      if (status == 'Work In Progress') {
        issuesList2.innerHTML += '<div class="well">' +
          '<h6>Issue ID: ' + id + '</h6>' +
          '<p><span class="label label-info">' + status + '</span></p>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
          '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
          '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
          '<br><br>' +
          '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
          '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
          '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
          '<br><br>' +
          '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
          '</div>';
      }
    }
  }

  // Pending Tickets Body
  if (issuesListc) {
    issuesList3.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var title = issues[i].title;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      if (status == 'Pending') {
        issuesList3.innerHTML += '<div class="well">' +
          '<h6>Issue ID: ' + id + '</h6>' +
          '<p><span class="label label-info">' + status + '</span></p>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
          '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
          '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
          '<br><br>' +
          '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
          '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
          '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
          '<br><br>' +
          '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
          '</div>';
      }
    }
  }

  // Review Tickets Body
  if (issuesListd) {
    issuesList4.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var title = issues[i].title;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      if (status == 'Review') {
        issuesList4.innerHTML += '<div class="well">' +
          '<h6>Issue ID: ' + id + '</h6>' +
          '<p><span class="label label-info">' + status + '</span></p>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
          '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
          '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
          '<br><br>' +
          '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
          '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
          '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
          '<br><br>' +
          '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
          '</div>';
      }
    }
  }

  // Closed Tickets Body
  if (issuesListe) {
    issuesList5.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var title = issues[i].title;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      if (status == 'Closed') {
        issuesList5.innerHTML += '<div class="well">' +
          '<h6>Issue ID: ' + id + '</h6>' +
          '<p><span class="label label-info">' + status + '</span></p>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
          '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
          '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
          '<br><br>' +
          '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
          '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
          '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
          '<br><br>' +
          '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
          '</div>';
      }
    }
  }

  // Deleted Tickets Body
  if (issuesListf) {
    issuesList6.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var title = issues[i].title;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      if (status == 'Deleted') {
        issuesList6.innerHTML += '<div class="well">' +
          '<h6>Issue ID: ' + id + '</h6>' +
          '<p><span class="label label-info">' + status + '</span></p>' +
          '<h3>' + title + '</h3>' +
          '<p>' + desc + '</p>' +
          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
          '<a onclick="setStatusBacklog(\'' + id + '\')" class="btn btn-warning">Backlog</a> ' +
          '<a onclick="setStatusWIP(\'' + id + '\')" class="btn btn-warning">Work In Progress</a> ' +
          '<br><br>' +
          '<a onclick="setStatusPending(\'' + id + '\')" class="btn btn-warning">Pending</a> ' +
          '<a onclick="setStatusReview(\'' + id + '\')" class="btn btn-warning">Review</a> ' +
          '<a onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
          '<br><br>' +
          '<a onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
          '</div>';
      }
    }
  }
}
