# Select Multiple Items With Sort (AngularJS)

### [Demo](http://birdcon.com/github/bird-select/demo/)

Installation
------------

```html
<!-- Add the CSS -->
<link href="css/angular-select-multiple.css" rel="stylesheet" />

<!-- Add the JavaScript -->
<script src="js/angular-select-multiple.js"></script>
```

Dependency Injection

```javascript
const app = angular.module("app", ['ngSelectMultiple']);
```


Use
------------

You can use it by passing an array from scope in ng-list.
Set the ng-model to get the selected ids from list.

```html
<bird-select ng-name="dogs" ng-placeholder="Search..." ng-list="list" ng-model="my_first_list"></bird-select>
```

Or you can pass the ng-list-url to retrieve the list.

```html
<bird-select ng-name="cats" ng-placeholder="Search..." ng-list-url="ajax/sample.json" ng-model="my_second_list"></bird-select>
```
