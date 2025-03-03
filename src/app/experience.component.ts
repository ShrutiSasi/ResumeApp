import { Component } from "@angular/core";
import { Experience } from "./experience.model";
import { CardComponent } from "./card.component";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'app-experience',
    template: `
    <div id="experience" class="row mt-4 p-4">
        <h4 class="text-center pt-3"><strong>{{ title }}</strong></h4>
        @for(exp of experiences; track exp){
            <app-card>
                <div placeholder1>
                    <strong class="fs-5"> {{ exp.role }} </strong> <br>
                    {{ exp.company }} <br>
                    <small> {{ exp.location }} </small> <br>
                    {{ exp.from_date | date: 'MMM yyyy' }} - {{ exp.to_date | date: 'MMM yyyy' }} <br>                    
                </div>
                <div placeholder2>
                    {{ exp.duties }}
                </div>
            </app-card>
        }
    </div>
    `,
    imports: [CardComponent, DatePipe]
})
export class ExperienceComponent{
    title = "Work Experience";
    experiences: Experience[] = [
        {
            role: 'Technology Lead',
            company: 'British Petroleum',
            location: 'Houston(TX), USA',
            from_date: new Date(2020,9),
            to_date: new Date(2023,2),
            duties: 'Developed a web-based application using C# ASP.NET MVC 4.0, Bootstrap 4 (HTML, CSS, JavaScript), and Highcharts to deliver real-time graphical representations of market data. Created data scraping algorithms and automation scripts with C# and Python to collect market data for daily trading reports, providing traders and analysts with comprehensive insights into the commodity market. Designed and implemented optimized CI/CD pipelines using Ansible and Jenkins to automate cloud provisioning and application deployment. Facilitated stakeholder meetings and acted as a liaison between business and development/data teams and provided support to other business units within the organization, resulting in improved collaboration, productivity and development of efficient processes.',               
        },
        {
            role: 'Technology Analyst',
            company: 'British Petroleum',
            location: 'Houston(TX), USA',
            from_date: new Date(2015,6),
            to_date: new Date(2020,8),
            duties: 'Designed and implemented in-house tools using Microsoft technologies, including C# (.NET Framework 4.6) and VBScript, to automate performance and regression testing, achieving an 85% improvement in testing efficiency. Led the development and testing initiatives during the migration of applications from on-premise infrastructure to AWS cloud and database transition from Oracle to PostgreSQL. Established performance benchmarks and analyzed profiling outcomes to identify and address performance bottlenecks, delivering detailed reports to optimize system performance.',               
        },
        {
            role: 'Systems Engineer',
            company: 'Infosys Ltd.',
            location: 'Bengaluru, India',
            from_date: new Date(2009,12),
            to_date: new Date(2015,6),
            duties: 'Developed SharePoint Forms-Based Authentication portal for Portfolio Reconciliation in compliance with European Market Infrastructure Regulation (EMIR) enhancing market transparency. Contributed to portal migration projects, transitioning from MOSS to SharePoint 2010, for a major U.S. energy client by leveraging Microsoft-recommended database migration methodologies. Orchestrated deployment efforts, delivering solution packages for seamless releases across test and production environments.',               
        },
    ];
}