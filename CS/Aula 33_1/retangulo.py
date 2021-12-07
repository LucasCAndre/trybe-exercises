class retangulo:
  def __init__(self, lado_um, lado_dois):
    self.lado_um = lado_um
    self.lado_dois = lado_dois
  
  def calcula_area(self):
    return f'{(self.lado_dois * self.lado_um)} metros quadrados'

  def calcular_perimetro(self):
    return f'{((2 * self.lado_dois) + (2 * self.lado_um))} metros'
    

meu_retangulo = retangulo(10, 30)

print(meu_retangulo)
print(meu_retangulo.calcula_area())
print(meu_retangulo.calcular_perimetro())