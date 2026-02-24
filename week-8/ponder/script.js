const aCourse = {
  code: 'CSE121b',

  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ],

  enrollStudent: function (sectionNum) {

    // find the section
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    // if section exists
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;

      // re-render table
      renderSections(this.sections);
    }
  }
};


// fills in the course title
document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;


// template for each section row
function sectionTemplate(section) {
  return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>`;
}


// render sections into the table
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}


// display sections when page loads
renderSections(aCourse.sections);


// button click event
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});