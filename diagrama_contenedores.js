const plantumlEncoder = require('plantuml-encoder');
const diagram = `
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

System_Boundary(YachayLab, "YachayLab Platform") {
    Container(frontend, "Frontend", "React.js", "Interfaz de usuario para los estudiantes y profesores.")
    Container(backend, "Backend", "Node.js", "Gestiona la lógica de la plataforma y las API.")
    ContainerDb(database, "Database", "PostgreSQL", "Almacena información sobre usuarios, cursos, etc.")
    Container(docker, "Docker", "Docker", "Gestión de contenedores para cada componente de la aplicación.")
}

Person(user, "Usuario", "Interactúa con el sistema")
System_Ext(github, "GitHub", "Gestiona el código del proyecto YachayLab.")

user --> frontend : "Usa para acceder al sistema"
frontend --> backend : "Envía solicitudes para gestionar cursos y usuarios"
backend --> database : "Lee y escribe datos"
backend --> github : "Integra código"
backend --> docker : "Corre contenedores para ejecutar los servicios"
@enduml
`;

const encoded = plantumlEncoder.encode(diagram);
console.log(`http://www.plantuml.com/plantuml/png/${encoded}`);
