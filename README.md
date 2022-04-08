![Google Group Directory Unlister](https://raw.githubusercontent.com/leoherzog/googlegroupdirectoryunlister/master/img/screenshot.png)

# Google Group Directory Unlister

### Basics

[Google Groups for Gsuite](https://support.google.com/a/topic/25838) is a product that allows admins to create mailing lists for their domain. It is different than the public-facing [Google Groups](https://groups.google.com/) forums. When an admin makes a new Google Group for their domain, by default, the email address for that group is available in their domain's directory. That means that every user in the domain has the group's email address autocomplete when they type in the "To:" field in Gmail. There is no way to change that setting unless you do it programatically via the [Admin Group Settings API](https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups).

In order to make our Admin's lives easier, I created this script. It simply grabs all of the groups on your domain and lets you toggle whether they are or are not included in the directory.

### Setup

`Note: This project must be initially created by a domain administrator account`

1. Log in as a domain administrator and create a [new Google Apps Script project](https://script.google.com/) in Google Drive.
2. Copy and paste the code from [`code.gs`](https://raw.githubusercontent.com/leoherzog/googlegroupdirectoryunlister/master/code.gs) in this repository into `code.gs` in the Apps Script project
3. Create a new html file in your project with the `Files ➕` button in the left sidebar, choose `HTML`, name it `index` (.html is added automatically), and copy the code from [`index.html`](https://raw.githubusercontent.com/leoherzog/googlegroupdirectoryunlister/master/index.html) from this repository into it.
4. In the `Services ➕` section on the left sidebar, scroll down and turn on the **Admin Directory API** and **Groups Settings API**.
5. On `line 19` of `code.gs`, change `yourdomain.com` to your domain name.
6. Click `Deploy` → `New deployment`. Choose the level of access that you want to have on the panel (Under `Who has access`), and click `Deploy`.

You're done! Navigate to that web app URL to see your groups and modify each one's setting.

### Updating

When updates are released here on Github, simply copy and paste the newer [`code.gs`](https://raw.githubusercontent.com/leoherzog/googlegroupdirectoryunlister/master/code.gs) and [`index.html`](https://raw.githubusercontent.com/leoherzog/googlegroupdirectoryunlister/master/index.html) files to your project, make sure your domain name on `line 19` of `code.gs` is correct, and go to `Deploy` → `Manage deployments`. Click the `✏️ Edit` button in the top right of your current deployment, choose `New version` under the `Version` dropdown, and click `Deploy`. You should be good to go!

- - -

Feel free to take a look at the source and adapt as you please. I would love to see some pull requests for improvements to the Javascript.

This source is licensed as follows:

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Google Group Directory Unlister</span> is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

- - -

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/white_img.png)](https://buymeacoff.ee/leoherzog)
