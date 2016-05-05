using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace DynamicColumnGrid
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IMDKServices" in both code and config file together.
    [ServiceContract]
    public interface IMDKServices
    {
        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             Method = "POST")]
        List<procColumnConfigResult> getColumnsConfig();


        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             Method = "POST")]
        List<getAllStudentInfoResult> getAllStudentInfo();




        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             Method = "POST")]
        List<procColumnConfigAcademicDetailsResult> procColumnConfigAcademicDetails();


        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             Method = "POST")]
        List<getAcademicDetailsResult> getAcademicDetails();






        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             Method = "POST")]
        List<procColumnConfigPersonalDetailsResult> procColumnConfigPersonalDetails();


        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json,
             RequestFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Wrapped,
             Method = "POST")]
        List<getPersonalDetailsResult> getPersonalDetails();



    }
}
