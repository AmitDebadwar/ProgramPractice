import { routerObj } from "./router-object";
import { HomeComponent } from './MySession/home/home.component';
import { PostsComponent } from './MySession/posts/posts.component';


describe('Routing Testing', () => {

    it('should have the route for /home', () => {
        expect(routerObj).toContain({
            path : '', component: HomeComponent
        })
    }); 

    it('should have the route for /app-posts', () => {
        expect(routerObj).toContain( { path : 'app-posts', component : PostsComponent});
    }); 

});

