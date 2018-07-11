import { ImportsMaterialModule } from './imports-material.module';

describe('ImportsMaterialModule', () => {
  let importsMaterialModule: ImportsMaterialModule;

  beforeEach(() => {
    importsMaterialModule = new ImportsMaterialModule();
  });

  it('should create an instance', () => {
    expect(importsMaterialModule).toBeTruthy();
  });
});
