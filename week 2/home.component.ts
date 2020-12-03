import { Component, OnInit } from '@angular/core';
import { DISH } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Promotion } from '../shared/promotion';
import { PromotionService }  from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: DISH;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService,private promotionService: PromotionService, private leaderService: LeaderService) {

   }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();
  }

}
