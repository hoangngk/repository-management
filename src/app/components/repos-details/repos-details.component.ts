import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Observable } from 'rxjs';
import { Repos } from '../../models/repos.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repos-details',
  templateUrl: './repos-details.component.html',
  styleUrls: ['./repos-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposDetailsComponent implements OnInit {

  public repository: Observable<Repos>;

  constructor(
    private repositoryService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.name) {
        this.repository = this.repositoryService.details(params.name);
      }
    });
  }

  public editRepo(name: string): void {
    this.router.navigate([`/repo/${name}/edit`]);
  }
}
