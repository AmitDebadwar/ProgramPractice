using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace MCALWebAPIs.Controllers
{
    public class MCALAPIsController : ApiController
    {
       
        public JsonResult getStudents()
        {

            NameValueCollection nvc = HttpUtility.ParseQueryString(Request.RequestUri.Query);

            int take = int.Parse(nvc["take"]);
            int skip = int.Parse(nvc["skip"]);

            var list = new List<StudentInfo>() { 
          
            new StudentInfo(){ RollNo="1", Name="Rajesh"},
            new StudentInfo(){ RollNo="2", Name="Mahesh"},
            new StudentInfo(){ RollNo="3", Name="Om"},
            new StudentInfo(){ RollNo="4", Name="Disha"},
            new StudentInfo(){ RollNo="5", Name="Rahul"},
            
            new StudentInfo(){ RollNo="6", Name="Aniket"},
            new StudentInfo(){ RollNo="7", Name="Vijaya"},
            new StudentInfo(){ RollNo="8", Name="Rajeshwar"},
            new StudentInfo(){ RollNo="9", Name="Ganesh"},
            new StudentInfo(){ RollNo="10", Name="Mudra"},
            
            new StudentInfo(){ RollNo="11", Name="Manjusha"},
            new StudentInfo(){ RollNo="12", Name="Pankaj"},
            new StudentInfo(){ RollNo="13", Name="Pooja"},
            new StudentInfo(){ RollNo="14", Name="Suresh"},
            new StudentInfo(){ RollNo="15", Name="Jaya"},
            };


            var sorted = list.Skip(skip).Take(take);


            var n = new JsonResult()
            {
                Data = sorted,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                MaxJsonLength = list.Count
            };



            return n;

        }
    }

    public class StudentInfo
    {
        public string RollNo { get; set; }
        public string Name { get; set; }
    }


}
