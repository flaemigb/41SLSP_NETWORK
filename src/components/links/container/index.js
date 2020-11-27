import linksContainerHTML from './linksContainer.html'

export let linksContainerComponent = {
  name: 'rzs-links-container',
  config: {
    template:linksContainerHTML
  },
  enabled: true,
  appendTo: 'prm-alma-viewit-items-after',
  enableInView: '.*',
}