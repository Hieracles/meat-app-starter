import { HOST_ATTR } from '@angular/platform-browser/src/dom/dom_renderer';
import {Routes} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


export const ROUTES : Routes = [
    {path : '', component: HomeComponent},
    {path : 'about', component: AboutComponent},
    {path : 'restaurants/:id', component: RestaurantDetailComponent,
        children : [
            {path : '', redirectTo: 'menu', pathMatch: 'full'},
            {path : 'menu', component: MenuComponent},
            {path : 'reviews', component: ReviewsComponent},
        ]
    },
    {path : 'restaurants', component: RestaurantsComponent},
];