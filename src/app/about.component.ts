import { Component } from '@angular/core';


@Component({
    selector: 'app-about',
    template: `
    <h4 class="pt-3"><strong>{{ title }}</strong></h4>
    <section style="text-align: justify;">
        13+ years of IT experience working in developing data-driven applications using C# ASP.net, MVC, SQL Server, 
        PostgreSQL and Amazon Web Services. I have extensively worked on projects in Data Analytics involving data integration, 
        migration, profiling, extraction and reporting. My expertise lies in leveraging .NET technologies alongside 
        SQL, XML, XSLT, Python and JavaScript to create seamless end-to-end systems.
    <br><br>    
    </section>
    `,

})
export class AboutComponent{
    title = "About";
}