# AngularJS on Visualforce Seed Project

Much like the original Angular seed project, this repo serves as a starting point for Angular application development. However, this repo focuses on Angular application development on the Force.com Platform. Specifically, Writing Angular.js applications inside / on top of Visualforce.

This repository is highly opinionated and represents the results of hard-fought lessons over the course of nearly two years of Angular development on the Force.com Platform. 

## About, Assumptions and such

This seed project assumes your comfortable with Angular development, and does not go out of it's way to introduce the concepts, syntax or api's of Angular. *However, it does go out of it's way to document the gotcha's of Angular On Visualforce.*

The seed itself, is distributed as an unmanaged package consisting of a few visualforce pages, a few visual components, a few Apex classes and a singluar Static Resource bundle. The bulk of the Angular application code is stored in the static resource. I highly suggest developing your application with MavensMate, as the "resource bundle" features of MavensMate make development much faster.

### Installation Instructions

You can choose to either clone this repository, and manually install the components to your org, or utilize the unmanaged package link. As I'm not a masochist, I'll leave manual installation as an exercise to the reader. To install using the Unmanaged Package url, click the link below *after* having logged into your org. Regardless of how you install it, please be sure to create the necessary custom setting record. Navigate to the "Use Localhost Angular Resources" Custom setting and create a record named "default" with the Use_Localhost_resources checkbox left Unchecked. 

#### Unmanaged Package URL:
[https://login.salesforce.com/packaging/installPackage.apexp?p0=04tj0000001VrIT](Click here to install as an unmanaged package)

## Methodology

Some general notes on the Architecture of the Seed project:

In general, this seed project is setup with the following structure:

1. A master Application page. This page is responsible for bootstrapping the Angular application, and including the numerous .js / .css files needed for the application to run.
2. A visualforce component (src/components/ngApp.component) that acts as a switch loading either the localhost or serverside resources components based on the inspection of a custom setting included in the unmanaged package. 
3. A custom setting (useLocalhostResources) who's "default" record determines whether or not the js files are required from a localhost server, or from the static resource bundle.
4. Angular templates (views) are visualforce pages. Pay careful attention to the notes regarding apex:page tag attributes in the masterApplicationPage.page file, as they have a serious inpact on the functionality of Angular.js apps inside visualforce.
5. A visualforce page, (src/pages/angular_config.page) that serves up the SID token used for REST based call authentication. This file is rendered as JSON, and must be included in the masterApplicationPage as a script tag if you intend to use Rest based api calls. It can be igored if you only want to use JS Remoting.
6. The static resource containing the .js, .css, fonts and images.

While the Angular project recommends building out your application as a single file, or at least a single file of controllers, directives, etc. This project has specifically split out the various components of an Angular app into separate files. These can easilly be combined and minified at deployment time using grunt/gulp/etc. Note the file structure section below for more detials.

This seed also includes font-awesome, bootstrap and a few additional directives and libraries as a way to quickly get started. Feel free to remove as necessary.

## File Structure(s) of the Static Resource bundle.

The static resource bundle is organized for quick and clean development of applications. As such, I've tried to isolate various *types* of code into their respective directories. Within the resources/ directory you'll find the following folders: 

| Folder Name | Contains | Notes | 
|-------------|----------|-------|
| app/ | Javascript files defining the Angular Application | Please read app.js's Comments!|
| controllers/ | Holds Angular controller files (.js) *specific* to your application | MasterAppPageCtrl.js is heavily annotated! Please Read |
| css/ | Holds all .css files ||
| directives/ | Holds Angular Directive files (.js) that you have written or added to your application. | Not intended to store directives that are part of external modules you've included.| 
| fonts/ | Holds font awesome and other fonts you may add | |
| lib/ | Holds .js files that are not necessarially Angular specific, or custom to your application | e.g. jQuery | 
| ng/ | This folder contains the actuall Angular library files distributed by Google. | Isolated into this folder, so that you can quickly upgrade Angular versions by swapping out the contents of this entire folder|
| ngForce/ | Holds the ngForce (Salesforce <--> Angular.js integration ) Module and it's needed dependencies | see [https://noeticpenguin.github.io/ngForce/](https://noeticpenguin.github.io/ngForce) for more information |
| tests/ | Holds your functional and e2e (end to end) tests | |

Additionally, there are two files in the /resource directory that accelerate application development, but do not necessarially have anything todo with your actual application. 

resources/cors_server.py is a python based CORS and SSH enabled webserver written in python. 
resources/server.pem is a .pem based *self signed ssl certificate* that *should never be used in production* but is fine for development. 

Together, these two files allow you to run a CORS and SSL based webserver to serve all of the files in the resources/\*/\* folders locally. This allows your browser to load controllers, directives etc from your local machine, rather than having to upload the static resource to Salesforce after every edit.

To start the local server you'll need a working installation of python. Once thats established, navigate to your resources folder in a terminal / cmd.exe window and run: 

```
python cors_server.py
```

You *must also configure your Salesforce custom setting record established during installation (see above) to be "true" (or checked). 

## ngForce

This seed project utilizes the ngForce library for data interchange with Salesforce's REST api's as well as Javascript Remoting and Remote Objects. See [https://noeticpenguin.github.io/ngForce/](https://noeticpenguin.github.io/ngForce) for more information.
