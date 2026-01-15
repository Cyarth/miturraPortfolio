const Skills = () => {
  const skills = [
    { name: 'SAP ABAP', level: 2 }, // Avanzado
    { name: 'Trabajo en equipo', level: 3 }, // Avanzado
    { name: 'SAP BTP', level: 2 }, // Intermedio
    { name: 'React', level: 1 }, // Intermedio
    { name: 'JavaScript', level: 2 } // Avanzado
  ];

  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${(skill.level / 3) * 100}%` }}></div>
            </div>
            <span className="skill-label">
              {skill.level === 1 ? 'Principiante' : skill.level === 2 ? 'Intermedio' : 'Avanzado'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;