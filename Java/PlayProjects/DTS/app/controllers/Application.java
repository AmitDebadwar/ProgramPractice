package controllers;

import Models.User;
import play.*;
import play.data.Form;
import play.mvc.*;

import views.html.*;

import static play.data.Form.form;

public class Application extends Controller {

    static Form<User> userForm=form(User.class);

    public static Result index() {
        return ok(index.render(userForm));
    }

    public static Result login(){




        return TODO;
    }

}
