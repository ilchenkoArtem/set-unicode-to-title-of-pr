(function () {
  const $titleInput = document.getElementById("id_title");
  const $fromBranch = document.querySelector(".select2-chosen");

  const STATUSES = {
    WFER: '⚡',
    WFR: '🍭',
    WFMR: '🧸',
    WFB: '🚧'
  }

  const fromBranch = $fromBranch.textContent;
  const initTitleValue = $titleInput.value;
  let newTitleValue = initTitleValue.replace(/.*:\s?/i, '');

  if (
    (fromBranch.startsWith('main/') || fromBranch.startsWith('bug/'))
    && !newTitleValue.includes(STATUSES.WFER)) {
    newTitleValue = STATUSES.WFER + newTitleValue
  }

  if (initTitleValue !== newTitleValue) {
    $titleInput.value = newTitleValue
  }


  chrome.runtime.onMessage.addListener(
    function(request) {
      const {action, data} = request

      if( action === "set-icon" ) {
        $titleInput.value = data + $titleInput.value ;
      }
    }
  );
})()
