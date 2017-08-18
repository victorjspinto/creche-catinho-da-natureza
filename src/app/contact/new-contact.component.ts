import { ui } from 'angular'

class NewClassController {

    
    public contactTypes:Array<LabeledContent> = [
        {
            label: 'Telefone',
            value: 'TELEPHONE'
        }, {
            label: 'E-mail',
            value: 'EMAIL'
        }, {
            label: 'Chat',
            value: 'CHAT'
        }
    ];

    public contactReasons:Array<LabeledContent> = [
        {
            label: 'Dúvida',
            value: 'DOUBT'
        }, {
            label: 'Elogio',
            value: 'COMPLIMENT'
        }, {
            label: 'Sugestão',
            value: 'SUGGESTION'
        }
    ];

    constructor(
        private $state:ui.IStateService,
        private $log:ng.ILogService,
        private $stateParams:ui.IStateParamsService
        ) {
        
    }

    public save() {

    }
}

interface LabeledContent {
    label:String;
    value:String;
}

export default angular.module('app.class.new', [])
    .component('newContact', {
        template: require('./new-contact.html'),
        controller: NewClassController,
        controllerAs: 'ctrl'
    })
    .config(($stateProvider:ui.IStateProvider) => {
         $stateProvider.state('newContact', {
            url: '/contacts/new',
            template: '<new-contact layout="column" flex layout-fill></new-contact>',
            data: {
                permissions: {
                    only: 'isAuthorized',
                    redirectTo: 'login'
                }
            }
        });
    })
    .name;
