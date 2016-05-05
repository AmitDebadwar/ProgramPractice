using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace DynamicColumnGrid
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "MDKServices" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select MDKServices.svc or MDKServices.svc.cs at the Solution Explorer and start debugging.
    public class MDKServices : IMDKServices
    {
        public List<procColumnConfigResult> getColumnsConfig()
        {
            var db_context = new MDKDbContextDataContext();
            var db = db_context.procColumnConfig();

            var sai = db_context.StudentTableConfigWithData();

            var list = (List<procColumnConfigResult>)db.ToList();
            return list;
        }
    }

     
}
