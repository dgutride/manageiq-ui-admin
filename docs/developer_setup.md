# Developer Setup

Logging in to the Admin UI requires a running instance of ManageIQ. Instructions on how to install ManageIQ can be found
[here](https://github.com/ManageIQ/guides/blob/master/developer_setup.md).

### Install Repository and Prerequisites

- Have the [ManageIQ](http://github.com/ManageIQ/manageiq) repo cloned into a
  directory named `manageiq`, and ready to be started. See [here](https://github.com/ManageIQ/guides/blob/master/developer_setup.md)
  for the steps required to setup ManageIQ.
- Have the SUI repo at the same level as `manageiq/`, this ensures the SUI builds, `gulp build`, into the correct manageiq folder.
  - `git clone git@github.com:ManageIQ/manageiq-ui-admin.git`.
- Have nodejs **v6.x** and npm **3.x.x** installed (npm should be installed with NodeJS)
- Have yarn (^v0.16.1) and gulp globally installed.
  - `npm install -g yarn gulp`npm

### Install Dependencies

- `cd manageiq-ui-admin`
- `yarn install`

### Setup

- From the `manageiq-ui-admin` directory, build the production version of
  the SUI. This task  will compile the assets and drop them into the `manageiq/public/ui/admin` directory.
  - `gulp build`


### Deployment

- From the `manageiq` directory, start the ManageIQ application to initiate the server listening on
http://localhost:3000 order and serve up the REST API.
  Either one of the following commands can be used.
  - `MIQ_SPARTAN=minimal rake evm:start`
  - `rails s`

- From the `manageiq-ui-admin` directory, start the development version of
  the admin UI, which will initiate the UI listening on _http://localhost:3001_, and talking to the REST API at
  _http://[::1]:3000_.  This command will also open a browser page to  _http://localhost:3001/ui/admin/login_.
  - `gulp serve`
- If you have a local copy of Manage IQ Server installed and would like to start it up at the same time you bring up the service ui web server, run
	- ``` gulp start-manageiq-server ```

If you would like to override the default port (3000) that ManageIQ runs on you can set an environmental variable ``` export MANAGEIQPORT=4000```.  
If you are running manageiq in a folder other than _../manageiq/_ then you can override this path set in _gulp/config.js_ and update the _manageiqDir_ variable path.
