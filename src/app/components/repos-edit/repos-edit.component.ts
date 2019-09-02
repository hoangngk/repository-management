import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Repos } from '../../models/repos.model';

@Component({
  selector: 'app-repos-edit',
  templateUrl: './repos-edit.component.html',
  styleUrls: ['./repos-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposEditComponent implements OnInit, OnDestroy {

  public repository$: Subscription;
  public name: FormControl;
  public description: FormControl;
  public form: FormGroup;
  public submitted = false;

  constructor(
    private repositoryService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.name) {
        this.buildForm();
        this.repository$ = this.repositoryService.details(params.name)
          .subscribe(repo => {
            this.setValueForm(repo.name, repo.description);
          });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.repository$) {
      this.repository$.unsubscribe();
    }
  }

  public save(): void {
    this.submitted = true;
    if (this.form.valid) {
      // Call to service and save the changes
      alert(`Your repo ${this.name.value} will be updated soon!`);
      this.router.navigate(['/']);
    }
  }

  private buildForm(): void {
    this.name = new FormControl(null, Validators.required);
    this.description = new FormControl(null, Validators.required);
    this.form = this.formBuilder.group({
      name: this.name,
      description: this.description
    });
  }

  private setValueForm(name?: string, description?: string): void {
    this.name.setValue(name);
    this.description.setValue(description);
  }
}
