import angular from 'angular';
import uiRouter from 'angular-ui-router';
import showTemplate from './show.html'
import newTemplate from './new.html';
import CandidateService from './candidateService';
import CandidateListController from './candidateList.controller';
import ShowCandidateController from './show.controller';
import NewCandidateController from './new.controller';

let CandidatesModule = angular.module('candidates', [uiRouter])

.config(($stateProvider) => {

  $stateProvider.state('newCandidate', {
    url: '/candidates/new',
    template: newTemplate,
    controller: NewCandidateController,
    controllerAs: "vm"
  });
  $stateProvider.state('showCandidate', {
    url: '/candidates/:id',
    template: showTemplate,
    controller: ShowCandidateController,
    controllerAs: "vm"
  });

})


CandidatesModule.service("CandidateService", CandidateService);

CandidatesModule.controller("CandidateListController", CandidateListController);

export default CandidatesModule;
