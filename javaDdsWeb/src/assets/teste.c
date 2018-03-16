#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct N{
  int valor;
  struct N *f_direira;
  struct N *f_esquerda;
} node;

typedef struct{
  node *topo;
} ArvoreB

void inicializar(ArvoreB *arvore){    
  arvore->topo = NULL;
  arvore->f_direira = NULL
  arvore->f_esquerda = NULL
  arvore->valor = NULL;
}

int vazia(ArvoreB *arvore){
  if(arvore->topo == NULL){
    return 1;
  }
  return 0;
}

void inserir(ArvoreB *arvore, float linhaV, float colunaV){
  node *no;
  no =(node *)malloc(sizeof(node));
  no->f_esquerda = NULL;
  no->f_direita = NULL;

  if(ArvoreBVazia(arvore) == 1){
    arvore->topo = no;
  } else
  {
    no->f_esquerda = arvore->topo;
    arvore->topo->f_direita = no;
    arvore->topo = no;
  }

  arvore->cont++;
}

int remover(ArvoreB *arvore, int valor){
  int entrou = 0;
  node *temp;
  node *temp2;
  temp = arvore->topo;
  temp2 = arvore->topo;

  if(vazia(l)==1){
    printf("ERRO: Lista Vazia\n");
    return;
  }

  while(temp!=NULL){
    if (temp->coluna == colunaV && temp->linha == linhaV){
      temp2 = temp2->f_esquerda;
      temp2->f_direita = temp->f_direita;
      temp2 = temp->f_direita;
      temp2->f_esquerda = temp->f_esquerda;
      entrou = 1;
      arvore->cont--;
      break;
    }
    temp = temp->f_esquerda;
  }

  if(entrou != 1){
    printf("ERRO: coordenada nÃ£o encontrada\n");
    return;
  }
  return &temp;
}

void imprimir(ArvoreB *arvore){
  node *temp;
  temp = arvore->topo;
  while(temp!=NULL){
    printf("(%.2lf,%.2lf) ", temp->linha, temp->coluna);
    temp = temp->f_esquerda;
  }
  printf("\n");
}