import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name: 'joinWithPipe',
    standalone: true,
})
export class JoinWithPipe implements PipeTransform{
    transform(value: any[], delimiter: string = ' | '): string {
        return value.join(delimiter);
    }

}