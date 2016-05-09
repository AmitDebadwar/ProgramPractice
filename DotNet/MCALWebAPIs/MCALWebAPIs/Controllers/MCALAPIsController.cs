using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MCALWebAPIs.Controllers
{
    public class MCALAPIsController : ApiController
    {
        [HttpGet]
        public string GetString()
        {
            return "saibaba";
        }
    }
}
