(function () {
  const $titleInput = document.getElementById("id_title");

  chrome.runtime.onMessage.addListener(
    function(request) {
      const {action, data} = request

      if( action === "set-icon" ) {
        $titleInput.value = data + $titleInput.value ;
      }
    }
  );
})()
