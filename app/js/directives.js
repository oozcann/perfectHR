//import {sideBarMenuDirective} from './drct/sideBarMenuDirective';
import SideBarMenuDirective from './drct/SideBarMenuDirective';

var myApp = angular.module('myApp', []);

myApp.directive('sideBarMenu', SideBarMenuDirective);