function showsidebar() {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "flex";
  }
  function hidesidebar() {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "none";
 
  }
  

   // Load second file 
   fetch('bactive.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('bactive').innerHTML = data;
          });
