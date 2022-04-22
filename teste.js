import  {input , print} from './io_utils.js'

function main(){
    const n1 = Number(input('Digite um número'))
    const n2 = Number(input('Digite um número'))
    const n3 = Number(input('Digite um número'))
   
   let maior= 0
   let meio= 0
   let menor= 0
   
    if(n1>n2 && n1>n3){
        maior= n1
   
    }else if (n1<n2 && n1<n3){
        menor= n1
      
   }else{
       meio = n1
   }
   if(n2>n3 && n2<n1){
       maior = n2
   }else if (n2<n3 && n2<n1){
       menor = n2
   }else{
       meio=n2
   }
   if(n3>n2 && n3>n1){
       maior = n3
   }else if (n3<n2&& n3<n1){
       menor = n3
   
   }else{
       meio = n3
   }
   
}
   
print(`meio ${meio}`)
print(`maior ${maior}`)
   
    
main()