

export const stateConfigFactory = (state: ng.ui.IState) => [
  '$stateProvider',
  ($stateProvider: ng.ui.IStateProvider) => $stateProvider.state(state)
]