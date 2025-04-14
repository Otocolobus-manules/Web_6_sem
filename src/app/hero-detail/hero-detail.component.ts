import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {
  heroForm!: FormGroup;
  heroId!: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: [''],
      protection_from_holy_damage: [''],
      protection_from_darkness: [''],
      the_level_of_insight: [''],
      power: [''],
      isLegendary: [''],
      isIshak: ['']
    });

    this.getHero();
  }

  getHero(): void {
    this.heroId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(this.heroId)
      .subscribe(hero => {
        if (hero) {
          this.heroForm.patchValue(hero);
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const updatedHero: Hero = {
      id: this.heroId,
      ...this.heroForm.value
    };

    this.heroService.updateHero(updatedHero)
      .subscribe(() => this.goBack());
  }
}
