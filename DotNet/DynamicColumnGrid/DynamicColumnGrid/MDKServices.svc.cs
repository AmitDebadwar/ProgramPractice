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
        MDKDbContextDataContext db_context;

        public MDKServices()
        {
            db_context = new MDKDbContextDataContext();
        }

        /* ALL RECORS WITH ALL COLUMNS */ 
        
        public List<procColumnConfigResult> getColumnsConfig()
        {     
             return (List<procColumnConfigResult>)db_context.procColumnConfig().ToList();
        }
         
        public List<getAllStudentInfoResult> getAllStudentInfo()
        {
             return (List<getAllStudentInfoResult>)db_context.getAllStudentInfo().ToList();
        }
     
        /* ALL RECORS WITH ALL COLUMNS END*/




        /* ALL ACADEMICS RECORS*/

        public List<procColumnConfigAcademicDetailsResult> procColumnConfigAcademicDetails()
        {
            return (List<procColumnConfigAcademicDetailsResult>)db_context.procColumnConfigAcademicDetails().ToList();
        }

        public List<getAcademicDetailsResult> getAcademicDetails()
        {
            return (List<getAcademicDetailsResult>)db_context.getAcademicDetails().ToList();
        }

        /* ALL ACADEMICS RECORS END*/



        /* ALL PERSONAL RECORS*/
        public List<procColumnConfigPersonalDetailsResult> procColumnConfigPersonalDetails()
        {
            return (List<procColumnConfigPersonalDetailsResult>)db_context.procColumnConfigPersonalDetails().ToList();
        }

        public List<getPersonalDetailsResult> getPersonalDetails()
        {
            return (List<getPersonalDetailsResult>)db_context.getPersonalDetails().ToList();
        }
        /* ALL PERSONAL RECORS END*/
    }


}
