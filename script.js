function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var toggleBtn = document.getElementById("toggleBtn");
    var closeBtn = document.getElementById("closeBtn");
    var showBtn = document.getElementById("showBtn");

    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      toggleBtn.style.display = "block";
      closeBtn.style.display = "none";
      showBtn.style.display = "none";
    } else {
      sidebar.style.width = "250px";
      toggleBtn.style.display = "none";
      closeBtn.style.display = "block";
      showBtn.style.display = "none";
    }
  }

  function openSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var toggleBtn = document.getElementById("toggleBtn");
    var closeBtn = document.getElementById("closeBtn");
    var showBtn = document.getElementById("showBtn");

    sidebar.style.width = "250px";
    toggleBtn.style.display = "none";
    closeBtn.style.display = "block";
    showBtn.style.display = "none";
  }

  function closeSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var toggleBtn = document.getElementById("toggleBtn");
    var closeBtn = document.getElementById("closeBtn");
    var showBtn = document.getElementById("showBtn");

    sidebar.style.width = "0";
    toggleBtn.style.display = "none";
    closeBtn.style.display = "none";
    showBtn.style.display = "block";
  }