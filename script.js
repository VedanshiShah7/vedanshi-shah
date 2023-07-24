<script>
  // Load header dynamically using JavaScript
  document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const headerContainer = document.createElement("div");
        headerContainer.innerHTML = xhr.responseText;
        document.body.insertBefore(headerContainer, document.body.firstChild);
      }
    };
    xhr.send();
  });
</script>
