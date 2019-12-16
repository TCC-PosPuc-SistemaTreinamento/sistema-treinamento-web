import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    loading: Boolean = false;

    constructor(private dashService: DashboardService) { }
    public dash: any;

    async ngOnInit() {
        this.loading = true;
        this.dash = await this.dashService.get();
        this.dash.allCourses = this.dash.allCourses.map(course => {
            course.evaluate = course.evaluates && course.evaluates .length > 0 ?
            (course.evaluates.reduce((acc, { rating }) => acc + rating, 0)) / course.evaluates.length : 0;
            return course;
        });
        this.loading = false;
    }
}
