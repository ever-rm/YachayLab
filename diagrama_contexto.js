const plantumlEncoder = require('plantuml-encoder');
const diagram = `
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

Person(user, "Usuario", "Usuario de la plataforma")
System(system, "YachayLab", "Plataforma de aprendizaje")

user --> system : Interacción
@enduml
`;

const encoded = plantumlEncoder.encode(diagram);
console.log(`http://www.plantuml.com/plantuml/png/${encoded}`);
