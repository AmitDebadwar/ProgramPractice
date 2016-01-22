
package views.html

import play.templates._
import play.templates.TemplateMagic._

import play.api.templates._
import play.api.templates.PlayMagic._
import models._
import controllers._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.api.i18n._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import views.html._
/**/
object index extends BaseScalaTemplate[play.api.templates.HtmlFormat.Appendable,Format[play.api.templates.HtmlFormat.Appendable]](play.api.templates.HtmlFormat) with play.api.templates.Template1[Form[Models.User],play.api.templates.HtmlFormat.Appendable] {

    /**/
    def apply/*1.2*/(userForm: Form[Models.User]):play.api.templates.HtmlFormat.Appendable = {
        _display_ {import helper.twitterBootstrap._

import Models.User


Seq[Any](format.raw/*1.31*/("""
"""),format.raw/*4.1*/("""
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Defect Tracking System</title>

        <link rel="stylesheet" href=""""),_display_(Seq[Any](/*13.39*/routes/*13.45*/.Assets.at("javascripts/bootstrap/dist/css/bootstrap.min.css"))),format.raw/*13.107*/("""">

        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

        <link rel="stylesheet" href=""""),_display_(Seq[Any](/*18.39*/routes/*18.45*/.Assets.at("stylesheets/main.css"))),format.raw/*18.79*/(""""/>
            <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
            <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
            <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    </head>
    <body>
<img src=""""),_display_(Seq[Any](/*27.12*/routes/*27.18*/.Assets.at("images/eye.png"))),format.raw/*27.46*/(""""/>
        <h2 class="TAG">Defect Tracking System</h2>

        <div class="container">
         """),_display_(Seq[Any](/*31.11*/helper/*31.17*/.form(action = routes.Application.login(),'role->"form",'class->"form-signin")/*31.95*/ {_display_(Seq[Any](format.raw/*31.97*/("""

            """),_display_(Seq[Any](/*33.14*/helper/*33.20*/.inputText(userForm("id"), 'id -> "userId", 'placeholder -> "Enter User ID",'class->"form-control",
                '_label -> "Login Id:",'_label_class->"col-md-2 sr-only"))),format.raw/*34.74*/("""

             """),_display_(Seq[Any](/*36.15*/for(error <- userForm("id").errors) yield /*36.50*/ {_display_(Seq[Any](format.raw/*36.52*/("""
                 <p>sai</p>
             """)))})),format.raw/*38.15*/("""


            """),_display_(Seq[Any](/*41.14*/helper/*41.20*/.inputPassword(userForm("password"), 'id -> "userPassword", 'placeholder -> "Password",'class->"form-control",
                '_label -> "Password:",'_label_class->"col-md-2 sr-only"))),format.raw/*42.74*/("""

             <div class="col-md-9">
                In case if you forgot the password, click the <a href="fld">Forgot password</a> link or contact administrator.
             </div>


<div class="row">
            <button class="btn pull-right btn-lg btn-primary" type="submit">Sign in</button>
</div>

        """)))})),format.raw/*53.10*/("""
         </div>

        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
        <script src=""""),_display_(Seq[Any](/*58.23*/routes/*58.29*/.Assets.at("javascripts/bootstrap/dist/js/bootstrap.min.js"))),format.raw/*58.89*/(""""></script>
    </body>
</html>"""))}
    }
    
    def render(userForm:Form[Models.User]): play.api.templates.HtmlFormat.Appendable = apply(userForm)
    
    def f:((Form[Models.User]) => play.api.templates.HtmlFormat.Appendable) = (userForm) => apply(userForm)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Fri Jan 22 06:20:56 IST 2016
                    SOURCE: D:/MyCode/GitHubRepository_ProgramPractice/ProgramPractice.git/trunk/Java/PlayProjects/DTS/app/views/index.scala.html
                    HASH: af0df4fb65167dafc63402ec7d7cb2faa1ec663b
                    MATRIX: 785->1|963->30|991->88|1336->397|1351->403|1436->465|1679->672|1694->678|1750->712|2234->1160|2249->1166|2299->1194|2438->1297|2453->1303|2540->1381|2580->1383|2633->1400|2648->1406|2844->1580|2898->1598|2949->1633|2989->1635|3066->1680|3121->1699|3136->1705|3343->1890|3701->2216|3932->2411|3947->2417|4029->2477
                    LINES: 26->1|32->1|33->4|42->13|42->13|42->13|47->18|47->18|47->18|56->27|56->27|56->27|60->31|60->31|60->31|60->31|62->33|62->33|63->34|65->36|65->36|65->36|67->38|70->41|70->41|71->42|82->53|87->58|87->58|87->58
                    -- GENERATED --
                */
            