const Projects = () => {
  const abapProjects = [
    {
      title: 'Implementaciones y mejoras ABAP para S/4HANA',
      context:
        'Desarrollo y soporte de soluciones ABAP en escenarios operativos y de negocio.',
      tasks: [
        'Desarrollo de reportes ALV (clásico y OO) y mejoras evolutivas.',
        'Integraciones mediante IDoc y procesamiento de datos con XML.',
        'Consumo y exposición de servicios OData.',
        'Mantenimiento de tablas Z (clusters/vistas) y ajustes funcional–técnicos.',
        'Soporte a incidentes en productivo y corrección de errores críticos.'
      ],
      technologies: 'ABAP OO, ALV, IDoc, OData, XML, S/4HANA'
    },
    {
      title: 'Soporte productivo y continuidad operativa',
      context:
        'Correcciones y mejoras en ambientes productivos, priorizando estabilidad.',
      tasks: [
        'Análisis de fallas y corrección de incidencias en procesos críticos.',
        'Ajustes de lógica de validación y mejoras de performance.',
        'Coordinación de pruebas y control de cambios con equipos funcionales.',
        'Gestión de transportes y despliegues (DEV/QAS/PRD).'
      ],
      technologies: 'ABAP, debugging, SAP GUI/ADT, transportes'
    },
    {
      title: 'Automatizaciones y workflows',
      context:
        'Implementación y análisis de workflows SAP para procesos internos.',
      tasks: [
        'Soporte y ajustes sobre workflows existentes.',
        'Análisis de eventos, aprobaciones y trazabilidad.',
        'Mejoras para robustez y control de errores.'
      ],
      technologies: 'Workflow SAP, ABAP, integración con procesos'
    }
  ];

  const btpProjects = [
    {
      title: 'Integración SAP BTP entre sistemas (Cloud + On-Prem)',
      context: 'Integraciones y conectividad para escenarios híbridos.',
      tasks: [
        'Configuración y administración de Destinations.',
        'Gestión de conectividad y endpoints para consumo de servicios.',
        'Soporte y mantenimiento de aplicaciones y servicios cloud.',
        'Acompañamiento en pruebas y resolución de issues de conexión/autenticación.'
      ],
      technologies: 'SAP BTP, Destinations, APIs, conectividad'
    },
    {
      title: 'Administración de seguridad y accesos en BTP',
      context: 'Gestión de accesos y permisos para entornos cloud.',
      tasks: [
        'Creación y administración de usuarios.',
        'Creación/modificación de roles y autorizaciones desde BTP Cockpit.',
        'Ajustes de permisos para despliegue y consumo de apps/servicios.'
      ],
      technologies: 'SAP BTP Cockpit, roles, autorización'
    },
    {
      title: 'Launchpad en SAP Work Zone',
      context: 'Publicación y administración de accesos a aplicaciones.',
      tasks: [
        'Configuración del Launchpad mediante SAP Work Zone.',
        'Organización de apps, catálogos/grupos y acceso por rol.',
        'Soporte a usuarios y mejora de navegación/estructura.'
      ],
      technologies: 'SAP Work Zone, Launchpad, BTP'
    }
  ];

  return (
    <section id="projects">
      <h2>Proyectos SAP ABAP - BTP</h2>

      <div className="project-group">
        <h3>Proyectos SAP ABAP</h3>
        <div className="projects-grid">
          {abapProjects.map((p, i) => (
            <article key={`abap-${i}`} className="project-card">
              <h4 className="project-title">{p.title}</h4>
              <p className="project-context"><strong>Contexto:</strong> {p.context}</p>
              <div className="project-tasks">
                <strong>Contribuciones clave:</strong>
                <ul>
                  {p.tasks.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
              <p className="project-tech"><strong>Tecnologías:</strong> {p.technologies}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="project-group">
        <h3>Proyectos SAP BTP</h3>
        <div className="projects-grid">
          {btpProjects.map((p, i) => (
            <article key={`btp-${i}`} className="project-card">
              <h4 className="project-title">{p.title}</h4>
              <p className="project-context"><strong>Contexto:</strong> {p.context}</p>
              <div className="project-tasks">
                <strong>Contribuciones clave:</strong>
                <ul>
                  {p.tasks.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
              <p className="project-tech"><strong>Tecnologías:</strong> {p.technologies}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;