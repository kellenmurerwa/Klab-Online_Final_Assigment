// name: The name of the project.
// description: A short description of the project.
// technologyUsed: An array of technologies used in the project.
// year: The year the project was created.

let projects =  [
    {
        

    name : 'FRESHLi',
    description : 'FRESHLi is a platform that empowers Rwandan farmers by allowing them to showcase their products and connect directly with buyers.',
    technologyUsed :'node js, express js, HTML, CSS, MySQL',
    year :2024
},

// 2nd project
{
    name : 'MyPortfolio',
    description : 'A personal branding website',
    technologyUsed :'HTML, CSS',
    year : 2024
},

// 3rd project

{
    name : 'CodeQuintets E-commerce checkout form',
    description : 'It is an E-commerce checkout form designed to collect customer details',
    technologyUsed :'JavaScript, CSS, HTML',
    year : 2024
},

]

projects.map((project)=>
    { 
        console.log('Project Name: '+ project.name);
        console.log('Description: ' + project.description);
        console.log('Technology Used: '+ project.technologyUsed);
        console.log('Year: ' + project.year);
        console.log('-----------------------------------------------------------------');
        console.log('\n');

            

    }
)