using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;

namespace MyBackupApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string sValue = ConfigurationManager.AppSettings["BatchFile"];
        }

    }
}
