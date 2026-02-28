name: "🐛 Bug Report | Reporte de Erro | Bug Report"
description: "Report a bug in English, Español ou Galego"
title: "[BUG]: "
labels: ["bug"]

body:

  - type: markdown
    attributes:
      value: |
        ## 🌍 Language | Idioma | Lingua
        
        Please fill in the form in the language you prefer.
        Por favor, completa o formulario no idioma que prefiras.
        Por favor, complete o formulario no idioma que prefira.

  - type: dropdown
    id: language
    attributes:
      label: 🌐 Select Language | Selecciona Idioma | Selecciona Lingua
      options:
        - English
        - Español
        - Galego
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: 📝 Description | Descripción | Descrición
      description: |
        EN: Clearly describe the issue.
        ES: Describe claramente el problema.
        GL: Describe claramente o problema.
      placeholder: |
        EN: What happened?
        ES: ¿Qué ocurrió?
        GL: Que ocorreu?
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: 🔁 Steps to Reproduce | Pasos para reproducir | Pasos para reproducir
      description: |
        EN: Provide the steps to reproduce the issue.
        ES: Detalla los pasos para reproducir el error.
        GL: Detalla os pasos para reproducir o erro.
      placeholder: |
        1. Go to / Ir a / Ir a...
        2. Click on / Hacer clic en / Facer clic en...
        3. Observe the error / Ver el error / Ver o erro...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: ✅ Expected Behavior | Comportamiento esperado | Comportamento esperado
      description: |
        EN: What did you expect to happen?
        ES: ¿Qué esperabas que ocurriera?
        GL: Que esperabas que ocorrera?
    validations:
      required: true

  - type: dropdown
    id: severity
    attributes:
      label: ⚠️ Severity | Severidad | Severidade
      options:
        - Low | Baja | Baixa
        - Medium | Media | Media
        - High | Alta | Alta
        - Critical | Crítica | Crítica
    validations:
      required: true

  - type: input
    id: os
    attributes:
      label: 💻 Operating System | Sistema Operativo | Sistema Operativo
      placeholder: "Windows 11 / macOS / Ubuntu 22.04"
    validations:
      required: true

  - type: input
    id: browser
    attributes:
      label: 🌐 Browser | Navegador | Navegador
      placeholder: "Chrome 121 / Firefox 122 / Safari 17"
    validations:
      required: false

  - type: input
    id: version
    attributes:
      label: 📦 Project Version | Versión del proyecto | Versión do proxecto
      placeholder: "v1.2.3"
    validations:
      required: true

  - type: textarea
    id: logs
    attributes:
      label: 📋 Logs / Error Messages | Logs / Mensajes de error | Logs / Mensaxes de erro
      description: |
        EN: Paste any relevant logs.
        ES: Pega cualquier log relevante.
        GL: Pega calquera log relevante.
      render: shell
    validations:
      required: false

  - type: checkboxes
    id: terms
    attributes:
      label: 📌 Confirmation | Confirmación | Confirmación
      options:
        - label: |
            EN: I have searched for existing issues.
            ES: He buscado issues existentes.
            GL: Busquei issues existentes.
          required: true