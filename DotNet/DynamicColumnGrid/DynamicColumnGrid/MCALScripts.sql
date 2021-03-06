use MCALDB;

 CREATE TABLE [dbo].[tblColumnConfig](
	[ColumnName] [nvarchar](50) NULL,
	[ColumnType] [nvarchar](50) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'StudentRoll', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'StudentName', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Math', N'number')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Chemisty', N'number')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'ContactNumber', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'EmailID', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Address', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Physics', N'number')
/****** Object:  Table [dbo].[StudentInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentInfo](
	[StudentRoll] [nvarchar](50) NULL,
	[StudentName] [nvarchar](50) NULL,
	[Math] [int] NULL,
	[Chemistry] [int] NULL,
	[Physics] [int] NULL,
	[ContactNumber] [nvarchar](50) NULL,
	[EmailId] [nvarchar](50) NULL,
	[Address] [nvarchar](250) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[StudentInfo] ([StudentRoll], [StudentName], [Math], [Chemistry], [Physics], [ContactNumber], [EmailId], [Address]) VALUES (N'1', N'John Cena', 95, 85, 75, N'9854578547', N'a@gmail.com', N'Pune,India')
INSERT [dbo].[StudentInfo] ([StudentRoll], [StudentName], [Math], [Chemistry], [Physics], [ContactNumber], [EmailId], [Address]) VALUES (N'2', N'Rocky Jackson', 75, 55, 45, N'9874152145', N'b@gmail.com', N'MP, India')
/****** Object:  Table [dbo].[PersonInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/****** Object:  StoredProcedure [dbo].[procColumnConfig]    Script Date: 05/05/2016 20:08:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		 Amit D
-- Create date:  
-- Description: 
-- =============================================
CREATE PROCEDURE [dbo].[procColumnConfig]
 
	 
AS
BEGIN
 
	SET NOCOUNT ON;
    SELECT  * from [MCALDB].[dbo].[tblColumnConfig]
END
GO
/****** Object:  StoredProcedure [dbo].[StudentTableConfigWithData]    Script Date: 05/05/2016 20:08:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE  [dbo].[StudentTableConfigWithData]
	 
AS
BEGIN
	 
	SET NOCOUNT ON;
   
	SELECT  [StudentRoll]
      ,[StudentName]
      ,[Math]
      ,[Chemistry]
      ,[Physics]
      ,[ContactNumber]
      ,[EmailId]
      ,[Address]
  FROM [MCALDB].[dbo].[StudentInfo]
  
  
  SELECT   [ColumnName]
      ,[ColumnType]
  FROM [MCALDB].[dbo].[tblColumnConfig]
  
END
GO
 