const Experience = () => {
  const experiences = [
    {
      title: 'Consultor SAP ABAP',
      company: 'Accenture',
      duration: '3 años',
      summary: 'Desarrollo, soporte y mejora de soluciones SAP ABAP en proyectos S/4HANA, participando en entornos productivos críticos y colaborando estrechamente con áreas funcionales para asegurar la continuidad y estabilidad de los procesos de negocio.',
      responsibilities: [
        'Desarrollo de reportes ALV clásicos y OO, optimizando rendimiento y usabilidad.',
        'Creación y mantenimiento de IDocs para integración entre sistemas SAP y externos.',
        'Mantenimiento y gestión de tablas Z mediante clusters y vistas de mantenimiento.',
        'Implementación, análisis y soporte de workflows SAP.',
        'Desarrollo y consumo de servicios OData para integración con aplicaciones externas y soluciones cloud.',
        'Integración de datos mediante XML y servicios web.',
        'Análisis y resolución de incidencias en ambientes productivos (DEV / QAS / PRD).',
        'Colaboración con equipos funcionales para entender y traducir requerimientos de negocio en soluciones técnicas.'
      ],
      impact: [
        'Resolución de incidencias en productivo asegurando continuidad operativa',
        'Apoyo a áreas funcionales mediante análisis técnico-funcional'
      ]
    },
    {
      title: 'Consultor SAP BTP',
      company: 'Accenture',
      duration: '2 años',
      summary: 'Participación en proyectos de integración y desarrollo sobre SAP Business Technology Platform, orientados a soluciones cloud.',
      responsibilities: [
        'Configuración y gestión de Destinations',
        'Administración de usuarios y roles en SAP BTP Cockpit',
        'Configuración de Launchpad mediante SAP Work Zone',
        'Soporte y mantenimiento de aplicaciones cloud',
        'Participación en proyectos de interfaces para Minera'
      ],
      impact: [
        'Integración exitosa de sistemas mediante tecnologías cloud',
        'Desarrollo de soluciones escalables y seguras en SAP BTP'
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p className="experience-company">{exp.company} - {exp.duration}</p>
            
            <div className="experience-section">
              <h4>Resumen</h4>
              <p>{exp.summary}</p>
            </div>
            
            <div className="experience-section">
              <h4>Responsabilidades clave</h4>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-section">
              <h4>Impacto</h4>
              <ul>
                {exp.impact.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;