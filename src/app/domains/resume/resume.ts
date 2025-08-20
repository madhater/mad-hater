import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResumeSection } from './resume-section/resume-section';

@Component({
  selector: 'mh-resume',
  imports: [ResumeSection],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Resume {

}
