def main():
    numero_containers = int(input("Numero de containers: "))
    peso_containers = float(input("Peso container: "))

    numero_bilhetes = int(input("Numero de bilhetes: "))

    while numero_bilhetes > 0:
        dados_bilhete = input(("Digite o numero de seu bilhete e a quantidade de bagagem: "))
        dados_bilhete.split(" ")

        quantidade_bagagem = int(dados_bilhete[1])
        numero_bilhetes -= 1


    print(numero_containers)
    print(peso_containers)
    print()   
main()