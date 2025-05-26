let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
/* */
// Hover Preview for Timeline
const tableRows = document.querySelectorAll(".achievement-table tbody tr");
const hoverBox = document.getElementById("table-hover-preview");
const hoverImg = document.getElementById("table-preview-img");

tableRows.forEach(row => {
  row.addEventListener("mouseover", (e) => {
    const imgSrc = row.getAttribute("data-img");
    if (imgSrc) {
      hoverImg.src = imgSrc;
      hoverBox.style.display = "block";
    }
  });

  row.addEventListener("mousemove", (e) => {
    hoverBox.style.left = e.pageX + 20 + "px";
    hoverBox.style.top = e.pageY - 20 + "px";
  });

  row.addEventListener("mouseout", () => {
    hoverBox.style.display = "none";
  });
});

const seeMoreBtn = document.getElementById('see-more-btn');
const seeLessBtn = document.getElementById('see-less-btn');
const hiddenRows = document.querySelectorAll('.hidden-row');

seeMoreBtn.addEventListener('click', () => {
  hiddenRows.forEach(row => row.style.display = 'table-row');
  seeMoreBtn.style.display = 'none';
  seeLessBtn.style.display = 'inline-block';
});

seeLessBtn.addEventListener('click', () => {
  hiddenRows.forEach(row => row.style.display = 'none');
  seeLessBtn.style.display = 'none';
  seeMoreBtn.style.display = 'inline-block';
});


  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        item.style.display =
          filter === "all" || item.classList.contains(filter)
            ? "block"
            : "none";
      });
    });
  });
