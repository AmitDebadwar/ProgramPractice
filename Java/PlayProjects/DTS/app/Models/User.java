package Models;

import play.data.validation.Constraints;
import play.db.ebean.Model;



/**
 * Created by SaiRahem on 07/01/2016.
 */
public class User extends Model {

    @Constraints.Required

    String id;
    String password;

    public String validate(){
        if(authenticate(id)==true){
            return null;
        }
        return "sai";
    }

    private boolean authenticate(String id) {
        if(id=="" || id==" " || id==null)
            return true;
        return false;

    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
