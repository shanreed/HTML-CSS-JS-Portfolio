
class Skill {
    constructor(domElement) {
      this.domElement = domElement;
      this.expandButton = this.domElement.querySelector('.expandButton');
      this.expandButton.textContent = 'SEE PROJECTS';
      this.expandButton.addEventListener('click', () => this.expandSkill())
    }
  
    expandSkill() {
      this.domElement.classList.toggle('skill-open')

    }
  }
  
  let skills = document.querySelectorAll('.skill');
  skills.forEach(function(domElement) {
    const showSkills = new Skill(domElement)
  
  })
