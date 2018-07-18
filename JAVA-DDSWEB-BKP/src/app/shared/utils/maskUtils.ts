import { Injectable } from "@angular/core";

@Injectable()
export class MaskUtils {

    cpfFormat(cpf:any) {
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return cpf
      }
    
      cnpjFormat(cnpj){
        cnpj=cnpj.replace(/\D/g,"")
        cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
        cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
        cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
        cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
        return cnpj
      }
}