const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
  if(event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;
  
  window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyDwgCEC4YFBiHAhixAxiABDIMCAMQABhDGIAEGIoFMg8IBBAuGEMYsQMYgAQYigUyDwgFEC4YQxixAxiABBiKBTIMCAYQABhDGIAEGIoFMhIIBxAuGEMYxwEY0QMYgAQYigUyDAgIEAAYFBiHAhiABDIKCAkQABixAxiABDIKCAoQABixAxiABDIKCAsQABixAxiABDIHCAwQABiABDIQCA0QLhivARjHARi6AhiABDIMCA4QABhDGIAEGIoF0gEIMTYxNGowajmoAg6wAgHxBefkYnpGPjnG8QXn5GJ6Rj45xg&sourceid=chrome-mobile&ie=UTF-8"
}