import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';

// This annotation allows you to declare the tag you want to use using 'selector';
@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  // maintain state with multiple state variables, unlike react with a single state variable;
  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  selectedCourse = {
    title : ''
  };

  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))
    // this.courses.push({id: (new Date()).getTime() + '', title : 'New Course', editing: false});

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))
    // this.courses = this.courses.filter(c => c.id !== course.id)

  editCourse = (course) =>
    course.editing = true

  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course)
      .then(status => course.editing = false);
  }

  selectCourse = (course) =>
    this.selectedCourse = course

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
