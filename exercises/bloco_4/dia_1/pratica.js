let nota = 60

if (nota > 80) {
    console.log("Parabéns, você foi aprovado!")
}
else if (nota > 60) {
    console.log("Você está na lista de espera.")
}
else {
    console.log("Você foi reprovado.")
}

let estadoCandidato = "lista"

switch (estadoCandidato) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado!")
        break

    case "lista":
        console.log("Você está na lista de espera.")
        break

    case "reprovado":
        console.log("Você foi reprovado.")
        break

    default:
        console.log("não se aplica")

}