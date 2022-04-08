function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html').setTitle('Google Group Directory Unlister');
}

function test_() {
  //var groups = getAllGroups();
  //console.log(JSON.stringify(groups));
  
  //console.log(showGroupInDirectory("group@yourdomain.com", false));
  //console.log(getGroupSettings("group@yourdomain.com"));
}

// https://developers.google.com/apps-script/advanced/admin-sdk-directory#list_all_groups
function getAllGroups() {
  let groups = [];
  let pageToken, page;
  do {
    page = AdminDirectory.Groups.list({
      "domain": "yourdomain.com",
      "pageToken": pageToken
    });
    if (page.groups) {
      groups = groups.concat(page.groups);
    } else {
      throw 'No groups found on this check.'; // shouldn't be possible
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
  return groups;
}

function showGroupInDirectory(groupId, showInDirectory) {
  
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!groupId || typeof groupId != "string" || !re.test(groupId.toLowerCase())) {
    throw 'Please call this function with a Google Group ID';
  }
  if (showInDirectory == null) {
    showInDirectory = "true";
  }
  showInDirectory = showInDirectory.toString();
  if (showInDirectory != "true" && showInDirectory != 'false') {
    throw 'Please call this function with a boolean. Do you want this group to show in the directory or not?';
  }
  
  // okay. we now have a valid email address for the group id, and if we do or don't want it to be in the directory.
  // get the group object
  var group = AdminGroupsSettings.Groups.get(groupId);
  // update it's "included in the list" property
  group.includeInGlobalAddressList = showInDirectory;
  // then patch the group with it's new setting
  AdminGroupsSettings.Groups.patch(group, groupId);

  return group;
  
}

function getGroupSettings(groupId) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!groupId || typeof groupId != 'string' || !re.test(groupId.toLowerCase())) {
    throw 'Please call this function with a Google Group ID';
  }
  return AdminGroupsSettings.Groups.get(groupId);
}