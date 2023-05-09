
const assembleTeam = team => {

    const managerAssemble = manager => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.fetchName()}</h2>
        <h3 class="card-title"><i class="mr-2"></i>${manager.fetchRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.fetchID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.fetchEmail()}">${manager.fetchEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.fetchOffice()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const assembleEngineer = engineer => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.fetchName()}</h2>
        <h3 class="card-title"><i class="mr-2"></i>${engineer.fetchRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.fetchID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.fetchEmail()}">${engineer.fetchEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.fetchGithub()}" target="_blank" rel="noopener noreferrer">${engineer.fetchGithub()}</a></li>
            <li class="list-group-item">Office number: ${engineer.fetchOffice()}</li>
        </ul>


        </ul>
    </div>
</div>
        `;
    };

    const assembleIntern = intern => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.fetchName()}</h2>
        <h3 class="card-title"><i class="mr-2"></i>${intern.fetchRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.fetchID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.fetchEmail()}">${intern.fetchEmail()}</a></li>
            <li class="list-group-item">School: ${intern.fetchSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.fetchRole() === "TheManager")
        .map(manager => managerAssemble(manager))
    );
    html.push(team
        .filter(employee => employee.fetchRole() === "TheEngineer")
        .map(engineer => assembleEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.fetchRole() === "TheIntern")
        .map(intern => assembleIntern(intern))
        .join("")
    );

    return html.join("");

}
