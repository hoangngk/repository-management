import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from './../../models/repos.model';
import { RepositoryService } from './../../services/repository.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposListComponent implements OnInit {

  public listRepos: Observable<Repos[]>;

  constructor(
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.listRepos = this.repositoryService.list();
  }
}
