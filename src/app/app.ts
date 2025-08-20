import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageStateService } from './core/page-state-service/page-state-service';

@Component({
  selector: 'mh-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private pageStateService = inject(PageStateService);
  protected readonly heading$$ = this.pageStateService.heading$$;
  protected readonly metadata$$ = this.pageStateService.metadata$$;
  protected readonly isNavigationExpanded$$ = this.pageStateService.isNavigationExpanded$$;
  protected readonly currentYear = new Date().getFullYear();
}
