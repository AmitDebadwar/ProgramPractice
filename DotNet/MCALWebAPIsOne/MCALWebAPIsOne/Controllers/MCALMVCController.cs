using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MCALWebAPIsOne.Controllers
{
    public class MCALMVCController : Controller
    {
        //
        // GET: /MCALMVC/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public string SaveData(string data)
        {

            return "data saved";
        }

    }
}
