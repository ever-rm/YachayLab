const plantumlEncoder = require('plantuml-encoder');
const diagram = `
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

Container(backend, "Backend", "Node.js", "Maneja la lógica de la aplicación.") {
    Component(api, "API", "Node.js", "Maneja las solicitudes del frontend.")
    Component(authService, "Servicio de Autenticación", "Node.js", "Gestiona la autenticación de usuarios.")
    Component(courseService, "Servicio de Gestión de Cursos", "Node.js", "Controla la creación y gestión de cursos.")
}

ContainerDb(database, "Database", "PostgreSQL", "Almacena información de usuarios y cursos.")

Container(frontend, "Frontend", "React.js", "Interfaz de usuario para la plataforma.") {
    Component(ui, "Interfaz de Usuario", "React", "Donde los usuarios interactúan con el sistema.")
    Component(stateManagement, "Gestión de Estado", "Redux", "Maneja el estado de la aplicación.")
}

' Relaciones
frontend --> api : "Llama a"
api --> authService : "Autenticación"
api --> courseService : "Gestión de cursos"
api --> database : "Accede a datos"
@enduml
`;

const encoded = plantumlEncoder.encode(diagram);
console.log(`http://www.plantuml.com/plantuml/png/${encoded}`);
