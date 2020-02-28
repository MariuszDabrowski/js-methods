// -----------------
// Populate the data
// -----------------

const wrapper = document.querySelector('.wrapper');

data.forEach(section => {
  const structure = `
    <div class="section">
      <h2 class="section__heading">${section.category}</h2>

      ${section['sub-categories'].map(subSection => {
          return `
          <div class="sub-section">
            <div class="sub-section__heading sub-section__heading--${subSection['sub-category'].toLowerCase()}">${subSection['sub-category']}</div>
            <ul class="term-list">

              ${subSection.methods.map(method => {
                return `
                <li class="term-list__item">
                  <a href="${method.link}" target="_blank" class="item">${method.title}</a>
                </li>`}).join('')}

            </ul>
          </div>`}).join('')}

    </div>
  `;

  wrapper.innerHTML += structure;
});
