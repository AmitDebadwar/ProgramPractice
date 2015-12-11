using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;
using System.IO;

namespace MyBackupApp
{
    class Program
    {
        
        static void Main(string[] args)
        {
            string source = ConfigurationManager.AppSettings["source"];
            string dest = ConfigurationManager.AppSettings["dest"];
            string description=null;
          

            try
            {

                Console.WriteLine("Please enter description: ");
                description = Console.ReadLine();


               var sourceDirectory = new DirectoryInfo(source);
               int currentNumber= Directory.GetDirectories(dest).Length;
               dest = dest + "\\" + currentNumber++ + " "+description;

                var targetDirectory = new DirectoryInfo(dest);

                FileHelper.BackupDirectoryTo(sourceDirectory, targetDirectory);
                Console.WriteLine("Backup complete !");

            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

          
            Console.Read();
        }

   

    }

    public static class FileHelper
    {

        public static void BackupDirectoryTo(this DirectoryInfo sourceDirectory, DirectoryInfo targetDirectory)
        {
            if (!sourceDirectory.Exists)
            {
                return;
            }

            if (!targetDirectory.Exists)
            {
                targetDirectory.Create();
            }

            if (sourceDirectory == targetDirectory)
            {
                return;
            }

            //Get all the files from source directory and copy them to target directory
            FileInfo[] files = sourceDirectory.GetFiles();
            foreach (FileInfo file in files)
            {
                file.CopyTo(Path.Combine(targetDirectory.FullName, file.Name), true);

            }

            //Get all the directories from source directory and copy them to target directory
            //with all the files contained in them recursively
            DirectoryInfo[] directories = sourceDirectory.GetDirectories();
            List<DirectoryInfo> filteredDirectories = new List<DirectoryInfo>();
            foreach (DirectoryInfo d in directories)
            {
                if (d.ToString() != targetDirectory.Name.ToString())
                {
                    if (!(d.Name.Contains(".gradle")) && !(d.Name.Contains(".idea")) && !(d.Name.Contains(".svn")) && !(d.Name.Contains("build")))
                     filteredDirectories.Add(d);
                }
            }
            //List<DirectoryInfo> filteredDirectories = directories.Where(d => d.ToString() != targetDirectory.ToString()).ToList();

            foreach (DirectoryInfo directory in filteredDirectories)
            {
                // Get destination directory.
                string destinationDirectory = Path.Combine(targetDirectory.FullName, directory.Name);

                // Call CopyDirectoryTo() recursively.
                CopyDirectoryTo(directory, new DirectoryInfo(destinationDirectory));

            }
        }

        public static void CopyDirectoryTo(this DirectoryInfo sourceDirectory, DirectoryInfo targetDirectory)
        {
            if (!sourceDirectory.Exists)
            {
                return;
            }

            if (!targetDirectory.Exists)
            {
                targetDirectory.Create();
            }

            //Get all the files from source directory and copy them to target directory
            FileInfo[] files = sourceDirectory.GetFiles();
            foreach (FileInfo file in files)
            {
                file.CopyTo(Path.Combine(targetDirectory.FullName, file.Name), true);

            }

            //Get all the directories from source directory and copy them to target directory
            //with all the files contained in them recursively
            DirectoryInfo[] directories = sourceDirectory.GetDirectories();

            foreach (DirectoryInfo directory in directories)
            {
                // Get destination directory.
                string destinationDirectory = Path.Combine(targetDirectory.FullName, directory.Name);

                // Call CopyDirectoryTo() recursively.
                CopyDirectoryTo(directory, new DirectoryInfo(destinationDirectory));
            }
        }


    }//end class
}
