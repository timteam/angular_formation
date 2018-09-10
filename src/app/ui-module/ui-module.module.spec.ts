import { UiModuleModule } from './ui-module.module';

describe('UiModuleModule', () => {
  let uiModuleModule: UiModuleModule;

  beforeEach(() => {
    uiModuleModule = new UiModuleModule();
  });

  it('should create an instance', () => {
    expect(uiModuleModule).toBeTruthy();
  });
});
