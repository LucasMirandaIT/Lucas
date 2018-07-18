import { async, ComponentFixture, inject, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DdsUploadFileComponent } from './dds-upload-file.component';

import { RouterModule, ActivatedRoute, Router } from '@angular/router';

describe('DdsUploadFileComponent', () => {
  const dds = new DdsUploadFileComponent(null);

  it('test variables', () => {
    expect(dds.loaded).toBeFalsy();
    expect(dds.arquivo.nome).toBe(undefined);
    expect(dds.dragging).toBe(false);
    expect(dds._file).toBe(null);
  });

  it('test formatDate()', () => {
    const data = new Date();
    dds.formatDate(data);
  });

  it('test onDragEnter()', () => {
    dds.onDragEnter();
  });

  it('test onDragLeave()', () => {
    dds.onDragLeave();
  });

  it('test onCarregarArquivo()', () => {
    let e = { target: 'c://local/arquivo.csv' };
    dds.onCarregarArquivo(e);
  });

  it('test onDrop()', () => {
    let arquivo = {
        dataTransfer: {files : [undefined]},
        type: 'drag',
        preventDefault: function () { return; }
    };

    let retorno = dds.onDrop(arquivo);
    expect(retorno).toBeUndefined();
  });

  it('test onArquivoSelecionado sem arquivo()', () => {
    let arquivo = { dataTransfer: {files : [undefined]} };
    let retorno = dds.onArquivoSelecionado(arquivo);
    expect(retorno).toBeUndefined();
  });

});
