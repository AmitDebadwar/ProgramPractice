import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { of, Observable, empty, Subject } from 'rxjs';
import { CommentsComponent } from '../comments/comments.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { Router, ActivatedRoute } from '@angular/router';

describe('Post Component Testing', () => {
    let fixture: ComponentFixture<PostsComponent>;
    let component: PostsComponent;


    class RouterStub {
        navigate(param){

        }
    }

    class ActivatedRouteStub{
        private subject = new Subject();

        push(value){
            this.subject.next(value);
        }

        get params(){
            return this.subject.asObservable();
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpClientTestingModule],
            declarations: [PostsComponent, CommentsComponent, FavoriteComponent],
            providers:[
                {
                    provide : Router,
                    useClass : RouterStub
                },
                {
                    provide : ActivatedRoute,
                    useClass : ActivatedRouteStub
                }
            ]
        });

        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should load all the posts from the server', () => {
        let service: PostsService = TestBed.get(PostsService);

        spyOn(service, 'getAll').and.returnValue(of([
           1,2,3
        ]));

        /**
         * ngOnInit will be called once fixture.detectChanges() is
         */
        fixture.detectChanges();

        expect(component.allPosts.length).toBe(3);


    });
 
    it('should navigate the user to not found page', () => {
        
         
        let router = TestBed.get(Router);
        let spy = spyOn(router, 'navigate');

        let route : ActivatedRouteStub = TestBed.get(ActivatedRoute);
        route.push({id : 0});

        component.navigateToPostDetails();
        expect(spy).toHaveBeenCalledWith(['/home'])

    }); 



});