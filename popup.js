document.addEventListener('DOMContentLoaded', function () {
  const $setIconActions = document.querySelectorAll('[data-js=set-icon]');
  const $copyIconActions = document.querySelectorAll('[data-js=copy-icon]');

  const getIcon = (actionBtn) => actionBtn.closest('[data-js=icon-action-item]').id;

  [...$setIconActions].forEach(($item) => {
    const icon = getIcon($item)
    $item.addEventListener('click', () => {
      chrome.tabs.query(
        {currentWindow: true, active: true},
        function (tabs) {
          const activeTab = tabs[0]
          chrome.tabs.sendMessage(activeTab.id, {
            action: 'set-icon',
            data: icon
          })
        })
    })
  });

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {
      alert('Copy Error:' + e)
    }
  }

  [...$copyIconActions].forEach(($item) => {
    const icon = getIcon($item);
    $item.addEventListener('click', () => {
      copyToClipboard(icon)
    })
  })

}, false);
