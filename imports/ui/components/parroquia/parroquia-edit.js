import { Parroquias } from '../../../api/parroquias/collection';

console.log('Loaded parroquia-edit directive!');
angular.module('parroquias').directive('parroquiaEdit', function($stateParams) {
  return {
    restrict: 'E',
    scope: {
      id: '='
    },
    templateUrl: 'imports/ui/components/parroquia/parroquia-edit.html',
    controllerAs: 'pec',
    controller: function($scope, $reactive) {
      var pec;
      $reactive(this).attach($scope);
      pec = this;
      pec.id = $scope.id;
      pec.helpers({
        parroquia: function() {
          return Parroquias.findOne({});
        },
	states: function() {
          return ['Chihuahua','Coahuila','Jalisco'];
        }
      });
      pec.subscribe('parroquia', function() {
        return [pec.id];
      });
      return console.log('parroquia loaded for edit');
    }
  };
});
