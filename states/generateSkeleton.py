import os

data1 = "(function() { angular.module('app').config(function($stateProvider) {$stateProvider.state('napbackground', { url: '/nap/background', templateUrl: 'states/nap/background/background.template.html', controller: 'backgroundController', resolve: {}});}) angular.module('app').controller('backgroundController', function($scope){}); })();"

def makefiles(folder,path):
	if (not os.path.exists(path+"/"+folder+".controller.js")):
		f = open(path+"/"+folder+".controller.js","w");
		f.write("");
		f.close();
	if (not os.path.exists(path+"/"+folder+".template.html")):
		f = open(path+"/"+folder+".template.html","w");
		f.write("");
		f.close();
	# print path;
	folders = [i for i in os.listdir(path) if os.path.isdir(path+"/"+i)]
	# print folders;
	for i in folders:
		makefiles(i,path+"/"+i);

makefiles("states",os.getcwd());
# print os.getcwd();