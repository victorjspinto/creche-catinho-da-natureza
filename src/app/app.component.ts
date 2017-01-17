class AppCtrl {
  public url:String;
  
  constructor($log:ng.ILogService) {
    this.url = 'https://github.com/preboot/angular-webpack';
    $log.info("Tipagem funcionou!");
  }
}

export default angular.module('app.component', [])
    .component('app', {
        template: "require('./app.html')",
        controller: AppCtrl
    })