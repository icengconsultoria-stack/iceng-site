const previewUrlByTitle = {
  '18 Procedimentos Operacionais': '/previews/v3-po-kit.html',
  'Kit Instruções de Trabalho': '/previews/v3-its-kit.html',
  'Kit SST': '/previews/v3-sst-kit.html',
  'Kit ITs + Manual da Qualidade': '/previews/v3-its-mq-kit.html',
  'Kit SGQ Completo': '/previews/v3-sgq-completo-kit.html',
  'Kit SGQ Premium': '/previews/v3-sgq-premium-kit.html',
}

function bindProductPreviewLinks() {
  const section = document.getElementById('produtos')
  if (!section) return

  const buttons = Array.from(section.querySelectorAll('button')).filter((button) =>
    button.textContent?.trim().includes('Conheça o Produto'),
  )

  buttons.forEach((button) => {
    if (button.dataset.previewBound === 'true') return

    const card = button.closest('.group') || button.parentElement?.parentElement
    const title = card?.querySelector('h3')?.textContent?.trim()
    const previewUrl = title ? previewUrlByTitle[title] : null
    if (!previewUrl) return

    button.dataset.previewBound = 'true'
    button.setAttribute('title', 'Abrir apresentação do produto')
    button.addEventListener(
      'click',
      (event) => {
        event.preventDefault()
        event.stopPropagation()
        window.open(previewUrl, '_blank')
      },
      true,
    )
  })
}

function startPreviewBinding() {
  bindProductPreviewLinks()
  const observer = new MutationObserver(() => bindProductPreviewLinks())
  observer.observe(document.body, { childList: true, subtree: true })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPreviewBinding)
} else {
  startPreviewBinding()
}
