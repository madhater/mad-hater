import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'mh-resume-section',
  imports: [],
  templateUrl: './resume-section.html',
  styleUrl: './resume-section.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeSection {
  public readonly date$$ = input.required<string>({ alias: 'date' });
  public readonly title$$ = input.required<string>({ alias: 'title' });
  public readonly location$$ = input.required<string>({ alias: 'location' });
}
