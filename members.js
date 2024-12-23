function skillsMember(): void {
  const members = document.querySelectorAll('.member');
  members.forEach((member) => {
    const memberSkills = member.querySelector('.member__skills');
    const memberSkillsList = memberSkills?.querySelector('.member__skills__list');
    const memberSkillsItems = memberSkillsList?.querySelectorAll('.member__skills__item');
    const memberSkillsItemsArray = Array.from(memberSkillsItems);

    memberSkillsItemsArray.sort(() => Math.random() - 0.5);

    memberSkillsItemsArray.forEach((item) => {
      memberSkillsList?.appendChild(item);
    });
  });
}