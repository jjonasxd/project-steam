const config = document.getElementById('config')
const container = document.querySelector('.settings-container')

const formulario = document.getElementById('formulario')

const botao = document.getElementById('gerar')

const senhaxx = document.getElementById('senhaxx')

config.addEventListener('click', function config_button() {
  event.stopImmediatePropagation()
  container.style.display = 'flex'
})

document.addEventListener('click', function clicou(event) {
  if (!container.contains(event.target) && container.style.display == 'flex') {
    container.style.display = 'none'
  }
})

function formulariox(e) {
  const form = new FormData(formulario)
  const formO = Object.fromEntries(form)

  return formO
}

botao.addEventListener('click', function senha() {
  const form = formulariox()

  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let caracteresPermitidos = ""

  if (form.num == 'on') {
    caracteresPermitidos += numeros
  }

  if (form.maiusculas == 'on') {
    caracteresPermitidos += letrasMaiusculas
  }

  if (form.minusculas == 'on') {
    caracteresPermitidos += letrasMinusculas
  }

  if (form.especial == 'on') {
    caracteresPermitidos += simbolos
  }

  let senha = ""

  if (caracteresPermitidos && form.max != 0) {
      for (let i = 0; i < form.max; i++) {
        const caractere_aleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)]
        senha += caractere_aleatorio
    }
  } else {
    senha = "Coloca uma senha valida caral##"
  }
  
  senhaxx.textContent = senha
})